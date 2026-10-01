import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import projectsJson from "@/data/projects.json";
import { withBasePath } from "@/lib/base-path";
import type {
  CaseStudy,
  ProcessStep,
  Project,
  ProjectMeta,
  SolutionItem,
} from "@/lib/project-types";

export type {
  CaseStudy,
  FilterId,
  ProcessStep,
  Project,
  ProjectMeta,
  SolutionItem,
} from "@/lib/project-types";
export { FILTERS, matchesFilter } from "@/lib/project-types";

const PUBLIC = path.join(process.cwd(), "public");
const CASES = path.join(process.cwd(), "content", "projects");

function resolveAsset(slug: string, name: string): string | null {
  for (const ext of ["webp", "jpg", "jpeg", "png", "svg"]) {
    const disk = path.join(PUBLIC, "projects", slug, `${name}.${ext}`);
    if (fs.existsSync(disk)) {
      return withBasePath(`/projects/${slug}/${name}.${ext}?v=webp1`);
    }
  }
  return null;
}

function resolveScreenPaths(slug: string): (string | null)[] {
  const paths: (string | null)[] = [];
  for (let i = 1; i <= 16; i++) {
    const p = resolveAsset(slug, `screen-${i}`);
    if (!p) break;
    paths.push(p);
  }
  return paths;
}

function mosaicFor(platform: string): { colSpan: number; rowSpan: number } {
  const p = platform.toLowerCase();
  if (p.includes("ios") || p.includes("android")) {
    if (p.includes("web")) return { colSpan: 4, rowSpan: 2 };
    return { colSpan: 3, rowSpan: 3 };
  }
  if (p.includes("docs") || p.includes("analytics")) {
    return { colSpan: 6, rowSpan: 2 };
  }
  return { colSpan: 6, rowSpan: 2 };
}

function stripMd(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function parseBullets(block: string): string[] {
  return block
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => stripMd(l.slice(2)));
}

function parseNumbered(block: string): ProcessStep[] {
  const steps: ProcessStep[] = [];
  for (const line of block.split("\n")) {
    const m = line.trim().match(/^(\d+)\.\s+\*\*(.+?)\*\*\s*[-–—:]\s*(.+)$/);
    if (m) {
      steps.push({ n: Number(m[1]), label: m[2], text: stripMd(m[3]) });
      continue;
    }
    const m2 = line.trim().match(/^(\d+)\.\s+\*\*(.+?)\*\*\s*(.+)$/);
    if (m2) {
      steps.push({
        n: Number(m2[1]),
        label: m2[2],
        text: stripMd(m2[3].replace(/^[-–—:]\s*/, "")),
      });
    }
  }
  return steps;
}

function parseSolution(block: string): { items: SolutionItem[]; notes: string } {
  const items: SolutionItem[] = [];
  const notes: string[] = [];
  for (const line of block.split("\n")) {
    const trimmed = line.trim();
    const m = trimmed.match(/^(\d+)\.\s+\*\*(.+?)\*\*\s*[-–—:]\s*(.+)$/);
    if (m) {
      items.push({ title: m[2], text: stripMd(m[3]) });
      continue;
    }
    if (trimmed && !trimmed.startsWith("#")) notes.push(stripMd(trimmed));
  }
  return { items, notes: notes.join(" ") };
}

function extractSection(body: string, heading: string): string {
  const re = new RegExp(
    `### ${heading}\\s*\\n([\\s\\S]*?)(?=\\n### |$)`,
    "i",
  );
  const m = body.match(re);
  return m?.[1]?.trim() ?? "";
}

function parseCaseStudy(body: string): CaseStudy {
  const goalsBlock = extractSection(body, "Goals & constraints");
  const goalsMatch = goalsBlock.match(
    /\*\*Goals\*\*\s*([\s\S]*?)(?=\*\*Constraints\*\*|$)/i,
  );
  const constraintsMatch = goalsBlock.match(/\*\*Constraints\*\*\s*([\s\S]*?)$/i);
  const solutionRaw = extractSection(body, "Solution");
  const { items: solution, notes: solutionNotes } = parseSolution(solutionRaw);

  return {
    snapshot: stripMd(extractSection(body, "Snapshot")),
    problem: stripMd(extractSection(body, "Problem")),
    goals: parseBullets(goalsMatch?.[1] ?? ""),
    constraints: parseBullets(constraintsMatch?.[1] ?? ""),
    process: parseNumbered(extractSection(body, "Process")),
    decisions: parseBullets(extractSection(body, "Key decisions")),
    solution,
    solutionNotes,
    designSystem: stripMd(extractSection(body, "Design system notes")),
    outcomes: parseBullets(extractSection(body, "Outcomes & learnings")),
  };
}

function loadCaseBody(slug: string): string {
  const file = path.join(CASES, `${slug}.md`);
  if (!fs.existsSync(file)) {
    throw new Error(`Missing case study: content/projects/${slug}.md`);
  }
  const { content } = matter(fs.readFileSync(file, "utf8"));
  return content;
}

export function getProjects(): Project[] {
  const metas = [...(projectsJson as ProjectMeta[])]
    .filter((meta) => !meta.hidden)
    .sort((a, b) => a.order - b.order);

  return metas.map((meta) => {
    const body = loadCaseBody(meta.slug);
    return {
      ...meta,
      coverPath: resolveAsset(meta.slug, "cover"),
      screenPaths: resolveScreenPaths(meta.slug),
      mosaic: mosaicFor(meta.platform),
      caseStudy: parseCaseStudy(body),
    };
  });
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export function getAdjacent(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const all = getProjects();
  const i = all.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: all[(i - 1 + all.length) % all.length] ?? null,
    next: all[(i + 1) % all.length] ?? null,
  };
}
