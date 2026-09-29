---
slug: harbor
title: "Harbor"
oneLiner: "Calm iOS companion for revolving credit — see what you owe, plan repayments, stay in control"
badge: "Concept · Portfolio exploration"
role: "Lead Product Designer (concept)"
platform: "iOS"
timeline: "2–3 week design sprint"
tags:
  - "Fintech"
  - "iOS"
  - "HIG"
  - "Trust UX"
  - "Repayments"
order: 2
accent: "#2563EB"
styleLabel: "HIG trust UX"
screens:
  - "Home  -  Balance & next due"
  - "Plan  -  Amount slider"
  - "Confirm  -  Receipt sheet"
portfolioSignals:
  - "Fintech trust UX"
  - "Native iOS HIG"
  - "Consequence-before-commit"
  - "Accessible money UI"
  - "Regulated-feel microcopy"
---

### Snapshot
Harbor helps people with revolving credit see what they owe, what happens if they pay early, and how to stay in control without panic. The design bet: Apple HIG clarity plus calm motion beats gamified debt apps that shame users into taps.

### Problem
Borrowers understand the minimum due, but not the interest trajectory or the emotional cost of "pay later" defaults. Persona: Lena, 34, two cards, wants one trustworthy place to plan repayments before payday. JTBD: "Help me choose a repayment that shrinks interest without wrecking this month's rent."

### Goals & constraints
**Goals**
- Make impact of payment amount visible before confirm
- Reduce anxiety copy; increase plain-language outcomes
- Support Dynamic Type and VoiceOver for money figures
- Prototype insights that educate, not upsell
- Clear separation between "due" and "recommended"

**Constraints**
- iOS HIG; native tab + sheet patterns
- Regulated-feel trust: no dark patterns, no confetti on debt
- Timeboxed concept sprint
- Assumed bank-grade data; no live API in prototype
- Accessibility: Skin Tone-independent iconography; high-contrast money states

### Process
1. **Frame & research** - Glance at Apple Wallet sheets, Revolut/Monzo calm finance, and Finom-style repayment trust cues. Assumption: users fear hidden fees more than they fear math.
2. **Flows & IA** - Home balance → Plan repayment → Confirm → Insights. Settings for due reminders only.
3. **Options explored** - (A) Chatbot coach as home (rejected: trust risk). (B) Spreadsheet-like planner (rejected: cold, un-iOS). (C) Card stack + interactive slider with live interest delta (chosen: tactile, HIG-aligned).
4. **Visual & DS** - Soft neutrals, system SF Pro, blue trust accent, large tabular numerals. Motion: 200ms sheets, no bounce on money.
5. **Prototype & critique** - Stitch Home, Plan slider, Confirm; Figma VoiceOver labels and Reduce Motion paths.
6. **Validation notes** - Heuristic on error prevention; risk that "recommended" reads as bank advice. Relabeled to "Suggested for lower interest (not advice)".

### Key decisions
- I chose a **live interest delta on the slider** because abstract APR fails; I rejected static tip cards.
- I chose **suggested vs due** as two distinct CTAs because conflating them creates regret; I rejected a single smart default button.
- I chose **no gamification** because debt UX that celebrates feels manipulative; I rejected streaks and badges.
- I chose **plain-language footnotes** over legalese walls for the concept; production would still need compliance review.

### Solution
1. **Harbor Home** — Balance, next due, and calm hierarchy into plan-or-pay. Proves trust-first money UI.
2. **Harbor Repayments** — Schedule, history, and status of upcoming payments. Proves clarity without alarm.
3. **Repayment Flow** — Amount, consequence preview, and confirm before commit. Proves consequence-before-commit.

Empty: "Link a card to see repayments." Error: "Bank timeout - try again; nothing was charged." Success: "Payment scheduled for Fri 09:00".


### Design system notes
Tokens: `color.trust.blue`, `type.money.lg`, `space.sheet`. Components: MoneyHero, PaySlider, DeltaPill, TrustFootnote, ConfirmSheet. Pattern: preview consequence → confirm → quiet success.

### Outcomes & learnings
- **Illustrative target:** users can state interest impact of +€50 payment after one pass
- **Assumed success metric for the concept:** fewer "is this advice?" confusions after footnote redesign
- Ship-test next: real schedule conflicts, multi-card allocation, biometric confirm
- Hiring signal: regulated-feel mobile fintech with HIG craft and trust microcopy
