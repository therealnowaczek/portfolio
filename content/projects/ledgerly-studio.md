---
slug: ledgerly-studio
title: "Ledgerly Studio"
oneLiner: "Hypothesis-first growth lab for A/B experiments — setup, variants, and ship/kill decisions in one place"
badge: "Personal exploration"
role: "Lead Product Designer"
platform: "Web analytics"
timeline: "2–3 week design sprint"
tags:
  - "Growth"
  - "Experimentation"
  - "Analytics"
  - "Web"
  - "Metrics"
order: 10
accent: "#059669"
styleLabel: "Growth analytics"
screens:
  - "Experiments list"
  - "Create  -  Hypothesis"
  - "Results  -  Decision"
portfolioSignals:
  - "Growth experimentation"
  - "Metrics and guardrails"
  - "Hypothesis-first UX"
  - "Designer-in-the-loop A/B"
  - "Decision ritual design"
---

### Snapshot
Ledgerly Studio is a growth experimentation lab where PMs and designers define hypotheses, ship A/B variants, and read results without drowning in charts. The bet: experiment UX should feel like a lab notebook with guardrails, not a BI graveyard.

### Problem
Growth teams lose signal when experiment setup, design variants, and analytics live in three tools. JTBD: "Write a hypothesis, attach variants, monitor health metrics, and decide ship/kill with shared language."

### Goals & constraints
**Goals**
- Hypothesis-first creation flow
- Variant preview slots for design handoff
- Primary + guardrail metrics clearly separated
- Decision states: running / won / lost / inconclusive
- Explain statistical humility in UI copy

**Constraints**
- Web analytics console; desktop
- No fake "99% confidence" theater without labels
- Timeboxed; simulated experiment data
- a11y for charts (tables as fallback)
- Style: clean analytics, indigo/emerald accents

### Process
1. **Frame & research** - Glance at Optimizely, GrowthBook, Amplitude Experiment, Deel-style growth JD themes. Assumption: designers need first-class seats, not CSV afterthoughts.
2. **Flows & IA** - Experiments list → Create (hypothesis) → Variants → Results → Decision.
3. **Options explored** - (A) Pure BI dashboards (rejected: no experiment object). (B) Code-only flags UI (rejected: excludes design). (C) Lab notebook + variants + results decision (chosen).
4. **Visual & DS** - Light analytics chrome, emerald for wins, restrained red for losses, tabular nums. Chart + table twins.
5. **Prototype & critique** - High-fidelity prototype: List, Create, Results; Figma table fallback and decision modal copy.
6. **Validation notes** - Risk: overclaiming causality. Added "Prototype results · not causal proof" on exploration screens.

### Key decisions
- I chose **hypothesis as required field** because tool-led tests without questions waste traffic; I rejected metric-first blank experiments.
- I chose **guardrail metrics beside primary** so wins that tank retention are visible; I rejected single-KPI hero.
- I chose **inconclusive as a first-class state** to fight false certainty; I rejected binary win/lose only.
- I chose **variant preview frames** so design stays in the experiment object.

### Solution
1. **Experiments Board** — Status chips and metric deltas across bets. Proves portfolio of experiments.
2. **Experiment Detail** — Hypothesis, variants, and run context. Proves discipline before ship/kill.
3. **Metric Library** — Primary + guardrail metrics as shared language. Proves decision hygiene.

Empty: "No experiments yet - write your first hypothesis." Error: "Stats engine delayed." Success: "Marked shipped · flagged for rollout".


### Design system notes
Tokens: `color.win.emerald`, `color.lose.rose`, `type.tabular`. Components: ExperimentRow, HypothesisForm, VariantFrame, MetricPair, DecisionModal. Pattern: ask → variant → read guardrails → decide.

### Outcomes & learnings
- **Design target:** cross-functional pair can create a complete experiment object in one sitting
- **Prototype success target:** users correctly explain primary vs guardrail in a teach-back
- Ship-test next: real stats engine, design tool embeds, rollout checklist
- Hiring signal: growth experimentation literacy, metrics thinking, designer-in-the-loop A/B UX
