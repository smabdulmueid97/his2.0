"use client";

import { useMemo, useState } from "react";

import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SetupPage() {
  const { language } = useLanguage();
  const content = useMemo(
    () =>
      ({
        bn: {
          badge: "প্রথম সেটআপ",
          title: "প্রথম অ্যাডমিন তৈরি করুন",
          subtitle: "এই পাতাটি একবারই ব্যবহার করুন।",
          placeholders: {
            name: "অ্যাডমিনের নাম",
            id: "অ্যাডমিন আইডি",
            phone: "মোবাইল",
            email: "ইমেইল",
            password: "পাসওয়ার্ড",
          },
          submit: "অ্যাডমিন তৈরি করুন",
          success: "অ্যাডমিন তৈরি হয়েছে। এখন লগইন করুন।",
          error: "অ্যাডমিন তৈরি করা যায়নি।",
        },
        en: {
          badge: "Initial Setup",
          title: "Create the first admin",
          subtitle: "Use this page only once.",
          placeholders: {
            name: "Admin name",
            id: "Admin ID",
            phone: "Phone",
            email: "Email",
            password: "Password",
          },
          submit: "Create admin",
          success: "Admin created. You can login now.",
          error: "Unable to create admin.",
        },
      } as const)[language],
    [language]
  );

  const [formData, setFormData] = useState({
    fullName: "",
    schoolId: "",
    phone: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState<"idle" | "saving" | "sent" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string | null>(null);

  const handleFieldChange =
    (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
      if (status !== "idle") {
        setStatus("idle");
        setMessage(null);
      }
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("saving");
    setMessage(null);

    const response = await fetch("/api/setup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      setStatus("error");
      setMessage(data.error ?? content.error);
      return;
    }

    setStatus("sent");
    setMessage(content.success);
    setFormData({
      fullName: "",
      schoolId: "",
      phone: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="space-y-10 px-4 py-12 md:px-4 md:py-16 2xl:px-0">
      <div className="mx-auto max-w-2xl space-y-6">
        <Badge variant="warn">{content.badge}</Badge>
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
              <Input
                placeholder={content.placeholders.name}
                value={formData.fullName}
                onChange={handleFieldChange("fullName")}
                required
              />
              <Input
                placeholder={content.placeholders.id}
                value={formData.schoolId}
                onChange={handleFieldChange("schoolId")}
                required
              />
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  placeholder={content.placeholders.phone}
                  value={formData.phone}
                  onChange={handleFieldChange("phone")}
                />
                <Input
                  placeholder={content.placeholders.email}
                  value={formData.email}
                  onChange={handleFieldChange("email")}
                  type="email"
                />
              </div>
              <Input
                placeholder={content.placeholders.password}
                value={formData.password}
                onChange={handleFieldChange("password")}
                type="password"
                required
              />
              <Button variant="gold" type="submit" disabled={status === "saving"}>
                {content.submit}
              </Button>
              {message ? (
                <p
                  className={`text-sm ${
                    status === "error" ? "text-red-600" : "text-[var(--color-blue-700)]"
                  }`}
                >
                  {message}
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



