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
    "UX Orchestrator · User Experience Leader · Product Maker. Formerly Senior UX Manager at Appfire; founder of CostRadar.ai. Open to design leadership roles.",
};

export const INTRO_HEADLINE =
  "I lead UX for complex enterprise products — and I still design and ship.";

/** ~100 words: who, last role proof, shipped builder proof, seeking next role. */
export const INTRO_PARAGRAPHS = [
  "Most recently I was Senior UX Manager at Appfire, where I co-led 35+ designers, researchers, and writers across products like BigPicture and 7pace, plus AI workstreams — design ops, research ops, and tools used by thousands of teams. Independently I shipped CostRadar.ai (live at costradar.ai): a profitability product with true-net P&L and AI that only acts after you Approve. I am looking for my next challenge in design leadership — roles where strategy, craft, and how the team runs all matter.",
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
      "Live profitability product for multi-channel e-commerce (costradar.ai). I designed and built it solo: true-net ledger, savings tracker, and an AI Profit Agent that only changes things after you Approve.",
  },
  {
    years: "2023 – 2026",
    role: "Senior UX Manager",
    company: "Appfire",
    blurb:
      "Co-led 35+ designers, researchers, and writers across Appfire products including BigPicture, 7pace, and AI workstreams. Ran estimation, Figma standards, research ops, and AI rollout across the org.",
  },
  {
    years: "2019 – 2023",
    role: "Head of Design",
    company: "SoftwarePlant (acquired by Appfire)",
    blurb:
      "Grew a team of 16+ designers, researchers, and writers. Owned design-system standards for Marketplace products and led craft integration after the Appfire acquisition.",
  },
  {
    years: "2016 – 2019",
    role: "UX & UI Designer",
    company: "SoftwarePlant (acquired by Appfire)",
    blurb:
      "Lead designer on BigPicture (Atlassian Marketplace best-seller). Owned discovery through delivery on financials, OKRs, and planning screens.",
  },
  {
    years: "2013 – 2016",
    role: "Product Manager, UX Designer",
    company: "TVP 3",
    blurb:
      "Coordinated 16 teams on public-broadcaster web services — product strategy, UX, and delivery across many stakeholders.",
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
    headline: "Strategy close enough to craft that I can still ship when it matters.",
    pitch:
      "Most recently, as Senior UX Manager at Appfire, I co-led 35+ designers, researchers, and writers across products including BigPicture, 7pace, and AI workstreams. I coach seniors, unblock squads, and keep trade-offs honest — mentorship as weekly practice, not a one-off workshop.",
    proof: [
      "Grew teams from individual contributor to 16+, then co-led 35+ people after the Appfire acquisition",
      "Design-system standards for Atlassian Marketplace products",
      "Research ops (Dovetail), Figma standards, delivery across time zones",
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
      "As Head of Design at SoftwarePlant I grew a 16+ person team through the acquisition into Appfire — hiring bars, design-system standards, and delivery rules that still held after the merge.",
    proof: [
      "Grew and led 16+ designers, researchers, and writers",
      "Design-system standards for Marketplace products",
      "After acquisition: integrated craft, process, and culture into Appfire",
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
      "When the role needs strong Product Design, that is still how I work: frame the problem, prototype with real constraints, and ship interfaces finance, PMs, and engineers can trust. BigPicture modules and CostRadar.ai are the proof.",
    proof: [
      "Lead designer on enterprise financials, OKRs, and Gantt — see OKRs + Gantt cases",
      "CostRadar.ai: end-to-end product UX live at costradar.ai",
      "Dense enterprise and money-adjacent UI with clear empty and trust states",
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
    headline: "Dense enterprise UX — clear when the cognitive load is high.",
    pitch:
      "Principal-level work on BigPicture financials, OKRs, and Gantt: clear hierarchy, performance as a design constraint, and dashboards finance and PMs both trust. I still prototype and ship when the problem needs it.",
    proof: [
      "OKRs + Gantt cases: hierarchy and dense planning under load",
      "Financials: clearer reporting (−58% unclear reports — see Impact)",
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
    headline: "Make UX something engineering can schedule against.",
    pitch:
      "Intake, estimation from velocity, research ops, and Figma standards turned UX from local heroics into shared infrastructure — clearer status, fewer late redesigns.",
    proof: [
      "DesignOS case: intake, estimation, standards, research ops, human-gated AI",
      "Org-wide estimation, Figma standards, and research ops at Appfire",
      "Design-system contribution model through SoftwarePlant → Appfire",
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
    headline: "Systems that scale without the same few seniors every time.",
    pitch:
      "I built Figma standards and design-system rules for Marketplace products and a distributed UX org — so consistency, accessibility, and speed hold across BigPicture, 7pace, and AI workstreams without rewriting the rules every sprint.",
    proof: [
      "Design-system standards through SoftwarePlant → Appfire integration",
      "Org-wide Figma standards for a 35+ team I co-led",
      "Atlas CMS exploration: tokens, specs, and a live props playground",
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
      "I rolled out agentic workflows and design-to-code across a UX org, then proved the stack by shipping CostRadar.ai solo: true-net ledger, savings tracker, and an AI Profit Agent that only acts after Approve.",
    proof: [
      "CostRadar.ai live: React / Supabase / LLM agents — I designed and built it",
      "Approve before writes, quiet hours, grounded findings — trust before autonomy",
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
    title: "From problem to shipped UI",
    body: "I frame the problem, prototype against real constraints, and pair early with engineering on states and performance. AI tools (Cursor, Claude) speed up exploration. Quality bars, accessibility, and the design system stay non-negotiable. The test I use: what decision does this artifact unlock next week?",
  },
];

export const MENTORING: NarrativeBlock[] = [
  {
    title: "Grow designers who can own outcomes",
    body: "I coach craft and delivery together — 1:1s on problem framing, reviews that raise interaction quality, and growth paths tied to what the product needs. Empathy and high bars both matter. At Appfire, co-leading 35+ people meant standards that travel without the same few seniors doing heroics every time.",
  },
];

export const BUSINESS_IMPACT: NarrativeBlock[] = [
  {
    title: "UX operations at org scale",
    body: "As Senior UX Manager at Appfire I co-led a 35+ global UX org of designers, researchers, and writers. We set shared intake, clearer decision rights, research ops, estimation, and design-system rules — so UX stayed aligned from sprint planning through executive reporting.",
  },
  {
    title: "Product outcomes (enterprise)",
    body: "On BigPicture (OKRs, financials, Gantt) design choices were tied to adoption and clarity. Impact numbers on this page include short scope notes for each result.",
  },
  {
    title: "Founder craft (CostRadar)",
    body: "CostRadar.ai is live. I designed and engineered it solo: true-net P&L, savings estimates and tracker, and an AI Profit Agent that only acts after Approve — early-stage craft and trust UX.",
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
      "BigPicture OKR module · Appfire / SoftwarePlant · team outcome",
  },
  {
    value: "53→84%",
    label: "Financial module adoption in 3 months",
    footnote:
      "BigPicture Financials · about 3 months after redesign · product analytics",
  },
  {
    value: "−58%",
    label: "Unclear financial-data reports",
    footnote:
      "Support / clarity signal after the Financials redesign · before vs after · shared outcome with PM and engineering.",
  },
  {
    value: "42% faster",
    label: "Gantt information retrieval · NPS +36%",
    footnote:
      "Enterprise Gantt usability · timed tasks + NPS · delivered with the team under design leadership.",
  },
  {
    value: "35+",
    label: "Designers, researchers & writers co-led across Appfire",
    footnote:
      "Senior UX Manager scope · co-led 35+ people across the portfolio, including BigPicture, 7pace, and AI workstreams · distributed global org.",
  },
];

export const CLOSING_CTA =
  "Thanks for reading. I am looking for my next role — UX leadership (Senior Manager or Head of Design), or specialist seats in AI UX and Design Engineering. Reach out anytime.";
