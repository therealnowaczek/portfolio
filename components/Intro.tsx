import {
  HERO_STATS,
  INTRO_HEADLINE,
  INTRO_LOOKING_FOR,
  INTRO_PARAGRAPHS,
  INTRO_SUBLINE,
} from "@/lib/cv";
import { RichText } from "./RichText";

export function Intro() {
  return (
    <section aria-labelledby="intro-heading">
      <div className="space-y-4">
        <h2
          id="intro-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {INTRO_HEADLINE}
        </h2>
        <p className="text-lg font-medium tracking-tight text-accent sm:text-xl">
          {INTRO_SUBLINE}
        </p>
        <div className="space-y-4 pt-2 text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
          {INTRO_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 40)}>
              <RichText>{p}</RichText>
            </p>
          ))}
        </div>
        <p className="border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-muted sm:text-[15px]">
          {INTRO_LOOKING_FOR}
        </p>
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
