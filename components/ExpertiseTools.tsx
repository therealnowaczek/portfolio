import {
  EXPERTISE_GROUPS,
  LANGUAGES,
  TOOL_GROUPS,
  type SkillGroup,
} from "@/lib/cv";

function GroupCard({ group }: { group: SkillGroup }) {
  return (
    <article
      className={`flex h-full flex-col rounded-[10px] border p-4 sm:p-5 ${
        group.accent
          ? "border-accent/25 bg-accent/[0.04]"
          : "border-border bg-surface/50"
      }`}
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
      <ul className="mt-auto flex flex-wrap gap-2">
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
          Expertise
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
          Grouped the way hiring conversations usually go — leadership, craft,
          AI, then the ops that help it scale.
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted">
          Capabilities
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {EXPERTISE_GROUPS.map((group) => (
            <GroupCard key={group.title} group={group} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted">
          Tools
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TOOL_GROUPS.map((group) => (
            <GroupCard key={group.title} group={group} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
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
