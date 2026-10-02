import { LEADERSHIP_HEADLINE, LEADERSHIP_STORY } from "@/lib/cv";
import { RichText } from "./RichText";
import { CaseLinkButton } from "./CaseLinkButton";

type Props = {
  onOpen: (slug: string) => void;
};

export function Leadership({ onOpen }: Props) {
  return (
    <section aria-labelledby="leadership-heading" className="max-w-3xl">
      <h2 id="leadership-heading" className="section-title">
        Leadership
      </h2>
      <p className="text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
        {LEADERSHIP_HEADLINE}
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-foreground-secondary sm:text-base">
        <RichText>{LEADERSHIP_STORY}</RichText>
      </p>
      <div className="mt-5">
        <CaseLinkButton slug="designos" onOpen={onOpen}>
          How that looked in practice: DesignOS
        </CaseLinkButton>
      </div>
    </section>
  );
}
