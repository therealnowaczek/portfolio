# RAW CRITIQUES


<!-- agent 07a24dc6-4666-4859-817e-e5ef5e0f7414 -->

# Portfolio Design Critique — Northline · Harbor · Circuit

Focus: what a hiring manager would ding in a senior product-design portfolio. Severity = hireability risk if left unfixed.

---

## 1) Northline — AI ops profitability console

### Cross-cutting prompts (apply to all Northline screens)

1. **One primary teal CTA per viewport.** Demote global “Scan now” to outline/ghost when the page already has a page-level primary (Sync, Apply fix, Create Rule, Connect store). Never show 2–3 solid teal buttons in the same horizontal band.
2. **Reduce semantic-color noise.** Cap alert red to one hero signal per screen (banner *or* KPI *or* table row highlight—not all three). Positive green only for confirmed yield/optimal; grey for neutral/borderline.
3. **Fix shell consistency.** Same sidebar active treatment, same top-bar control set, same card radius (8–10px), same 4–8–12–16 spacing scale. If Overview shows empty/onboarding, header must not claim “Store A · Live · Synced” and AI Scan must not show “3 active.”
4. **Density for experts, not clutter.** Prefer fewer nested sublabels under every number. Move tertiary copy (targets, sync %, pipeline labels) into tooltips or a secondary row revealed on expand—keep first-read to metric + one delta.

---

### Screen 1 — Overview / True Net Profit (+ Agentic profit scan drawer)

| | |
|---|---|
| **Severity** | **P0** |
| **Issues** | Drawer overlaps chart/table and clips right-edge data—reads as unfinished chrome. Toast truncated (“3 margin leaks d…”). Three identical “Apply fix” teals compete with global “Scan now.” KPI cards stack metric + delta + long prose + badge without a clear scan path. Waterfall labels cramped inside thin segments. |
| **Edit prompt** | Keep the Overview layout and teal Northline brand. Make the Agentic profit scan a proper right drawer that pushes or dims content with a clear close control—never clip the chart or table. Show one full toast (“Scan complete — 3 margin leaks detected”). In the drawer, one primary “Apply all recommended fixes” plus per-leak secondary “Apply”; demote global Scan now to outline. Simplify each KPI to value + one delta; move long subcopy to a second line at 12px muted grey. |

---

### Screen 2 — AI Scan finding detail (SKU Margin Leak / AeroPress Filter Pack)

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Red dominates (priority tags + net drag + CRITICAL row + deltas)—no calm reading path. Right “Autonomous Plan” panel fights the left diagnostic for primary action. Nested metric tiles under the hero feel like a second dashboard. Attribution bar segments too thin for % labels. Breadcrumb path is extremely long and visual weight equals the page title. |
| **Edit prompt** | Preserve the finding-detail split (diagnosis left, recovery plan right). Soften red: one High Priority pill + one red net-drag figure; rest of cost rows use neutral text with a single highlighted critical row. Make “Apply fix now” the only solid teal; Schedule/Dismiss as text/outline. Shorten breadcrumbs; enlarge SKU title. Widen waterfall segments or move % labels below the bar so nothing clips. |

---

### Screen 3 — Ads & ROAS Attribution Intelligence

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Three solid teals in header/actions (Scan now, Sync Ad Accounts, Review & Auto-Throttle). Waste Detection panel sits *inside* the chart card like a pasted sticker. Ledger actions mix red filled, white outline, and teal “Optimal” check inconsistently—column doesn’t scan. Channel chips + title badge + ROAS pill compete above the fold. |
| **Edit prompt** | Keep Ads page structure (KPIs → chart → ledger). Make Sync Ad Accounts the sole solid primary; Scan now outline; Simulate Reallocation ghost. Move Ad Set Waste Detection to a sibling column card with clear padding—don’t overlay the chart. Standardize Status/Action: destructive outline for throttle/pause, text+icon for Optimal. Tighten title to one H1 + one status chip. |

---

### Screen 4 — COGS & Landed Cost Ledger

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Alert banner + three red KPI deltas + red table cells = alarm fatigue. Table actions alternate “Enforce Bundle Rule” / “View Landed Sheet” / “Optimal” with unequal visual weight. Bottom three widgets feel bolted on; composition bar, shipments, and auditor compete equally after a heavy table. Category chips + Filter + Export clutter the ledger header. |
| **Edit prompt** | Keep COGS ledger intent. Allow one red system: either the discrepancy banner *or* KPI drag pills—not both at full intensity. Make Reconcile 3PL Invoices the only solid teal; Update Freight Tariff outline. In the ledger, use a consistent action pattern (primary text button for fixable rows, muted “Optimal” for healthy). Visually demote bottom widgets (lighter borders, smaller headers) so the ledger stays the hero. |

---

### Screen 5 — Autonomous Sentinel Rules & Guardrails

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Each rule card is a mini-product (tags + toggle + IF/THEN code slabs + timestamps)—list doesn’t scan. Mode control (Review / Full Autonomous) sits next to Create and fights hierarchy. Pending-approval rule’s Approve button is correct but other cards’ Active toggles look equally loud. Audit table at bottom is truncated and feels like an afterthought. Monospace IF/THEN blocks use red/teal highlights that look “AI-generated dense.” |
| **Edit prompt** | Keep sentinel rules as cards but compress each to: title, scope chips, one-line summary, auto-pilot toggle, expand for IF/THEN. Only expand the pending-approval card by default with Approve as solid teal. Demote Review/Full Autonomous to a quiet segmented control left of Create. Soften code slabs to muted backgrounds with one accent per threshold. Give the audit trail a clear section break and show 3 full rows without clipping. |

---

### Screen 6 — Overview empty / onboarding (Connect first store)

| | |
|---|---|
| **Severity** | **P0** |
| **Issues** | **Product lie:** chrome shows Store A Live + synced + AI Scan “3 active” while body says no storefront connected (0/4 pipelines). Connector descriptions truncated (“settlement f…”, “conver…”). Illustration is generic node diagram—not a real product visual. Trust strip + connectors + giant card create three competing “bottoms.” Empty state is airy while every other Northline screen is dense—set feels inconsistent. |
| **Edit prompt** | Redesign as a true empty Overview: disable or grey Store selector to “No store connected,” remove Live/Synced, hide or zero the AI Scan badge, keep Scan now disabled/outline. Keep the centered Connect store CTA and demo secondary. Fix connector copy so nothing truncates. Replace the abstract star diagram with a cleaner 4-connector strip. Match Northline spacing density—less barren whitespace below the trust row. |

---

## 2) Harbor — fintech repayments iOS

### Cross-cutting prompts (apply to all Harbor screens)

1. **Kill dead bottom canvas.** Content or safe grouping must sit ~16–24pt above the tab bar. Tall empty white slabs read as unfinished Midjourney frames—fatal in a portfolio.
2. **HIG consistency.** One navigation pattern: either branded header *or* large titles—not both conflicting (“Make Repayment” nav vs “Review Repayment” H1). Tab icons/labels identical across screens; avatar+bell only where system chrome expects them.
3. **One primary blue button per screen.** Secondary actions use `.secondary` / plain text. Never two equal-width filled blues (Pay now + Transfer $55 + Apply recommendation competing).
4. **Data & state integrity.** Same account mask everywhere (8829 vs 8629 is a trust killer). Remove ghost/placeholder text. Disable Confirm when NSF warning is active until acknowledge *and* remediating action.

---

### Screen 1 — Home

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Large empty band between Zero-Liability banner and tab bar. AI insight card is tall and steals focus from balance + Repay. Three quick actions: only Repay is primary—good—but Statements/Autopay cards feel heavy. Upcoming list stops at 3 with “See all (5)” then dead space instead of a 4th row or recent activity. |
| **Edit prompt** | Keep Harbor Home hierarchy: balance → Repay primary → upcoming. Compress the AI insight to ~2 lines + one text button (“Explain”) so Upcoming sits higher. Fill or remove the bottom void: add a compact “Recent activity” (2 rows) or pull content down so the security banner sits just above the tab bar. Keep FDIC badge subtle under the balance. |

---

### Screen 2 — Repayments Hub

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Faint leftover/ghost copy under branding (placeholder artifact). Pay now + Change date as twin equal CTAs weaken the primary. Huge empty region above tab bar. Smart Overdraft Shield is a full marketing card mid-list—disrupts plan scanning. “2 Active” vs three visual blocks (2 plans + shield) confuses count. |
| **Edit prompt** | Remove any ghost/placeholder text under Harbor. Make Pay now the only filled primary; Change date as secondary/plain. Collapse Overdraft Shield to a single list row (icon, title, ON toggle, Manage)—not a feature billboard. Pull Repayment History up and eliminate the large blank gap above the tab bar. |

---

### Screen 3 — Review Repayment (Make Repayment flow)

| | |
|---|---|
| **Severity** | **P0** |
| **Issues** | Confirm repayment remains a loud enabled primary while NSF warning says ACTION NEEDED—dangerous and unhireable for fintech. Nav title ≠ page title. Two remediation links under the alert aren’t ordered by urgency. Checkbox alone doesn’t block the CTA visually. Dead space under secondary button. Account digits may disagree with Hub. |
| **Edit prompt** | Align titles to “Review repayment.” Keep the red NSF banner as the hero problem. Disable Confirm until the acknowledgment checkbox is checked *and* either show Transfer funds as the solid primary *or* keep Confirm disabled with helper “Transfer $55 or switch method to continue.” Unify account mask with other screens. Tighten spacing so Done-area isn’t floating in empty white. |

---

### Screen 4 — Transaction Detail / Payment scheduled

| | |
|---|---|
| **Severity** | **P2** |
| **Issues** | Success state is clear but lower third is empty—feels cropped. Done is correct primary; PDF/history links are fine. Success icon + lock overlay is slightly busy. FDIC banner is good trust copy but competes with Done if too tall. |
| **Edit prompt** | Keep the success confirmation layout. Slightly reduce icon size; move lock into the FDIC banner instead of overlaying the check. Group Done + secondary links + email note into a tight bottom stack ~24pt above home indicator / safe area—no large empty field. |

---

### Screen 5 — Insights / October Overview

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Two stacked solid blue CTAs (“Apply recommendation” + “Transfer $55 now”) = dual primary. Dismiss “x” beside Transfer is awkward HIG (prefer swipe or text Dismiss). “AI Smart Intelligence” naming feels fake/AI-slop vs product voice. Forecast list buried; spend card + two AI cards dominate. Month control (Aug/Sep/Oct) is cramped next to title. |
| **Edit prompt** | Rename section to “Recommendations” or “Insights for you.” Elevate the Action Needed card as the only solid primary; make subscription audit a secondary outline card. Put Dismiss as text inside the card, not a stray x. Rebalance vertical space so Cashflow Forecast shows fully without feeling jammed under two tall cards. |

---

### Screen 6 — Settings / Profile

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Enormous empty gap under version string—classic AI mock artifact. Log Out as pink filled full-width button overpowers Settings content. Credit Health / Annual Savings strip is low-contrast grey-on-grey. Harbor logo + avatar + bell on Settings is redundant with profile hero. Progress bar in credit line is too thin (~2px). |
| **Edit prompt** | Keep grouped Settings list structure. Soften Log Out to destructive text or outline—not a loud filled brick. Remove the huge blank: end content ~16pt above the tab bar. Increase contrast on the credit stats strip. Thicken utilization bar to ~6–8pt. Consider dropping duplicate bell/avatar when the profile photo already heads the screen. |

---

## 3) Circuit — deploy / observability dark console

### Cross-cutting prompts (apply to all Circuit screens)

1. **IA honesty.** Breadcrumbs and active tab must match the view (Metrics ≠ `…/deployments` with Deployments underlined). Incident screens should activate Incidents tab.
2. **Contrast floor.** Labels/timestamps/line numbers ≥ 4.5:1 on near-black—no `#6B7280` on `#0A0A0A` for essential UI. Raise secondary text to ~#A1A1AA+.
3. **No fake desktop chrome.** Drop macOS traffic-light dots on log panels; use product panel headers only. Avoid purple outer-glow CTAs (AI-default look).
4. **Density with rhythm.** Keep power-user density but enforce consistent 8px grid, one purple primary per page, and collapse footer widgets that repeat header KPIs.

---

### Screen 1 — Deployments list

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Triple metric storytelling: header p99/success + 4 concurrency cards + 3 footer panels + table—same story thrice. Filter pills + search + branch + time + view toggle is a crowded toolbar. Footer CLI curl is cute but portfolio-kitschy if always visible. Status column text wraps densely; actions icons cramped. |
| **Edit prompt** | Keep dark Deployments table as the hero. Cut footer to one contextual strip (active pipeline only) *or* move concurrency into the header—don’t repeat. Simplify filters to status pills + search + time; nest Branch/view. Soften New deploy purple (flat fill, no glow). Ensure Failed/Running rows remain the only loud color accents. |

---

### Screen 2 — Deploy detail (#892 READY)

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Redeploy uses glow/gradient—reads template AI. Visit Preview / Rollback / Redeploy / download = four peer actions; primary unclear for a READY deploy (Visit Preview should often lead). Pipeline 6-up is label-heavy; logs compete with three right cards of equal visual weight. Breadcrumb still `deployments` while in detail—OK, but title is very long and truncates mental parse. |
| **Edit prompt** | Keep pipeline + logs + right metadata. Flat purple Redeploy without glow; make Visit Preview the default emphasis when status is READY, Rollback secondary. Compress pipeline to icon+label+duration with details on hover. Slightly quiet Provenance card vs Live Telemetry. Allow commit title to wrap to two lines cleanly. |

---

### Screen 3 — Incident INC-2041 (active P1)

| | |
|---|---|
| **Severity** | **P0** |
| **Issues** | **Deployments tab still active** while this is an incident—IA failure. Red banner + P1 badge + three FAIL cards + red chart + CRIT logs = saturation; eye has no single next step. Terminal panel uses **fake red/yellow/green window dots**. Rollback appears in banner and runbook (OK) but three check CTAs (Kill queries / Flush JWKS / Inspect) are equal loudness. Extremely tall; feels like a poster, not a workable console viewport. |
| **Edit prompt** | Activate Incidents tab; breadcrumbs `… / incidents / INC-2041`. Keep dark incident layout but enforce one primary recovery: Rollback to #890 solid in the banner; other mitigations outline. Remove macOS traffic lights—use a Circuit panel header (“Live triage stream”). Reduce red fills: chart spike + one FAIL badge per card; body text mostly white/grey. Collapse runbook to 4 tight steps with a single “Run next step.” |

---

### Screen 4 — Metrics & Edge Observability

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Breadcrumbs still say deployments; good that Metrics tab is active. 4 KPIs + 4 charts is solid, but pool saturation progress bar is hairline-thin and the warning badge floats disconnected. Neon multi-series charts risk “dashboard wallpaper.” Create Alert Rule purple competing with Live Streaming chrome. |
| **Edit prompt** | Fix breadcrumb to `… / metrics`. Keep the 2×2 chart grid. Thicken pool lease bar; bind the saturation badge next to Active Pool Leases. Tone chart chromas slightly; keep SLA dashed line. One primary: Create Alert Rule; Export outline. Ensure axis/legend labels meet contrast. |

---

### Screen 5 — Logs & Traces (504 trace detail)

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Tab says Logs & Traces but breadcrumbs still `…/deployments`. Split pane is strong; selected 504 is clear. Waterfall bars good, but correlated log ERROR rows double-highlight (row fill + level chip)—noisy. Query bar + chips + live poll + histogram steals vertical space from traces. “Link to INC-2041” solid red is good; Copy/OTel should stay quiet. |
| **Edit prompt** | Update breadcrumb to logs/traces. Keep master–detail traces. Slightly shorten the histogram. In correlated logs, highlight only the failing lines once (left border or soft fill—not both plus giant ERROR chip). Keep Link to INC-2041 as the only solid accent action in the detail header. |

---

### Screen 6 — Environment Variables

| | |
|---|---|
| **Severity** | **P1** |
| **Issues** | Active tab underline reportedly red vs Circuit’s purple system—inconsistent. Four summary cards above a secrets table feel like vanity metrics; Audit Integrity “SLSA L3” isn’t a variable count. Value column truncation on DATABASE_URL is expected but eye/copy icons crowd the cell. Reveal All + 2FA badge next to Add Variable creates dual focus. Bottom Cryptographic Proof block looks decorative. |
| **Edit prompt** | Keep env var table as the core. Use purple active tab like other screens. Collapse or remove vanity KPI row—or reduce to Secrets count + Last rotated. Single primary: + Add Variable; Reveal All outline with 2FA. Give VALUE a monospace truncated field with icon buttons in a fixed trailing slot so columns align. Soften or drop the crypto proof panel; keep a compact audit trail only. |

---

## Priority cheat sheet (fix first)

| Priority | Screens |
|---|---|
| **P0** | Northline 1 (clipping drawer + toast), Northline 6 (empty vs live chrome), Harbor 3 (confirm while NSF), Circuit 3 (wrong tab + fake window chrome + red overload) |
| **P1** | Most remaining screens (CTA competition, density, IA, dead space, contrast) |
| **P2** | Harbor 4 (success spacing polish) |

---

## What “hireable” looks like after edits

- **Northline:** Expert density with *one* decision path per screen; empty state that doesn’t contradict the shell.
- **Harbor:** Real iOS rhythm, no blank canvas, payment safety states that block bad confirms.
- **Circuit:** Credible SRE tool—correct navigation, accessible contrast, no novelty terminal frames or glow buttons.

<!-- agent 3e43ec15-a8d7-45a7-9a8d-5ca9ae8573c0 -->

# Portfolio Design Critique — Folio · Quorum · Pulse

Senior pass focused on **platform authenticity, IA consistency, cognitive load, and craft polish**. Severity: **P0** ships broken / credibility-breaking · **P1** hurts trust or primary task · **P2** polish / hierarchy.

---

# 1) Folio — Warm editorial Android critique app

## Folio Screen 1 — Today’s Critique (Explore feed)
**Label guess:** Home / critique edition feed  
**Severity:** **P1**

**Issues**
- Bottom nav marks **EXPLORE** active while the product’s core job (“give critique”) lives on FRAMES/CRITIQUES — weak IA story for a first screen.
- Dual voting + oversized orange **Give Critique** + bookmark/share = competing primary actions; CTA hierarchy is muddy.
- Feed cards bury pin counts (8 CRITIQUE PINS) as image overlays; critique urgency should outrank lifestyle photography.
- “Upload Frame” banner fights the bottom nav (thumb zone collision / double bottom chrome).

**Stitch prompt**  
Clarify Explore as the edition feed: one primary CTA per card (“Give Critique”), demote vote/bookmark to tertiary icons, move “Upload Frame” into a top app-bar action or FRAMES empty state, and make bottom-nav active state match the screen’s job. Keep warm cream + serif headlines; tighten card chrome so pins and review state read above the hero photo.

---

## Folio Screen 2 — Frame Detail
**Label guess:** Frame artifact + critique thread  
**Severity:** **P1**

**Issues**
- Product is **Android**, but hero is an **iPhone / Dynamic Island** mock — portfolio credibility killer for an Android critique app.
- Critique cites **Android system back** vs swipe; the artifact doesn’t show Android chrome, so feedback feels disconnected from the canvas.
- “Pin 02” is referenced in critique while only Pin 01 is visible — broken pin ↔ comment map.
- FAB **Add Annotation** overlaps reading the critique list; role of FAB vs “Write Critique” is unclear.

**Stitch prompt**  
Replace the iPhone hero with an Android device (gesture bar, Material chrome) matching the edge-swipe critique. Show all referenced pins on-canvas with matching numbers in critique cards, and resolve FAB vs “Write Critique” into one annotation entry path. Keep editorial serif title + warm neutrals; increase frame↔pin↔comment linkage.

---

## Folio Screen 3 — Browse by Interaction & Pattern
**Label guess:** Frames library / pattern archive  
**Severity:** **P1**

**Issues**
- Bottom nav shows **EXPLORE** active on a Frames archive — IA mismatch (should be FRAMES).
- Filter stack is overloaded: pattern chips + OS dropdowns + “Needs Critiques” + floating “Signal First” pill + FAB + CTA banner.
- Craft badges (★ CRAFT 4.7) and red count badges compete; unclear if counts are critiques, pins, or notifications.
- Floating control pill + FAB + bottom nav = three competing bottom layers.

**Stitch prompt**  
Set FRAMES as the active tab. Collapse filters into one sticky row (pattern chips + one “Platform” control) and move “Needs Critiques” into a filter chip, not a separate CTA. Unify card badge grammar (one status + one craft score). Remove the floating sort pill; put sort in the app bar. Keep cream editorial grid, reduce bottom chrome to nav only.

---

## Folio Screen 4 — Upload Frame — Annotations (Step 2/3)
**Label guess:** Upload wizard · pin placement  
**Severity:** **P0**

**Issues**
- **Two different Next labels:** top “Next: Review” vs bottom “Next: Set Guidelines” — broken stepper model.
- Pin callouts + metadata + pillars make the canvas unreadable; annotation cards obscure the frame they’re about.
- “REQUIRED” on metadata while pins already exist — unclear what’s blocking progress.
- Pillar priorities (P1/P2) reuse critique severity language and collide with product rubric.

**Stitch prompt**  
Fix the stepper: one Next destination (“Next: Guidelines”), matching step label everywhere. Collapse pin notes into a bottom sheet when selected so the frame stays visible; show a pin list below the canvas. Rename pillar priorities to “Focus: Primary / Secondary.” Keep warm editorial styling; make the canvas the hero of Step 2.

---

## Folio Screen 5 — Submit Frame (write critique)
**Label guess:** Compose critique / rubric scoring  
**Severity:** **P1**

**Issues**
- Score chip colors are inconsistent (Craft 5 = green, Impact 5 = orange) — breaks rubric literacy.
- Selected score button color doesn’t reliably match the summary badge.
- Raw coordinates `[x: 312, y: 84]` feel engineering-tool, not warm editorial.
- Title “Submit Frame” while content is **writing a critique** — wrong verb for the task.

**Stitch prompt**  
Rename to “Write Critique.” Unify 1–5 score color continuum (e.g. cool→warm or single accent + weight). Replace coordinate targeting with a pin label + thumbnail hotspot. Keep Rubric 3.0, composition editor, and Save Draft / Post Critique; soft-editorial cream, less clinical metadata.

---

## Folio Screen 6 — Critiques & Activity
**Label guess:** Inbox of received critiques  
**Severity:** **P1**

**Issues**
- Bottom nav includes **GRAPH** here vs **@MAYA** on other screens — inconsistent nav model.
- Health dashboard + filters + multi-action critique cards (Apply / Reply / ignore) overload the inbox primary task: triage feedback.
- Score scales flip between **/10** (Marcus) and earlier **/5** rubric — portfolio inconsistency across product.
- Draft banner + bottom nav again stack sticky chrome.

**Stitch prompt**  
Lock a single 4-tab nav (@MAYA, not GRAPH). Normalize all rubric scores to one scale (5 or 10) everywhere. Simplify each critique row to: pin context, scores, excerpt, primary “Apply or Reply.” Move editorial standing into Profile. Keep terracotta accents; reduce sticky banners to one draft strip or none.

---

## Folio Screen 7 — Profile — Maya Lin
**Label guess:** Designer profile / portfolio hub  
**Severity:** **P2** (with one P1)

**Issues**
- **P1:** Bottom nav active **FRAMES** on Profile — should be **@MAYA**.
- Stats use “CRITIQUE FEED / APPLAUDS / SIGNAL” without definitions; Signal % needs affordance.
- Featured study + frame grid + distinctions = three portfolio surfaces without a clear primary.
- iOS-looking mockups again undercut Android product claim.

**Stitch prompt**  
Activate @MAYA in bottom nav. Define Signal with a short tooltip or footnote. Lead with Featured Study, then Frames grid, then Distinctions as a compact strip. Swap device frames to Android where the product story is Android. Keep serif name, warm cream, restrained badge count (max 3).

---

## Folio — Cross-cutting Stitch prompts (project-level)

1. **Android authenticity pass:** Across all Folio screens, enforce Material navigation (gesture bar, status icons), Android device frames in heroes, and critique copy that matches visible platform chrome. Remove iPhone/Dynamic Island specimens unless the frame is explicitly tagged iOS.

2. **Navigation IA lock:** Freeze one bottom nav — Explore / Frames / Critiques / @Profile — with correct active states on every screen. Kill GRAPH and any screen that invents a fifth destination.

3. **Rubric & pin system:** One score scale product-wide; pins numbered on-canvas always match critique references; pin counts use one badge language (pins vs critiques vs notifications).

4. **Warm editorial restraint:** Cap pills/badges per view; one primary orange CTA; move secondary upload/draft banners out of the thumb zone; protect cream + serif brand without dashboard clutter.

---

# 2) Quorum — B2B partner activation / permissions admin

## Quorum Screen 1 — Partner Directory & Integrations (+ Snowflake drawer)
**Label guess:** Integrations catalog + connector wizard  
**Severity:** **P1**

**Issues**
- Page density + right wizard = two full UIs; primary grid becomes wallpaper.
- Status vocabulary sprawls: In Onboarding / Connected / Configuring / Available — plus Lifecycle %, Wizard step, SLA, SKUs.
- “Resume Snowflake Setup” in header while drawer already open — duplicated entry points.
- POLICY BLOCKED PII is strong, but buried mid-wizard without a blocked-step summary in the stepper.

**Stitch prompt**  
When the connector wizard is open, dim/simplify the grid and surface step status in the stepper (Auth ✓ · Scopes · blocked domains). Collapse partner cards to: name, status chip, one metric, one action. Keep blue primary, zero-trust cues, and the PII policy block as a sticky alert under Scopes.

---

## Quorum Screen 2 — Roles & Permissions
**Label guess:** RBAC matrix  
**Severity:** **P1**

**Issues**
- Matrix toggles + sublabels (FULL R/W, AUTO COPILOT, Pending read) exceed glance comprehension; pending orange dots need a legend.
- “Activation +18%” badge on an RBAC page is metric theater — wrong context.
- Unpublished changes alert + staged diff + table pending states = three representations of the same truth.
- Owner “immutable” still shows interactive-looking toggles.

**Stitch prompt**  
Add a pending-change legend; render Owner permissions as locked readouts, not toggles. Move Activation growth off this page. Unify unpublished state into one banner that deep-links the staged diff. Keep purple brand, orange = unsaved only, monospace for policy snippets.

---

## Quorum Screen 3 — Partner Activation (+ checklist drawer)
**Label guess:** Partner fleet table + onboarding checklist  
**Severity:** **P1**

**Issues**
- Shopify row “Step 4 in Progress” (orange) vs drawer step chrome (purple) — broken status color grammar.
- KPI cards (48 partners, velocity, etc.) compete with the operational table; enterprise admins need the table first.
- “Complete Activation” disabled without an inline reason (what’s blocking?).
- Merchant ID mismatch risk in copy (#SHP-98204 vs #SHP-98284 in descriptions) — verify consistency in source.

**Stitch prompt**  
Align in-progress color (one token) across table and checklist. Lead with search/tabs/table; demote KPIs to a compact strip. On disabled Complete Activation, show “Finish First Report to enable.” Keep purple nav highlight and compliance footer card.

---

## Quorum Screen 4 — Review Scope Changes (RBAC modal)
**Label guess:** Dual-custody publish review  
**Severity:** **P1**

**Issues**
- Dual-custody “1/2 Signatures” but primary CTA is already **Approve & Publish** — unclear if this click is signature #2 or unilateral publish.
- Three dense before/after cards + critical banner + dual-custody = approval fatigue; need risk ranking.
- “Visual Impact / Raw Policy Diff” toggle with no visible raw view in the mock — unfinished control.
- Discard (destructive) adjacent to Cancel without confirm pattern shown.

**Stitch prompt**  
Clarify custody: if 1/2, primary should be “Sign as Approver (1/2)” and publish unlocks after second signature; or show both signers. Rank mutations (Critical first). Wire or remove the Visual/Raw toggle. Separate Discard behind confirm. Keep purple publish, orange critical banner, green/red policy compare.

---

## Quorum Screen 5 — Organization & Security Settings
**Label guess:** Identity & SSO / org security  
**Severity:** **P2**

**Issues**
- SCIM mappings live under Identity & SSO while a dedicated SCIM tab exists — IA leak.
- Right rail (Compliance + IdPs) duplicates left-column SSO story.
- Many equal-weight cards; “Save Configuration” feels unbounded (what dirty state?).
- Break-glass toggle + Strict Audit badge needs stronger warning hierarchy.

**Stitch prompt**  
Move SCIM group mappings onto the SCIM tab; leave SSO card focused on IdP endpoints/certs. Collapse right rail into one “Security posture” summary. Show dirty-state on Save. Elevate break-glass with warning callout. Keep purple actions, green connected, orange audit sensitivity.

---

## Quorum Screen 6 — API Keys & Webhooks
**Label guess:** Developer credentials + event stream  
**Severity:** **P1**

**Issues**
- **Rotate Key** on one row visually dominates the table and breaks scan rhythm (good urgency, bad pattern — use status + row action consistently).
- Purple = Production is unconventional; risk of env misread vs Staging blue.
- Live event panel + keys table + four KPI cards = three dashboards on one page.
- Failed events “healthy” with 3 failures needs threshold copy to avoid distrust.

**Stitch prompt**  
Standardize env colors (e.g. green/neutral Production, blue Staging) and document in UI. Make expiring keys a status chip + consistent “Rotate” text button, not a brown block. Split Webhooks to a sub-tab or lower fold with clearer section header. Annotate failure health threshold. Keep dense ops aesthetic, reduce KPI noise to two.

---

## Quorum Screen 7 — Audit Trail
**Label guess:** Immutable security ledger  
**Severity:** **P2**

**Issues**
- Expanded event + full ledger duplicates detail; decide master-detail vs expandable rows.
- “Activation +18%” again appears on Audit — irrelevant vanity metric.
- Severity/type filters strong, but Critical RBAC events should pin above the fold by default.
- Merkle/WORM cues are good; don’t let badges outnumber the log.

**Stitch prompt**  
Remove Activation badge. Default sort/filter to Critical mutations. Use expandable rows OR a detail drawer, not both fully expanded. Keep WORM badge, monospace hashes/IPs, and Live Sync. Tighten metric cards to events / mutations / ingest health only.

---

## Quorum — Cross-cutting Stitch prompts (project-level)

1. **Status color grammar:** One token set for Connected / Onboarding / Configuring / Pending / Blocked / Critical across Partner, RBAC, API, Audit. Orange = pending/unsaved; red = blocked/critical; green = healthy; purple = brand/primary only — not Production-by-default.

2. **Density with progressive disclosure:** Every Quorum page: KPIs ≤3, one primary work surface, drawers that dim the parent. Kill duplicate CTAs that open the same wizard.

3. **Trust workflows:** Dual-custody, publish, rotate-key, break-glass — always show who must act, what’s blocked, and confirm destructives. Never imply publish with partial signatures.

4. **Metric relevance:** Strip vanity growth badges from RBAC/Audit/Settings; keep ops metrics that change decisions (failures, pending scopes, expiring keys).

---

# 3) Pulse — Soft humanist iOS recovery companion

## Pulse Screen 1 — Today
**Label guess:** Morning recovery home  
**Severity:** **P2**

**Issues**
- Sleep vs Strain secondary cards use different viz languages (percent vs target range) — hurts glanceability.
- Energy Rhythm chart lacks axis/scale; “current time” dotted line needs stronger now marker.
- Large empty space after Prime Window feels unfinished on tall phones.
- Hero recovery is strong; check-in CTA could sit closer to the score (next best action).

**Stitch prompt**  
Normalize Sleep/Strain card anatomy (icon, title, value, delta, one bar). Strengthen the “now” marker on the rhythm chart and add a minimal time axis. Pull Daily Energy Check-in directly under the recovery hero. Keep mint background, soft cards, leaf/recovery metaphor.

---

## Pulse Screen 2 — Daily Check-in (Step 1/2)
**Label guess:** Subjective morning check-in  
**Severity:** **P2**

**Issues**
- Three different input patterns (segments, slider, chips) in one step — humanist but cognitively busy; OK if intentional, needs visual rhythm.
- Progress says “3 questions” and “Step 1 of 2” — clarify whether Qs span both steps.
- Predictive Bio-Score “+4 pts” before submit risks feeling fabricated; mark as estimate.
- Serif/hybrid headline sits slightly apart from SF-like UI elsewhere.

**Stitch prompt**  
Keep mixed inputs but unify card padding, question numbering, and helper banner style. Label predictive score “Estimated after save.” Align typography to one humanist sans with a single display weight for titles. Keep mint/teal calm; Continue CTA full-width.

---

## Pulse Screen 3 — Pulse Check-In Summary
**Label guess:** Post check-in readiness report  
**Severity:** **P0** (copy) / **P1** (density)

**Issues**
- **P0:** Typo **“10-min de-walk”** — not portfolio-safe.
- Energy Blueprint cards are text-heavy; weak scannability vs the readiness hero.
- Guidance photo is atmospheric but long; may push actions below fold.
- “Subjective + Sensor Aligned” is excellent — protect it; don’t bury under blueprint prose.

**Stitch prompt**  
Fix “de-walk” → “brisk walk” (or similar). Shorten each blueprint card to title, time, one line action + icon. Keep Bio-Somatic comparison and readiness gauge as heroes. Soften photo height; Done CTA sticky. Preserve teal humanist tone.

---

## Pulse Screen 4 — Trends
**Label guess:** Weekly bio-rhythm trends  
**Severity:** **P1**

**Issues**
- Dual-series chart (Energy line + Sleep bars) but legend is easy to miss; “Tap dot to inspect” undersells interaction.
- Inter/SF-default feel risks generic health-app look vs “soft humanist” brand promise.
- Consistency dots + insight + vitals = good story; recommendation card could be more actionable (one tap to set wind-down).

**Stitch prompt**  
Promote legend and selected-day tooltip; make Sleep bars and Energy line equally legible. Add “Set 10:30 wind-down” on the recommendation card. Introduce a slightly more characterful display font for “Trends” only; keep soft mint cards and violet insight accent.

---

## Pulse Screen 5 — Sleep Breakdown
**Label guess:** Last-night sleep detail  
**Severity:** **P2**

**Issues**
- Stage colors are good; hypnogram Y-axis order vs bar legend must stay identical (verify Awake/REM/Light/Deep consistency).
- Factor cards (Latency/Respiration/Restlessness) are clear; Recovery + HR dip row slightly competes with main 7h12m hero.
- Log Morning Energy CTA good, but if user already checked in today, state should change.

**Stitch prompt**  
Lock one sleep-stage color map across bar, legend, and hypnogram. Soften secondary metrics so total sleep + efficiency remain dominant. If check-in exists, swap Log CTA to “View today’s readiness.” Keep pastel stage colors and mint ground.

---

## Pulse Screen 6 — Evening Wind-down
**Label guess:** Night ritual / sleep gate  
**Severity:** **P2**

**Issues**
- Dark circadian card is strong hierarchy; ritual list mixes completed, active session, passive sensor, and slider — long for one scroll.
- “Start Session” mid-list can stall completion of the whole ritual.
- Sanctuary Mode + Complete Ritual = two competing closers.

**Stitch prompt**  
Structure as: status hero → live bio readout → checklist (one primary action visible) → single footer Complete. Demote Sanctuary to a toggle row inside the checklist. Keep dark top card, teal complete button, purple for the active breathing session only.

---

## Pulse Screen 7 — Profile / Devices
**Label guess:** Profile, devices, baselines, preferences  
**Severity:** **P2**

**Issues**
- Header chrome crowded (“Pulse Profile Devices” + gear + avatar) — looks like breadcrumb leftovers.
- Baseline HR card shows bpm with “ms” range labels in description risk — verify units (HR vs HRV).
- Whoop “Available” vs Oura/Apple connected is clear; baselines 2×2 is dense but on-brand.
- Export Health Data should feel secondary to privacy, not equal to toggles.

**Stitch prompt**  
Simplify header to Profile title + settings only. Audit baseline units (bpm vs ms) and label ranges correctly. Visually group Connected devices vs Available. Keep mint cards, large radii, teal toggles; place Export as quiet secondary at bottom.

---

## Pulse — Cross-cutting Stitch prompts (project-level)

1. **Humanist system, not health-template:** One mint ground, one teal primary, one violet insight accent; pair SF/body with one distinctive display face for greetings/titles; avoid Inter-default sterility.

2. **Copy & trust QA:** Fix typos (de-walk); mark estimates as estimates; align check-in state across Today / Sleep / Profile; never invent precision without sensor/subjective framing.

3. **Chart literacy:** Every chart gets legend, now/selected state, and matching colors to metric cards (Energy, Sleep stages, HRV). Same sleep-stage map everywhere.

4. **Card anatomy kit:** Standardize metric card structure (icon · label · value · delta · one viz) so Today, Trends, and Sleep feel like one product, not three dashboards.

---

### Priority stack if you only fix 10 things
1. Folio dual Next labels (S4)  
2. Folio Android vs iPhone authenticity (S2/S7)  
3. Folio nav active-state + GRAPH inconsistency (S3/S6/S7)  
4. Folio rubric scale 5 vs 10 (S5/S6)  
5. Pulse “de-walk” typo (S3)  
6. Quorum dual-custody vs Publish (S4)  
7. Quorum status color grammar (S1/S3/S6)  
8. Quorum vanity metrics on wrong pages (S2/S7)  
9. Pulse chart legends / dual-series clarity (S4)  
10. Folio pin ↔ critique ID integrity (S2)

<!-- agent f92aec23-dc92-490e-8c5d-5da1caad2e76 -->

# Portfolio Design Critique — 4 Products / 22 Screens

Severity: **P0** = trust/conversion/IA break · **P1** = hierarchy/clarity/consistency · **P2** = polish/density/craft

---

## 1) Atlas CMS — Design System Docs / Playground

### Screen 1 — Introduction / Overview
**Label guess:** Docs home / system overview  
**Severity:** P1  

**Issues**
- Hero reads like a product marketing landing page, not a docs entry point; “Get Started Quick” + telemetry KPIs compete with navigation intent.
- Four “System Telemetry” cards (adoption, latency, team count) feel SaaS-dashboard cosplay on a DS intro—portfolio reviewers will flag this as filler density.
- Top nav (`Docs / Playground / Tokens / Patterns / Roadmap`) overlaps left-nav IA (`Foundations / Components / Patterns`)—two competing maps of the same system.
- “Strict WCAG AAA Compliant” as a blanket claim next to later AA contrast numbers elsewhere = credibility risk.

**Stitch prompt**  
Replace the marketing hero with a docs-first intro: one H1, 2-line purpose, primary “Install” + secondary “Browse foundations.” Cut telemetry to one quiet status line (version + a11y target). Align top nav to Docs | Playground | Tokens only; fold Patterns under Docs. Soften AAA to “targets AAA where required; AA elsewhere” with a link.

---

### Screen 2 — Spacing & Sizing (Foundations)
**Label guess:** Spatial token reference  
**Severity:** P1  

**Issues**
- Three concept cards + formula footers (`Δ = 4n`) prioritize cleverness over scannable rules; “Canonical use case” wraps and kills table rhythm.
- Table headers / secondary captions look under-contrasted for a system that markets accessibility.
- Right TOC (“Interactive Playground, Props & API…”) is component-page chrome on a foundations page—wrong mental model.
- Blue specimen squares lack labeled rem + px pairing in the visual column itself (value lives only in text).

**Stitch prompt**  
Rebuild as: 3 short rules (baseline, enclosure, responsive step-down) without formula footers; then a full-width token table with specimen | rem | px | use-case on one line. Swap right rail TOC to foundations anchors only. Raise table header contrast to AA.

---

### Screen 3 — Color Tokens
**Label guess:** Semantic color architecture  
**Severity:** P1  

**Issues**
- Tier 03 card text collision (`button.primary.bg` + `var(--action…)`) reads unfinished.
- Surface swatches are nearly indistinguishable (canvas / subtle / muted)—hard to teach hierarchy without side-by-side context previews.
- Floating “Token Format Mode” (HEX/RGB/HSL/CSS) competes with page content; no clear binding to which values update.
- Top nav “Tokens” active while left nav “Color” active—dual selection without clarifying Docs vs Tokens surface.

**Stitch prompt**  
Redraw the three-tier pipeline with clean arrows and one example path (primitive → semantic → component). Add a “preview in UI” strip under surface tokens (card on canvas). Dock format mode into the section header, not a floating widget. Sync nav: only left “Color” selected when under Docs.

---

### Screen 4 — Theme Generator & Token Studio
**Label guess:** Playground / live token editor  
**Severity:** P0  

**Issues**
- Full Docs chrome (left component tree + right “On This Page”) surrounds a tool workspace—chrome eats ~40% width; playground feels trapped.
- Controls + specimen + WCAG auditor + code export on one viewport without a clear primary task (tune → validate → export).
- “High AAA” appearance mode naming is unclear vs Light/Dark.
- Specimen (“Julia Diaz” card) doesn’t stress-test states (danger, disabled, form error)—weak audit surface.

**Stitch prompt**  
Enter true playground mode: collapse left nav to icon rail; remove right TOC. Layout: controls | live specimen | auditor stacked then export. Rename mode to Light / Dark / High contrast. Expand specimen to button/input/alert/table strip so WCAG bars map to real components.

---

### Screen 5 — Button component
**Label guess:** Component docs + interactive playground  
**Severity:** P1  

**Issues**
- Playground canvas shows one large primary only; variants/sizes aren’t visible as a matrix—controls without a specimen grid is half a playground.
- Spec chips under the button (Height 48 / Inter 14) compete with the live control and may desync from Size Preset.
- Anatomy section starts mid-fold with “5 atomic spatial zones”—jargon without a labeled diagram.
- Duplicate install surfaces (`@atlas-ds/button` vs overview `@atlas-ds/core`) without explaining package strategy.

**Stitch prompt**  
Add a variant × size matrix above or beside the live preview; keep Interactive panel synced. Drop redundant dimension chips or generate them from selected size. Replace “atomic zones” prose with a labeled anatomy diagram (icon | label | spinner | padding). Clarify package: core vs `@atlas-ds/button`.

---

### Screen 6 — Input & Text Field
**Label guess:** Form control docs + playground  
**Severity:** P1  

**Issues**
- Slot Modifiers 2-column checkbox grid is tight and hard to scan; boolean soup without grouped states (content / chrome / validation).
- Preview shows happy-path email only—Error / Disabled / Read-only not demonstrated despite claiming ARIA mappings.
- Code block title (`RegistrationEmail`) implies domain example; playground is generic—mismatch.
- Same chrome overload as Button; little differentiation between component pages (template fatigue).

**Stitch prompt**  
Group modifiers: Content, Affordance, Validation. Force preview to cycle Default / Focus / Error / Disabled when validation toggles. Show error helper + aria-invalid in preview. Rename code sample to match props. Tighten playground card; push secondary docs (a11y longform) below fold.

---

### Atlas — Cross-cutting Stitch prompts (project-level)

1. **IA cleanup:** One primary nav model—Docs (foundations + components + patterns) vs Playground (fullscreen tool) vs Tokens (export/registry). Kill duplicate Patterns/Tokens entries across top + side.

2. **Docs template:** Standardize component pages: Overview → Anatomy → Specimens matrix → Playground → Props → A11y → Tokens. Foundations pages get tables + principles, never “Props & API” TOC.

3. **Credibility pass:** Align a11y claims (AA vs AAA). Remove vanity telemetry from docs. Prefer real specimens over dashboard metrics.

4. **Playground productization:** When Playground is active, hide docs chrome; show Reset / Export / Share theme as primary actions with a stateful specimen kit.

---

## 2) Nest — Local Services Marketplace (iOS + Desktop)

### Screen 1 — Explore / Search results (iOS)
**Label guess:** Search results + pro list  
**Severity:** P0  

**Issues**
- First viewport stacks address + search + category pills + **emergency red banner** + pro cards—emergency competes with intent “Plumber near me”; feels alarmist for non-SOS queries.
- Pro cards are overloaded: rating, 2+ badges, ETA, price, blurb, Message + Book—price + dual CTAs win, trust copy loses.
- “Message” as equal-width sibling to “Book visit” dilutes conversion; messaging is secondary until booked in most marketplaces.
- Map “Neighborhood Pro Radar” mid-feed is a third discovery mode (list / filters / map) without clear relationship.

**Stitch prompt**  
For non-emergency search, demote SOS to a slim text link or contextual chip. Simplify each pro row: avatar, name, rating, next ETA, price, one primary “Book.” Move Message into profile. Collapse map to a sticky “Map” toggle / half-sheet instead of an inline radar block.

---

### Screen 2 — Pro profile (Marcus Vance)
**Label guess:** Provider detail  
**Severity:** P1  

**Issues**
- Trust stack is exhaustive (Nest Guard, licensed, insured, background, guarantee) then repeated again in reviews/coverage—fatigue before services.
- Stats row (Rate / Experience / Jobs) + sticky Book footer both sell “$49”—redundant.
- Services list accordion with “Popular” is strong; photo carousel + reviews + map after that makes the scroll feel endless without section jumpers.
- Sticky Book + tab bar = double chrome; thumb reach fights home indicator.

**Stitch prompt**  
Collapse credentials into one “Verified” strip with expand. Keep sticky Book; hide bottom tabs on profile or shrink to gesture-only. Add jump chips: Services | Work | Reviews | Coverage. Lead with Services + earliest slot, then social proof.

---

### Screen 3 — Confirm & Book (Step 2 of 3)
**Label guess:** Checkout / scheduling  
**Severity:** P0  

**Issues**
- Global Nest header + Explore + bag + avatar still visible during a 3-step booking—breaks focused checkout IA.
- Bottom tab bar active on “Bookings” while user is mid-confirm—state contradiction.
- Pricing transparency is good, but Nest Safety fee + taxes appear late; “Total Due Today” vs later hourly labor needs stronger escrow framing above the fold.
- Date toggles + time radios + photos + location + payment = long form; risk of drop-off without progress summary.

**Stitch prompt**  
Enter focused booking chrome: Step 2 of 3, back, Cancel—no marketing header, no tab bar. Pin a summary rail (pro + service + slot + total). Move SafePay one-liner next to total. Keep payment last; surface fee line items immediately under diagnostic fee.

---

### Screen 4 — My Bookings
**Label guess:** Bookings hub  
**Severity:** P1  

**Issues**
- Segmented Upcoming / In Progress / Completed, then also “HAPPENING TODAY” + “Completed Services” below—double taxonomy.
- Active card is strong (ETA, Track Pro Live); completed cards inconsistent CTAs (“Receipt / Invoice” vs “Receipt”).
- Header still says Nest + Explore while on Bookings—breadcrumb confusion.
- Concierge banner competes with completed list; better as empty-state or overflow help.

**Stitch prompt**  
One filter model: segments own the list; drop duplicate section headers or make Completed only inside that segment. Standardize receipt CTA label. Sync header title to My Bookings only. Soften concierge to a footer link unless there’s an active issue.

---

### Screen 5 — Live tracking
**Label guess:** En-route tracking  
**Severity:** P1  

**Issues**
- ETA repeated 4+ times (map badge, headline, stepper, job details)—portfolio “redundancy” flag.
- Map is short; text cards dominate a location-critical moment—map should own the top half.
- Green used for LIVE, SafeGuard, pricing, CTA semantics—semantic overload.
- SOS Priority badge on map unclear (who triggered? what changes?).
- Tab bar still present; Explore highlighted while in an active job—wrong.

**Stitch prompt**  
Make map ~50% viewport with single ETA overlay. One status card: Arriving in 18 min + stepper only. Demote repeated ETAs. Use red only for SOS with tooltip “Priority dispatch.” Hide tabs; use back-to-booking. Reserve green for “on the way / protected,” not every label.

---

### Screen 6 — Desktop search + profile drawer
**Label guess:** Web results (list | map | drawer)  
**Severity:** P0  

**Issues**
- Three columns at once: list + map + full booking drawer—cognitive overload; drawer duplicates list card content.
- Dual search: global header search + service/location/when bar—unclear which is source of truth.
- “Nest Verified Artisan Pro” tone is craft-marketplace while mobile is urgent home services—brand voice drift.
- Guarantee amounts inconsistent across surfaces ($1k vs $1M)—trust breaker for senior reviewers.

**Stitch prompt**  
Default to list + map; open drawer only on select and make it booking-focused (service, slot, CTA), link out for full profile. One search system. Unify guarantee copy/number sitewide. Tone: practical trust, not “artisan.”

---

### Screen 7 — Desktop search (list + map)
**Label guess:** Web results without drawer  
**Severity:** P1  

**Issues**
- Stronger than screen 6, but featured card still megaphones “Fastest ETA” + large Book while others whisper—OK if intentional “boost,” else feels pay-to-bias.
- Filter pills + “Available Today” black selected vs Nest green elsewhere—selection language inconsistent.
- Map pins ($49 • 35m) good; list doesn’t show the same pin-selected sync affordance clearly enough.

**Stitch prompt**  
Sync selection: list highlight ↔ map pin color. Use Nest green for selected filters (not black). Soften featured treatment to a small “Fastest” chip, not a full green border takeover unless it’s an ad (then label Sponsored).

---

### Nest — Cross-cutting prompts

1. **Trust system:** One guarantee figure, one badge vocabulary (Insured / Background / Licensed), reuse identically on mobile list, profile, desktop drawer.

2. **Chrome rules:** Marketing chrome on Explore only; booking + live job = focused shell (no tabs). Align header section label with bottom tab.

3. **CTA hierarchy:** One primary per card (Book / Track). Message/Contact secondary. Never equal-weight dual primaries on list cards.

4. **Responsive story:** Desktop = list+map (+ optional slim drawer). Don’t port the entire mobile profile into a third column.

---

## 3) Signal Rooms — Live Audio Social (Dark iOS)

### Screen 1 — Discover (Live Broadcast Grid)
**Label guess:** Live rooms feed  
**Severity:** P1  

**Issues**
- Card 1 “Join Room” (filled lime) vs others “Listen In” (outline) invents two verbs for the same action without explaining privilege.
- Hashtags + avatars + listening count + category + share = noisy cards; titles fight chrome.
- “LIVE BROADCAST GRID” magenta label is low-legibility and jargon-y vs “Live now.”
- Bottom “Go Live” bar + center SCHEDULE “+” = two create paths.

**Stitch prompt**  
Unify primary action to “Listen” / “Join” with one style; use a small “Speaking invited” chip if needed. Trim cards to title, host, listeners, one CTA. Rename section “Live now.” Keep a single create entry (tab + or Go Live—not both).

---

### Screen 2 — Discover (Niche hubs)
**Label guess:** Alternate Discover / hubs home  
**Severity:** P0  

**Issues**
- Second Discover concept (hubs + scheduled hangouts + Claim Frequency) conflicts with Screen 1’s room grid—portfolio reads as unresolved product direction.
- Search + Trending chips + network banner + 3 hub cards + schedule + CTA = overloaded first run.
- Private Club lock “Listen” vs public “Tune in” needs clearer access model.
- Neon lime + pink pulse + waveforms everywhere—accent inflation.

**Stitch prompt**  
Pick one Discover model. If hubs: lead with 2–3 hubs, then a compact “Live in your niches” row linking to Screen 1 rooms. Defer “Claim a Room Frequency” to Profile/Host. Reduce motion/glow to live indicators only.

---

### Screen 3 — Active Audio Stage (speakers + audience)
**Label guess:** In-room stage (audience mode)  
**Severity:** P1  

**Issues**
- Speakers + 12 audience avatars + chat preview + react + raise hand = vertical crush; chat is first-class socially but collapsed to 2 lines.
- Hand-raise badges on many avatars + “4 hands raised” + primary Raise hand—triple signaling.
- “Leave” with fire emoji reads celebratory/destructive ambiguously.
- Mute control on bottom bar while user is listener (already muted conceptually)—confusing affordance.

**Stitch prompt**  
Prioritize Stage (speakers) + primary control. Move audience to “Listeners” sheet. One hand-raise entry point. Rename Leave to “Leave quietly.” Hide mic unmute for pure listeners; show Raise hand only.

---

### Screen 4 — Active Audio Stage (chat-forward)
**Label guess:** In-room chat mode  
**Severity:** P1  

**Issues**
- Same room, different IA (chat-dominant vs stage-dominant)—needs explicit mode toggle (“Stage / Chat”), not two unrelated mock families.
- Leave quietly (magenta) + Raise Hand (lime) equal weight—Raise Hand should dominate for listeners.
- Pinned GitHub message is great; emoji react row + composer duplicates Screen 3 react bar inconsistently.

**Stitch prompt**  
Add Stage | Chat segmented control sharing one room header. In Chat, keep Leave as text/secondary; Raise Hand primary. Reuse one react component. Keep pin + composer; drop duplicate react chrome if composer has quick reacts.

---

### Screen 5 — Schedule a Room
**Label guess:** Host scheduling form  
**Severity:** P1  

**Issues**
- Long single scroll: title, niche, format, when, co-hosts, audio quality—no steps; easy to miss fields.
- “HOST STUDIO” + Signal LIVE badge while scheduling (not live)—status lie.
- Audio quality card (“Spatial Dolby Stereo”) is decorative flex; not user-configurable—remove or make settings.
- Primary CTA + Save draft good; niche pills may overflow without selected-state clarity beyond lime fill.

**Stitch prompt**  
3 steps: Basics → When → People. Remove LIVE badge on schedule. Demote audio quality to advanced or settings. Keep one lime CTA; ensure niche selection has check + contrast for a11y on neon.

---

### Screen 6 — Profile / Creator Studio
**Label guess:** Host profile + analytics  
**Severity:** P1  

**Issues**
- “Creator Studio Impact” metrics (broadcast hrs, peak stage) on a social profile blurs consumer profile vs creator dashboard.
- Neon avatar ring + Edit Profile + graphs + replay players = very loud; portfolio “glow default.”
- Replay cards with full waveform players are heavy in a list—prefer rows + play on detail.
- Nav PROFILE active while header still shows Signal • LIVE—ambient LIVE is brand wallpaper, not status.

**Stitch prompt**  
Split: public Profile (bio, follow, upcoming) vs Creator Studio (analytics tab). Soften glow; one accent for LIVE only. Replays as compact rows (title, duration, plays). Show LIVE in header only when user is actually live.

---

### Signal Rooms — Cross-cutting prompts

1. **One Discover:** Rooms-first feed OR hubs-first—document the other as a drill-in, not a twin home.

2. **Accent discipline:** Lime = primary action + speaking ring. Pink = LIVE only. Magenta = destructive. Stop using lime for every badge.

3. **In-room modes:** Shared header; Stage vs Chat toggle; listener vs speaker control sets.

4. **Create paths:** Single “Schedule / Go Live” flow from the center tab; remove duplicate Go Live banners.

---

## 4) Ledgerly Studio — Growth Experimentation Lab (Web)

### Screen 1 — Experiments Board
**Label guess:** Experiment list / pipeline  
**Severity:** P0  

**Issues**
- Two “+ New Experiment” buttons (header + list toolbar) within one glance—classic portfolio smell.
- Top tabs Experiments Board / Experiment Detail / Metric Library treat Detail as a peer destination without context—Detail isn’t a place, it’s an instance.
- Running card over-weights “Statistical Power 68%” bar vs primary metric movement—power ≠ success.
- Winner card purple border + Promote is strong; Running vs Winner vs Paused card templates differ so much scanning cost is high.
- Sidebar “Performance & Lift” vs main “Experiments” IA overlap unclear.

**Stitch prompt**  
One New Experiment CTA (header only). Replace top tabs with workspace nav only; open Detail from row. On Running cards, lead with primary metric + CI; power as secondary meter. Normalize card skeleton: ID, status, hypothesis (2 lines), 3 stats, one action.

---

### Screen 2 — Experiment Detail (Pricing toggle)
**Label guess:** Experiment results / decision  
**Severity:** P1  

**Issues**
- Winner badges + Ship winner + funnel lift tell the story well; Export / Rollback / Ship is a good trio—but Rollback next to Ship without confirm pattern shown.
- Sidebar highlights “Performance & Lift” while breadcrumb is Experiments > Pricing toggle—nav desync.
- Funnel stops at trial start; “14-Day Trial Maturation” teaser without data looks incomplete.
- Sample ratio widget in sidebar duplicates detail SRM line—global vs local ambiguity.

**Stitch prompt**  
Keep Experiments sidebar active on detail. Ship winner primary; Rollback behind overflow or confirm modal styling. Either show maturation metrics or remove the dangling arrow. SRM: one place (detail header), sidebar widget only on Board.

---

### Screen 3 — Metric Library
**Label guess:** Metric registry  
**Severity:** P1  

**Issues**
- Hero metric cards + full table duplicate “what matters”; cards cherry-pick Activation/Retention/ARPU while tabs include Monetization etc.—taxonomy drift.
- “GROWTH TELEMETRY ENGINE · REGISTRY V2.4” eyebrow is internal-engineering cosplay for a PM tool.
- Table actions (edit / analytics) icon-only—weak for dense data UIs.
- SRM threshold in header is governance; belongs under Governance & MDE, not Metric Library chrome.

**Stitch prompt**  
Lead with search + type tabs + table; optional “pinned north stars” as a compact row, not three large cards. Kill the engine eyebrow. Labeled row actions. Move SRM α to Governance; link from library.

---

### Ledgerly — Cross-cutting prompts

1. **Navigation:** Sidebar = app structure. Remove Board/Detail/Library as equal top tabs; Library + Board are peers, Detail is drill-in.

2. **Decision ergonomics:** Board answers “what needs attention?” Detail answers “ship / iterate / stop?” Every card CTA should map to that.

3. **Stats craft:** Don’t let power bars outshine lift/CI. Consistent control=blue, variant=purple, health=green—document in a tiny legend.

4. **De-dupe:** One New Experiment, one SRM surface, one win treatment—tighten for portfolio “intentional density,” not dashboard collage.

---

## Portfolio-level notes (all four)

| Product | Strongest craft | Biggest senior-hire risk |
|--------|-----------------|--------------------------|
| **Atlas** | Token pedagogy + playground ambition | Docs/marketing/telemetry mashup; playground chrome |
| **Nest** | Trust + booking completeness | Redundancy, chrome leaks into critical flows, guarantee math drift |
| **Signal** | Live energy, stage metaphor | Two Discovers; accent spam; create-path duplication |
| **Ledgerly** | Exp detail decision UI | Board CTA duplication; tab IA; vanity density |

Ship critiques as design revisions, not more UI. The portfolio wins when each screen has **one job**, **one primary action**, and **one consistent system** for trust/status color.