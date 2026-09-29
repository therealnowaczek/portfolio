---
slug: nest
title: "Nest"
oneLiner: "Cross-platform marketplace connecting neighbors with vetted local pros — trust, pricing, booking"
badge: "Concept · Portfolio exploration"
role: "Lead Product Designer (concept)"
platform: "iOS + desktop web"
timeline: "2–3 week design sprint"
tags:
  - "Marketplace"
  - "Cross-platform"
  - "Local services"
  - "Trust"
  - "Booking"
order: 8
accent: "#F43F5E"
styleLabel: "Friendly utilitarian"
screens:
  - "Search results (iOS)"
  - "Pro profile"
  - "Booking confirm (web)"
portfolioSignals:
  - "Multi-platform marketplace"
  - "Trust and verification UX"
  - "Fee transparency"
  - "Shared IA native shells"
  - "Two-sided product thinking"
---

### Snapshot
Nest connects neighbors with local service pros (cleaning, repairs, tutoring) across iOS and desktop web with shared IA and platform-honest UI. The bet: trust scaffolding (reviews, verified badges, clear pricing) matters more than novelty in two-sided local markets.

### Problem
Hiring a local pro is fragmented across chats and Facebook groups with unclear pricing and safety. JTBD (seeker): "Book a vetted pro for Saturday, know the price, and message in-app." JTBD (pro): "Get qualified requests without lead-fee surprises."

### Goals & constraints
**Goals**
- Shared object model across iOS and web
- Transparent price and fee display before chat
- Booking + messaging happy path
- Trust markers that are earned, not decorative
- Responsive web that doesn't ape a stretched phone

**Constraints**
- Two platforms in one sprint: prioritize seeker path
- Trust/safety copy carefully (no overclaim)
- Timeboxed
- a11y on both: VoiceOver + web keyboard
- Style: friendly utilitarian, not luxury marketplace

### Process
1. **Frame & research** - Glance at TaskRabbit, Bark, local Facebook UX failures. Assumption: fee surprises kill conversion.
2. **Flows & IA** - Search → Pro profile → Get quote / Book → Chat. Pro side sketched only.
3. **Options explored** - (A) Chat-first, price later (rejected: distrust). (B) Instant book only (rejected: too rigid for repairs). (C) Profile with clear rate + request-to-book (chosen).
4. **Visual & DS** - Shared tokens; iOS uses HIG bars, web uses sidebar filters. Accent coral for CTAs.
5. **Prototype & critique** - Stitch iOS Search, Profile, Booking; web Search results; Figma parity checklist.
6. **Validation notes** - Risk: "Verified" implies background check depth. Relabeled "ID checked · details" with expandable meaning.

### Key decisions
- I chose **price before chat** because opacity is the local-market failure mode; I rejected chat-gated quotes as default.
- I chose **shared IA, native chrome** so cross-platform doesn't mean identical pixels.
- I chose **request-to-book hybrid** for categories that need scoping; instant book for fixed-price SKUs.
- I chose **honest verification labels** over vague shield icons.

### Solution
1. **Mobile iOS Home** — Search, map/list, and rate range into pro cards. Proves scan + trust at list level.
2. **Mobile Pro Profile & Reviews** — Portfolio, reviews, and fee breakdown. Proves transparency before booking.
3. **Mobile Booking & Checkout** — Slot, address, total, and request confirm. Proves transparent commit.

Empty: "No pros in range - widen radius." Error: "Payment method failed - request not sent." Success: "Request sent · usually replies in 2h (illustrative)".


### Design system notes
Shared: PriceBreakdown, TrustBadge, ProCard, SlotPicker. Platform shells differ. Pattern: search → trust → transparent total → request.

### Outcomes & learnings
- **Illustrative target:** seekers can state total cost before messaging in prototype tests
- **Assumed success metric for the concept:** cross-platform task success parity on core booking
- Ship-test next: pro onboarding, dispute flow, real maps performance
- Hiring signal: multi-platform marketplace UX, trust design, fee transparency
