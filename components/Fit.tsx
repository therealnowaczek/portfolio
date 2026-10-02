import { FIT_INTRO, FIT_ROLES } from "@/lib/cv";
type Props = {
  onOpen: (slug: string) => void;
};

export function Fit({ onOpen }: Props) {
  return (
    <section aria-labelledby="fit-heading" className="space-y-6">
      <div className="max-w-2xl">
        <h2 id="fit-heading" className="section-title">
          Where I can help
        </h2>
        <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
          {FIT_INTRO}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-[auto_auto_1fr_auto]">
        {FIT_ROLES.map((role) => (
          <article
            key={role.id}
            className={`flex min-w-0 flex-col md:row-span-4 md:grid md:grid-rows-subgrid rounded-[12px] border bg-white p-5 shadow-[0_1px_2px_rgba(9,30,66,0.05),0_10px_28px_-12px_rgba(9,30,66,0.18)] ${
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
            <ul className="mt-5 divide-y divide-border">
              {role.proof.map((p) => {
                const row = "flex w-full items-start gap-3 py-3 text-left text-[13px] leading-snug";
                return (
                  <li key={p.text}>
                    {p.slug ? (
                      <button
                        type="button"
                        onClick={() => onOpen(p.slug!)}
                        className={`${row} group text-foreground-secondary transition-colors duration-200 hover:text-accent`}
                      >
                        <span className="flex-1">{p.text}</span>
                        <span
                          aria-hidden
                          className="text-accent transition-transform duration-200 group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </button>
                    ) : (
                      <p className={`${row} text-foreground-secondary`}>
                        <span className="flex-1">{p.text}</span>
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
