"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/language-provider";
import { ctaLinks, mainNav } from "@/lib/site-navigation";

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const { language, toggleLanguage } = useLanguage();
  const primaryNav = mainNav.filter((item) => item.href !== "/login");

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
                হাবিবা ইন্টারন্যাশনাল স্কুল
              </p>
              <div className="text-xs text-[color-mix(in_srgb,var(--color-white)_80%,transparent)] sm:text-sm">
                <span className="block">
                  ২৯ আল মদিনা রোড, ইস্ট আহমেদ নগর, মিরপুর-১, ঢাকা-১২১৬
                </span>
                <span className="block">01881659906 , 02226622923</span>
              </div>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-[#3b0f0d] bg-[#4a120f] px-4 py-2 text-sm font-semibold text-[var(--color-white)] shadow-sm transition hover:bg-[#6b1f1a]"
            >
              লগইন
            </Link>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="ভাষা পরিবর্তন"
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
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                      aria-expanded={openMenu === item.label}
                      className="inline-flex items-center gap-1 rounded-full border border-[#3b0f0d] bg-[#4a120f] px-3 py-1.5 text-[var(--color-white)] shadow-sm transition hover:bg-[#6b1f1a]"
                    >
                      {item.label}
                      <span className="text-[10px] text-[color-mix(in_srgb,var(--color-white)_70%,transparent)]">
                        ▼
                      </span>
                    </button>
                    <div
                      className={`absolute left-0 top-full z-30 mt-3 min-w-[320px] rounded-2xl border border-[#3b0f0d] bg-[#4a120f] p-2 text-sm text-[var(--color-white)] shadow-lg transition lg:min-w-[520px] ${
                        openMenu === item.label
                          ? "visible opacity-100"
                          : "invisible pointer-events-none opacity-0"
                      }`}
                    >
                      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        <Link
                          href={item.href}
                          className="col-span-full block rounded-xl border border-[#3b0f0d] px-3 py-2 font-semibold text-[var(--color-white)] shadow-sm transition hover:bg-[#6b1f1a]"
                        >
                          সব দেখুন
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-xl border border-transparent px-3 py-2 text-[var(--color-white)] shadow-sm transition hover:border-[#3b0f0d] hover:bg-[#6b1f1a]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-full border border-[#3b0f0d] bg-[#4a120f] px-3 py-1.5 text-[var(--color-white)] shadow-sm transition hover:bg-[#6b1f1a]"
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            {ctaLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${item.className} shadow-sm`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <details className="lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#3b0f0d] bg-[#4a120f] px-4 py-2 text-sm font-semibold text-[var(--color-white)] shadow-sm transition hover:bg-[#6b1f1a] [&::-webkit-details-marker]:hidden">
              মেনু
              <span className="text-[10px] text-[color-mix(in_srgb,var(--color-white)_70%,transparent)]">
                ▼
              </span>
            </summary>
            <div className="mt-4 space-y-3 rounded-2xl border border-[#3b0f0d] bg-[#4a120f] p-4 text-sm text-[var(--color-white)]">
              <div className="space-y-2">
                {primaryNav.map((item) =>
                  item.children ? (
                    <details
                      key={item.label}
                      className="rounded-xl border border-[#3b0f0d]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
                        <span>{item.label}</span>
                        <span className="text-[10px] text-[color-mix(in_srgb,var(--color-white)_70%,transparent)]">
                          ▼
                        </span>
                      </summary>
                      <div className="grid gap-2 px-4 pb-3 text-sm sm:grid-cols-2">
                        <Link
                          href={item.href}
                          className="sm:col-span-2 rounded-lg border border-[#3b0f0d] px-2 py-1 font-semibold text-[var(--color-white)] shadow-sm transition hover:bg-[#6b1f1a]"
                        >
                          সব দেখুন
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="rounded-lg border border-transparent px-2 py-1 text-[var(--color-white)] shadow-sm transition hover:border-[#3b0f0d] hover:bg-[#6b1f1a]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between rounded-xl border border-[#3b0f0d] bg-[#4a120f] px-4 py-3 font-semibold text-[var(--color-white)] shadow-sm transition hover:bg-[#6b1f1a]"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
              <div className="flex flex-col gap-2">
                {ctaLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${item.className} shadow-sm`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
