"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Project } from "@/lib/project-types";
import { MENTORING, PROCESSES } from "@/lib/cv";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { Impact } from "./Impact";
import { SelectedWork } from "./SelectedWork";
import { Experience } from "./Experience";
import { ExpertiseTools } from "./ExpertiseTools";
import { NarrativeSection } from "./NarrativeSection";
import { Footer } from "./Footer";
import { ProjectModal } from "./ProjectModal";
import { RoleFit } from "./RoleFit";
import { SideNav, type NavItem } from "./SideNav";

type Props = {
  projects: Project[];
};

const NAV: NavItem[] = [
  { id: "about", label: "About" },
  { id: "fit", label: "Hire me for" },
  { id: "portfolio", label: "Portfolio" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "leadership", label: "Leadership" },
  { id: "process", label: "Process" },
  { id: "connect", label: "Connect" },
];

export function PortfolioShell({ projects }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const slug = searchParams.get("project");

  const [returnFocusSlug, setReturnFocusSlug] = useState<string | null>(null);

  const active = useMemo(
    () => (slug ? projects.find((p) => p.slug === slug) ?? null : null),
    [projects, slug],
  );

  const adjacent = useMemo(() => {
    if (!active) return { prev: null, next: null };
    const i = projects.findIndex((p) => p.slug === active.slug);
    return {
      prev: projects[(i - 1 + projects.length) % projects.length] ?? null,
      next: projects[(i + 1) % projects.length] ?? null,
    };
  }, [active, projects]);

  const setProject = useCallback(
    (nextSlug: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (nextSlug) params.set("project", nextSlug);
      else params.delete("project");
      const q = params.toString();
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const open = useCallback(
    (nextSlug: string) => {
      setReturnFocusSlug(nextSlug);
      setProject(nextSlug);
    },
    [setProject],
  );

  const close = useCallback(() => {
    const focusSlug = returnFocusSlug ?? active?.slug ?? null;
    setProject(null);
    requestAnimationFrame(() => {
      if (!focusSlug) return;
      const el = document.querySelector<HTMLElement>(
        `[data-project-card="${focusSlug}"]`,
      );
      el?.focus();
    });
  }, [active?.slug, returnFocusSlug, setProject]);

  useEffect(() => {
    if (slug && !projects.some((p) => p.slug === slug)) {
      setProject(null);
    }
  }, [slug, projects, setProject]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-4 sm:px-6 sm:pb-14 sm:pt-6 lg:px-8 lg:pl-48 xl:pl-52">
        <Header />
        <SideNav items={NAV} />
        <main id="main" className="mt-10 space-y-16 sm:mt-14 sm:space-y-20">
          {/* 1. Who — 30-second positioning */}
          <div id="about" className="scroll-mt-28 lg:scroll-mt-24">
            <Intro />
          </div>

          <div id="fit" className="scroll-mt-28 lg:scroll-mt-24">
            <RoleFit />
          </div>

          <div id="portfolio" className="scroll-mt-28 lg:scroll-mt-24">
            <SelectedWork projects={projects} onOpen={open} />
          </div>

          <div id="impact" className="scroll-mt-28 lg:scroll-mt-24">
            <Impact />
          </div>

          <div id="experience" className="scroll-mt-28 lg:scroll-mt-24">
            <Experience />
          </div>

          <div id="expertise" className="scroll-mt-28 lg:scroll-mt-24">
            <ExpertiseTools />
          </div>

          {/* 5. How they lead & operate — for manager/director scope */}
          <div id="leadership" className="scroll-mt-28 lg:scroll-mt-24">
            <NarrativeSection
              id="leadership-heading"
              title="Leadership & mentoring"
              lede="How I grow teams, coach seniors, and keep craft standards high while the org scales."
              blocks={MENTORING}
            />
          </div>

          <div id="process" className="scroll-mt-28 lg:scroll-mt-24">
            <NarrativeSection
              id="process-heading"
              title="Process & methods"
              lede="How design work moves from problem to shipped product — including where AI helps and where judgment stays human."
              blocks={PROCESSES}
            />
          </div>

          {/* 6. CTA */}
          <div id="connect" className="scroll-mt-28 lg:scroll-mt-24">
            <Footer />
          </div>
        </main>
      </div>

      {active ? (
        <ProjectModal
          project={active}
          prev={adjacent.prev}
          next={adjacent.next}
          onClose={close}
          onNavigate={open}
        />
      ) : null}
    </>
  );
}
