---
slug: costradar
title: "CostRadar.ai"
oneLiner: "Profitability OS for multi-channel e-commerce — true net P&L plus an Approve-gated AI Profit Agent"
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
accent: "#00a080"
styleLabel: "Dense finance teal"
screens:
  - "Home dashboard — True Net & widgets"
  - "Breakdown — cost distribution & top leaks"
  - "Reports — Margin Waterfall / Monthly P&L"
  - "AI Insights — finding + Approve"
  - "AI Profit Agent — in-app chat"
  - "Pulse — multi-store portfolio"
portfolioSignals:
  - "Fintech-adjacent / P&L system design"
  - "AI UX with trust + Approve"
  - "Design engineer shipping React/Supabase/LLM alone"
  - "Multi-channel e-com domain complexity"
  - "Design Ops density (widgets, reports, plan gates)"
  - "Agent-in-workflow (Slack/Teams), not in-app-only AI"
---

### Snapshot
CostRadar is a Profitability OS for multi-channel merchants: true net profit (not vanity ROAS) plus an AI Profit Agent that names cost leaks and can act only behind Approve. Channels live: Shopify, Amazon, WooCommerce, BigCommerce, Allegro, eBay. Design bet: one ledger and one morning action beat a chart graveyard of channel dashboards that disagree. Live at costradar.ai (Radrly Sp. z o.o.).

### Problem
Merchants see revenue and ROAS in native dashboards or Triple Whale–class tools, but costs are fragmented (platform fees, apps, shipping, COGS, ads, opex, taxes/FX) — so they don’t know what they kept. JTBD: “Show me true net of what I kept, and name the leak worth fixing this morning.” Persona: solo/small e-com operator or agency AM across several stores; tired of Excel + channel UIs that don’t reconcile.

### Goals & constraints
**Goals**
- Make true net profit glanceable on first open (Home + Today’s Net)
- Ground every AI insight in synced store data and the same TNP formula as Metrics
- Pair findings with reversible, Approve-gated actions (never silent mutations)
- Support multi-channel sync + order-level P&L depth for operators and Pulse/Portfolio for agencies
- Ship end-to-end as design engineer: product UI, agent UX (in-app + Slack/Teams), marketing site

**Constraints**
- Desktop/web first (Capacitor native rejected); PWA glance for Today
- Trust: propose + confirm; quiet hours; no unsupervised pause-ads / bid changes
- Honesty in portfolio: do not claim verified 15–25% merchant ROI (deck target language only)
- Solo-shipped end-to-end: product UI, agent UX, marketing site — depth of system craft is the signal
- Dropship native connectors NO-GO; COGS via rules/CSV/Zapier
- SafeRadar and NDA mobile apps are separate — not this card

### Process
1. **Frame & research** - Multi-channel fee fragmentation; competitive glance at native dashboards and analytics suites that stop at ROAS; operator JTBD around “what did I keep.”
2. **Flows & information architecture** - Connect → See → Act. Primary: Home / Today’s Net → Insights or Anomalies → Approve or Open deeplink. Secondary: Metrics (Command Palette), Orders breakdown, Costs/COGS, Reports gallery, Pulse/Portfolio.
3. **Options explored** - (A) Vanity ROAS hero (rejected: same lie merchants already have). (B) Fully autonomous “AI employee” (rejected: trust + thin memory; not shipping reality). (C) True-net ledger + named leak + Approve-gated Profit Agent (chosen).
4. **Visual & design system decisions** - Dense finance UI, teal `#00a080` / secondary `#47c1bf`, theme-aware light/dark, rounded-lg buttons; one system for app + marketing.
5. **Prototype → ship** - React/TS + Supabase + OpenAI; widget library, reports, Slack proactive path, Savings Tracker verifier.
6. **Validation notes** - Risk: marketing % savings read as proven ROI → portfolio copy uses estimates + tracker language only.

### Key decisions
- I chose a **true-net ledger** over vanity ROAS because operators already drown in channel dashboards that disagree.
- I chose **Connect → See → Act** so AI is an action layer on the ledger, not a chat wallpaper.
- I chose **Approve-gated writes only** (propose + confirm) because unsupervised mutations destroy finance trust; I rejected silent auto-pause ads.
- I chose **one high-impact insight per proactive run** (min savings threshold, quiet hours) over alert spam.
- I chose **merchant-first depth**; agency = Pulse/Portfolio operator workflow — not a white-label client portal (current non-goal).
- I chose **web SaaS + PWA glance**, not Capacitor, to keep one design system and ship velocity.

### Solution
1. **Home dashboard + widget library** — True net, campaign POAS, savings tracker, and ~54 widgets for glanceable health. Proves first-open TNP.
2. **Breakdown** — Cost distribution, spending trend, and top leaks by category/source. Proves forensic cost visibility.
3. **Reports — Margin Waterfall** — Visual flow from revenue to true net across cost layers. Proves operator reporting without a chart graveyard.
4. **AI Insights + Approve** — Grounded findings with savings estimates and Approve / Dismiss; no unsupervised ad mutations. Proves trust-first AI UX.
5. **AI Profit Agent** — In-app chat (+ Slack/Teams path) grounded in live store data; Approve always asks first. Proves agent-in-workflow.
6. **Pulse + Portfolio P&L** — Multi-store / agency operator views (Premium). Proves the multi-channel ledger at portfolio scale.

Canonical TNP: `trueNetProfit = revenue − cogs − shipping − adSpend − paymentFees − operatingExpenses − taxes`. Empty / trust patterns: findings with lineage to synced costs; Approve CTAs; quiet hours 22–07 on proactive Slack.

### Design system notes
Stack: React + TypeScript, Supabase (Postgres, Auth, Edge Functions), OpenAI, Tailwind-class utility UI. Tokens: accent `#00a080`, secondary `#47c1bf`; theme-aware surfaces. Components / patterns: dense Data widgets, Margin Waterfall, Insight cards, Confidence/Approve CTAs, Profit Agent chat, Command Palette (`/`).

### Outcomes & learnings
- **Shipped live** on costradar.ai — a full Profitability OS solo-built as design engineer: 54 widgets, ~21 reports, multi-platform sync, Premium AI loop + Savings Tracker, Slack/Teams Profit Agent, and MCP tool surface.
- **Craft signal:** Connect → See → Act with a shared true-net formula across Metrics, Insights, and the agent — dense finance UI that operators can trust on first open.
- **Trust spine:** Approve-gated actions only; findings grounded in synced store data; quiet hours and a narrow write catalog so AI never silently mutates ads or bids.
- **Learning:** Autonomy marketing must stay behind what the agent can actually do — one high-impact, confirmable action beats chat wallpaper every time.
