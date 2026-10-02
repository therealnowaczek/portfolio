---
slug: circuit
title: "Circuit"
oneLiner: "Deploy and observability console for engineers"
badge: "Product design · Web"
role: "Lead Product Designer"
platform: "Web dark"
timeline: "2–3 week design sprint"
tags:
  - "Developer tools"
  - "Observability"
  - "Dark UI"
  - "Dense UX"
  - "Web"
order: 7
accent: "#A078FF"
styleLabel: "Violet deploy dense"
screens:
  - "Deployments List"
  - "Deploy Detail & Logs"
  - "Incident State & Failing Checks"
  - "Metrics & Performance"
  - "Logs & Traces Explorer"
  - "Environment Variables & Secrets"
portfolioSignals:
  - "Developer tools craft"
  - "Keyboard-first UX"
  - "Systems thinking"
  - "Dense dark UI"
  - "Safe rollback patterns"
---

### Snapshot
Circuit is a dark deploy + observability console for engineers: ship, watch signals, bisect a bad release, and roll back with blast-radius clarity. Vercel-speed ship energy meets Raycast-grade keyboard density, without becoming another noisy APM.

### Problem
After a deploy, engineers bounce between CI, logs, and status pages to answer “is prod healthy?” The job is one keyboard-first surface: redeploy, correlate signals to a release, and reverse a bad ship before Slack catches fire.

### Goals & constraints
**Goals**
- Keyboard-first for the top actions (list, detail, incident, rollback, search)
- Correlate deploy markers with error rate and latency
- One-click rollback with blast-radius summary
- Dense dark theme that stays legible
- Secrets and env management without leaving the console mental model

**Constraints**
- Dark web only this sprint: assume existing CI
- Focus rings that work on near-black surfaces
- Timeboxed; no real infra behind the prototype

### Process
1. **Map the post-deploy panic path** - Glance at Vercel dashboards, Datadog deploy overlays, Linear-style command menus. Experts prioritize speed over teachability.
2. **Unify ship and observe** - Projects → Deployments → Detail/logs → Incident → Metrics/traces. Global ⌘K. Secrets as a controlled adjacent surface.
3. **Reject split apps and IDE-in-browser** - Separate Deploy/Observe products force context switches. Full IDE scope explodes. Chose a unified timeline with deploy pins and signal bands.
4. **Dense dark system** - Zinc canvas, mono for IDs, semantic status with pattern + color, mint accent for focus.
5. **Prototype rollback and incident calm** - Blast-radius copy, failing checks, progressive “simple status” disclosure for less senior engineers.
6. **Keyboard map audit** - Every primary mouse path has a command-palette twin.

### Key decisions
- **Unified timeline**: deploys are events in a signal stream, not a separate app.
- **Rollback with blast-radius copy**: blind confirm is scary: naked “Rollback” is not enough.
- **⌘K parity**: power users should not hunt menus during an incident.
- **Secrets as a first-class screen**: env mistakes are deploy incidents waiting to happen.

### Solution
1. **Deployments List**: Pins, health, entry into detail. Proves scan-first ops density.
2. **Deploy Detail & Logs**: Commit context, stream, inspect actions. Proves diagnosis without leaving Circuit.
3. **Incident State & Failing Checks**: Failing signals, suspected commit, safe next steps. Proves calm incident UX.
4. **Metrics & Performance**: Latency/error bands correlated to deploy pins. Proves observe-next-to-ship.
5. **Logs & Traces Explorer**: Queryable depth for bisecting a bad release. Proves power-user diagnosis.
6. **Environment Variables & Secrets**: Controlled secrets UX with reveal/audit cues. Proves safe config craft.

### Design system notes
Tokens: void canvas, signal colors, mono xs. Components: TimelineTrack, DeployPin, SignalBand, CmdK, BlastRadiusCard, SecretsRow. Pattern: correlate → diagnose → reversible action.

### Outcomes & learnings
- **Result:** a satisfied client.
- Focus: dense developer-tool craft, systems thinking, and keyboard UX.
- Learning: blast-radius language turns rollback from a dare into a decision.
- Next if productized: real log deep-links, multi-env switcher, SLO burn alerts.
