"use client";

import Link from "next/link";
import { Bell, CalendarDays, Users } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notices } from "@/lib/mockData";

export default function NoticeBoardPage() {
  const { language } = useLanguage();
  const content = {
    en: {
      badge: "Notice Board",
      title: "Notices, events, and announcements.",
      subtitle: "Stay updated with the latest academic and campus news.",
      latestTitle: "Latest notices",
      latestSubtitle: "Fresh updates posted by the school office.",
      statusLabel: "Status",
      audienceLabel: "Audience",
      categoryLabel: "Category",
      dateLabel: "Date",
      readAction: "Read notice",
      contactTitle: "Questions about a notice?",
      contactSubtitle:
        "Contact the office for clarification, attachments, or schedule updates.",
      contactAction: "Contact the office",
      quickTitle: "Quick reminders",
      quickSubtitle: "Keep these items on your checklist.",
      quickItems: [
        "Carry school ID for exam entry.",
        "Check the student portal for updates.",
        "Confirm transport changes 24 hours ahead.",
      ],
    },
    bn: {
      badge: "????? ?????",
      title: "?????, ???????? ? ??????",
      subtitle: "??????? ???????? ? ????????? ??? ??????",
      latestTitle: "??????? ?????",
      latestSubtitle: "????? ???? ???? ???????? ???? ??????",
      statusLabel: "??????",
      audienceLabel: "?????? ??????",
      categoryLabel: "?????",
      dateLabel: "?????",
      readAction: "????? ????",
      contactTitle: "???? ????? ???????? ???????",
      contactSubtitle:
        "????????, ???????? ?? ??????? ????? ????? ??????? ?????",
      contactAction: "????? ???????",
      quickTitle: "????? ????????",
      quickSubtitle: "????????? ??????",
      quickItems: [
        "???????? ???? ???? ????? ???? ??????",
        "????????? ???????? ?????? ????? ??????",
        "?????? ???????? ?? ????? ??? ??????? ?????",
      ],
    },
  }[language];

  const statusVariant = (
    status: string
  ): "default" | "info" | "success" | "warn" => {
    const normalized = status.toLowerCase();
    if (normalized.includes("new") || normalized.includes("open")) {
      return "success";
    }
    if (normalized.includes("????") || normalized.includes("????")) {
      return "success";
    }
    if (normalized.includes("scheduled")) {
      return "info";
    }
    if (normalized.includes("?????????")) {
      return "info";
    }
    return "default";
  };

  return (
    <div className="space-y-12 page-gutter py-12 md:py-16">
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
          title={content.latestTitle}
          subtitle={content.latestSubtitle}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {notices.map((notice) => (
            <Card key={notice.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <CardTitle>{notice.title}</CardTitle>
                  <Badge variant={statusVariant(notice.status)}>
                    {content.statusLabel}: {notice.status}
                  </Badge>
                </div>
                <p className="text-sm text-[var(--color-muted)]">
                  {notice.excerpt}
                </p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-[var(--color-muted)]">
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span>
                      {content.categoryLabel}: {notice.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>
                      {content.audienceLabel}: {notice.audience}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>
                      {content.dateLabel}: {notice.date}
                    </span>
                  </div>
                </div>
                <p>{notice.body}</p>
                <Button variant="outline" className="w-full">
                  {content.readAction}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>{content.contactTitle}</CardTitle>
            <p className="text-sm text-[var(--color-muted)]">
              {content.contactSubtitle}
            </p>
          </CardHeader>
          <CardContent>
            <Button variant="gold" asChild>
              <Link href="/contact">{content.contactAction}</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[var(--color-blue-100)]">
          <CardHeader>
            <CardTitle>{content.quickTitle}</CardTitle>
            <p className="text-sm text-[var(--color-muted)]">
              {content.quickSubtitle}
            </p>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[var(--color-muted)]">
            {content.quickItems.map((item) => (
              <p key={item}>- {item}</p>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




