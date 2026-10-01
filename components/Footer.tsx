import { withBasePath } from "@/lib/base-path";
import { CLOSING_CTA, SITE } from "@/lib/cv";

export function Footer() {
  return (
    <footer className="space-y-8">
      <div className="rounded-[8px] bg-[#2d3748] px-6 py-8 text-center sm:px-10">
        <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
          Let’s talk
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
          {CLOSING_CTA}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex h-10 items-center rounded-[8px] bg-accent px-4 text-sm font-semibold !text-white transition-opacity duration-[160ms] ease-out hover:opacity-90"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-[8px] border border-white/30 px-4 text-sm font-medium !text-white transition-colors duration-[160ms] ease-out hover:border-white/70"
          >
            LinkedIn
          </a>
          <a
            href={withBasePath(SITE.cvPdf)}
            download={SITE.cvFilename}
            className="inline-flex h-10 items-center rounded-[8px] border border-white/30 px-4 text-sm font-medium !text-white transition-colors duration-[160ms] ease-out hover:border-white/70"
          >
            Download CV
          </a>
        </div>
      </div>

      <p className="text-center text-xs leading-relaxed text-muted">
        I consent to the processing of my personal data for recruitment under
        the Polish Personal Data Protection Act of 10 May 2018 and GDPR (EU)
        2016/679.
      </p>
    </footer>
  );
}
