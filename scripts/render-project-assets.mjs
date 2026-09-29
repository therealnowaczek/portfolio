import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const mapPath = path.join(process.cwd(), "scripts", "project-assets.json");
const PROJECT_ASSETS = JSON.parse(fs.readFileSync(mapPath, "utf8"));

const ROOT = path.join(process.cwd(), "public", "projects");
const TMP = path.join(process.cwd(), ".tmp-project-html");
fs.mkdirSync(TMP, { recursive: true });

/** Artboards ≥ this width are treated as desktop SaaS, not phones. */
const DESKTOP_MIN_WIDTH = 900;
/** Capture phones at iPhone Pro Max logical size so layouts aren't cramped at 390. */
const MOBILE_WIDTH = 430;
const MOBILE_HEIGHT = 932;
/**
 * Portfolio desktop capture — 1600×900 @2x (exact 16:9).
 * Smaller than Full HD so UI reads larger in mosaic/modal; still wide enough
 * for dense enterprise chrome. Matches ScreenFrame aspect-video.
 */
const DESKTOP_WIDTH = 1600;
const DESKTOP_HEIGHT = 900;

const onlySlug = process.argv.find((a) => a.startsWith("--slug="))?.slice(7);
const desktopOnly = process.argv.includes("--desktop");
const mobileOnly = process.argv.includes("--mobile");

function isDesktop(asset) {
  return asset.width >= DESKTOP_MIN_WIDTH;
}

function viewportFor(asset) {
  if (isDesktop(asset)) {
    return {
      width: DESKTOP_WIDTH,
      height: DESKTOP_HEIGHT,
      scale: 2,
      kind: "desktop-showcase",
    };
  }
  return {
    width: MOBILE_WIDTH,
    height: MOBILE_HEIGHT,
    scale: 3,
    kind: "mobile",
  };
}

async function downloadHtml(url, dest) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-export/1.0)" },
  });
  if (!res.ok) throw new Error(`HTML ${res.status} ${url.slice(0, 80)}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

/**
 * Folio Feed chips: remote HTML often lags local edits. After download, force
 * single-line tab pills (whitespace-nowrap + flex-shrink-0) and Material
 * Symbol `spa` for First Looks — never `spark` (ligatures to spa + literal "RK").
 */
function patchFolioHtml(htmlPath) {
  let html = fs.readFileSync(htmlPath, "utf8");
  const before = html;
  html = html.replaceAll(">spark</span>", ">spa</span>");
  html = html.replace(
    /<button class="(tab-pill[^"]*)"/g,
    (full, cls) => {
      const extras = [];
      if (!cls.includes("whitespace-nowrap")) extras.push("whitespace-nowrap");
      if (!cls.includes("flex-shrink-0")) extras.push("flex-shrink-0");
      if (!extras.length) return full;
      return `<button class="${cls} ${extras.join(" ")}"`;
    },
  );
  if (html !== before) fs.writeFileSync(htmlPath, html);
}

/**
 * Anonymize product chrome for gallery cases (Stitch CDN can lag edit_screens).
 * OKRs / Gantt only — never rewrite Impact/CV copy.
 */
function scrubCaseBrandHtml(htmlPath, productName) {
  let html = fs.readFileSync(htmlPath, "utf8");
  const before = html;
  html = html
    .replaceAll("BigPicture OKR Module", productName)
    .replaceAll("BigPicture OKR", productName)
    .replaceAll("BigPicture Enterprise", productName)
    .replaceAll("BigPicture", productName)
    .replaceAll("Meridian PPM", productName)
    .replaceAll("Meridian Precision", productName)
    .replaceAll("Meridian", productName)
    .replaceAll("EnterpriseHub", productName);
  // Issue-key prefixes that leak the old product (BP-1234)
  const keyPrefix = productName === "Gantt" ? "GN" : "OK";
  html = html.replace(/\bBP-(\d+)/g, `${keyPrefix}-$1`);
  // Collapse "OKRs OKR" / "Gantt Gantt" chrome after replacements
  html = html.replace(
    new RegExp(`${productName}\\s*<span[^>]*>\\s*OKR\\s*</span>`, "g"),
    productName,
  );
  html = html.replaceAll(`${productName} OKR`, productName);
  html = html.replace(/>BP</g, `>${productName.slice(0, 2).toUpperCase()}<`);
  if (html !== before) fs.writeFileSync(htmlPath, html);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  let ok = 0;
  let fail = 0;
  let skip = 0;

  for (const [slug, assets] of Object.entries(PROJECT_ASSETS)) {
    if (onlySlug && slug !== onlySlug) continue;

    const dir = path.join(ROOT, slug);
    fs.mkdirSync(dir, { recursive: true });

    const toRender = assets.filter((asset) => {
      if (desktopOnly && !isDesktop(asset)) {
        skip++;
        return false;
      }
      if (mobileOnly && isDesktop(asset)) {
        skip++;
        return false;
      }
      return true;
    });

    // Only wipe files we are about to replace (preserve the other device class)
    for (const asset of toRender) {
      for (const ext of ["png", "jpg", "webp"]) {
        const f = path.join(dir, `${asset.file}.${ext}`);
        if (fs.existsSync(f)) fs.unlinkSync(f);
      }
    }

    for (const asset of toRender) {
      const label = `${slug}/${asset.file}`;
      try {
        const htmlPath = path.join(TMP, `${slug}-${asset.file}.html`);
        const bytes = await downloadHtml(asset.htmlUrl, htmlPath);
        if (bytes < 500) throw new Error(`HTML too small (${bytes})`);
        if (slug === "folio") patchFolioHtml(htmlPath);
        if (slug === "okrs") scrubCaseBrandHtml(htmlPath, "OKRs");
        if (slug === "gantt") scrubCaseBrandHtml(htmlPath, "Gantt");

        const vp = viewportFor(asset);
        const context = await browser.newContext({
          viewport: { width: vp.width, height: vp.height },
          deviceScaleFactor: vp.scale,
        });
        const page = await context.newPage();
        await page.goto(pathToFileURL(htmlPath).href, {
          waitUntil: "networkidle",
          timeout: 120000,
        });
        await page.waitForTimeout(900);

        // Desktop: clip to the live document width so artboard sizing
        // doesn't letterbox the 1600×900 showcase viewport.
        if (vp.kind === "desktop-showcase") {
          await page.evaluate(() => {
            document.documentElement.style.width = "100%";
            document.body.style.width = "100%";
            document.body.style.minWidth = "0";
            document.body.style.maxWidth = "100%";
            document.body.style.overflowX = "hidden";
          });
          await page.waitForTimeout(200);
        }

        const out = path.join(dir, `${asset.file}.png`);
        // Desktop: 1600×900 showcase frame (16:9, larger UI presence).
        // Mobile: one iPhone viewport — phone ratio, not a squat tablet crop.
        await page.screenshot({
          path: out,
          fullPage: false,
          type: "png",
          clip: { x: 0, y: 0, width: vp.width, height: vp.height },
        });
        await context.close();

        const size = fs.statSync(out).size;
        console.log(
          `OK ${label} ${vp.width}x${vp.height}@${vp.scale}x (${vp.kind}) → ${(size / 1024).toFixed(0)}KB — ${asset.title}`,
        );
        ok++;
      } catch (e) {
        console.error(`FAIL ${label}:`, e.message || e);
        fail++;
      }
    }
  }

  await browser.close();
  console.log(`\nDone: ${ok} ok, ${fail} fail, ${skip} skipped`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
