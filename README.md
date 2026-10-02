# Marcin Nowak · Portfolio

Personal portfolio: a one-page CV-matched site with selected product case studies. Positioning: Head of Design / Senior UX Manager , Lead Product Designer, with AI in the workflow.

Live: https://therealnowaczek.github.io/portfolio/

## Quick start

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port Next prints if 3000 is taken).

Shareable case links: `/?project=costradar` (any project slug).

## Content

| Path | Role |
|------|------|
| `lib/cv.ts` | Site copy: intro, hero stats, experience, role lenses, impact metrics, closing CTA |
| `data/projects.json` | Project metadata shown on cards (source of truth) |
| `content/projects/{slug}.md` | Case study body (edit directly; this is the source of truth) |
| `content/case-studies-10.md` | Archived original case-study pack. No longer used |

Writing rules for case studies and metrics:

- Product metrics on Impact are **team outcomes**; keep the note under the metric grid in sync (`IMPACT_NOTE`).
- CostRadar.ai is early-stage: do not add revenue, retention, or customer claims until they exist.
- Client and employer work is anonymized (brands and names are created for presentation). Say so rather than implying concepts.

## Project images

Drop design exports here:

```text
public/projects/{slug}/cover.webp      # 16:9
public/projects/{slug}/screen-1.webp
public/projects/{slug}/screen-2.webp
public/projects/{slug}/screen-3.webp
```

Supported extensions: `.webp` (preferred), `.jpg`, `.jpeg`, `.png`, `.svg`. WebP wins when several exist.

If you export PNGs (for example with `npm run export:assets`), convert them before committing:

```bash
npm run optimize:images   # PNG/JPG -> WebP (max 1800px wide), removes the originals
```

Until a file exists, the UI shows an accent-tinted placeholder labeled with the project title.

Social preview image: `public/og.jpg` (1200×630).

## Stack

Next.js (App Router, static export) · TypeScript · Tailwind CSS v4 · deployed to GitHub Pages through `.github/workflows/deploy-pages.yml`.

## Notes

- Accent magenta `#E91E63` matches the CV name treatment.
- The phone number is intentionally only on the CV PDF, not on the page.
- Build: `npm run build` · Production preview: `npm start`
