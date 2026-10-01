"use client";

type Props = {
  slug: string;
  onOpen: (slug: string) => void;
  children: React.ReactNode;
  className?: string;
};

const BASE =
  "inline-flex items-center gap-1.5 border-b border-accent/40 pb-0.5 text-left text-sm font-medium text-accent transition-[border-color,color] duration-200 ease-out hover:border-accent hover:text-foreground";

/** Inline text button that opens a case study modal. */
export function CaseLinkButton({ slug, onOpen, children, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={() => onOpen(slug)}
      className={`${BASE} ${className}`}
    >
      {children}
      <span aria-hidden className="text-[13px]">
        →
      </span>
    </button>
  );
}
