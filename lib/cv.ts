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
    "Head of Design and Senior UX Manager based in Poland, open to remote roles in the EU. Co-led a 35+ person UX org at Appfire (BigPicture, 7pace, design ops, research ops). Also works as a Lead Product Designer, and builds with AI: founder of CostRadar.ai, an early-stage profitability product with an Approve-gated AI agent.",
};

/** Hook: leadership claim, then the tension that makes people scroll. */
export const INTRO_HEADLINE =
  "I lead design teams, and I love taking a product from the first question all the way to shipped.";

export const INTRO_SUBLINE =
  "I also orchestrate AI: agents do the legwork across research, design, and code, and people steer.";

/** Proof first, then the titles a recruiter or ATS will match. */
export const INTRO_PARAGRAPHS = [
  "I'm a Senior UX Manager at Appfire, co-leading 35+ designers, researchers, and writers (14 report to me directly) across BigPicture, 7pace, and our AI workstreams. Before that I was Head of Design at SoftwarePlant, where I grew the team to 16+ and walked it through the Appfire acquisition. Along the way I was also the lead designer behind BigPicture's OKRs, Gantt, and Financials.",
  "AI is part of how I work every day. I rolled out agentic workflows and design-to-code across a UX org, and I designed and built CostRadar.ai on my own: an early-stage profitability product where an AI agent hunts for margin leaks, cites its sources, and prepares a reversible fix for you to approve.",
];

export const INTRO_LOOKING_FOR =
  "I'm looking for Head of Design or Senior UX Manager roles with a team and a product to own, or Lead Product Designer roles with real scope over AI products and design systems. Remote, EU.";

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
    beat: "Gather what matters before anyone opens Figma: support themes, usage, constraints, and the real ask.",
  },
  {
    step: "Frame",
    detail: "Problem · constraints · bets",
    beat: "Name the decision, the constraints, and the bet. If the frame is wrong, speed just ships the wrong thing faster.",
  },
  {
    step: "Agent",
    detail: "Explore · synthesize · draft",
    beat: "AI covers the ground: variants, flows, edge cases. I keep the frame and drop whatever doesn’t earn a review.",
  },
  {
    step: "Craft",
    detail: "Human judgment · system integrity",
    beat: "Quality bars, accessibility, and the design system stay non-negotiable. Judgment is the product.",
  },
  {
    step: "Ship",
    detail: "Design-to-code · real product",
    beat: "Pair with engineers early on states and performance. The deliverable isn’t a deck, it’s UI that lands in the product.",
  },
  {
    step: "Learn",
    detail: "KPIs · benchmarks · loops",
    beat: "Which decision did this unlock for next week, and what do we measure so the next loop starts smarter?",
  },
];

export const PROCESS_HEADLINE =
  "AI does the drafting. People own the frame, the craft, and the call to ship.";

export const PROCESS_INTRO =
  "This is the loop I rolled out across a UX org, and the rule behind the Approve button in CostRadar. Cursor and Claude help me cover more ground before a review, never after the call has already been made.";

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
  "We lost our VP and two fellow Senior Managers, and the team was cut in half. The 14 people who stayed now reported to me.";

export const LEADERSHIP_STORY =
  "The projects couldn't pause, so I held three things at once: continuity on BigPicture, 7pace, and the AI workstreams; the decisions a leadership team used to share; and a team that had just lost half of itself. Critique, intake, and every call with product and engineering ran through me. It's the part of leadership no org chart shows, and the part I trust myself with most.";

export type LeadershipPillar = {
  title: string;
  body: string;
  caseLink?: { label: string; slug: string };
};

export const LEADERSHIP_PILLARS: LeadershipPillar[] = [
  {
    title: "Hiring bars that survived an acquisition",
    body: "At SoftwarePlant I grew the team to 16+ with clear hiring bars, design-system standards, and delivery rules. When Appfire acquired us, those bars had to hold across products like BigPicture and 7pace. They did.",
  },
  {
    title: "Craft and delivery, coached together",
    body: "Weekly 1:1s on problem framing and trade-offs, reviews that raise interaction quality, and growth paths tied to what the product needs next. With 14 people reporting to me directly, coaching had to become a weekly habit, not a nice-to-have.",
  },
  {
    title: "Ops that engineering can plan against",
    body: "Intake with completeness scoring, velocity-based estimation, Figma standards, and research ops turned UX from local heroics into something engineering could plan around.",
    caseLink: { label: "Read the DesignOS case", slug: "designos" },
  },
];

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
  "If you're building a design org that has to move faster without lowering the bar, or an AI product that has to earn trust before it earns autonomy, I'd love to hear about it. I'm based in Poland and open to remote roles across the EU. Email is the fastest way to reach me.";
