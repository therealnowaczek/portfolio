"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AGENTIC_PIPELINE,
  ROLE_LENS_GROUPS,
  ROLE_LENSES,
  type RoleLens,
} from "@/lib/cv";
import { RichText } from "./RichText";

export function RoleFit() {
  const [activeId, setActiveId] = useState(ROLE_LENSES[0]?.id ?? "leader");
  const [entered, setEntered] = useState(false);
  const lens =
    ROLE_LENSES.find((r) => r.id === activeId) ?? ROLE_LENSES[0];

  const grouped = useMemo(
    () =>
      ROLE_LENS_GROUPS.map((g) => ({
        ...g,
        roles: ROLE_LENSES.filter((r) => r.group === g.id),
      })),
    [],
  );

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setEntered(true);
      return;
    }
    const t = window.setTimeout(() => setEntered(true), 40);
    return () => window.clearTimeout(t);
  }, [activeId]);

  if (!lens) return null;

  return (
    <section aria-labelledby="fit-heading" className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <h2 id="fit-heading" className="section-title">
          Hire me for
        </h2>
        <p className="text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
          Hiring for UX Leader / Head of Design, Product or Staff/Principal UX,
          Design Ops, Design Systems, or AI UX / Design Engineering? Each lens
          points at different proof — <RichText>Appfire</RichText> leadership,{" "}
          <RichText>BigPicture</RichText> craft, systems governance, or
          CostRadar as a shipped builder case.
        </p>
        <p className="text-[15px] leading-relaxed text-muted sm:text-base">
          Pick the seat closest to your JD. You&apos;ll see scoped proof and a
          practical first-90-days plan — not the same metrics recycled under
          every label.
        </p>
      </div>

      <div className="grid gap-4">
        {grouped.map((group) => (
          <div
            key={group.id}
            className="rounded-[10px] border border-border bg-surface/40 p-4 sm:p-5"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted">
              {group.title}
            </p>
            <div
              role="tablist"
              aria-label={group.title}
              className="flex flex-wrap gap-2"
            >
              {group.roles.map((role) => {
                const on = role.id === activeId;
                return (
                  <button
                    key={role.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => {
                      setEntered(false);
                      setActiveId(role.id);
                    }}
                    className={`rounded-[8px] px-3.5 py-2 text-sm font-medium transition-[background,color,transform,box-shadow] duration-200 ease-out ${
                      on
                        ? "bg-accent text-white shadow-[0_8px_24px_-12px_rgba(238,4,108,0.7)]"
                        : "bg-background text-foreground-secondary shadow-[inset_0_0_0_1px_var(--border)] hover:text-foreground"
                    }`}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <LensPanel key={lens.id} lens={lens} entered={entered} />

      <div className="overflow-hidden rounded-[10px] border border-border bg-surface/60 px-4 py-5 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.06em] text-muted">
          Agentic UX loop I bring into organizations
        </p>
        <ol className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {AGENTIC_PIPELINE.map((node, i) => (
            <li
              key={node.step}
              className="relative rounded-[8px] bg-background px-3 py-3 shadow-[inset_0_0_0_1px_var(--border)]"
            >
              <span className="text-[11px] font-semibold tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-sm font-semibold text-foreground-secondary">
                {node.step}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-muted">
                {node.detail}
              </p>
              {i < AGENTIC_PIPELINE.length - 1 ? (
                <span
                  className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-accent/40 lg:block"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LensPanel({ lens, entered }: { lens: RoleLens; entered: boolean }) {
  return (
    <div
      className={`grid gap-8 rounded-[12px] border border-border bg-background p-5 transition-[opacity,transform] duration-300 ease-out sm:p-7 lg:grid-cols-[1.2fr_0.8fr] ${
        entered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <div className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.06em] text-accent">
            {lens.eyebrow}
          </p>
          <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground-secondary sm:text-2xl">
            {lens.headline}
          </h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
            <RichText>{lens.pitch}</RichText>
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">
            Relevant proof
          </h4>
          <ul className="mt-2 space-y-2">
            {lens.proof.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-relaxed text-foreground-secondary"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span>
                  <RichText>{item}</RichText>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2" aria-label="Keywords">
          {lens.keywords.map((kw) => (
            <span
              key={kw}
              className="rounded-[8px] border border-accent/25 bg-accent/[0.06] px-2.5 py-1 text-xs font-medium text-accent"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>

      <aside className="flex flex-col rounded-[10px] bg-[#2d3748] p-5 text-white sm:p-6">
        <h4 className="text-xs font-semibold uppercase tracking-[0.06em] text-white/55">
          First 90 days
        </h4>
        <ol className="mt-4 flex-1 space-y-4">
          {lens.ninetyDays.map((item, i) => (
            <li key={item} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold">
                {i + 1}
              </span>
              <p className="pt-0.5 text-sm leading-relaxed text-white/90">
                {item}
              </p>
            </li>
          ))}
        </ol>
        <a
          href={`mailto:pl.nowak.marcin@gmail.com?subject=${encodeURIComponent(
            `Role conversation — ${lens.label}`,
          )}`}
          className="mt-6 inline-flex items-center justify-center rounded-[8px] bg-accent px-4 py-2.5 text-sm font-medium text-white transition-transform duration-200 ease-out hover:scale-[1.02]"
        >
          Let’s talk about this role
        </a>
      </aside>
    </div>
  );
}
