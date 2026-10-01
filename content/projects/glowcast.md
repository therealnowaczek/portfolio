---
slug: glowcast
title: "Glowcast"
oneLiner: "Video live streaming with creator discovery, gifts, and safer Match"
badge: "Mobile product · Live entertainment"
role: "Lead Product Designer"
platform: "iOS"
timeline: "2–3 week design sprint"
tags:
  - "Live video"
  - "Social"
  - "iOS"
  - "Entertainment"
  - "Safety"
order: 13
accent: "#FF6B5B"
styleLabel: "Nightlife coral dark"
screens:
  - "Discover: Live Now"
  - "Live Room: Stream + Chat + Gifts"
  - "Gift Confirm Sheet"
  - "Match Consent Bridge"
portfolioSignals:
  - "Live entertainment mobile UX"
  - "Creator discovery cold-start"
  - "Gift trust before commit"
  - "Face-safe live chrome"
  - "Consent-first Match entry"
---

### Snapshot
Glowcast is an iOS live entertainment product for video streams, creator discovery, lightweight gifts, and a safer path into Match / 1:1. Viewers find someone interesting live now without feeling lost or creepy. Creators go live fast, keep energy on camera, and earn without UI fighting the stream. Distinct from Signal Rooms: Glowcast is **video live + gifts**; Signal Rooms is **audio stage community**.

### Problem
Cold-start live apps bury faces under chat and gift spam, or push Match into awkward 1:1 without clear consent. Viewers bounce when discovery feels random or predatory. Creators lose energy when chrome covers the performance and gift taps charge without a clear receipt.

### Goals & constraints
**Goals**
- Surface live-now discovery that feels curated, not creepy
- Keep chat and gifts off the face: stream stays the hero
- Show gift cost and recipient before commit
- Make Match entry mutual and readable
- Keep go-live setup short enough that creators actually start

**Constraints**
- iOS nightlife visual language: coral on charcoal, readable contrast
- Timeboxed sprint with simulated live state
- No competitor trademarks or UI copies
- Accessibility: Dynamic Type-friendly labels; Reduce Motion for LIVE pulse

### Process
1. **Users** - Viewer JTBD: find someone interesting live now without getting lost or creepy vibes. Creator JTBD: go live fast, keep energy, earn without fighting the UI.
2. **Key flows** - Discover Live Now → enter Live Room → gift tray → confirm sheet. Optional Match Consent before 1:1. Go-live checklist sketched for creator path.
3. **Cold-start discovery** - Live-now chips and niche cards beat endless For You emptiness. Host title and niche read before tap.
4. **Face-safe room chrome** - Chat in the bottom band; gifts on a side rail; center reserved for the performer.
5. **Gift trust** - Consequence before commit: amount, recipient, balance impact, then quiet receipt.
6. **Match consent bridge** - Mutual yes copy before connecting; exit always visible.

### Key decisions
- **Video live, not audio rooms**: keeps Glowcast clear next to Signal Rooms.
- **Gift confirm sheet**: accidental taps are the failure mode; preview cost before charge.
- **Face-safe chrome**: entertainment dies when overlays cover the performer.
- **Match as consent bridge**: 1:1 without mutual clarity reads as creepy, not fun.
- **Discover chips over FOMO-only lobby**: niches give orientation on day one.

### Solution
1. **Discover: Live Now**: Live cards, niche chips, Go Live. Proves cold-start discovery energy.
2. **Live Room: Stream + Chat + Gifts**: Full-bleed video with side gift tray and bottom chat. Proves face-safe live chrome.
3. **Gift Confirm Sheet**: Cost, recipient, balance preview before send. Proves consequence-before-commit.
4. **Match Consent Bridge**: Mutual consent copy and clear exit before 1:1. Proves safer Match entry.

Empty: “No lives in this niche. Try Live now.” Error: “Gift didn’t send. Nothing charged.” Success: “Gift sent to Elena.”

### Design system notes
Tokens: charcoal void, coral primary, amber secondary, mint LIVE. Components: LiveNowCard, RoomChrome, GiftTray, GiftConfirmSheet, MatchConsentBridge. Pattern: discover → watch → gift with receipt → optional Match with consent.

### Outcomes & learnings
- **Result:** a satisfied client.
- Prototype target: viewers reach a live room from Discover in under three taps without confusion about what is live now.
- Prototype target: gift confirm reduces accidental spend regret versus one-tap send (to validate in moderated tests).
- Prototype target: Match consent copy is understood before connect; exit remains one tap.
- Learning: face-safe layout is a product requirement, not polish. Next to validate: go-live checklist timing, report/block reachability mid-stream, and gift tier comprehension with real coin balances.
