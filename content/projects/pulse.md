---
slug: pulse
title: "Pulse"
oneLiner: "Soft iOS companion for energy and recovery — sleep debt, focus blocks, shame-free check-ins"
badge: "Product design"
role: "Lead Product Designer"
platform: "iOS"
timeline: "2–3 week design sprint"
tags:
  - "Wellness"
  - "iOS"
  - "Soft humanist"
  - "Habit"
  - "Health-adjacent"
order: 6
accent: "#A78BFA"
styleLabel: "Soft humanist"
screens:
  - "Today  -  Energy snapshot"
  - "Check-in sheet"
  - "Weekly pattern"
portfolioSignals:
  - "Soft mobile craft"
  - "Habit UX ethics"
  - "Inclusive health-adjacent"
  - "Dynamic Type and Reduce Motion"
  - "Shame-free product copy"
---

### Snapshot
Pulse is a soft humanist iOS companion for energy and recovery: sleep debt, focus blocks, and gentle check-ins without punishing streaks. The bet: warmth and honesty beat quantified-self severity for long-term adherence.

### Problem
People track steps and sleep in different apps, then feel judged by red rings. Persona: Ola, 29, knowledge worker, wants to notice burnout earlier. JTBD: "Help me see when I'm running hot and suggest one recovery move I might actually do."

### Goals & constraints
**Goals**
- One daily "energy snapshot" without spreadsheet overload
- Recovery suggestions that respect calendar reality
- Soft visuals; zero shame copy
- HealthKit-shaped assumptions (concept only)
- Inclusive motion and Dynamic Type

**Constraints**
- iOS soft humanist; not clinical EHR
- Not a medical device; disclaimer required
- Timeboxed sprint
- Privacy-forward empty states
- a11y: Reduce Motion alternatives for breathing cues

### Process
1. **Frame & research** - Glance at Apple Fitness calm moments, Daylio, Rise. Assumption: adherence dies when UI scolds.
2. **Flows & IA** - Today snapshot → Check-in → Recovery suggestion → Weekly pattern.
3. **Options explored** - (A) Hard gamification rings (rejected: shame). (B) Therapist chatbot (rejected: scope/trust). (C) Snapshot + one suggestion + optional journal (chosen).
4. **Visual & DS** - Mist gradients, rounded 24pt cards, humanist sans, lavender accent. Illustration sparingly.
5. **Prototype & critique** - Stitch Today, Check-in, Weekly; Figma Dynamic Type overflow and Reduce Motion.
6. **Validation notes** - Risk: users expect clinical accuracy. Added "Not medical advice" persistently but quietly.

### Key decisions
- I chose **one suggestion per day** because choice overload kills recovery; I rejected tip carousels.
- I chose **no punishing streaks** because missed days should not clear progress theater; I rejected Duolingo-style pressure.
- I chose **soft gradients with solid text containers** so contrast survives the aesthetic.
- I chose **calendar-aware suggestions** ("15 min walk between meetings") over generic advice.

### Solution
1. **Today Recovery** — Qualitative energy snapshot and soft next step. Proves calm daily entry.
2. **Daily Check-in** — Few-tap mood/energy/load with optional note. Proves low friction.
3. **Check-in Summary** — Confirmation and gentle pattern hint without clinic UI. Proves insight without overwhelm.

Empty: "Grant Health permissions when you're ready." Error: "Couldn't sync sleep - enter manually." Success: "Check-in saved".


### Design system notes
Tokens: `color.mist.*`, `color.accent.lavender`, `radius.xl`. Components: SnapshotCard, CheckInSheet, SoftChart, SuggestionPill, QuietDisclaimer. Pattern: notice → tiny input → one action.

### Outcomes & learnings
- **Illustrative target:** check-in completion feels under 20 seconds in prototype tests
- **Assumed success metric for the concept:** qualitative "I don't feel judged" majority in guerrilla feedback
- Ship-test next: real HealthKit, Focus mode integration, clinician-safe copy review
- Hiring signal: soft mobile craft, habit UX ethics, inclusive health-adjacent design
