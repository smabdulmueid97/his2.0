"use client";

import { BookOpenCheck, Fingerprint, Wallet } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StudentProfile = {
  fullName: string;
  schoolId: string;
  grade?: string;
  section?: string;
  phone?: string;
  guardianName?: string;
  fingerprintId?: string;
};

type AttendanceEntry = {
  _id: string;
  fingerprintId: string;
  recordedAt: string;
};

export default function StudentPage() {
  const { language } = useLanguage();
  const content = useMemo(
    () =>
      ({
        bn: {
          badge: "শিক্ষার্থী",
          title: "শিক্ষার্থী পোর্টাল",
          subtitle: "উপস্থিতি, তথ্য এবং প্রয়োজনীয় সেবা এক জায়গায়।",
          profile: {
            title: "শিক্ষার্থী তথ্য",
            labels: {
              name: "নাম",
              id: "শিক্ষার্থী আইডি",
              grade: "শ্রেণি",
              section: "শাখা",
              phone: "মোবাইল",
              guardian: "অভিভাবক",
              fingerprint: "ফিঙ্গারপ্রিন্ট আইডি",
            },
          },
          attendance: {
            title: "উপস্থিতি তালিকা",
            empty: "এই শিক্ষার্থীর কোনো উপস্থিতি নেই।",
            fingerprint: "ফিঙ্গারপ্রিন্ট আইডি",
          },
          featuresHeading: "শিক্ষার্থী সেবা",
          featuresSubtitle: "দৈনন্দিন প্রয়োজনের সবকিছু এক জায়গায়।",
          features: [
            {
              icon: Fingerprint,
              title: "ফিঙ্গারপ্রিন্ট উপস্থিতি",
              detail: "প্রতিদিন উপস্থিতি স্বয়ংক্রিয়ভাবে সংরক্ষণ হয়।",
            },
            {
              icon: Wallet,
              title: "ফি তথ্য",
              detail: "বকেয়া ও পরিশোধের তথ্য হিসাব অফিসে নিশ্চিত হয়।",
            },
            {
              icon: BookOpenCheck,
              title: "সিলেবাস ও নোটিশ",
              detail: "ক্লাসের প্রয়োজনীয় নির্দেশনা ও নোটিশ এক জায়গায়।",
            },
          ],
          loading: "লোড হচ্ছে...",
        },
        en: {
          badge: "Student",
          title: "Student portal",
          subtitle: "Attendance, profile info, and everyday services in one view.",
          profile: {
            title: "Student profile",
            labels: {
              name: "Name",
              id: "Student ID",
              grade: "Grade",
              section: "Section",
              phone: "Phone",
              guardian: "Guardian",
              fingerprint: "Fingerprint ID",
            },
          },
          attendance: {
            title: "Attendance log",
            empty: "No attendance recorded yet.",
            fingerprint: "Fingerprint ID",
          },
          featuresHeading: "Student services",
          featuresSubtitle: "Everything you need in one place.",
          features: [
            {
              icon: Fingerprint,
              title: "Fingerprint attendance",
              detail: "Daily attendance is recorded automatically.",
            },
            {
              icon: Wallet,
              title: "Fee info",
              detail: "Payment status is confirmed by the accounts office.",
            },
            {
              icon: BookOpenCheck,
              title: "Syllabus & notices",
              detail: "Class guidelines and notices stay organized here.",
            },
          ],
          loading: "Loading...",
        },
      } as const)[language],
    [language]
  );

  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [attendance, setAttendance] = useState<AttendanceEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/api/auth/me");
      if (!response.ok) {
        setIsLoading(false);
        return;
      }
      const data = await response.json();
      const student = data.user as StudentProfile | undefined;
      if (!student) {
        setIsLoading(false);
        return;
      }
      setProfile(student);
      const attendanceResponse = await fetch(
        `/api/attendance?studentId=${encodeURIComponent(student.schoolId)}`
      );
      const attendanceData = await attendanceResponse.json();
      setAttendance(attendanceData.attendance ?? []);
      setIsLoading(false);
    };

    void loadData();
  }, []);

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

      <div className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>{content.profile.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[var(--color-muted)]">
            {isLoading ? (
              <p>{content.loading}</p>
            ) : profile ? (
              <>
                <p>
                  {content.profile.labels.name}: {profile.fullName}
                </p>
                <p>
                  {content.profile.labels.id}: {profile.schoolId}
                </p>
                <p>
                  {content.profile.labels.grade}: {profile.grade ?? "-"}
                </p>
                <p>
                  {content.profile.labels.section}: {profile.section ?? "-"}
                </p>
                <p>
                  {content.profile.labels.phone}: {profile.phone ?? "-"}
                </p>
                <p>
                  {content.profile.labels.guardian}: {profile.guardianName ?? "-"}
                </p>
                <p>
                  {content.profile.labels.fingerprint}: {profile.fingerprintId ?? "-"}
                </p>
              </>
            ) : (
              <p>{content.loading}</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{content.attendance.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[var(--color-muted)]">
            {attendance.length === 0 ? (
              <p>{content.attendance.empty}</p>
            ) : (
              attendance.map((entry) => {
                const recordedAt = new Date(entry.recordedAt);
                const dateLabel = Number.isNaN(recordedAt.getTime())
                  ? entry.recordedAt
                  : recordedAt.toLocaleString(
                      language === "bn" ? "bn-BD" : "en-BD",
                      {
                        dateStyle: "medium",
                        timeStyle: "short",
                      }
                    );

                return (
                  <div
                    key={entry._id}
                    className="flex items-center justify-between rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-3"
                  >
                    <span className="font-semibold text-[var(--color-ink)]">
                      {dateLabel}
                    </span>
                    <span className="text-xs">
                      {content.attendance.fingerprint}: {entry.fingerprintId}
                    </span>
                  </div>
                );
              })
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.featuresHeading}
          subtitle={content.featuresSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-6 w-6 text-[var(--color-blue-700)]" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-muted)]">
                {feature.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}




