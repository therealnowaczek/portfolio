import { INTRO_HEADLINE, INTRO_PARAGRAPHS, SITE } from "@/lib/cv";
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
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-foreground-secondary">
          <a href={`mailto:${SITE.email}`} className="underline-offset-2 hover:underline">
            {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="underline-offset-2 hover:underline">
            {SITE.phone}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            {SITE.linkedinLabel}
          </a>
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
