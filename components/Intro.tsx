import {
  HIGHLIGHTS,
  INTRO_HEADLINE,
  INTRO_PARAGRAPHS,
} from "@/lib/cv";
import { RichText } from "./RichText";

export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <h2 id="intro-heading" className="section-title mb-0">
          About
        </h2>
        <p className="text-xl font-medium tracking-tight text-foreground-secondary sm:text-2xl">
          {INTRO_HEADLINE}
        </p>
        <div className="space-y-4 text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
          {INTRO_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 40)}>
              <RichText>{p}</RichText>
            </p>
          ))}
        </div>
      </div>

      <div>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7">
          {HIGHLIGHTS.map((item) => (
            <article key={item.title}>
              <h3 className="text-sm font-semibold text-foreground-secondary">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                <RichText>{item.body}</RichText>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
