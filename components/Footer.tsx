import { CLOSING_CTA, SITE, STRENGTHS } from "@/lib/cv";

export function Footer() {
  return (
    <footer className="space-y-10">
      <div className="rounded-[8px] bg-[#2d3748] px-6 py-8 text-center sm:px-10">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
          {CLOSING_CTA}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
          <a
            href={SITE.phoneHref}
            className="transition-colors duration-[160ms] ease-out hover:text-white"
          >
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="transition-colors duration-[160ms] ease-out hover:text-white"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-[160ms] ease-out hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={SITE.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-[160ms] ease-out hover:text-white"
          >
            X / Twitter
          </a>
        </div>
      </div>

      <div>
        <a
          href="https://www.gallup.com/cliftonstrengths/en/253715/34-cliftonstrengths-themes.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className="section-title mb-3 inline-block hover:underline"
        >
          CliftonStrengths Top 5
        </a>
        <div className="flex gap-0.5 overflow-hidden rounded-[5px]">
          {STRENGTHS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-10 flex-1 items-center justify-center px-1 py-2.5 text-center text-[11px] !text-white transition-opacity duration-[160ms] ease-out first:rounded-l-[5px] last:rounded-r-[5px] hover:opacity-90 sm:text-xs"
              style={{ backgroundColor: s.color, color: "#ffffff" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <p className="border-t border-border pt-8 text-center text-sm leading-relaxed text-muted">
        I agree to the processing of personal data provided on this site for
        recruitment pursuant to the Personal Data Protection Act of 10 May 2018
        (Journal of Laws 2018, item 1000) and Regulation (EU) 2016/679 (GDPR).
      </p>
    </footer>
  );
}
