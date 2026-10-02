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
 * Explorations tile via cycling row recipes; tails of 1-3 are fitted so nothing orphans.
 *
 * md (2-col): first card full-width; last half-row orphan stretches full.
 * Filtered views: even 6+6 pairs; odd last → full width.
 */

const FEATURED_ORDER = ["costradar", "designos", "okrs", "gantt"] as const;

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

const GRID_CLASS =
  "grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[200px] lg:grid-cols-12 lg:auto-rows-[200px] lg:gap-5";

/** Number of leading featured cases that get the lead pattern. */
function leadCount(slugs: string[]): number {
  let n = 0;
  for (const slug of FEATURED_ORDER) {
    if (slugs[n] === slug) n += 1;
    else break;
  }
  return n;
}

/** md (2-col): optional featured first card is full-width; a lone last half-row stretches. */
function mdFullFor(index: number, length: number, hasFeaturedFirst: boolean) {
  const half = hasFeaturedFirst ? Math.max(length - 1, 0) : length;
  const isLast = index === length - 1;
  const orphan =
    isLast && half % 2 === 1 && !(hasFeaturedFirst && length === 1);
  return (hasFeaturedFirst && index === 0) || orphan;
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

  // Unfiltered view: lead cases first, then the rest. Weaker-fit work sits behind "Show more".
  const [expanded, setExpanded] = useState(false);
  const split = filter === "all" ? leadCount(visible.map((p) => p.slug)) : 0;
  const lead = visible.slice(0, split);
  const allRest = visible.slice(split);
  const hiddenCount = allRest.filter((p) => p.more).length;
  const rest = expanded ? allRest : allRest.filter((p) => !p.more);
  const restSpans = useMemo(() => tileColumns(rest.length), [rest.length]);

  return (
    <section aria-labelledby="work-heading" className="space-y-8">
      <div className="max-w-2xl">
        <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 id="work-heading" className="section-title mb-0">
            Selected work
          </h2>
          {filter !== "all" ? (
            <p className="text-sm text-muted">
              {FILTERS.find((f) => f.id === filter)?.label}
            </p>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
          Four projects I talk about most. CostRadar: an AI agent I built to
          hunt for margin leaks. DesignOS: a UX org that stopped running on
          heroics. Then two BigPicture surfaces where density was the whole
          problem. Below them, freelance product design since 2021, each
          ending with a satisfied client.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted sm:text-[13px]">
          Client and employer work is anonymized, so brands and names are
          created for presentation.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Filter projects"
        className="flex w-full min-w-0 max-w-full gap-1.5 overflow-x-auto overscroll-x-contain pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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

      {filter === "all" ? (
        <>
          {lead.length > 0 ? (
            <div className={GRID_CLASS}>
              {lead.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onOpen={onOpen}
                  featured={index === 0}
                  spanClass={spanClassFor(allSpans[index] ?? 4, {
                    mdFull: mdFullFor(index, lead.length, true),
                  })}
                />
              ))}
            </div>
          ) : null}

          {rest.length > 0 ? (
            <div className={GRID_CLASS}>
              {rest.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onOpen={onOpen}
                  spanClass={spanClassFor(restSpans[index] ?? 4, {
                    mdFull: mdFullFor(index, rest.length, false),
                  })}
                />
              ))}
            </div>
          ) : null}

          {hiddenCount > 0 ? (
            <div className="flex justify-center pt-1">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="rounded-[8px] border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-[160ms] hover:border-accent hover:text-accent"
              >
                {expanded ? "Show fewer projects" : `Show ${hiddenCount} more projects`}
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <div className={GRID_CLASS}>
          {visible.map((project, index) => {
            const oddFilterOrphan =
              visible.length % 2 === 1 && index === visible.length - 1;
            return (
              <ProjectCard
                key={project.slug}
                project={project}
                onOpen={onOpen}
                spanClass={
                  oddFilterOrphan
                    ? "md:col-span-2 lg:col-span-12 lg:row-span-2"
                    : "md:col-span-1 lg:col-span-6 lg:row-span-2"
                }
              />
            );
          })}
        </div>
      )}

      {visible.length === 0 ? (
        <p className="mt-2 text-sm text-muted">No projects match this filter.</p>
      ) : null}
    </section>
  );
}
