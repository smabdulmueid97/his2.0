"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type LoginRole = "student" | "teacher" | "admin";

export default function LoginClient() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next");

  const content = useMemo(
    () =>
      ({
        bn: {
          badge: "à¦²à¦—à¦‡à¦¨",
          title: "à¦†à¦ªà¦¨à¦¾à¦° à¦…à§à¦¯à¦¾à¦•à¦¾à¦‰à¦¨à§à¦Ÿà§‡ à¦ªà§à¦°à¦¬à§‡à¦¶ à¦•à¦°à§à¦¨",
          subtitle: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€, à¦¶à¦¿à¦•à§à¦·à¦• à¦¬à¦¾ à¦…à§à¦¯à¦¾à¦¡à¦®à¦¿à¦¨ à¦¹à¦¿à¦¸à§‡à¦¬à§‡ à¦²à¦—à¦‡à¦¨ à¦•à¦°à§à¦¨à¥¤",
          roleLabel: "à¦°à§‹à¦² à¦¨à¦¿à¦°à§à¦¬à¦¾à¦šà¦¨",
          roles: {
            student: "à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€",
            teacher: "à¦¶à¦¿à¦•à§à¦·à¦•",
            admin: "à¦…à§à¦¯à¦¾à¦¡à¦®à¦¿à¦¨",
          },
          placeholders: {
            id: "à¦†à¦‡à¦¡à¦¿",
            password: "à¦ªà¦¾à¦¸à¦“à§Ÿà¦¾à¦°à§à¦¡",
          },
          submit: "à¦²à¦—à¦‡à¦¨ à¦•à¦°à§à¦¨",
          error: "à¦²à¦—à¦‡à¦¨ à¦¬à§à¦¯à¦°à§à¦¥à¥¤ à¦¤à¦¥à§à¦¯ à¦¯à¦¾à¦šà¦¾à¦‡ à¦•à¦°à§à¦¨à¥¤",
          setup: "à¦ªà§à¦°à¦¥à¦® à¦…à§à¦¯à¦¾à¦¡à¦®à¦¿à¦¨ à¦¤à§ˆà¦°à¦¿ à¦•à¦°à§à¦¨",
        },
        en: {
          badge: "Login",
          title: "Access your account",
          subtitle: "Login as a student, teacher, or admin.",
          roleLabel: "Select role",
          roles: {
            student: "Student",
            teacher: "Teacher",
            admin: "Admin",
          },
          placeholders: {
            id: "ID",
            password: "Password",
          },
          submit: "Login",
          error: "Login failed. Please check your details.",
          setup: "Create the first admin",
        },
      } as const)[language],
    [language]
  );

  const [role, setRole] = useState<LoginRole>("student");
  const [schoolId, setSchoolId] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleValueChange = (setter: (value: string) => void) => {
    return (value: string) => {
      setter(value);
      if (status === "error") {
        setStatus("idle");
      }
    };
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, schoolId, password }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    const data = await response.json();
    const redirectTo = nextPath || data.redirect || "/";
    window.location.href = redirectTo;
  };

  return (
    <div className="space-y-10 page-gutter py-12 md:py-16">
      <div className="mx-auto max-w-2xl space-y-6">
        <Badge variant="info">{content.badge}</Badge>
        <h1 className="text-3xl font-semibold text-[var(--color-ink)] md:text-4xl">
          {content.title}
        </h1>
        <p className="text-base text-[var(--color-muted)] md:text-lg">
          {content.subtitle}
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>{content.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="text-sm font-semibold text-[var(--color-muted)]">
                {content.roleLabel}
              </label>
              <select
                value={role}
                onChange={(event) => {
                  setRole(event.target.value as LoginRole);
                  if (status === "error") {
                    setStatus("idle");
                  }
                }}
                className="h-11 w-full rounded-full border border-[var(--color-line)] bg-[var(--color-white)] px-4 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-blue-700)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-blue-700),#fff_70%)]"
              >
                <option value="student">{content.roles.student}</option>
                <option value="teacher">{content.roles.teacher}</option>
                <option value="admin">{content.roles.admin}</option>
              </select>
              <Input
                placeholder={content.placeholders.id}
                value={schoolId}
                onChange={(event) =>
                  handleValueChange(setSchoolId)(event.target.value)
                }
                required
              />
              <Input
                placeholder={content.placeholders.password}
                type="password"
                value={password}
                onChange={(event) =>
                  handleValueChange(setPassword)(event.target.value)
                }
                required
              />
              <Button variant="gold" type="submit" disabled={status === "loading"}>
                {content.submit}
              </Button>
              {status === "error" ? (
                <p className="text-sm text-red-600">{content.error}</p>
              ) : null}
              <Button variant="outline" asChild>
                <Link href="/setup">{content.setup}</Link>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
