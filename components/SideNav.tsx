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
  const [fadeLeft, setFadeLeft] = useState(false);
  const [fadeRight, setFadeRight] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const mobileListRef = useRef<HTMLUListElement>(null);
  const clickingRef = useRef(false);

  const updateIndicator = useCallback((id: string) => {
    const list = listRef.current;
    if (!list) return;
    const btn = list.querySelector<HTMLElement>(`[data-nav="${id}"]`);
    if (!btn) return;
    setIndicator({ top: btn.offsetTop, height: btn.offsetHeight });
  }, []);

  const updateFades = useCallback(() => {
    const el = mobileListRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setFadeLeft(el.scrollLeft > 4);
    setFadeRight(max > 4 && el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    updateIndicator(activeId);
  }, [activeId, updateIndicator]);

  useEffect(() => {
    const el = mobileListRef.current;
    if (!el) return;
    updateFades();
    const ro = new ResizeObserver(updateFades);
    ro.observe(el);
    window.addEventListener("resize", updateFades);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateFades);
    };
  }, [items, updateFades]);

  useEffect(() => {
    const el = mobileListRef.current;
    if (!el) return;
    const btn = el.querySelector<HTMLElement>(`[data-mobile-nav="${activeId}"]`);
    if (!btn) return;
    const btnLeft = btn.offsetLeft;
    const btnRight = btnLeft + btn.offsetWidth;
    const viewLeft = el.scrollLeft;
    const viewRight = viewLeft + el.clientWidth;
    const pad = 40;
    if (btnLeft < viewLeft + pad) {
      el.scrollTo({ left: Math.max(btnLeft - pad, 0), behavior: "smooth" });
    } else if (btnRight > viewRight - pad) {
      el.scrollTo({
        left: btnRight - el.clientWidth + pad,
        behavior: "smooth",
      });
    }
  }, [activeId]);

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
      {/* Mobile / tablet: sits in sticky chrome stack with Header */}
      <nav
        aria-label="Sections"
        className="border-b border-border bg-background py-3 lg:hidden"
      >
        <div className="relative -mx-1 px-1">
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background from-35% via-background/85 to-transparent transition-opacity duration-200 ${
              fadeLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background from-35% via-background/85 to-transparent transition-opacity duration-200 ${
              fadeRight ? "opacity-100" : "opacity-0"
            }`}
          />
          <ul
            ref={mobileListRef}
            onScroll={updateFades}
            className="flex gap-1.5 overflow-x-auto scroll-px-1 pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id} className="shrink-0">
                  <button
                    type="button"
                    data-mobile-nav={item.id}
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
        </div>
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
