---
slug: costradar
title: "CostRadar.ai"
oneLiner: "Profitability OS for multi-channel e-commerce: true net P&L plus an Approve-gated AI Profit Agent"
badge: "Shipped product · Founder case study"
role: "Founder & AI Design Engineer (solo)"
platform: "Web SaaS (+ PWA glance)"
timeline: "Solo-shipped live product"
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
CostRadar.ai is a live Profitability OS I designed and shipped solo for multi-channel merchants. The product reconciles revenue and costs into true net profit, not vanity ROAS, and pairs that ledger with an AI Profit Agent that names leaks and only writes behind Approve. Channels live today include Shopify, Amazon, WooCommerce, BigCommerce, Allegro, and eBay. Live at costradar.ai.

### Problem
Merchants already have channel dashboards and ads tools. What they lack is a single answer to “what did I keep?” Fees, apps, shipping, COGS, ads, opex, taxes, and FX sit in different UIs, so weekly numbers disagree and decisions get made on ROAS theater. The job: show true net on first open, name the leak worth fixing this morning, and let the operator act without gambling unsupervised mutations on live ads.

### Goals & constraints
**Goals**
- Make true net profit glanceable on first open (Home + Today’s Net)
- Ground every AI finding in synced store data and the same TNP formula as Metrics
- Pair findings with reversible, Approve-gated actions, never silent writes
- Support multi-channel sync and order-level P&L; Pulse/Portfolio for agencies
- Ship end-to-end as design engineer: product UI, agent UX (in-app + Slack/Teams), marketing site

**Constraints**
- Desktop/web first; Capacitor native was rejected in favor of one system plus a PWA glance
- Trust contract: propose + confirm, quiet hours, no unsupervised pause-ads or bid changes
- Savings language stays estimates + tracker, not invented merchant ROI claims
- Solo-shipped depth is the hiring signal; dropship native connectors are out of scope (COGS via rules/CSV/Zapier)

### Process
1. **Frame the money problem** - Mapped where fees hide across six channel types and where operators lose the morning. Competitive glance confirmed most tools stop at ROAS or vanity contribution.
2. **Shape the IA around Connect → See → Act** - Primary path: Home / Today’s Net → Insights or Anomalies → Approve or open a deeplink. Secondary: Metrics, Orders, Costs/COGS, Reports, Pulse.
3. **Kill the wrong product shapes** - Rejected a vanity-ROAS hero (operators already have that). Rejected a fully autonomous “AI employee” (finance trust dies on silent mutations). Chose true-net ledger + named leak + Approve-gated Profit Agent.
4. **Design the dense finance system** - Teal `#00a080` / secondary `#47c1bf`, theme-aware light/dark, one component language for app and marketing. Widgets, waterfall, insight cards, and chat share the same trust cues.
5. **Ship as design engineer** - React/TypeScript, Supabase, OpenAI: widget library, reports, Slack proactive path, Savings Tracker verifier.
6. **Keep the portfolio honest** - Early marketing temptation was % savings as proven ROI. Copy and UI stay on estimates + tracker so the product doesn’t overclaim.

### Key decisions
- **True-net ledger over vanity ROAS**: first-open TNP is the trust contract: channel UIs already disagree.
- **Connect → See → Act**: AI is an action layer on the ledger, not chat wallpaper.
- **Approve-gated writes only**: propose + confirm: unsupervised ad pauses destroy finance trust.
- **One high-impact morning leak per proactive run**: threshold + quiet hours beat alert spam.
- **Merchant-first depth; agency via Pulse**: portfolio views without pretending to be a white-label client portal.
- **Web SaaS + PWA glance**: one design system, ship velocity, no native fork.

### Solution
1. **Home dashboard: True Net & widgets**: True net, campaign POAS, savings tracker, and a dense widget library for morning health. Proves first-open TNP.
2. **Breakdown: cost distribution & top leaks**: Cost distribution, spending trend, and top leaks by category/source. Proves forensic cost visibility.
3. **Reports: Margin Waterfall / Monthly P&L**: Revenue → true net across cost layers without a chart graveyard. Proves operator reporting.
4. **AI Insights: finding + Approve**: Grounded findings with savings estimates and Approve / Dismiss. Proves trust-first AI UX.
5. **AI Profit Agent: in-app chat**: Chat grounded in live store data, with Slack/Teams as the workflow path; Approve still asks first. Proves agent-in-workflow.
6. **Pulse: multi-store portfolio**: Multi-store / agency P&L for operators running several shops. Proves the ledger at portfolio scale.

Canonical TNP: `trueNetProfit = revenue − cogs − shipping − adSpend − paymentFees − operatingExpenses − taxes`. Trust patterns: lineage to synced costs, Approve CTAs, quiet hours 22–07 on proactive Slack.

### Design system notes
Stack: React + TypeScript, Supabase (Postgres, Auth, Edge Functions), OpenAI, utility UI. Tokens: accent `#00a080`, secondary `#47c1bf`; theme-aware surfaces. Patterns: dense data widgets, Margin Waterfall, insight cards, Confidence/Approve CTAs, Profit Agent chat, Command Palette (`/`).

### Outcomes & learnings
- **Shipped live** on costradar.ai, widgets, reports, multi-platform sync, Premium AI loop + Savings Tracker, Slack/Teams Profit Agent, MCP tool surface.
- **UX that carries the product:** Approve gate, true-net ledger, and “morning leak” focus: denser than a feature dump.
- **Learning:** autonomy marketing only works behind what the agent can actually do. One confirmable action beats chat wallpaper.
- **Hiring signal:** fintech-adjacent P&L systems + AI UX with trust, shipped alone as a design engineer.
