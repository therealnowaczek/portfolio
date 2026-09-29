---
slug: okrs
title: "OKRs"
oneLiner: "Strategy-to-work hierarchy leaders use in weekly planning"
badge: "Enterprise case · OKRs"
role: "Lead Product Designer"
platform: "Web desktop"
timeline: "Enterprise PPM · shipped"
tags:
  - "OKRs"
  - "Enterprise"
  - "PPM"
  - "Information architecture"
  - "Strategy"
order: 3
accent: "#2563EB"
styleLabel: "Quiet enterprise blue"
screens:
  - "Leadership weekly ritual"
  - "Goals → KR → Work hierarchy"
  - "Key Result detail"
  - "At-risk / stale health"
  - "Empty first-run hierarchy"
portfolioSignals:
  - "Staff/Principal hierarchy IA under cognitive load"
  - "Strategy ↔ execution without Jira noise"
  - "Weekly leadership ritual design"
  - "Ownership, staleness, and trust states"
  - "Enterprise PPM-adjacent density"
---

### Snapshot
Lead Product Designer on an enterprise OKRs experience: Goals → Key Results → Work so leadership teams could connect strategy to execution in weekly planning rituals.

### Problem
Leadership teams struggled to connect strategy to execution. OKRs lived in slides or disconnected tools; the product needed a hierarchy leaders would actually open during planning — goals → key results → linked work — without drowning in Jira noise.

### Goals & constraints
**Goals**
- Make Goals → KR → Work scannable in a weekly leadership ritual
- Keep ownership, progress, and drill-down clear under cognitive load
- Surface at-risk, stale, and missing-owner health without alarm theater
- Link work with provenance (manual vs synced) so progress is trustworthy
- Design empty / first-run as carefully as the happy path

**Constraints**
- Dense desktop enterprise UI; single blue accent; progress = bar + % + status text
- Long hierarchies must feel virtualized / sticky-header safe
- Progress provenance visible (manual vs synced from work)
- WCAG-friendly status — never color-only
- Impact +47% is a team outcome — footnote via Impact; no invented adoption %

### Process
1. **Frame & research** - Observed leadership planning friction: strategy in decks, execution in Jira, no durable hierarchy ritual.
2. **Flows & information architecture** - Portfolio switcher → Goals (L1) → Key Results (L2) → Linked work (L3); Rituals and Health as first-class views.
3. **Options explored** - (A) Decorative OKR board mirroring PowerPoint (rejected). (B) Flat Jira filter dump (rejected: noise). (C) Strategy-to-task hierarchy with weekly ritual focus (chosen).
4. **Visual & design system decisions** - White/gray surfaces, blue accent, strong indentation, sticky goal context while scrolling KRs.
5. **Prototype & critique** - Cover ritual, full tree, KR detail, health filters, empty onboarding.
6. **Validation notes** - Shipped with product analytics and leadership adoption as the success bar.

### Key decisions
- Bet on a **strategy-to-task hierarchy** leaders open weekly — not a decorative board.
- Weekly ritual mode auto-focuses at-risk KRs and missing owners.
- Progress provenance chip (“Manual” / “Synced from work”) to protect trust.
- Empty state excellence: Create goal → Add KRs → Link work (+ Import).

### Solution
1. **Leadership weekly ritual** — Focused goal, KR progress, This week panel. Proves ritual leaders will open.
2. **Goals → KR → Work hierarchy** — Nested table with owners, progress, linked work counts. Proves IA under cognitive load.
3. **Key Result detail** — Metric, confidence, cadence, linked work, update/link/flag actions. Proves strategy↔execution connection.
4. **At-risk / stale health** — Filters with next actions; calm empty healthy state. Proves operational clarity.
5. **Empty first-run hierarchy** — Onboarding steps without illustration clutter. Proves enterprise empty-state craft.

Empty: “No goals this quarter — create a goal or import from CSV.” Stale: “KR not updated in 21 days — owners notified.”

### Design system notes
Quiet enterprise blue. Components: GoalTree, KrRow, ProgressProvenance, RitualPanel, HealthFilter, FirstRunSteps. Tree keyboard: arrows expand/collapse; aria-level aware.

### Outcomes & learnings
- Reported team outcome: **+47% OKR adoption among leadership teams** — see Impact; baseline, window, and individual vs team contribution still being documented for bare on-site claims
- Hiring signal: Staff/Principal enterprise IA + Product Designer craft on strategy hierarchy
- Learning: leaders adopt hierarchy tools when the weekly ritual is designed first — not when the board looks like a slide deck
