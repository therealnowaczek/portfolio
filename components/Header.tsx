import { withBasePath } from "@/lib/base-path";
import { SITE } from "@/lib/cv";

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 3.2c.4-.4 1-.5 1.5-.3l2.2 1c.5.2.8.7.8 1.2v2.2c0 .4-.2.8-.6 1L8.8 9.7c1.2 2.4 3.1 4.3 5.5 5.5l1.4-1.7c.2-.4.6-.6 1-.6h2.2c.5 0 1 .3 1.2.8l1 2.2c.2.5.1 1.1-.3 1.5l-1.4 1.4c-.4.4-1 .6-1.6.5C10.6 19.4 4.6 13.4 3.7 6.4c-.1-.6.1-1.2.5-1.6L6.6 3.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3ZM20.3 20h-2.8v-5.6c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20h-2.8s.1-9.2 0-10.5h2.8v1.5c.4-.6 1.1-1.7 2.8-1.7 2 0 3.5 1.3 3.5 4.2V20Z" />
    </svg>
  );
}

const links = [
  { href: SITE.phoneHref, label: `Call ${SITE.phone}`, icon: <IconPhone /> },
  { href: `mailto:${SITE.email}`, label: `Email ${SITE.email}`, icon: <IconMail /> },
  { href: SITE.linkedin, label: "LinkedIn", icon: <IconLinkedIn />, external: true },
];

export function Header() {
  return (
    <header className="border-b border-border bg-background pb-3 lg:border-b lg:py-4">
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {/* Plain img: next/image skips basePath under static export + Turbopack. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath("/avatar.jpg")}
            alt={SITE.name}
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-10 sm:w-10 lg:h-11 lg:w-11"
            decoding="async"
            fetchPriority="high"
          />
          <div className="min-w-0 flex-1">
            <h1 className="text-base font-semibold tracking-tight text-accent sm:text-lg lg:text-xl">
              {SITE.name}
            </h1>
            <p className="mt-0.5 text-[11px] leading-snug text-muted sm:truncate sm:text-xs lg:text-sm">
              {SITE.subtitle}
            </p>
          </div>
        </div>
        {/* Contact icons live in MobileBottomBar on small screens */}
        <nav
          aria-label="Contact"
          className="hidden shrink-0 items-center gap-0.5 sm:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] text-muted transition-colors duration-[160ms] ease-out hover:bg-surface hover:text-foreground lg:h-10 lg:w-10"
              aria-label={link.label}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.icon}
            </a>
          ))}
          <a
            href={withBasePath(SITE.cvPdf)}
            download={SITE.cvFilename}
            className="ml-1.5 inline-flex h-9 items-center rounded-[8px] bg-accent px-3 text-xs font-semibold tracking-wide !text-white transition-opacity duration-[160ms] ease-out hover:opacity-90 lg:h-10 lg:px-3.5 lg:text-sm"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
