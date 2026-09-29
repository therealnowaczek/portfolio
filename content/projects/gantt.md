---
slug: gantt
title: "Gantt"
oneLiner: "Dense program Gantt — retrieval speed as a design constraint"
badge: "Enterprise case · Planning"
role: "Lead Product Designer"
platform: "Web desktop"
timeline: "Enterprise PPM · shipped"
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
  - "Enterprise PPM-adjacent planning density"
---

### Snapshot
Lead Product Designer on an enterprise program Gantt shipped inside a PPM suite. The chart had to stay dense enough for real programs — and still answer “where is this work, what’s blocking it, and how far are we from plan?” without a scavenger hunt. Retrieval speed was treated as a design constraint, not a performance ticket filed after launch.

### Problem
Program managers lived in Gantt views that looked powerful and felt slow. Finding a bar, tracing dependencies, and comparing plan vs reality burned minutes. Density without retrieval discipline turned the timeline into a wall. Pretty bars that you cannot find are not a planning tool.

### Goals & constraints
**Goals**
- Make program-level Gantt scannable: swimlanes, today line, dependencies, milestones
- Keep left WBS grid and right timeline synchronized under load
- Support critical-path focus, baselines/slip compare, and detail without leaving the chart
- Design search → jump → highlight as a primary retrieval path
- Surface status with text + affordance — never color alone

**Constraints**
- Dense desktop enterprise UI; single quiet blue accent
- Performance-conscious density (long lists that feel virtualized; zoom quarters ↔ weeks)
- Keyboard cues for power users without hiding mouse clarity
- Team outcomes on retrieval and NPS are footnoted on Impact — no invented personal %

### Process
1. **Time the pain** - Timed retrieval tasks on the existing Gantt with PMs: find a bar, trace a dependency, compare to baseline. Density and dependency tracing dominated the friction.
2. **Make modes first-class** - Program chrome → synced WBS + timeline; Baselines, Critical path, Detail drawer, and Search as modes — not buried menus.
3. **Reject decorative roadmaps and fake Gantts** - Pretty roadmaps weren’t operational. Flat issue lists pretending to be Gantt lost schedule truth. Chose a dense capable timeline with retrieval, path, and baseline interactions.
4. **Design the canvas rhythm** - Cool gray surfaces, blue accent, 32px row rhythm, sticky today line, orthogonal dependency strokes. Keyboard map for navigate, deps, search, zoom.
5. **Critique the six screens as one story** - Overview, quarters density, critical path, baselines, detail drawer, search jump — each had to prove a different retrieval or reasoning move.
6. **Validate with timed tasks + NPS** - Usability work with the product team under design leadership; success was faster find + clearer conflict reading, not prettier bars.

### Key decisions
- Treat **retrieval speed** as a design constraint: search jumps the viewport and highlights the bar.
- Critical path dims non-path work so conflicts and slack stay readable.
- Baselines as ghost bars + slip list — plan vs current without a separate report.
- Detail drawer keeps context on the timeline; Esc closes.

### Solution
1. **Program Gantt overview** — Swimlanes by team, sticky today line, FS dependencies, synced WBS + timeline. Proves enterprise planning density.
2. **Dense timeline / quarters zoom** — Quarters vs weeks with a long list that still feels operable. Proves performance-conscious density.
3. **Dependency / critical path** — Select a bar, highlight path, surface conflict or slack. Proves schedule reasoning in place.
4. **Baselines & slip compare** — Baseline ghosts vs current plus slip summary. Proves plan-vs-reality without leaving Gantt.
5. **Task detail drawer** — Issue fields, deps, and actions without losing the chart. Proves deep work in context.
6. **Search jump & highlight** — Query jumps and rings the bar; next/prev matches. Proves the retrieval story behind Impact.

Empty: “No tasks match these filters — clear filters or expand the program scope.” Sync delay: “Timeline sync delayed — dates may be outdated.”

### Design system notes
Quiet enterprise blue on cool gray light. Components: GanttShell, WbsGrid, TimelineCanvas, TodayLine, DependencyPath, BaselineGhost, DetailDrawer, SearchJump. Keyboard: J/K rows; D deps; / search; ⌘± zoom; Esc clear.

### Outcomes & learnings
- Team outcome (see Impact): **42% faster information retrieval · NPS +36%** — timed tasks + NPS with the product team under design leadership.
- Hiring signal: Staff/Principal dense planning UX — schedule systems, not decorative roadmaps.
- Learning: Gantt adoption follows retrieval and conflict clarity — not bar polish alone.
