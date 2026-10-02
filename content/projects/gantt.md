---
slug: gantt
title: "Gantt"
oneLiner: "Dense program Gantt: retrieval speed as a design constraint"
badge: "Enterprise case · Planning"
role: "Lead Product Designer · BigPicture"
platform: "Web desktop"
timeline: "BigPicture · Appfire · shipped"
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
I was lead product designer on an enterprise program Gantt shipped inside a PPM suite. The chart had to stay dense enough for real programs and still answer “where is this work, what is blocking it, and how far are we from plan?” without a scavenger hunt. Retrieval speed was a design constraint, not a performance ticket filed after launch.

### Problem
Program managers lived in Gantt views that looked powerful and felt slow. Finding a bar, tracing dependencies, and comparing plan to reality burned minutes. Density without retrieval discipline turned the timeline into a wall.

### Goals & constraints
**Goals**
- Make a program-level Gantt scannable: swimlanes, today line, dependencies, milestones
- Keep the WBS grid and the timeline synchronized under load
- Support critical path, baselines, and task detail without leaving the chart
- Treat search → jump → highlight as a primary retrieval path

**Constraints**
- Dense desktop enterprise UI with a single quiet blue accent
- Long lists must stay fast, and zoom must move between quarters and weeks
- Keyboard cues for power users without hiding mouse clarity
- Status as text plus affordance, never color alone

### Process
1. **Time the pain** - Timed retrieval tasks on the existing Gantt with PMs: find a bar, trace a dependency, compare to baseline. Density and dependency tracing dominated the friction.
2. **Make modes first-class** - Baselines, Critical path, Detail drawer, and Search became modes, not buried menus.
3. **Reject decorative roadmaps and fake Gantts** - Pretty roadmaps were not operational. Flat issue lists lost schedule truth.
4. **Validate with timed tasks and NPS** - Usability work with the product team: success was faster find and clearer conflict reading, not prettier bars.

### Key decisions
- **Retrieval speed as a constraint**: search jumps the viewport and highlights the bar.
- Critical path dims non-path work so conflicts and slack stay readable.
- Baselines as ghost bars plus a slip list: plan versus current without a separate report.
- The detail drawer keeps context on the timeline; Esc closes it.

### Solution
1. **Program Gantt overview**: Swimlanes by team, sticky today line, dependencies, synced WBS and timeline.
2. **Dense timeline / quarters zoom**: Quarters and weeks with a long list that stays operable.
3. **Dependency / critical path**: Select a bar, highlight the path, surface conflict or slack.
4. **Baselines & slip compare**: Baseline ghosts against current dates, plus a slip summary.
5. **Task detail drawer**: Issue fields, dependencies, and actions without losing the chart.
6. **Search jump & highlight**: Query jumps and rings the bar, with next and previous matches.

### Design system notes
Quiet enterprise blue on cool gray. Components: GanttShell, WbsGrid, TimelineCanvas, TodayLine, DependencyPath, BaselineGhost, DetailDrawer, SearchJump. Keyboard: J/K rows, D dependencies, / search, ⌘± zoom, Esc clear.

### Outcomes & learnings
- **Team outcome: 42% faster information retrieval, NPS +36%** (timed tasks and NPS with the BigPicture product team; see the note on Impact for how to read team metrics).
- **Learning:** Gantt adoption follows retrieval and conflict clarity, not bar polish alone.
