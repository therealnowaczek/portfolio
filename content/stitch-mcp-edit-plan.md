# Stitch MCP Design Critique → Edit Plan

Tak — przez MCP Stitch da się poprawiać istniejące screeny narzędziem **`edit_screens`** (`projectId` + `selectedScreenIds` + `prompt`). Nie wysyłam jeszcze edycji; poniżej gotowa lista do akceptacji.

Po wdrożeniu w Stitchu: odświeżyć `scripts/stitch-assets.json` URL-e HTML → `npm run stitch:assets` → portfolio.

## Jak wysyłać

1. Najpierw **cross-cutting** (wszystkie UI screeny projektu w jednym `edit_screens`).
2. Potem **P0** pojedynczo (bezpieczniej).
3. Na końcu pozostałe P1 (można batch 2–3 screeny z tym samym promptem tylko jeśli poprawka jest wspólna).
4. `edit_screens` bywa wolne — **nie retry** przy timeout; sprawdzić `get_screen` później.

## P0 — wysłać w pierwszej kolejności

Źródła: [Critique batch A](07a24dc6-4666-4859-817e-e5ef5e0f7414) · [Folio/Quorum/Pulse](3e43ec15-a8d7-45a7-9a8d-5ca9ae8573c0) · [Atlas/Nest/Signal/Ledgerly](f92aec23-dc92-490e-8c5d-5da1caad2e76)

| Projekt | Screen | Dlaczego |
|---|---|---|
| Northline | Profitability Overview | Drawer tnie chart/tabelę, toast ucięty, 3× Apply |
| Northline | Empty State | Chrome “Live/Synced” przy braku store |
| Harbor | Repayment Flow | Confirm przy aktywnym NSF |
| Circuit | Incident State | Zła zakładka, fake window chrome, red overload |
| Folio | Upload Frame | Dwa różne Next / zepsuty stepper |
| Folio | Project Detail | iPhone mock w produkcie Android |
| Pulse | Check-in Summary | Literówka “de-walk” |
| Quorum | Review Diff modal | Dual-custody vs Approve & Publish |
| Atlas | Theme Studio | Docs chrome zjada playground |
| Nest | Mobile Home | Urgent banner vs Book, karty przeładowane |
| Nest | Booking & Checkout | Tab bar / Explore w focused checkout |
| Nest | Desktop + drawer | 3 kolumny + niespójna gwarancja $ |
| Signal | Browse / Discover twin | Dwa modele Discover |
| Ledgerly | Experiments Board | 2× New Experiment + złe top tabs |

## northline — `8564180205273741249`

### Cross-cutting (wszystkie UI screeny)

```
projectId: 8564180205273741249
selectedScreenIds: ["6d9c909426a1467ba8549263dfed042d", "53a281ef215146b6a875324366bbb913", "2d44200d17634766bfe9297d28e523e1", "d104faa69b944a9c970729f65d3a0bc9", "4092b7c196194198892e1c52487b16a7", "778f9889bb614f628a1cd987a3608ce4"]
deviceType: DESKTOP
prompt:
One primary teal CTA per viewport. Demote global Scan now to outline when a page-level primary exists. Cap alert red to one hero signal per screen. Keep shell consistent: same sidebar active, top-bar, 8–10px radius, 4–8–12–16 spacing. Prefer metric + one delta; move tertiary copy to secondary lines.
```

### Per-screen

#### [P0] Profitability Overview

```
projectId: 8564180205273741249
selectedScreenIds: ["6d9c909426a1467ba8549263dfed042d"]
prompt: Keep Overview and teal Northline brand. Make Agentic profit scan a proper right drawer that pushes or dims content with a clear close—never clip the chart or table. Full toast: Scan complete — 3 margin leaks detected. In drawer: one primary Apply all recommended fixes, per-leak secondary Apply; demote Scan now to outline. KPI = value + one delta; long subcopy 12px muted.
```

#### [P1] Finding Detail — SKU Margin Leak

```
projectId: 8564180205273741249
selectedScreenIds: ["53a281ef215146b6a875324366bbb913"]
prompt: Preserve finding-detail split. Soften red: one High Priority pill + one red net-drag; rest neutral with one highlighted critical row. Apply fix now sole solid teal; Schedule/Dismiss text/outline. Shorten breadcrumbs; enlarge SKU title. Widen waterfall or move % labels below so nothing clips.
```

#### [P1] Ads & ROAS Intelligence

```
projectId: 8564180205273741249
selectedScreenIds: ["2d44200d17634766bfe9297d28e523e1"]
prompt: Keep Ads structure. Sync Ad Accounts sole solid primary; Scan now outline; Simulate ghost. Move Ad Set Waste Detection to sibling column card—do not overlay chart. Standardize Status/Action column. One H1 + one status chip.
```

#### [P1] COGS & Landed Costs Ledger

```
projectId: 8564180205273741249
selectedScreenIds: ["d104faa69b944a9c970729f65d3a0bc9"]
prompt: One red system only: banner OR KPI drag pills. Reconcile 3PL Invoices sole solid teal. Consistent row actions. Demote bottom widgets so ledger stays hero.
```

#### [P1] Autonomous Rules & Guardrails

```
projectId: 8564180205273741249
selectedScreenIds: ["4092b7c196194198892e1c52487b16a7"]
prompt: Compress rule cards to title, chips, one-line summary, toggle; expand IF/THEN. Expand pending-approval by default with Approve solid teal. Soften code slabs. Audit trail section with 3 full rows unclipped.
```

#### [P0] Empty State — Connect Store

```
projectId: 8564180205273741249
selectedScreenIds: ["778f9889bb614f628a1cd987a3608ce4"]
prompt: True empty Overview: Store selector No store connected, remove Live/Synced, AI Scan badge 0/hidden, Scan now disabled. Connect store primary + demo secondary. No truncated connector copy. Cleaner 4-connector strip. Match Northline density.
```

## harbor — `4680342275414464604`

### Cross-cutting (wszystkie UI screeny)

```
projectId: 4680342275414464604
selectedScreenIds: ["88b08a24063b4c94963c5b83f6ef4dbb", "5dbd6a3f96bf4493afc737b536fbffb3", "7eec0ea41b434e978604701422395619", "4529aa956d464c65ae5c9242c4b34128", "68db1fb2c3814933a15b771f27975114", "53fce3224e2d4ab58ef12a43185605f9"]
deviceType: MOBILE
prompt:
Kill dead bottom canvas—content ~16–24pt above tab bar. One primary blue per screen. Same account mask everywhere. HIG: consistent nav pattern and tab icons.
```

### Per-screen

#### [P1] Harbor Home

```
projectId: 4680342275414464604
selectedScreenIds: ["88b08a24063b4c94963c5b83f6ef4dbb"]
prompt: Keep hierarchy balance → Repay → upcoming. Compress AI insight to ~2 lines + Explain text. Fill bottom void with Recent activity (2 rows) or pull security banner just above tab bar.
```

#### [P1] Harbor Repayments

```
projectId: 4680342275414464604
selectedScreenIds: ["5dbd6a3f96bf4493afc737b536fbffb3"]
prompt: Remove placeholder text. Pay now only filled primary; Change date secondary. Collapse Overdraft Shield to single list row with toggle. Pull history up; no blank gap above tab bar.
```

#### [P0] Repayment Flow

```
projectId: 4680342275414464604
selectedScreenIds: ["7eec0ea41b434e978604701422395619"]
prompt: Titles: Review repayment. NSF banner is hero. Disable Confirm until acknowledge; Transfer funds becomes solid primary OR Confirm stays disabled with helper. Unify account mask. Tighten bottom spacing.
```

#### [P1] Payment Scheduled Success

```
projectId: 4680342275414464604
selectedScreenIds: ["4529aa956d464c65ae5c9242c4b34128"]
prompt: Keep success layout. Smaller success icon; lock inside FDIC banner. Tight bottom stack Done + secondary ~24pt above home indicator.
```

#### [P1] Harbor Insights

```
projectId: 4680342275414464604
selectedScreenIds: ["68db1fb2c3814933a15b771f27975114"]
prompt: Rename to Recommendations. Elevate Action Needed as only solid primary; subscription audit outline. Dismiss as text inside card. Rebalance so Cashflow Forecast shows fully.
```

#### [P1] Harbor Settings

```
projectId: 4680342275414464604
selectedScreenIds: ["53fce3224e2d4ab58ef12a43185605f9"]
prompt: Log Out as destructive text/outline not filled brick. End content ~16pt above tab bar. Stronger contrast on credit stats; thicker utilization bar.
```

## circuit — `15690636404924658439`

### Cross-cutting (wszystkie UI screeny)

```
projectId: 15690636404924658439
selectedScreenIds: ["d71d131c335e45a78e1374444ff6f312", "cb82b21644784d44ac4cdc09d826bdce", "679ec97c98b04edc98c5f91b86b351a6", "320aa213778d4dca9b74efe5c826b68d", "9a557da80ab049f0a5f3ff8c02d48c0d", "6ecf6fb8653c43a981e1528f0afa0ce5"]
deviceType: DESKTOP
prompt:
Dark console craft: no fake macOS traffic lights. One purple primary per screen. Breadcrumbs must match active tab. Soften purple glow; use flat fills. Cap red to incident signals only.
```

### Per-screen

#### [P1] Deployments List

```
projectId: 15690636404924658439
selectedScreenIds: ["d71d131c335e45a78e1374444ff6f312"]
prompt: Table is hero. Cut footer to one strip or move concurrency to header—no repeat. Simplified filters. Flat New deploy purple, no glow. Failed/Running only loud accents.
```

#### [P1] Deploy Detail & Logs

```
projectId: 15690636404924658439
selectedScreenIds: ["cb82b21644784d44ac4cdc09d826bdce"]
prompt: Flat Redeploy; Visit Preview emphasized when READY; Rollback secondary. Compress pipeline to icon+label+duration. Quiet Provenance vs Live Telemetry. Commit title wraps 2 lines.
```

#### [P0] Incident State & Failing Checks

```
projectId: 15690636404924658439
selectedScreenIds: ["679ec97c98b04edc98c5f91b86b351a6"]
prompt: Activate Incidents tab; breadcrumbs …/incidents/INC-2041. Rollback to #890 sole solid primary in banner; other mitigations outline. Remove macOS traffic lights—Circuit panel header. Reduce red fills. Collapse runbook to 4 steps + Run next step.
```

#### [P1] Metrics & Performance

```
projectId: 15690636404924658439
selectedScreenIds: ["320aa213778d4dca9b74efe5c826b68d"]
prompt: Breadcrumb …/metrics. Keep 2×2 charts. Thicken pool lease bar. Create Alert Rule primary; Export outline. Axis/legend contrast.
```

#### [P1] Logs & Traces Explorer

```
projectId: 15690636404924658439
selectedScreenIds: ["9a557da80ab049f0a5f3ff8c02d48c0d"]
prompt: Update breadcrumb to logs/traces. Keep master–detail. Shorten histogram. Highlight failing log lines once. Link to INC-2041 sole solid accent in detail header.
```

#### [P1] Environment Variables & Secrets

```
projectId: 15690636404924658439
selectedScreenIds: ["6ecf6fb8653c43a981e1528f0afa0ce5"]
prompt: Purple active tab like others. Drop vanity KPIs or reduce to Secrets count + Last rotated. + Add Variable primary; Reveal All outline. Monospace truncated VALUE with aligned icon buttons. Compact audit only.
```

## folio — `17169663027373237772`

### Cross-cutting (wszystkie UI screeny)

```
projectId: 17169663027373237772
selectedScreenIds: ["b632db6a85554364a14d7e37459248ca", "597f339f795241c9b8c362d3c763c4c7", "42eb6378f48a44f7b11c9ddfb811f86a", "774dabfb93e649569cf3e6f083237736", "1d777e7c1c6e486fa943a3a1ed81b430", "08977f71317648a59734909975a5c7bc", "d594f313b2844547bfee09e8f45919e7"]
deviceType: MOBILE
prompt:
Editorial Material You warmth but fix IA: Explore/Frames/Critiques/Profile must match destinations. One terracotta primary CTA per screen. Avoid nested desktop screenshots that become unreadable—prefer single large craft images.
```

### Per-screen

#### [P1] Feed

```
projectId: 17169663027373237772
selectedScreenIds: ["b632db6a85554364a14d7e37459248ca"]
prompt: Keep editorial feed. Make Give Critique the only filled terracotta. Ensure nested work imagery is large and readable or use phone-frame crops. Tighten card metadata; reduce competing chips.
```

#### [P0] Project Detail — Linear Mobile

```
projectId: 17169663027373237772
selectedScreenIds: ["597f339f795241c9b8c362d3c763c4c7"]
prompt: Replace iPhone/Dynamic Island hero with Android device chrome matching edge-swipe critique. Show all referenced pins on-canvas with matching critique IDs. One annotation entry path (FAB vs Write Critique). Keep editorial serif + warm neutrals.
```

#### [P1] Frames

```
projectId: 17169663027373237772
selectedScreenIds: ["42eb6378f48a44f7b11c9ddfb811f86a"]
prompt: Clear grid hierarchy; primary Upload/Annotate. Less decorative chrome.
```

#### [P0] Upload Frame — Annotations

```
projectId: 17169663027373237772
selectedScreenIds: ["1d777e7c1c6e486fa943a3a1ed81b430"]
prompt: Complete annotation step UX: visible tools, clear progress 2/3, one Continue primary. No truncated labels. Annotation overlays must be readable.
```

#### [P1] Compose Critique

```
projectId: 17169663027373237772
selectedScreenIds: ["774dabfb93e649569cf3e6f083237736"]
prompt: Structured chips + comment; Send Critique sole primary. Enough contrast on cream paper.
```

#### [P1] Critiques & Activity

```
projectId: 17169663027373237772
selectedScreenIds: ["08977f71317648a59734909975a5c7bc"]
prompt: Scanable list with status chips; empty/error not barren. Align tab destination.
```

#### [P2] Profile — Maya Lin

```
projectId: 17169663027373237772
selectedScreenIds: ["d594f313b2844547bfee09e8f45919e7"]
prompt: Calm profile craft; consistent type mix serif/sans; reduce decorative noise.
```

## quorum — `14449387995366829325`

### Cross-cutting (wszystkie UI screeny)

```
projectId: 14449387995366829325
selectedScreenIds: ["53e7c88c809d45d28df7b1b94b1a48fa", "c7716aadb26b4c45a694a668d7602570", "40b9e426b83645b983589a81631843d4", "3ad643ab720b4af6a8f1fc5d59d20d33", "82da2d3e169347faa28a6a58d1a96489", "9d1ca135bcad4fa6b1ad620ca0978d93", "8710344cdc654174aa560341df72a97a"]
deviceType: DESKTOP
prompt:
Enterprise calm: one indigo primary. Drawers must not crush cards. Less badge soup. Consistent sidebar active states across Partner / Roles / Audit / API / Settings.
```

### Per-screen

#### [P1] Partner Activation — Directory & Connect Wizard

```
projectId: 14449387995366829325
selectedScreenIds: ["53e7c88c809d45d28df7b1b94b1a48fa"]
prompt: Widen partner cards when drawer open or use modal overlay dimming. One primary Next/Connect. Reduce per-card metrics to 2–3. Policy blocked stays the only red hero.
```

#### [P1] Roles & Permissions — Matrix

```
projectId: 14449387995366829325
selectedScreenIds: ["c7716aadb26b4c45a694a668d7602570"]
prompt: Matrix is hero; plain-language role summaries. One Save/Request approval primary. Soften secondary tags.
```

#### [P1] Partner Activation — Checklist Drawer

```
projectId: 14449387995366829325
selectedScreenIds: ["40b9e426b83645b983589a81631843d4"]
prompt: Checklist as clear path-to-value; deep links readable; one primary Complete next task.
```

#### [P0] Roles & Permissions — Review Diff & Approval Modal

```
projectId: 14449387995366829325
selectedScreenIds: ["3ad643ab720b4af6a8f1fc5d59d20d33"]
prompt: If dual-custody is 1/2, primary CTA must be Sign as Approver (1/2)—not Approve & Publish. Rank Critical mutations first. Wire or remove Visual/Raw toggle. Discard behind confirm. Purple publish only when fully signed.
```

#### [P1] Audit Trail — Activity Log

```
projectId: 14449387995366829325
selectedScreenIds: ["82da2d3e169347faa28a6a58d1a96489"]
prompt: Timeline/table scanable; filters quiet; export secondary.
```

#### [P1] API & Webhooks — Developer Gateway

```
projectId: 14449387995366829325
selectedScreenIds: ["9d1ca135bcad4fa6b1ad620ca0978d93"]
prompt: Developer density without vanity. Copy key secondary; Create webhook primary.
```

#### [P1] Organization Settings — SSO & Identity

```
projectId: 14449387995366829325
selectedScreenIds: ["8710344cdc654174aa560341df72a97a"]
prompt: SSO sections grouped; destructive actions outline. Consistent form density.
```

## pulse — `13742769213974223768`

### Cross-cutting (wszystkie UI screeny)

```
projectId: 13742769213974223768
selectedScreenIds: ["8d4890431ab94d329b34792b94e6e1fd", "fb291b3718a9407abd0491db0fc38a13", "3b20f6b26715420e88040f999ce09e71", "c9fcf69423d74b1882c22e24139b83c8", "06eae4f218b64ac284c43a67a2eae51c", "da0ab64e8aa0414682f78d6b81a85184", "33eb1dbf3e7547698a397a39c6120cde"]
deviceType: MOBILE
prompt:
Soft humanist iOS: calm mint/lavender, no clinic severity. One primary CTA. Fix typos. Reduce biometric jargon density on Today. Consistent tab destinations.
```

### Per-screen

#### [P1] Today Recovery

```
projectId: 13742769213974223768
selectedScreenIds: ["8d4890431ab94d329b34792b94e6e1fd"]
prompt: Keep recovery ring hero. Compress sub-metrics. Check-in CTA clear. Less empty bottom; pull rhythm chart up.
```

#### [P1] Daily Check-in

```
projectId: 13742769213974223768
selectedScreenIds: ["fb291b3718a9407abd0491db0fc38a13"]
prompt: Few-tap flow; large tap targets; Next sole primary. Soft illustration not competing.
```

#### [P0] Check-in Summary

```
projectId: 13742769213974223768
selectedScreenIds: ["3b20f6b26715420e88040f999ce09e71"]
prompt: Fix typo de-walk → walk. Calm summary; one Try recovery / Done primary. Reduce stacked cards.
```

#### [P1] Weekly Trends

```
projectId: 13742769213974223768
selectedScreenIds: ["c9fcf69423d74b1882c22e24139b83c8"]
prompt: Softer chart; one insight callout; avoid clinic UI.
```

#### [P1] Sleep Breakdown

```
projectId: 13742769213974223768
selectedScreenIds: ["06eae4f218b64ac284c43a67a2eae51c"]
prompt: Clear stages; readable legend; one secondary tip.
```

#### [P1] Evening Wind-down

```
projectId: 13742769213974223768
selectedScreenIds: ["da0ab64e8aa0414682f78d6b81a85184"]
prompt: Gentle evening tone; Start wind-down primary; less clutter.
```

#### [P1] Profile & Devices

```
projectId: 13742769213974223768
selectedScreenIds: ["33eb1dbf3e7547698a397a39c6120cde"]
prompt: Grouped settings; connected devices clear; Log out text destructive.
```

## atlas-cms — `10625654400267550602`

### Cross-cutting (wszystkie UI screeny)

```
projectId: 10625654400267550602
selectedScreenIds: ["d8ff246cc15541178b6ec9fac6906374", "1fcfbe214ceb4d1190ca6dc761cddd41", "7c0bbb8ed6664495913eea028fd5158a", "76d588a58f9b42d4a5246a02cc9f6f43", "7fec57fb16d846f597182a6081c20885", "56801ce646c44386b68c6ce0a450b0dd"]
deviceType: DESKTOP
prompt:
Docs product craft: left nav consistent, TOC, version chip. Playground Copy as primary. Token names monospace. Avoid fake marketing chrome on docs pages.
```

### Per-screen

#### [P1] Getting Started / Introduction

```
projectId: 10625654400267550602
selectedScreenIds: ["d8ff246cc15541178b6ec9fac6906374"]
prompt: Clear intro hero + next steps cards. Consistent left nav active. Readable type scale for docs.
```

#### [P1] Foundations / Spacing

```
projectId: 10625654400267550602
selectedScreenIds: ["1fcfbe214ceb4d1190ca6dc761cddd41"]
prompt: Visual scale examples with token names; less decorative filler.
```

#### [P1] Tokens / Color

```
projectId: 10625654400267550602
selectedScreenIds: ["7c0bbb8ed6664495913eea028fd5158a"]
prompt: Swatches + CSS var names; contrast pairings; copy token action.
```

#### [P0] Tokens / Theme Studio

```
projectId: 10625654400267550602
selectedScreenIds: ["76d588a58f9b42d4a5246a02cc9f6f43"]
prompt: Enter true playground mode: collapse left nav to icon rail; remove right TOC. Layout controls | live specimen | auditor | export. Rename mode Light/Dark/High contrast. Expand specimen to button/input/alert so WCAG maps to real components—not a control dump.
```

#### [P1] Components / Button

```
projectId: 10625654400267550602
selectedScreenIds: ["7fec57fb16d846f597182a6081c20885"]
prompt: Anatomy + do/dont + playground props + Copy React primary. Add variant × size matrix synced to Interactive panel.
```

#### [P1] Components / Input

```
projectId: 10625654400267550602
selectedScreenIds: ["56801ce646c44386b68c6ce0a450b0dd"]
prompt: Group modifiers Content/Affordance/Validation. Preview cycles Default/Focus/Error/Disabled. Show error helper + aria-invalid. Copy snippet primary.
```

## nest — `5578506665934280808`

### Cross-cutting (wszystkie UI screeny)

```
projectId: 5578506665934280808
selectedScreenIds: ["50c0cf769f5f42589ee9e7fd8e30ff47", "a8adc6b7ba9540fd9be8855081decd89", "d5b12a678e0944a0988e82b502fa5adb", "37ae5d29d55d4f21a203a66b4541ccd7", "9e086c2d3bb24bc08a4524667aec995a", "9eeef91e35c14496b35d87e6c51e5b4d", "107cc7deb5f444bbadb883ab5d0fed9a"]
deviceType: DESKTOP
prompt:
Two-sided marketplace trust: one guarantee figure, one badge vocabulary. Marketing chrome on Explore only; booking + live job = focused shell without tabs. One primary per card (Book/Track). Desktop = list+map (+ optional slim drawer)—never full mobile profile as third column.
```

### Per-screen

#### [P0] Mobile iOS Home

```
projectId: 5578506665934280808
selectedScreenIds: ["50c0cf769f5f42589ee9e7fd8e30ff47"]
prompt: Simplify pro cards: photo, name, rating, price, ETA, Book visit primary + Message secondary. Soften urgent banner so it doesn’t drown Book. Improve secondary text contrast. Tighten spacing above tab bar.
```

#### [P1] Mobile Pro Profile & Reviews

```
projectId: 5578506665934280808
selectedScreenIds: ["a8adc6b7ba9540fd9be8855081decd89"]
prompt: Trust first: reviews, insured, fee breakdown. Request to book sole primary.
```

#### [P0] Mobile Booking & Checkout

```
projectId: 5578506665934280808
selectedScreenIds: ["d5b12a678e0944a0988e82b502fa5adb"]
prompt: Focused booking chrome only: Step X of 3, back, Cancel—no Explore header, no tab bar. Pin summary (pro + service + slot + total). Surface Nest fee/tax under total immediately. Confirm request sole primary.
```

#### [P1] Mobile Bookings & Activity

```
projectId: 5578506665934280808
selectedScreenIds: ["37ae5d29d55d4f21a203a66b4541ccd7"]
prompt: Clear status list; empty state; Message/Track actions.
```

#### [P1] Mobile Live Pro Tracking & ETA

```
projectId: 5578506665934280808
selectedScreenIds: ["9e086c2d3bb24bc08a4524667aec995a"]
prompt: Map + ETA hero; calm status; Contact secondary.
```

#### [P0] Desktop Web Results & Booking Drawer

```
projectId: 5578506665934280808
selectedScreenIds: ["9eeef91e35c14496b35d87e6c51e5b4d"]
prompt: Default list + map; drawer only on select and booking-focused—not a full mobile profile paste. One search system. Unify Nest Guarantee amount sitewide. Practical trust tone, not artisan.
```

#### [P1] Desktop Web Results (Full Map & List)

```
projectId: 5578506665934280808
selectedScreenIds: ["107cc7deb5f444bbadb883ab5d0fed9a"]
prompt: Sync list highlight ↔ map pin. Nest green for selected filters (not black). Soften featured “Fastest” to a chip unless labeled Sponsored. Balanced map/list density for desktop.
```

## signal-rooms — `283851095924186462`

### Cross-cutting (wszystkie UI screeny)

```
projectId: 283851095924186462
selectedScreenIds: ["7f9a471a1454446b8bbb5238fa8fe8da", "d888c2d818ef4c379f4570cb87b30c12", "5bd4785873804ad8b119da3ccdc72313", "8a5caf1a87184a0ab2e4204965bd1caa", "a1333bdccbde4ecaa6f5fd3b7d76868f", "9ee1355043f048e495ebc330ec385c73"]
deviceType: MOBILE
prompt:
One Discover model (rooms-first OR hubs-first). Lime = primary + speaking ring; pink = LIVE only. Shared in-room header with Stage/Chat toggle. Single Schedule/Go Live create path from center tab.
```

### Per-screen

#### [P1] Discover — Live Signal Rooms

```
projectId: 283851095924186462
selectedScreenIds: ["7f9a471a1454446b8bbb5238fa8fe8da"]
prompt: Live cards energy; Enter room primary; less empty bottom.
```

#### [P0] Browse — Communities & Niches

```
projectId: 283851095924186462
selectedScreenIds: ["d888c2d818ef4c379f4570cb87b30c12"]
prompt: Resolve twin Discover: hubs lead with 2–3 niches then compact Live in your niches linking to room grid—not a second home. Defer Claim Frequency to Profile/Host. Neon only on live indicators.
```

#### [P1] In-Room — Audio Stage

```
projectId: 283851095924186462
selectedScreenIds: ["5bd4785873804ad8b119da3ccdc72313"]
prompt: Tighten stage→chat→dock spacing; Raise hand sole lime primary; Leave quiet. Keep speaking rings.
```

#### [P1] In-Room — Live Chat & Reactions

```
projectId: 283851095924186462
selectedScreenIds: ["8a5caf1a87184a0ab2e4204965bd1caa"]
prompt: Add Stage | Chat segmented control sharing one room header. In Chat, Leave secondary; Raise Hand primary. Reuse one react component; drop duplicate react chrome if composer has quick reacts.
```

#### [P1] Schedule Room — Plan Hangout

```
projectId: 283851095924186462
selectedScreenIds: ["a1333bdccbde4ecaa6f5fd3b7d76868f"]
prompt: Form clarity; Schedule primary; calendar HIG-ish.
```

#### [P1] Profile — Host Studio & Replays

```
projectId: 283851095924186462
selectedScreenIds: ["9ee1355043f048e495ebc330ec385c73"]
prompt: Host tools calm; Start room primary; replays list.
```

## ledgerly-studio — `17594159713071269913`

### Cross-cutting (wszystkie UI screeny)

```
projectId: 17594159713071269913
selectedScreenIds: ["c1861d6f976840649516b4f66a5a4f2d", "a2719d22d41d4471b3e009520c002252", "1ccb15c3d4fe47bcb95f8a8814f442b9"]
deviceType: DESKTOP
prompt:
Lab notebook with guardrails: one Ship/Promote primary. Hypothesis visible. Reduce purple glow. Density with readable type—not microscopic metadata.
```

### Per-screen

#### [P0] Experiments Board

```
projectId: 17594159713071269913
selectedScreenIds: ["c1861d6f976840649516b4f66a5a4f2d"]
prompt: One New Experiment CTA in header only. Remove Board/Detail/Library peer tabs—Detail is drill-in. Running cards lead with primary metric + CI; power secondary. Normalize card skeleton: ID, status, hypothesis, 3 stats, one action.
```

#### [P1] Experiment Detail

```
projectId: 17594159713071269913
selectedScreenIds: ["a2719d22d41d4471b3e009520c002252"]
prompt: Hypothesis → variants → results decision. Ship/Kill/Extend clear; charts readable; one primary decision CTA.
```

#### [P1] Metric Library

```
projectId: 17594159713071269913
selectedScreenIds: ["1ccb15c3d4fe47bcb95f8a8814f442b9"]
prompt: Primary vs guardrail clear; Add metric primary; monospace event names.
```
