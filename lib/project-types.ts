export type ProjectStatus = "shipped" | "exploration";

export type ProjectMeta = {
  id: string;
  slug: string;
  title: string;
  oneLiner: string;
  badge: string;
  /** When true, omitted from gallery and modal navigation (content may remain on disk). */
  hidden?: boolean;
  status: ProjectStatus;
  role: string;
  platform: string;
  timeline: string;
  tags: string[];
  order: number;
  accent: string;
  styleLabel: string;
  screens: string[];
  portfolioSignals: string[];
};

export type ProcessStep = { n: number; label: string; text: string };
export type SolutionItem = { title: string; text: string };

export type CaseStudy = {
  snapshot: string;
  problem: string;
  goals: string[];
  constraints: string[];
  process: ProcessStep[];
  decisions: string[];
  solution: SolutionItem[];
  solutionNotes: string;
  designSystem: string;
  outcomes: string[];
};

export type Project = ProjectMeta & {
  coverPath: string | null;
  screenPaths: (string | null)[];
  mosaic: { colSpan: number; rowSpan: number };
  caseStudy: CaseStudy;
};

export type FilterId = "all" | "web" | "mobile" | "ai" | "fintech" | "social";

export const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
  { id: "fintech", label: "Fintech" },
  { id: "social", label: "Social" },
];

export function matchesFilter(project: Project, filter: FilterId): boolean {
  if (filter === "all") return true;
  const tags = project.tags.map((t) => t.toLowerCase());
  const platform = project.platform.toLowerCase();
  switch (filter) {
    case "web":
      return platform.includes("web");
    case "mobile":
      return (
        platform.includes("ios") ||
        platform.includes("android") ||
        tags.includes("ios") ||
        tags.includes("android")
      );
    case "ai":
      return tags.some((t) => t.includes("ai"));
    case "fintech":
      return tags.some(
        (t) => t.includes("fintech") || t.includes("fintech-adjacent"),
      );
    case "social":
      return (
        tags.some((t) => t.includes("social") || t.includes("community")) ||
        platform.includes("community")
      );
    default:
      return true;
  }
}
