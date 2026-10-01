import { IMPACT_INTRO, IMPACT_METRICS, IMPACT_NOTE } from "@/lib/cv";

export function Impact() {
  return (
    <section aria-labelledby="impact-heading" className="space-y-8">
      <div>
        <h2 id="impact-heading" className="section-title">
          Impact
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
          {IMPACT_INTRO}
        </p>
      </div>

      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {IMPACT_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[8px] bg-surface px-4 py-4"
          >
            <dt className="text-2xl font-semibold tracking-tight text-accent tabular-nums">
              {metric.value}
            </dt>
            <dd className="mt-1.5 text-sm leading-snug text-foreground-secondary">
              {metric.label}
            </dd>
            <dd className="mt-1 text-[11px] font-medium uppercase tracking-[0.04em] text-muted">
              {metric.area}
            </dd>
          </div>
        ))}
      </dl>

      <p className="max-w-3xl border-l-2 border-accent/40 pl-3 text-xs leading-relaxed text-muted sm:text-[13px]">
        {IMPACT_NOTE}
      </p>
    </section>
  );
}
