import type { NarrativeBlock } from "@/lib/cv";
import { RichText } from "./RichText";

type Props = {
  id: string;
  title: string;
  lede?: string;
  blocks: NarrativeBlock[];
};

export function NarrativeSection({ id, title, lede, blocks }: Props) {
  return (
    <section aria-labelledby={id} className="space-y-8">
      <div>
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {lede ? (
          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
            {lede}
          </p>
        ) : null}
      </div>
      <div className="space-y-7">
        {blocks.map((block) => (
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
