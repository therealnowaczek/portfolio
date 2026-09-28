import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const mapPath = path.join(process.cwd(), "scripts", "stitch-assets.json");
const STITCH_ASSETS = JSON.parse(fs.readFileSync(mapPath, "utf8"));

const ROOT = path.join(process.cwd(), "public", "projects");
const TMP = path.join(process.cwd(), ".tmp-stitch-html");
fs.mkdirSync(TMP, { recursive: true });

/** Stitch artboards ≥ this width are desktop SaaS, not phones. */
const DESKTOP_MIN_WIDTH = 900;
/** Capture phones at real iPhone logical size so HTML reflows to phone, not tablet. */
const MOBILE_WIDTH = 390;
const MOBILE_HEIGHT = 844;
/** Desktop SaaS screens capture as a real Full HD browser window. */
const DESKTOP_WIDTH = 1920;
const DESKTOP_HEIGHT = 1080;

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
      kind: "desktop-fhd",
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

async function main() {
  const browser = await chromium.launch({ headless: true });
  let ok = 0;
  let fail = 0;
  let skip = 0;

  for (const [slug, assets] of Object.entries(STITCH_ASSETS)) {
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

        // Desktop: clip to the live document width so Full HD layout isn't
        // letterboxed by leftover artboard sizing from Stitch.
        if (vp.kind === "desktop-fhd") {
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
        // Desktop: true Full HD browser frame (preserves UI scale).
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
