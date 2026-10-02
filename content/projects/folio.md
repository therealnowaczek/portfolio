---
slug: folio
title: "Folio"
oneLiner: "Social critique network for designers"
badge: "Product design · Android"
role: "Lead Product Designer"
platform: "Android"
timeline: "2–3 week design sprint"
tags:
  - "Android"
  - "Community"
  - "Critique"
  - "Editorial"
  - "Social"
order: 8
accent: "#B52603"
styleLabel: "Warm editorial"
screens:
  - "Feed"
  - "Project Detail"
  - "Frames"
  - "Upload Frame: Annotations"
  - "Compose Critique"
  - "Critiques & Activity"
  - "Profile: Maya Lin"
portfolioSignals:
  - "Android Material craft"
  - "Community product design"
  - "Structured critique rituals"
  - "Editorial visual systems"
  - "Creator feedback loops"
---

### Snapshot
Folio is a warm editorial Android network where designers post work-in-progress and get structured critique instead of empty likes. Material warmth plus critique rituals, not another engagement farm with a design skin.

### Problem
Designers want feedback that improves the work. Discord and social feeds give emoji and taste opinions. Persona: a mid-level product designer who needs specific, kind, actionable critique on a flow before Friday’s review, without roasting culture.

### Goals & constraints
**Goals**
- Structure critique on axes (clarity, hierarchy, edge cases, copy)
- Warm, magazine-like browsing that still feels native Android
- Make “request critique” a first-class CTA
- Support frame-level annotation and activity that rewards giving
- Profile that shows craft contribution, not follower vanity as the hero

**Constraints**
- Android Material 3: editorial warmth without looking non-native
- Timeboxed sprint; lightweight moderation assumed
- a11y: scalable type, content descriptions for mock images

### Process
1. **Borrow from workshops, not feeds** - Glance at Dribbble, Are.na, writers’ workshops. Structure beats comment volume.
2. **Design the critique loop** - Feed → Project → Frames → Annotate upload → Compose critique → Activity. Profile shows critique given/received.
3. **Reject roast mode and live-only** - Anonymous roast turns toxic. Live video rooms add scheduling friction. Chose async structured critique cards with optional chips.
4. **Warm editorial system** - Paper backgrounds, serif titles, sans UI, terracotta accent, generous crops.
5. **Soften structure so it doesn’t feel like homework** - Critique chips optional: free text still welcome.
6. **Prototype feed → profile as one culture** - Ratio and activity make giving visible without turning it into a points game.

### Key decisions
- **Structured critique chips**: free text alone drifts to taste: stars alone teach nothing.
- **Warm editorial visual**: signals craft culture: cold blue social chrome doesn’t.
- **Frame-level annotation**: critique needs a place on the work, not only a thread under it.
- **Async first**: designers critique across time zones.

### Solution
1. **Feed**: Warm editorial crops with critique-intent badges. Proves browsing joy with purpose.
2. **Project Detail**: Goals, context, and threaded critiques. Proves useful reading order.
3. **Frames**: Frame-level entry into critique. Proves work is discussed at the right altitude.
4. **Upload Frame: Annotations**: Mark areas before asking for feedback. Proves intent-rich requests.
5. **Compose Critique**: Axes + note composer. Proves structured contribution.
6. **Critiques & Activity**: Given/received loop and notifications. Proves the community ritual.
7. **Profile: Maya Lin**: Work, critique ratio, craft identity. Proves contribution over vanity metrics.

### Design system notes
Tokens: warm paper, terracotta accent, display serif. Components: PieceCard, CritiqueChip, ComposerSheet, AnnotationLayer, RatioBadge. Pattern: show goals → critique on axes → thank.

### Outcomes & learnings
- **Result:** a satisfied client.
- Focus: community product craft, Android Material fluency, and editorial systems.
- Learning: optional structure raises specificity without scaring off quick notes.
- Next if productized: moderation queues, private critique circles, Figma embed.
