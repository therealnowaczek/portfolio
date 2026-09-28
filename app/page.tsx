import { Suspense } from "react";
import { getProjects } from "@/lib/projects";
import { PortfolioShell } from "@/components/PortfolioShell";

export default function HomePage() {
  const projects = getProjects();

  return (
    <Suspense fallback={<div className="p-10 text-sm text-muted">Loading…</div>}>
      <PortfolioShell projects={projects} />
    </Suspense>
  );
}
