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
 * Stitch HTML sometimes comments "Material Symbols" but links Inter/Jakarta only,
 * or ships `.material-symbols-outlined` without font-family. Ligature names then
 * render as plain text in Playwright captures (expand_more, search, …).
 * Inject stylesheet + explicit font-family for every project that uses icons.
 */
function ensureMaterialIconFonts(htmlPath) {
  let html = fs.readFileSync(htmlPath, "utf8");
  const before = html;
  const usesSymbols =
    /material-symbols-outlined|material-symbols[\s"']/i.test(html) ||
    /Material Symbols/i.test(html);
  const usesIcons = /\bmaterial-icons\b/i.test(html);
  if (!usesSymbols && !usesIcons) return;

  const hasSymbolsLink =
    /family=Material\+Symbols/i.test(html) ||
    /family=Material%20Symbols/i.test(html);
  const hasIconsLink =
    /family=Material\+Icons/i.test(html) ||
    /fonts\.googleapis\.com\/icon/i.test(html);

  const links = [];
  if (usesSymbols && !hasSymbolsLink) {
    links.push(
      '<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet"/>',
    );
  }
  if (usesIcons && !hasIconsLink) {
    links.push(
      '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>',
    );
  }

  html = html.replace(
    /<style id="portfolio-material-icons">[\s\S]*?<\/style>\s*/g,
    "",
  );

  const css = `<style id="portfolio-material-icons">
.material-symbols-outlined,
.material-symbols-rounded,
.material-symbols-sharp {
  font-family: "Material Symbols Outlined" !important;
  font-weight: normal !important;
  font-style: normal !important;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 20;
}
.material-icons {
  font-family: "Material Icons" !important;
  font-weight: normal !important;
  font-style: normal !important;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>`;

  const inject = `${links.join("\n")}${links.length ? "\n" : ""}${css}\n`;
  if (/<\/head>/i.test(html)) {
    html = html.replace(/<\/head>/i, `${inject}</head>`);
  } else {
    html = inject + html;
  }

  if (html !== before) fs.writeFileSync(htmlPath, html);
}

/** Wait until icon (and body) fonts are usable before PNG capture. */
async function waitForDocumentFonts(page) {
  await page.evaluate(async () => {
    const ready = document.fonts?.ready;
    if (ready) await ready;
    const families = [
      "Material Symbols Outlined",
      "Material Icons",
      "Inter",
      "Plus Jakarta Sans",
    ];
    await Promise.all(
      families.map((family) =>
        document.fonts.load(`24px "${family}"`).catch(() => undefined),
      ),
    );
    if (document.fonts?.ready) await document.fonts.ready;
  });
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
 * Gantt portfolio polish: soften spreadsheet chrome + force single-line ellipsis.
 * Stitch edit_screens often lags or still emits rigid grid borders; this runs after
 * download so showcase PNGs read as 2025 planning UI, not Excel/Jira plugin.
 */
function patchGanttHtml(htmlPath) {
  let html = fs.readFileSync(htmlPath, "utf8");
  const before = html;

  const modernCss = `<style id="gantt-portfolio-modern">
  body { background: #f4f6fb !important; }
  header, header + div { border-color: rgba(148,163,184,0.35) !important; }
  main, [class*="dual-pane"], .workspace, #app > div > main {
    margin: 6px 8px 8px;
    border-radius: 12px;
    border: 1px solid rgba(148,163,184,0.35);
    box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 10px 28px rgba(15,23,42,0.06);
    overflow: hidden;
    background: #fff;
  }
  /* Soft issue list left pane — ~45% at showcase width (720/1600) */
  section.flex-shrink-0.flex.flex-col[class*="w-["],
  section.shrink-0.flex.flex-col[class*="w-["],
  div.flex-shrink-0.flex.flex-col[class*="w-["],
  section[class*="w-[340px]"],
  section[class*="w-[560px]"],
  section[class*="w-[580px]"],
  section[class*="w-[600px]"],
  section[class*="w-[640px]"],
  section[class*="w-[700px]"],
  section[class*="w-[720px]"],
  div[class*="w-[720px]"][class*="flex-shrink-0"],
  section[class*="min-w-[560px]"],
  section[class*="min-w-[640px]"] {
    width: 720px !important;
    max-width: 46% !important;
    min-width: 640px !important;
    flex: 0 0 720px !important;
    background: #f8fafc !important;
    border-right: 1px solid rgba(148,163,184,0.35) !important;
  }
  /* Drawer-open screens: still substantial WBS */
  body:has(aside) section.flex-shrink-0.flex.flex-col[class*="w-["],
  body:has(aside) section.shrink-0.flex.flex-col[class*="w-["] {
    width: 520px !important;
    max-width: 36% !important;
    min-width: 440px !important;
    flex: 0 0 520px !important;
  }
  /* Kill Excel vertical cell borders in left list */
  #wbs-scroll [class*="border-r"],
  #table-scroll-container [class*="border-r"],
  main > section:first-child [class*="border-r"],
  main > section:first-child .gantt-row > div,
  main > section:first-child > div:first-child > div,
  [class*="divide-x"] > * {
    border-right-width: 0 !important;
    border-right-color: transparent !important;
  }
  main > section:first-child .gantt-row,
  main > section:first-child [class*="border-b"],
  #wbs-scroll > div, #table-scroll-container > div {
    border-bottom-color: rgba(148,163,184,0.18) !important;
  }
  main > section:first-child .gantt-row:hover,
  #wbs-scroll > div:hover, #table-scroll-container > div:hover {
    background: rgba(37,99,235,0.04) !important;
  }
  main > section:first-child > div:first-child,
  #wbs-scroll + div, /* noop */
  section > div.h-12:first-child, section > div.h-8:first-child,
  section > div.h-9:first-child {
    background: #f1f5f9 !important;
    border-bottom: 1px solid rgba(148,163,184,0.35) !important;
    color: #64748b !important;
    font-weight: 500 !important;
  }
  /* Hide classic spreadsheet columns when present */
  .gantt-hide-col, [data-gantt-col="wbs"], [data-gantt-col="start"],
  [data-gantt-col="end"], [data-gantt-col="dates"] {
    display: none !important;
  }
  #timeline-scroll-container, [id*="timeline"],
  main > section:nth-child(2), main > section.flex-1 {
    background: linear-gradient(180deg, #f8faff 0%, #ffffff 56px) !important;
  }
  main > section:nth-child(2) [class*="border-r"],
  main > section.flex-1 [class*="border-r"],
  [class*="border-r"][class*="slate"],
  [class*="border-r"][class*="outline-variant"] {
    border-right-color: rgba(148,163,184,0.18) !important;
  }
  .gantt-row [class*="rounded"],
  [class*="rounded-md"][class*="absolute"],
  [class*="rounded"][class*="absolute"][class*="h-["] {
    border-radius: 5px !important;
  }
  .truncate, [class*="truncate"], .gantt-row span, .gantt-row a,
  main > section:first-child .gantt-row > div,
  main > section:first-child > div:first-child > div,
  [class*="rounded"][class*="px-"], [class*="inline-flex"],
  [class*="rounded-full"], [class*="whitespace-nowrap"] {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-width: 100%;
  }
  .gantt-row > div { min-width: 0; }
  .gantt-row .flex-1, .gantt-row [class*="flex-1"],
  main > section:first-child [class*="flex-1"] { min-width: 0 !important; }
  span.inline-flex { max-width: 100%; display: inline-flex !important; align-items: center; }
  header + div [class*="rounded"] {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
  /* Icon glyphs — never fall back to ligature text names */
  .material-symbols-outlined,
  .material-symbols-rounded,
  .material-symbols-sharp {
    font-family: "Material Symbols Outlined" !important;
    font-weight: normal !important;
    font-style: normal !important;
    -webkit-font-feature-settings: "liga";
  }
  .material-icons {
    font-family: "Material Icons" !important;
    font-weight: normal !important;
    font-style: normal !important;
    -webkit-font-feature-settings: "liga";
  }
  /* Today marker above bars/grid; search jump chrome stays higher */
  .gantt-today-overlay {
    position: absolute !important;
    inset: 0 !important;
    z-index: 20 !important;
    pointer-events: none !important;
  }
  .gantt-today-line,
  .gantt-today-overlay > .gantt-today-line {
    z-index: 20 !important;
    /* Halo so the 1.5px rule stays readable across bar fills */
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.9), 0 0 0 2px rgba(37, 99, 235, 0.35) !important;
  }
  .gantt-bars-layer {
    position: relative !important;
    z-index: 10 !important;
  }
  .gantt-search-panel {
    z-index: 30 !important;
  }
</style>
<script id="gantt-portfolio-softlist">
(function () {
  function textOf(el) {
    return (el && (el.textContent || "")).replace(/\\s+/g, " ").trim().toLowerCase();
  }
  function clsOf(el) {
    if (!el) return "";
    return typeof el.className === "string"
      ? el.className
      : el.getAttribute && el.getAttribute("class") || "";
  }
  function isTodayLine(el) {
    if (!el || el.tagName !== "DIV") return false;
    if (el.classList && (el.classList.contains("gantt-today-overlay") || el.classList.contains("gantt-bars-layer"))) {
      return false;
    }
    var cs = window.getComputedStyle(el);
    if (cs.position !== "absolute") return false;
    var t = textOf(el);
    if (t.indexOf("today") === -1) return false;
    // Require a thin vertical rule (ignore wide popovers that mention Today)
    var c = clsOf(el);
    var thinClass = /w-\\[1\\.5px\\]|w-\\[2px\\]|w-\\[1px\\]|w-0\\.5|\\bw-px\\b/.test(c);
    var thinComputed = parseFloat(cs.width) > 0 && parseFloat(cs.width) <= 4;
    if (!thinClass && !thinComputed) return false;
    var r = el.getBoundingClientRect();
    if (r.height < 80) return false;
    return c.indexOf("top-0") !== -1 || c.indexOf("bottom-0") !== -1 || cs.top === "0px";
  }
  function elevateTodayMarkers() {
    if (document.documentElement.getAttribute("data-gantt-today-elevated") === "1") return;
    var lines = Array.prototype.filter.call(document.querySelectorAll("div"), isTodayLine);
    if (!lines.length) return;
    document.documentElement.setAttribute("data-gantt-today-elevated", "1");
    lines.forEach(function (line) {
      var canvas = line.parentElement;
      if (!canvas) return;
      // If already nested in overlay, just stamp classes
      if (line.parentElement && line.parentElement.classList && line.parentElement.classList.contains("gantt-today-overlay")) {
        line.classList.add("gantt-today-line");
        line.style.setProperty("z-index", "20", "important");
        return;
      }
      if (!canvas.querySelector(":scope > .gantt-bars-layer")) {
        var layer = document.createElement("div");
        layer.className = "gantt-bars-layer";
        Array.prototype.slice.call(canvas.children).forEach(function (child) {
          if (child === line || child.tagName === "SVG") return;
          var c = clsOf(child);
          if (c.indexOf("gantt-today-overlay") !== -1) return;
          if (c.indexOf("absolute") !== -1 && c.indexOf("inset-0") !== -1) return; // grid
          if (c.indexOf("sticky") !== -1) return;
          if (child.tagName === "DIV") layer.appendChild(child);
        });
        canvas.appendChild(layer);
        var svg = canvas.querySelector(":scope > svg");
        if (svg) {
          svg.style.setProperty("z-index", "15", "important");
          canvas.appendChild(svg);
        }
      }
      var overlay = canvas.querySelector(":scope > .gantt-today-overlay");
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "gantt-today-overlay";
        canvas.appendChild(overlay);
      }
      line.classList.add("gantt-today-line");
      line.style.setProperty("z-index", "20", "important");
      overlay.appendChild(line);
    });
    Array.prototype.forEach.call(document.querySelectorAll("div"), function (el) {
      var t = el.textContent || "";
      var c = clsOf(el);
      if (
        t.indexOf("Match 1 of") !== -1 &&
        c.indexOf("absolute") !== -1 &&
        (c.indexOf("shadow") !== -1 || c.indexOf("z-50") !== -1 || c.indexOf("z-40") !== -1)
      ) {
        el.classList.add("gantt-search-panel");
        el.style.setProperty("z-index", "30", "important");
      }
    });
  }
  function hideSpreadsheetCols() {
    var headers = document.querySelectorAll(
      "section > div.h-12, section > div.h-8, section > div.h-9, #wbs-scroll, #table-scroll-container"
    );
    var roots = Array.from(document.querySelectorAll("main section, main > div, [class*='w-[490'], [class*='w-[500'], [class*='w-[410'], [class*='min-w-[420']"));
    roots.forEach(function (pane) {
      var header = pane.querySelector(":scope > div.h-12, :scope > div.h-8, :scope > div.h-9, :scope > div[class*='h-8'], :scope > div[class*='h-9'], :scope > div[class*='h-12']");
      if (!header) return;
      var cells = Array.from(header.children);
      if (cells.length < 4) return;
      var hideIdx = [];
      cells.forEach(function (cell, i) {
        var t = textOf(cell);
        if (!t) return;
        if (t === "wbs" || t === "start" || t === "end" || t === "dates" || t.indexOf("start") === 0 || t.indexOf("end") === 0) {
          hideIdx.push(i);
          cell.style.display = "none";
        }
      });
      if (!hideIdx.length) return;
      // Rewrite header to soft Issues label when it still looks like a table
      if (cells.some(function (c) { return textOf(c) === "wbs" || textOf(c) === "summary" || textOf(c) === "key"; })) {
        header.innerHTML = '<span class="px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Issues</span>';
      }
      var rows = pane.querySelectorAll(".gantt-row, #wbs-scroll > div, #table-scroll-container > div");
      rows.forEach(function (row) {
        var kids = Array.from(row.children);
        hideIdx.forEach(function (i) {
          if (kids[i]) kids[i].style.display = "none";
        });
        // Also hide narrow mono WBS index cells (e.g. "1.1") when first cell is tiny
        if (kids[0] && /^\\d+(\\.\\d+)*$/.test(textOf(kids[0])) && kids[0].offsetWidth < 56) {
          kids[0].style.display = "none";
        }
      });
    });
  }
  /**
   * After densify/WBS width patches, Stitch absolute SVG deps often no longer
   * meet bar ends. Snap each connector to the nearest bar finish → start.
   */
  function pathEndpoints(d) {
    if (!d) return null;
    var re = /[MLCQASTHVmlcqasthv][^MLCQASTHVmlcqasthvZz]*/g;
    var m;
    var first = null;
    var last = null;
    var cx = 0;
    var cy = 0;
    while ((m = re.exec(d))) {
      var chunk = m[0];
      var cmd = chunk.charAt(0);
      var parts = chunk.slice(1).trim().split(/[\\s,]+/).filter(Boolean).map(Number);
      if (!parts.length || parts.some(function (n) { return Number.isNaN(n); })) continue;
      if (cmd === "H" || cmd === "h") {
        cx = cmd === "H" ? parts[parts.length - 1] : cx + parts[parts.length - 1];
        if (!first) first = { x: cx, y: cy };
        last = { x: cx, y: cy };
      } else if (cmd === "V" || cmd === "v") {
        cy = cmd === "V" ? parts[parts.length - 1] : cy + parts[parts.length - 1];
        if (!first) first = { x: cx, y: cy };
        last = { x: cx, y: cy };
      } else if (cmd === "M" || cmd === "L" || cmd === "T") {
        for (var i = 0; i + 1 < parts.length; i += 2) {
          cx = parts[i];
          cy = parts[i + 1];
          if (!first) first = { x: cx, y: cy };
          last = { x: cx, y: cy };
        }
      } else if (cmd === "m" || cmd === "l" || cmd === "t") {
        for (var j = 0; j + 1 < parts.length; j += 2) {
          cx += parts[j];
          cy += parts[j + 1];
          if (!first) first = { x: cx, y: cy };
          last = { x: cx, y: cy };
        }
      } else if (cmd === "C" || cmd === "c" || cmd === "S" || cmd === "s" || cmd === "Q" || cmd === "q") {
        if (parts.length >= 2) {
          var abs = cmd === cmd.toUpperCase();
          var x = parts[parts.length - 2];
          var y = parts[parts.length - 1];
          cx = abs ? x : cx + x;
          cy = abs ? y : cy + y;
          if (!first) first = { x: cx, y: cy };
          last = { x: cx, y: cy };
        }
      }
    }
    if (!first || !last) return null;
    return { x1: first.x, y1: first.y, x2: last.x, y2: last.y };
  }
  function collectTimelineBars(canvas, svgRect) {
    var bars = [];
    var rows = canvas.querySelectorAll(".gantt-row, .row-h, [class*='row-h']");
    if (!rows.length) {
      // Fallback: any relative row wrapper that hosts absolute bars
      rows = canvas.querySelectorAll(".relative.flex.items-center, .relative.flex");
    }
    Array.prototype.forEach.call(rows, function (row) {
      var rowRect = row.getBoundingClientRect();
      if (rowRect.height < 8 || rowRect.width < 40) return;
      var cy = (rowRect.top + rowRect.bottom) / 2 - svgRect.top;
      var kids = row.querySelectorAll(":scope > div, :scope > span, :scope > a");
      Array.prototype.forEach.call(kids, function (el) {
        var c = clsOf(el);
        var cs = window.getComputedStyle(el);
        if (cs.position !== "absolute" && c.indexOf("absolute") === -1) return;
        var r = el.getBoundingClientRect();
        if (r.width < 10 || r.height < 6) return;
        if (r.width <= 4 && r.height > 48) return; // today / grid rules
        if (c.indexOf("gantt-today") !== -1) return;
        // Skip progress fills that are left-0 inside a parent bar
        if (/\\bleft-0\\b/.test(c) && /\\btop-0\\b/.test(c) && el.parentElement && el.parentElement !== row) {
          return;
        }
        var dashed = c.indexOf("border-dashed") !== -1 || cs.borderStyle === "dashed";
        bars.push({
          left: r.left - svgRect.left,
          right: r.right - svgRect.left,
          cy: cy,
          area: r.width * r.height,
          dashed: dashed,
          el: el,
        });
      });
    });
    return bars.filter(function (b) {
      if (!b.dashed) return true;
      return !bars.some(function (o) {
        return !o.dashed && Math.abs(o.cy - b.cy) < 6 && o.left < b.right && o.right > b.left;
      });
    });
  }
  function buildFsPath(x1, y1, x2, y2) {
    var x1r = Math.round(x1);
    var y1r = Math.round(y1);
    var x2r = Math.round(x2);
    var y2r = Math.round(y2);
    if (Math.abs(y1r - y2r) <= 3) {
      return "M " + x1r + " " + y1r + " L " + x2r + " " + y2r;
    }
    var gap = 14;
    var midX = x1r <= x2r ? x1r + gap : Math.max(x1r, x2r) + gap;
    if (x1r > x2r) {
      // finish-to-start when successor starts left of predecessor end
      midX = x1r + gap;
    }
    return (
      "M " + x1r + " " + y1r +
      " L " + midX + " " + y1r +
      " L " + midX + " " + y2r +
      " L " + x2r + " " + y2r
    );
  }
  function realignDependencyConnectors() {
    // Soft local HTML ships bar-aligned FS paths — don't rematch / rewrite them.
    if (document.body && document.body.getAttribute("data-gantt-soft-source") === "1") {
      document.documentElement.setAttribute("data-gantt-deps-aligned", "1");
      return;
    }
    if (document.documentElement.getAttribute("data-gantt-deps-aligned") === "1") return;
    var svgs = Array.prototype.filter.call(document.querySelectorAll("svg"), function (svg) {
      return svg.querySelector("path[marker-end], path[stroke]");
    });
    var alignedAny = false;
    svgs.forEach(function (svg) {
      if (svg.closest("marker") || svg.closest("defs")) return;
      var canvas = svg.parentElement;
      if (!canvas) return;
      var svgRect = svg.getBoundingClientRect();
      if (svgRect.width < 80 || svgRect.height < 80) return;
      var bars = collectTimelineBars(canvas, svgRect);
      if (bars.length < 2) return;
      var paths = Array.prototype.filter.call(svg.querySelectorAll("path"), function (p) {
        if (p.closest("marker") || p.closest("defs")) return false;
        var d = p.getAttribute("d") || "";
        if (d.length < 18) return false;
        var hasStroke = p.hasAttribute("stroke") || /stroke=/.test(p.outerHTML);
        var hasMarker = p.hasAttribute("marker-end");
        return hasStroke || hasMarker;
      });
      if (!paths.length) return;
      paths.forEach(function (path) {
        var d = path.getAttribute("d") || "";
        var ends = pathEndpoints(d);
        if (!ends) return;
        var bestStart = null;
        var bestStartScore = Infinity;
        var bestEnd = null;
        var bestEndScore = Infinity;
        bars.forEach(function (b) {
          // Weight Y heavily so densify X drift still picks the right row
          var startScore = Math.abs(b.cy - ends.y1) * 4 + Math.abs(b.right - ends.x1);
          if (startScore < bestStartScore) {
            bestStartScore = startScore;
            bestStart = b;
          }
          var endScore = Math.abs(b.cy - ends.y2) * 4 + Math.abs(b.left - ends.x2);
          if (endScore < bestEndScore) {
            bestEndScore = endScore;
            bestEnd = b;
          }
        });
        if (!bestStart || !bestEnd || bestStart === bestEnd) {
          path.setAttribute("opacity", "0");
          return;
        }
        // Require the chosen rows to be near the authored Y (within ~2 rows)
        if (Math.abs(bestStart.cy - ends.y1) > 48 && Math.abs(bestEnd.cy - ends.y2) > 48) {
          path.setAttribute("opacity", "0");
          return;
        }
        var x1 = bestStart.right;
        var y1 = bestStart.cy;
        var x2 = bestEnd.left;
        var y2 = bestEnd.cy;
        path.setAttribute("d", buildFsPath(x1, y1, x2, y2));
        path.removeAttribute("opacity");
        alignedAny = true;
      });
      svg.style.setProperty("z-index", "15", "important");
    });
    if (alignedAny) {
      document.documentElement.setAttribute("data-gantt-deps-aligned", "1");
    }
  }
  function run() {
    hideSpreadsheetCols();
    elevateTodayMarkers();
    // Re-measure after WBS/today layer moves so densified bars are final
    document.documentElement.removeAttribute("data-gantt-deps-aligned");
    realignDependencyConnectors();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
  setTimeout(run, 50);
  setTimeout(run, 300);
  setTimeout(run, 600);
  window.__ganttRealignDeps = function () {
    document.documentElement.removeAttribute("data-gantt-deps-aligned");
    elevateTodayMarkers();
    realignDependencyConnectors();
  };
})();
</script>`;

  html = html.replace(
    /<style id="gantt-portfolio-modern">[\s\S]*?<\/style>\s*<script id="gantt-portfolio-softlist">[\s\S]*?<\/script>/,
    "",
  );
  html = html.replace(
    /<style id="gantt-portfolio-modern">[\s\S]*?<\/style>/,
    "",
  );
  html = html.replace(
    /<script id="gantt-portfolio-softlist">[\s\S]*?<\/script>/,
    "",
  );
  // Strip prior densify markers so re-export from CDN is clean
  html = html.replace(/\s*data-gantt-dense="1"/g, "");
  html = html.replace(/<style id="gantt-timeline-dense">[\s\S]*?<\/style>\s*/g, "");

  html = html.replace(
    /class="(inline-flex items-center[^"]*)"/g,
    (full, cls) => {
      const extras = [];
      if (!cls.includes("whitespace-nowrap")) extras.push("whitespace-nowrap");
      if (!cls.includes("overflow-hidden") && !cls.includes("truncate"))
        extras.push("overflow-hidden", "text-ellipsis", "max-w-full");
      if (!extras.length) return full;
      return `class="${cls} ${extras.join(" ")}"`;
    },
  );
  html = html.replace(
    /class="(flex-1 px-2[^"]*truncate[^"]*)"/g,
    (full, cls) => {
      if (cls.includes("min-w-0")) return full;
      return `class="${cls} min-w-0"`;
    },
  );
  html = html.replace(
    /border-r border-outline-variant\/40/g,
    "border-r border-transparent",
  );
  html = html.replace(
    /border-r border-outline-variant(?!\/)/g,
    "border-r border-outline-variant/20",
  );
  html = html.replace(
    /border-r border-slate-200\/\d+/g,
    "border-r border-transparent",
  );
  html = html.replace(
    /border-r border-slate-200(?![\/\w])/g,
    "border-r border-transparent",
  );
  // Prefer a wide WBS for portfolio showcase (~45% at 1600)
  html = html.replace(/w-\[360px\] lg:w-\[380px\]/g, "w-[720px] lg:w-[720px]");
  html = html.replace(/w-\[340px\] lg:w-\[380px\]/g, "w-[720px] lg:w-[720px]");
  html = html.replace(/w-\[340px\] xl:w-\[720px\]/g, "w-[720px] xl:w-[720px]");
  html = html.replace(/lg:w-\[380px\]/g, "lg:w-[720px]");
  html = html.replace(/lg:w-\[600px\]/g, "lg:w-[720px]");
  html = html.replace(/w-\[490px\]/g, "w-[720px]");
  html = html.replace(/w-\[500px\]/g, "w-[720px]");
  html = html.replace(/w-\[460px\]/g, "w-[700px]");
  html = html.replace(/w-\[430px\]/g, "w-[700px]");
  html = html.replace(/w-\[410px\]/g, "w-[700px]");
  html = html.replace(/w-\[420px\]/g, "w-[700px]");
  html = html.replace(/w-\[380px\]/g, "w-[720px]");
  html = html.replace(/w-\[360px\]/g, "w-[720px]");
  html = html.replace(/w-\[340px\]/g, "w-[720px]");
  html = html.replace(/w-\[310px\]/g, "w-[720px]");
  html = html.replace(/w-\[560px\]/g, "w-[720px]");
  html = html.replace(/w-\[580px\]/g, "w-[720px]");
  html = html.replace(/w-\[600px\]/g, "w-[720px]");
  html = html.replace(/lg:w-\[430px\]/g, "lg:w-[720px]");
  html = html.replace(/min-w-\[420px\]/g, "min-w-[640px]");
  html = html.replace(/min-w-\[560px\]/g, "min-w-[640px]");
  html = html.replace(/max-w-\[340px\]/g, "max-w-[720px]");
  html = html.replace(/w-\[30%\]/g, "w-[46%]");
  html = html.replace(/w-\[32%\]/g, "w-[46%]");
  html = html.replace(/w-\[36%\]/g, "w-[46%]");

  html = densifyGanttTimeline(html);

  // After densify: shrink remaining year canvases that densify didn't rewrite
  html = html.replace(/min-w-\[1240px\]/g, "min-w-[820px]");
  html = html.replace(/min-w-\[1200px\]/g, "min-w-[820px]");

  // Inject CSS LAST so width class rewrites never mangle selectors
  if (!html.includes('id="gantt-portfolio-modern"')) {
    html = html.replace(/<\/head>/i, `${modernCss}\n</head>`);
  }

  if (html !== before) fs.writeFileSync(htmlPath, html);
  // Always ensure Material Symbols after other patches (cover/screen-1 often omit the link)
  ensureMaterialIconFonts(htmlPath);
}

/**
 * Collapse hollow Q2–Q4 voids: scale bar/dep geometry into the filled work
 * span and retarget the header to Months (Jan–Apr) so the timeline viewport
 * reads dense for portfolio screenshots.
 */
function densifyGanttTimeline(html) {
  // Skip if already densified in this file
  if (html.includes('data-gantt-dense="1"')) return html;
  // Soft local HTML is already authored for the Jan–Apr portfolio span —
  // rescaling bars/paths here is what drifts dependency connectors.
  if (html.includes('data-gantt-soft-source="1"')) return html;

  // Collect bar/today left positions (inline style + Tailwind left-[Npx])
  const lefts = [];
  const reLeft = /(?:style="[^"]*?\bleft:\s*|left-\[)(\d+(?:\.\d+)?)px/gi;
  let m;
  while ((m = reLeft.exec(html))) lefts.push(Number(m[1]));
  if (lefts.length < 3) return html;

  const maxLeft = Math.max(...lefts);
  const sorted = [...lefts].sort((a, b) => a - b);
  const p80 = sorted[Math.floor(sorted.length * 0.8)] || maxLeft;
  const wideCanvas =
    /w-\[(1440|1600|1680|1800|1920|2000|2200|2400)px\]|min-w-\[(1200|1240|1400|1600|1800|1920)px\]/.test(
      html,
    );
  const hasYearHeaders =
    /Q1\s*2026[\s\S]{0,1200}?Q3\s*2026/.test(html) ||
    /Q1\s*2026[\s\S]{0,1200}?Q4\s*2026/.test(html);
  if (!wideCanvas && !hasYearHeaders) return html;
  // Use p80 so a single far milestone doesn't skip densify on hollow year views
  const scaleBasis = hasYearHeaders ? Math.min(maxLeft, Math.max(p80, maxLeft * 0.55)) : maxLeft;
  if (scaleBasis > 880 && !hasYearHeaders) return html;
  if (scaleBasis < 120) return html;

  const targetSpan = 760; // fits timeline after 720px WBS at 1600 viewport
  const scale = Math.min(2.2, Math.max(1.5, targetSpan / Math.max(scaleBasis, 1)));
  if (scale < 1.35 && !hasYearHeaders) return html;
  const sx = (n) => Math.round(Number(n) * scale);

  // Scale only absolute bar geometry (left + optional width in same style)
  html = html.replace(/style="([^"]*)"/g, (full, style) => {
    if (!/\bleft:\s*\d/.test(style) && !/\bmargin-left:\s*\d/.test(style)) {
      return full;
    }
    const ml = style.match(/margin-left:\s*(\d+(?:\.\d+)?)px/);
    if (ml && Number(ml[1]) < 40 && !/\bleft:/.test(style)) return full;
    let next = style.replace(/\bleft:\s*(\d+(?:\.\d+)?)px/g, (_, n) => `left: ${sx(n)}px`);
    next = next.replace(
      /\bmargin-left:\s*(\d+(?:\.\d+)?)px/g,
      (_, n) => `margin-left: ${sx(n)}px`,
    );
    if (/\bleft:|\bmargin-left:/.test(next)) {
      next = next.replace(/\bwidth:\s*(\d+(?:\.\d+)?)px/g, (_, n) => `width: ${sx(n)}px`);
    }
    return `style="${next}"`;
  });
  html = html.replace(/left-\[(\d+(?:\.\d+)?)px\]/g, (_, n) => `left-[${sx(n)}px]`);

  // Scale Tailwind bar widths on absolutely-positioned timeline items.
  // left-[…] was already scaled above; w-[…] must follow or deps drift.
  html = html.replace(/class="([^"]*)"/g, (full, cls) => {
    if (!/\bleft-\[/.test(cls) || !/\bw-\[/.test(cls)) return full;
    // Skip layout chrome (WBS panes, sticky headers)
    if (/\bflex-shrink-0\b|\bshrink-0\b|\bflex-col\b|\bsticky\b/.test(cls)) {
      return full;
    }
    const next = cls.replace(/\bw-\[(\d+(?:\.\d+)?)px\]/g, (_, n) => {
      const v = Number(n);
      if (v < 10 || v > 1400) return `w-[${n}px]`;
      return `w-[${sx(v)}px]`;
    });
    return `class="${next}"`;
  });

  // Scale SVG dependency X coords (M/L/C/Q/S/T/H). Skip filled marker heads.
  // Match the whole <path …> so stroke/marker-end after d= still count.
  html = html.replace(/<path\b([^>]*)>/g, (full, attrs) => {
    const dMatch = attrs.match(/\bd="([^"]+)"/);
    if (!dMatch) return full;
    const d = dMatch[1];
    const isStroke =
      /\bstroke=/.test(attrs) || /\bmarker-end=/.test(attrs);
    const isFilledOnly =
      /\bfill=/.test(attrs) && !/\bstroke=/.test(attrs) && !/\bmarker-end=/.test(attrs);
    if (isFilledOnly || !isStroke) return full;
    if (!/[MLCQASTmlcqast]/.test(d)) return full;
    const allNums = (d.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
    if (allNums.length && Math.max(...allNums.map(Math.abs)) <= 16) return full;

    const parts = d.trim().split(/([MLCQASTHVmlcqasthvzZV])/).filter(Boolean);
    let out = "";
    let cmd = "";
    for (const part of parts) {
      if (/^[MLCQASTHVmlcqasthvzZV]$/.test(part)) {
        cmd = part;
        out += part;
        continue;
      }
      const nums = part.trim().split(/[\s,]+/).filter(Boolean).map(Number);
      if (!nums.length || nums.some((x) => Number.isNaN(x))) {
        out += part;
        continue;
      }
      const scaled = [];
      if (cmd === "H" || cmd === "h") {
        for (const n of nums) scaled.push(sx(n));
      } else if (cmd === "V" || cmd === "v" || cmd === "Z" || cmd === "z") {
        scaled.push(...nums);
      } else if (cmd === "A" || cmd === "a") {
        for (let i = 0; i + 6 < nums.length; i += 7) {
          scaled.push(
            sx(nums[i]),
            sx(nums[i + 1]),
            nums[i + 2],
            nums[i + 3],
            nums[i + 4],
            sx(nums[i + 5]),
            nums[i + 6],
          );
        }
      } else {
        for (let i = 0; i < nums.length; i += 2) {
          if (i + 1 < nums.length) scaled.push(sx(nums[i]), nums[i + 1]);
          else scaled.push(nums[i]);
        }
      }
      out += " " + scaled.join(" ");
    }
    return full.replace(/\bd="[^"]+"/, `d="${out.trim()}"`);
  });

  const canvasW = targetSpan + 24;
  html = html.replace(
    /w-\[(1440|1600|1680|1800|1920|2000|2200|2400)px\]/g,
    `w-[${canvasW}px]`,
  );

  const monthHeader = `<div class="sticky top-0 z-20 bg-slate-50/95 backdrop-blur border-b border-slate-200/80 select-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]" data-gantt-month-header="1">
<div class="h-6 flex text-[11px] font-semibold border-b border-slate-200/70">
<div class="flex-1 px-3 flex items-center justify-between text-slate-800 border-r border-transparent bg-slate-50/60"><span class="font-bold text-slate-900">Jan–Apr 2026</span><span class="text-[10px] text-blue-600 font-medium">Active work span</span></div>
</div>
<div class="h-6 flex text-[10px] font-mono text-slate-500">
<div class="w-1/4 px-2 flex items-center justify-between border-r border-transparent"><span class="font-sans font-medium text-slate-700">January</span><span class="text-[9px] text-slate-400">W1–4</span></div>
<div class="w-1/4 px-2 flex items-center justify-between border-r border-transparent bg-blue-50/40"><span class="font-sans font-semibold text-blue-700">February</span><span class="text-[9px] text-blue-600 font-bold">W5–8</span></div>
<div class="w-1/4 px-2 flex items-center justify-between border-r border-transparent"><span class="font-sans font-medium text-slate-700">March</span><span class="text-[9px] text-slate-400">W9–12</span></div>
<div class="w-1/4 px-2 flex items-center justify-between"><span class="font-sans font-medium text-slate-700">April</span><span class="text-[9px] text-slate-400">W13–16</span></div>
</div>
</div>`;

  html = html.replace(
    /<div class="sticky top-0 z-(?:20|30)[\s\S]*?<\/div>\s*<\/div>\s*<\/div>(\s*<!--|\s*<div class="relative)/,
    monthHeader + "$1",
  );
  // Fallback for denser sticky headers nested differently
  if (!html.includes('data-gantt-month-header="1"') && hasYearHeaders) {
    html = html.replace(
      /<div class="sticky top-0 z-(?:20|30)[\s\S]{200,4000}?<div class="h-\d[^"]*flex text-\[\d+px\][\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
      monthHeader,
    );
  }

  // Months zoom active
  html = html.replace(
    /(<button class=")([^"]*)("[^>]*>)Quarters(<\/button>)/g,
    (_, a, cls, mid, end) => {
      const muted = cls
        .replace(/\bbg-white\b/g, "bg-transparent")
        .replace(/\btext-blue-600\b/g, "text-slate-500")
        .replace(/\bfont-semibold\b/g, "font-medium");
      return `${a}${muted}${mid}Quarters${end}`;
    },
  );
  html = html.replace(
    /(<button class=")([^"]*)("[^>]*>)Months(<\/button>)/,
    (_, a, cls, mid, end) => {
      let next = cls;
      if (!/\bbg-white\b/.test(next)) next += " bg-white";
      if (!/\btext-blue-600\b/.test(next)) next += " text-blue-600";
      if (!/\bfont-semibold\b/.test(next)) next += " font-semibold";
      return `${a}${next}${mid}Months${end}`;
    },
  );

  html = html.replace(/<body([^>]*)>/i, '<body$1 data-gantt-dense="1">');

  if (!html.includes('id="gantt-timeline-dense"')) {
    const denseCss = `<style id="gantt-timeline-dense">
  #timeline-scroll-container { overflow-x: hidden !important; }
  #timeline-scroll-container > div[class*="w-["] {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
  }
  [data-gantt-month-header] .w-1\\/4 { width: 25% !important; }
</style>`;
    html = html.replace(/<\/head>/i, `${denseCss}\n</head>`);
  }

  return html;
}

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
        if (asset.localHtml) {
          const localPath = path.isAbsolute(asset.localHtml)
            ? asset.localHtml
            : path.join(process.cwd(), asset.localHtml);
          if (!fs.existsSync(localPath)) {
            throw new Error(`localHtml missing: ${localPath}`);
          }
          fs.copyFileSync(localPath, htmlPath);
          console.log(`LOCAL ${label} ← ${asset.localHtml}`);
        } else {
          const bytes = await downloadHtml(asset.htmlUrl, htmlPath);
          if (bytes < 500) throw new Error(`HTML too small (${bytes})`);
        }
        if (slug === "folio") patchFolioHtml(htmlPath);
        if (slug === "okrs") scrubCaseBrandHtml(htmlPath, "OKRs");
        if (slug === "gantt") {
          scrubCaseBrandHtml(htmlPath, "Gantt");
          patchGanttHtml(htmlPath);
        } else {
          // Shared: fix missing Material Symbols/Icons for all Stitch captures
          ensureMaterialIconFonts(htmlPath);
        }

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
        await waitForDocumentFonts(page);
        await page.waitForTimeout(400);

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

        // Gantt: force soft-list left pane even when Stitch still emits WBS tables.
        if (slug === "gantt") {
          await page.evaluate(() => {
            const textOf = (el) =>
              (el?.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
            const isDatey = (t) =>
              /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/.test(t) ||
              /^\d{1,2}[\/\-]\d{1,2}/.test(t) ||
              /^\d{4}-\d{2}/.test(t);

            const panes = Array.from(
              document.querySelectorAll(
                "main > section, main section.flex-shrink-0, main [class*='w-[4'], main [class*='w-[5']",
              ),
            ).filter((pane) => {
              const r = pane.getBoundingClientRect();
              return r.width > 180 && r.width < 800 && r.left < 560;
            });

            for (const pane of panes) {
              const header =
                pane.querySelector(
                  ":scope > div.h-12, :scope > div.h-8, :scope > div.h-9, :scope > div[class*='h-8'], :scope > div[class*='h-9'], :scope > div[class*='h-12']",
                ) || pane.querySelector("div.h-12, div.h-8, div.h-9");
              if (!header) continue;

              const cells = Array.from(header.children);
              const hideIdx = [];
              cells.forEach((cell, i) => {
                const t = textOf(cell);
                if (
                  t === "wbs" ||
                  t === "start" ||
                  t === "end" ||
                  t === "dates" ||
                  t.startsWith("start") ||
                  t.startsWith("end") ||
                  t === "#"
                ) {
                  hideIdx.push(i);
                }
              });

              if (
                cells.length >= 3 ||
                textOf(header).includes("wbs") ||
                textOf(header).includes("start") ||
                textOf(header).includes("issues") ||
                textOf(header).includes("key")
              ) {
                header.innerHTML =
                  '<span style="padding:0 12px;font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#64748b">Issues</span>';
              }

              const dataRows = Array.from(
                pane.querySelectorAll(
                  ".gantt-row, #wbs-scroll > div, #table-scroll-container > div",
                ),
              );

              dataRows.forEach((row) => {
                const kids = Array.from(row.children).filter(
                  (k) => k.tagName === "DIV" || k.tagName === "BUTTON",
                );
                if (kids.length >= 5 && hideIdx.length) {
                  hideIdx.forEach((i) => {
                    if (kids[i]) kids[i].style.display = "none";
                  });
                } else if (kids.length >= 6) {
                  kids[0].style.display = "none";
                  kids[kids.length - 1].style.display = "none";
                  kids[kids.length - 2].style.display = "none";
                } else if (kids.length >= 4) {
                  if (/^\d+(\.\d+)*$/.test(textOf(kids[0]))) {
                    kids[0].style.display = "none";
                  }
                  for (let i = kids.length - 1; i >= Math.max(1, kids.length - 2); i--) {
                    if (isDatey(textOf(kids[i]))) kids[i].style.display = "none";
                  }
                }
                kids.forEach((kid) => {
                  kid.style.borderRight = "none";
                  kid.style.borderLeft = "none";
                  kid.style.minWidth = "0";
                  kid.style.whiteSpace = "nowrap";
                  kid.style.overflow = "hidden";
                  kid.style.textOverflow = "ellipsis";
                });
                row.style.borderRight = "none";
                row.style.borderBottomColor = "rgba(148,163,184,0.16)";
              });

              pane.style.borderRight = "1px solid rgba(148,163,184,0.35)";
              pane.style.background = "#f8fafc";
            }

            document.querySelectorAll("[class*='border-r']").forEach((el) => {
              const pane = el.closest("section, [class*='w-[3'], [class*='w-[4'], [class*='w-[5']");
              if (!pane) return;
              const rect = pane.getBoundingClientRect();
              if (rect.width > 0 && rect.width < 560) {
                el.style.borderRightColor = "transparent";
              }
            });
          });
          // Soft-list / WBS tweaks can shift the timeline — snap deps to final bar boxes
          await page.waitForTimeout(100);
          await page.evaluate(() => {
            if (typeof window.__ganttRealignDeps === "function") {
              window.__ganttRealignDeps();
            }
          });
          await page.waitForTimeout(150);
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
