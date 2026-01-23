"use client";

import Link from "next/link";
import { BookOpenCheck, GraduationCap, ShieldCheck, UserCircle } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { downloads } from "@/lib/mockData";

export default function StudentPortalPage() {
  const { language } = useLanguage();
  const content = {
    en: {
      badge: "Portal",
      title: "Quick links for students and guardians.",
      subtitle: "Access routines, results, fees, and services in one place.",
      linksTitle: "Portal links",
      linksSubtitle: "Jump to the most used pages.",
      links: [
        {
          icon: UserCircle,
          title: "Student portal",
          detail: "Attendance and profile information.",
          href: "/student",
        },
        {
          icon: GraduationCap,
          title: "Teacher portal",
          detail: "Class routines and teaching tools.",
          href: "/teacher",
        },
        {
          icon: BookOpenCheck,
          title: "Results",
          detail: "View published exam results.",
          href: "/results",
        },
        {
          icon: ShieldCheck,
          title: "Fees & payments",
          detail: "Check fee structures and payment options.",
          href: "/fees",
        },
      ],
      downloadsTitle: "Downloads",
      downloadsSubtitle: "Important documents for the school year.",
      downloadAction: "Download",
      openLabel: "Open",
      accessTitle: "Need account access?",
      accessSubtitle:
        "Log in to view personal records or contact support for access resets.",
      accessAction: "Go to login",
      helpTitle: "Support desk",
      helpDetail: "Phone: 01881659906 | Email: habiba@gmail.com",
    },
    bn: {
      badge: "পোর্টাল",
      title: "শিক্ষার্থী ও অভিভাবকের জন্য দ্রুত লিংক।",
      subtitle: "রুটিন, ফলাফল, ফি ও সেবা এক জায়গায়।",
      linksTitle: "প্রয়োজনীয় লিংক",
      linksSubtitle: "সবচেয়ে ব্যবহৃত পেজগুলোতে যান।",
      links: [
        {
          icon: UserCircle,
          title: "শিক্ষার্থী পোর্টাল",
          detail: "উপস্থিতি ও প্রোফাইল তথ্য।",
          href: "/student",
        },
        {
          icon: GraduationCap,
          title: "শিক্ষক পোর্টাল",
          detail: "ক্লাস রুটিন ও শিক্ষক টুলস।",
          href: "/teacher",
        },
        {
          icon: BookOpenCheck,
          title: "ফলাফল",
          detail: "প্রকাশিত পরীক্ষার ফলাফল দেখুন।",
          href: "/results",
        },
        {
          icon: ShieldCheck,
          title: "ফি ও পেমেন্ট",
          detail: "ফি কাঠামো ও পেমেন্ট অপশন দেখুন।",
          href: "/fees",
        },
      ],
      downloadsTitle: "ডাউনলোড",
      downloadsSubtitle: "শিক্ষাবর্ষের গুরুত্বপূর্ণ নথি।",
      downloadAction: "ডাউনলোড",
      openLabel: "দেখুন",
      accessTitle: "অ্যাকাউন্ট দরকার?",
      accessSubtitle:
        "ব্যক্তিগত তথ্য দেখতে লগইন করুন বা সাপোর্টে যোগাযোগ করুন।",
      accessAction: "লগইন করুন",
      helpTitle: "সহায়তা ডেস্ক",
      helpDetail: "ফোন: 01881659906 | ইমেইল: habiba@gmail.com",
    },
  }[language];

  return (
    <div className="space-y-12 px-4 py-12 md:px-4 md:py-16 2xl:px-0">
      <div className="mx-auto max-w-screen-2xl space-y-6">
        <Badge variant="info">{content.badge}</Badge>
        <h1 className="text-4xl font-semibold text-[var(--color-ink)] md:text-5xl">
          {content.title}
        </h1>
        <p className="text-base text-[var(--color-muted)] md:text-lg">
          {content.subtitle}
        </p>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.linksTitle}
          subtitle={content.linksSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {content.links.map((link) => (
            <Card key={link.title}>
              <CardHeader>
                <link.icon className="h-6 w-6 text-[var(--color-blue-700)]" />
                <CardTitle>{link.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[var(--color-muted)]">
                <p>{link.detail}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={link.href}>{content.openLabel}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.downloadsTitle}
          subtitle={content.downloadsSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {downloads.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <Badge variant="warn">{item.tag}</Badge>
                <CardTitle>{item.title}</CardTitle>
                <p className="text-xs text-[var(--color-muted)]">
                  {item.type} | {item.size} | {item.updated}
                </p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  {content.downloadAction}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>{content.accessTitle}</CardTitle>
            <p className="text-sm text-[var(--color-muted)]">
              {content.accessSubtitle}
            </p>
          </CardHeader>
          <CardContent>
            <Button variant="gold" asChild>
              <Link href="/login">{content.accessAction}</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[var(--color-blue-100)]">
          <CardHeader>
            <CardTitle>{content.helpTitle}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-[var(--color-muted)]">
            {content.helpDetail}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




