import {
  EXPERTISE_GROUPS,
  LANGUAGES,
  TOOL_GROUPS,
  type SkillGroup,
} from "@/lib/cv";

function GroupCard({
  group,
  className = "",
}: {
  group: SkillGroup;
  className?: string;
}) {
  return (
    <article
      className={`flex flex-col rounded-[12px] border bg-white p-4 shadow-[0_1px_2px_rgba(9,30,66,0.05),0_8px_20px_-12px_rgba(9,30,66,0.16)] sm:p-5 ${
        group.accent ? "border-accent/25" : "border-border"
      } ${className}`}
    >
      <div className="mb-3">
        <h3
          className={`text-sm font-semibold tracking-tight ${
            group.accent ? "text-accent" : "text-foreground-secondary"
          }`}
        >
          {group.title}
        </h3>
        <p className="mt-1 text-xs leading-snug text-muted">{group.blurb}</p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className={
              group.accent
                ? "inline-flex items-center rounded-[8px] border border-accent/25 bg-background px-[0.65rem] py-[0.3rem] text-[0.8125rem] font-medium leading-[1.2] text-accent"
                : "pill"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ExpertiseTools() {
  return (
    <section aria-labelledby="expertise-heading" className="space-y-10">
      <div>
        <h2 id="expertise-heading" className="section-title">
          Skills
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
          What I lead with, and the tools I actually use to design and build.
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted">
          Capabilities
        </h3>
        <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {EXPERTISE_GROUPS.map((group, i) => (
            <GroupCard
              key={group.title}
              group={group}
              className={
                ["lg:col-span-5", "lg:col-span-4", "sm:col-span-2 lg:col-span-3"][i] ?? ""
              }
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted">
          Tools
        </h3>
        <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOL_GROUPS.map((group) => (
            <GroupCard key={group.title} group={group} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h3 className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">
          Languages
        </h3>
        <ul className="flex flex-wrap gap-2">
          {LANGUAGES.map((lang) => (
            <li key={lang} className="pill">
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
