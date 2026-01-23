"use client";

import { CalendarDays, Clock, NotebookPen } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { routines } from "@/lib/mockData";

export default function RoutinePage() {
  const { language } = useLanguage();
  const content = {
    en: {
      badge: "Routine",
      title: "Class routines and daily activities.",
      subtitle: "Keep schedules organized for every grade.",
      dailyTitle: "Daily rhythm",
      dailySubtitle: "Typical day blocks for students on campus.",
      daily: [
        { time: "8:00 AM", label: "Morning assembly and announcements" },
        { time: "8:20 AM", label: "Classes begin" },
        { time: "10:30 AM", label: "Short break" },
        { time: "1:00 PM", label: "Lunch and prayer" },
        { time: "2:10 PM", label: "Co-curricular sessions" },
      ],
      routineTitle: "Class routines",
      routineSubtitle: "Schedules by grade and section.",
      highlightsLabel: "Highlights",
      downloadLabel: "Download routine",
      activityTitle: "Weekly activities",
      activitySubtitle: "Clubs, labs, and creative sessions.",
      activities: [
        "STEM lab sessions twice a week",
        "Debate club every Wednesday",
        "Sports practice on Thursdays",
        "Arts and music workshops every month",
      ],
    },
    bn: {
      badge: "রুটিন",
      title: "ক্লাস রুটিন ও দৈনিক কার্যক্রম।",
      subtitle: "প্রতিটি শ্রেণির সময়সূচি সহজে রাখুন।",
      dailyTitle: "দৈনিক রুটিন",
      dailySubtitle: "ক্যাম্পাসের একটি সাধারণ দিনের ধাপসমূহ।",
      daily: [
        { time: "সকাল ৮:০০", label: "সকালের সমাবেশ ও ঘোষণা" },
        { time: "সকাল ৮:২০", label: "ক্লাস শুরু" },
        { time: "সকাল ১০:৩০", label: "স্বল্প বিরতি" },
        { time: "দুপুর ১:০০", label: "দুপুরের খাবার ও নামাজ" },
        { time: "দুপুর ২:১০", label: "সহশিক্ষা সেশন" },
      ],
      routineTitle: "ক্লাস রুটিন",
      routineSubtitle: "শ্রেণি ও শাখা অনুযায়ী সময়সূচি।",
      highlightsLabel: "হাইলাইটস",
      downloadLabel: "রুটিন ডাউনলোড",
      activityTitle: "সাপ্তাহিক কার্যক্রম",
      activitySubtitle: "ক্লাব, ল্যাব ও সৃজনশীল সেশন।",
      activities: [
        "সপ্তাহে দুই দিন STEM ল্যাব",
        "প্রতি বুধবার বিতর্ক ক্লাব",
        "বৃহস্পতিবার ক্রীড়া অনুশীলন",
        "প্রতি মাসে আর্ট ও সংগীত কর্মশালা",
      ],
    },
  }[language];

  return (
    <div className="space-y-12 px-3 py-12 md:px-4 md:py-16 2xl:px-0">
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
          title={content.dailyTitle}
          subtitle={content.dailySubtitle}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.daily.map((item) => (
            <Card key={item.time}>
              <CardContent className="flex items-start gap-3 py-6">
                <Clock className="mt-0.5 h-5 w-5 text-[var(--color-blue-700)]" />
                <div>
                  <p className="text-base font-semibold text-[var(--color-ink)]">
                    {item.time}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    {item.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.routineTitle}
          subtitle={content.routineSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {routines.map((routine) => (
            <Card key={routine.id}>
              <CardHeader>
                <Badge variant="warn">
                  {routine.grade} - {routine.section}
                </Badge>
                <CardTitle>{routine.days}</CardTitle>
                <p className="text-sm text-[var(--color-muted)]">
                  {routine.time}
                </p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-[var(--color-muted)]">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{routine.room}</span>
                </div>
                <div className="flex items-center gap-2">
                  <NotebookPen className="h-4 w-4" />
                  <span>{routine.teacher}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]">
                    {content.highlightsLabel}
                  </p>
                  <div className="mt-2 space-y-1">
                    {routine.highlights.map((highlight) => (
                      <p key={highlight}>{highlight}</p>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  {content.downloadLabel}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.activityTitle}
          subtitle={content.activitySubtitle}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {content.activities.map((activity) => (
            <Card key={activity}>
              <CardContent className="py-6 text-sm text-[var(--color-muted)]">
                {activity}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}




