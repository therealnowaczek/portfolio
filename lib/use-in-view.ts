"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type Options = {
  /** Show as soon as mounted (above-the-fold). */
  eager?: boolean;
  rootMargin?: string;
  threshold?: number;
};

/** One-shot in-view flag. Respects prefers-reduced-motion. */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
): [RefObject<T | null>, boolean] {
  const { eager = false, rootMargin = "0px 0px -6% 0px", threshold = 0.12 } =
    options;
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    const el = ref.current;
    if (visible) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || eager) {
      setVisible(true);
      return;
    }

    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager, rootMargin, threshold, visible]);

  return [ref, visible];
}
