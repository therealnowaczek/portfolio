"use client";

import { useMemo, useState } from "react";
import {
  FILTERS,
  matchesFilter,
  type FilterId,
  type Project,
} from "@/lib/project-types";
import { ProjectCard } from "./ProjectCard";

type Props = {
  projects: Project[];
  onOpen: (slug: string) => void;
};

/**
 * 12-col mosaic (all / filter=all). Every row must sum to 12.
 * 11 projects → CostRadar featured large; concepts fill remaining mosaic.
 * md (2-col): featured full-width, everyone else half → 1 + 5 pairs.
 */
const SPAN: Record<string, string> = {
  costradar: "md:col-span-2 lg:col-span-7 lg:row-span-2",
  northline: "md:col-span-1 lg:col-span-5 lg:row-span-2",
  harbor: "md:col-span-1 lg:col-span-4 lg:row-span-2",
  circuit: "md:col-span-1 lg:col-span-4 lg:row-span-2",
  folio: "md:col-span-1 lg:col-span-4 lg:row-span-2",
  quorum: "md:col-span-1 lg:col-span-4 lg:row-span-2",
  pulse: "md:col-span-1 lg:col-span-4 lg:row-span-2",
  "atlas-cms": "md:col-span-1 lg:col-span-4 lg:row-span-2",
  nest: "md:col-span-1 lg:col-span-4 lg:row-span-2",
  "signal-rooms": "md:col-span-1 lg:col-span-4 lg:row-span-2",
  "ledgerly-studio": "md:col-span-1 lg:col-span-4 lg:row-span-2",
};

const DEFAULT_SPAN = "md:col-span-1 lg:col-span-4 lg:row-span-2";
const FILTER_SPAN = "md:col-span-1 lg:col-span-6 lg:row-span-2";
const FILTER_SPAN_LAST_ODD =
  "md:col-span-2 lg:col-span-12 lg:row-span-2";

export function SelectedWork({ projects, onOpen }: Props) {
  const [filter, setFilter] = useState<FilterId>("all");

  const visible = useMemo(
    () => projects.filter((p) => matchesFilter(p, filter)),
    [projects, filter],
  );

  return (
    <section aria-labelledby="work-heading" className="space-y-8">
      <div className="max-w-2xl">
        <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 id="work-heading" className="section-title mb-0">
            Portfolio
          </h2>
          {filter !== "all" ? (
            <p className="text-sm text-muted">
              {FILTERS.find((f) => f.id === filter)?.label}
            </p>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
          Selected work across AI, fintech, enterprise SaaS, and mobile. Open
          any piece for the full story, screens, and outcomes.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Filter projects"
        className="flex gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 rounded-[8px] px-3 py-1.5 text-sm font-medium transition-colors duration-[160ms] ease-out ${
                active
                  ? "bg-accent text-white"
                  : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[200px] lg:grid-cols-12 lg:auto-rows-[200px] lg:gap-5">
        {visible.map((project, index) => {
          const isLast = index === visible.length - 1;
          const oddFilterOrphan =
            filter !== "all" && visible.length % 2 === 1 && isLast;
          const spanClass =
            filter === "all"
              ? (SPAN[project.slug] ?? DEFAULT_SPAN)
              : oddFilterOrphan
                ? FILTER_SPAN_LAST_ODD
                : FILTER_SPAN;

          return (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={onOpen}
              featured={filter === "all" && index === 0}
              spanClass={spanClass}
            />
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-2 text-sm text-muted">No projects match this filter.</p>
      ) : null}
    </section>
  );
}
