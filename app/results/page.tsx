"use client";

import { Download, Search } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { results } from "@/lib/mockData";

export default function ResultsPage() {
  const { language } = useLanguage();
  const content = {
    en: {
      badge: "Results",
      title: "Exam results and performance summaries.",
      subtitle: "Search by student ID and term, or view recent results below.",
      searchTitle: "Find a result",
      searchSubtitle: "Use student ID and term to filter results.",
      search: {
        studentId: "Student ID",
        term: "Term (e.g. Term I)",
        button: "Search results",
      },
      recentTitle: "Recent results",
      recentSubtitle: "Latest published results from the academic office.",
      statusLabel: "Status",
      gpaLabel: "GPA",
      meritLabel: "Merit",
      subjectsLabel: "Subject scores",
      remarksLabel: "Remarks",
      downloadLabel: "Download result",
      noteTitle: "Result policy",
      noteDetail:
        "For recheck requests, contact the academic office within seven working days.",
    },
    bn: {
      badge: "ফলাফল",
      title: "পরীক্ষার ফলাফল ও পারফরম্যান্স সারসংক্ষেপ।",
      subtitle:
        "শিক্ষার্থী আইডি ও টার্ম অনুযায়ী খুঁজুন অথবা নিচে সাম্প্রতিক ফলাফল দেখুন।",
      searchTitle: "ফলাফল খুঁজুন",
      searchSubtitle: "শিক্ষার্থী আইডি ও টার্ম ব্যবহার করুন।",
      search: {
        studentId: "শিক্ষার্থী আইডি",
        term: "টার্ম (যেমন: টার্ম-১)",
        button: "ফলাফল খুঁজুন",
      },
      recentTitle: "সাম্প্রতিক ফলাফল",
      recentSubtitle: "একাডেমিক অফিস থেকে সর্বশেষ প্রকাশিত ফলাফল।",
      statusLabel: "অবস্থা",
      gpaLabel: "জিপিএ",
      meritLabel: "মেধাক্রম",
      subjectsLabel: "বিষয়ভিত্তিক নম্বর",
      remarksLabel: "মন্তব্য",
      downloadLabel: "ফলাফল ডাউনলোড",
      noteTitle: "ফলাফল নীতিমালা",
      noteDetail:
        "পুনঃনিরীক্ষার জন্য সাত কর্মদিবসের মধ্যে একাডেমিক অফিসে যোগাযোগ করুন।",
    },
  }[language];

  const getStatusVariant = (
    status: string
  ): "default" | "info" | "success" | "warn" => {
    const normalized = status.toLowerCase();
    if (normalized.includes("pass")) {
      return "success";
    }
    if (normalized.includes("উত্তীর্ণ") || normalized.includes("পাস")) {
      return "success";
    }
    if (normalized.includes("wait")) {
      return "warn";
    }
    if (normalized.includes("অপেক্ষ")) {
      return "warn";
    }
    return "default";
  };

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
          title={content.searchTitle}
          subtitle={content.searchSubtitle}
        />
        <Card>
          <CardContent className="grid gap-4 py-6 md:grid-cols-[1fr_1fr_auto] md:items-end">
            <Input placeholder={content.search.studentId} />
            <Input placeholder={content.search.term} />
            <Button variant="gold" className="md:justify-self-start">
              <Search className="h-4 w-4" />
              {content.search.button}
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.recentTitle}
          subtitle={content.recentSubtitle}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {results.map((result) => (
            <Card key={result.id}>
              <CardHeader className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <CardTitle>{result.student}</CardTitle>
                  <Badge variant={getStatusVariant(result.status)}>
                    {content.statusLabel}: {result.status}
                  </Badge>
                </div>
                <p className="text-sm text-[var(--color-muted)]">
                  {result.grade} | {result.term}
                </p>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[var(--color-muted)]">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide">
                      {content.gpaLabel}
                    </p>
                    <p className="text-lg font-semibold text-[var(--color-ink)]">
                      {result.gpa}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">
                      {content.meritLabel}
                    </p>
                    <p className="text-lg font-semibold text-[var(--color-ink)]">
                      {result.merit}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide">
                      {content.remarksLabel}
                    </p>
                    <p className="text-[var(--color-ink)]">{result.remarks}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]">
                    {content.subjectsLabel}
                  </p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {result.subjectScores.map((score) => (
                      <p key={score}>{score}</p>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4" />
                  {content.downloadLabel}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl">
        <Card className="bg-[var(--color-blue-100)]">
          <CardHeader>
            <CardTitle>{content.noteTitle}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-[var(--color-muted)]">
            {content.noteDetail}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




