---
slug: harbor
title: "Harbor"
oneLiner: "Fintech repayments and insights companion"
badge: "Personal exploration"
role: "Lead Product Designer"
platform: "iOS"
timeline: "2–3 week design sprint"
tags:
  - "Fintech"
  - "iOS"
  - "HIG"
  - "Trust UX"
  - "Repayments"
order: 6
accent: "#2563EB"
styleLabel: "HIG trust UX"
screens:
  - "Harbor Home"
  - "Harbor Repayments"
  - "Repayment Flow"
  - "Payment Scheduled Success"
  - "Harbor Insights"
  - "Harbor Settings"
portfolioSignals:
  - "Fintech trust UX"
  - "Native iOS HIG"
  - "Consequence-before-commit"
  - "Accessible money UI"
  - "Regulated-feel microcopy"
---

### Snapshot
Harbor is a personal exploration of a calm iOS companion for revolving credit: what you owe, what a payment changes, and how to schedule it without panic UI. Apple HIG clarity and consequence-before-commit beat gamified debt apps that shame people into taps.

### Problem
Borrowers understand the minimum due, not the interest trajectory or the emotional cost of “pay later” defaults. Persona: someone juggling cards who wants one trustworthy place to plan a repayment before payday, without a coach chatbot or confetti on debt.

### Goals & constraints
**Goals**
- Show impact of payment amount before confirm
- Keep copy plain: separate “due” from “suggested”
- Support Dynamic Type and VoiceOver for money figures
- Educate with insights that don’t upsell
- Quiet success after schedule, no celebration theater

**Constraints**
- iOS HIG sheets and tabs: regulated-feel trust (no dark patterns)
- Timeboxed sprint; assumed bank-grade data, no live API
- Accessibility: high-contrast money states; Reduce Motion paths

### Process
1. **Frame around regret, not math lectures** - Glance at Wallet sheets and calm banking apps. Assumption: people fear hidden outcomes more than they fear numbers.
2. **Flow: see → plan → confirm → learn** - Home balance → Repayments → Flow with live delta → Success → Insights. Settings for reminders only.
3. **Reject coach-home and spreadsheet coldness** - Chatbot-as-home fails trust. Spreadsheet planners feel un-iOS. Chose card hierarchy + slider with live interest delta.
4. **HIG visual language** - Soft neutrals, SF Pro, blue trust accent, large tabular numerals. 200ms sheets: no bounce on money.
5. **Prototype VoiceOver and footnotes** - Labels for money figures: “suggested” carefully footnoted as not advice.
6. **Tone pass** - Removed anything that read like bank advice or shame. Success is quiet confirmation.

### Key decisions
- **Live interest delta on the slider**: abstract APR fails: consequence must move with the thumb.
- **Suggested vs due as distinct CTAs**: conflating them creates regret.
- **No gamification**: debt UX that celebrates feels manipulative.
- **Quiet scheduled success**: receipt clarity over confetti.

### Solution
1. **Harbor Home**: Balance, next due, calm path into plan-or-pay. Proves trust-first money UI.
2. **Harbor Repayments**: Schedule, history, upcoming status. Proves clarity without alarm.
3. **Repayment Flow**: Amount, consequence preview, confirm before commit. Proves consequence-before-commit.
4. **Payment Scheduled Success**: Quiet receipt of what happens next. Proves regulated-feel confirmation.
5. **Harbor Insights**: Interest trajectory and plain-language education. Proves insight without upsell.
6. **Harbor Settings**: Reminders and linked-card controls. Proves control without cluttering Home.

Empty: “Link a card to see repayments.” Error: “Bank timeout. Try again: nothing was charged.” Success: “Payment scheduled for Fri 09:00.”

### Design system notes
Tokens: trust blue, money type scale, sheet spacing. Components: MoneyHero, PaySlider, DeltaPill, TrustFootnote, ConfirmSheet. Pattern: preview consequence → confirm → quiet success.

### Outcomes & learnings
- Exploration of regulated-feel mobile fintech with HIG craft and trust microcopy.
- Learning: consequence-before-commit reduces “did I just…?” moments more than longer help text.
- Next if productized: multi-card allocation, biometric confirm, compliance review on suggestion language.
- Hiring signal: calm money UI under real anxiety constraints.
