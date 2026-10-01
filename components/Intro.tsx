import { withBasePath } from "@/lib/base-path";
import {
  HERO_STATS,
  INTRO_HEADLINE,
  INTRO_PARAGRAPHS,
  SITE,
} from "@/lib/cv";
import { RichText } from "./RichText";

export function Intro() {
  return (
    <section aria-labelledby="intro-heading">
      <div className="max-w-3xl space-y-4">
        <h2
          id="intro-heading"
          className="text-xl font-medium tracking-tight text-foreground-secondary sm:text-2xl"
        >
          {INTRO_HEADLINE}
        </h2>
        <div className="space-y-4 text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
          {INTRO_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 40)}>
              <RichText>{p}</RichText>
            </p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#portfolio"
            className="inline-flex h-10 items-center rounded-[8px] bg-accent px-4 text-sm font-semibold !text-white transition-opacity duration-[160ms] ease-out hover:opacity-90"
          >
            See selected work
          </a>
          <a
            href={withBasePath(SITE.cvPdf)}
            download={SITE.cvFilename}
            className="inline-flex h-10 items-center rounded-[8px] border border-border px-4 text-sm font-medium text-foreground transition-colors duration-[160ms] ease-out hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex h-10 items-center px-1 text-sm font-medium text-accent underline decoration-accent/35 underline-offset-[3px] transition-colors duration-[160ms] ease-out hover:decoration-accent"
          >
            Email me
          </a>
        </div>
      </div>

      <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="rounded-[8px] bg-surface px-4 py-3.5">
            <dt className="text-xl font-semibold tracking-tight text-accent tabular-nums sm:text-2xl">
              {stat.value}
            </dt>
            <dd className="mt-1 text-[13px] leading-snug text-foreground-secondary">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
