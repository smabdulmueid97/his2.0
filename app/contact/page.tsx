"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";

import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const { language } = useLanguage();
  const content = useMemo(
    () =>
      ({
        bn: {
          badge: "à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦—",
          title: "à¦­à¦°à§à¦¤à¦¿ à¦“ à¦¸à¦¹à¦¾à§Ÿà¦¤à¦¾ à¦Ÿà¦¿à¦®à§‡à¦° à¦¸à¦¾à¦¥à§‡ à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦— à¦•à¦°à§à¦¨à¥¤",
          subtitle: "à¦†à¦ªà¦¨à¦¾à¦° à¦ªà§à¦°à¦¶à§à¦¨ à¦¬à¦¾ à¦¤à¦¥à§à¦¯ à¦ªà¦¾à¦ à¦¾à¦¨, à¦†à¦®à¦°à¦¾ à¦¦à§à¦°à§à¦¤ à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦— à¦•à¦°à¦¬à¥¤",
          formTitle: "à¦¬à¦¾à¦°à§à¦¤à¦¾ à¦ªà¦¾à¦ à¦¾à¦¨",
          placeholders: {
            name: "à¦ªà§‚à¦°à§à¦£ à¦¨à¦¾à¦®",
            phone: "à¦®à§‹à¦¬à¦¾à¦‡à¦² à¦¨à¦®à§à¦¬à¦°",
            email: "à¦‡à¦®à§‡à¦‡à¦² à¦ à¦¿à¦•à¦¾à¦¨à¦¾",
            subject: "à¦¬à¦¿à¦·à§Ÿ",
            message: "à¦†à¦ªà¦¨à¦¾à¦° à¦¬à¦¾à¦°à§à¦¤à¦¾ à¦²à¦¿à¦–à§à¦¨",
          },
          submit: "à¦¬à¦¾à¦°à§à¦¤à¦¾ à¦ªà¦¾à¦ à¦¾à¦¨",
          success: "à¦†à¦ªà¦¨à¦¾à¦° à¦¬à¦¾à¦°à§à¦¤à¦¾ à¦ªà¦¾à¦ à¦¾à¦¨à§‹ à¦¹à§Ÿà§‡à¦›à§‡à¥¤ à¦†à¦®à¦°à¦¾ à¦¦à§à¦°à§à¦¤ à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦— à¦•à¦°à¦¬à¥¤",
          error: "à¦¬à¦¾à¦°à§à¦¤à¦¾ à¦ªà¦¾à¦ à¦¾à¦¨à§‹ à¦¯à¦¾à§Ÿà¦¨à¦¿à¥¤ à¦ªà¦°à§‡ à¦šà§‡à¦·à§à¦Ÿà¦¾ à¦•à¦°à§à¦¨à¥¤",
          visitTitle: "à¦•à§à¦¯à¦¾à¦®à§à¦ªà¦¾à¦¸ à¦­à¦¿à¦œà¦¿à¦Ÿ",
          officeTitle: "à¦…à¦«à¦¿à¦¸ à¦¸à¦®à§Ÿ",
          officeHours: [
            "à¦°à¦¬à¦¿à¦¬à¦¾à¦° - à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°: à¦¸à¦•à¦¾à¦² à§®:à§¦à§¦ - à¦¬à¦¿à¦•à¦¾à¦² à§ª:à§¦à§¦",
            "à¦¶à¦¨à¦¿à¦¬à¦¾à¦°: à¦¸à¦•à¦¾à¦² à§¯:à§¦à§¦ - à¦¦à§à¦ªà§à¦° à§§:à§¦à§¦",
            "à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°: à¦¬à¦¨à§à¦§",
          ],
          mapTitle: "à¦•à§à¦¯à¦¾à¦®à§à¦ªà¦¾à¦¸ à¦®à§à¦¯à¦¾à¦ª",
          mapNote: "à¦—à§à¦—à¦² à¦®à§à¦¯à¦¾à¦ªà§‡ à¦²à§‹à¦•à§‡à¦¶à¦¨ à¦¦à§‡à¦–à¦¤à§‡ à¦¨à¦¿à¦šà§‡à¦° à¦²à¦¿à¦‚à¦• à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
          mapAction: "à¦—à§à¦—à¦² à¦®à§à¦¯à¦¾à¦ª à¦¦à§‡à¦–à§à¦¨",
          contact: {
            address: "à§¨à§¯ à¦†à¦² à¦®à¦¦à¦¿à¦¨à¦¾ à¦°à§‹à¦¡, à¦‡à¦¸à§à¦Ÿ à¦†à¦¹à¦®à§‡à¦¦ à¦¨à¦—à¦°, à¦®à¦¿à¦°à¦ªà§à¦°-à§§, à¦¢à¦¾à¦•à¦¾",
            phone: "01881659906, 02226622923",
            email: "habiba@gmail.com",
          },
        },
        en: {
          badge: "Contact",
          title: "Reach out to admissions and support.",
          subtitle: "Send your questions and we will get back to you soon.",
          formTitle: "Send a message",
          placeholders: {
            name: "Full name",
            phone: "Phone number",
            email: "Email address",
            subject: "Subject",
            message: "Write your message here",
          },
          submit: "Send message",
          success: "Your message has been sent. We will contact you soon.",
          error: "Unable to send your message. Please try again.",
          visitTitle: "Visit the campus",
          officeTitle: "Office hours",
          officeHours: [
            "Sunday - Thursday: 8:00 AM - 4:00 PM",
            "Saturday: 9:00 AM - 1:00 PM",
            "Friday: Closed",
          ],
          mapTitle: "Campus map",
          mapNote: "Use the Google Maps link below to view the campus location.",
          mapAction: "Open in Google Maps",
          contact: {
            address: "29 Al Madina Road, East Ahamed Nagor, Mirpur-1, Dhaka",
            phone: "01881659906, 02226622923",
            email: "habiba@gmail.com",
          },
        },
      } as const)[language],
    [language]
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleFieldChange =
    (
      field: keyof typeof formData
    ): ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) =>
    (event) => {
      const value = event.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (status !== "idle") {
        setStatus("idle");
      }
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("sent");
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
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

      <div className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>{content.formTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  placeholder={content.placeholders.name}
                  value={formData.name}
                  onChange={handleFieldChange("name")}
                  required
                />
                <Input
                  placeholder={content.placeholders.phone}
                  value={formData.phone}
                  onChange={handleFieldChange("phone")}
                  required
                />
              </div>
              <Input
                placeholder={content.placeholders.email}
                value={formData.email}
                onChange={handleFieldChange("email")}
                type="email"
              />
              <Input
                placeholder={content.placeholders.subject}
                value={formData.subject}
                onChange={handleFieldChange("subject")}
              />
              <Textarea
                placeholder={content.placeholders.message}
                value={formData.message}
                onChange={handleFieldChange("message")}
                required
              />
              <Button variant="gold" type="submit" disabled={status === "sending"}>
                {content.submit}
              </Button>
              {status === "sent" ? (
                <p className="text-sm text-[var(--color-blue-700)]">
                  {content.success}
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-red-600">{content.error}</p>
              ) : null}
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-[var(--color-blue-900)] text-[var(--color-white)]">
            <CardHeader>
              <CardTitle className="text-[var(--color-white)]">
                {content.visitTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-[rgba(255,255,255,0.7)]">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{content.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{content.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{content.contact.email}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{content.officeTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-[var(--color-muted)]">
              {content.officeHours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl">
        <Card className="bg-[var(--color-blue-100)]">
          <CardHeader>
            <CardTitle>{content.mapTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[var(--color-muted)]">
            <p>{content.mapNote}</p>
            <Button variant="outline" asChild>
              <a
                href="https://maps.google.com/maps?q=29%20Al%20Madina%20Road,%20Mirpur%201,%20Dhaka"
                target="_blank"
                rel="noreferrer"
              >
                {content.mapAction}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




