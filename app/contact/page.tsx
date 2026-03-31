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
          badge: "যোগাযোগ",
          title: "ভর্তি ও সহায়তা টিমের সাথে যোগাযোগ করুন।",
          subtitle: "আপনার প্রশ্ন বা তথ্য পাঠান, আমরা দ্রুত যোগাযোগ করব।",
          formTitle: "বার্তা পাঠান",
          placeholders: {
            name: "পূর্ণ নাম",
            phone: "মোবাইল নম্বর",
            email: "ইমেইল ঠিকানা",
            subject: "বিষয়",
            message: "আপনার বার্তা লিখুন",
          },
          submit: "বার্তা পাঠান",
          success: "আপনার বার্তা পাঠানো হয়েছে। আমরা দ্রুত যোগাযোগ করব।",
          error: "বার্তা পাঠানো যায়নি। পরে চেষ্টা করুন।",
          visitTitle: "ক্যাম্পাস ভিজিট",
          officeTitle: "অফিস সময়",
          officeHours: [
            "রবিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০",
            "শনিবার: সকাল ৯:০০ - দুপুর ১:০০",
            "শুক্রবার: বন্ধ",
          ],
          mapTitle: "ক্যাম্পাস ম্যাপ",
          mapNote: "গুগল ম্যাপে লোকেশন দেখতে নিচের লিংক ব্যবহার করুন।",
          mapAction: "গুগল ম্যাপ দেখুন",
          contact: {
            address: "২৯ আল মদিনা রোড, ইস্ট আহমেদ নগর, মিরপুর-১, ঢাকা-১২১৬",
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
    <div className="space-y-12 page-gutter py-12 md:py-16">
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
                href="https://www.google.com/maps/place/Habiba+international+school/@23.7964989,90.3588767,17z/data=!4m6!3m5!1s0x3755c100727a0431:0xe52a5b521283c254!8m2!3d23.7964989!4d90.3614516!16s%2Fg%2F11wfggvj68"
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




