"use client";

import { withBasePath } from "@/lib/base-path";
import { SITE } from "@/lib/cv";

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

function IconCv() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v5h5M8 13h8M8 17h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const actions = [
  { href: `mailto:${SITE.email}`, label: "Email", icon: <IconMail /> },
  {
    href: SITE.linkedin,
    label: "LinkedIn",
    icon: <IconLinkedIn />,
    external: true,
  },
  {
    href: withBasePath(SITE.cvPdf),
    label: "CV",
    icon: <IconCv />,
    download: SITE.cvFilename,
  },
];

export function MobileBottomBar() {
  return (
    <nav
      aria-label="Contact"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background px-2 pt-1.5 sm:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {actions.map((action) => (
          <li key={action.href} className="flex-1">
            <a
              href={action.href}
              className="flex flex-col items-center gap-0.5 rounded-[8px] px-2 py-1.5 text-muted transition-colors duration-[160ms] ease-out hover:bg-surface hover:text-foreground active:bg-surface"
              aria-label={action.label === "CV" ? "Download CV" : action.label}
              {...(action.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(action.download ? { download: action.download } : {})}
            >
              {action.icon}
              <span className="text-[10px] font-medium tracking-wide">
                {action.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
