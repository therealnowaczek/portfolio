import { CLOSING_CTA, STRENGTHS } from "@/lib/cv";

export function Footer() {
  return (
    <footer className="space-y-10">
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

      <div className="rounded-[8px] bg-[#2d3748] px-6 py-8 text-center sm:px-10">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
          {CLOSING_CTA}
        </p>
      </div>

      <p className="text-center text-xs leading-relaxed text-muted">
        I consent to the processing of my personal data for recruitment under
        the Polish Personal Data Protection Act of 10 May 2018 and GDPR (EU)
        2016/679.
      </p>
    </footer>
  );
}
