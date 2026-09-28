# Marcin Nowak — Portfolio

Personal portfolio site: CV-matched chrome + selected product case studies in an editorial mosaic gallery.

## Quick start

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port Next prints if 3000 is taken).

Shareable case links: `/?project=northline` (any project slug).

## Project images

Drop Stitch / Figma exports here:

```text
public/projects/{slug}/cover.jpg      # 16:9
public/projects/{slug}/screen-1.jpg
public/projects/{slug}/screen-2.jpg
public/projects/{slug}/screen-3.jpg
```

Supported extensions: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`.

Until a file exists, the UI shows an accent-tinted placeholder labeled with the project title (never a broken image).

**Stitch assets:** screenshots are rendered from original Stitch HTML at 2× device scale (`cover.png`, `screen-1..3.png`). Re-export:

```bash
npm run stitch:assets
```

Slugs: `northline`, `harbor`, `circuit`, `folio`, `quorum`, `pulse`, `atlas-cms`, `nest`, `signal-rooms`, `ledgerly-studio`.

## Content

| Path | Role |
|------|------|
| `data/projects.json` | Project metadata (source of truth) |
| `content/case-studies-10.md` | Original case-study pack |
| `content/projects/{slug}.md` | Per-project case body (split from the pack) |

Re-split after editing the pack:

```bash
npm run split-cases
```

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion available · Vercel-ready.

## Notes

- Accent magenta `#E91E63` matches the CV name treatment.
- Build: `npm run build` · Production: `npm start`
