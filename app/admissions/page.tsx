"use client";

import Link from "next/link";
import { ClipboardCheck, FileText, GraduationCap, UserCheck } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { admissionsList, downloads } from "@/lib/mockData";

export default function AdmissionsPage() {
  const { language } = useLanguage();
  const content = {
    en: {
      badge: "Admissions",
      title: "Admissions, guidance, and application updates.",
      subtitle:
        "Follow the steps below, prepare your documents, and stay informed.",
      stepsTitle: "Admissions steps",
      stepsSubtitle: "A clear path from application to enrollment.",
      steps: [
        {
          icon: FileText,
          title: "Submit application",
          detail: "Complete the form with student and guardian details.",
        },
        {
          icon: ClipboardCheck,
          title: "Assessment & interview",
          detail: "Placement review with short subject checks.",
        },
        {
          icon: UserCheck,
          title: "Confirmation",
          detail: "Receive an offer and complete enrollment.",
        },
      ],
      requirementsTitle: "Eligibility and documents",
      requirementsSubtitle: "Bring these items to your admissions appointment.",
      requirements: [
        "Birth certificate copy",
        "Previous report cards",
        "Two passport-size photos",
        "Guardian NID copy",
        "Transfer certificate (if applicable)",
      ],
      listTitle: "Admissions updates",
      listSubtitle: "Latest updates from the admissions office.",
      listLabels: {
        student: "Student",
        grade: "Grade",
        status: "Status",
        score: "Score",
        interview: "Interview",
      },
      downloadsTitle: "Forms and documents",
      downloadsSubtitle: "Download admissions guides and policy files.",
      downloadAction: "Download",
      supportTitle: "Need help?",
      supportSubtitle:
        "Our admissions team is ready to answer questions and schedule visits.",
      supportAction: "Contact admissions",
      visitTitle: "Campus visit",
      visitDetail:
        "Campus tours run Sunday to Thursday between 10:00 AM and 2:00 PM.",
      programsTitle: "Programs offered",
      programsSubtitle: "Academic stages across the school.",
      programs: [
        "Primary: Grades 1-5",
        "Middle: Grades 6-8",
        "Senior: Grades 9-12",
      ],
    },
    bn: {
      badge: "Admissions",
      title: "Admissions, guidance, and application updates.",
      subtitle:
        "Follow the steps below, prepare your documents, and stay informed.",
      stepsTitle: "Admissions steps",
      stepsSubtitle: "A clear path from application to enrollment.",
      steps: [
        {
          icon: FileText,
          title: "Submit application",
          detail: "Complete the form with student and guardian details.",
        },
        {
          icon: ClipboardCheck,
          title: "Assessment & interview",
          detail: "Placement review with short subject checks.",
        },
        {
          icon: UserCheck,
          title: "Confirmation",
          detail: "Receive an offer and complete enrollment.",
        },
      ],
      requirementsTitle: "Eligibility and documents",
      requirementsSubtitle: "Bring these items to your admissions appointment.",
      requirements: [
        "Birth certificate copy",
        "Previous report cards",
        "Two passport-size photos",
        "Guardian NID copy",
        "Transfer certificate (if applicable)",
      ],
      listTitle: "Admissions updates",
      listSubtitle: "Latest updates from the admissions office.",
      listLabels: {
        student: "Student",
        grade: "Grade",
        status: "Status",
        score: "Score",
        interview: "Interview",
      },
      downloadsTitle: "Forms and documents",
      downloadsSubtitle: "Download admissions guides and policy files.",
      downloadAction: "Download",
      supportTitle: "Need help?",
      supportSubtitle:
        "Our admissions team is ready to answer questions and schedule visits.",
      supportAction: "Contact admissions",
      visitTitle: "Campus visit",
      visitDetail:
        "Campus tours run Sunday to Thursday between 10:00 AM and 2:00 PM.",
      programsTitle: "Programs offered",
      programsSubtitle: "Academic stages across the school.",
      programs: [
        "Primary: Grades 1-5",
        "Middle: Grades 6-8",
        "Senior: Grades 9-12",
      ],
    },
  }[language];

  const getStatusVariant = (
    status: string
  ): "default" | "info" | "success" | "warn" => {
    const normalized = status.toLowerCase();
    if (normalized.includes("selected") || normalized.includes("shortlisted")) {
      return "success";
    }
    if (normalized.includes("wait")) {
      return "warn";
    }
    if (normalized.includes("interview")) {
      return "info";
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
          title={content.stepsTitle}
          subtitle={content.stepsSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.steps.map((step) => (
            <Card key={step.title}>
              <CardHeader>
                <step.icon className="h-6 w-6 text-[var(--color-blue-700)]" />
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-muted)]">
                {step.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>{content.requirementsTitle}</CardTitle>
            <p className="text-sm text-[var(--color-muted)]">
              {content.requirementsSubtitle}
            </p>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[var(--color-muted)]">
            {content.requirements.map((item) => (
              <p key={item}>- {item}</p>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-[var(--color-blue-900)] text-[var(--color-white)]">
          <CardHeader>
            <CardTitle className="text-[var(--color-white)]">
              {content.programsTitle}
            </CardTitle>
            <p className="text-sm text-[rgba(255,255,255,0.7)]">
              {content.programsSubtitle}
            </p>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[rgba(255,255,255,0.75)]">
            {content.programs.map((program) => (
              <p key={program}>{program}</p>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.listTitle}
          subtitle={content.listSubtitle}
        />
        <div className="grid gap-4">
          {admissionsList.map((entry) => (
            <Card key={entry.id}>
              <CardContent className="grid gap-3 py-6 text-sm text-[var(--color-muted)] md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] md:items-center">
                <div>
                  <p className="text-base font-semibold text-[var(--color-ink)]">
                    {entry.student}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {content.listLabels.grade}: {entry.grade}
                  </p>
                </div>
                <div>
                  <Badge variant={getStatusVariant(entry.status)}>
                    {entry.status}
                  </Badge>
                </div>
                <p>
                  {content.listLabels.score}: {entry.score}
                </p>
                <p>
                  {content.listLabels.interview}: {entry.interviewDate}
                </p>
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
            <CardTitle>{content.supportTitle}</CardTitle>
            <p className="text-sm text-[var(--color-muted)]">
              {content.supportSubtitle}
            </p>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <Button variant="gold" asChild>
              <Link href="/contact">{content.supportAction}</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[var(--color-blue-100)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-[var(--color-blue-700)]" />
              {content.visitTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-[var(--color-muted)]">
            {content.visitDetail}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




