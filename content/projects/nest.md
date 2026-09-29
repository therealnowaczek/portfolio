---
slug: nest
title: "Nest"
oneLiner: "Local services marketplace"
badge: "Product design · Cross-platform"
role: "Lead Product Designer"
platform: "iOS + desktop web"
timeline: "2–3 week design sprint"
tags:
  - "Marketplace"
  - "Cross-platform"
  - "Local services"
  - "Trust"
  - "Booking"
order: 12
accent: "#006B2C"
styleLabel: "Friendly utilitarian"
screens:
  - "Mobile iOS Home"
  - "Mobile Pro Profile & Reviews"
  - "Mobile Booking & Checkout"
  - "Mobile Bookings & Activity"
  - "Mobile Live Pro Tracking & ETA"
  - "Desktop Web Results & Booking Drawer"
  - "Desktop Web Results (Full Map & List)"
portfolioSignals:
  - "Multi-platform marketplace"
  - "Trust and verification UX"
  - "Fee transparency"
  - "Shared IA native shells"
  - "Two-sided product thinking"
---

### Snapshot
Nest is a local-services marketplace across iOS and desktop web: find a vetted pro, see price and fees before chat, book, track, and manage activity. Shared IA with platform-honest shells: trust scaffolding matters more than novelty in two-sided local markets.

### Problem
Hiring a cleaner, repair pro, or tutor still fragments across chats and Facebook groups with unclear pricing and safety. Seeker JTBD: book a vetted pro for Saturday, know the total, message in-app. Pro JTBD (sketched): get qualified requests without lead-fee surprises.

### Goals & constraints
**Goals**
- Shared object model across iOS and web
- Transparent price and fee display before chat
- Booking, activity, and live ETA on mobile
- Desktop results that use map + list without aping a stretched phone
- Honest verification labels, earned, not decorative shields

**Constraints**
- Two platforms in one sprint: seeker path prioritized
- Timeboxed; careful trust/safety copy (no overclaim)
- a11y: VoiceOver on iOS, keyboard on web

### Process
1. **Start from fee-surprise failure** - Glance at TaskRabbit-class flows and local Facebook pain. Opacity kills conversion.
2. **Shared IA, native chrome** - Search → Profile → Book → Activity → Live tracking. Desktop gets full map/list and a booking drawer.
3. **Reject chat-first and instant-only** - Price-later chat breeds distrust. Instant-only is too rigid for repairs. Chose clear rates + request-to-book hybrid.
4. **Friendly utilitarian system** - Shared tokens: coral CTAs; iOS HIG bars; web sidebar filters.
5. **Prototype parity checklist** - Same objects, different shells: verification language expandable (“ID checked · details”).
6. **Design post-book calm** - Activity and live ETA so the product doesn’t end at checkout.

### Key decisions
- **Price before chat**: local-market failure mode is opacity.
- **Shared IA, native chrome**: cross-platform ≠ identical pixels.
- **Request-to-book hybrid**: scoping for repairs: instant where SKUs are fixed.
- **Live tracking as a trust screen**: “where’s my pro?” is part of the product, not a SMS afterthought.

### Solution
1. **Mobile iOS Home**: Search, map/list, rate ranges into pro cards. Proves scan + trust at list level.
2. **Mobile Pro Profile & Reviews**: Portfolio, reviews, fee breakdown. Proves transparency before booking.
3. **Mobile Booking & Checkout**: Slot, address, total, request confirm. Proves transparent commit.
4. **Mobile Bookings & Activity**: Upcoming and past jobs in one place. Proves post-book continuity.
5. **Mobile Live Pro Tracking & ETA**: Map + status while the pro is en route. Proves operational trust.
6. **Desktop Web Results & Booking Drawer**: Results with booking without leaving search context. Proves desktop efficiency.
7. **Desktop Web Results (Full Map & List)**: Full-bleed map + list for spatial browse. Proves web-native density.

Empty: “No pros in range. Widen radius.” Error: “Payment method failed. Request not sent.” Success: “Request sent · usually replies in 2h.”

### Design system notes
Shared: PriceBreakdown, TrustBadge, ProCard, SlotPicker, TrackingMap. Platform shells differ. Pattern: search → trust → transparent total → request → track.

### Outcomes & learnings
- Exploration of multi-platform marketplace UX, trust design, and fee transparency.
- Learning: verification labels need expandable meaning or they become decorative lies.
- Next if productized: pro onboarding, dispute flow, real maps performance.
- Hiring signal: two-sided thinking with seeker-path craft across phone and desktop.
