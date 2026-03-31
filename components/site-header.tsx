"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import MusicToggle from "@/components/music-toggle";
import { useLanguage } from "@/components/language-provider";
import { ctaLinks, getLabel, mainNav } from "@/lib/site-navigation";

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null
  );
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
          toggleLabel: "ভাষা পরিবর্তন",
        }
      : {
          name: "Habiba International School",
          address: "29 Al Madina Road, East Ahamed Nagor, Mirpur-1, Dhaka-1216",
          phone: "01881659906, 02226622923",
          login: "Login",
          menu: "Menu",
          close: "Close",
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
        setOpenMobileSection(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      if (!event.touches.length) {
        return;
      }
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!event.changedTouches.length) {
        return;
      }
      const endX = event.changedTouches[0].clientX;
      const endY = event.changedTouches[0].clientY;
      const deltaX = endX - startX;
      const deltaY = endY - startY;

      if (Math.abs(deltaX) < 60 || Math.abs(deltaX) < Math.abs(deltaY)) {
        return;
      }

      if (!mobileOpen && startX < 24 && deltaX > 60) {
        setMobileOpen(true);
        return;
      }

      if (mobileOpen && deltaX < -60) {
        setMobileOpen(false);
        setOpenMobileSection(null);
      }
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#1f0a36] bg-[#2b0f4a]">
      <div className="border-b border-[#1f0a36] bg-[#2b0f4a]">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 page-gutter py-4 lg:flex-row lg:items-center lg:justify-between">
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
            <MusicToggle />
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
              className="inline-flex items-center justify-center rounded-full border border-[#1f0a36] bg-[#3b165f] px-4 py-2 text-sm font-semibold text-[var(--color-white)] shadow-sm transition hover:bg-[#4a1f73]"
            >
              {headerText.login}
            </Link>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={headerText.toggleLabel}
              className="inline-flex items-center justify-center rounded-full border border-[#1f0a36] bg-[#3b165f] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-white)] shadow-sm transition hover:bg-[#4a1f73]"
            >
              {language === "bn" ? "EN" : "বাংলা"}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#6fa9e6]">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-3 page-gutter py-3 lg:h-14">
          <nav
            ref={navRef}
            className="hidden items-center gap-5 text-sm font-semibold text-[#0b1f3a] lg:flex"
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
                      className="inline-flex items-center gap-1 rounded-full border border-[#0b1f3a] bg-[#8fc3ff] px-3 py-1.5 text-[#0b1f3a] shadow-md transition hover:bg-[#7bb8ff]"
                    >
                      {getLabel(item.label, language)}
                      <span className="text-[10px] text-[#0b1f3a]">
                        ▼
                      </span>
                    </button>
                    <div
                      className={`absolute left-0 top-full z-30 mt-3 min-w-[380px] rounded-2xl border border-[#0b1f3a] bg-[#e3f0ff] p-2 text-sm text-[#0b1f3a] shadow-xl transition md:min-w-[700px] lg:min-w-[900px] ${
                        openMenu === item.href
                          ? "visible opacity-100"
                          : "invisible pointer-events-none opacity-0"
                      }`}
                    >
                      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl border border-[#0b1f3a] bg-[#8fc3ff] px-3 py-2 text-[#0b1f3a] shadow-md transition hover:bg-[#7bb8ff] min-w-[200px]"
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
                    className="inline-flex items-center gap-1 rounded-full border border-[#0b1f3a] bg-[#8fc3ff] px-3 py-1.5 text-[#0b1f3a] shadow-md transition hover:bg-[#7bb8ff]"
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
            className="flex items-center gap-2 rounded-full border border-[#0b1f3a] bg-[#8fc3ff] px-4 py-2 text-sm font-semibold text-[#0b1f3a] shadow-md transition hover:bg-[#7bb8ff] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-side-nav"
          >
            {headerText.menu}
            <span className="text-[10px] text-[#0b1f3a]">
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
          onClick={() => {
            setMobileOpen(false);
            setOpenMobileSection(null);
          }}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu overlay"
        />
        <aside
          id="mobile-side-nav"
          className={`absolute left-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto border-r border-[#0b1f3a] bg-[#0b1f3a] p-6 text-[var(--color-white)] shadow-2xl transition-transform ${
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
              className="rounded-full border border-[#86d89a] bg-[#b7f7c2] px-3 py-1 text-xs font-semibold text-[#0b1f3a] shadow-md transition hover:bg-[#9eeab2]"
            >
              {headerText.close}
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {primaryNav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="rounded-xl border border-[#86d89a] bg-[#0f2a4a]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileSection((current) =>
                        current === item.href ? null : item.href
                      )
                    }
                    className="flex w-full items-center justify-between px-4 py-3 font-semibold text-[var(--color-white)]"
                    aria-expanded={openMobileSection === item.href}
                  >
                    <span>{getLabel(item.label, language)}</span>
                    <span className="text-[10px] text-[color-mix(in_srgb,var(--color-white)_70%,transparent)]">
                      {openMobileSection === item.href ? "▲" : "▼"}
                    </span>
                  </button>
                  {openMobileSection === item.href ? (
                    <div className="grid gap-2 px-4 pb-3 text-sm grid-cols-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg border border-[#86d89a] bg-[#b7f7c2] px-2 py-1 text-[#0b1f3a] shadow-md transition hover:bg-[#9eeab2]"
                          onClick={() => {
                            setMobileOpen(false);
                            setOpenMobileSection(null);
                          }}
                        >
                          {getLabel(child.label, language)}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border border-[#86d89a] bg-[#b7f7c2] px-4 py-3 font-semibold text-[#0b1f3a] shadow-md transition hover:bg-[#9eeab2]"
                  onClick={() => {
                    setMobileOpen(false);
                    setOpenMobileSection(null);
                  }}
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
