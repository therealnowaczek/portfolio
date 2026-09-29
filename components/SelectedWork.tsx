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
 * Editorial 12-col mosaic (filter=all).
 * Every desktop row sums to exactly 12; no CSS-grid holes.
 *
 * Lead pack (when present, in order): CostRadar 8 + DesignOS 4, OKRs 12.
 * Explorations tile via cycling row recipes; tails of 1–3 are fitted so nothing orphans.
 *
 * md (2-col): first card full-width; last half-row orphan stretches full.
 * Filtered views: even 6+6 pairs; odd last → full width.
 */

const FEATURED_ORDER = ["costradar", "designos", "okrs"] as const;

/** Exploration row recipes: each array sums to 12. */
const EXPLORATION_ROWS: number[][] = [
  [4, 4, 4],
  [8, 4],
  [5, 7],
  [4, 4, 4],
  [6, 6],
  [7, 5],
  [4, 8],
];

const PAIR_ROWS: number[][] = [
  [8, 4],
  [6, 6],
  [4, 8],
  [7, 5],
  [5, 7],
];

const TRIPLE_ROWS: number[][] = [
  [4, 4, 4],
  [5, 3, 4],
  [3, 5, 4],
];

/** Tailwind JIT needs complete class strings; no dynamic `lg:col-span-${n}`. */
const LG_COL: Record<number, string> = {
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  12: "lg:col-span-12",
};

function fitTail(n: number, seed: number): number[] {
  if (n <= 0) return [];
  if (n === 1) return [12];
  if (n === 2) return PAIR_ROWS[seed % PAIR_ROWS.length]!;
  return TRIPLE_ROWS[seed % TRIPLE_ROWS.length]!;
}

/** Gap-free column spans for N exploration cards. */
function tileColumns(count: number): number[] {
  const out: number[] = [];
  let left = count;
  let recipe = 0;

  while (left > 0) {
    if (left <= 3) {
      out.push(...fitTail(left, recipe));
      break;
    }

    const row = EXPLORATION_ROWS[recipe % EXPLORATION_ROWS.length]!;
    // Taking this row must not leave a single orphan cell.
    if (left - row.length === 1) {
      out.push(...fitTail(2, recipe));
      left -= 2;
    } else {
      out.push(...row);
      left -= row.length;
    }
    recipe += 1;
  }

  return out;
}

function featuredSpanPattern(featuredSlugs: string[]): number[] {
  const n = featuredSlugs.length;
  if (n === 0) return [];
  if (n === 1) return [12];
  if (n === 2) {
    return featuredSlugs[0] === "costradar" ? [8, 4] : [6, 6];
  }
  if (n === 3) {
    // Prefer CostRadar hero when present; otherwise even triple.
    if (featuredSlugs[0] === "costradar") return [8, 4, 12];
    return [4, 4, 4];
  }
  // Legacy four-up lead pack (if a fourth featured slug is re-added).
  return [8, 4, 6, 6];
}

/**
 * Column spans for the full visible list (filter=all), preserving order.
 * Featured slugs as a contiguous FEATURED_ORDER prefix get the lead pattern;
 * everything after tiles via exploration recipes.
 */
function mosaicColSpans(slugs: string[]): number[] {
  const orderedPrefix: string[] = [];
  for (const slug of FEATURED_ORDER) {
    if (slugs[orderedPrefix.length] === slug) orderedPrefix.push(slug);
    else break;
  }

  if (orderedPrefix.length === 0) {
    return tileColumns(slugs.length);
  }

  const head = featuredSpanPattern(orderedPrefix);
  const tail = tileColumns(slugs.length - orderedPrefix.length);
  return [...head, ...tail];
}

function spanClassFor(
  cols: number,
  opts: { mdFull: boolean; rowSpan?: number },
): string {
  const lg = LG_COL[cols] ?? "lg:col-span-4";
  const md = opts.mdFull ? "md:col-span-2" : "md:col-span-1";
  const row = opts.rowSpan === 1 ? "lg:row-span-1" : "lg:row-span-2";
  return `${md} ${lg} ${row}`;
}

export function SelectedWork({ projects, onOpen }: Props) {
  const [filter, setFilter] = useState<FilterId>("all");

  const visible = useMemo(
    () => projects.filter((p) => matchesFilter(p, filter)),
    [projects, filter],
  );

  const allSpans = useMemo(
    () => mosaicColSpans(visible.map((p) => p.slug)),
    [visible],
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
          CostRadar.ai (live product I shipped solo), enterprise cases (Design
          Ops, OKRs), plus product design across AI, fintech, and
          mobile. Open a card for the story, screens, and what I learned.
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
          const halfCount =
            filter === "all" ? Math.max(visible.length - 1, 0) : visible.length;
          const mdOrphan =
            isLast &&
            halfCount % 2 === 1 &&
            !(filter === "all" && index === 0 && visible.length === 1);

          let spanClass: string;
          if (filter === "all") {
            const cols = allSpans[index] ?? 4;
            spanClass = spanClassFor(cols, {
              mdFull: index === 0 || mdOrphan,
            });
          } else {
            const oddFilterOrphan = visible.length % 2 === 1 && isLast;
            spanClass = oddFilterOrphan
              ? "md:col-span-2 lg:col-span-12 lg:row-span-2"
              : "md:col-span-1 lg:col-span-6 lg:row-span-2";
          }

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
