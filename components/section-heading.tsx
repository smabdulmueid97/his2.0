"use client";

import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const { language } = useLanguage();
  const brandLabel =
    language === "bn"
      ? "হাবিবা ইন্টারন্যাশনাল স্কুল"
      : "Habiba International School";

  return (
    <div
      className={cn(
        "space-y-2",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue-700)]">
        {brandLabel}
      </p>
      <h2 className="text-3xl font-semibold text-[var(--color-ink)] md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-sm text-[var(--color-muted)] md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
