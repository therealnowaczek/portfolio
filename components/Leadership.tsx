import { LEADERSHIP_HEADLINE, LEADERSHIP_PILLARS } from "@/lib/cv";
import { CaseLinkButton } from "./CaseLinkButton";

type Props = {
  onOpen: (slug: string) => void;
};

export function Leadership({ onOpen }: Props) {
  return (
    <section aria-labelledby="leadership-heading" className="space-y-8">
      <div className="max-w-3xl">
        <h2 id="leadership-heading" className="section-title">
          Leadership
        </h2>
        <p className="text-lg font-medium leading-snug tracking-tight text-foreground-secondary sm:text-xl">
          {LEADERSHIP_HEADLINE}
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-3 sm:gap-8">
        {LEADERSHIP_PILLARS.map((block) => (
          <article key={block.title} className="flex min-w-0 flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-[0.06em] text-accent">
              {block.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
              {block.body}
            </p>
            {block.caseLink ? (
              <div className="mt-3">
                <CaseLinkButton slug={block.caseLink.slug} onOpen={onOpen}>
                  {block.caseLink.label}
                </CaseLinkButton>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
