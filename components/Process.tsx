"use client";

import { useEffect, useRef, useState } from "react";
import {
  AGENTIC_PIPELINE,
  PROCESS_HEADLINE,
  PROCESS_INTRO,
  PROCESS_LINKS,
} from "@/lib/cv";
import { CaseLinkButton } from "./CaseLinkButton";

type Props = {
  onOpen: (slug: string) => void;
};

export function Process({ onOpen }: Props) {
  const [visible, setVisible] = useState(false);
  const listRef = useRef<HTMLOListElement>(null);

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
    <section aria-labelledby="process-heading" className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <h2 id="process-heading" className="section-title">
          AI &amp; process
        </h2>
        <p className="text-lg font-medium leading-snug tracking-tight text-foreground-secondary sm:text-xl">
          {PROCESS_HEADLINE}
        </p>
        <p className="text-[15px] leading-relaxed text-muted sm:text-base">
          {PROCESS_INTRO}
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 pt-1">
          {PROCESS_LINKS.map((link) => (
            <div key={link.slug} className="flex flex-col gap-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
                {link.label}
              </span>
              <CaseLinkButton slug={link.slug} onOpen={onOpen}>
                {link.title}
              </CaseLinkButton>
            </div>
          ))}
        </div>
      </div>

      <ol
        ref={listRef}
        className="relative grid gap-0 sm:grid-cols-2 lg:grid-cols-3"
      >
        {AGENTIC_PIPELINE.map((node, i) => (
          <li
            key={node.step}
            className={`relative pt-5 pb-8 pr-4 transition-[opacity,transform] duration-500 ease-out sm:pr-6 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{
              transitionDelay: visible ? `${i * 55}ms` : "0ms",
            }}
          >
            <div className="grid grid-cols-[1.5rem_1fr] items-baseline gap-x-2.5">
              <span className="text-[11px] font-semibold tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-semibold tracking-tight text-foreground-secondary sm:text-lg">
                {node.step}
              </span>
              <p className="col-start-2 mt-1.5 text-[11px] font-medium uppercase tracking-[0.04em] text-muted">
                {node.detail}
              </p>
              <p className="col-start-2 mt-2.5 max-w-sm text-sm leading-relaxed text-muted sm:text-[15px]">
                {node.beat}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
