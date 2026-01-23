import Link from "next/link";
import { notFound } from "next/navigation";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ctaLinks, mainNav } from "@/lib/site-navigation";

type PageProps = {
  params: { slug?: string[] };
};

type NavEntry = {
  label: string;
  href: string;
  parent?: { label: string; href: string; children?: { label: string; href: string }[] };
  children?: { label: string; href: string }[];
};

const navEntries: NavEntry[] = mainNav.flatMap((item) => {
  const children =
    item.children?.map((child) => ({
      label: child.label.bn,
      href: child.href,
    })) ?? [];
  const parent = { label: item.label.bn, href: item.href, children };
  return [
    { label: item.label.bn, href: item.href, children },
    ...children.map((child) => ({
      label: child.label,
      href: child.href,
      parent,
    })),
  ];
});

const ctaEntries: NavEntry[] = ctaLinks.map((item) => ({
  label: item.label.bn,
  href: item.href,
}));

const entryMap = new Map<string, NavEntry>(
  [...navEntries, ...ctaEntries].map((entry) => [entry.href, entry])
);

const categoryLabels: Record<string, string> = {
  activities: "কার্যক্রম",
  information: "তথ্যাবলি",
  gallery: "দৃশ্যাবলী",
  results: "ফলাফল",
  links: "লিংক",
  downloads: "ডাউনলোড",
  login: "লগইন",
  "mobile-app": "মোবাইল অ্যাপ",
  "online-admission": "ভর্তি",
  "admit-card": "প্রবেশপত্র",
};

const categoryHighlights: Record<
  string,
  { title: string; detail: string }[]
> = {
  activities: [
    { title: "সময়সূচি", detail: "সাপ্তাহিক/মাসিক পরিকল্পনা ও সময় নির্ধারণ।" },
    { title: "অংশগ্রহণ", detail: "নিবন্ধন, উপস্থিতি ও শর্তাবলী নির্দেশনা।" },
    { title: "দায়িত্বশীলতা", detail: "সমন্বয়কারী ও যোগাযোগ তথ্য।" },
  ],
  information: [
    { title: "পরিচিতি", detail: "প্রতিষ্ঠানের মূল তথ্য ও প্রোফাইল।" },
    { title: "নীতিমালা", detail: "নীতি, নির্দেশনা ও প্রাসঙ্গিক নথি।" },
    { title: "হালনাগাদ", detail: "সর্বশেষ আপডেট ও সংশোধনী।" },
  ],
  gallery: [
    { title: "ফটো আর্কাইভ", detail: "ইভেন্ট ও শ্রেণিভিত্তিক ছবি সংগ্রহ।" },
    { title: "ভিডিও সংগ্রহ", detail: "গুরুত্বপূর্ণ অনুষ্ঠান ও কার্যক্রমের ভিডিও।" },
    { title: "হাইলাইটস", detail: "বিশেষ মুহূর্তের সারসংক্ষেপ।" },
  ],
  results: [
    { title: "ফল প্রকাশ", detail: "পরীক্ষা ফলাফল প্রকাশের সময়সূচি।" },
    { title: "পুনঃনিরীক্ষা", detail: "পুনঃনিরীক্ষা আবেদন ও নির্দেশনা।" },
    { title: "ডাউনলোড", detail: "প্রয়োজনীয় ফাইল ডাউনলোড করুন।" },
  ],
  links: [
    { title: "গুরুত্বপূর্ণ লিংক", detail: "প্রাসঙ্গিক অফিসিয়াল ওয়েবসাইটসমূহ।" },
    { title: "নির্দেশনা", detail: "সঠিক তথ্য পেতে নির্দেশিকা অনুসরণ করুন।" },
    { title: "সহায়তা", detail: "সমস্যা হলে স্কুল অফিসে যোগাযোগ করুন।" },
  ],
  downloads: [
    { title: "ডাউনলোড তালিকা", detail: "প্রয়োজনীয় ফর্ম ও ডকুমেন্ট।" },
    { title: "নির্দেশনা", detail: "ফাইল ডাউনলোড ও ব্যবহার নির্দেশনা।" },
    { title: "সহায়তা", detail: "ডাউনলোড সমস্যায় সহায়তা নিন।" },
  ],
  login: [
    { title: "অ্যাকাউন্ট প্রবেশ", detail: "আইডি ও পাসওয়ার্ড দিয়ে লগইন করুন।" },
    { title: "নিরাপত্তা", detail: "ব্যক্তিগত তথ্য সুরক্ষিত রাখুন।" },
    { title: "সহায়তা", detail: "লগইন সমস্যায় সহায়তা ডেস্ক।" },
  ],
  "mobile-app": [
    { title: "অ্যাপ ডাউনলোড", detail: "সরকারি অ্যাপ স্টোর থেকে সংগ্রহ করুন।" },
    { title: "ফিচার", detail: "নোটিশ, ফলাফল ও উপস্থিতি আপডেট।" },
    { title: "সহায়তা", detail: "অ্যাপ ব্যবহারে সহায়তা নিন।" },
  ],
};

const categoryInfo: Record<string, string[]> = {
  activities: [
    "প্রযোজ্য শ্রেণি ও শাখা",
    "প্রয়োজনীয় ফি ও ফর্ম",
    "সমন্বয়কারী শিক্ষক",
    "হালনাগাদ সময়সূচি",
  ],
  information: [
    "প্রতিষ্ঠানের প্রোফাইল",
    "নীতিমালা ও নির্দেশনা",
    "দায়িত্বশীল ব্যক্তি",
    "যোগাযোগ তথ্য",
  ],
  gallery: [
    "ইভেন্টভিত্তিক অ্যালবাম",
    "শ্রেণিভিত্তিক গ্যালারি",
    "আপলোড সময়",
    "কপিরাইট নির্দেশনা",
  ],
  results: [
    "পরীক্ষার ধরন",
    "প্রকাশের তারিখ",
    "পুনঃনিরীক্ষা নিয়ম",
    "যোগাযোগ কেন্দ্র",
  ],
  links: [
    "অফিসিয়াল ওয়েবসাইট",
    "লগইন/সেবা প্রবেশ",
    "সহায়তা লিংক",
    "প্রয়োজনীয় নথি",
  ],
  downloads: [
    "ফাইল ধরন ও আকার",
    "হালনাগাদ তারিখ",
    "ডাউনলোড নির্দেশনা",
    "সহায়তা নম্বর",
  ],
  login: [
    "ইউজার আইডি",
    "পাসওয়ার্ড নির্দেশনা",
    "পাসওয়ার্ড রিসেট",
    "হেল্পডেস্ক",
  ],
  "mobile-app": [
    "অ্যান্ড্রয়েড/আইওএস",
    "লগইন তথ্য",
    "নোটিফিকেশন",
    "সহায়তা",
  ],
};

export default function GenericPage({ params }: PageProps) {
  const slug = params.slug ?? [];
  const path = `/${slug.join("/")}`;
  const entry = entryMap.get(path);

  if (!entry) {
    notFound();
  }

  const category = slug[0] ?? "";
  const badgeLabel = entry.parent?.label ?? categoryLabels[category] ?? "তথ্য";
  const title = entry.label;
  const subtitle = entry.parent
    ? `${entry.parent.label} বিভাগের "${title}" সংক্রান্ত তথ্য ও নির্দেশনা এখানে পাবেন।`
    : `${title} সম্পর্কিত তথ্য ও সেবা এখানে দেওয়া আছে।`;

  const highlights = categoryHighlights[category] ?? [
    { title: "সংক্ষিপ্ত বিবরণ", detail: "প্রধান তথ্য এক নজরে।" },
    { title: "নির্দেশনা", detail: "প্রয়োজনীয় নির্দেশনা ও ধাপসমূহ।" },
    { title: "যোগাযোগ", detail: "প্রাসঙ্গিক অফিস ও সহায়তা নম্বর।" },
  ];

  const infoItems = categoryInfo[category] ?? [
    "গুরুত্বপূর্ণ তথ্য",
    "প্রযোজ্যতা",
    "প্রয়োজনীয় নথি",
    "যোগাযোগ",
  ];

  const relatedItems = entry.children ?? entry.parent?.children ?? [];
  const relatedTitle = entry.children ? "উপবিভাগসমূহ" : "আরও দেখুন";
  const relatedSubtitle = entry.children
    ? "এই বিভাগের সকল পেজ একসাথে দেখুন।"
    : "সংশ্লিষ্ট অন্যান্য পেজ দেখুন।";

  return (
    <div className="space-y-12 px-4 py-12 md:px-4 md:py-16 2xl:px-0">
      <div className="mx-auto max-w-screen-2xl space-y-6">
        <Badge variant="info">{badgeLabel}</Badge>
        <h1 className="text-4xl font-semibold text-[var(--color-ink)] md:text-5xl">
          {title}
        </h1>
        <p className="text-base text-[var(--color-muted)] md:text-lg">
          {subtitle}
        </p>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title="মূল নির্দেশনা"
          subtitle="দ্রুত ধারণা পেতে নিচের তথ্যগুলো দেখুন।"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-muted)]">
                {item.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>প্রয়োজনীয় তথ্য</CardTitle>
            <p className="text-sm text-[var(--color-muted)]">
              এই পেজের জন্য প্রাসঙ্গিক তথ্যসমূহ।
            </p>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[var(--color-muted)]">
            {infoItems.map((item) => (
              <p key={item}>- {item}</p>
            ))}
          </CardContent>
        </Card>
        <Card className="bg-[var(--color-blue-100)]">
          <CardHeader>
            <CardTitle>সহায়তা ও যোগাযোগ</CardTitle>
            <p className="text-sm text-[var(--color-muted)]">
              অতিরিক্ত তথ্যের জন্য অফিসে যোগাযোগ করুন।
            </p>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[var(--color-muted)]">
            <p>ফোন: 01881659906, 02226622923</p>
            <p>ইমেইল: habiba@gmail.com</p>
            <Button variant="gold" asChild>
              <Link href="/contact">যোগাযোগ করুন</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {relatedItems.length ? (
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading title={relatedTitle} subtitle={relatedSubtitle} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedItems.map((item) => (
              <Card key={item.href}>
                <CardContent className="flex items-center justify-between gap-4 py-6 text-sm text-[var(--color-muted)]">
                  <span>{item.label}</span>
                  <Button variant="outline" asChild>
                    <Link href={item.href}>দেখুন</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-screen-2xl">
        <Card>
          <CardHeader>
            <CardTitle>দ্রুত সেবা</CardTitle>
            <p className="text-sm text-[var(--color-muted)]">
              প্রয়োজনীয় সেবাগুলোতে দ্রুত যান।
            </p>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {ctaLinks.map((item) => (
              <Button key={item.href} variant="outline" asChild>
                <Link href={item.href}>{item.label.bn}</Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
