"use client";

import type { KeyboardEvent } from "react";
import type { Project } from "@/lib/project-types";
import { ProjectPlaceholder } from "./ProjectPlaceholder";
import { ProjectImage } from "./ProjectImage";

type Props = {
  project: Project;
  onOpen: (slug: string) => void;
  spanClass: string;
  featured?: boolean;
  /** When set, card plays a staggered entrance. */
  reveal?: boolean;
  revealDelayMs?: number;
};

export function ProjectCard({
  project,
  onOpen,
  spanClass,
  featured = false,
  reveal,
  revealDelayMs = 0,
}: Props) {
  const activate = () => onOpen(project.slug);

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
    }
  };

  const revealClass =
    reveal === undefined
      ? ""
      : reveal
        ? "reveal-item reveal-item-in"
        : "reveal-item";

  return (
    <article
      role="button"
      tabIndex={0}
      data-project-card={project.slug}
      aria-label={`Open project: ${project.title}`}
      onClick={activate}
      onKeyDown={onKeyDown}
      className={`group relative min-h-[240px] cursor-pointer overflow-hidden rounded-[10px] border border-transparent bg-white outline-none transition-[transform,border-color,box-shadow] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-accent/40 focus-visible:border-accent md:min-h-0 ${spanClass} ${revealClass}`}
      style={
        {
          ["--project-accent" as string]: project.accent,
          ...(reveal !== undefined
            ? { ["--reveal-item-delay" as string]: `${revealDelayMs}ms` }
            : null),
        }
      }
    >
      <div className="relative h-full min-h-[240px] overflow-hidden rounded-[10px] bg-surface md:min-h-0">
        {project.coverPath ? (
          <ProjectImage
            src={project.coverPath}
            alt={`${project.title} cover`}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <ProjectPlaceholder
            title={project.title}
            accent={project.accent}
            aspect="video"
            className="h-full min-h-[200px] rounded-none"
            captionClassName="opacity-0"
          />
        )}

        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-[160ms] ease-out"
          style={{
            background: `linear-gradient(
              to top,
              color-mix(in srgb, var(--project-accent) 82%, #111111) 0%,
              color-mix(in srgb, var(--project-accent) 38%, transparent) 48%,
              transparent 78%
            )`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply transition-opacity duration-[160ms] ease-out group-hover:opacity-65 group-focus-visible:opacity-65"
          style={{
            background: `linear-gradient(
              135deg,
              color-mix(in srgb, var(--project-accent) 40%, transparent) 0%,
              transparent 55%
            )`,
          }}
          aria-hidden
        />

        <div
          className={`absolute inset-x-0 bottom-0 z-10 ${
            featured
              ? "px-4 pb-5 pt-10 sm:px-5 sm:pb-5 sm:pt-12"
              : "px-3.5 pb-4 pt-8 sm:px-4 sm:pb-4 sm:pt-10"
          }`}
        >
          <h3
            className={`font-semibold tracking-tight text-white drop-shadow-sm ${
              featured ? "text-lg sm:text-2xl" : "text-base sm:text-lg"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-1 text-white/90 ${
              featured
                ? "line-clamp-2 text-sm leading-snug sm:line-clamp-3 sm:text-[15px]"
                : "line-clamp-2 text-sm leading-snug"
            }`}
          >
            {project.oneLiner}
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 z-10 h-0.5 w-full origin-left scale-x-100 bg-[var(--project-accent)] opacity-90 transition-opacity duration-[160ms] ease-out group-hover:opacity-100"
          aria-hidden
        />
      </div>
    </article>
  );
}
