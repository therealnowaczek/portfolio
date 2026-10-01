---
slug: northline
title: "Northline"
oneLiner: "AI ops profitability console for B2B SaaS"
badge: "Product design · Web"
role: "Lead Product Designer"
platform: "Web desktop"
timeline: "2–3 week design sprint"
tags:
  - "AI"
  - "B2B SaaS"
  - "Ops console"
  - "Data density"
  - "Quiet enterprise"
order: 5
accent: "#00685F"
styleLabel: "Quiet enterprise"
screens:
  - "Profitability Overview"
  - "Finding Detail: SKU Margin Leak"
  - "Ads & ROAS Intelligence"
  - "COGS & Landed Costs Ledger"
  - "Autonomous Rules & Guardrails"
  - "Empty State: Connect Store"
portfolioSignals:
  - "AI product UX"
  - "Dense B2B SaaS"
  - "Trust and lineage"
  - "Accessibility in data UI"
  - "E2E product design"
---

### Snapshot
Northline is a profitability console for B2B SaaS finance and RevOps. Quiet enterprise chrome, teal accent, leak-first IA: find where contribution margin is slipping, explain it with lineage, and offer a reversible next step, without a twelve-widget chart graveyard.

### Problem
RevOps can see revenue and burn, but not which AI workloads, infra tiers, discount cohorts, or ad channels are quietly destroying contribution margin. The weekly board pack needs a short list of leaks with evidence, not another dashboard that agrees with itself and contradicts finance.

### Goals & constraints
**Goals**
- Make contribution margin and top leaks readable in seconds on first open
- Pair every finding with a reversible action and a cited explanation
- Keep density high without losing scan order for non-analyst users
- Prototype rules/guardrails that stay supervised
- Treat empty and connect states as part of the product story

**Constraints**
- Desktop-first scope: no mobile redesign
- AI suggestions show confidence + lineage, no vibes-only chat as primary
- WCAG-minded tables and status (never color alone)
- Timeboxed 2–3 week sprint; quiet enterprise teal only

### Process
1. **Start from the board-pack question** - Assumed SaaS P&L patterns and AI/infra invoices. Framed JTBD as “where is margin leaking this week, and what can I change before Friday?”
2. **Leak-first IA** - Overview → finding list → detail drawer → action confirm. Ads, COGS ledger, and rules as supporting depth, not competing home screens.
3. **Trade off dashboard shapes** - Mega-widget walls lose the exception. Story UIs are too slow for daily ops. Chose dense table + drawer + cited explain panel.
4. **Quiet visual system** - Neutral canvas, teal for interactive and positive delta only. Status via icon + text. Compact density as default for RevOps.
5. **Prototype the trust edges** - Overview through empty connect: special attention to confidence chips, undo windows, and “estimated vs booked” language.
6. **Guard the copy** - Biggest risk: estimated savings read as guaranteed cash. The design keeps estimates labeled and actions reversible.

### Key decisions
- **Leak-first list** over a KPI-hero wall, margin problems are exceptions.
- **Source-cited AI** (“based on invoice lines…”) over freeform chat as primary.
- **Supervised rules** with guardrails, autonomy without a kill switch is not finance UX.
- **Connect empty state as onboarding**: the console is useless until a store or billing source is linked.

### Solution
1. **Profitability Overview**: Contribution margin, AI spend, and top leaks with inspect CTAs. Proves glanceable ops health.
2. **Finding Detail: SKU Margin Leak**: Cohort, model tier, estimated impact, lineage, reversible actions. Proves action locality.
3. **Ads & ROAS Intelligence**: Channel efficiency with confidence-backed explanations. Proves accountable AI reading of spend.
4. **COGS & Landed Costs Ledger**: Cost lines that feed the same true-margin story. Proves the ledger behind the leak.
5. **Autonomous Rules & Guardrails**: Threshold rules with scope, quiet hours, and confirm-before-write. Proves supervised automation.
6. **Empty State: Connect Store**: First-run connect path without fake data theater. Proves honest onboarding.

Empty: “No leaks above threshold.” Delay: “Live feed delayed: last sync 14:02.” Success: “Tier paused · undo 30s.”

### Design system notes
Tokens: accent teal, delta pos/neg, dense spacing, tabular type. Components: DataTable compact, LeakRow, ConfidenceChip, CitePanel, SoftConfirm, RulesEditor. Pattern: anomaly → local action → undo.

### Outcomes & learnings
- Focus: AI + dense B2B SaaS ops UX with trust and a11y as first-class constraints.
- Learning: lineage and undo matter more than clever chat for finance-adjacent AI.
- Next if productized: real invoice connectors, role-based leak visibility, board-pack export.
