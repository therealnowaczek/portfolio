import type { ReactNode } from "react";
import { SITE } from "@/lib/cv";

const PATTERN = /(CostRadar\.ai|CostRadar)/g;

type Props = {
  children: string;
  className?: string;
};

/** Turns CostRadar / CostRadar.ai mentions into outbound product links. */
export function RichText({ children, className }: Props) {
  const nodes = linkifyCostRadar(children);
  if (!className) return <>{nodes}</>;
  return <span className={className}>{nodes}</span>;
}

export function linkifyCostRadar(text: string): ReactNode[] {
  const parts = text.split(PATTERN);
  return parts.map((part, i) => {
    if (part === "CostRadar.ai" || part === "CostRadar") {
      return (
        <a
          key={`${part}-${i}`}
          href={SITE.costradar}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline decoration-accent/35 underline-offset-[3px] transition-colors duration-[160ms] ease-out hover:decoration-accent"
        >
          {part}
        </a>
      );
    }
    return <span key={`t-${i}`}>{part}</span>;
  });
}
