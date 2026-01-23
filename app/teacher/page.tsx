"use client";

import { CalendarCheck, ClipboardCheck, Fingerprint, Laptop2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TeacherProfile = {
  fullName: string;
  schoolId: string;
  designation?: string;
  subject?: string;
  phone?: string;
  fingerprintId?: string;
};

export default function TeacherPage() {
  const { language } = useLanguage();
  const content = useMemo(
    () =>
      ({
        bn: {
          badge: "শিক্ষক",
          title: "শিক্ষক পোর্টাল",
          subtitle: "আপনার তথ্য ও দৈনন্দিন কাজের সংক্ষিপ্ত ভিউ।",
          profileHeading: "প্রোফাইল তথ্য",
          labels: {
            name: "নাম",
            id: "শিক্ষক আইডি",
            designation: "পদবি",
            subject: "বিষয়",
            phone: "মোবাইল",
            fingerprint: "ফিঙ্গারপ্রিন্ট আইডি",
          },
          toolsHeading: "শিক্ষক টুলস",
          toolsSubtitle: "প্রতিদিনের কাজ দ্রুত সম্পন্ন করুন।",
          tools: [
            {
              icon: Fingerprint,
              title: "উপস্থিতি যাচাই",
              detail: "ক্লাসের উপস্থিতি দ্রুত নিশ্চিত করুন।",
            },
            {
              icon: CalendarCheck,
              title: "ক্লাস রুটিন",
              detail: "রুটিন ও ক্লাস শিডিউল আপডেট রাখুন।",
            },
            {
              icon: ClipboardCheck,
              title: "রেজাল্ট আপডেট",
              detail: "পরীক্ষার নম্বর ও ফলাফল সংরক্ষণ করুন।",
            },
            {
              icon: Laptop2,
              title: "অনলাইন ক্লাস",
              detail: "প্রয়োজনে অনলাইন ক্লাস চালু করুন।",
            },
          ],
          loading: "লোড হচ্ছে...",
        },
        en: {
          badge: "Teacher",
          title: "Teacher portal",
          subtitle: "Your profile and daily tasks in a simple view.",
          profileHeading: "Profile details",
          labels: {
            name: "Name",
            id: "Teacher ID",
            designation: "Designation",
            subject: "Subject",
            phone: "Phone",
            fingerprint: "Fingerprint ID",
          },
          toolsHeading: "Teacher tools",
          toolsSubtitle: "Keep daily tasks organized.",
          tools: [
            {
              icon: Fingerprint,
              title: "Attendance check",
              detail: "Confirm class attendance quickly.",
            },
            {
              icon: CalendarCheck,
              title: "Class routine",
              detail: "Keep the routine and schedule updated.",
            },
            {
              icon: ClipboardCheck,
              title: "Result updates",
              detail: "Record marks and publish results.",
            },
            {
              icon: Laptop2,
              title: "Online class",
              detail: "Start online sessions when needed.",
            },
          ],
          loading: "Loading...",
        },
      } as const)[language],
    [language]
  );

  const [profile, setProfile] = useState<TeacherProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      const response = await fetch("/api/auth/me");
      if (!response.ok) {
        setIsLoading(false);
        return;
      }
      const data = await response.json();
      setProfile(data.user ?? null);
      setIsLoading(false);
    };
    void loadProfile();
  }, []);

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
          title={content.profileHeading}
          subtitle={content.subtitle}
        />
        <Card>
          <CardContent className="space-y-2 py-6 text-sm text-[var(--color-muted)]">
            {isLoading ? (
              <p>{content.loading}</p>
            ) : profile ? (
              <>
                <p>
                  {content.labels.name}: {profile.fullName}
                </p>
                <p>
                  {content.labels.id}: {profile.schoolId}
                </p>
                <p>
                  {content.labels.designation}: {profile.designation ?? "-"}
                </p>
                <p>
                  {content.labels.subject}: {profile.subject ?? "-"}
                </p>
                <p>
                  {content.labels.phone}: {profile.phone ?? "-"}
                </p>
                <p>
                  {content.labels.fingerprint}: {profile.fingerprintId ?? "-"}
                </p>
              </>
            ) : (
              <p>{content.loading}</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.toolsHeading}
          subtitle={content.toolsSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.tools.map((tool) => (
            <Card key={tool.title}>
              <CardHeader>
                <tool.icon className="h-6 w-6 text-[var(--color-blue-700)]" />
                <CardTitle>{tool.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-muted)]">
                {tool.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}




