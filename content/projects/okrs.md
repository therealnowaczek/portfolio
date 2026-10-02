---
slug: okrs
title: "OKRs"
oneLiner: "Strategy-to-work hierarchy leaders use in weekly planning"
badge: "Enterprise case · OKRs"
role: "Lead Product Designer · BigPicture"
platform: "Web desktop"
timeline: "BigPicture · Appfire · shipped"
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
I was lead product designer on an enterprise OKRs experience shipped inside a PPM suite. It connects Goals → Key Results → Work so leadership teams can run strategy in a weekly planning ritual, instead of a Jira filter dressed up as OKRs.

### Problem
Strategy lived in slides and execution lived in issue trackers. Mid-quarter, leaders could not answer “which key results are at risk, who owns them, and what work is actually moving?” Decorative OKR boards looked good at kickoff and went quiet after week two. The design problem was ritual and hierarchy under cognitive load.

### Goals & constraints
**Goals**
- Make Goals → KR → Work scannable in a weekly leadership ritual
- Surface at-risk, stale, and missing-owner health without alarm theater
- Show where progress comes from (manual or synced from work) so it stays trustworthy
- Design the empty first-run state as carefully as the happy path

**Constraints**
- Dense desktop enterprise UI: single blue accent; progress is bar, percent, and status text
- Long hierarchies must keep goal context visible while scrolling
- WCAG-friendly status; never color alone

### Process
1. **Watch the weekly ritual fail** - Sat in leadership planning sessions: strategy in decks, execution in trackers, no hierarchy anyone opened every week.
2. **Build the hierarchy IA first** - Portfolio switcher → Goals → Key Results → Linked work. Ritual and Health became first-class views, not filters added later.
3. **Reject the slide-deck and Jira-dump shapes** - Decorative boards mirror PowerPoint and die after kickoff. Flat issue lists drown strategy in noise.
4. **Design for scan under load** - Strong indentation, sticky goal context, and provenance chips so progress never pretends to be synced when it is not.

### Key decisions
- A **strategy-to-task hierarchy** leaders open weekly, not a decorative board.
- Weekly ritual mode auto-focuses at-risk KRs and missing owners.
- Progress provenance chip (“Manual” or “Synced from work”) to protect trust.
- Empty first-run flow: Create goal → Add KRs → Link work (or import).

### Solution
1. **Leadership weekly ritual**: Focused goal, KR progress, and a This week panel.
2. **Goals → KR → Work hierarchy**: Nested table with owners, progress, and linked work counts.
3. **Key Result detail**: Metric, confidence, cadence, linked work, and update, link, or flag actions.
4. **At-risk / stale health**: Filters with next actions, and a calm healthy state.
5. **Empty first-run hierarchy**: Onboarding steps without illustration clutter.

### Design system notes
Quiet enterprise blue. Components: GoalTree, KrRow, ProgressProvenance, RitualPanel, HealthFilter, FirstRunSteps. Tree keyboard: arrows expand and collapse, aria-level aware.

### Outcomes & learnings
- **Team outcome: +47% OKR adoption among leadership teams** (BigPicture product team; see the note on Impact for how to read team metrics).
- **Learning:** leaders adopt hierarchy tools when the weekly ritual is designed first.
