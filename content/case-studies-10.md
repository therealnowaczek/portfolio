# Portfolio case-study pack - Marcin Nowak

Product design cases for the gallery. CostRadar.ai is the shipped founder case; Appfire / SoftwarePlant employment work is covered on the CV and Impact sections. These ten cases cover product design across web, iOS, and Android.

Each case uses a platform-framed product design badge. Outcomes use design targets and prototype success targets.

---

## 1. Northline - AI ops profitability console for B2B SaaS

**Badge:** Product design · Web
**Role:** Lead Product Designer 
**Platform:** Web desktop 
**Timeline:** 2–3 week design sprint 
**Tags:** AI, B2B SaaS, Ops console, Data density, Quiet enterprise

### Snapshot
Northline is a profitability and AI-ops console for SaaS finance and RevOps leads who already live in Linear-grade tools. The bet: surface margin leaks and model-driven savings without a chart graveyard. Quiet enterprise chrome, teal accent, one primary action per view.

### Problem
RevOps managers can see revenue and burn, but not which AI workloads, infra tiers, or discount cohorts are quietly destroying contribution margin. Job-to-be-done: "Show me where margin is leaking this week, and what I can change before Friday's board pack."

### Goals & constraints
**Goals**
- Make contribution margin and AI spend readable in under 10 seconds on first open
- Pair every anomaly with a reversible action (pause model tier, re-tag cohort, open savings playbook)
- Keep density high without sacrificing scan order for non-analyst users
- Prototype an "Explain this delta" AI panel that cites sources, not vibes
- Design empty and permission-denied states as first-class

**Constraints**
- Desktop-first: no mobile redesign this sprint
- Trust: AI suggestions show confidence + lineage
- a11y: WCAG 2.2 AA for tables, focus, color-only status
- Time: 2–3 week design sprint
- Visual: Linear/Stripe quiet enterprise, teal `#0D9488` only

### Process
1. **Frame & research** - Assumed inputs: SaaS P&L patterns, AI usage invoices, competitive glance at Stripe-like dashboards and Linear. Assumption: users know contribution margin vocabulary.
2. **Flows & information architecture** - Primary path: Overview → Margin leak list → Detail drawer → Action confirm. Secondary: Saved views, Export board pack, AI explain panel.
3. **Options explored** - (A) Mega-dashboard with 12 widgets (rejected: overload). (B) "Week in review" story UI (rejected: too slow for daily ops). (C) Dense table + drawer + AI cite panel (chosen: power-user scan + local actions).
4. **Visual & design system decisions** - Neutral gray canvas, 13/14px UI sans, teal for interactive + positive delta only. Status via icon + text, never color alone. Density tokens: `comfortable` / `compact` toggle for finance vs ops personas.
5. **Prototype & critique** - High-fidelity prototype: Overview, Leak detail, AI explain. Figma: table keyboard nav, drawer focus trap, confidence chip readability.
6. **Validation notes** - Heuristic pass on Nielsen "visibility of system status": risk: users misread estimated savings as guaranteed cash. Copy guardrails added.

### Key decisions
- I chose a **leak-first list** because margin problems are exceptions, not averages: I rejected a KPI-hero wall.
- I chose **source-cited AI** ("Based on invoice lines 14-22") because unverified chat destroys finance trust: I rejected freeform chat as primary.
- I chose **teal sparingly** so attention lands on deltas and CTAs: I rejected multi-accent theming.
- I chose **compact density as default** for RevOps: comfortable stays one toggle away.

### Solution
1. **Overview - Margin pulse** - Contribution margin %, AI spend MoM, top 3 leaks with CTA `Inspect leak`. Proves glanceable health.
2. **Leak detail drawer** - Cohort, model tier, estimated weekly impact, `Pause tier` / `Open playbook`. Proves action locality + reversible ops.
3. **AI explain panel** - Structured bullets with confidence chips and "View lineage". Proves accountable AI UX, not magic.

Empty: "No leaks above threshold." Error: "Live feed delayed: last sync 14:02." Success: "Tier paused · undo 30s".

### Design system notes
Tokens: `color.accent.teal`, `color.delta.pos/neg`, `space.dense`, `type.tabular`. Components: DataTable compact, LeakRow, ConfidenceChip, CitePanel, SoftConfirm. Pattern: anomaly → local action → undo.

### Outcomes & learnings
- **Design target:** time-to-first-insight under 10s on Overview
- **Prototype success target:** ≥70% of prototype reviewers name the top leak without coaching
- Ship-test next: invoice connectors, role-based leak visibility, board-ready export
- Hiring signal: AI + dense B2B SaaS ops UX with trust and a11y

### Gallery assets (for the website)
- Cover: Overview margin pulse (teal accent)
- 3 screen stills: Overview, Leak drawer, AI explain
- Process strip: three IA options sketch
- Optional DS tokens strip: teal, delta, density toggle

---

## 2. Harbor - Fintech repayments and insights companion

**Badge:** Product design · iOS
**Role:** Lead Product Designer 
**Platform:** iOS 
**Timeline:** 2–3 week design sprint 
**Tags:** Fintech, iOS, HIG, Trust UX, Repayments

### Snapshot
Harbor helps people with revolving credit see what they owe, what happens if they pay early, and how to stay in control without panic. The design bet: Apple HIG clarity plus calm motion beats gamified debt apps that shame users into taps.

### Problem
Borrowers understand the minimum due, but not the interest trajectory or the emotional cost of "pay later" defaults. Persona: Lena, 34, two cards, wants one trustworthy place to plan repayments before payday. JTBD: "Help me choose a repayment that shrinks interest without wrecking this month's rent."

### Goals & constraints
**Goals**
- Make impact of payment amount visible before confirm
- Reduce anxiety copy: increase plain-language outcomes
- Support Dynamic Type and VoiceOver for money figures
- Prototype insights that educate, not upsell
- Clear separation between "due" and "recommended"

**Constraints**
- iOS HIG: native tab + sheet patterns
- Regulated-feel trust: no dark patterns, no confetti on debt
- Timeboxed design sprint
- Assumed bank-grade data; no live API in prototype
- Accessibility: Skin Tone-independent iconography; high-contrast money states

### Process
1. **Frame & research** - Glance at Apple Wallet sheets, Revolut/Monzo calm finance, and Finom-style repayment trust cues. Assumption: users fear hidden fees more than they fear math.
2. **Flows & IA** - Home balance → Plan repayment → Confirm → Insights. Settings for due reminders only.
3. **Options explored** - (A) Chatbot coach as home (rejected: trust risk). (B) Spreadsheet-like planner (rejected: cold, un-iOS). (C) Card stack + interactive slider with live interest delta (chosen: tactile, HIG-aligned).
4. **Visual & DS** - Soft neutrals, system SF Pro, blue trust accent, large tabular numerals. Motion: 200ms sheets, no bounce on money.
5. **Prototype & critique** - High-fidelity prototype: Home, Plan slider, Confirm: Figma VoiceOver labels and Reduce Motion paths.
6. **Validation notes** - Heuristic on error prevention: risk that "recommended" reads as bank advice. Relabeled to "Suggested for lower interest (not advice)".

### Key decisions
- I chose a **live interest delta on the slider** because abstract APR fails: I rejected static tip cards.
- I chose **suggested vs due** as two distinct CTAs because conflating them creates regret: I rejected a single smart default button.
- I chose **no gamification** because debt UX that celebrates feels manipulative: I rejected streaks and badges.
- I chose **plain-language footnotes** over legalese walls in this pass: production would still need compliance review.

### Solution
1. **Home - Balance & next due** - Amount due, days left, `Plan repayment`. Proves calm hierarchy.
2. **Plan - Amount slider** - Live "Interest saved if paid today" + rent-safe warning. Proves consequence-before-commit.
3. **Confirm - Receipt sheet** - Breakdown, schedule, `Confirm payment`. Success: quiet checkmark, not fireworks.

Empty: "Link a card to see repayments." Error: "Bank timeout. Try again: nothing was charged." Success: "Payment scheduled for Fri 09:00".

### Design system notes
Tokens: `color.trust.blue`, `type.money.lg`, `space.sheet`. Components: MoneyHero, PaySlider, DeltaPill, TrustFootnote, ConfirmSheet. Pattern: preview consequence → confirm → quiet success.

### Outcomes & learnings
- **Design target:** users can state interest impact of +€50 payment after one pass
- **Prototype success target:** fewer "is this advice?" confusions after footnote redesign
- Ship-test next: real schedule conflicts, multi-card allocation, biometric confirm
- Hiring signal: regulated-feel mobile fintech with HIG craft and trust microcopy

### Gallery assets (for the website)
- Cover: Home balance calm hero
- 3 screen stills: Home, Plan slider, Confirm
- Process strip: chatbot vs slider options
- Optional DS tokens strip: money type + trust blue

---

## 3. Circuit - Deploy and observability console for engineers

**Badge:** Product design · Web
**Role:** Lead Product Designer 
**Platform:** Web dark 
**Timeline:** 2–3 week design sprint 
**Tags:** Developer tools, Observability, Dark UI, Dense UX, Web

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
- Assume existing CI: Circuit is the control plane UI
- a11y: focus rings that work on near-black surfaces
- Timeboxed; no real infra
- Style: Vercel/Raycast dense, not playful

### Process
1. **Frame & research** - Competitive glance: Vercel dashboard, Datadog deploy overlays, Linear command menu. Assumption: users are experts: teachability < speed.
2. **Flows & IA** - Projects → Deploy timeline → Incident drawer → Rollback. Global `⌘K`.
3. **Options explored** - (A) Separate Deploy and Observe apps (rejected: context switch). (B) Full IDE-in-browser (rejected: scope). (C) Unified timeline with deploy pins + signal bands (chosen).
4. **Visual & DS** - Zinc-950 canvas, 12px mono for IDs, semantic green/amber/red with patterns (not color-only). Accent electric mint for focus.
5. **Prototype & critique** - High-fidelity prototype: Timeline, Incident, Rollback: Figma keyboard map and contrast audit.
6. **Validation notes** - Risk: density scares less senior engineers. Added progressive disclosure for "Simple status" mode.

### Key decisions
- I chose a **unified timeline** because deploys are events in a signal stream: I rejected tab-split Deploy/Observe.
- I chose **rollback with blast-radius copy** ("Affects 3 services · ~2 min") because blind rollback is scary: I rejected a naked confirm.
- I chose **⌘K parity** for every primary action so power users never hunt menus.
- I chose **pattern + color** for status to survive deuteranopia.

### Solution
1. **Deploy timeline** - Pins, error-rate band, `Redeploy` / `Inspect`. Proves correlation at a glance.
2. **Incident drawer** - Top errors, suspected commit, `Open bisect`. Proves diagnosis without leaving Circuit.
3. **Rollback confirm** - Blast radius, previous healthy SHA, `Rollback now`. Proves safe velocity.

Empty: "No deploys in range. Widen window." Error: "Live metrics lagging." Success: "Rollback initiated · tracking health".

### Design system notes
Tokens: `color.canvas.void`, `color.signal.*`, `type.mono.xs`. Components: TimelineTrack, DeployPin, SignalBand, CmdK, BlastRadiusCard. Pattern: correlate → diagnose → reversible action.

### Outcomes & learnings
- **Design target:** median "find bad deploy" under 30s in prototype walkthroughs
- **Prototype success target:** keyboard-only completion of rollback happy path
- Ship-test next: real log deep-links, multi-env switcher, SLO burn alerts
- Hiring signal: dense developer-tool craft, systems thinking, keyboard UX

### Gallery assets (for the website)
- Cover: dark timeline with deploy pins
- 3 screen stills: Timeline, Incident, Rollback
- Process strip: split apps vs unified timeline
- Optional DS tokens strip: signal colors + mono type

---

## 4. Folio - Social critique network for designers

**Badge:** Product design · Android
**Role:** Lead Product Designer 
**Platform:** Android 
**Timeline:** 2–3 week design sprint 
**Tags:** Android, Community, Critique, Editorial, Social

### Snapshot
Folio is a warm editorial Android app where designers post work-in-progress and get structured critique instead of empty likes. The bet: Material You warmth plus critique rituals beats generic social feeds for craft growth.

### Problem
Designers want feedback that improves the work, not engagement farming. Persona: Amir, mid-level product designer, posts on Discord and gets emoji. JTBD: "Get specific, kind, actionable critique on this flow before Friday's review."

### Goals & constraints
**Goals**
- Structure critique prompts (clarity, hierarchy, edge cases)
- Warm, magazine-like browsing that still feels native Android
- Reduce drive-by negativity with critique norms
- Support image + short loom-style video notes
- Make "request critique" a first-class CTA

**Constraints**
- Android Material 3: dynamic color optional
- Moderation assumed lightweight for this pass
- Timeboxed sprint
- Editorial warmth without looking non-native
- a11y: scalable type, content descriptions for mock images

### Process
1. **Frame & research** - Glance at Dribbble, Are.na, Writers' workshops. Assumption: structure beats volume of comments.
2. **Flows & IA** - Feed → Piece → Critique composer → Thank / iterate. Profile shows critique given/received ratio.
3. **Options explored** - (A) Anonymous roast mode (rejected: toxic). (B) Live video rooms only (rejected: scheduling friction). (C) Async structured critique cards (chosen).
4. **Visual & DS** - Warm paper backgrounds, serif for titles, sans for UI, terracotta accent. Soft elevation, generous image crops.
5. **Prototype & critique** - High-fidelity prototype: Feed, Piece detail, Critique composer: Figma contrast on warm paper.
6. **Validation notes** - Risk: structure feels homework-like. Softened prompts to optional chips, not mandatory forms.

### Key decisions
- I chose **structured critique chips** ("Hierarchy", "Edge cases", "Copy") because free text alone drifts to taste: I rejected pure star ratings.
- I chose **warm editorial visual** to signal craft culture: I rejected cold blue social chrome.
- I chose **critique ratio on profile** to reward giving: I rejected follower vanity as the hero metric.
- I chose **async first** because designers critique across time zones: I rejected live-only.

### Solution
1. **Feed - Warm editorial** - Large crops, `Request critique` badges. Proves browsing joy + intent.
2. **Piece detail** - Context blurb, goals, existing critiques threaded by chip. Proves useful reading order.
3. **Critique composer** - Chip + comment + optional sketch overlay. Proves structured contribution.

Empty: "Your feed is quiet. Follow three craft accounts." Error: "Upload failed. Draft saved." Success: "Critique sent · Amir will be notified".

### Design system notes
Tokens: `color.paper.warm`, `color.accent.terracotta`, `type.display.serif`. Components: PieceCard, CritiqueChip, ComposerSheet, RatioBadge. Pattern: show goals → critique on axes → thank.

### Outcomes & learnings
- **Design target:** average critique length and specificity above unstructured social baselines (qualitative)
- **Prototype success target:** creators mark ≥50% of critiques "useful" in prototype survey
- Ship-test next: moderation queues, private critique circles, Figma embed
- Hiring signal: community product craft, Android Material fluency, editorial systems

### Gallery assets (for the website)
- Cover: warm feed hero
- 3 screen stills: Feed, Piece, Composer
- Process strip: roast vs structured critique
- Optional DS tokens strip: paper + terracotta + serif

---

## 5. Quorum - B2B roles, permissions, and partner activation

**Badge:** Product design · Web
**Role:** Lead Product Designer 
**Platform:** Web enterprise 
**Timeline:** 2–3 week design sprint 
**Tags:** B2B, Permissions, Partner activation, Enterprise, Lifecycle

### Snapshot
Quorum helps B2B platforms invite partners, assign roles, and activate them without a permissions spreadsheet. The bet: make least-privilege understandable with plain-language role cards and a guided activation checklist, not an ACL matrix as the homepage.

### Problem
Partner managers lose days to "who can see what" email threads after a new reseller joins. JTBD: "Invite a partner org, give them the right access, and get them to first successful action this week."

### Goals & constraints
**Goals**
- Role cards in business language, with technical permissions beneath
- Activation checklist tied to partner success moments
- Audit trail visible to admins
- Prevent accidental privilege escalation
- Empty states that teach the model

**Constraints**
- Enterprise web: complex org trees assumed
- Security: confirm destructive permission changes
- a11y for tables and dialogs
- Timeboxed; no real IdP
- Visual: sober enterprise, clear hierarchy

### Process
1. **Frame & research** - Competitive glance: HubSpot partner portals, AWS IAM summaries, Tabby-style B2B lifecycle needs. Assumption: partner managers are not IAM experts.
2. **Flows & IA** - Partners list → Invite → Role pick → Activation checklist → Audit.
3. **Options explored** - (A) Raw permission matrix first (rejected: expert-only). (B) Wizard with no escape hatch (rejected: inflexible). (C) Role cards + progressive permission detail + checklist (chosen).
4. **Visual & DS** - Cool gray enterprise, indigo accent, 14px UI. Role cards with risk chips (Low/Med/High).
5. **Prototype & critique** - High-fidelity prototype: Partners, Role picker, Activation: Figma focus order on multi-step invite.
6. **Validation notes** - Risk: "Admin" label overused. Renamed to scoped names: `Billing viewer`, `Catalog editor`, `Partner admin`.

### Key decisions
- I chose **business-language role cards** because matrices intimidate: I rejected matrix-as-home.
- I chose **activation checklist** linked to permissions because access without first-value fails lifecycle: I rejected invite-only success.
- I chose **risk chips + confirm** on elevation: I rejected silent permission adds.
- I chose **audit as a first-class tab** for enterprise trust, not a buried CSV export.

### Solution
1. **Partners list** - Status (Invited / Activating / Active), owner, `Invite partner`. Proves lifecycle at a glance.
2. **Role picker** - Cards with plain summary + `View permissions`. Proves least-privilege comprehension.
3. **Activation checklist** - Tasks like "Upload first catalog" with deep links. Proves path to value.

Empty: "No partners yet. Invite your first reseller." Error: "Invite email bounced." Success: "Partner invited · checklist ready".

### Design system notes
Tokens: `color.accent.indigo`, `color.risk.*`. Components: PartnerRow, RoleCard, RiskChip, ChecklistItem, AuditEvent. Pattern: invite → scoped role → activate → audit.

### Outcomes & learnings
- **Design target:** partner admin completes invite + role without reading a help article
- **Prototype success target:** time-to-first partner action simulated under 1 guided session
- Ship-test next: SCIM/SSO mapping, custom roles, bulk invites
- Hiring signal: B2B lifecycle, permissions systems thinking, enterprise clarity

### Gallery assets (for the website)
- Cover: partners list with activation states
- 3 screen stills: List, Role picker, Checklist
- Process strip: matrix vs role cards
- Optional DS tokens strip: risk chips + indigo

---

## 6. Pulse - Energy and recovery wellness companion

**Badge:** Product design · iOS
**Role:** Lead Product Designer 
**Platform:** iOS 
**Timeline:** 2–3 week design sprint 
**Tags:** Wellness, iOS, Soft humanist, Habit, Health-adjacent

### Snapshot
Pulse is a soft humanist iOS companion for energy and recovery: sleep debt, focus blocks, and gentle check-ins without punishing streaks. The bet: warmth and honesty beat quantified-self severity for long-term adherence.

### Problem
People track steps and sleep in different apps, then feel judged by red rings. Persona: Ola, 29, knowledge worker, wants to notice burnout earlier. JTBD: "Help me see when I'm running hot and suggest one recovery move I might actually do."

### Goals & constraints
**Goals**
- One daily "energy snapshot" without spreadsheet overload
- Recovery suggestions that respect calendar reality
- Soft visuals: zero shame copy
- HealthKit-shaped assumptions for the prototype
- Inclusive motion and Dynamic Type

**Constraints**
- iOS soft humanist: not clinical EHR
- Wellness companion, not clinical or medical advice
- Timeboxed sprint
- Privacy-forward empty states
- a11y: Reduce Motion alternatives for breathing cues

### Process
1. **Frame & research** - Glance at Apple Fitness calm moments, Daylio, Rise. Assumption: adherence dies when UI scolds.
2. **Flows & IA** - Today snapshot → Check-in → Recovery suggestion → Weekly pattern.
3. **Options explored** - (A) Hard gamification rings (rejected: shame). (B) Therapist chatbot (rejected: scope/trust). (C) Snapshot + one suggestion + optional journal (chosen).
4. **Visual & DS** - Mist gradients, rounded 24pt cards, humanist sans, lavender accent. Illustration sparingly.
5. **Prototype & critique** - High-fidelity prototype: Today, Check-in, Weekly: Figma Dynamic Type overflow and Reduce Motion.
6. **Validation notes** - Risk: users expect clinical accuracy. Added "Not medical advice" persistently but quietly.

### Key decisions
- I chose **one suggestion per day** because choice overload kills recovery: I rejected tip carousels.
- I chose **no punishing streaks** because missed days should not clear progress theater: I rejected Duolingo-style pressure.
- I chose **soft gradients with solid text containers** so contrast survives the aesthetic.
- I chose **calendar-aware suggestions** ("15 min walk between meetings") over generic advice.

### Solution
1. **Today - Energy snapshot** - Qualitative energy, sleep debt hint, `Check in`. Proves calm daily entry.
2. **Check-in sheet** - 3 taps mood/energy/load + optional note. Proves low friction.
3. **Weekly pattern** - Soft chart of energy vs meetings load + `Try recovery`. Proves insight without clinic UI.

Empty: "Grant Health permissions when you're ready." Error: "Couldn't sync sleep. Enter manually." Success: "Check-in saved".

### Design system notes
Tokens: `color.mist.*`, `color.accent.lavender`, `radius.xl`. Components: SnapshotCard, CheckInSheet, SoftChart, SuggestionPill, QuietDisclaimer. Pattern: notice → tiny input → one action.

### Outcomes & learnings
- **Design target:** check-in completion feels under 20 seconds in prototype tests
- **Prototype success target:** qualitative "I don't feel judged" majority in prototype feedback
- Ship-test next: real HealthKit, Focus mode integration, clinician-safe copy review
- Hiring signal: soft mobile craft, habit UX ethics, inclusive health-adjacent design

### Gallery assets (for the website)
- Cover: mist Today snapshot
- 3 screen stills: Today, Check-in, Weekly
- Process strip: rings vs soft snapshot
- Optional DS tokens strip: mist + lavender + radius

---

## 7. Atlas CMS - Design system docs and playground

**Badge:** Product design · Web
**Role:** Lead Product Designer 
**Platform:** Web docs 
**Timeline:** 2–3 week design sprint 
**Tags:** Design system, Docs, Playground, Tokens, Web

### Snapshot
Atlas CMS is a documentation and playground site for a product design system: tokens, components, usage do/don't, and a live props playground. The bet: docs that feel like a product (search, versioning, playground) get adopted: static Notion dumps do not.

### Problem
Designers and engineers disagree because the "source of truth" is a stale Figma page and a Storybook nobody bookmarks. JTBD: "Find the Button spec, tweak props, copy the React snippet, and trust it matches production."

### Goals & constraints
**Goals**
- Unified search across tokens, components, patterns
- Playground that mirrors real component API
- Clear do/don't guidance with a11y notes
- Version switcher for breaking changes
- Contribution path sketched (RFC lite)

**Constraints**
- Docs web: assume MDX-like content model
- Must work keyboard-only
- Timeboxed; fake component library
- Style: clean docs (think Linear docs × Storybook)
- No claim of an existing shipped DS named Atlas

### Process
1. **Frame & research** - Glance at Radix docs, Shopify Polaris, Adobe Spectrum. Assumption: playground converts skeptics.
2. **Flows & IA** - Home → Component page → Playground → Tokens. Global search.
3. **Options explored** - (A) Storybook skin only (rejected: weak guidance). (B) Marketing site for DS (rejected: hollow). (C) Docs + playground + tokens explorer (chosen).
4. **Visual & DS** - White/gray docs chrome, monospace for props, accent for interactive playground only.
5. **Prototype & critique** - High-fidelity prototype: Component page, Playground, Tokens: Figma heading outline and skip-link.
6. **Validation notes** - Risk: playground code drifts from real package. Labeled "Exploration playground · wire to package in production".

### Key decisions
- I chose **playground beside guidance** because isolated Storybook tabs lose narrative: I rejected docs-without-play.
- I chose **a11y callouts as first-class sections** not footnotes.
- I chose **version switcher** early because breaking tokens without ceremony burns trust.
- I chose **copy snippet CTA** as the conversion moment for eng adoption.

### Solution
1. **Component page - Button** - Anatomy, usage, do/don't, a11y. Proves teaching + reference.
2. **Playground** - Live props, theme toggle, `Copy React`. Proves try-before-adopt.
3. **Tokens explorer** - Color/space/type with CSS var names. Proves cross-discipline shared language.

Empty: "No matches. Try token names." Error: "Playground runtime failed." Success: "Snippet copied".

### Design system notes
Meta-DS for the docs site itself: DocShell, PropTable, PlaygroundFrame, DoDont, TokenSwatch, VersionSelect. Pattern: teach → try → copy → contribute.

### Outcomes & learnings
- **Design target:** designer and engineer both complete "find + copy Button" in under 2 minutes
- **Prototype success target:** playground used in majority of design walkthroughs
- Ship-test next: real package wiring, visual regression embeds, RFC workflow
- Hiring signal: design systems thinking, docs UX, designer-engineer bridge

### Gallery assets (for the website)
- Cover: Button docs hero
- 3 screen stills: Component, Playground, Tokens
- Process strip: Storybook-only vs docs+play
- Optional DS tokens strip: token swatches

---

## 8. Nest - Local services marketplace

**Badge:** Product design · Cross-platform
**Role:** Lead Product Designer 
**Platform:** iOS + desktop web 
**Timeline:** 2–3 week design sprint 
**Tags:** Marketplace, Cross-platform, Local services, Trust, Booking

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
4. **Visual & DS** - Shared tokens: iOS uses HIG bars, web uses sidebar filters. Accent coral for CTAs.
5. **Prototype & critique** - High-fidelity prototype: iOS Search, Profile, Booking: web Search results; Figma parity checklist.
6. **Validation notes** - Risk: "Verified" implies background check depth. Relabeled "ID checked · details" with expandable meaning.

### Key decisions
- I chose **price before chat** because opacity is the local-market failure mode: I rejected chat-gated quotes as default.
- I chose **shared IA, native chrome** so cross-platform doesn't mean identical pixels.
- I chose **request-to-book hybrid** for categories that need scoping: instant book for fixed-price SKUs.
- I chose **honest verification labels** over vague shield icons.

### Solution
1. **Search results (iOS)** - Map/list toggle, rate range, `View pro`. Proves scan + trust at list level.
2. **Pro profile** - Portfolio, reviews, fee breakdown, `Request to book`. Proves transparency.
3. **Booking confirm (web)** - Slot, address, total, `Confirm request`. Proves desktop form comfort.

Empty: "No pros in range. Widen radius." Error: "Payment method failed. Request not sent." Success: "Request sent · usually replies in 2h".

### Design system notes
Shared: PriceBreakdown, TrustBadge, ProCard, SlotPicker. Platform shells differ. Pattern: search → trust → transparent total → request.

### Outcomes & learnings
- **Design target:** seekers can state total cost before messaging in prototype tests
- **Prototype success target:** cross-platform task success parity on core booking
- Ship-test next: pro onboarding, dispute flow, real maps performance
- Hiring signal: multi-platform marketplace UX, trust design, fee transparency

### Gallery assets (for the website)
- Cover: iOS search + web booking diptych
- 3 screen stills: Search, Profile, Web booking
- Process strip: chat-first vs price-first
- Optional DS tokens strip: coral CTA + trust badge

---

## 9. Signal Rooms - Live audio community rooms

**Badge:** Product design · iOS
**Role:** Lead Product Designer 
**Platform:** iOS dark expressive 
**Timeline:** 2–3 week design sprint 
**Tags:** Live audio, Community, iOS, Dark expressive, Social

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
- iOS dark expressive: original brand (no Signal messenger cues)
- Safety: block/report reachable
- Timeboxed; simulated live state
- a11y: VoiceOver for role changes; captions placeholder
- Performance: avatar grids that don't thrash

### Process
1. **Frame & research** - Glance at Clubhouse-era patterns, Discord stage, Twitter Spaces. Assumption: role clarity prevents pile-ons.
2. **Flows & IA** - Lobby → Live room → Raise hand → On stage → Leave. Create room flow secondary.
3. **Options explored** - (A) Flat everyone-can-talk (rejected: chaos). (B) Ticketed webinar (rejected: cold). (C) Stage + hand queue + expressive presence (chosen).
4. **Visual & DS** - Deep charcoal, neon violet accent, bold display type for room titles, soft glow on active speaker (with solid fallback).
5. **Prototype & critique** - High-fidelity prototype: Lobby, Live room, Hand queue: Figma Reduce Motion (glow → border).
6. **Validation notes** - Prototype covers Lobby → Live room → Hand queue: Reduce Motion swaps glow for a solid border.

### Key decisions
- I chose **explicit stage roles** because audio without structure fails: I rejected open-mic default.
- I chose **expressive dark brand** to show visual range beyond enterprise: I still capped glow for a11y.
- I chose **always-visible Leave/Mute** as safety rails: I rejected gesture-only exit.
- I chose **hand queue visibility for hosts** to make moderation fair.

### Solution
1. **Lobby** - Live now cards, topics, `Enter room`. Proves discovery energy.
2. **Live room** - Stage avatars, listener count, `Raise hand`. Proves role clarity mid-session.
3. **Hand queue (host)** - Ordered requests, `Invite` / `Dismiss`. Proves fair moderation.

Empty: "No live rooms. Start one." Error: "Mic permission denied." Success: "You're on stage · mute anytime".

### Design system notes
Tokens: `color.void`, `color.accent.violet`, `effect.speakGlow`. Components: RoomCard, StageGrid, HandQueue, SafetySheet. Pattern: enter → role-aware participate → exit cleanly.

### Outcomes & learnings
- **Design target:** new users identify host vs speaker vs listener in under 5 seconds
- **Prototype success target:** raise-hand → speak path completed without host coaching in prototype
- Ship-test next: captions, report flow depth, network degradation states
- Hiring signal: expressive mobile brand systems, live social UX, safety affordances

### Gallery assets (for the website)
- Cover: dark live room stage
- 3 screen stills: Lobby, Live room, Hand queue
- Process strip: open-mic vs staged roles
- Optional DS tokens strip: violet + glow + void

---

## 10. Ledgerly Studio - Growth experimentation lab

**Badge:** Product design · Web
**Role:** Lead Product Designer 
**Platform:** Web analytics 
**Timeline:** 2–3 week design sprint 
**Tags:** Growth, Experimentation, Analytics, Web, Metrics

### Snapshot
Ledgerly Studio is a growth experimentation lab where PMs and designers define hypotheses, ship A/B variants, and read results without drowning in charts. The bet: experiment UX should feel like a lab notebook with guardrails, not a BI graveyard.

### Problem
Growth teams lose signal when experiment setup, design variants, and analytics live in three tools. JTBD: "Write a hypothesis, attach variants, monitor health metrics, and decide ship/kill with shared language."

### Goals & constraints
**Goals**
- Hypothesis-first creation flow
- Variant preview slots for design handoff
- Primary + guardrail metrics clearly separated
- Decision states: running / won / lost / inconclusive
- Explain statistical humility in UI copy

**Constraints**
- Web analytics console: desktop
- No fake "99% confidence" theater without labels
- Timeboxed; simulated experiment data
- a11y for charts (tables as fallback)
- Style: clean analytics, indigo/emerald accents

### Process
1. **Frame & research** - Glance at Optimizely, GrowthBook, Amplitude Experiment, Deel-style growth JD themes. Assumption: designers need first-class seats, not CSV afterthoughts.
2. **Flows & IA** - Experiments list → Create (hypothesis) → Variants → Results → Decision.
3. **Options explored** - (A) Pure BI dashboards (rejected: no experiment object). (B) Code-only flags UI (rejected: excludes design). (C) Lab notebook + variants + results decision (chosen).
4. **Visual & DS** - Light analytics chrome, emerald for wins, restrained red for losses, tabular nums. Chart + table twins.
5. **Prototype & critique** - High-fidelity prototype: List, Create, Results: Figma table fallback and decision modal copy.
6. **Validation notes** - Risk: overclaiming causality. Added "Prototype results · not causal proof" on lab screens.

### Key decisions
- I chose **hypothesis as required field** because tool-led tests without questions waste traffic: I rejected metric-first blank experiments.
- I chose **guardrail metrics beside primary** so wins that tank retention are visible: I rejected single-KPI hero.
- I chose **inconclusive as a first-class state** to fight false certainty: I rejected binary win/lose only.
- I chose **variant preview frames** so design stays in the experiment object.

### Solution
1. **Experiments list** - Status chips, primary metric delta, `New experiment`. Proves portfolio of bets.
2. **Create - Hypothesis** - Statement, audience, primary + guardrails, `Continue to variants`. Proves discipline up front.
3. **Results - Decision** - Chart/table, "Ship / Kill / Extend", notes. Proves shared decision ritual.

Empty: "No experiments yet. Write your first hypothesis." Error: "Stats engine delayed." Success: "Marked shipped · flagged for rollout".

### Design system notes
Tokens: `color.win.emerald`, `color.lose.rose`, `type.tabular`. Components: ExperimentRow, HypothesisForm, VariantFrame, MetricPair, DecisionModal. Pattern: ask → variant → read guardrails → decide.

### Outcomes & learnings
- **Design target:** cross-functional pair can create a complete experiment object in one sitting
- **Prototype success target:** users correctly explain primary vs guardrail in a teach-back
- Ship-test next: real stats engine, design tool embeds, rollout checklist
- Hiring signal: growth experimentation literacy, metrics thinking, designer-in-the-loop A/B UX

### Gallery assets (for the website)
- Cover: results decision with win chip
- 3 screen stills: List, Create, Results
- Process strip: BI-only vs lab notebook
- Optional DS tokens strip: win/lose + tabular

---

## Gallery site map (suggested)

### Routes
- `/` - Gallery grid of 10 product design cards
- `/work/:slug` - Case study page (parses H2/H3 structure above)
- `/work` - Filtered index (same grid, query params)
- `/about` - Positioning (Senior UX Manager + Design Engineer: real products called out separately)
- `/lab` optional - process notes

### Filters
- **Platform:** Web desktop, Web dark, Web docs, Web enterprise, Web analytics, iOS, Android, iOS + desktop web
- **Domain:** AI ops, Fintech, Devtools, Community, B2B permissions, Wellness, Design system, Marketplace, Live audio, Growth
- **Style:** Quiet enterprise, HIG trust, Dense dark, Warm editorial, Soft humanist, Docs, Expressive dark, Analytics

### Gallery badge on cards
Every card shows a persistent platform-framed pill above the title (for example `Product design · Web`, `Product design · iOS`; CostRadar uses `Shipped product · Founder case study`; enterprise cases use `Enterprise case · …`). Case pages repeat the badge under the title.

### Card anatomy
Cover image · badge · title · one-liner · platform · tags (max 3 visible) · accent bar.

---

## Shared case template (frontmatter fields)

```yaml
slug: northline
title: Northline
oneLiner: AI ops profitability console for B2B SaaS
badge: Product design · Web
role: Lead Product Designer
platform: Web desktop
timeline: 2–3 week design sprint
tags:
 - AI
 - B2B SaaS
 - Ops console
cover: /gallery/northline/cover.webp
order: 1
accent: "#0D9488"
styleLabel: Quiet enterprise
screens:
 - Overview - Margin pulse
 - Leak detail drawer
 - AI explain panel
portfolioSignals:
 - AI product UX
 - Dense B2B SaaS
 - Trust and a11y
```

Use the same fields for all ten: `projects.json` is the machine-readable source of truth for the gallery.
