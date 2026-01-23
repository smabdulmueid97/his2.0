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
          badge: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€",
          title: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€ à¦ªà§‹à¦°à§à¦Ÿà¦¾à¦²",
          subtitle: "à¦‰à¦ªà¦¸à§à¦¥à¦¿à¦¤à¦¿, à¦¤à¦¥à§à¦¯ à¦à¦¬à¦‚ à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§€à§Ÿ à¦¸à§‡à¦¬à¦¾ à¦à¦• à¦œà¦¾à§Ÿà¦—à¦¾à§Ÿà¥¤",
          profile: {
            title: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€ à¦¤à¦¥à§à¦¯",
            labels: {
              name: "à¦¨à¦¾à¦®",
              id: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€ à¦†à¦‡à¦¡à¦¿",
              grade: "à¦¶à§à¦°à§‡à¦£à¦¿",
              section: "à¦¶à¦¾à¦–à¦¾",
              phone: "à¦®à§‹à¦¬à¦¾à¦‡à¦²",
              guardian: "à¦…à¦­à¦¿à¦­à¦¾à¦¬à¦•",
              fingerprint: "à¦«à¦¿à¦™à§à¦—à¦¾à¦°à¦ªà§à¦°à¦¿à¦¨à§à¦Ÿ à¦†à¦‡à¦¡à¦¿",
            },
          },
          attendance: {
            title: "à¦‰à¦ªà¦¸à§à¦¥à¦¿à¦¤à¦¿ à¦¤à¦¾à¦²à¦¿à¦•à¦¾",
            empty: "à¦à¦‡ à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€à¦° à¦•à§‹à¦¨à§‹ à¦‰à¦ªà¦¸à§à¦¥à¦¿à¦¤à¦¿ à¦¨à§‡à¦‡à¥¤",
            fingerprint: "à¦«à¦¿à¦™à§à¦—à¦¾à¦°à¦ªà§à¦°à¦¿à¦¨à§à¦Ÿ à¦†à¦‡à¦¡à¦¿",
          },
          featuresHeading: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€ à¦¸à§‡à¦¬à¦¾",
          featuresSubtitle: "à¦¦à§ˆà¦¨à¦¨à§à¦¦à¦¿à¦¨ à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§‡à¦° à¦¸à¦¬à¦•à¦¿à¦›à§ à¦à¦• à¦œà¦¾à§Ÿà¦—à¦¾à§Ÿà¥¤",
          features: [
            {
              icon: Fingerprint,
              title: "à¦«à¦¿à¦™à§à¦—à¦¾à¦°à¦ªà§à¦°à¦¿à¦¨à§à¦Ÿ à¦‰à¦ªà¦¸à§à¦¥à¦¿à¦¤à¦¿",
              detail: "à¦ªà§à¦°à¦¤à¦¿à¦¦à¦¿à¦¨ à¦‰à¦ªà¦¸à§à¦¥à¦¿à¦¤à¦¿ à¦¸à§à¦¬à§Ÿà¦‚à¦•à§à¦°à¦¿à§Ÿà¦­à¦¾à¦¬à§‡ à¦¸à¦‚à¦°à¦•à§à¦·à¦£ à¦¹à§Ÿà¥¤",
            },
            {
              icon: Wallet,
              title: "à¦«à¦¿ à¦¤à¦¥à§à¦¯",
              detail: "à¦¬à¦•à§‡à§Ÿà¦¾ à¦“ à¦ªà¦°à¦¿à¦¶à§‹à¦§à§‡à¦° à¦¤à¦¥à§à¦¯ à¦¹à¦¿à¦¸à¦¾à¦¬ à¦…à¦«à¦¿à¦¸à§‡ à¦¨à¦¿à¦¶à§à¦šà¦¿à¦¤ à¦¹à§Ÿà¥¤",
            },
            {
              icon: BookOpenCheck,
              title: "à¦¸à¦¿à¦²à§‡à¦¬à¦¾à¦¸ à¦“ à¦¨à§‹à¦Ÿà¦¿à¦¶",
              detail: "à¦•à§à¦²à¦¾à¦¸à§‡à¦° à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§€à§Ÿ à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶à¦¨à¦¾ à¦“ à¦¨à§‹à¦Ÿà¦¿à¦¶ à¦à¦• à¦œà¦¾à§Ÿà¦—à¦¾à§Ÿà¥¤",
            },
          ],
          loading: "à¦²à§‹à¦¡ à¦¹à¦šà§à¦›à§‡...",
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




