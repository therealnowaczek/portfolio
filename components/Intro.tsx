import { HERO_STATS, INTRO_HEADLINE, INTRO_PARAGRAPHS } from "@/lib/cv";
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
