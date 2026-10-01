export type ExperienceItem = {
  years: string;
  role: string;
  company: string;
  blurb: string;
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

export const PROFILE_URL = "https://therealnowaczek.github.io/portfolio/";

/** Phone stays on the CV PDF only: keeps bots and spam off the public page. */
export const SITE = {
  name: "Marcin Nowak",
  subtitle: "Head of Design · Senior UX Manager · Lead Product Designer",
  title:
    "Marcin Nowak · Head of Design · Senior UX Manager · Lead Product Designer (AI UX)",
  email: "pl.nowak.marcin@gmail.com",
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
    "Head of Design and Senior UX Manager based in Poland, open to remote roles in the EU. Co-led a 35+ person UX org at Appfire (BigPicture, 7pace, design ops, research ops). Still hands-on as a Lead Product Designer, and builds with AI: founder of CostRadar.ai, an early-stage profitability product with an Approve-gated AI agent.",
};

export const INTRO_HEADLINE =
  "I lead UX for complex enterprise products, put AI to work in the process, and still design hands-on.";

/** Proof first, then the titles a recruiter or ATS will match. */
export const INTRO_PARAGRAPHS = [
  "Most recently Senior UX Manager at Appfire, where I co-led 35+ designers, researchers, and writers across BigPicture, 7pace, and AI workstreams. Before that, Head of Design at SoftwarePlant: I grew the team to 16+ and carried it through the Appfire acquisition. I am still hands-on: lead designer behind BigPicture's OKRs, Gantt, and Financials.",
  "AI is part of how I work, not a slide. I rolled out agentic workflows and design-to-code across a UX org, and I built CostRadar.ai myself: an early-stage profitability product with an AI agent that only acts after you Approve.",
  "I am looking for Head of Design or Senior UX Manager roles where I stay close to the craft, or Lead Product Designer roles with real scope over AI products and design systems. Remote, EU.",
];

export type HeroStat = {
  value: string;
  label: string;
};

/** Shown under the intro. Team outcomes are footnoted in the Impact section. */
export const HERO_STATS: HeroStat[] = [
  { value: "35+", label: "designers, researchers, and writers co-led at Appfire" },
  { value: "53→84%", label: "financial module adoption in 3 months (team outcome)" },
  { value: "+47%", label: "leadership teams using OKRs (team outcome)" },
  { value: "Live", label: "CostRadar.ai: early-stage product, built solo, AI agent behind Approve" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    years: "2025 - Present",
    role: "Founder & AI Design Engineer",
    company: "CostRadar.ai",
    blurb:
      "Independent founder. Live, early-stage profitability product for multi-channel e-commerce (costradar.ai): 28 freemium users and one design partner so far, no paying customers yet. I designed and built it solo: true-net ledger, savings tracker, and an AI Profit Agent that only changes things after you Approve.",
  },
  {
    years: "2023 - 2026",
    role: "Senior UX Manager",
    company: "Appfire",
    blurb:
      "After the acquisition my scope grew from one team to a multi-product org: I co-led 35+ designers, researchers, and writers across BigPicture, 7pace, and AI workstreams, up from the 16+ team I had led as Head of Design. Ran design ops, estimation, Figma standards, research ops, and AI rollout, and stayed hands-on in BigPicture design. BigPicture team outcomes (see Impact): +47% OKR adoption, financial-module adoption 53% to 84% in 3 months, 58% fewer unclear financial reports.",
  },
  {
    years: "2021 - Present",
    role: "Freelance Product Designer",
    company: "Independent (alongside staff roles)",
    blurb:
      "Product design for mobile apps, desktop products, and web, from framing and UI through delivery. Most of the client work in this portfolio comes from here and is anonymized: brands and names are created for presentation.",
  },
  {
    years: "2019 - 2023",
    role: "Head of Design",
    company: "SoftwarePlant (acquired by Appfire)",
    blurb:
      "Grew a team of 16+ designers, researchers, and writers. Owned design-system standards for Marketplace products and led craft integration after the Appfire acquisition.",
  },
  {
    years: "2016 - 2019",
    role: "UX & UI Designer",
    company: "SoftwarePlant (acquired by Appfire)",
    blurb:
      "Lead Product Designer on BigPicture (Atlassian Marketplace best-seller). Owned discovery through delivery on financials, OKRs, and Gantt planning.",
  },
  {
    years: "2013 - 2016",
    role: "Product Manager, UX Designer",
    company: "TVP 3",
    blurb:
      "Coordinated 16 teams on public-broadcaster web services: product strategy, UX, and stakeholder management across delivery.",
  },
  {
    years: "2011 - 2013",
    role: "UX Designer",
    company: "TVP Parlament",
    blurb: "Co-led the launch of a new e-television channel from scratch.",
  },
];
export const EDUCATION: EducationItem[] = [
  {
    years: "2008 - 2011",
    school: "Warszawska Wyższa Szkoła Humanistyczna im. B. Prusa (now MODERNA)",
    detail: "Bachelor's degree, Journalism and Social Communication, Warsaw, Poland",
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
      "People management",
      "Stakeholder management",
      "Design Ops & estimation",
      "Design-system governance",
      "Research ops",
      "Hiring bars & mentorship",
      "Post-acquisition integration",
    ],
  },
  {
    title: "Product & craft",
    blurb: "Enterprise SaaS that stays clear under complexity.",
    items: [
      "Product design",
      "Complex product UX",
      "B2B SaaS",
      "Information architecture",
      "UX research",
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

/** Visible facts for crawlers, AI screeners, and Google. Not a keyword dump. */
export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: ["Head of Design", "Senior UX Manager", "Lead Product Designer"],
  description: SITE.description,
  email: SITE.email,
  url: PROFILE_URL,
  sameAs: [SITE.linkedin, SITE.costradar, PROFILE_URL],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PL",
  },
  knowsLanguage: ["pl", "en"],
  knowsAbout: [...EXPERTISE, ...TOOLS],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Warszawska Wyższa Szkoła Humanistyczna im. B. Prusa",
  },
  worksFor: {
    "@type": "Organization",
    name: "CostRadar.ai",
    url: SITE.costradar,
  },
};

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
    title: "Roles I am targeting",
  },
  {
    id: "specialist" as const,
    title: "Runs through both",
  },
];

/** Three lenses, each with distinct proof: lead, build, and AI. */
export const ROLE_LENSES: RoleLens[] = [
  {
    id: "leader",
    label: "Head of Design / UX Manager",
    group: "career",
    eyebrow: "Preferred · Function owner · Hands-on leader",
    headline: "Build a design function that product and engineering can plan around, and stay close enough to the craft to raise the bar myself.",
    pitch:
      "I grew the SoftwarePlant design team to 16+ as Head of Design, then co-led 35+ designers, researchers, and writers at Appfire across BigPicture, 7pace, and AI workstreams. I coach seniors, set hiring bars and standards, and still pick up the hard design problems when the roadmap needs it.",
    proof: [
      "Grew and led 16+ designers, researchers, and writers, then co-led 35+ after the Appfire acquisition",
      "Integrated craft, process, and culture after the acquisition: shared intake, estimation, Figma standards, and research ops (see DesignOS)",
      "Design-system standards for Atlassian Marketplace products; Design Ops and Design Systems are part of this seat, not separate hats",
    ],
    ninetyDays: [
      "Review team health, hiring gaps, and quality bars; clarify ownership and critique across squads",
      "Agree an operating rhythm with product and engineering leads, including how AI is used and reviewed",
      "Make one portfolio-wide standard durable (system, critique, or intake) and raise the bar on 2-3 critical journeys",
    ],
    keywords: [
      "Head of Design",
      "Senior UX Manager",
      "Design Ops",
      "Design Systems",
      "Hiring & mentorship",
    ],
  },
  {
    id: "product",
    label: "Lead Product Designer+",
    group: "career",
    eyebrow: "Hands-on · Complex product · Scope beyond the screen",
    headline: "Own the hardest surface end to end: dense enterprise UX that stays clear under load.",
    pitch:
      "I still design. As lead designer on BigPicture I owned financials, OKRs, and Gantt from discovery to delivery. Hierarchy, retrieval speed, and trust states are the craft. I set direction for the squad and the system around it.",
    proof: [
      "OKRs and Gantt cases: hierarchy and dense planning under cognitive load",
      "Financials: financial-module adoption 53% to 84% in 3 months and 58% fewer unclear reports (team outcomes)",
      "CostRadar.ai: true-net ledger and Approve-gated AI designed and built end to end",
    ],
    ninetyDays: [
      "Map the critical journey and the decision moments that matter most",
      "Ship a validated slice with engineering: states, empty paths, performance",
      "Leave patterns and components the squad can extend without me",
    ],
    keywords: [
      "Lead Product Designer",
      "Staff-level scope",
      "Complex product UX",
      "Information architecture",
      "Enterprise SaaS",
    ],
  },
  {
    id: "ai",
    label: "AI UX / Design Engineering",
    group: "specialist",
    eyebrow: "In the workflow · Shipped · Trust before autonomy",
    headline: "AI in working software and in the design process, with craft and Approve gates intact.",
    pitch:
      "I rolled out agentic workflows and design-to-code across a UX org, then built CostRadar.ai solo to test the stack on my own product: true-net ledger, savings tracker, and an AI Profit Agent that only acts after Approve. It is early-stage (28 freemium users and one design partner, no paying customers yet), and I learn from real usage.",
    proof: [
      "CostRadar.ai is live: React, Supabase, and LLM agents. I designed and built it",
      "Approve before writes, quiet hours, grounded findings: trust patterns for agents that touch money",
      "AI rollout at Appfire with human review and design-system integrity (DesignOS agentic loop)",
    ],
    ninetyDays: [
      "Map where agents speed discovery versus where craft must stay human",
      "Pilot an agentic loop on one surface with clear quality gates",
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

export type PipelineStep = {
  step: string;
  detail: string;
  beat: string;
};

export const AGENTIC_PIPELINE: PipelineStep[] = [
  {
    step: "Sense",
    detail: "Research ops · signals · intake",
    beat: "Gather what matters before anyone opens Figma: support themes, usage, constraints, the real ask.",
  },
  {
    step: "Frame",
    detail: "Problem · constraints · bets",
    beat: "Name the decision, the constraints, and the bet. If the frame is wrong, speed only ships the wrong thing faster.",
  },
  {
    step: "Agent",
    detail: "Explore · synthesize · draft",
    beat: "AI covers ground: variants, flows, edge cases. I keep the problem frame and throw out what doesn’t earn a review.",
  },
  {
    step: "Craft",
    detail: "Human judgment · system integrity",
    beat: "Quality bars, accessibility, and the design system stay non-negotiable. Judgment is the product.",
  },
  {
    step: "Ship",
    detail: "Design-to-code · real product",
    beat: "Pair early on states and performance. The artifact isn’t a deck; it’s UI that lands in the product.",
  },
  {
    step: "Learn",
    detail: "KPIs · benchmarks · loops",
    beat: "What decision did this unlock next week, and what do we measure so the next loop starts smarter?",
  },
];

export const PROCESS_INTRO =
  "I frame the problem, prototype against real constraints, and pair early with engineering on states and performance. The loop below is how I run that, with AI in the middle for speed and craft at the gates.";

export const PROCESS_SPLIT = [
  {
    title: "Where AI speeds things up",
    body: "Exploration, drafts, and synthesis. Cursor and Claude help me cover more ground before a review, not after the call is already made.",
  },
  {
    title: "Where craft still decides",
    body: "Problem framing, quality bars, accessibility, and system integrity. The test I use: what decision does this artifact unlock next week?",
  },
] as const;

export const LEADERSHIP_INTRO =
  "I coach craft and delivery together so quality holds as the team grows. Empathy and high bars both matter; standards have to travel without the same few seniors doing heroics every time.";

export const LEADERSHIP_PILLARS = [
  {
    title: "Craft and delivery, coached together",
    body: "1:1s on problem framing, reviews that raise interaction quality, and growth paths tied to what the product needs. At Appfire, co-leading 35+ designers, researchers, and writers meant mentorship as weekly practice, not a one-off workshop.",
  },
  {
    title: "Hiring bars that survive the merge",
    body: "As Head of Design at SoftwarePlant I grew a 16+ person team with clear hiring bars, design-system standards, and delivery rules. Those bars still held after the Appfire acquisition, when craft had to scale across products like BigPicture and 7pace.",
  },
  {
    title: "Critique culture that travels",
    body: "Shared intake, clearer decision rights, and critique that seniors can run without me in the room. Post-acquisition, the job was integrating craft, process, and culture so UX stayed aligned from sprint planning through executive reporting.",
  },
] as const;

export const LEADERSHIP_PRACTICES = [
  {
    step: "1:1s",
    detail: "Problem framing · trade-offs",
    beat: "Weekly coaching on the hard calls: scope, craft, and how to unblock the squad.",
  },
  {
    step: "Critique",
    detail: "Interaction quality · system fit",
    beat: "Reviews that raise the bar and leave designers owning the next pass.",
  },
  {
    step: "Growth paths",
    detail: "Tied to product needs",
    beat: "Seniority and scope follow roadmap gaps, not generic competency grids.",
  },
  {
    step: "Design ops",
    detail: "Intake · estimation · research ops",
    beat: "Figma standards, Dovetail rhythms, and estimation that product and engineering can plan around.",
  },
] as const;

/** Folded into LEADERSHIP_PILLARS; kept for NarrativeBlock consumers. */
export const MENTORING: NarrativeBlock[] = [
  {
    title: LEADERSHIP_PILLARS[0].title,
    body: LEADERSHIP_PILLARS[0].body,
  },
];

export const BUSINESS_IMPACT: NarrativeBlock[] = [
  {
    title: "Enterprise modules people actually used",
    body: "On BigPicture, design was judged by whether finance and PMs trusted what they saw, and whether leadership teams stuck with the workflows. OKRs, Financials, and Gantt were treated as product problems: adoption, support clarity, and speed of finding answers, not visual polish. The metrics above are the outcomes of that bar.",
  },
  {
    title: "Scale without diluting craft",
    body: "Those results needed a team that could keep the same bar as the portfolio grew. As Head of Design at SoftwarePlant I built a 16+ person craft org. After the Appfire acquisition I co-led 35+ designers, researchers, and writers across BigPicture, 7pace, and AI workstreams, with shared intake, estimation, research ops, and design-system rules so quality did not become the bottleneck.",
  },
  {
    title: "The same bar, shipped alone",
    body: "CostRadar.ai is the founder-side of that story. I designed and engineered a live profitability product end-to-end: true-net P&L, savings tracking, and an AI Profit Agent that only acts after Approve. It is early: 28 freemium users and one design partner, no paying customers yet. What I can show is the product, the decisions behind it, and what real usage is teaching me.",
  },
];

export type ImpactMetric = {
  value: string;
  label: string;
  /** Where it happened, so the number is never free-floating. */
  area: string;
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    value: "+47%",
    label: "More leadership teams using OKRs",
    area: "BigPicture OKRs · team outcome",
  },
  {
    value: "53→84%",
    label: "Financial module adoption in 3 months",
    area: "BigPicture Financials · team outcome",
  },
  {
    value: "-58%",
    label: "Fewer unclear financial reports",
    area: "BigPicture Financials · team outcome",
  },
  {
    value: "42% faster",
    label: "Finding information on the Gantt",
    area: "BigPicture Gantt · timed tasks, team outcome",
  },
  {
    value: "16+",
    label: "Design team grown as Head of Design",
    area: "SoftwarePlant · leadership",
  },
  {
    value: "35+",
    label: "UX people co-led at Appfire",
    area: "Appfire · leadership",
  },
];

export const IMPACT_NOTE =
  "Product metrics are team outcomes of the BigPicture product team at Appfire (design, product, and engineering together), not individual attribution. I am glad to walk through baselines, measurement windows, and exactly what I owned in an interview.";

export const CLOSING_CTA =
  "Thanks for reading. I am based in Poland and open to remote roles across the EU: Head of Design or Senior UX Manager (hands-on), or Lead Product Designer on AI-heavy products. Email is the fastest way to reach me.";
