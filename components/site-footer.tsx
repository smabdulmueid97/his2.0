"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";

export default function SiteFooter() {
  const { language } = useLanguage();
  const content = {
    en: {
      brand: "Habiba International School",
      description:
        "A Bangla-first school portal for students, teachers, and guardians.",
      address: "29 Al Madina Road, East Ahamed Nagor, Mirpur-1, Dhaka",
      quickLinksLabel: "Quick Links",
      links: [
        { href: "/", label: "Home" },
        { href: "/student", label: "Student" },
        { href: "/teacher", label: "Teacher" },
        { href: "/admin", label: "Admin" },
        { href: "/fees", label: "Fees" },
        { href: "/contact", label: "Contact" },
      ],
      hoursLabel: "Office Hours",
      hours: [
        "Sunday - Thursday: 8:00 AM - 4:00 PM",
        "Friday: Closed",
        "Saturday: 9:00 AM - 1:00 PM",
      ],
      callUsLabel: "Call Us",
      callUsValue: "01881659906, 02226622923",
      footerNote: "Â© 2026 Habiba International School",
    },
    bn: {
      brand: "à¦¹à¦¾à¦¬à¦¿à¦¬à¦¾ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦¨à§à¦¯à¦¾à¦¶à¦¨à¦¾à¦² à¦¸à§à¦•à§à¦²",
      description:
        "à¦¬à¦¾à¦‚à¦²à¦¾-à¦­à¦¿à¦¤à§à¦¤à¦¿à¦• à¦¸à§à¦•à§à¦² à¦ªà§‹à¦°à§à¦Ÿà¦¾à¦²â€”à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€, à¦¶à¦¿à¦•à§à¦·à¦• à¦“ à¦…à¦­à¦¿à¦­à¦¾à¦¬à¦•à§‡à¦° à¦œà¦¨à§à¦¯à¥¤",
      address: "à§¨à§¯ à¦†à¦² à¦®à¦¦à¦¿à¦¨à¦¾ à¦°à§‹à¦¡, à¦‡à¦¸à§à¦Ÿ à¦†à¦¹à¦®à§‡à¦¦ à¦¨à¦—à¦°, à¦®à¦¿à¦°à¦ªà§à¦°-à§§, à¦¢à¦¾à¦•à¦¾",
      quickLinksLabel: "à¦¦à§à¦°à§à¦¤ à¦²à¦¿à¦‚à¦•",
      links: [
        { href: "/", label: "à¦¹à§‹à¦®" },
        { href: "/student", label: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€" },
        { href: "/teacher", label: "à¦¶à¦¿à¦•à§à¦·à¦•" },
        { href: "/admin", label: "à¦…à§à¦¯à¦¾à¦¡à¦®à¦¿à¦¨" },
        { href: "/fees", label: "à¦«à¦¿" },
        { href: "/contact", label: "à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦—" },
      ],
      hoursLabel: "à¦…à¦«à¦¿à¦¸ à¦¸à¦®à§Ÿ",
      hours: [
        "à¦°à¦¬à¦¿à¦¬à¦¾à¦° - à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°: à¦¸à¦•à¦¾à¦² à§®:à§¦à§¦ - à¦¬à¦¿à¦•à¦¾à¦² à§ª:à§¦à§¦",
        "à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°: à¦¬à¦¨à§à¦§",
        "à¦¶à¦¨à¦¿à¦¬à¦¾à¦°: à¦¸à¦•à¦¾à¦² à§¯:à§¦à§¦ - à¦¦à§à¦ªà§à¦° à§§:à§¦à§¦",
      ],
      callUsLabel: "à¦«à§‹à¦¨",
      callUsValue: "01881659906, 02226622923",
      footerNote: "Â© à§¨à§¦à§¨à§¬ à¦¹à¦¾à¦¬à¦¿à¦¬à¦¾ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦¨à§à¦¯à¦¾à¦¶à¦¨à¦¾à¦² à¦¸à§à¦•à§à¦²",
    },
  }[language];

  return (
    <footer className="relative z-10 border-t border-[var(--color-line)] bg-[var(--color-white)]">
      <div className="mx-auto grid max-w-screen-2xl gap-8 px-3 py-12 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-3 2xl:px-0">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-[var(--color-ink)]">
            {content.brand}
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            {content.description}
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            {content.address}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            {content.quickLinksLabel}
          </p>
          <div className="grid gap-2 text-sm text-[var(--color-muted)]">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--color-blue-700)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            {content.hoursLabel}
          </p>
          <div className="text-sm text-[var(--color-muted)]">
            {content.hours.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            {content.callUsLabel}
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            {content.callUsValue}
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)] px-3 py-4 text-center text-xs text-[var(--color-muted)] 2xl:px-0">
        {content.footerNote}
      </div>
    </footer>
  );
}




