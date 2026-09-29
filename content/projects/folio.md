---
slug: folio
title: "Folio"
oneLiner: "Warm editorial Android network where designers get structured critique, not empty likes"
badge: "Personal exploration"
role: "Lead Product Designer"
platform: "Android"
timeline: "2–3 week design sprint"
tags:
  - "Android"
  - "Community"
  - "Critique"
  - "Editorial"
  - "Social"
order: 4
accent: "#C2410C"
styleLabel: "Warm editorial"
screens:
  - "Feed  -  Warm editorial"
  - "Piece detail"
  - "Critique composer"
portfolioSignals:
  - "Android Material craft"
  - "Community product design"
  - "Structured critique rituals"
  - "Editorial visual systems"
  - "Creator feedback loops"
---

### Snapshot
Folio is a warm editorial Android app where designers post work-in-progress and get structured critique instead of empty likes. The bet: Material You warmth plus critique rituals beats generic social feeds for craft growth.

### Problem
Designers want feedback that improves the work, not engagement farming. Persona: Amir, mid-level product designer, posts on Discord and gets emoji. JTBD: "Get specific, kind, actionable critique on this flow before Friday's review."

### Goals & constraints
**Goals**
- Structure critique prompts (clarity, hierarchy, edge cases)
- Warm, magazine-like browsing that still feels native Android
- Reduce drive-by negativity with critique norms
- Support image + short loom-style video notes
- Make "request critique" a first-class CTA

**Constraints**
- Android Material 3; dynamic color optional
- Moderation assumed lightweight for this exploration
- Timeboxed sprint
- Editorial warmth without looking non-native
- a11y: scalable type, content descriptions for mock images

### Process
1. **Frame & research** - Glance at Dribbble, Are.na, Writers' workshops. Assumption: structure beats volume of comments.
2. **Flows & IA** - Feed → Piece → Critique composer → Thank / iterate. Profile shows critique given/received ratio.
3. **Options explored** - (A) Anonymous roast mode (rejected: toxic). (B) Live video rooms only (rejected: scheduling friction). (C) Async structured critique cards (chosen).
4. **Visual & DS** - Warm paper backgrounds, serif for titles, sans for UI, terracotta accent. Soft elevation, generous image crops.
5. **Prototype & critique** - High-fidelity prototype: Feed, Piece detail, Critique composer; Figma contrast on warm paper.
6. **Validation notes** - Risk: structure feels homework-like. Softened prompts to optional chips, not mandatory forms.

### Key decisions
- I chose **structured critique chips** ("Hierarchy", "Edge cases", "Copy") because free text alone drifts to taste; I rejected pure star ratings.
- I chose **warm editorial visual** to signal craft culture; I rejected cold blue social chrome.
- I chose **critique ratio on profile** to reward giving; I rejected follower vanity as the hero metric.
- I chose **async first** because designers critique across time zones; I rejected live-only.

### Solution
1. **Feed** — Warm editorial crops with critique intent badges. Proves browsing joy + purpose.
2. **Project Detail** — Context, goals, and threaded critiques. Proves useful reading order.
3. **Frames** — Frame-level critique axes and composer entry. Proves structured contribution.

Empty: "Your feed is quiet - follow three craft accounts." Error: "Upload failed - draft saved." Success: "Critique sent · Amir will be notified".


### Design system notes
Tokens: `color.paper.warm`, `color.accent.terracotta`, `type.display.serif`. Components: PieceCard, CritiqueChip, ComposerSheet, RatioBadge. Pattern: show goals → critique on axes → thank.

### Outcomes & learnings
- **Design target:** average critique length and specificity above unstructured social baselines (qualitative)
- **Prototype success target:** creators mark ≥50% of critiques "useful" in prototype survey
- Ship-test next: moderation queues, private critique circles, Figma embed
- Hiring signal: community product craft, Android Material fluency, editorial systems
