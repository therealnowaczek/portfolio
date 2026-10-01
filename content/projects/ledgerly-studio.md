---
slug: ledgerly-studio
title: "Ledgerly Studio"
oneLiner: "Growth experimentation lab"
badge: "Product design · Web"
role: "Lead Product Designer"
platform: "Web analytics"
timeline: "2–3 week design sprint"
tags:
  - "Growth"
  - "Experimentation"
  - "Analytics"
  - "Web"
  - "Metrics"
order: 15
accent: "#2563EB"
styleLabel: "Growth lab blue"
screens:
  - "Experiments Board"
  - "Experiment Detail"
  - "Metric Library"
portfolioSignals:
  - "Growth experimentation"
  - "Metrics and guardrails"
  - "Hypothesis-first UX"
  - "Designer-in-the-loop A/B"
  - "Decision ritual design"
---

### Snapshot
Ledgerly Studio is a growth experimentation lab where PMs and designers define hypotheses, attach variants, and decide ship/kill without drowning in BI charts. A lab notebook with guardrails, not a metrics graveyard.

### Problem
Growth teams lose signal when experiment setup, design variants, and analytics live in three tools. The job: write a hypothesis, attach variants, monitor primary and guardrail metrics, and decide with shared language, including “inconclusive.”

### Goals & constraints
**Goals**
- Hypothesis-first creation flow
- Variant preview slots so design stays in the experiment object
- Primary + guardrail metrics clearly separated
- Decision states: running / won / lost / inconclusive
- Statistical humility in UI copy, no fake certainty theater

**Constraints**
- Desktop analytics console: timeboxed; simulated experiment data
- Charts with table fallbacks for a11y
- Exploration results labeled as such, not causal proof claims

### Process
1. **Put designers in the experiment object** - Glance at Optimizely/GrowthBook-class tools. Designers need seats, not CSV afterthoughts.
2. **Board → detail → metric language** - Portfolio of bets, deep experiment notebook, shared metric library.
3. **Reject pure BI and code-only flags** - Dashboards without an experiment object fail. Code-only flags exclude design. Chose lab notebook + variants + decision ritual.
4. **Clean analytics visual** - Light chrome, emerald for wins, restrained rose for losses, tabular nums, chart + table twins.
5. **Prototype the decision moment** - Ship/kill/inconclusive with guardrails visible beside the primary metric.
6. **Fight false certainty in copy** - Inconclusive is a first-class state: confidence language stays humble.

### Key decisions
- **Hypothesis as required**: tool-led tests without questions waste traffic.
- **Guardrails beside primary**: wins that tank retention must be visible.
- **Inconclusive as a real state**: binary win/lose creates fake certainty.
- **Metric library as shared language**: teams argue less when names are owned.

### Solution
1. **Experiments Board**: Status chips and metric deltas across bets. Proves a portfolio of experiments.
2. **Experiment Detail**: Hypothesis, variants, run context, decision actions. Proves discipline before ship/kill.
3. **Metric Library**: Primary + guardrail metrics as shared vocabulary. Proves decision hygiene.

Empty: “No experiments yet. Write your first hypothesis.” Delay: “Stats engine delayed.” Success: “Marked shipped · flagged for rollout.”

### Design system notes
Tokens: win emerald, lose rose, tabular type. Components: ExperimentRow, HypothesisForm, VariantFrame, MetricPair, DecisionModal. Pattern: ask → variant → read guardrails → decide.

### Outcomes & learnings
- **Result:** a satisfied client.
- Focus: growth experimentation literacy, metrics thinking, and designer-in-the-loop A/B UX.
- Learning: inconclusive and guardrails do more for decision quality than prettier winner banners.
- Next if productized: real stats engine, design-tool embeds, rollout checklist.
