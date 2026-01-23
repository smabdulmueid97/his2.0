"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ctaLinks, mainNav } from "@/lib/site-navigation";

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

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
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-white)]">
      <div className="border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-white)_90%,transparent)]">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-3 py-4 lg:flex-row lg:items-center lg:justify-between 2xl:px-0">
          <Link href="/" className="flex items-start gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-blue-700)] text-xl font-bold text-[var(--color-white)]">
              HIS
            </span>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-[var(--color-ink)] sm:text-xl">
                হাবিবা ইন্টারন্যাশনাল স্কুল
              </p>
              <div className="text-xs text-[var(--color-muted)] sm:text-sm">
                <span className="block">
                  ২৯ আল মদিনা রোড, ইস্ট আহমেদ নগর, মিরপুর-১, ঢাকা-১২১৬
                </span>
                <span className="block">01881659906 , 02226622923</span>
              </div>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            {ctaLinks.map((item) => (
              <Link key={item.href} href={item.href} className={item.className}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-white)]">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-3 px-3 py-3 lg:h-14 2xl:px-0">
          <nav
            ref={navRef}
            className="hidden items-center gap-5 text-sm font-semibold text-[var(--color-ink)] lg:flex"
          >
            {mainNav.map((item) => (
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
                      className="inline-flex items-center gap-1 transition hover:text-[var(--color-blue-700)]"
                    >
                      {item.label}
                      <span className="text-[10px] text-[var(--color-muted)]">
                        ▼
                      </span>
                    </button>
                    <div
                      className={`absolute left-0 top-full z-30 mt-3 min-w-[240px] rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] p-2 text-sm text-[var(--color-ink)] shadow-lg transition ${
                        openMenu === item.label
                          ? "visible opacity-100"
                          : "invisible pointer-events-none opacity-0"
                      }`}
                    >
                      <Link
                        href={item.href}
                        className="block rounded-xl px-3 py-2 font-semibold text-[var(--color-blue-700)] transition hover:bg-[color-mix(in_srgb,var(--color-blue-700)_12%,transparent)]"
                      >
                        সব দেখুন
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-xl px-3 py-2 transition hover:bg-[color-mix(in_srgb,var(--color-blue-700)_12%,transparent)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 transition hover:text-[var(--color-blue-700)]"
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <details className="lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-semibold text-[var(--color-blue-900)] transition hover:bg-[var(--color-blue-100)] [&::-webkit-details-marker]:hidden">
              মেনু
              <span className="text-[10px] text-[var(--color-muted)]">▼</span>
            </summary>
            <div className="mt-4 space-y-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] p-4 text-sm text-[var(--color-ink)]">
              <div className="space-y-2">
                {mainNav.map((item) =>
                  item.children ? (
                    <details
                      key={item.label}
                      className="rounded-xl border border-[var(--color-line)]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
                        <span>{item.label}</span>
                        <span className="text-[10px] text-[var(--color-muted)]">
                          ▼
                        </span>
                      </summary>
                      <div className="grid gap-1 px-4 pb-3 text-sm">
                        <Link
                          href={item.href}
                          className="rounded-lg px-2 py-1 font-semibold text-[var(--color-blue-700)] transition hover:bg-[color-mix(in_srgb,var(--color-blue-700)_12%,transparent)]"
                        >
                          সব দেখুন
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="rounded-lg px-2 py-1 transition hover:bg-[color-mix(in_srgb,var(--color-blue-700)_12%,transparent)]"
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
                      className="flex items-center justify-between rounded-xl border border-[var(--color-line)] px-4 py-3 font-semibold transition hover:border-[var(--color-blue-700)]"
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
                    className={item.className}
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
