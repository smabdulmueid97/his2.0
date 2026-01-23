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
          badge: "à¦¶à¦¿à¦•à§à¦·à¦•",
          title: "à¦¶à¦¿à¦•à§à¦·à¦• à¦ªà§‹à¦°à§à¦Ÿà¦¾à¦²",
          subtitle: "à¦†à¦ªà¦¨à¦¾à¦° à¦¤à¦¥à§à¦¯ à¦“ à¦¦à§ˆà¦¨à¦¨à§à¦¦à¦¿à¦¨ à¦•à¦¾à¦œà§‡à¦° à¦¸à¦‚à¦•à§à¦·à¦¿à¦ªà§à¦¤ à¦­à¦¿à¦‰à¥¤",
          profileHeading: "à¦ªà§à¦°à§‹à¦«à¦¾à¦‡à¦² à¦¤à¦¥à§à¦¯",
          labels: {
            name: "à¦¨à¦¾à¦®",
            id: "à¦¶à¦¿à¦•à§à¦·à¦• à¦†à¦‡à¦¡à¦¿",
            designation: "à¦ªà¦¦à¦¬à¦¿",
            subject: "à¦¬à¦¿à¦·à§Ÿ",
            phone: "à¦®à§‹à¦¬à¦¾à¦‡à¦²",
            fingerprint: "à¦«à¦¿à¦™à§à¦—à¦¾à¦°à¦ªà§à¦°à¦¿à¦¨à§à¦Ÿ à¦†à¦‡à¦¡à¦¿",
          },
          toolsHeading: "à¦¶à¦¿à¦•à§à¦·à¦• à¦Ÿà§à¦²à¦¸",
          toolsSubtitle: "à¦ªà§à¦°à¦¤à¦¿à¦¦à¦¿à¦¨à§‡à¦° à¦•à¦¾à¦œ à¦¦à§à¦°à§à¦¤ à¦¸à¦®à§à¦ªà¦¨à§à¦¨ à¦•à¦°à§à¦¨à¥¤",
          tools: [
            {
              icon: Fingerprint,
              title: "à¦‰à¦ªà¦¸à§à¦¥à¦¿à¦¤à¦¿ à¦¯à¦¾à¦šà¦¾à¦‡",
              detail: "à¦•à§à¦²à¦¾à¦¸à§‡à¦° à¦‰à¦ªà¦¸à§à¦¥à¦¿à¦¤à¦¿ à¦¦à§à¦°à§à¦¤ à¦¨à¦¿à¦¶à§à¦šà¦¿à¦¤ à¦•à¦°à§à¦¨à¥¤",
            },
            {
              icon: CalendarCheck,
              title: "à¦•à§à¦²à¦¾à¦¸ à¦°à§à¦Ÿà¦¿à¦¨",
              detail: "à¦°à§à¦Ÿà¦¿à¦¨ à¦“ à¦•à§à¦²à¦¾à¦¸ à¦¶à¦¿à¦¡à¦¿à¦‰à¦² à¦†à¦ªà¦¡à§‡à¦Ÿ à¦°à¦¾à¦–à§à¦¨à¥¤",
            },
            {
              icon: ClipboardCheck,
              title: "à¦°à§‡à¦œà¦¾à¦²à§à¦Ÿ à¦†à¦ªà¦¡à§‡à¦Ÿ",
              detail: "à¦ªà¦°à§€à¦•à§à¦·à¦¾à¦° à¦¨à¦®à§à¦¬à¦° à¦“ à¦«à¦²à¦¾à¦«à¦² à¦¸à¦‚à¦°à¦•à§à¦·à¦£ à¦•à¦°à§à¦¨à¥¤",
            },
            {
              icon: Laptop2,
              title: "à¦…à¦¨à¦²à¦¾à¦‡à¦¨ à¦•à§à¦²à¦¾à¦¸",
              detail: "à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§‡ à¦…à¦¨à¦²à¦¾à¦‡à¦¨ à¦•à§à¦²à¦¾à¦¸ à¦šà¦¾à¦²à§ à¦•à¦°à§à¦¨à¥¤",
            },
          ],
          loading: "à¦²à§‹à¦¡ à¦¹à¦šà§à¦›à§‡...",
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




