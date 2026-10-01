import { FIT_INTRO, FIT_ROLES } from "@/lib/cv";
import { CaseLinkButton } from "./CaseLinkButton";

type Props = {
  onOpen: (slug: string) => void;
};

export function Fit({ onOpen }: Props) {
  return (
    <section aria-labelledby="fit-heading" className="space-y-6">
      <div className="max-w-2xl">
        <h2 id="fit-heading" className="section-title">
          Where I would be useful
        </h2>
        <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
          {FIT_INTRO}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {FIT_ROLES.map((role) => (
          <article
            key={role.id}
            className={`flex min-w-0 flex-col rounded-[12px] border bg-white p-5 shadow-[0_1px_2px_rgba(9,30,66,0.05),0_10px_28px_-12px_rgba(9,30,66,0.18)] ${
              role.preferred ? "border-accent/40" : "border-border"
            }`}
          >
            <p
              className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.06em] ${
                role.preferred ? "text-accent" : "text-muted"
              }`}
            >
              {role.tag}
            </p>
            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
              {role.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
              {role.pitch}
            </p>
            <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
              {role.proof.map((p) => (
                <li key={p.text} className="text-sm leading-relaxed text-muted">
                  {p.slug ? (
                    <CaseLinkButton slug={p.slug} onOpen={onOpen}>
                      {p.text}
                    </CaseLinkButton>
                  ) : (
                    p.text
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
