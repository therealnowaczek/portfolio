"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";

type Props = {
  children: ReactNode;
  className?: string;
  /** Animate on mount (hero / first section). */
  eager?: boolean;
  /** Extra delay in ms once visible. */
  delay?: number;
  as?: "div" | "section";
};

/** Fade + rise once when entering the viewport. */
export function Reveal({
  children,
  className = "",
  eager = false,
  delay = 0,
  as = "div",
}: Props) {
  const [ref, visible] = useInView<HTMLDivElement>({ eager });
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`.trim()}
      style={
        delay
          ? ({ ["--reveal-delay" as string]: `${delay}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
