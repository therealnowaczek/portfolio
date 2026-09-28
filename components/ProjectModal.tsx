"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import type { Project } from "@/lib/project-types";
import { ProjectPlaceholder } from "./ProjectPlaceholder";
import { Lightbox } from "./Lightbox";
import { ScreenFrame } from "./ScreenFrame";

type Props = {
  project: Project;
  prev: Project | null;
  next: Project | null;
  onClose: () => void;
  onNavigate: (slug: string) => void;
};

export function ProjectModal({
  project,
  prev,
  next,
  onClose,
  onNavigate,
}: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<{
    src: string | null;
    title: string;
  } | null>(null);

  const caseStudy = project.caseStudy;
  // Pure phone apps (Harbor, Folio, …). Nest is mixed — frames come from image ratio.
  const isPhoneProject =
    /ios|android/i.test(project.platform) &&
    !/web\s*desktop|desktop\s*web/i.test(project.platform);
  const isPhoneCover = /ios|android/i.test(project.platform);

  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    bodyRef.current?.scrollTo({ top: 0 });
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [project.slug]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox) setLightbox(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, onClose]);

  const trapFocus = useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab" || !panelRef.current) return;
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", trapFocus);
    return () => window.removeEventListener("keydown", trapFocus);
  }, [trapFocus]);

  const onBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/40 p-3 sm:p-6"
        role="presentation"
        onClick={onBackdrop}
      >
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative flex max-h-[min(960px,calc(100vh-1.5rem))] w-full max-w-[min(1240px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[10px] border border-border bg-white shadow-xl outline-none sm:max-h-[calc(100vh-2.5rem)]"
        >
          <div className="relative z-20 flex shrink-0 items-center justify-between gap-3 border-b border-border bg-white px-4 py-3 sm:px-6">
            <p className="truncate text-sm font-medium text-foreground">
              {project.title}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-[8px] px-3 py-1.5 text-sm font-medium text-muted transition-colors duration-[160ms] hover:bg-surface hover:text-foreground"
            >
              Close
            </button>
          </div>

          <div
            ref={bodyRef}
            className="min-h-0 flex-1 space-y-10 overflow-y-auto overscroll-contain px-4 py-6 sm:px-8 sm:py-8"
          >
            <header className="space-y-4">
              <div className="overflow-hidden rounded-[8px] border border-border bg-surface">
                {project.coverPath ? (
                  <ScreenFrame
                    src={project.coverPath}
                    alt={`${project.title} cover`}
                    defaultTall={isPhoneCover}
                    variant="cover"
                    priority
                  />
                ) : (
                  <ProjectPlaceholder
                    title={project.title}
                    accent={project.accent}
                    aspect="video"
                    className="rounded-none"
                  />
                )}
              </div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2
                    id={titleId}
                    className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-1.5 text-sm font-medium text-accent">
                    {project.badge}
                  </p>
                  <p className="mt-2 max-w-2xl text-[15px] text-muted sm:text-base">
                    {project.oneLiner}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
                    <span className="pill">{project.platform}</span>
                    <span className="pill">{project.role}</span>
                    <span className="pill">{project.timeline}</span>
                  </div>
                </div>
                <div
                  className="flex items-center gap-2 rounded-[8px] border border-border px-3 py-2"
                  title="Project accent"
                >
                  <span
                    className="h-5 w-5 rounded-full border border-border"
                    style={{ background: project.accent }}
                    aria-hidden
                  />
                  <span className="text-xs tabular-nums text-muted">
                    {project.accent}
                  </span>
                </div>
              </div>
            </header>

            <section aria-labelledby="snapshot-heading" className="space-y-3">
              <h3 id="snapshot-heading" className="section-title">
                Snapshot
              </h3>
              <p className="max-w-3xl text-[15px] leading-relaxed text-foreground-secondary">
                {caseStudy.snapshot}
              </p>
            </section>

            <section aria-labelledby="problem-heading" className="space-y-3">
              <h3 id="problem-heading" className="section-title">
                Problem
              </h3>
              <p className="max-w-3xl text-[15px] leading-relaxed text-foreground-secondary">
                {caseStudy.problem}
              </p>
            </section>

            <section aria-labelledby="goals-heading">
              <h3 id="goals-heading" className="section-title">
                Goals &amp; constraints
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-foreground">
                    Goals
                  </h4>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted">
                    {caseStudy.goals.map((g) => (
                      <li key={g} className="pl-3 border-l-2 border-border">
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-foreground">
                    Constraints
                  </h4>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted">
                    {caseStudy.constraints.map((c) => (
                      <li key={c} className="pl-3 border-l-2 border-border">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="process-heading">
              <h3 id="process-heading" className="section-title">
                Process
              </h3>
              <ol className="space-y-5">
                {caseStudy.process.map((step) => (
                  <li
                    key={step.n}
                    className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 sm:gap-x-5"
                  >
                    <span className="text-sm font-semibold tabular-nums text-accent">
                      {String(step.n).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {step.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted sm:text-[15px]">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="decisions-heading">
              <h3 id="decisions-heading" className="section-title">
                Key decisions
              </h3>
              <ul className="space-y-3">
                {caseStudy.decisions.map((d) => (
                  <li
                    key={d}
                    className="rounded-[8px] border border-border bg-surface/60 px-4 py-3 text-sm leading-relaxed text-foreground-secondary"
                    style={{ borderLeftWidth: 3, borderLeftColor: project.accent }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="solution-heading">
              <h3 id="solution-heading" className="section-title">
                Solution
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {caseStudy.solution.map((item, i) => {
                  const src = project.screenPaths[i] ?? null;
                  const defaultTall =
                    isPhoneProject ||
                    (project.slug === "nest" && i < 5);
                  return (
                    <button
                      key={item.title}
                      type="button"
                      className="overflow-hidden rounded-[8px] border border-border text-left transition-shadow duration-[160ms] hover:shadow-md"
                      onClick={() =>
                        setLightbox({ src, title: item.title })
                      }
                    >
                      {src ? (
                        <ScreenFrame
                          src={src}
                          alt={item.title}
                          defaultTall={defaultTall}
                          variant="thumb"
                        />
                      ) : (
                        <ProjectPlaceholder
                          title={item.title}
                          accent={project.accent}
                          aspect={defaultTall ? "tall" : "video"}
                          className="rounded-none"
                        />
                      )}
                      <div className="space-y-1 p-3">
                        <p className="text-sm font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="text-xs leading-relaxed text-muted">
                          {item.text}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
              {caseStudy.solutionNotes ? (
                <p className="mt-4 text-sm text-muted">{caseStudy.solutionNotes}</p>
              ) : null}
            </section>

            <section aria-labelledby="ds-heading" className="space-y-3">
              <h3 id="ds-heading" className="section-title">
                Design system notes
              </h3>
              <p className="max-w-3xl text-[15px] leading-relaxed text-foreground-secondary">
                {caseStudy.designSystem}
              </p>
            </section>

            <section aria-labelledby="outcomes-heading">
              <h3 id="outcomes-heading" className="section-title">
                Outcomes &amp; learnings
              </h3>
              <ul className="space-y-2">
                {caseStudy.outcomes.map((o) => (
                  <li
                    key={o}
                    className="rounded-[8px] border border-border px-4 py-2.5 text-sm leading-relaxed text-foreground-secondary"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="signals-heading">
              <h3 id="signals-heading" className="section-title">
                Portfolio signals
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.portfolioSignals.map((s) => (
                  <li key={s} className="pill">
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="relative z-20 flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-border bg-white px-4 py-3 sm:px-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-[8px] px-3 py-1.5 text-sm font-medium text-muted hover:bg-surface hover:text-foreground"
            >
              Close
            </button>
            <div className="flex gap-2">
              {prev ? (
                <button
                  type="button"
                  onClick={() => onNavigate(prev.slug)}
                  className="rounded-[8px] border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors duration-[160ms] hover:border-accent hover:text-accent"
                >
                  ← {prev.title}
                </button>
              ) : null}
              {next ? (
                <button
                  type="button"
                  onClick={() => onNavigate(next.slug)}
                  className="rounded-[8px] border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors duration-[160ms] hover:border-accent hover:text-accent"
                >
                  {next.title} →
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {lightbox ? (
        <Lightbox
          src={lightbox.src}
          title={lightbox.title}
          accent={project.accent}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </>
  );
}
