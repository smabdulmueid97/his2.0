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
      footerNote: "© 2026 Habiba International School",
    },
    bn: {
      brand: "হাবিবা ইন্টারন্যাশনাল স্কুল",
      description:
        "বাংলা-ভিত্তিক স্কুল পোর্টাল—শিক্ষার্থী, শিক্ষক ও অভিভাবকের জন্য।",
      address: "২৯ আল মদিনা রোড, ইস্ট আহমেদ নগর, মিরপুর-১, ঢাকা-১২১৬",
      quickLinksLabel: "দ্রুত লিংক",
      links: [
        { href: "/", label: "হোম" },
        { href: "/student", label: "শিক্ষার্থী" },
        { href: "/teacher", label: "শিক্ষক" },
        { href: "/admin", label: "অ্যাডমিন" },
        { href: "/fees", label: "ফি" },
        { href: "/contact", label: "যোগাযোগ" },
      ],
      hoursLabel: "অফিস সময়",
      hours: [
        "রবিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০",
        "শুক্রবার: বন্ধ",
        "শনিবার: সকাল ৯:০০ - দুপুর ১:০০",
      ],
      callUsLabel: "ফোন",
      callUsValue: "01881659906, 02226622923",
      footerNote: "© ২০২৬ হাবিবা ইন্টারন্যাশনাল স্কুল",
    },
  }[language];

  return (
    <footer className="relative z-10 border-t border-[#1f0a36] bg-[#2b0f4a]">
      <div className="mx-auto grid max-w-screen-2xl gap-8 page-gutter py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-[var(--color-white)]">
            {content.brand}
          </p>
          <p className="text-sm text-[color-mix(in_srgb,var(--color-white)_80%,transparent)]">
            {content.description}
          </p>
          <p className="text-xs text-[color-mix(in_srgb,var(--color-white)_70%,transparent)]">
            {content.address}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--color-white)]">
            {content.quickLinksLabel}
          </p>
          <div className="grid gap-2 text-sm text-[color-mix(in_srgb,var(--color-white)_75%,transparent)]">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--color-gold-500)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--color-white)]">
            {content.hoursLabel}
          </p>
          <div className="text-sm text-[color-mix(in_srgb,var(--color-white)_75%,transparent)]">
            {content.hours.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="text-sm font-semibold text-[var(--color-white)]">
            {content.callUsLabel}
          </p>
          <p className="text-sm text-[color-mix(in_srgb,var(--color-white)_75%,transparent)]">
            {content.callUsValue}
          </p>
        </div>
      </div>
      <div className="border-t border-[#1f0a36] page-gutter py-4 text-center text-xs text-[color-mix(in_srgb,var(--color-white)_70%,transparent)]">
        {content.footerNote}
      </div>
    </footer>
  );
}




