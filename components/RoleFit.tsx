"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  ROLE_LENS_GROUPS,
  ROLE_LENSES,
  type RoleLens,
} from "@/lib/cv";
import { RichText } from "./RichText";

const KEYWORD_CAP = 5;

export function RoleFit() {
  const [activeId, setActiveId] = useState(ROLE_LENSES[0]?.id ?? "leader");
  const [entered, setEntered] = useState(false);
  const [fadeLeft, setFadeLeft] = useState(false);
  const [fadeRight, setFadeRight] = useState(false);
  const tablistRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
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

  const roleIndex = useMemo(() => {
    const map = new Map<string, number>();
    ROLE_LENSES.forEach((r, i) => map.set(r.id, i + 1));
    return map;
  }, []);

  const selectRole = useCallback((id: string) => {
    if (id === activeId) return;
    setEntered(false);
    setActiveId(id);
  }, [activeId]);

  const updateFades = useCallback(() => {
    const el = tablistRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setFadeLeft(el.scrollLeft > 4);
    setFadeRight(max > 4 && el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setEntered(true);
      return;
    }
    const t = window.setTimeout(() => setEntered(true), 40);
    return () => window.clearTimeout(t);
  }, [activeId]);

  useEffect(() => {
    const el = tablistRef.current;
    if (!el) return;
    updateFades();
    const ro = new ResizeObserver(updateFades);
    ro.observe(el);
    window.addEventListener("resize", updateFades);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateFades);
    };
  }, [updateFades]);

  useEffect(() => {
    const el = tablistRef.current;
    if (!el || window.matchMedia("(min-width: 1024px)").matches) return;
    const btn = el.querySelector<HTMLElement>(`[data-role-tab="${activeId}"]`);
    if (!btn) return;
    const elRect = el.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const btnLeft = btnRect.left - elRect.left + el.scrollLeft;
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

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const roles = ROLE_LENSES;
    const i = roles.findIndex((r) => r.id === activeId);
    if (i < 0) return;

    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      next = (i + 1) % roles.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      next = (i - 1 + roles.length) % roles.length;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = roles.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextId = roles[next]?.id;
    if (!nextId) return;
    selectRole(nextId);
    requestAnimationFrame(() => {
      tablistRef.current
        ?.querySelector<HTMLElement>(`[data-role-tab="${nextId}"]`)
        ?.focus();
    });
  };

  if (!lens) return null;

  return (
    <div className="min-w-0 max-w-full space-y-8">
      <div className="grid min-w-0 max-w-full gap-8 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[12.5rem_minmax(0,1fr)]">
        {/* Role chapters: numbered editorial list; not nav pills */}
        <nav
          aria-label="Role chapters"
          className="min-w-0 max-w-full lg:sticky lg:top-36 lg:self-start"
        >
          <div className="relative min-w-0 max-w-full -mx-1 px-1 lg:mx-0 lg:px-0">
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 max-w-[20%] bg-gradient-to-r from-background from-35% via-background/85 to-transparent transition-opacity duration-200 lg:hidden ${
                fadeLeft ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 max-w-[20%] bg-gradient-to-l from-background from-35% via-background/85 to-transparent transition-opacity duration-200 lg:hidden ${
                fadeRight ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              ref={tablistRef}
              role="tablist"
              onScroll={updateFades}
              className="flex w-full min-w-0 max-w-full items-start gap-5 overflow-x-auto overscroll-x-contain scroll-px-3 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:block lg:space-y-6 lg:overflow-visible lg:pb-0"
            >
              {grouped.map((group, gi) => (
                <div
                  key={group.id}
                  role="presentation"
                  className={`flex shrink-0 flex-col lg:block ${
                    gi > 0
                      ? "border-l border-border pl-5 lg:border-l-0 lg:pl-0" : ""
                  }`}
                >
                  <p
                    role="presentation"
                    className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted lg:mb-2 lg:text-[11px] lg:tracking-[0.06em]"
                  >
                    {group.title}
                  </p>
                  <div
                    role="presentation"
                    className="flex items-end gap-4 lg:flex-col lg:items-stretch lg:gap-0 lg:space-y-0.5"
                  >
                    {group.roles.map((role) => {
                      const on = role.id === activeId;
                      const n = roleIndex.get(role.id) ?? 0;
                      return (
                        <button
                          key={role.id}
                          type="button"
                          role="tab"
                          id={`role-tab-${role.id}`}
                          data-role-tab={role.id}
                          aria-selected={on}
                          aria-controls={panelId}
                          tabIndex={on ? 0 : -1}
                          onClick={() => selectRole(role.id)}
                          onKeyDown={onTabKeyDown}
                          className={`group/role relative flex shrink-0 items-baseline gap-1.5 pb-1.5 text-left transition-[color] duration-200 ease-out lg:w-full lg:border-l-2 lg:gap-2 lg:px-3 lg:py-1.5 lg:pb-1.5 ${
                            on
                              ? "text-accent lg:border-accent" : "text-muted hover:text-foreground lg:border-transparent"
                          }`}
                        >
                          <span
                            className={`font-semibold tabular-nums tracking-tight transition-colors duration-200 ease-out ${
                              on
                                ? "text-[11px] text-accent" : "text-[11px] text-muted/70 group-hover/role:text-muted"
                            }`}
                            aria-hidden
                          >
                            {String(n).padStart(2, "0")}
                          </span>
                          <span
                            className={`text-[13px] tracking-tight transition-[color,font-weight] duration-200 ease-out ${
                              on ? "font-medium" : "font-normal"
                            }`}
                          >
                            {role.label}
                          </span>
                          {on ? (
                            <span
                              className="absolute inset-x-0 bottom-0 h-px bg-accent lg:hidden"
                              aria-hidden
                            />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>

        <LensPanel
          key={lens.id}
          panelId={panelId}
          lens={lens}
          entered={entered}
          tabId={`role-tab-${lens.id}`}
        />
      </div>

      <p className="border-t border-border pt-6 text-sm text-muted">
        How I move from problem to ship:{" "}
        <a
          href="#process"
          className="font-medium text-accent transition-colors duration-200 ease-out hover:text-foreground"
        >
          Process
          <span aria-hidden className="ml-1 text-[13px]">
            →
          </span>
        </a>
      </p>
    </div>
  );
}

function LensPanel({
  lens,
  entered,
  panelId,
  tabId,
}: {
  lens: RoleLens;
  entered: boolean;
  panelId: string;
  tabId: string;
}) {
  const keywords = lens.keywords.slice(0, KEYWORD_CAP);

  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      className={`min-w-0 transition-[opacity,transform] duration-300 ease-out ${
        entered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <div className="space-y-8">
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
          <ul className="mt-3 space-y-2.5">
            {lens.proof.map((item) => (
              <li
                key={item}
                className="border-l border-accent/40 pl-3 text-sm leading-relaxed text-foreground-secondary"
              >
                <RichText>{item}</RichText>
              </li>
            ))}
          </ul>
        </div>

        {keywords.length > 0 ? (
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted"
            aria-label="Keywords"
          >
            {keywords.map((kw, i) => (
              <span key={kw}>
                {i > 0 ? (
                  <span className="mx-2.5 inline-block h-2.5 w-px translate-y-px bg-border align-middle" aria-hidden />
                ) : null}
                {kw}
              </span>
            ))}
          </p>
        ) : null}

        <div className="border-t border-border pt-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">
            First 90 days
          </h4>
          <ol className="mt-4 grid min-w-0 gap-4 overflow-x-clip sm:grid-cols-3 sm:gap-6">
            {lens.ninetyDays.map((item, i) => (
              <li key={item} className="relative min-w-0">
                {i < lens.ninetyDays.length - 1 ? (
                  <span
                    className="pointer-events-none absolute top-3 left-[2.25rem] hidden h-px right-0 bg-border sm:block"
                    aria-hidden
                  />
                ) : null}
                <span className="text-[11px] font-semibold tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground-secondary">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="pt-1">
          <a
            href={`mailto:pl.nowak.marcin@gmail.com?subject=${encodeURIComponent(
              `Role conversation: ${lens.label}`,
            )}`}
            className="inline-flex items-center gap-1.5 border-b border-accent/40 pb-0.5 text-sm font-medium text-accent transition-[border-color,color] duration-200 ease-out hover:border-accent hover:text-foreground"
          >
            Let’s talk about this role
            <span aria-hidden className="text-[13px]">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
