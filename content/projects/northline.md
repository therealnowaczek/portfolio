---
slug: northline
title: "Northline"
oneLiner: "AI ops console that surfaces margin leaks and model-driven savings for RevOps and finance"
badge: "Concept · Portfolio exploration"
role: "Lead Product Designer (concept)"
platform: "Web desktop"
timeline: "2–3 week design sprint"
tags:
  - "AI"
  - "B2B SaaS"
  - "Ops console"
  - "Data density"
  - "Quiet enterprise"
order: 1
accent: "#0D9488"
styleLabel: "Quiet enterprise"
screens:
  - "Overview  -  Margin pulse"
  - "Leak detail drawer"
  - "AI explain panel"
portfolioSignals:
  - "AI product UX"
  - "Dense B2B SaaS"
  - "Trust and lineage"
  - "Accessibility in data UI"
  - "E2E concept ownership"
---

### Snapshot
Northline is a profitability and AI-ops console for SaaS finance and RevOps leads who already live in Linear-grade tools. The bet: surface margin leaks and model-driven savings without a chart graveyard. Quiet enterprise chrome, teal accent, one primary action per view.

### Problem
RevOps managers can see revenue and burn, but not which AI workloads, infra tiers, or discount cohorts are quietly destroying contribution margin. Job-to-be-done: "Show me where margin is leaking this week, and what I can change before Friday's board pack."

### Goals & constraints
**Goals**
- Make contribution margin and AI spend readable in under 10 seconds on first open
- Pair every anomaly with a reversible action (pause model tier, re-tag cohort, open savings playbook)
- Keep density high without sacrificing scan order for non-analyst users
- Prototype an "Explain this delta" AI panel that cites sources, not vibes
- Design empty and permission-denied states as first-class

**Constraints**
- Desktop-first; no mobile redesign this sprint
- Trust: AI suggestions show confidence + lineage
- a11y: WCAG 2.2 AA for tables, focus, color-only status
- Time: 2-3 week concept sprint
- Visual: Linear/Stripe quiet enterprise, teal `#0D9488` only

### Process
1. **Frame & research** - Assumed inputs: SaaS P&L patterns, AI usage invoices, competitive glance at Stripe-like dashboards and Linear. CostRadar-style margin UX as personal craft inspiration only (not a client claim). Assumption: users know contribution margin vocabulary.
2. **Flows & information architecture** - Primary path: Overview → Margin leak list → Detail drawer → Action confirm. Secondary: Saved views, Export board pack, AI explain panel.
3. **Options explored** - (A) Mega-dashboard with 12 widgets (rejected: overload). (B) "Week in review" story UI (rejected: too slow for daily ops). (C) Dense table + drawer + AI cite panel (chosen: power-user scan + local actions).
4. **Visual & design system decisions** - Neutral gray canvas, 13/14px UI sans, teal for interactive + positive delta only. Status via icon + text, never color alone. Density tokens: `comfortable` / `compact` toggle for finance vs ops personas.
5. **Prototype & critique** - Stitch: Overview, Leak detail, AI explain. Figma: table keyboard nav, drawer focus trap, confidence chip readability.
6. **Validation notes** - Heuristic pass on Nielsen "visibility of system status"; assumed risk: users misread "illustrative savings" as guaranteed cash. Copy guardrails added.

### Key decisions
- I chose a **leak-first list** because margin problems are exceptions, not averages; I rejected a KPI-hero wall.
- I chose **source-cited AI** ("Based on invoice lines 14-22") because unverified chat destroys finance trust; I rejected freeform chat as primary.
- I chose **teal sparingly** so attention lands on deltas and CTAs; I rejected multi-accent theming.
- I chose **compact density as default** for RevOps; comfortable stays one toggle away.

### Solution
1. **Profitability Overview** — Contribution margin, AI spend, and top leaks with CTAs to inspect. Proves glanceable ops health.
2. **Finding Detail — SKU Margin Leak** — Cohort, model tier, estimated impact, and reversible actions with lineage. Proves action locality.
3. **Ads & ROAS Intelligence** — Channel ROAS, spend efficiency, and confidence-backed explanations. Proves accountable AI UX.

Empty: "No leaks above threshold." Error: "Live feed delayed; last sync 14:02." Success: "Tier paused · undo 30s".


### Design system notes
Tokens: `color.accent.teal`, `color.delta.pos/neg`, `space.dense`, `type.tabular`. Components: DataTable compact, LeakRow, ConfidenceChip, CitePanel, SoftConfirm. Pattern: anomaly → local action → undo.

### Outcomes & learnings
- **Illustrative target:** time-to-first-insight under 10s on Overview
- **Assumed success metric for the concept:** ≥70% of guerrilla testers name the top leak without coaching
- Ship-test next: invoice connectors, role-based leak visibility, board-ready export
- Hiring signal: AI + dense B2B SaaS ops UX with trust and a11y
