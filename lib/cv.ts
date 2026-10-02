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
    "Head of Design and Senior UX Manager based in Poland. Co-led a 35+ person UX org at Appfire (BigPicture, 7pace, design ops, research ops). Also works as a Lead Product Designer, and builds with AI: founder of CostRadar.ai, an early-stage profitability product with an Approve-gated AI agent.",
};

/** Hook: leadership claim, then the tension that makes people scroll. */
export const INTRO_HEADLINE =
  "I lead design teams and orchestrate AI.";

export const INTRO_SUBLINE =
  "Agents do the legwork across research, design, and code. People steer. Products ship.";

/** Proof first, then the titles a recruiter or ATS will match. */
export const INTRO_PARAGRAPHS = [
  "Until 2026 I was a Senior UX Manager at Appfire, where I co-led 35+ designers, researchers, and writers (14 reported to me directly) across BigPicture, 7pace, and our AI workstreams. Before that I was Head of Design at SoftwarePlant, where I grew the team to 16+ and walked it through the Appfire acquisition. Along the way I was also the lead designer behind BigPicture's OKRs, Gantt, and Financials.",
  "AI is part of how I work every day. I rolled out agentic workflows and design-to-code across a UX org, and I designed and built CostRadar.ai on my own: an early-stage profitability product where an AI agent hunts for margin leaks, cites its sources, and prepares a reversible fix for you to approve.",
];

export const INTRO_LOOKING_FOR =
  "Now looking for Head of Design or Senior UX Manager roles with a team and a product to own, or Lead Product Designer roles with real scope over AI products and design systems.";

export type HeroStat = {
  value: string;
  label: string;
};

/** Scale and scope only. Product outcomes live in the Impact section. */
export const HERO_STATS: HeroStat[] = [
  { value: "35+", label: "designers, researchers, and writers co-led at Appfire, 14 reporting to me directly" },
  { value: "16+", label: "design team I grew as Head of Design and carried through an acquisition" },
  { value: "15 yrs", label: "designing digital products, from a public broadcaster to an Atlassian Marketplace best-seller" },
  { value: "Live", label: "an AI product I designed and built solo: CostRadar.ai (early-stage)" },
];

export const EXPERIENCE_INTRO =
  "From a public broadcaster's web team to an Atlassian Marketplace best-seller, and now to an AI product I'm building on my own.";

export const EXPERIENCE: ExperienceItem[] = [
  {
    years: "2025 - Present",
    role: "Founder & AI Design Engineer",
    company: "CostRadar.ai",
    blurb:
      "Independent founder. A live, early-stage profitability product for multi-channel e-commerce (costradar.ai), with 28 freemium users and one design partner so far, and no paying customers yet. I designed and built it on my own: a true-net ledger, a savings tracker, and an AI Profit Agent that only changes things after you Approve.",
  },
  {
    years: "2023 - 2026",
    role: "Senior UX Manager",
    company: "Appfire",
    blurb:
      "After the acquisition my scope grew from one team to a multi-product org. I co-led 35+ designers, researchers, and writers (14 direct reports) across BigPicture, 7pace, and AI workstreams, up from the 16+ team I'd led as Head of Design. I ran design ops, estimation, Figma standards, research ops, and the AI rollout, and kept leading design on BigPicture itself. Team outcomes on BigPicture (see Impact): +47% OKR adoption, financial-module adoption up from 53% to 84% in 3 months, and 58% fewer unclear financial reports.",
  },
  {
    years: "2021 - Present",
    role: "Freelance Product Designer",
    company: "Independent (alongside staff roles)",
    blurb:
      "Product design for mobile apps, desktop products, and the web, from framing and UI through delivery. Most of the client work in this portfolio comes from here. It's anonymized, so brands and names are created for presentation.",
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
    blurb: "What I build with.",
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

/** Where I would be useful: three static cards; proofs link to the case behind the claim. */
export type FitProof = {
  text: string;
  /** Opens this project's case study when present. */
  slug?: string;
};

export type FitRole = {
  id: string;
  title: string;
  tag: string;
  preferred?: boolean;
  pitch: string;
  proof: FitProof[];
};

export const FIT_INTRO =
  "Three roles where I can help most. Each example links to the case behind it.";

export const FIT_ROLES: FitRole[] = [
  {
    id: "leader",
    title: "Head of Design / Senior UX Manager",
    tag: "Preferred",
    preferred: true,
    pitch:
      "A design team that product and engineering can plan around, with a lead who is happy to own the hardest product problems too.",
    proof: [
      { text: "Co-led 35+ people (14 direct reports) across a multi-product org", slug: "designos" },
      { text: "Grew a team to 16+ and held the hiring bar through an acquisition" },
    ],
  },
  {
    id: "product",
    title: "Lead Product Designer+",
    tag: "Also targeting",
    pitch:
      "One hard surface, owned end to end: dense enterprise UX that stays clear under load, and the design system around it.",
    proof: [
      { text: "Hierarchy under cognitive load: leadership OKRs", slug: "okrs" },
      { text: "Retrieval speed as a design constraint: program Gantt", slug: "gantt" },
    ],
  },
  {
    id: "ai",
    title: "AI UX / Design Engineering",
    tag: "Runs through both",
    pitch:
      "Agents that do the legwork, people who steer, and a designer who can build all of it.",
    proof: [
      { text: "An AI agent that finds margin leaks and prepares the fix, built on my own", slug: "costradar" },
      { text: "Agentic workflows rolled out across a UX org", slug: "designos" },
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
    beat: "Support themes, usage, constraints, and the real ask, before anyone opens Figma.",
  },
  {
    step: "Frame",
    detail: "Problem · constraints · bets",
    beat: "Name the decision, the constraints, and the bet. Wrong frame means wrong ship, just faster.",
  },
  {
    step: "Agent",
    detail: "Explore · synthesize · draft",
    beat: "Variants, flows, edge cases. I keep the frame and drop what doesn’t earn a review.",
  },
  {
    step: "Craft",
    detail: "Human judgment · system integrity",
    beat: "Quality bars, accessibility, and the design system stay non-negotiable.",
  },
  {
    step: "Ship",
    detail: "Design-to-code · real product",
    beat: "Pair early on states and performance. The deliverable is UI in the product, not a deck.",
  },
  {
    step: "Learn",
    detail: "KPIs · benchmarks · loops",
    beat: "What decision did this unlock, and what do we measure next?",
  },
];

export const PROCESS_HEADLINE =
  "AI covers the ground. People own the frame, the craft, and the call to ship.";

export const PROCESS_INTRO =
  "The same loop I rolled out across a UX org, and the one behind CostRadar. Cursor and Claude help me cover more ground before a review, never after the call is already made.";

export type CaseLink = {
  label: string;
  title: string;
  slug: string;
};

export const PROCESS_LINKS: CaseLink[] = [
  { label: "See it in a product", title: "CostRadar.ai", slug: "costradar" },
  { label: "See it in an org", title: "DesignOS", slug: "designos" },
];

export const LEADERSHIP_HEADLINE =
  "Leadership is making other people better at shipping.";

export const LEADERSHIP_STORY =
  "Clear bars, honest feedback, and a team that can decide without waiting for me in the room. Over the years I've seen the full range: growing a team, walking it through an acquisition, co-leading 35+ people, coaching when fourteen reported to me directly, and the messy stretches when the org chart stopped matching reality. So I trust the basics: hire well, coach weekly, make ops boring, and stay close enough to the craft that the bar is real.";


export type ImpactMetric = {
  value: string;
  label: string;
  /** Where it happened, so the number is never free-floating. */
  area: string;
};

export const IMPACT_INTRO =
  "On BigPicture, design worked when finance teams and PMs trusted what they saw and leadership teams kept using the workflow. Here is how that played out.";

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
    value: "100%",
    label: "Team adoption of DesignOS, across UX and the whole product trio",
    area: "Appfire · DesignOS · design, product, engineering",
  },
];

export const IMPACT_NOTE =
  "The BigPicture metrics are team outcomes from the product team at Appfire (design, product, and engineering together), not individual attribution. DesignOS adoption is the org I co-led. I'm happy to walk through baselines, measurement windows, and exactly what I owned in an interview.";

export const CLOSING_CTA =
  "If you're building a design org that has to move faster without lowering the bar, or an AI product that has to earn trust before it earns autonomy, I'd love to hear about it. I'm based in Poland. Email is the fastest way to reach me.";
