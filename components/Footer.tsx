import Link from "next/link";
import { footerLinkGroups, partnerLogos } from "@/lib/constants";
import { LogoStrip } from "./ui/LogoStrip";

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-light-canvas pt-16 pb-8">
      <section className="w-full py-10 md:py-20 bg-light-canvas">
        <div className="mx-auto w-full max-w-7xl px-6">
          <LogoStrip logos={partnerLogos} />
        </div>
      </section>
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 font-bold mb-4">
              <span className="text-ieee-blue text-xl">IEEE</span> STCET SB
            </div>
            <p className="text-sm text-ink/60 max-w-xs leading-relaxed">
              St. Thomas&apos; College of Engineering & Technology IEEE Student Branch
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold text-ink mb-4 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/60 hover:text-ieee-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-ink/10">
          <div className="flex items-center gap-2">
            <span className="text-ieee-blue text-sm font-bold">IEEE</span>
            <span className="text-ink/20 text-sm">.</span>
            <span className="text-ieee-blue text-sm font-bold tracking-wide">STCET SB</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-ink/40 hover:text-ieee-blue transition-colors" aria-label="Twitter">
              <TwitterIcon />
            </Link>
            <Link href="#" className="text-ink/40 hover:text-ieee-blue transition-colors" aria-label="GitHub">
              <GithubIcon />
            </Link>
            <Link href="#" className="text-ink/40 hover:text-ieee-blue transition-colors" aria-label="LinkedIn">
              <LinkedinIcon />
            </Link>
            <Link href="#" className="text-ink/40 hover:text-ieee-blue transition-colors" aria-label="Email">
              <MailIcon />
            </Link>
          </div>

          <p className="text-xs text-ink/40 text-center">
            IEEE STCET Student Branch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
