"use client";

import { useEffect, useRef, useState } from "react";
import {
  LEADERSHIP_INTRO,
  LEADERSHIP_PILLARS,
  LEADERSHIP_PRACTICES,
} from "@/lib/cv";
import { RichText } from "./RichText";

export function Leadership() {
  const [visible, setVisible] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section aria-labelledby="leadership-heading" className="space-y-10">
      <div className="max-w-2xl space-y-3">
        <h2 id="leadership-heading" className="section-title">
          Leadership
        </h2>
        <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
          How I coach designers and keep quality high while the team grows.
        </p>
      </div>

      <p className="max-w-3xl text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
        <RichText>{LEADERSHIP_INTRO}</RichText>
      </p>

      <div className="grid gap-8 border-y border-border py-8 sm:grid-cols-3 sm:gap-8">
        {LEADERSHIP_PILLARS.map((block) => (
          <article key={block.title} className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.06em] text-accent">
              {block.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
              {block.body}
            </p>
          </article>
        ))}
      </div>

      <div>
        <h3 className="subsection-title">How the team runs</h3>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
          Four practices that keep coaching, critique, and ops in the same
          rhythm as delivery.
        </p>

        <ul
          ref={listRef}
          className="relative grid gap-0 sm:grid-cols-2"
        >
          {LEADERSHIP_PRACTICES.map((node, i) => (
            <li
              key={node.step}
              className={`relative border-t border-border pt-5 pb-8 pr-4 transition-[opacity,transform] duration-500 ease-out sm:pr-6 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
              style={{
                transitionDelay: visible ? `${i * 55}ms` : "0ms",
              }}
            >
              <div className="flex items-baseline gap-2.5">
                <span className="text-[11px] font-semibold tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-semibold tracking-tight text-foreground-secondary sm:text-lg">
                  {node.step}
                </span>
              </div>
              <p className="mt-1.5 pl-[1.85rem] text-[11px] font-medium uppercase tracking-[0.04em] text-muted">
                {node.detail}
              </p>
              <p className="mt-2.5 max-w-sm pl-[1.85rem] text-sm leading-relaxed text-muted sm:text-[15px]">
                {node.beat}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
