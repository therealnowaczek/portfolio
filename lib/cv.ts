export type ExperienceItem = {
  years: string;
  role: string;
  company: string;
  blurb: string;
};

export type Highlight = {
  title: string;
  body: string;
};

export type Strength = {
  label: string;
  href: string;
  color: string;
};

export type EducationItem = {
  years: string;
  school: string;
  detail: string;
};

export type NarrativeBlock = {
  title: string;
  body: string;
};

export const SITE = {
  name: "Marcin Nowak",
  subtitle: "UX Orchestrator · AI UX · Hands-on delivery",
  title: "Marcin Nowak — UX Director · AI UX · Agentic Leadership",
  email: "pl.nowak.marcin@gmail.com",
  phone: "(+48) 792 792 290",
  phoneHref: "tel:+48792792290",
  linkedin: "https://www.linkedin.com/in/therealnowaczek/",
  cvPdf: "/Marcin_Nowak_CV_2026.pdf",
  cvFilename: "Marcin_Nowak_CV_2026.pdf",
  costradar: "https://costradar.ai",
  description:
    "UX Director / Leader · AI UX · Agentic workflows. Enterprise SaaS leadership, design ops, and measurable product outcomes.",
};

export const INTRO_HEADLINE =
  "I lead UX for complex enterprise products — and I still design and ship.";

export const INTRO_PARAGRAPHS = [
  "As Senior UX Manager at Appfire, I led a 35+ person global UX organization across the product portfolio (BigPicture, 7pace, and AI initiatives). I set the design vision, partnered closely with product and engineering leadership, and delivered measurable outcomes on tools used by thousands of teams — including a 47% lift in OKR adoption and a 58% drop in unclear financial-data reports.",
  "I also build how design teams work. Beyond standard design ops, I introduced AI-driven pipelines and agentic workflows that improved end-to-end UX efficiency by roughly 60–65%, with clear KPIs, output benchmarking, design-system governance, and human review so quality scales with the organization.",
  "Outside the org, I ship production SaaS myself (CostRadar.ai) on React, Supabase, and LLM agents — then bring those methods back to the team. That combination of leadership and hands-on building is how I turn AI into a practical advantage for design teams at Senior Manager and Director level.",
];

export const HIGHLIGHTS: Highlight[] = [
  {
    title: "Enterprise product impact",
    body: "Led design on BigPicture, a top-selling Atlassian Marketplace app used by thousands of teams worldwide. Outcomes include a 47% lift in OKR adoption, 58% fewer unclear financial-data reports, and 42% faster information retrieval on dense planning workflows used daily by PMs and leadership.",
  },
  {
    title: "AI transformation leadership",
    body: "Rolled out agentic workflows, LLM tooling, and design-to-code practices across the UX org. End-to-end efficiency improved by roughly 60–65% versus traditional frameworks, with KPI frameworks, output benchmarking, and human review that protect craft and design-system integrity.",
  },
  {
    title: "UX leadership at scale",
    body: "Ran 35+ designers across Appfire’s product portfolio (BigPicture, 7pace, and AI initiatives). Built estimation frameworks, Figma governance, research ops (Dovetail), and intake processes for a distributed global team — so UX became a reliable partner to product and engineering.",
  },
  {
    title: "Hands-on builder",
    body: "I also ship production SaaS independently (CostRadar.ai / SafeRadar) using React, Supabase, and LLM agents, then bring those methods back into the organization. That hybrid model turns AI from a slide topic into a real operating advantage for design teams.",
  },
];

export const STRENGTHS: Strength[] = [
  {
    label: "Adaptability",
    href: "https://www.gallup.com/cliftonstrengths/en/252146/adaptability-theme.aspx",
    color: "#2f6ec6",
  },
  {
    label: "Achiever",
    href: "https://www.gallup.com/cliftonstrengths/en/252134/achiever-theme.aspx",
    color: "#712a7d",
  },
  {
    label: "Relator",
    href: "https://www.gallup.com/cliftonstrengths/en/252311/relator-theme.aspx",
    color: "#2f6ec6",
  },
  {
    label: "Connectedness",
    href: "https://www.gallup.com/cliftonstrengths/en/252197/connectedness-theme.aspx",
    color: "#2f6ec6",
  },
  {
    label: "Ideation",
    href: "https://www.gallup.com/cliftonstrengths/en/252260/ideation-theme.aspx",
    color: "#419262",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    years: "2025 – now",
    role: "Founder & AI Design Engineer",
    company: "CostRadar.ai (Radrly)",
    blurb:
      "AI-native SaaS for Shopify, Amazon, and WooCommerce. Designed, built, and shipped in 90 days. Agentic analysis helps premium merchants find 15–25% annual savings.",
  },
  {
    years: "2023 – 2026",
    role: "Senior UX Manager",
    company: "Appfire",
    blurb:
      "Led 35+ distributed UX professionals across Appfire’s product portfolio (BigPicture, 7pace, and AI initiatives). Built estimation, Figma governance, research ops, and an org-wide AI adoption program.",
  },
  {
    years: "2019 – 2023",
    role: "Head of Design",
    company: "SoftwarePlant (acquired by Appfire)",
    blurb:
      "Grew and led a 16+ person team of designers, researchers, and writers. Set design-system governance for Marketplace products and led integration into Appfire after acquisition.",
  },
  {
    years: "2016 – 2019",
    role: "UX & UI Designer",
    company: "SoftwarePlant (acquired by Appfire)",
    blurb:
      "Principal designer on BigPicture, one of Atlassian Marketplace’s best-selling apps. Led discovery through delivery, with measurable adoption and satisfaction gains.",
  },
  {
    years: "2013 – 2016",
    role: "Product Manager, UX Designer",
    company: "TVP 3",
    blurb:
      "Coordinated 16 distributed teams building web services for Poland’s public broadcaster. Bridged product strategy, UX design, and cross-team delivery in a complex, multi-stakeholder environment.",
  },
  {
    years: "2011 – 2013",
    role: "Co-runner, UX Designer",
    company: "TVP Parlament",
    blurb: "Created a new e-television channel from scratch.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    years: "2008 – 2011",
    school: "Warszawska Wyższa Szkoła Humanistyczna im. B. Prusa",
    detail: "Journalism and Social Communication, Warsaw, Poland",
  },
];

export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
  accent?: boolean;
};

export const EXPERTISE_GROUPS: SkillGroup[] = [
  {
    title: "Leadership & org",
    blurb: "Scaling teams, vision, and how decisions get made.",
    items: [
      "UX Leadership",
      "Design Leadership",
      "Head of Design",
      "UX Director scope",
      "Cross-functional Lead",
      "Team Mentorship",
      "Hiring & talent bars",
      "Org design",
      "Stakeholder management",
      "Executive storytelling",
      "OKR alignment",
      "Post-acquisition integration",
    ],
  },
  {
    title: "Product & craft",
    blurb: "Enterprise products that stay clear under complexity.",
    items: [
      "Complex Product UX",
      "Product Strategy",
      "Interaction Design",
      "Information Architecture",
      "Design Systems",
      "Design Engineering",
      "Prototyping",
      "Enterprise SaaS",
      "Data-dense UI",
      "Fintech / trust UX",
      "Mobile (iOS / Android)",
      "Accessibility",
      "Service design",
      "End-to-end ownership",
    ],
  },
  {
    title: "AI & agentic",
    blurb: "Practical AI that speeds delivery without lowering the craft bar.",
    accent: true,
    items: [
      "AI UX Transformation",
      "AI Product Design",
      "Agentic Workflows",
      "LLM Prompting",
      "AI-Augmented Delivery",
      "Design-to-code",
      "Human-in-the-loop",
      "Output benchmarking",
      "Conversational UI",
      "Agent evaluation",
      "Trust & safety UX",
      "What-If / scenario UX",
    ],
  },
  {
    title: "Ops & systems",
    blurb: "Making UX a predictable partner for product and engineering.",
    items: [
      "Design Ops",
      "UX Ops",
      "Research Ops",
      "Intake & triage",
      "Estimation frameworks",
      "Figma governance",
      "Quality bars",
      "Delivery predictability",
      "Critique culture",
      "KPI frameworks",
      "Design-system governance",
      "Process automation",
    ],
  },
];

export const TOOL_GROUPS: SkillGroup[] = [
  {
    title: "Design",
    blurb: "Systems, critique, and workshops.",
    items: [
      "Figma",
      "FigJam",
      "Adobe CC",
      "Miro",
      "Prototyping",
      "Design tokens",
      "Component libraries",
      "Workshop facilitation",
    ],
  },
  {
    title: "AI & build",
    blurb: "The design-to-code and agent stack I ship with.",
    accent: true,
    items: [
      "Cursor",
      "Claude",
      "GPT",
      "GitHub Copilot",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
      "Shopify Polaris",
    ],
  },
  {
    title: "Research & analytics",
    blurb: "Evidence that informs decisions.",
    items: [
      "Amplitude",
      "Google Data Studio",
      "Maze",
      "Dovetail",
      "Hotjar",
      "Usability testing",
      "Survey synthesis",
      "Funnel analysis",
      "NPS / CSAT",
      "A/B experiment reads",
    ],
  },
  {
    title: "Collaboration",
    blurb: "How work moves across the organization.",
    items: [
      "Notion",
      "Jira",
      "Confluence",
      "Slack",
      "Loom",
      "GitHub",
      "Atlassian suite",
      "Google Workspace",
      "Sprint rituals",
      "Design critiques",
    ],
  },
];

/** Flat lists kept for any legacy consumers */
export const EXPERTISE = EXPERTISE_GROUPS.flatMap((g) => g.items);
export const TOOLS = TOOL_GROUPS.flatMap((g) => g.items);

export const LANGUAGES = ["Polish (native)", "English (C1)"];

export type RoleLens = {
  id: string;
  label: string;
  group: "career" | "specialist";
  eyebrow: string;
  headline: string;
  pitch: string;
  proof: string[];
  ninetyDays: string[];
  keywords: string[];
};

export const ROLE_LENS_GROUPS = [
  {
    id: "career" as const,
    title: "Career paths",
  },
  {
    id: "specialist" as const,
    title: "Specialist tracks",
  },
];

export const ROLE_LENSES: RoleLens[] = [
  {
    id: "director",
    label: "UX Director",
    group: "career",
    eyebrow: "Org · Strategy · Multi-product",
    headline: "Design leadership that shows up in product and business outcomes.",
    pitch:
      "I set vision across product portfolios, align UX with product and engineering leadership, and build the operating rhythms a 30+ person org needs to deliver reliably — adoption, clarity, and speed, quarter after quarter.",
    proof: [
      "35+ designers across BigPicture, 7pace, and AI initiatives",
      "OKR adoption +47%; financial module 53% → 84%",
      "FUEL manager program — 1st place, year-long leadership track",
    ],
    ninetyDays: [
      "Understand how design ops works today, and where decisions get stuck",
      "Put intake, estimation, and quality bars in place that leadership can plan around",
      "Choose 1–2 flagship bets where UX owns a clear business metric",
    ],
    keywords: [
      "UX Director",
      "Head of Design",
      "Design Leadership",
      "Multi-product",
      "OKRs",
      "Org design",
    ],
  },
  {
    id: "leader",
    label: "UX Leader",
    group: "career",
    eyebrow: "Senior Manager · Head of UX",
    headline: "Strategy connected to craft — I stay close enough to still ship when it matters.",
    pitch:
      "I coach seniors, unblock squads, and stay close enough to the product that trade-offs stay real. Mentorship is part of how the team operates every week — not a one-off workshop series.",
    proof: [
      "Grew teams from IC craft to 16+, then 35+ post-acquisition",
      "Design-system governance for Atlassian Marketplace products",
      "Research ops (Dovetail), Figma standards, cross-timezone delivery",
    ],
    ninetyDays: [
      "Clarify ownership and how critique works across squads",
      "Raise the bar on 2–3 critical journeys with measurable NPS or time-on-task",
      "Build growth paths that connect people’s ambitions to roadmap needs",
    ],
    keywords: [
      "UX Leader",
      "Senior UX Manager",
      "Mentorship",
      "Design Systems",
      "Enterprise SaaS",
      "People leadership",
    ],
  },
  {
    id: "product",
    label: "Product Designer",
    group: "career",
    eyebrow: "End-to-end · Discovery to ship",
    headline: "Own the problem — research, flows, UI, and a handoff that holds up in production.",
    pitch:
      "When the bet needs strong Product Design, I still work that way: frame the problem, prototype with real constraints, and ship interfaces that finance, PMs, and engineers can trust. BigPicture modules and CostRadar.ai are the proof.",
    proof: [
      "Principal craft on BigPicture financials, OKRs, and Gantt",
      "CostRadar.ai: end-to-end product from IA to Marketplace launch in 90 days",
      "Measurable outcomes: adoption lifts, faster retrieval, clearer reporting",
    ],
    ninetyDays: [
      "Map the critical journey and the decision moments that matter most",
      "Ship a validated slice with engineering — including states, empty paths, and performance",
      "Leave patterns and components the squad can extend without me",
    ],
    keywords: [
      "Product Designer",
      "Lead Product Designer",
      "Interaction Design",
      "Prototyping",
      "Enterprise SaaS",
      "End-to-end ownership",
    ],
  },
  {
    id: "ic",
    label: "Staff / Principal UX",
    group: "career",
    eyebrow: "Hands-on · Complex product · Systems thinking",
    headline: "Dense enterprise UX — clarity when the cognitive load is high.",
    pitch:
      "Principal-level craft on BigPicture financials, OKRs, and Gantt: clear hierarchy, performance as a design constraint, and dashboards that finance and PMs both trust. I still prototype and ship when the problem needs it.",
    proof: [
      "Financials: −58% unclear reports · 40→18 min exec prep",
      "Gantt: 42% faster info retrieval · NPS +36% · +27% load",
      "SafeRadar & CostRadar: legal + profit UX shipped end-to-end",
    ],
    ninetyDays: [
      "Own one high-stakes surface end-to-end, with clear success metrics",
      "Pair with engineering early on performance and edge states",
      "Leave behind patterns the team can reuse without me in the room",
    ],
    keywords: [
      "Staff UX",
      "Principal Designer",
      "Complex Product UX",
      "Information architecture",
      "Enterprise",
      "Hands-on",
    ],
  },
  {
    id: "head",
    label: "Head of Design",
    group: "career",
    eyebrow: "Function owner · Hiring · Standards",
    headline: "Build a design function that product and engineering can plan around.",
    pitch:
      "As Head of Design at SoftwarePlant I grew a 16+ person team through acquisition into Appfire — hiring bars, design-system governance, and delivery standards that held up after the merge. I brought the same approach to larger org scale as Senior UX Manager.",
    proof: [
      "Grew and led 16+ designers, researchers, and writers",
      "Design-system governance for Atlassian Marketplace products",
      "Post-acquisition integration of craft, process, and culture into Appfire",
    ],
    ninetyDays: [
      "Review team health, hiring gaps, and quality bars",
      "Set a shared operating rhythm with product and engineering leads",
      "Pick one portfolio-wide standard (system, critique, or intake) to make durable",
    ],
    keywords: [
      "Head of Design",
      "Design leadership",
      "Hiring",
      "Design Systems",
      "Team building",
      "Org integration",
    ],
  },
  {
    id: "lead-pd",
    label: "Lead Product Designer",
    group: "career",
    eyebrow: "Squad lead · Craft + facilitation",
    headline: "Lead design on a hard product — and raise the bar for everyone around it.",
    pitch:
      "I lead design on complex SaaS surfaces while helping PMs, analysts, and engineers work through trade-offs together. BigPicture modules and portfolio work show Lead PD scope: own the bet, coach contributors, ship measurable outcomes.",
    proof: [
      "Led redesigns of financials, OKRs, and Gantt with multi-audience constraints",
      "Facilitated discovery-to-delivery with POs and front-end partners",
      "Adoption and NPS gains tied to design decisions, not presentation decks",
    ],
    ninetyDays: [
      "Align the squad on the problem frame and success metrics",
      "Run a tight prototype loop with engineering on the riskiest interaction",
      "Establish critique and decision logs the squad keeps after I rotate",
    ],
    keywords: [
      "Lead Product Designer",
      "Squad lead",
      "Facilitation",
      "Enterprise SaaS",
      "Prototyping",
      "Cross-functional",
    ],
  },
  {
    id: "ai",
    label: "AI UX / Agentic",
    group: "specialist",
    eyebrow: "Transformation · Design-to-code · Agents",
    headline: "AI as a real operating advantage — with craft and quality still protected.",
    pitch:
      "I rolled out agentic workflows, LLM tooling, and design-to-code across a UX org (roughly 60–65% efficiency lift), then proved the stack by shipping CostRadar.ai solo with React, Supabase, and LLM agents.",
    proof: [
      "~60–65% end-to-end UX efficiency vs traditional frameworks",
      "CostRadar: Marketplace SaaS in 90 days · 15–25% merchant savings",
      "Human-in-the-loop review, output benchmarking, design-system integrity",
    ],
    ninetyDays: [
      "Map where agents speed discovery versus where craft must stay human",
      "Pilot agentic loops on one product surface with clear KPIs and quality gates",
      "Write playbooks so seniors can coach the practice — not only use the tools",
    ],
    keywords: [
      "AI UX",
      "Agentic workflows",
      "LLM prompting",
      "Design Engineering",
      "Cursor",
      "Design-to-code",
    ],
  },
  {
    id: "ai-product",
    label: "AI Product Designer",
    group: "specialist",
    eyebrow: "LLM UX · Trust · Actionable insights",
    headline: "Design AI products people can trust with money, risk, and judgment.",
    pitch:
      "CostRadar.ai and SafeRadar are AI-native product craft: chat against live data, confidence-scored recommendations, What-If scenarios, and compliance flows where a wrong affordance can become a fine or a lost margin.",
    proof: [
      "Agentic expense scanner + GPT chat on live store economics",
      "What-If P&L and 65+ metrics designed for merchant action, not vanity",
      "SafeRadar: legal deadlines turned into a scannable Compliance Score",
    ],
    ninetyDays: [
      "Define the trust model: what the model may suggest versus what humans confirm",
      "Design the primary AI surface (chat, score, or agent queue) with empty and error states",
      "Validate with real users that insights change a weekly behavior",
    ],
    keywords: [
      "AI Product Designer",
      "LLM UX",
      "Conversational UI",
      "Trust UX",
      "Agentic product",
      "Human-in-the-loop",
    ],
  },
  {
    id: "design-eng",
    label: "Design Engineer",
    group: "specialist",
    eyebrow: "Prototype in product · Close the handoff gap",
    headline: "Craft that lives in working software — not only in static mocks.",
    pitch:
      "I bridge design and engineering: React, Supabase, Cursor, and Claude in the loop so architecture, states, and performance show up before sprint commitment. CostRadar.ai is a shipped Design Engineering proof — Marketplace SaaS built end to end.",
    proof: [
      "Shipped CostRadar.ai: React / Tailwind / Supabase / LLM agents",
      "Design-to-code practice across the UX org with quality bars intact",
      "~75% faster cycles on paths where design and eng shared the prototype",
    ],
    ninetyDays: [
      "Stand up a design-to-code sandbox on a real product surface",
      "Define a feasibility checklist (states, accessibility, performance, permissions)",
      "Pair with engineering so prototypes become the source of truth for reviews",
    ],
    keywords: [
      "Design Engineer",
      "Design-to-code",
      "React",
      "Prototyping",
      "Feasibility",
      "AI-augmented delivery",
    ],
  },
  {
    id: "systems",
    label: "Design Systems",
    group: "specialist",
    eyebrow: "Governance · Figma · Multi-product consistency",
    headline: "Systems that scale without relying on the same few seniors every time.",
    pitch:
      "I built Figma governance and design-system standards for Marketplace products and a distributed UX org — so consistency, accessibility, and velocity scale across BigPicture, 7pace, and AI initiatives without rewriting the rules every sprint.",
    proof: [
      "Design-system governance through SoftwarePlant → Appfire integration",
      "Org-wide Figma standards and quality bars for a 35+ person team",
      "Systems work tied to delivery speed and fewer late redesigns",
    ],
    ninetyDays: [
      "Inventory components, debt, and adoption gaps across products",
      "Publish a clear contribution model (who owns, who reviews, what ships)",
      "Land 1–2 high-leverage patterns that eng and design both commit to",
    ],
    keywords: [
      "Design Systems",
      "Figma governance",
      "Component libraries",
      "Multi-product",
      "Accessibility",
      "Design tokens",
    ],
  },
  {
    id: "research-ops",
    label: "Research Ops",
    group: "specialist",
    eyebrow: "Insights infrastructure · Dovetail · Rhythm",
    headline: "Research that stakeholders can actually use in weekly decisions.",
    pitch:
      "I stood up research ops (including Dovetail) so insight synthesis, intake, and reporting stop eating senior craft time. The goal is a predictable evidence rhythm that product and leadership can rely on.",
    proof: [
      "Research ops as shared infrastructure across a global UX org",
      "Intake and synthesis connected to delivery and leadership reporting",
      "Fewer status loops; more decisions backed by reusable insight",
    ],
    ninetyDays: [
      "Map the research lifecycle and where insight gets lost",
      "Stand up a lightweight repository and tagging standard (e.g. Dovetail)",
      "Tie one recurring leadership forum to fresh, scannable evidence",
    ],
    keywords: [
      "Research Ops",
      "Dovetail",
      "UX Research",
      "Insight management",
      "Evidence-based design",
      "Stakeholder rhythm",
    ],
  },
  {
    id: "ops",
    label: "Design Ops",
    group: "specialist",
    eyebrow: "Systems · Predictability · Scale",
    headline: "UX as a delivery system engineering can schedule against.",
    pitch:
      "Intake, estimation from velocity, research ops, and governance turned UX from local heroics into shared infrastructure — fewer late redesigns, clearer status, and faster time-to-market on critical paths (around 75%).",
    proof: [
      "Org-wide estimation, Figma governance, research ops",
      "~75% faster time-to-market on tightened design-to-code paths",
      "Predictable rhythm for stakeholders across a global team",
    ],
    ninetyDays: [
      "Instrument the UX lifecycle: intake → ship → learn",
      "Automate repetitive status work; keep people on judgment calls",
      "Connect execution signals to leadership reporting without extra thrash",
    ],
    keywords: [
      "Design Ops",
      "UX Ops",
      "Research Ops",
      "Estimation",
      "Governance",
      "Delivery systems",
    ],
  },
  {
    id: "strategy",
    label: "UX Strategist",
    group: "specialist",
    eyebrow: "Problem framing · Portfolio bets · Outcomes",
    headline: "Choose the right problems — then design the path to a real KPI.",
    pitch:
      "I connect strategy to practice: OKRs that link goals to tasks, financial modules leaders open during planning, and portfolio bets where UX owns adoption — not decoration. Strategy matters when it changes what ships next week.",
    proof: [
      "OKR module: strategy-to-task hierarchy leaders actually used (+47% adoption)",
      "Financial command center redesigned for weekly decision rituals",
      "Portfolio leadership across BigPicture, 7pace, and AI initiatives",
    ],
    ninetyDays: [
      "Clarify the business outcomes design is accountable for this quarter",
      "Map strategy → initiatives → UX bets with clear go / no-go criteria",
      "Install a lightweight review that tracks outcomes, not activity",
    ],
    keywords: [
      "UX Strategy",
      "Design Strategy",
      "OKRs",
      "Product strategy",
      "Portfolio",
      "Outcome-driven design",
    ],
  },
];

export const AGENTIC_PIPELINE = [
  { step: "Sense", detail: "Research ops · signals · intake" },
  { step: "Frame", detail: "Problem · constraints · bets" },
  { step: "Agent", detail: "Explore · synthesize · draft" },
  { step: "Craft", detail: "Human judgment · system integrity" },
  { step: "Ship", detail: "Design-to-code · real product" },
  { step: "Learn", detail: "KPIs · benchmarks · loops" },
];

export const PROCESSES: NarrativeBlock[] = [
  {
    title: "Discovery to delivery: faster cycles without losing quality",
    body: "I run design as a delivery system, not a slide factory. Teams move from problem framing to validated solutions with tight loops across research, prototyping, and engineering. Where AI helps (Cursor, Claude, GPT), we use it to compress exploration and keep craft inside working product. Velocity only counts when quality bars, accessibility, and design-system integrity stay intact. The question I keep asking: what decision does this artifact unlock next week for product, engineering, and the customer?",
  },
  {
    title: "Closing the handoff gap",
    body: "Static files alone create translation loss between design intent and production. I push prototypes that expose architecture early, so product and engineering debate real constraints before polish. Design Engineering means feasibility is part of the design conversation: states, empty paths, performance, permissions, and edge cases show up in review — not after sprint commitment. Teams spend less time rewriting intent and more time shipping experiences that hold up with real data, roles, and deadlines.",
  },
  {
    title: "Operating rhythm and automation",
    body: "Routine synthesis, reporting, and status gathering should not consume senior craft time. We automate what is repetitive, keep people on judgment calls, and connect execution signals to leadership reporting without interrupting design work. Intake, estimation, and research ops (including Dovetail) give stakeholders a rhythm they can plan against. The goal is dependable delivery and shared visibility — not process for its own sake.",
  },
  {
    title: "Growing designers who can ship",
    body: "Leading 35+ designers across Appfire’s portfolio meant coaching for craft and delivery at the same time. I support growth paths where people deepen product skill at their own pace, including optional technical fluency when it reduces handoff friction. Clearer ownership, fewer meetings about where design is, and faster response when the market or roadmap moves. A design org scales when standards travel without constant heroics from the same few seniors.",
  },
  {
    title: "Leadership that connects strategy to practice",
    body: "First place in Appfire’s year-long FUEL manager program reinforced how I lead: strategy tied to operating reality. Personal growth plans, hiring bars, and delivery standards point at the same business outcomes. Leadership is not separate from the work — it is how the work gets better at scale, how managers coach consistently across time zones, and how UX stays a partner product and engineering can plan against.",
  },
];

export const MENTORING: NarrativeBlock[] = [
  {
    title: "Human-centered leadership for high-performing design teams",
    body: "I grow designers who can think in systems, partner with product and engineering, and own outcomes end to end. New tools, including AI, enter the team with clear standards, space to practice, and judgment about when automation helps versus when craft must stay human. Empathy and high bars work together — psychological safety without standards is comfort; standards without safety create fear. Strong teams need both.",
  },
  {
    title: "Mentorship as part of how we operate",
    body: "Mentorship is continuous, not a workshop series. I identify high-potential people, pair them with real product problems, and coach toward prototypes and decisions that move the roadmap. Growth paths connect personal ambition to org needs across the portfolio, so development time shows up as business progress. The measure is not hours mentored — it is whether someone can lead a hard problem with less escalation than last quarter.",
  },
  {
    title: "Craft, confidence, and technical range",
    body: "Coaching spans levels: 1:1s on problem framing, reviews that raise interaction quality, and optional practice with modern prototyping workflows. Plans start from what each person wants to become, then align that with portfolio priorities across BigPicture, 7pace, and AI initiatives. Mentorship works when it changes what ships and how confidently people lead.",
  },
  {
    title: "Well-being and business outcomes together",
    body: "Speed without recovery burns teams and quietly destroys quality. I push efficiency while protecting creative judgment and focus time for deep work. Goals and reviews weigh design quality and delivery impact together, so nobody is rewarded for thrash or heroics that create debt. Sustainable teams outperform heroic ones over a year — and design leadership owns that trade-off openly.",
  },
  {
    title: "Building a team that stays ahead",
    body: "We invest in shared practice, transparent critique, and small experiments that teach the org what works before we scale it. The team stays adaptable because learning is part of delivery, not a side project scheduled after burnout. That is how a design organization stays useful when products, platforms, and tooling keep changing.",
  },
];

export const BUSINESS_IMPACT: NarrativeBlock[] = [
  {
    title: "UX operations and organizational design",
    body: "As Senior UX Manager, I rebuilt how a 35-person global UX organization operated — not only what it shipped. Unified intake, clearer cross-department decision rights, and faster paths from insight to execution. Research ops, estimation, and design-system governance stopped being local habits and became shared infrastructure. UX stayed aligned with business goals from sprint planning through executive reporting.",
  },
  {
    title: "Predictability and delivery speed",
    body: "UX cycles used to be hard to plan. Stakeholders could not commit, and engineering waited on ambiguous scope. I introduced estimation from historical velocity and complexity scoring, then tightened design-to-code collaboration on critical initiatives. Time-to-market improved by ~75% on those paths. UX became a partner engineering could schedule against, with fewer surprise redesigns late in the sprint.",
  },
  {
    title: "Expanding the builder mindset across teams",
    body: "I grew a builder mindset across 35 designers without forcing everyone to code. Skills assessments, workshops, and optional agentic workflows helped high-potential people ship functional prototypes and validate ideas earlier. Senior craft time moved toward strategy, harder product problems, and coaching. The org gained capacity without simply hiring more people into the same bottleneck.",
  },
  {
    title: "Business impact through design leadership",
    body: "Key outcomes from this leadership period: OKR module adoption among leadership teams +47%; Financial module adoption 53% to 84% in three months; Unclear financial-data reports −58%; Gantt information retrieval 42% faster, NPS +36%; CostRadar: ~15–25% annual savings for premium merchants; SafeRadar: zero-code EU compliance path for Shopify stores. These numbers connect design leadership to product adoption, operational clarity, and customer trust.",
  },
];

export const IMPACT_METRICS = [
  { value: "+47%", label: "OKR adoption among leadership teams" },
  { value: "53→84%", label: "Financial module adoption in 3 months" },
  { value: "−58%", label: "Unclear financial-data reports" },
  { value: "42% faster", label: "Gantt information retrieval · NPS +36%" },
  { value: "~65%", label: "UX ops efficiency vs traditional frameworks" },
  { value: "35+", label: "Designers led across Appfire portfolio" },
];

export const CLOSING_CTA =
  "Thanks for taking the time to review the portfolio. I’d love to talk about UX leadership roles where strategy, craft, and operating excellence meet — Senior Manager and Director scopes where design is expected to move product outcomes. Feel free to reach out anytime.";
