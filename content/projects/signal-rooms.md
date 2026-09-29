---
slug: signal-rooms
title: "Signal Rooms"
oneLiner: "Live audio rooms with clear stage roles, expressive dark UI, and moderation that stays calm"
badge: "Personal exploration"
role: "Lead Product Designer"
platform: "iOS dark expressive"
timeline: "2–3 week design sprint"
tags:
  - "Live audio"
  - "Community"
  - "iOS"
  - "Dark expressive"
  - "Social"
order: 9
accent: "#8B5CF6"
styleLabel: "Dark expressive"
screens:
  - "Lobby"
  - "Live room"
  - "Hand queue (host)"
portfolioSignals:
  - "Expressive mobile brand"
  - "Live social UX"
  - "Role clarity and safety"
  - "Moderation affordances"
  - "Motion with a11y fallbacks"
---

### Snapshot
Signal Rooms is a live audio community product for topic rooms, speakers, and listeners with expressive dark UI. The bet: expressive motion and clear stage roles make audio social feel alive without chaotic moderation UX.

### Problem
People miss serendipitous conversation but hate Zoom formality and Twitter Spaces chaos. JTBD: "Drop into a design-career room, raise hand, speak for two minutes, leave without social hangover."

### Goals & constraints
**Goals**
- Crystal-clear roles: host, speaker, listener
- Low-friction raise hand → invite to speak
- Expressive dark visual without harming legibility
- Recording/consent cues when relevant
- Exit and mute always one tap

**Constraints**
- iOS dark expressive; original brand language
- Safety: block/report reachable
- Timeboxed; simulated live state
- a11y: VoiceOver for role changes; captions placeholder
- Performance: avatar grids that don't thrash

### Process
1. **Frame & research** - Glance at Clubhouse-era patterns, Discord stage, Twitter Spaces. Assumption: role clarity prevents pile-ons.
2. **Flows & IA** - Lobby → Live room → Raise hand → On stage → Leave. Create room flow secondary.
3. **Options explored** - (A) Flat everyone-can-talk (rejected: chaos). (B) Ticketed webinar (rejected: cold). (C) Stage + hand queue + expressive presence (chosen).
4. **Visual & DS** - Deep charcoal, neon violet accent, bold display type for room titles, soft glow on active speaker (with solid fallback).
5. **Prototype & critique** - High-fidelity prototype: Lobby, Live room, Hand queue; Figma Reduce Motion (glow → border).
6. **Validation notes** - Prototype covers Lobby → Live room → Hand queue; Reduce Motion swaps glow for a solid border.

### Key decisions
- I chose **explicit stage roles** because audio without structure fails; I rejected open-mic default.
- I chose **expressive dark brand** to show visual range beyond enterprise; I still capped glow for a11y.
- I chose **always-visible Leave/Mute** as safety rails; I rejected gesture-only exit.
- I chose **hand queue visibility for hosts** to make moderation fair.

### Solution
1. **Discover — Live Signal Rooms** — Live-now cards and enter CTAs. Proves discovery energy.
2. **Browse — Communities & Niches** — Topics and communities beyond the live lobby. Proves browse beyond FOMO.
3. **In-Room — Audio Stage** — Stage, listeners, and raise-hand. Proves role clarity mid-session.

Empty: "No live rooms - start one." Error: "Mic permission denied." Success: "You're on stage · mute anytime".


### Design system notes
Tokens: `color.void`, `color.accent.violet`, `effect.speakGlow`. Components: RoomCard, StageGrid, HandQueue, SafetySheet. Pattern: enter → role-aware participate → exit cleanly.

### Outcomes & learnings
- **Design target:** new users identify host vs speaker vs listener in under 5 seconds
- **Prototype success target:** raise-hand → speak path completed without host coaching in prototype
- Ship-test next: captions, report flow depth, network degradation states
- Hiring signal: expressive mobile brand systems, live social UX, safety affordances
