import { BUSINESS_IMPACT, IMPACT_METRICS } from "@/lib/cv";
import { RichText } from "./RichText";

export function Impact() {
  return (
    <section aria-labelledby="impact-heading" className="space-y-8">
      <div>
        <h2 id="impact-heading" className="section-title">
          Business Impact
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
          Enterprise product metrics with scope footnotes. Full Appfire /
          SoftwarePlant case write-ups (baseline, timeframe, contribution) are
          in progress — CostRadar is craft proof, not a verified ROI claim.
        </p>
      </div>

      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {IMPACT_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[8px] bg-surface px-4 py-4"
          >
            <dt className="text-2xl font-semibold tracking-tight text-accent tabular-nums">
              {metric.value}
            </dt>
            <dd className="mt-1 text-sm leading-snug text-foreground-secondary">
              {metric.label}
            </dd>
            <dd className="mt-2 text-[11px] leading-snug text-muted">
              {metric.footnote}
            </dd>
          </div>
        ))}
      </dl>

      <div className="space-y-6 border-t border-border pt-8">
        {BUSINESS_IMPACT.map((block) => (
          <article key={block.title} className="max-w-3xl">
            <h3 className="text-sm font-semibold text-foreground-secondary">
              {block.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
              <RichText>{block.body}</RichText>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
