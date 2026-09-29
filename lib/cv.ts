export type ExperienceItem = {
  years: string;
  role: string;
  company: string;
  blurb: string;
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
  subtitle: "UX Orchestrator · User Experience Leader · Product Maker",
  title: "Marcin Nowak — UX Orchestrator · UX Leader · Product Maker",
  email: "pl.nowak.marcin@gmail.com",
  phone: "(+48) 792 792 290",
  phoneHref: "tel:+48792792290",
  linkedin: "https://www.linkedin.com/in/therealnowaczek/",
  cvPdf: "/Marcin_Nowak_CV_2026.pdf",
  cvFilename: "Marcin_Nowak_CV_2026.pdf",
  costradar: "https://costradar.ai",
  appfire: "https://appfire.com/",
  bigpicture: "https://appfire.com/bigpicture",
  sevenpace: "https://appfire.com/products/7pace-for-jira-atlassian",
  tvpParlament: "https://tvpparlament.pl",
  tvp3: "https://regiony.tvp.pl/",
  description:
    "UX Orchestrator · User Experience Leader · Product Maker. Enterprise SaaS leadership and a shipped founder product (CostRadar.ai).",
};

export const INTRO_HEADLINE =
  "I lead UX for complex enterprise products — and I still design and ship.";

/** ~100 words: who, for whom, one leadership proof, one shipped builder proof, CTA. */
export const INTRO_PARAGRAPHS = [
  "Senior UX Manager at Appfire — I co-led 35+ designers, researchers, and writers across the product portfolio, including BigPicture, 7pace, and AI workstreams, with design ops and measurable adoption on tools used by thousands of teams. Independently I shipped CostRadar.ai as a solo design engineer (live at costradar.ai): true-net P&L and Approve-gated AI. I look for design leadership roles where strategy, craft, and operating systems meet — open to a conversation.",
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
    company: "CostRadar.ai",
    blurb:
      "Live multi-channel Profitability OS (costradar.ai). Solo design-engineer ship: true-net ledger, savings estimates + tracker, Approve-gated Profit Agent.",
  },
  {
    years: "2023 – 2026",
    role: "Senior UX Manager",
    company: "Appfire",
    blurb:
      "Co-led 35+ designers, researchers, and writers across the Appfire portfolio, including BigPicture, 7pace, and AI workstreams. Estimation, Figma governance, research ops, and AI workstream adoption across the org. Case write-ups in progress.",
  },
  {
    years: "2019 – 2023",
    role: "Head of Design",
    company: "SoftwarePlant (acquired by Appfire)",
    blurb:
      "Grew 16+ designers, researchers, and writers. Design-system governance for Marketplace products; led craft integration into Appfire post-acquisition.",
  },
  {
    years: "2016 – 2019",
    role: "UX & UI Designer",
    company: "SoftwarePlant (acquired by Appfire)",
    blurb:
      "Principal craft on BigPicture (Marketplace best-seller). Discovery through delivery on financials, OKRs, and planning surfaces.",
  },
  {
    years: "2013 – 2016",
    role: "Product Manager, UX Designer",
    company: "TVP 3",
    blurb:
      "Coordinated 16 teams on public-broadcaster web services — product strategy, UX, and multi-stakeholder delivery.",
  },
  {
    years: "2011 – 2013",
    role: "Co-runner, UX Designer",
    company: "TVP Parlament",
    blurb: "Launched a new e-television channel from scratch.",
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
    title: "Leadership & ops",
    blurb: "Org scale, design ops, and how decisions stick.",
    items: [
      "UX leadership (Senior Manager / Head of Design)",
      "Design Ops & estimation",
      "Design-system governance",
      "Research ops (Dovetail)",
      "Hiring bars & mentorship",
      "Post-acquisition integration",
    ],
  },
  {
    title: "Product & craft",
    blurb: "Enterprise SaaS that stays clear under complexity.",
    items: [
      "Complex product UX",
      "Information architecture",
      "Data-dense / fintech-adjacent UI",
      "Design engineering",
      "End-to-end ownership",
    ],
  },
  {
    title: "AI & delivery",
    blurb: "Practical AI with craft and quality bars intact.",
    accent: true,
    items: [
      "AI UX & agentic workflows",
      "Human-in-the-loop / Approve patterns",
      "Design-to-code (Cursor, React)",
      "Trust & safety UX",
    ],
  },
];

export const TOOL_GROUPS: SkillGroup[] = [
  {
    title: "Design",
    blurb: "Systems, critique, workshops.",
    items: ["Figma", "FigJam", "Miro", "Design tokens", "Prototyping"],
  },
  {
    title: "AI & build",
    blurb: "Stack I ship with.",
    accent: true,
    items: [
      "Cursor",
      "Claude",
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
    ],
  },
  {
    title: "Research & collab",
    blurb: "Evidence and delivery rhythm.",
    items: ["Dovetail", "Amplitude", "Maze", "Jira", "Notion", "Slack"],
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

/** Differentiated proof: leadership vs craft (BigPicture/CostRadar) vs Design Ops vs AI. */
export const ROLE_LENSES: RoleLens[] = [
  {
    id: "leader",
    label: "UX Leader",
    group: "career",
    eyebrow: "Senior Manager · Head of UX",
    headline: "Strategy connected to craft — close enough to still ship when it matters.",
    pitch:
      "As Senior UX Manager at Appfire I co-led 35+ designers, researchers, and writers across the product portfolio, including BigPicture, 7pace, and AI workstreams. I coach seniors, unblock squads, and keep trade-offs real — mentorship as weekly operating practice, not a workshop series.",
    proof: [
      "Grew teams from IC craft to 16+, then co-led 35+ designers, researchers, and writers post-acquisition",
      "Design-system governance for Atlassian Marketplace products",
      "Research ops (Dovetail), Figma standards, cross-timezone delivery",
    ],
    ninetyDays: [
      "Clarify ownership and critique across squads",
      "Raise the bar on 2–3 critical journeys with measurable outcomes",
      "Connect growth paths to roadmap needs",
    ],
    keywords: [
      "UX Leader",
      "Senior UX Manager",
      "Mentorship",
      "Design Systems",
      "Enterprise SaaS",
    ],
  },
  {
    id: "head",
    label: "Head of Design",
    group: "career",
    eyebrow: "Function owner · Hiring · Standards",
    headline: "Build a design function product and engineering can plan around.",
    pitch:
      "As Head of Design at SoftwarePlant I grew a 16+ person team through acquisition into Appfire — hiring bars, design-system governance, and delivery standards that held after the merge.",
    proof: [
      "Grew and led 16+ designers, researchers, and writers",
      "Design-system governance for Marketplace products",
      "Post-acquisition craft, process, and culture integration",
    ],
    ninetyDays: [
      "Review team health, hiring gaps, and quality bars",
      "Set a shared operating rhythm with product and engineering leads",
      "Make one portfolio-wide standard durable (system, critique, or intake)",
    ],
    keywords: [
      "Head of Design",
      "Hiring",
      "Design Systems",
      "Team building",
      "Org integration",
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
      "CostRadar.ai: end-to-end product UX live at costradar.ai",
      "Dense enterprise and fintech-adjacent UI with clear empty and trust states",
    ],
    ninetyDays: [
      "Map the critical journey and the decision moments that matter most",
      "Ship a validated slice with engineering — states, empty paths, performance",
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
      "Financials: clearer reporting (−58% unclear reports · Impact footnotes)",
      "Gantt: faster information retrieval and NPS lift on planning workflows",
      "CostRadar: true-net ledger + Approve-gated AI shipped end-to-end",
    ],
    ninetyDays: [
      "Own one high-stakes surface end-to-end, with clear success metrics",
      "Pair with engineering early on performance and edge states",
      "Leave patterns the team can reuse without me in the room",
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
    id: "ops",
    label: "Design Ops",
    group: "specialist",
    eyebrow: "Systems · Predictability · Scale",
    headline: "UX as a delivery system engineering can schedule against.",
    pitch:
      "Intake, estimation from velocity, research ops, and Figma governance turned UX from local heroics into shared infrastructure — clearer status, fewer late redesigns.",
    proof: [
      "Org-wide estimation, Figma governance, research ops at Appfire",
      "Design-system contribution model through SoftwarePlant → Appfire",
      "Predictable rhythm for stakeholders across a global team",
    ],
    ninetyDays: [
      "Instrument the UX lifecycle: intake → ship → learn",
      "Automate repetitive status work; keep people on judgment calls",
      "Connect execution signals to leadership reporting without thrash",
    ],
    keywords: [
      "Design Ops",
      "Research Ops",
      "Estimation",
      "Governance",
      "Delivery systems",
    ],
  },
  {
    id: "systems",
    label: "Design Systems",
    group: "specialist",
    eyebrow: "Governance · Figma · Multi-product consistency",
    headline: "Systems that scale without relying on the same few seniors every time.",
    pitch:
      "I built Figma governance and design-system standards for Marketplace products and a distributed UX org — so consistency, accessibility, and velocity scale across the portfolio, including BigPicture, 7pace, and AI workstreams, without rewriting the rules every sprint.",
    proof: [
      "Design-system governance through SoftwarePlant → Appfire integration",
      "Org-wide Figma standards and quality bars for a 35+ team of designers, researchers, and writers I co-led",
      "Atlas CMS concept: tokens, specs, and a live props playground",
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
    id: "ai",
    label: "AI UX / Design Engineer",
    group: "specialist",
    eyebrow: "Shipped product · Trust · Agents",
    headline: "AI in working software — with craft and Approve gates intact.",
    pitch:
      "I rolled out agentic workflows and design-to-code across a UX org, then proved the stack by shipping CostRadar.ai solo: true-net ledger, savings estimates + tracker, Approve-gated Profit Agent.",
    proof: [
      "CostRadar.ai live: React / Supabase / LLM agents (founder craft proof)",
      "Approve-gated writes, quiet hours, grounded findings — trust before autonomy",
      "AI workstream adoption with human review and design-system integrity",
    ],
    ninetyDays: [
      "Map where agents speed discovery versus where craft must stay human",
      "Pilot agentic loops on one surface with clear quality gates",
      "Write playbooks so seniors can coach the practice",
    ],
    keywords: [
      "AI UX",
      "Design Engineering",
      "Human-in-the-loop",
      "Cursor",
      "Design-to-code",
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
    title: "Discovery to ship without losing the craft bar",
    body: "Design as a delivery system: frame the problem, prototype against real constraints, pair early with engineering on states and performance. Where AI helps (Cursor, Claude), we compress exploration; quality bars, accessibility, and design-system integrity stay non-negotiable. The test: what decision does this artifact unlock next week?",
  },
];

export const MENTORING: NarrativeBlock[] = [
  {
    title: "Grow designers who can own outcomes",
    body: "I coach for craft and delivery together — 1:1s on problem framing, reviews that raise interaction quality, and growth paths tied to portfolio needs. Empathy and high bars work as a pair. Co-leading 35+ designers, researchers, and writers across Appfire meant standards that travel without constant heroics from the same few seniors.",
  },
];

export const BUSINESS_IMPACT: NarrativeBlock[] = [
  {
    title: "UX operations at org scale",
    body: "As Senior UX Manager I co-led a 35+ global UX org of designers, researchers, and writers: unified intake, clearer decision rights, research ops, estimation, and design-system governance as shared infrastructure — so UX stayed aligned from sprint planning through executive reporting.",
  },
  {
    title: "Product outcomes (enterprise)",
    body: "BigPicture module work (OKRs, financials, Gantt) tied design decisions to adoption and clarity. Metrics below include scope footnotes; full case write-ups (baseline, timeframe, my contribution vs team) are in progress — see content/cases/.",
  },
  {
    title: "Founder craft (CostRadar)",
    body: "CostRadar.ai is live: solo design-engineer ship with true-net P&L, savings estimates + tracker, and Approve-gated Profit Agent. Early-stage / fundraising = craft and trust proof, not a verified growth ROI case. No invented customer logos or merchant savings %.",
  },
];

export type ImpactMetric = {
  value: string;
  label: string;
  footnote: string;
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    value: "+47%",
    label: "OKR adoption among leadership teams",
    footnote:
      "BigPicture OKR module · Appfire/SoftwarePlant era · team outcome; personal contribution detail in case draft",
  },
  {
    value: "53→84%",
    label: "Financial module adoption in 3 months",
    footnote:
      "BigPicture Financials · ~3-month window after redesign · product analytics; case write-up in progress",
  },
  {
    value: "−58%",
    label: "Unclear financial-data reports",
    footnote:
      "Support / clarity signal post Financials redesign · baseline vs after · contribution shared with PM/eng",
  },
  {
    value: "42% faster",
    label: "Gantt information retrieval · NPS +36%",
    footnote:
      "BigPicture Gantt usability work · timed tasks + NPS · team delivery under design leadership",
  },
  {
    value: "35+",
    label: "Designers, researchers & writers co-led across Appfire",
    footnote:
      "Senior UX Manager scope · co-led 35+ designers, researchers, and writers across the portfolio, including BigPicture, 7pace, AI workstreams · distributed global org",
  },
];

export const CLOSING_CTA =
  "Thanks for reviewing the portfolio. I’d like to talk about UX leadership roles where strategy, craft, and design ops meet — Senior Manager / Head of Design scope, or specialist AI UX and Design Engineering seats. Reach out anytime.";
