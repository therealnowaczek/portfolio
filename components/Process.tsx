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
    <section aria-labelledby="process-heading" className="max-w-3xl space-y-6">
      <div>
        <h2 id="process-heading" className="section-title">
          AI &amp; process
        </h2>
        <p className="text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
          {PROCESS_HEADLINE}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
          {PROCESS_INTRO}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {PROCESS_LINKS.map((link) => (
            <CaseLinkButton key={link.slug} slug={link.slug} onOpen={onOpen}>
              {link.title}
            </CaseLinkButton>
          ))}
        </div>
      </div>

      <ol ref={listRef} className="space-y-4 border-t border-border pt-6">
        {AGENTIC_PIPELINE.map((node, i) => (
          <li
            key={node.step}
            className={`grid grid-cols-[2rem_6.5rem_1fr] items-baseline gap-x-3 transition-[opacity,transform] duration-500 ease-out sm:grid-cols-[2rem_7.5rem_1fr] ${
              visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: visible ? `${i * 40}ms` : "0ms",
            }}
          >
            <span className="text-[11px] font-semibold tabular-nums text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground sm:text-[15px]">
              {node.step}
            </span>
            <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
              {node.beat}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
