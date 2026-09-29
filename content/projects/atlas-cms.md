---
slug: atlas-cms
title: "Atlas CMS"
oneLiner: "Productized design-system docs with tokens, component specs, and a live props playground"
badge: "Concept · Portfolio exploration"
role: "Lead Product Designer (concept)"
platform: "Web docs"
timeline: "2–3 week design sprint"
tags:
  - "Design system"
  - "Docs"
  - "Playground"
  - "Tokens"
  - "Web"
order: 7
accent: "#0F172A"
styleLabel: "Docs product"
screens:
  - "Component page  -  Button"
  - "Playground"
  - "Tokens explorer"
portfolioSignals:
  - "Design systems"
  - "Docs UX"
  - "Designer–engineer bridge"
  - "Token literacy"
  - "Playground adoption"
---

### Snapshot
Atlas CMS is a documentation and playground site for a product design system: tokens, components, usage do/don't, and a live props playground. The bet: docs that feel like a product (search, versioning, playground) get adopted; static Notion dumps do not.

### Problem
Designers and engineers disagree because the "source of truth" is a stale Figma page and a Storybook nobody bookmarks. JTBD: "Find the Button spec, tweak props, copy the React snippet, and trust it matches production."

### Goals & constraints
**Goals**
- Unified search across tokens, components, patterns
- Playground that mirrors real component API
- Clear do/don't guidance with a11y notes
- Version switcher for breaking changes
- Contribution path sketched (RFC lite)

**Constraints**
- Docs web; assume MDX-like content model
- Must work keyboard-only
- Timeboxed; fake component library
- Style: clean docs (think Linear docs × Storybook)
- No claim of an existing shipped DS named Atlas

### Process
1. **Frame & research** - Glance at Radix docs, Shopify Polaris, Adobe Spectrum. Assumption: playground converts skeptics.
2. **Flows & IA** - Home → Component page → Playground → Tokens. Global search.
3. **Options explored** - (A) Storybook skin only (rejected: weak guidance). (B) Marketing site for DS (rejected: hollow). (C) Docs + playground + tokens explorer (chosen).
4. **Visual & DS** - White/gray docs chrome, monospace for props, accent for interactive playground only.
5. **Prototype & critique** - Stitch Component page, Playground, Tokens; Figma heading outline and skip-link.
6. **Validation notes** - Risk: playground code drifts from real package. Labeled "Concept playground · wire to package in production".

### Key decisions
- I chose **playground beside guidance** because isolated Storybook tabs lose narrative; I rejected docs-without-play.
- I chose **a11y callouts as first-class sections** not footnotes.
- I chose **version switcher** early because breaking tokens without ceremony burns trust.
- I chose **copy snippet CTA** as the conversion moment for eng adoption.

### Solution
1. **Getting Started / Introduction** — Orientation into the system docs. Proves teaching before reference.
2. **Foundations / Spacing** — Foundational scale with usage guidance. Proves shared language for layout.
3. **Tokens / Color** — Semantic color tokens with CSS var names. Proves cross-discipline adoption.

Empty: "No matches - try token names." Error: "Playground runtime failed." Success: "Snippet copied".


### Design system notes
Meta-DS for the docs site itself: DocShell, PropTable, PlaygroundFrame, DoDont, TokenSwatch, VersionSelect. Pattern: teach → try → copy → contribute.

### Outcomes & learnings
- **Illustrative target:** designer and engineer both complete "find + copy Button" in under 2 minutes
- **Assumed success metric for the concept:** playground used in majority of concept walkthroughs
- Ship-test next: real package wiring, visual regression embeds, RFC workflow
- Hiring signal: design systems thinking, docs UX, designer-engineer bridge
