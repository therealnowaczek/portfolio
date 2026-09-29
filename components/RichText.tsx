import type { ReactNode } from "react";
import { SITE } from "@/lib/cv";

const LINK_CLASS =
  "font-medium text-accent underline decoration-accent/35 underline-offset-[3px] transition-colors duration-[160ms] ease-out hover:decoration-accent";

/** Longer tokens first so CostRadar.ai wins over CostRadar, etc. */
const PATTERN =
  /(CostRadar\.ai|CostRadar|costradar\.ai|BigPicture|Appfire|7pace|TVP Parlament|TVP 3)/g;

const HREF: Record<string, string> = {
  "CostRadar.ai": SITE.costradar,
  CostRadar: SITE.costradar,
  "costradar.ai": SITE.costradar,
  BigPicture: SITE.bigpicture,
  Appfire: SITE.appfire,
  "7pace": SITE.sevenpace,
  "TVP Parlament": SITE.tvpParlament,
  "TVP 3": SITE.tvp3,
};

type Props = {
  children: string;
  className?: string;
};

/** Turns known product / employer names into outbound links. */
export function RichText({ children, className }: Props) {
  const nodes = linkifyKnownNames(children);
  if (!className) return <>{nodes}</>;
  return <span className={className}>{nodes}</span>;
}

export function linkifyKnownNames(text: string): ReactNode[] {
  const parts = text.split(PATTERN);
  return parts.map((part, i) => {
    const href = HREF[part];
    if (href) {
      return (
        <a
          key={`${part}-${i}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          {part}
        </a>
      );
    }
    return <span key={`t-${i}`}>{part}</span>;
  });
}

/** @deprecated Use linkifyKnownNames */
export const linkifyCostRadar = linkifyKnownNames;
