import { INTRO_HEADLINE, INTRO_PARAGRAPHS } from "@/lib/cv";
import { RichText } from "./RichText";

export function Intro() {
  return (
    <section aria-labelledby="intro-heading">
      <div className="max-w-3xl space-y-4">
        <h2 id="intro-heading" className="section-title mb-0">
          Summary
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
    </section>
  );
}
