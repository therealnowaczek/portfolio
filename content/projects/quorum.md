---
slug: quorum
title: "Quorum"
oneLiner: "Invite partners, assign plain-language roles, and activate them without a permissions spreadsheet"
badge: "Concept · Portfolio exploration"
role: "Lead Product Designer (concept)"
platform: "Web enterprise"
timeline: "2–3 week design sprint"
tags:
  - "B2B"
  - "Permissions"
  - "Partner activation"
  - "Enterprise"
  - "Lifecycle"
order: 5
accent: "#4F46E5"
styleLabel: "Enterprise clarity"
screens:
  - "Partners list"
  - "Role picker"
  - "Activation checklist"
portfolioSignals:
  - "B2B lifecycle"
  - "Roles and permissions"
  - "Partner activation"
  - "Enterprise audit trust"
  - "Least-privilege UX"
---

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
- Enterprise web; complex org trees assumed
- Security: confirm destructive permission changes
- a11y for tables and dialogs
- Timeboxed; no real IdP
- Visual: sober enterprise, clear hierarchy

### Process
1. **Frame & research** - Competitive glance: HubSpot partner portals, AWS IAM summaries, Tabby-style B2B lifecycle needs. Assumption: partner managers are not IAM experts.
2. **Flows & IA** - Partners list → Invite → Role pick → Activation checklist → Audit.
3. **Options explored** - (A) Raw permission matrix first (rejected: expert-only). (B) Wizard with no escape hatch (rejected: inflexible). (C) Role cards + progressive permission detail + checklist (chosen).
4. **Visual & DS** - Cool gray enterprise, indigo accent, 14px UI. Role cards with risk chips (Low/Med/High).
5. **Prototype & critique** - Stitch Partners, Role picker, Activation; Figma focus order on multi-step invite.
6. **Validation notes** - Risk: "Admin" label overused. Renamed to scoped names: `Billing viewer`, `Catalog editor`, `Partner admin`.

### Key decisions
- I chose **business-language role cards** because matrices intimidate; I rejected matrix-as-home.
- I chose **activation checklist** linked to permissions because access without first-value fails lifecycle; I rejected invite-only success.
- I chose **risk chips + confirm** on elevation; I rejected silent permission adds.
- I chose **audit as a first-class tab** for enterprise trust, not a buried CSV export.

### Solution
1. **Partner Activation — Directory & Connect Wizard** — Partner status lifecycle and invite entry. Proves glanceable activation.
2. **Roles & Permissions — Matrix** — Least-privilege roles with plain-language summaries. Proves comprehension before grant.
3. **Partner Activation — Checklist Drawer** — Tasks that unlock first value with deep links. Proves path-to-value.

Empty: "No partners yet - invite your first reseller." Error: "Invite email bounced." Success: "Partner invited · checklist ready".


### Design system notes
Tokens: `color.accent.indigo`, `color.risk.*`. Components: PartnerRow, RoleCard, RiskChip, ChecklistItem, AuditEvent. Pattern: invite → scoped role → activate → audit.

### Outcomes & learnings
- **Illustrative target:** partner admin completes invite + role without reading a help article
- **Assumed success metric for the concept:** time-to-first partner action simulated under 1 guided session
- Ship-test next: SCIM/SSO mapping, custom roles, bulk invites
- Hiring signal: B2B lifecycle, permissions systems thinking, enterprise clarity
