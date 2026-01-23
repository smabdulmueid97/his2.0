"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/language-provider";
import { ctaLinks, getLabel, mainNav } from "@/lib/site-navigation";

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const { language, toggleLanguage } = useLanguage();
  const primaryNav = mainNav.filter((item) => item.href !== "/login");
  const headerText =
    language === "bn"
      ? {
          name: "হাবিবা ইন্টারন্যাশনাল স্কুল",
          address: "২৯ আল মদিনা রোড, ইস্ট আহমেদ নগর, মিরপুর-১, ঢাকা-১২১৬",
          phone: "01881659906 , 02226622923",
          login: "লগইন",
          menu: "মেনু",
          close: "বন্ধ",
          viewAll: "সব দেখুন",
          toggleLabel: "ভাষা পরিবর্তন",
        }
      : {
          name: "Habiba International School",
          address: "29 Al Madina Road, East Ahamed Nagor, Mirpur-1, Dhaka-1216",
          phone: "01881659906, 02226622923",
          login: "Login",
          menu: "Menu",
          close: "Close",
          viewAll: "View all",
          toggleLabel: "Change language",
        };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!navRef.current || navRef.current.contains(target)) {
        return;
      }
      setOpenMenu(null);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#3b0f0d] bg-[#5a1915]">
      <div className="border-b border-[#3b0f0d] bg-[#5a1915]">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between 2xl:px-0">
          <Link href="/" className="flex items-start gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-white)] shadow-sm">
              <img
                src="/logo.png"
                alt="Habiba International School"
                className="h-12 w-12 object-contain"
              />
            </span>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-[var(--color-white)] sm:text-xl">
                {headerText.name}
              </p>
              <div className="text-xs text-[color-mix(in_srgb,var(--color-white)_80%,transparent)] sm:text-sm">
                <span className="block">{headerText.address}</span>
                <span className="block">{headerText.phone}</span>
              </div>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            {ctaLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${item.className} shadow-sm`}
              >
                {getLabel(item.label, language)}
              </Link>
            ))}
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-[#3b0f0d] bg-[#4a120f] px-4 py-2 text-sm font-semibold text-[var(--color-white)] shadow-sm transition hover:bg-[#6b1f1a]"
            >
              {headerText.login}
            </Link>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={headerText.toggleLabel}
              className="inline-flex items-center justify-center rounded-full border border-[#3b0f0d] bg-[#4a120f] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-white)] shadow-sm transition hover:bg-[#6b1f1a]"
            >
              {language === "bn" ? "EN" : "বাংলা"}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#5a1915]">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-3 px-4 py-3 lg:h-14 2xl:px-0">
          <nav
            ref={navRef}
            className="hidden items-center gap-5 text-sm font-semibold text-[var(--color-white)] lg:flex"
          >
            {primaryNav.map((item) => (
              <div key={item.href} className="relative">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu((current) =>
                          current === item.href ? null : item.href
                        )
                      }
                      aria-expanded={openMenu === item.href}
                      className="inline-flex items-center gap-1 rounded-full border border-[#2a0a08] bg-[#6b1f1a] px-3 py-1.5 text-[var(--color-white)] shadow-md transition hover:bg-[#7f2a23]"
                    >
                      {getLabel(item.label, language)}
                      <span className="text-[10px] text-[color-mix(in_srgb,var(--color-white)_70%,transparent)]">
                        ▼
                      </span>
                    </button>
                    <div
                      className={`absolute left-0 top-full z-30 mt-3 min-w-[320px] rounded-2xl border border-[#2a0a08] bg-[#3f0f0d] p-2 text-sm text-[var(--color-white)] shadow-xl transition lg:min-w-[520px] ${
                        openMenu === item.href
                          ? "visible opacity-100"
                          : "invisible pointer-events-none opacity-0"
                      }`}
                    >
                      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        <Link
                          href={item.href}
                          className="col-span-full block rounded-xl border border-[#2a0a08] bg-[#6b1f1a] px-3 py-2 font-semibold text-[var(--color-white)] shadow-md transition hover:bg-[#7f2a23]"
                        >
                          {headerText.viewAll}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl border border-[#2a0a08] bg-[#6b1f1a] px-3 py-2 text-[var(--color-white)] shadow-md transition hover:bg-[#7f2a23]"
                          >
                            {getLabel(child.label, language)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-full border border-[#2a0a08] bg-[#6b1f1a] px-3 py-1.5 text-[var(--color-white)] shadow-md transition hover:bg-[#7f2a23]"
                    onClick={() => setOpenMenu(null)}
                  >
                    {getLabel(item.label, language)}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex items-center gap-2 rounded-full border border-[#2a0a08] bg-[#6b1f1a] px-4 py-2 text-sm font-semibold text-[var(--color-white)] shadow-md transition hover:bg-[#7f2a23] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-side-nav"
          >
            {headerText.menu}
            <span className="text-[10px] text-[color-mix(in_srgb,var(--color-white)_70%,transparent)]">
              ►
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu overlay"
        />
        <aside
          id="mobile-side-nav"
          className={`absolute left-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto border-r border-[#2a0a08] bg-[#3f0f0d] p-6 text-[var(--color-white)] shadow-2xl transition-transform ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold uppercase tracking-widest text-[color-mix(in_srgb,var(--color-white)_75%,transparent)]">
              {headerText.menu}
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-full border border-[#2a0a08] bg-[#6b1f1a] px-3 py-1 text-xs font-semibold text-[var(--color-white)] shadow-md transition hover:bg-[#7f2a23]"
            >
              {headerText.close}
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {primaryNav.map((item) =>
              item.children ? (
                <details
                  key={item.href}
                  className="rounded-xl border border-[#2a0a08] bg-[#4a120f]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
                    <span>{getLabel(item.label, language)}</span>
                    <span className="text-[10px] text-[color-mix(in_srgb,var(--color-white)_70%,transparent)]">
                      ▼
                    </span>
                  </summary>
                  <div className="grid gap-2 px-4 pb-3 text-sm sm:grid-cols-2">
                    <Link
                      href={item.href}
                      className="sm:col-span-2 rounded-lg border border-[#2a0a08] bg-[#6b1f1a] px-2 py-1 font-semibold text-[var(--color-white)] shadow-md transition hover:bg-[#7f2a23]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {headerText.viewAll}
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-lg border border-[#2a0a08] bg-[#6b1f1a] px-2 py-1 text-[var(--color-white)] shadow-md transition hover:bg-[#7f2a23]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {getLabel(child.label, language)}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border border-[#2a0a08] bg-[#6b1f1a] px-4 py-3 font-semibold text-[var(--color-white)] shadow-md transition hover:bg-[#7f2a23]"
                  onClick={() => setMobileOpen(false)}
                >
                  {getLabel(item.label, language)}
                </Link>
              )
            )}
          </div>

        </aside>
      </div>
    </header>
  );
}
