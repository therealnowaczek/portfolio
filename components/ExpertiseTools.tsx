import {
  EXPERTISE_GROUPS,
  LANGUAGES,
  TOOL_GROUPS,
  type SkillGroup,
} from "@/lib/cv";

function SkillRow({ group }: { group: SkillGroup }) {
  return (
    <div className="grid gap-1 border-t border-border py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:py-3.5">
      <div>
        <h3
          className={`text-sm font-semibold tracking-tight ${
            group.accent ? "text-accent" : "text-foreground"
          }`}
        >
          {group.title}
        </h3>
        <p className="mt-0.5 text-xs leading-snug text-muted">{group.blurb}</p>
      </div>
      <p className="text-sm leading-relaxed text-foreground-secondary sm:text-[15px]">
        {group.items.join(" · ")}
      </p>
    </div>
  );
}

export function ExpertiseTools() {
  return (
    <section aria-labelledby="expertise-heading" className="max-w-3xl space-y-8">
      <div>
        <h2 id="expertise-heading" className="section-title">
          Skills
        </h2>
        <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
          What I lead with, and the tools I actually use to design and build.
        </p>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">
          Capabilities
        </h3>
        <div className="mt-1 border-b border-border">
          {EXPERTISE_GROUPS.map((group) => (
            <SkillRow key={group.title} group={group} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">
          Tools
        </h3>
        <div className="mt-1 border-b border-border">
          {TOOL_GROUPS.map((group) => (
            <SkillRow key={group.title} group={group} />
          ))}
        </div>
      </div>

      <p className="text-sm text-muted">
        <span className="font-medium text-foreground-secondary">Languages</span>
        <span className="mx-2 text-border">·</span>
        {LANGUAGES.join(" · ")}
      </p>
    </section>
  );
}
