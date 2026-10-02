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
import { RichText } from "./RichText";

type Props = {
  project: Project;
  prev: Project | null;
  next: Project | null;
  onClose: () => void;
  onNavigate: (slug: string) => void;
};

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="mt-3 space-y-2.5">
      {items.map((item, i) => (
        <li
          key={item}
          className="grid grid-cols-[1.35rem_1fr] items-baseline gap-x-2 text-[15px] leading-relaxed text-foreground-secondary"
        >
          <span className="text-[11px] font-semibold tabular-nums text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

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
              aria-label="Close"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] text-muted transition-colors duration-[160ms] hover:bg-surface hover:text-foreground"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3.5 3.5l9 9M12.5 3.5l-9 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
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
              <div className="max-w-3xl">
                <h2
                  id={titleId}
                  className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                >
                  {project.title}
                </h2>
                <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                  <span>
                    {[project.platform, project.role, project.timeline].join(
                      " · ",
                    )}
                  </span>
                  {project.slug === "costradar" ? (
                    <>
                      <span aria-hidden className="text-border">
                        ·
                      </span>
                      <a
                        href="https://costradar.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-accent underline-offset-2 hover:underline"
                      >
                        costradar.ai
                      </a>
                    </>
                  ) : null}
                </p>
                {project.slug !== "costradar" ? (
                  <p className="mt-2 text-xs text-muted">
                    Anonymized for presentation: brand and names are invented.
                  </p>
                ) : null}
                {caseStudy.snapshot ? (
                  <p className="mt-5 text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
                    <RichText>{caseStudy.snapshot}</RichText>
                  </p>
                ) : (
                  <p className="mt-5 text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
                    {project.oneLiner}
                  </p>
                )}
              </div>
            </header>

            {caseStudy.outcomes.length > 0 ? (
              <section aria-labelledby="outcomes-heading" className="max-w-3xl">
                <h3
                  id="outcomes-heading"
                  className="text-sm font-semibold tracking-tight text-foreground"
                >
                  Results
                </h3>
                <NumberedList items={caseStudy.outcomes} />
              </section>
            ) : null}

            <section aria-labelledby="problem-heading" className="max-w-3xl space-y-3">
              <h3
                id="problem-heading"
                className="text-sm font-semibold tracking-tight text-foreground"
              >
                Problem
              </h3>
              <p className="text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
                <RichText>{caseStudy.problem}</RichText>
              </p>
            </section>

            {(caseStudy.goals.length > 0 || caseStudy.constraints.length > 0) && (
              <section
                aria-labelledby="goals-heading"
                className="max-w-3xl grid gap-8 sm:grid-cols-2"
              >
                {caseStudy.goals.length > 0 ? (
                  <div>
                    <h3
                      id="goals-heading"
                      className="text-sm font-semibold tracking-tight text-foreground"
                    >
                      Goals
                    </h3>
                    <NumberedList items={caseStudy.goals} />
                  </div>
                ) : null}
                {caseStudy.constraints.length > 0 ? (
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-foreground">
                      Limits
                    </h3>
                    <NumberedList items={caseStudy.constraints} />
                  </div>
                ) : null}
              </section>
            )}

            {caseStudy.process.length > 0 ? (
              <section aria-labelledby="process-heading" className="max-w-3xl">
                <h3
                  id="process-heading"
                  className="text-sm font-semibold tracking-tight text-foreground"
                >
                  How I worked
                </h3>
                <ol className="mt-4 space-y-4">
                  {caseStudy.process.map((step) => (
                    <li
                      key={step.n}
                      className="grid grid-cols-[1.5rem_1fr] items-baseline gap-x-2"
                    >
                      <span className="text-[11px] font-semibold tabular-nums text-accent">
                        {String(step.n).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {step.label}
                        </p>
                        <p className="mt-1 text-[15px] leading-relaxed text-muted">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            {caseStudy.decisions.length > 0 ? (
              <section aria-labelledby="decisions-heading" className="max-w-3xl">
                <h3
                  id="decisions-heading"
                  className="text-sm font-semibold tracking-tight text-foreground"
                >
                  Decisions
                </h3>
                <NumberedList items={caseStudy.decisions} />
              </section>
            ) : null}

            {caseStudy.solution.length > 0 ? (
              <section aria-labelledby="solution-heading">
                <h3
                  id="solution-heading"
                  className="text-sm font-semibold tracking-tight text-foreground"
                >
                  Screens
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {caseStudy.solution.map((item, i) => {
                    const src = project.screenPaths[i] ?? null;
                    const defaultTall =
                      isPhoneProject || (project.slug === "nest" && i < 5);
                    return (
                      <button
                        key={item.title}
                        type="button"
                        className="group overflow-hidden rounded-[8px] border border-border text-left transition-colors duration-[160ms] hover:border-foreground/20"
                        onClick={() => setLightbox({ src, title: item.title })}
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
                          <p className="text-sm leading-relaxed text-muted">
                            {item.text}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            ) : null}

            {caseStudy.designSystem ? (
              <section aria-labelledby="ds-heading" className="max-w-3xl">
                <h3
                  id="ds-heading"
                  className="text-sm font-semibold tracking-tight text-foreground"
                >
                  Built with
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {caseStudy.designSystem}
                </p>
              </section>
            ) : null}
          </div>

          <div className="relative z-20 flex shrink-0 flex-wrap items-center justify-end gap-2 border-t border-border bg-white px-4 py-3 sm:px-6">
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
