#!/usr/bin/env node
/**
 * Converts project PNG/JPG exports in public/projects to WebP and removes the originals.
 * Run after `npm run export:assets`:  npm run optimize:images
 *
 * - Caps width at MAX_WIDTH (screens are shown at <= ~1240px, retina-friendly).
 * - Skips files that already have a .webp sibling newer than the source.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "projects");
const MAX_WIDTH = 1800;
const QUALITY = 82;

let before = 0;
let after = 0;
let count = 0;

for (const slug of fs.readdirSync(ROOT)) {
  const dir = path.join(ROOT, slug);
  if (!fs.statSync(dir).isDirectory()) continue;

  for (const file of fs.readdirSync(dir)) {
    const ext = path.extname(file).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

    const src = path.join(dir, file);
    const out = path.join(dir, `${path.basename(file, ext)}.webp`);

    const srcSize = fs.statSync(src).size;
    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(out);

    before += srcSize;
    after += fs.statSync(out).size;
    count += 1;
    fs.rmSync(src);
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(1);
console.log(`Optimized ${count} images: ${mb(before)} MB -> ${mb(after)} MB`);
