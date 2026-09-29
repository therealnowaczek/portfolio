---
slug: circuit
title: "Circuit"
oneLiner: "Keyboard-first deploy and observability console — ship, watch signals, and roll back safely"
badge: "Personal exploration"
role: "Lead Product Designer"
platform: "Web dark"
timeline: "2–3 week design sprint"
tags:
  - "Developer tools"
  - "Observability"
  - "Dark UI"
  - "Dense UX"
  - "Web"
order: 3
accent: "#34D399"
styleLabel: "Vercel/Raycast dense"
screens:
  - "Deploy timeline"
  - "Incident drawer"
  - "Rollback confirm"
portfolioSignals:
  - "Developer tools craft"
  - "Keyboard-first UX"
  - "Systems thinking"
  - "Dense dark UI"
  - "Safe rollback patterns"
---

### Snapshot
Circuit is a deploy + observability surface for engineers who want Vercel-speed deploys and Raycast-grade keyboard density in one dark console. The bet: collapse "ship" and "what broke" into a single mental model without becoming another noisy APM.

### Problem
After a deploy, engineers bounce between CI, logs, and status pages to answer "is prod healthy?" JTBD: "From one keyboard-first console, redeploy, watch signals, and bisect a bad release before Slack catches fire."

### Goals & constraints
**Goals**
- Keyboard-first for top 10 actions
- Correlate deploy markers with error rate and latency on one timeline
- One-click rollback with blast-radius summary
- Dense but legible dark theme
- Prototype command palette parity with mouse paths

**Constraints**
- Dark web only this sprint
- Assume existing CI; Circuit is the control plane UI
- a11y: focus rings that work on near-black surfaces
- Timeboxed; no real infra
- Style: Vercel/Raycast dense, not playful

### Process
1. **Frame & research** - Competitive glance: Vercel dashboard, Datadog deploy overlays, Linear command menu. Assumption: users are experts; teachability < speed.
2. **Flows & IA** - Projects → Deploy timeline → Incident drawer → Rollback. Global `⌘K`.
3. **Options explored** - (A) Separate Deploy and Observe apps (rejected: context switch). (B) Full IDE-in-browser (rejected: scope). (C) Unified timeline with deploy pins + signal bands (chosen).
4. **Visual & DS** - Zinc-950 canvas, 12px mono for IDs, semantic green/amber/red with patterns (not color-only). Accent electric mint for focus.
5. **Prototype & critique** - High-fidelity prototype: Timeline, Incident, Rollback; Figma keyboard map and contrast audit.
6. **Validation notes** - Risk: density scares less senior engineers. Added progressive disclosure for "Simple status" mode.

### Key decisions
- I chose a **unified timeline** because deploys are events in a signal stream; I rejected tab-split Deploy/Observe.
- I chose **rollback with blast-radius copy** ("Affects 3 services · ~2 min") because blind rollback is scary; I rejected a naked confirm.
- I chose **⌘K parity** for every primary action so power users never hunt menus.
- I chose **pattern + color** for status to survive deuteranopia.

### Solution
1. **Deployments List** — Pins, health, and entry into detail. Proves scan-first ops density.
2. **Deploy Detail & Logs** — Commit context, stream, and inspect actions. Proves diagnosis without leaving Circuit.
3. **Incident State & Failing Checks** — Failing signals, suspected commit, and safe next steps. Proves calm incident UX.

Empty: "No deploys in range - widen window." Error: "Live metrics lagging." Success: "Rollback initiated · tracking health".


### Design system notes
Tokens: `color.canvas.void`, `color.signal.*`, `type.mono.xs`. Components: TimelineTrack, DeployPin, SignalBand, CmdK, BlastRadiusCard. Pattern: correlate → diagnose → reversible action.

### Outcomes & learnings
- **Design target:** median "find bad deploy" under 30s in prototype walkthroughs
- **Prototype success target:** keyboard-only completion of rollback happy path
- Ship-test next: real log deep-links, multi-env switcher, SLO burn alerts
- Hiring signal: dense developer-tool craft, systems thinking, keyboard UX
