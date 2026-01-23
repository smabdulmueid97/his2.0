"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ctaLinks, getLabel, mainNav } from "@/lib/site-navigation";

type PlaceholderPageProps = {
  path: string;
};

const findLabelByPath = (path: string) => {
  for (const item of mainNav) {
    if (item.href === path) {
      return item.label;
    }
    for (const child of item.children ?? []) {
      if (child.href === path) {
        return child.label;
      }
    }
  }
  for (const item of ctaLinks) {
    if (item.href === path) {
      return item.label;
    }
  }
  return { bn: "পৃষ্ঠা", en: "Page" };
};

export default function PlaceholderPage({ path }: PlaceholderPageProps) {
  const { language } = useLanguage();
  const label = findLabelByPath(path);
  const content =
    language === "bn"
      ? {
          badge: "পৃষ্ঠা",
          title: getLabel(label, language),
          description: "এই পেজের তথ্য শীঘ্রই আপডেট করা হবে।",
          quickLinks: "দ্রুত লিংক",
          home: "হোম",
          contact: "যোগাযোগ",
        }
      : {
          badge: "Page",
          title: getLabel(label, language),
          description: "This page is under construction. More details soon.",
          quickLinks: "Quick links",
          home: "Go to home",
          contact: "Contact us",
        };

  return (
    <div className="space-y-12 px-4 py-12 md:px-4 md:py-16 2xl:px-0">
      <div className="mx-auto max-w-screen-2xl space-y-6">
        <Badge variant="info">{content.badge}</Badge>
        <h1 className="text-4xl font-semibold text-[var(--color-ink)] md:text-5xl">
          {content.title}
        </h1>
        <p className="text-base text-[var(--color-muted)] md:text-lg">
          {content.description}
        </p>
      </div>

      <div className="mx-auto max-w-screen-2xl">
        <Card>
          <CardHeader>
            <CardTitle>{content.quickLinks}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link href="/">{content.home}</Link>
            </Button>
            <Button variant="gold" asChild>
              <Link href="/contact">{content.contact}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
