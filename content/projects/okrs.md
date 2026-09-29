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
  - "Enterprise PPM density"
---

### Snapshot
Lead Product Designer on an enterprise OKRs experience shipped inside a PPM suite. The product connects Goals → Key Results → Work so leadership teams can run strategy in a weekly planning ritual, without dumping them into a Jira filter dressed up as OKRs.

### Problem
Strategy lived in slides. Execution lived in issue trackers. Mid-quarter, leaders could not answer “which key results are at risk, who owns them, and what work is actually moving?” Decorative OKR boards looked good in kickoff decks and went quiet after week two. The design problem was ritual and hierarchy under cognitive load, not another colorful board.

### Goals & constraints
**Goals**
- Make Goals → KR → Work scannable in a weekly leadership ritual
- Keep ownership, progress, and drill-down clear when the tree gets long
- Surface at-risk, stale, and missing-owner health without alarm theater
- Link work with provenance (manual vs synced) so progress stays trustworthy
- Design empty / first-run as carefully as the happy path

**Constraints**
- Dense desktop enterprise UI: single blue accent; progress = bar + % + status text
- Long hierarchies must feel sticky-header safe under scroll
- WCAG-friendly status; never color-only
- Shipped team outcome on adoption is footnoted on Impact, no invented personal %

### Process
1. **Watch the weekly ritual fail** - Sat with leadership planning sessions: strategy in decks, execution in trackers, no durable hierarchy people opened every week.
2. **Build the hierarchy IA first** - Portfolio switcher → Goals (L1) → Key Results (L2) → Linked work (L3). Ritual and Health became first-class views, not filters bolted on later.
3. **Reject slide-deck and Jira-dump shapes** - Decorative boards mirrored PowerPoint and died after kickoff. Flat issue lists drowned strategy in noise. Chose strategy-to-task hierarchy with a weekly ritual focus.
4. **Design for scan under load** - White/gray surfaces, blue accent, strong indentation, sticky goal context while scrolling KRs. Provenance chips so progress doesn’t pretend to be synced when it isn’t.
5. **Critique cover → empty** - Ritual cover, full tree, KR detail, health filters, and first-run onboarding got equal craft time.
6. **Ship against real adoption** - Success bar was leadership teams actually using the hierarchy in weekly planning, not screenshot aesthetics.

### Key decisions
- Bet on a **strategy-to-task hierarchy** leaders open weekly, not a decorative board.
- Weekly ritual mode auto-focuses at-risk KRs and missing owners.
- Progress provenance chip (“Manual” / “Synced from work”) to protect trust.
- Empty-state excellence: Create goal → Add KRs → Link work (+ Import).

### Solution
1. **Leadership weekly ritual**: Focused goal, KR progress, This week panel. Proves a ritual leaders will open.
2. **Goals → KR → Work hierarchy**: Nested table with owners, progress, linked work counts. Proves IA under cognitive load.
3. **Key Result detail**: Metric, confidence, cadence, linked work, update/link/flag actions. Proves strategy↔execution connection.
4. **At-risk / stale health**: Filters with next actions: calm empty healthy state. Proves operational clarity without sirens.
5. **Empty first-run hierarchy**: Onboarding steps without illustration clutter. Proves enterprise empty-state craft.

Empty: “No goals this quarter. Create a goal or import from CSV.” Stale: “KR not updated in 21 days. Owners notified.”

### Design system notes
Quiet enterprise blue. Components: GoalTree, KrRow, ProgressProvenance, RitualPanel, HealthFilter, FirstRunSteps. Tree keyboard: arrows expand/collapse: aria-level aware.

### Outcomes & learnings
- Team outcome (see Impact): **+47% OKR adoption among leadership teams**: baseline and window documented with the product team.
- Hiring signal: Staff/Principal enterprise IA: hierarchy under cognitive load, not OKR poster design.
- Learning: leaders adopt hierarchy tools when the weekly ritual is designed first.
