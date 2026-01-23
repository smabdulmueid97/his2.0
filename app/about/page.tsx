"use client";

import Link from "next/link";
import { BookOpen, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const { language } = useLanguage();
  const content = {
    en: {
      badge: "About",
      title: "About Habiba International School",
      subtitle:
        "A caring campus where strong academics meet practical skills and community values.",
      ctas: {
        primary: "Start admissions",
        secondary: "Talk to us",
      },
      valuesTitle: "Our values",
      valuesSubtitle: "What guides every classroom and learning decision.",
      values: [
        {
          icon: BookOpen,
          title: "Academic clarity",
          detail: "Clear expectations, structured lessons, and measurable progress.",
        },
        {
          icon: ShieldCheck,
          title: "Student safety",
          detail: "Wellbeing, discipline, and safe routines across campus.",
        },
        {
          icon: HeartHandshake,
          title: "Family partnership",
          detail: "Consistent updates and collaboration with guardians.",
        },
        {
          icon: Sparkles,
          title: "Future readiness",
          detail: "STEM, communication, and leadership skills for every grade.",
        },
      ],
      missionTitle: "Mission and vision",
      missionSubtitle: "Why we exist and where we are heading.",
      mission:
        "Our mission is to build confident learners who lead with empathy and curiosity. We focus on foundational skills, strong character, and modern tools so students can thrive in higher education and beyond.",
      leadershipTitle: "Leadership note",
      leadershipQuote:
        "We keep learning joyful, disciplined, and purposeful so every child is prepared for life.",
      leadershipName: "- Dr. Samira Hasan, Principal",
      campusTitle: "Campus at a glance",
      campusSubtitle: "Quick facts about our people, programs, and services.",
      stats: [
        { label: "Founded", value: "1998" },
        { label: "Campuses", value: "2" },
        { label: "Student to teacher", value: "18:1" },
        { label: "Clubs and teams", value: "24" },
      ],
      supportTitle: "Support services",
      supportSubtitle: "Care beyond the classroom.",
      supportItems: [
        {
          title: "Counseling and wellbeing",
          detail: "On-site counselor and wellness checkups every term.",
        },
        {
          title: "Transport network",
          detail: "Dedicated routes across key neighborhoods in Dhaka.",
        },
        {
          title: "Medical support",
          detail: "Nurse station with emergency response procedures.",
        },
      ],
    },
    bn: {
      badge: "পরিচিতি",
      title: "হাবিবা ইন্টারন্যাশনাল স্কুল পরিচিতি",
      subtitle:
        "যত্নশীল পরিবেশে মানসম্মত শিক্ষা ও ব্যবহারিক দক্ষতার সমন্বয়।",
      ctas: {
        primary: "ভর্তি শুরু করুন",
        secondary: "যোগাযোগ করুন",
      },
      valuesTitle: "আমাদের মূল্যবোধ",
      valuesSubtitle: "প্রতিটি শ্রেণিকক্ষ ও শিক্ষার সিদ্ধান্তকে যা পথ দেখায়।",
      values: [
        {
          icon: BookOpen,
          title: "একাডেমিক স্পষ্টতা",
          detail: "পরিকল্পিত পাঠদান, স্পষ্ট লক্ষ্য ও নিয়মিত অগ্রগতি মূল্যায়ন।",
        },
        {
          icon: ShieldCheck,
          title: "শিক্ষার্থী নিরাপত্তা",
          detail: "শৃঙ্খলা, নিরাপদ রুটিন ও মানসিক সুস্থতা নিশ্চিত করা।",
        },
        {
          icon: HeartHandshake,
          title: "পরিবারের সাথে অংশীদারিত্ব",
          detail: "অভিভাবকদের সঙ্গে নিয়মিত যোগাযোগ ও সহযোগিতা।",
        },
        {
          icon: Sparkles,
          title: "ভবিষ্যৎ প্রস্তুতি",
          detail: "STEM, যোগাযোগ দক্ষতা ও নেতৃত্ব বিকাশ।",
        },
      ],
      missionTitle: "লক্ষ্য ও ভিশন",
      missionSubtitle: "আমরা কেন আছি এবং কোথায় এগোচ্ছি।",
      mission:
        "আমাদের লক্ষ্য আত্মবিশ্বাসী ও সহানুভূতিশীল শিক্ষার্থী তৈরি করা। ভিত্তিগত দক্ষতা, চরিত্র গঠন ও আধুনিক টুলে জোর দিয়ে উচ্চশিক্ষা ও জীবনে এগিয়ে যেতে সহায়তা করি।",
      leadershipTitle: "প্রধান শিক্ষকের বার্তা",
      leadershipQuote:
        "শেখার অভিজ্ঞতা আনন্দময়, শৃঙ্খলাপূর্ণ ও লক্ষ্যভিত্তিক রাখতে আমরা প্রতিশ্রুতিবদ্ধ।",
      leadershipName: "- ড. সামিরা হাসান, প্রধান শিক্ষক",
      campusTitle: "ক্যাম্পাস এক নজরে",
      campusSubtitle: "শিক্ষার্থী, প্রোগ্রাম ও সেবার গুরুত্বপূর্ণ তথ্য।",
      stats: [
        { label: "প্রতিষ্ঠিত", value: "১৯৯৮" },
        { label: "ক্যাম্পাস", value: "২" },
        { label: "শিক্ষার্থী-শিক্ষক অনুপাত", value: "১৮:১" },
        { label: "ক্লাব ও দল", value: "২৪" },
      ],
      supportTitle: "সহায়ক সেবা",
      supportSubtitle: "শ্রেণিকক্ষের বাইরে যত্ন।",
      supportItems: [
        {
          title: "কাউন্সেলিং ও সুস্থতা",
          detail: "ক্যাম্পাসে কাউন্সেলর ও নিয়মিত সুস্থতা যাচাই।",
        },
        {
          title: "পরিবহন নেটওয়ার্ক",
          detail: "ঢাকার গুরুত্বপূর্ণ এলাকাজুড়ে নির্দিষ্ট রুট।",
        },
        {
          title: "চিকিৎসা সহায়তা",
          detail: "নার্স স্টেশন ও জরুরি প্রতিক্রিয়া ব্যবস্থা।",
        },
      ],
    },
  }[language];

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
        <div className="flex flex-wrap gap-3">
          <Button variant="gold" asChild>
            <Link href="/admissions">{content.ctas.primary}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">{content.ctas.secondary}</Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.valuesTitle}
          subtitle={content.valuesSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.values.map((value) => (
            <Card key={value.title}>
              <CardHeader>
                <value.icon className="h-6 w-6 text-[var(--color-blue-700)]" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-muted)]">
                {value.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="bg-[var(--color-blue-900)] text-[var(--color-white)]">
          <CardHeader>
            <CardTitle className="text-[var(--color-white)]">
              {content.missionTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[rgba(255,255,255,0.75)]">
            <p>{content.missionSubtitle}</p>
            <p>{content.mission}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{content.leadershipTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[var(--color-muted)]">
            <p className="text-base font-semibold text-[var(--color-ink)]">
              {content.leadershipQuote}
            </p>
            <p>{content.leadershipName}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.campusTitle}
          subtitle={content.campusSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="space-y-2 py-6">
                <p className="text-3xl font-semibold text-[var(--color-ink)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.supportTitle}
          subtitle={content.supportSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.supportItems.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-muted)]">
                {item.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}




