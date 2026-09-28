"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type NavItem = {
  id: string;
  label: string;
};

type Props = {
  items: NavItem[];
};

export function SideNav({ items }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });
  const listRef = useRef<HTMLUListElement>(null);
  const clickingRef = useRef(false);

  const updateIndicator = useCallback((id: string) => {
    const list = listRef.current;
    if (!list) return;
    const btn = list.querySelector<HTMLElement>(`[data-nav="${id}"]`);
    if (!btn) return;
    setIndicator({ top: btn.offsetTop, height: btn.offsetHeight });
  }, []);

  useEffect(() => {
    updateIndicator(activeId);
  }, [activeId, updateIndicator]);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const pickActive = () => {
      if (clickingRef.current) return;
      const marker = window.innerHeight * 0.28;
      let current = items[0]?.id ?? "";
      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top <= marker) current = section.id;
      }
      setActiveId(current);
    };

    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    clickingRef.current = true;
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      clickingRef.current = false;
    }, 700);
  };

  return (
    <>
      {/* Mobile / tablet: sticky under header */}
      <nav
        aria-label="Sections"
        className="sticky top-[4.25rem] z-40 -mx-4 mb-8 border-b border-border/80 bg-background/90 px-4 py-3 backdrop-blur-md sm:top-[4.5rem] sm:-mx-6 sm:px-6 lg:hidden"
      >
        <ul className="flex gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 ease-out ${
                    active
                      ? "bg-accent text-white"
                      : "bg-surface text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop: sticky left rail */}
      <nav
        aria-label="Sections"
        className="pointer-events-none fixed top-1/2 left-6 z-40 hidden w-36 -translate-y-1/2 lg:block xl:left-10 xl:w-40"
      >
        <div className="pointer-events-auto relative">
          <div
            className="absolute left-0 w-0.5 rounded-full bg-border"
            style={{ top: 4, bottom: 4 }}
            aria-hidden
          />
          <div
            className="absolute left-0 w-0.5 rounded-full bg-accent transition-[top,height] duration-300 ease-out"
            style={{ top: indicator.top + 6, height: Math.max(indicator.height - 12, 8) }}
            aria-hidden
          />
          <ul ref={listRef} className="relative space-y-0.5 pl-4">
            {items.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    data-nav={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full py-1.5 text-left text-[13px] transition-[color,transform,opacity] duration-200 ease-out ${
                      active
                        ? "translate-x-0.5 font-medium text-accent"
                        : "text-muted opacity-80 hover:translate-x-0.5 hover:text-foreground hover:opacity-100"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
