---
slug: atlas-cms
title: "Atlas CMS"
oneLiner: "Design system docs and playground"
badge: "Personal exploration"
role: "Lead Product Designer"
platform: "Web docs"
timeline: "2–3 week design sprint"
tags:
  - "Design system"
  - "Docs"
  - "Playground"
  - "Tokens"
  - "Web"
order: 11
accent: "#0F172A"
styleLabel: "Docs product"
screens:
  - "Getting Started / Introduction"
  - "Foundations / Spacing"
  - "Tokens / Color"
  - "Tokens / Theme Studio"
  - "Components / Button"
  - "Components / Input"
portfolioSignals:
  - "Design systems"
  - "Docs UX"
  - "Designer–engineer bridge"
  - "Token literacy"
  - "Playground adoption"
---

### Snapshot
Atlas CMS is a personal exploration of design-system documentation as a product: getting started, foundations, tokens, theme studio, and component pages with a live props playground. Docs that feel searchable and tryable get adopted; stale Figma pages and bookmark-orphaned Storybooks do not.

### Problem
Designers and engineers disagree because the “source of truth” is a forgotten Figma page and a Storybook nobody opens. The job: find the Button spec, understand spacing and color tokens, tweak props, copy a snippet, and trust it matches the system’s intent.

### Goals & constraints
**Goals**
- Teach before reference: introduction → foundations → tokens → components
- Playground that mirrors a real component API
- Theme studio for token literacy across modes
- Clear do/don’t and a11y notes on component pages
- Keyboard-only usable docs chrome

**Constraints**
- Docs web; MDX-like content model assumed
- Timeboxed; fictional component library
- No claim that a shipped system named Atlas exists in production

### Process
1. **Study docs people actually use** - Radix, Polaris, Spectrum — playground and token clarity convert skeptics.
2. **IA as a learning path** - Getting Started → Foundations → Tokens / Theme Studio → Components. Global search across all.
3. **Reject Storybook-skin-only and marketing-hollow DS sites** - Guidance without try fails engineers; marketing without API fails both. Chose docs + playground + tokens explorer.
4. **Clean docs chrome** - White/gray shell, mono for props, accent only in interactive playground.
5. **Prototype Button and Input as representative depth** - Prop tables, do/don’t, a11y callouts, copy snippet CTA.
6. **Label exploration honesty** - Playground is exploratory; production would wire to the real package.

### Key decisions
- **Playground beside guidance** — isolated Storybook tabs lose narrative.
- **Foundations before components** — spacing and tokens prevent “just copy the Button.”
- **Theme Studio as a token classroom** — modes teach semantic color better than swatch grids alone.
- **Copy snippet as the eng conversion moment** — adoption is a paste away.

### Solution
1. **Getting Started / Introduction** — Orientation into the system. Proves teaching before reference.
2. **Foundations / Spacing** — Scale with usage guidance. Proves shared layout language.
3. **Tokens / Color** — Semantic color tokens with CSS var names. Proves cross-discipline adoption.
4. **Tokens / Theme Studio** — Mode switching and token relationships. Proves token literacy.
5. **Components / Button** — Spec, playground, do/don’t, a11y. Proves component depth.
6. **Components / Input** — Form control patterns and states. Proves the system beyond one hero component.

Empty: “No matches — try token names.” Error: “Playground runtime failed.” Success: “Snippet copied.”

### Design system notes
Meta-DS for the docs site: DocShell, PropTable, PlaygroundFrame, DoDont, TokenSwatch, ThemeStudio, VersionSelect. Pattern: teach → try → copy → contribute.

### Outcomes & learnings
- Exploration of design-systems thinking, docs UX, and the designer–engineer bridge.
- Learning: theme studio and foundations reduce “which gray is correct?” more than another Button variant.
- Next if productized: real package wiring, visual regression embeds, RFC workflow.
- Hiring signal: docs as a product, not a dumping ground.
