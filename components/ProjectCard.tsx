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
};

export function ProjectCard({ project, onOpen, spanClass, featured = false }: Props) {
  const activate = () => onOpen(project.slug);

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      data-project-card={project.slug}
      aria-label={`Open project: ${project.title}`}
      onClick={activate}
      onKeyDown={onKeyDown}
      className={`group relative cursor-pointer overflow-hidden rounded-[10px] border border-transparent bg-white outline-none transition-all duration-[160ms] ease-out hover:-translate-y-0.5 hover:border-accent/40 focus-visible:border-accent ${spanClass}`}
      style={
        {
          ["--project-accent" as string]: project.accent,
        }
      }
    >
      <div className="relative h-full min-h-[200px] overflow-hidden rounded-[10px] bg-surface">
        {project.coverPath ? (
          <ProjectImage
            src={project.coverPath}
            alt={`${project.title} cover`}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[220ms] ease-out group-hover:scale-[1.03]"
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
          className={`absolute inset-x-0 bottom-0 ${
            featured ? "p-4 sm:p-5" : "p-3.5 sm:p-4"
          }`}
        >
          <h3
            className={`font-semibold tracking-tight text-white drop-shadow-sm ${
              featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-1.5 text-white/90 ${
              featured
                ? "line-clamp-3 text-sm leading-snug sm:text-[15px]"
                : "line-clamp-2 text-sm leading-snug sm:line-clamp-3"
            }`}
          >
            {project.oneLiner}
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-100 bg-[var(--project-accent)] opacity-90 transition-opacity duration-[160ms] ease-out group-hover:opacity-100"
          aria-hidden
        />
      </div>
    </article>
  );
}
