---
slug: costradar
title: "CostRadar.ai"
oneLiner: "Profitability OS for multi-channel e-commerce: true net P&L plus an Approve-gated AI Profit Agent"
badge: "Shipped product · Founder case study"
role: "Founder & AI Design Engineer (solo)"
platform: "Web SaaS (+ PWA glance)"
timeline: "Solo-built, live, early-stage"
tags:
  - "AI UX"
  - "Fintech-adjacent"
  - "E-commerce"
  - "Design engineering"
  - "True-net P&L"
  - "Approve-gated agents"
order: 1
accent: "#449C80"
styleLabel: "Dense finance teal"
screens:
  - "Home dashboard: True Net & widgets"
  - "Breakdown: cost distribution & top leaks"
  - "Reports: Margin Waterfall / Monthly P&L"
  - "AI Insights: finding + Approve"
  - "AI Profit Agent: in-app chat"
  - "Pulse: multi-store portfolio"
portfolioSignals:
  - "Fintech-adjacent / P&L system design"
  - "AI UX with trust + Approve"
  - "Design engineer shipping React/Supabase/LLM alone"
  - "Multi-channel e-com domain complexity"
  - "Design Ops density (widgets, reports, plan gates)"
  - "Agent-in-workflow (Slack/Teams), not in-app-only AI"
---

### Snapshot
CostRadar.ai is a live, early-stage Profitability OS for multi-channel merchants that I designed and built solo. It reconciles revenue and costs into true net profit and pairs that ledger with an AI Profit Agent that names leaks and only writes behind Approve. Channels today: Shopify, Amazon, WooCommerce, BigCommerce, Allegro, and eBay.

### Problem
Merchants have channel dashboards and ads tools, but no single answer to “what did I keep?” Fees, apps, shipping, COGS, ads, opex, taxes, and FX sit in different UIs, so weekly numbers disagree and decisions get made on ROAS. The job: show true net on first open, name the leak worth fixing this morning, and let the operator act without unsupervised changes to live ads.

### Goals & constraints
**Goals**
- Make true net profit glanceable on first open
- Ground every AI finding in synced store data and the same formula as Metrics
- Pair findings with reversible, Approve-gated actions, never silent writes
- Ship end to end as design engineer: product UI, agent UX (in-app and Slack/Teams), marketing site

**Constraints**
- Web first; one design system plus a PWA glance instead of a native fork
- Trust contract: propose and confirm, quiet hours, no unsupervised pause-ads or bid changes
- Savings are shown as estimates plus a tracker, never as claimed merchant ROI
- Solo build: native dropship connectors out of scope (COGS via rules, CSV, or Zapier)

### Process
1. **Frame the money problem** - Mapped where fees hide across six channel types and where operators lose the morning. Most tools stop at ROAS or vanity contribution.
2. **Shape the IA around Connect → See → Act** - Home and Today’s Net lead to Insights or Anomalies, then Approve or a deeplink. Metrics, Orders, Costs, Reports, and Pulse stay secondary.
3. **Kill the wrong product shapes** - Rejected a vanity-ROAS hero and a fully autonomous “AI employee”. Chose a true-net ledger, a named leak, and an Approve-gated Profit Agent.
4. **Design and build the dense system** - React and TypeScript, Supabase, OpenAI: widget library, reports, proactive Slack path, and a Savings Tracker verifier. One component language for app and marketing site.

### Key decisions
- **True-net ledger over vanity ROAS**: first-open net profit is the trust contract; channel UIs already disagree.
- **Approve-gated writes only**: propose and confirm. An unsupervised ad pause destroys finance trust.
- **One high-impact morning leak per proactive run**: a threshold plus quiet hours beat alert spam.
- **AI as an action layer on the ledger**, not chat wallpaper.

### Solution
1. **Home dashboard: True Net & widgets**: True net, campaign POAS, savings tracker, and a dense widget library for morning health.
2. **Breakdown: cost distribution & top leaks**: Cost distribution, spending trend, and top leaks by category and source.
3. **Reports: Margin Waterfall / Monthly P&L**: Revenue to true net across cost layers without a chart graveyard.
4. **AI Insights: finding + Approve**: Grounded findings with savings estimates and Approve / Dismiss.
5. **AI Profit Agent: in-app chat**: Chat grounded in live store data, with Slack and Teams as the workflow path. Approve still asks first.
6. **Pulse: multi-store portfolio**: Multi-store P&L for operators and agencies running several shops.

Canonical formula: `trueNetProfit = revenue − cogs − shipping − adSpend − paymentFees − operatingExpenses − taxes`. Trust patterns: lineage to synced costs, Approve CTAs, quiet hours 22–07 on proactive Slack.

### Design system notes
Stack: React and TypeScript, Supabase (Postgres, Auth, Edge Functions), OpenAI. Tokens: accent `#00a080`, secondary `#47c1bf`, theme-aware surfaces. Patterns: dense data widgets, Margin Waterfall, insight cards, confidence and Approve CTAs, Profit Agent chat, command palette (`/`).

### Outcomes & learnings
- **Where it stands:** live at costradar.ai with 28 freemium users and one design partner. No paying customers yet, so no revenue or retention claims here.
- **Shipped:** widgets, reports, multi-platform sync, Premium AI loop with Savings Tracker, Slack and Teams Profit Agent, and an MCP tool surface.
- **Learning:** autonomy only sells behind what the agent can actually do. One confirmable action beats chat wallpaper.
