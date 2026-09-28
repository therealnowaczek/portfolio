import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const projectsPath = path.join(root, "data", "projects.json");
const sourcePath = path.join(root, "content", "case-studies-10.md");
const outDir = path.join(root, "content", "projects");

type ProjectMeta = {
  slug: string;
  title: string;
  oneLiner: string;
  badge: string;
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

const projects = JSON.parse(fs.readFileSync(projectsPath, "utf8")) as ProjectMeta[];
const source = fs.readFileSync(sourcePath, "utf8");

const blocks = source.split(/^## \d+\. /m).slice(1);

fs.mkdirSync(outDir, { recursive: true });

for (const block of blocks) {
  const firstLine = block.split("\n")[0] ?? "";
  const title = firstLine.split(" - ")[0]?.trim();
  const project = projects.find((p) => p.title === title);
  if (!project) {
    console.warn(`No project match for title: ${title}`);
    continue;
  }

  const bodyStart = block.indexOf("### Snapshot");
  const galleryStart = block.indexOf("### Gallery assets");
  if (bodyStart === -1) {
    console.warn(`No Snapshot for ${project.slug}`);
    continue;
  }

  const bodyEnd = galleryStart === -1 ? block.length : galleryStart;
  const body = block.slice(bodyStart, bodyEnd).trim() + "\n";

  const frontmatter = `---
slug: ${project.slug}
title: ${JSON.stringify(project.title)}
oneLiner: ${JSON.stringify(project.oneLiner)}
badge: ${JSON.stringify(project.badge)}
role: ${JSON.stringify(project.role)}
platform: ${JSON.stringify(project.platform)}
timeline: ${JSON.stringify(project.timeline)}
tags:
${project.tags.map((t) => `  - ${JSON.stringify(t)}`).join("\n")}
order: ${project.order}
accent: ${JSON.stringify(project.accent)}
styleLabel: ${JSON.stringify(project.styleLabel)}
screens:
${project.screens.map((s) => `  - ${JSON.stringify(s)}`).join("\n")}
portfolioSignals:
${project.portfolioSignals.map((s) => `  - ${JSON.stringify(s)}`).join("\n")}
---

`;

  fs.writeFileSync(path.join(outDir, `${project.slug}.md`), frontmatter + body);
  console.log(`Wrote ${project.slug}.md`);
}

console.log(`Done. ${projects.length} projects.`);
