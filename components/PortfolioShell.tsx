"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Project } from "@/lib/project-types";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { Impact } from "./Impact";
import { SelectedWork } from "./SelectedWork";
import { Experience } from "./Experience";
import { ExpertiseTools } from "./ExpertiseTools";
import { Footer } from "./Footer";
import { Leadership } from "./Leadership";
import { MobileBottomBar } from "./MobileBottomBar";
import { Process } from "./Process";
import { ProjectModal } from "./ProjectModal";
import { RoleFit } from "./RoleFit";
import { SideNav, type NavItem } from "./SideNav";

type Props = {
  projects: Project[];
};

const NAV: NavItem[] = [
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "process", label: "Process" },
];

/** Legacy share URLs → anonymized gallery slugs */
const SLUG_ALIASES: Record<string, string> = {
  "bigpicture-okr": "okrs",
  "bigpicture-gantt": "gantt",
  okr: "okrs",
};

export function PortfolioShell({ projects }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const rawSlug = searchParams.get("project");
  const slug = rawSlug ? (SLUG_ALIASES[rawSlug] ?? rawSlug) : null;

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
    if (rawSlug && SLUG_ALIASES[rawSlug]) {
      setProject(SLUG_ALIASES[rawSlug]);
      return;
    }
    if (slug && !projects.some((p) => p.slug === slug)) {
      setProject(null);
    }
  }, [rawSlug, slug, projects, setProject]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto min-w-0 max-w-6xl overflow-x-clip px-4 pb-24 sm:px-6 sm:pb-14 lg:px-8 lg:pb-14 lg:pt-6">
        <div className="sticky top-0 z-50 -mx-4 mb-8 min-w-0 bg-background px-4 pt-4 sm:-mx-6 sm:px-6 sm:pt-6 lg:mx-0 lg:mb-10 lg:px-0 lg:pt-0">
          <Header />
          <SideNav items={NAV} />
        </div>
        <main id="main" className="mt-10 min-w-0 sm:mt-14">
          {/* 1. Who: intro copy + role chapters (scroll-spy stays Intro) */}
          <div id="about" className="min-w-0 max-w-full scroll-mt-36 space-y-10 sm:space-y-12">
            <Intro />
            <RoleFit />
          </div>

          <div id="portfolio" className="section-rule scroll-mt-36">
            <SelectedWork projects={projects} onOpen={open} />
          </div>

          <div id="impact" className="section-rule scroll-mt-36">
            <Impact />
          </div>

          <div id="experience" className="section-rule scroll-mt-36">
            <Experience />
          </div>

          <div id="expertise" className="section-rule scroll-mt-36">
            <ExpertiseTools />
          </div>

          {/* 5. How they lead & operate: for manager/director scope */}
          <div id="leadership" className="section-rule scroll-mt-36">
            <Leadership />
          </div>

          <div id="process" className="section-rule scroll-mt-36">
            <Process />
          </div>

          <div id="connect" className="mt-16 scroll-mt-36 sm:mt-20">
            <Footer />
          </div>
        </main>
      </div>

      <MobileBottomBar />

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
