---
slug: gantt
title: "BigPicture Gantt"
oneLiner: "Dense program Gantt — retrieval speed as a design constraint"
badge: "Enterprise case · Planning"
role: "Lead craft · BigPicture (SoftwarePlant → Appfire)"
platform: "Web desktop"
timeline: "BigPicture · shipped enterprise"
tags:
  - "Gantt"
  - "Enterprise"
  - "PPM"
  - "Planning"
  - "Information architecture"
order: 4
accent: "#2563EB"
styleLabel: "Quiet enterprise blue"
screens:
  - "Program Gantt overview"
  - "Dense timeline / quarters zoom"
  - "Dependency / critical path"
  - "Baselines & slip compare"
  - "Task detail drawer"
  - "Search jump & highlight"
portfolioSignals:
  - "Performance as a design constraint on dense timelines"
  - "Synced WBS grid + Gantt under cognitive load"
  - "Critical path, baselines, and retrieval interactions"
  - "Keyboard / power-user cues without sacrificing clarity"
  - "Enterprise PPM planning density (Marketplace-grade)"
---

### Snapshot
Lead craft on the BigPicture Gantt at SoftwarePlant → Appfire: a capable program timeline where information retrieval speed was treated as a first-class design constraint — not an afterthought bolted onto a pretty chart.

### Problem
Program managers lived in Gantt views that looked powerful and felt slow. Finding a bar, tracing dependencies, and comparing plan vs reality burned time. Density without retrieval discipline made the chart a wall, not a tool.

### Goals & constraints
**Goals**
- Make program-level Gantt scannable: swimlanes, today line, dependencies, milestones
- Keep left WBS grid and right timeline synchronized under load
- Support critical-path focus, baselines/slip compare, and detail without leaving the chart
- Design search → jump → highlight as a primary retrieval path
- Surface status with text + affordance — never color alone

**Constraints**
- Dense desktop enterprise UI inside BigPicture; single quiet blue accent
- Performance-conscious density (virtualized-feeling long lists; zoom quarters ↔ weeks)
- Keyboard cues for power users (navigate, deps, search, zoom)
- Impact **42% faster information retrieval · NPS +36%** is a team outcome — footnote via Impact; no invented individual %

### Process
1. **Frame & research** - Timed retrieval tasks and NPS on the existing Gantt; density and dependency tracing were the friction points.
2. **Flows & information architecture** - Program chrome → Gantt with synced WBS + timeline; Baselines, Critical path, Detail drawer, and Search as first-class modes.
3. **Options explored** - (A) Decorative roadmap (rejected: not operational). (B) Flat issue list pretending to be a Gantt (rejected: loses schedule truth). (C) Dense capable Gantt with retrieval, path, and baseline interactions (chosen).
4. **Visual & design system decisions** - Cool gray light surfaces, blue accent, 32px row rhythm, sticky today line, orthogonal dependency strokes.
5. **Prototype & critique** - Cover overview, quarters density, critical path, baselines, detail drawer, search jump.
6. **Validation notes** - Usability timed tasks + NPS with the product team under design leadership.

### Key decisions
- Treat **retrieval speed** as a design constraint: search jumps the viewport and highlights the bar.
- Critical path dims non-path work so conflicts and slack are readable.
- Baselines as ghost bars + slip list — compare plan vs current without a separate report.
- Detail drawer keeps context on the timeline; Esc closes.

### Solution
1. **Program Gantt overview** — Swimlanes by team, sticky today line, FS dependencies, synced WBS + timeline. Proves Marketplace-grade planning density.
2. **Dense timeline / quarters zoom** — Quarters vs weeks with a virtualized-feeling long list. Proves performance-conscious density.
3. **Dependency / critical path** — Select a bar, highlight path, surface conflict or slack. Proves schedule reasoning in-place.
4. **Baselines & slip compare** — Filters + baseline ghosts vs current; slip summary. Proves plan-vs-reality without leaving Gantt.
5. **Task detail drawer** — Issue fields, deps, actions without losing the chart. Proves deep work in context.
6. **Search jump & highlight** — Query jumps and rings the bar; next/prev matches. Proves the retrieval story behind Impact.

Empty: “No tasks match these filters — clear filters or expand the program scope.” Sync delay: “Timeline sync delayed — dates may be outdated.”

### Design system notes
Quiet enterprise blue on cool gray light. Components: GanttShell, WbsGrid, TimelineCanvas, TodayLine, DependencyPath, BaselineGhost, DetailDrawer, SearchJump. Keyboard: J/K rows; D deps; / search; ⌘± zoom; Esc clear.

### Outcomes & learnings
- Reported team outcome: **42% faster information retrieval · NPS +36%** — see Impact; timed tasks + NPS delivered with the team under design leadership
- Hiring signal: Staff/Principal dense planning UX + Product Designer craft on schedule systems
- Learning: Gantt adoption follows retrieval and conflict clarity — not bar polish alone
