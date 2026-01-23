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
          badge: "à¦ªà§à¦°à¦¥à¦® à¦¸à§‡à¦Ÿà¦†à¦ª",
          title: "à¦ªà§à¦°à¦¥à¦® à¦…à§à¦¯à¦¾à¦¡à¦®à¦¿à¦¨ à¦¤à§ˆà¦°à¦¿ à¦•à¦°à§à¦¨",
          subtitle: "à¦à¦‡ à¦ªà¦¾à¦¤à¦¾à¦Ÿà¦¿ à¦à¦•à¦¬à¦¾à¦°à¦‡ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
          placeholders: {
            name: "à¦…à§à¦¯à¦¾à¦¡à¦®à¦¿à¦¨à§‡à¦° à¦¨à¦¾à¦®",
            id: "à¦…à§à¦¯à¦¾à¦¡à¦®à¦¿à¦¨ à¦†à¦‡à¦¡à¦¿",
            phone: "à¦®à§‹à¦¬à¦¾à¦‡à¦²",
            email: "à¦‡à¦®à§‡à¦‡à¦²",
            password: "à¦ªà¦¾à¦¸à¦“à§Ÿà¦¾à¦°à§à¦¡",
          },
          submit: "à¦…à§à¦¯à¦¾à¦¡à¦®à¦¿à¦¨ à¦¤à§ˆà¦°à¦¿ à¦•à¦°à§à¦¨",
          success: "à¦…à§à¦¯à¦¾à¦¡à¦®à¦¿à¦¨ à¦¤à§ˆà¦°à¦¿ à¦¹à§Ÿà§‡à¦›à§‡à¥¤ à¦à¦–à¦¨ à¦²à¦—à¦‡à¦¨ à¦•à¦°à§à¦¨à¥¤",
          error: "à¦…à§à¦¯à¦¾à¦¡à¦®à¦¿à¦¨ à¦¤à§ˆà¦°à¦¿ à¦•à¦°à¦¾ à¦¯à¦¾à§Ÿà¦¨à¦¿à¥¤",
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
    <div className="space-y-10 px-3 py-12 md:px-4 md:py-16 2xl:px-0">
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



