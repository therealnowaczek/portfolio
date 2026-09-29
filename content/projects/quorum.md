---
slug: quorum
title: "Quorum"
oneLiner: "B2B roles, permissions, and partner activation"
badge: "Personal exploration"
role: "Lead Product Designer"
platform: "Web enterprise"
timeline: "2–3 week design sprint"
tags:
  - "B2B"
  - "Permissions"
  - "Partner activation"
  - "Enterprise"
  - "Lifecycle"
order: 9
accent: "#4F46E5"
styleLabel: "Enterprise clarity"
screens:
  - "Partner Activation — Directory & Connect Wizard"
  - "Roles & Permissions — Matrix"
  - "Partner Activation — Checklist Drawer"
  - "Roles & Permissions — Review Diff & Approval"
  - "Organization Settings — SSO & Identity"
  - "API & Webhooks — Developer Gateway"
  - "Audit Trail — Activity Log"
portfolioSignals:
  - "B2B lifecycle"
  - "Roles and permissions"
  - "Partner activation"
  - "Enterprise audit trust"
  - "Least-privilege UX"
---

### Snapshot
Quorum is a personal exploration of B2B partner activation: invite an org, give them understandable roles, walk them to first value, and keep an audit trail admins trust. Least-privilege should read in business language — an ACL matrix is not a homepage.

### Problem
Partner managers lose days to “who can see what” threads after a reseller joins. Access without activation fails the lifecycle; activation without scoped roles creates security debt. The job: invite, grant the right access, and reach first successful action this week.

### Goals & constraints
**Goals**
- Role cards in business language, with technical permissions beneath
- Activation checklist tied to partner success moments
- Review/diff before privilege elevation
- Audit trail visible to admins; SSO and API surfaces for enterprise reality
- Empty states that teach the model

**Constraints**
- Enterprise web; complex org trees assumed
- Confirm destructive permission changes
- Timeboxed; no real IdP behind the prototype

### Process
1. **Design for partner managers, not IAM experts** - Glance at partner portals and IAM summaries. Assumption: the buyer of activation is not the security engineer.
2. **Lifecycle IA** - Directory → Connect wizard → Role pick → Checklist → Review diff → Audit. SSO and developer gateway as supporting enterprise surfaces.
3. **Reject matrix-home and rigid wizards** - Raw matrices intimidate. Wizards with no escape hatch fail edge cases. Chose role cards + progressive permission detail + checklist + approval diff.
4. **Sober enterprise visual** - Cool gray, indigo accent, risk chips on elevation.
5. **Name roles by job, not ego** - Avoided overused “Admin”; preferred scoped names like Billing viewer and Catalog editor.
6. **Make audit first-class** - Enterprise trust dies when history is a buried CSV.

### Key decisions
- **Business-language role cards** with matrix underneath — comprehension before grant.
- **Activation checklist linked to permissions** — access without first-value fails lifecycle.
- **Review diff & approval** on elevation — no silent privilege adds.
- **Audit as a tab** — not an afterthought export.

### Solution
1. **Partner Activation — Directory & Connect Wizard** — Partner status lifecycle and invite entry. Proves glanceable activation.
2. **Roles & Permissions — Matrix** — Least-privilege roles with plain-language summaries. Proves comprehension before grant.
3. **Partner Activation — Checklist Drawer** — Tasks that unlock first value. Proves path-to-value.
4. **Roles & Permissions — Review Diff & Approval** — What changed, who approves. Proves safe elevation.
5. **Organization Settings — SSO & Identity** — Enterprise identity hooks. Proves real B2B constraints.
6. **API & Webhooks — Developer Gateway** — Integration surface for partner platforms. Proves lifecycle beyond the UI wizard.
7. **Audit Trail — Activity Log** — Who changed what, when. Proves enterprise trust.

Empty: “No partners yet — invite your first reseller.” Error: “Invite email bounced.” Success: “Partner invited · checklist ready.”

### Design system notes
Tokens: indigo accent, risk colors. Components: PartnerRow, RoleCard, RiskChip, ChecklistItem, DiffReview, AuditEvent. Pattern: invite → scoped role → activate → audit.

### Outcomes & learnings
- Exploration of B2B lifecycle, permissions systems thinking, and enterprise clarity.
- Learning: activation checklists convert “invited” into “useful” better than longer permission docs.
- Next if productized: SCIM mapping, custom roles, bulk invites.
- Hiring signal: least-privilege UX that partner managers can actually run.
