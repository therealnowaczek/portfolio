import { EDUCATION, EXPERIENCE } from "@/lib/cv";
import { RichText } from "./RichText";

export function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="space-y-10">
      <div>
        <h2 id="experience-heading" className="section-title">
          Experience
        </h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
          From hands-on designer through Head of Design to Senior UX Manager at
          Appfire — plus CostRadar.ai, a product I built myself. I am looking
          for my next challenge. Roles and timeline here; product work and
          numbers are in Portfolio and Impact.
        </p>
        <ol className="space-y-6">
          {EXPERIENCE.map((item) => (
            <li
              key={`${item.years}-${item.company}`}
              className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
            >
              <span className="pt-0.5 text-sm text-muted tabular-nums">
                {item.years}
              </span>
              <div>
                <p className="text-[15px] font-medium text-foreground sm:text-base">
                  {item.role}{" "}
                  <span className="font-normal text-muted">
                    at <RichText>{item.company}</RichText>
                  </span>
                </p>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
                  <RichText>{item.blurb}</RichText>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="subsection-title">Education</h3>
        <ol className="space-y-4">
          {EDUCATION.map((item) => (
            <li
              key={item.years}
              className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
            >
              <span className="pt-0.5 text-sm text-muted tabular-nums">
                {item.years}
              </span>
              <div>
                <p className="text-[15px] font-medium text-foreground sm:text-base">
                  {item.school}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
