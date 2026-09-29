---
slug: signal-rooms
title: "Signal Rooms"
oneLiner: "Live audio community rooms (not video live)"
badge: "Product design · iOS"
role: "Lead Product Designer"
platform: "iOS dark expressive"
timeline: "2–3 week design sprint"
tags:
  - "Live audio"
  - "Community"
  - "iOS"
  - "Dark expressive"
  - "Social"
order: 14
accent: "#B8F53A"
styleLabel: "Neon lime dark"
screens:
  - "Discover: Live Signal Rooms"
  - "Browse: Communities & Niches"
  - "In-Room: Audio Stage"
  - "In-Room: Live Chat & Reactions"
  - "Schedule Room: Plan Hangout"
  - "Profile: Host Studio & Replays"
portfolioSignals:
  - "Expressive mobile brand"
  - "Live social UX"
  - "Role clarity and safety"
  - "Moderation affordances"
  - "Motion with a11y fallbacks"
---

### Snapshot
Signal Rooms is a **live audio** community product for iOS: topic rooms, speakers, and listeners with clear stage roles. It is not video live streaming and has no virtual gifts. Discover rooms, browse niches, join a stage, chat/react without chaos, schedule hangouts, and host replays. Expressive dark UI with moderation that stays calm and operable. For entertainment-first **video** live rooms and gifts, see Glowcast.

### Problem
People miss serendipitous conversation but hate Zoom formality and open-mic chaos. The job: drop into a topic room, raise a hand, speak briefly, leave cleanly, with host tools that feel fair and exits that are always one tap away.

### Goals & constraints
**Goals**
- Crystal-clear roles: host, speaker, listener
- Low-friction raise hand → invite to speak
- In-room chat/reactions that don’t bury the stage
- Schedule and host studio for people who plan community, not only drop in
- Expressive dark visual with Reduce Motion fallbacks: block/report reachable

**Constraints**
- iOS dark expressive: original brand language
- Timeboxed; simulated live state
- VoiceOver for role changes; captions as a placeholder, not a fake claim

### Process
1. **Role clarity as the safety feature** - Glance at stage products and Discord stage. Open-mic defaults create pile-ons.
2. **Discover → room → host tools** - Live discover, browse niches, in-room stage + chat, schedule, host profile/replays.
3. **Reject flat talk and webinar coldness** - Everyone-can-talk fails. Ticketed webinar is too cold. Chose stage + hand queue + expressive presence.
4. **Expressive system with a11y brakes** - Charcoal, violet accent, bold room titles: glow on active speaker with solid-border Reduce Motion fallback.
5. **Prototype host fairness** - Hand queue visibility, always-visible Leave/Mute, safety sheet reachability.
6. **Design beyond the live moment** - Schedule and replays so community isn’t only FOMO lobbies.

### Key decisions
- **Explicit stage roles**: audio without structure fails.
- **Chat beside stage, not instead of it**: reactions shouldn’t hide who’s speaking.
- **Always-visible Leave/Mute**: safety rails beat gesture-only exit.
- **Host studio + schedule**: community products need planners, not only lurkers.

### Solution
1. **Discover: Live Signal Rooms**: Live-now cards and enter CTAs. Proves discovery energy.
2. **Browse: Communities & Niches**: Topics beyond the live lobby. Proves browse without FOMO-only IA.
3. **In-Room: Audio Stage**: Stage, listeners, raise-hand. Proves role clarity mid-session.
4. **In-Room: Live Chat & Reactions**: Side channel that stays secondary to audio. Proves social texture without chaos.
5. **Schedule Room: Plan Hangout**: Create/schedule flow for hosts. Proves intentional community building.
6. **Profile: Host Studio & Replays**: Host identity and replay access. Proves continuity after the live moment.

Empty: “No live rooms. Start one.” Error: “Mic permission denied.” Success: “You’re on stage · mute anytime.”

### Design system notes
Tokens: void, violet accent, speakGlow with solid fallback. Components: RoomCard, StageGrid, HandQueue, ReactionRail, SafetySheet, HostStudio. Pattern: enter → role-aware participate → exit cleanly.

### Outcomes & learnings
- Exploration of expressive mobile brand systems, live social UX, and safety affordances.
- Learning: role clarity is moderation UX, not just a badge color.
- Next if productized: captions depth, report flow, network degradation states.
- Hiring signal: dark expressive craft that still stays operable and safe.
