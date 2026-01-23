"use client";

import Link from "next/link";
import {
  Award,
  Building,
  ClipboardCheck,
  FileText,
  HeartHandshake,
  MapPin,
  Users,
} from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const { language } = useLanguage();
  const content = {
    en: {
      hero: {
        badge: "Welcome",
        title: "Habiba International School",
        subtitle: "A modern campus focused on care, clarity, and future-ready learning.",
        description:
          "Bangla-first campus updates, admissions, and information for families.",
        ctas: {
          primary: "Student",
          secondary: "Contact",
        },
        stats: [
          { label: "Founded", value: "1998" },
          { label: "Campuses", value: "2" },
          { label: "Graduate Success", value: "96%" },
          { label: "Parent Satisfaction", value: "4.8/5" },
        ],
      },
      map: {
        title: "Campus Location",
        subtitle: "View our main campus on Google Maps.",
        linkLabel: "Open in Google Maps",
      },
      about: {
        heading: "About the school",
        subtitle: "Trusted by families for strong academics and warm care.",
        summary:
          "Habiba International School blends national standards with global skills, creating confident learners ready for a changing world.",
        pillarsHeading: "What defines our school",
        pillarsSubtitle: "Core pillars that guide teaching and student life.",
        highlights: [
          {
            icon: Award,
            title: "Accredited Curriculum",
            detail: "National and global benchmarks for every grade.",
          },
          {
            icon: Users,
            title: "Student-Centered Culture",
            detail: "Mentoring, small classes, and leadership development.",
          },
          {
            icon: Building,
            title: "Modern Facilities",
            detail: "STEM labs, arts studios, and digital classrooms.",
          },
          {
            icon: HeartHandshake,
            title: "Community Impact",
            detail: "Service learning with local partners and NGOs.",
          },
        ],
        leadership: {
          title: "Leadership Note",
          quote:
            "We nurture confident learners who communicate, innovate, and lead with empathy.",
          name: "- Dr. Samira Hasan, Principal",
        },
        campus: {
          heading: "Campus information",
          subtitle: "Operating hours, transport coverage, and health services.",
          items: [
            {
              title: "Campus Hours",
              detail: "Sunday - Thursday: 8:00 AM - 4:00 PM",
            },
            {
              title: "Transport",
              detail: "Routes across Dhanmondi, Mirpur, Uttara, and Badda.",
            },
            {
              title: "Health Services",
              detail: "On-site nurse, counseling room, wellness checkups.",
            },
          ],
        },
      },
      admissions: {
        heading: "Admissions",
        subtitle: "Simple steps for every family.",
        stepLabel: "Step",
        steps: [
          {
            title: "Submit Application",
            detail: "Fill the form with student and guardian information.",
          },
          {
            title: "Assessment",
            detail: "Short skill review and interview for placement.",
          },
          {
            title: "Confirmation",
            detail: "Offer letter and enrollment confirmation.",
          },
        ],
        programs: {
          heading: "Programs & eligibility",
          subtitle: "Key details by academic stage.",
          items: [
            {
              title: "Primary (Grades 1-5)",
              details: [
                "Age requirement: 6+ years",
                "Diagnostic assessment and parent meeting",
                "Daily co-curricular activity",
              ],
            },
            {
              title: "Middle (Grades 6-8)",
              details: [
                "Minimum GPA from previous term",
                "English and Math placement check",
                "Optional language enrichment",
              ],
            },
            {
              title: "Senior (Grades 9-12)",
              details: [
                "Subject selection counseling",
                "Mandatory admission test and interview",
                "Dedicated career guidance",
              ],
            },
          ],
        },
        list: {
          heading: "Admissions list",
          subtitle: "Latest admissions updates for families.",
          items: [
            { name: "Ariana Saha", grade: "Grade 5", status: "Selected" },
            { name: "Nabil Islam", grade: "Grade 8", status: "Interview" },
            { name: "Farhan Noor", grade: "Grade 10", status: "Waiting" },
          ],
        },
        downloads: {
          heading: "Downloads",
          subtitle: "Prospectus, calendar, and policy documents.",
          downloadLabel: "Download",
          items: [
            { title: "Admissions Prospectus", tag: "PDF", updated: "Jan 2026" },
            { title: "Academic Calendar", tag: "PDF", updated: "Dec 2025" },
            { title: "School Policy", tag: "PDF", updated: "Nov 2025" },
          ],
        },
        faq: {
          heading: "Admissions FAQ",
          subtitle: "Answers to common parent questions.",
          items: [
            {
              question: "What documents are required?",
              answer:
                "Previous report cards, birth certificate, passport photos, and guardian NID.",
            },
            {
              question: "Is there an admission test?",
              answer: "Yes, English and Math assessment with a short interview.",
            },
            {
              question: "Can I pay in installments?",
              answer: "Installments are available for Grades 6-12.",
            },
          ],
        },
      },
    },
    bn: {
      hero: {
        badge: "স্বাগতম",
        title: "হাবিবা ইন্টারন্যাশনাল স্কুল",
        subtitle: "যত্ন, স্পষ্টতা ও ভবিষ্যৎ-প্রস্তুত শিক্ষার আধুনিক ক্যাম্পাস।",
        description:
          "ইংরেজি ও বাংলায় ক্লায়েন্ট উপস্থাপনার জন্য সম্পূর্ণ স্ট্যাটিক ডেমো কন্টেন্ট।",
        ctas: {
          primary: "শিক্ষার্থী",
          secondary: "যোগাযোগ",
        },
        stats: [
          { label: "প্রতিষ্ঠা", value: "1998" },
          { label: "ক্যাম্পাস", value: "2" },
          { label: "সাফল্য", value: "96%" },
          { label: "সন্তুষ্টি", value: "4.8/5" },
        ],
      },
      map: {
        title: "ক্যাম্পাস লোকেশন",
        subtitle: "গুগল ম্যাপে ক্যাম্পাস দেখুন।",
        linkLabel: "গুগল ম্যাপে খুলুন",
      },
      about: {
        heading: "স্কুল পরিচিতি",
        subtitle: "দৃঢ় একাডেমিক মান ও আন্তরিক যত্নের জন্য আস্থার প্রতিষ্ঠান।",
        summary:
          "হাবিবা ইন্টারন্যাশনাল স্কুলে জাতীয় মানদণ্ডের সাথে গ্লোবাল স্কিল যুক্ত করে শিক্ষার্থীদের আত্মবিশ্বাসী করে গড়ে তোলা হয়।",
        pillarsHeading: "আমাদের শক্তির ভিত্তি",
        pillarsSubtitle: "শিক্ষা ও শিক্ষার্থীর জীবন পরিচালনার মূল নীতি।",
        highlights: [
          {
            icon: Award,
            title: "স্বীকৃত পাঠ্যক্রম",
            detail: "প্রতিটি গ্রেডের জন্য মানসম্মত কোর কারিকুলাম।",
          },
          {
            icon: Users,
            title: "শিক্ষার্থী-কেন্দ্রিক পরিবেশ",
            detail: "মেন্টরিং, ছোট ক্লাস, নেতৃত্ব উন্নয়ন।",
          },
          {
            icon: Building,
            title: "আধুনিক সুবিধা",
            detail: "STEM ল্যাব, আর্ট স্টুডিও, ডিজিটাল ক্লাসরুম।",
          },
          {
            icon: HeartHandshake,
            title: "কমিউনিটি প্রভাব",
            detail: "স্থানীয় অংশীদারদের সাথে সেবামূলক প্রকল্প।",
          },
        ],
        leadership: {
          title: "প্রধান শিক্ষকের বার্তা",
          quote:
            "আমরা আত্মবিশ্বাসী শিক্ষার্থী গড়ে তুলি যারা দায়িত্বশীল নেতৃত্ব দিতে পারে।",
          name: "- ড. সামিরা হাসান, প্রিন্সিপাল",
        },
        campus: {
          heading: "ক্যাম্পাস তথ্য",
          subtitle: "সময়সূচি, পরিবহন এবং স্বাস্থ্যসেবা তথ্য।",
          items: [
            {
              title: "ক্যাম্পাস সময়",
              detail: "রবিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০",
            },
            {
              title: "পরিবহন",
              detail: "ধানমন্ডি, মিরপুর, উত্তরা, বাড্ডা কভারেজ।",
            },
            {
              title: "স্বাস্থ্যসেবা",
              detail: "অনসাইট নার্স, কাউন্সেলিং রুম, নিয়মিত চেকআপ।",
            },
          ],
        },
      },
      admissions: {
        heading: "ভর্তি",
        subtitle: "প্রত্যেক পরিবারের জন্য সহজ ধাপ।",
        stepLabel: "ধাপ",
        steps: [
          {
            title: "আবেদন জমা",
            detail: "শিক্ষার্থী ও অভিভাবকের তথ্য দিয়ে ফরম পূরণ।",
          },
          {
            title: "মূল্যায়ন",
            detail: "সংক্ষিপ্ত স্কিল রিভিউ ও ইন্টারভিউ।",
          },
          {
            title: "নিশ্চিতকরণ",
            detail: "অফার লেটার ও ভর্তি নিশ্চিতকরণ।",
          },
        ],
        programs: {
          heading: "প্রোগ্রাম ও যোগ্যতা",
          subtitle: "প্রতিটি স্তরের সংক্ষিপ্ত তথ্য।",
          items: [
            {
              title: "প্রাইমারি (গ্রেড ১-৫)",
              details: [
                "বয়স ৬+ বছর",
                "ডায়াগনস্টিক মূল্যায়ন ও অভিভাবক মিটিং",
                "দৈনিক কো-কারিকুলার কার্যক্রম",
              ],
            },
            {
              title: "মিডল (গ্রেড ৬-৮)",
              details: [
                "পূর্ববর্তী টার্মের ন্যূনতম GPA",
                "ইংরেজি ও গণিত প্লেসমেন্ট",
                "ঐচ্ছিক ভাষা উন্নয়ন প্রোগ্রাম",
              ],
            },
            {
              title: "সিনিয়র (গ্রেড ৯-১২)",
              details: [
                "বিষয় নির্বাচনে কাউন্সেলিং",
                "আবশ্যিক ভর্তি পরীক্ষা ও ইন্টারভিউ",
                "ক্যারিয়ার গাইডেন্স সেশন",
              ],
            },
          ],
        },
        list: {
          heading: "ভর্তি তালিকা (ডেমো)",
          subtitle: "উপস্থাপনার জন্য স্ট্যাটিক নমুনা তালিকা।",
          items: [
            { name: "নাহিদ হাসান", grade: "গ্রেড ৫", status: "নির্বাচিত" },
            { name: "তাসনিম আরা", grade: "গ্রেড ৮", status: "ইন্টারভিউ" },
            { name: "রাফি ইসলাম", grade: "গ্রেড ১০", status: "অপেক্ষমাণ" },
          ],
        },
        downloads: {
          heading: "ডাউনলোড",
          subtitle: "প্রস্পেক্টাস, ক্যালেন্ডার ও নীতিমালা।",
          downloadLabel: "ডাউনলোড",
          items: [
            { title: "ভর্তি প্রস্পেক্টাস", tag: "PDF", updated: "জানুয়ারি ২০২৬" },
            { title: "একাডেমিক ক্যালেন্ডার", tag: "PDF", updated: "ডিসেম্বর ২০২৫" },
            { title: "স্কুল নীতিমালা", tag: "PDF", updated: "নভেম্বর ২০২৫" },
          ],
        },
        faq: {
          heading: "ভর্তি প্রশ্নোত্তর",
          subtitle: "অভিভাবকদের সাধারণ প্রশ্নের উত্তর।",
          items: [
            {
              question: "কোন কোন কাগজপত্র লাগবে?",
              answer:
                "পূর্বের রিপোর্ট কার্ড, জন্ম সনদ, পাসপোর্ট ছবি ও অভিভাবকের এনআইডি।",
            },
            {
              question: "ভর্তি পরীক্ষা আছে কি?",
              answer: "হ্যাঁ, ইংরেজি ও গণিত মূল্যায়ন এবং সংক্ষিপ্ত ইন্টারভিউ।",
            },
            {
              question: "কিস্তিতে ফি দেওয়া যাবে?",
              answer: "গ্রেড ৬-১২ এর জন্য কিস্তির সুবিধা রয়েছে।",
            },
          ],
        },
      },
    },
  }[language];

  return (
    <div className="space-y-16 pb-28">
      <section className="relative overflow-hidden px-4 pt-12 md:px-4 md:pt-20 2xl:px-0">
        <div className="mx-auto grid max-w-screen-2xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge variant="info">{content.hero.badge}</Badge>
            <div className="flex flex-wrap items-center gap-4">
              <img
                src="/logo.png"
                alt={content.hero.title}
                className="h-[96px] w-auto md:h-[120px] lg:h-[140px]"
              />
              <div className="text-2xl font-semibold text-[var(--color-ink)] md:text-3xl lg:text-4xl">
                Habiba International School
              </div>
            </div>
            <p className="text-base text-[var(--color-muted)] md:text-lg">
              {content.hero.subtitle}
            </p>
            <p className="text-sm text-[var(--color-muted)] md:text-base">
              {content.hero.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="gold" asChild size="lg">
                <Link href="/student">{content.hero.ctas.primary}</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">{content.hero.ctas.secondary}</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4">
              {content.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-3 text-sm shadow-sm"
                >
                  <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-[var(--color-ink)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Card className="relative overflow-hidden border-none bg-[var(--color-white)] text-[var(--color-ink)] shadow-[0_30px_80px_rgba(12,27,51,0.2)]">
            <CardHeader className="space-y-2">
              <Badge variant="warn">{content.map.title}</Badge>
              <CardTitle className="text-2xl">{content.map.subtitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-[var(--color-line)]">
                <iframe
                  title="Habiba International School Map"
                  src="https://maps.google.com/maps?q=Habiba%20international%20school%20Mirpur%201%20Dhaka&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  className="h-[300px] w-full md:h-[360px]"
                  loading="lazy"
                />
              </div>
              <Button variant="outline" asChild className="w-full">
                <a
                  href="https://www.google.com/maps/place/Habiba+international+school/@23.7964989,90.3588767,17z/data=!4m6!3m5!1s0x3755c100727a0431:0xe52a5b521283c254!8m2!3d23.7964989!4d90.3614516!16s%2Fg%2F11wfggvj68"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="h-4 w-4" />
                  {content.map.linkLabel}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 md:px-4 2xl:px-0">
        <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <SectionHeading
              title={content.about.heading}
              subtitle={content.about.subtitle}
            />
            <p className="text-base text-[var(--color-muted)] md:text-lg">
              {content.about.summary}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-3 text-sm"
                >
                  <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-[var(--color-ink)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Card className="border-none bg-[var(--color-blue-100)]">
            <CardHeader>
              <CardTitle>{content.about.leadership.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-[var(--color-muted)]">
              <p>&quot;{content.about.leadership.quote}&quot;</p>
              <p className="font-semibold text-[var(--color-ink)]">
                {content.about.leadership.name}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 md:px-4 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.about.pillarsHeading}
            subtitle={content.about.pillarsSubtitle}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {content.about.highlights.map((item, index) => (
              <Card
                key={item.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <CardHeader>
                  <item.icon className="h-6 w-6 text-[var(--color-blue-700)]" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--color-muted)]">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-4 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-6 rounded-[var(--radius)] border border-[var(--color-line)] bg-[var(--color-white)] p-8">
          <SectionHeading
            title={content.about.campus.heading}
            subtitle={content.about.campus.subtitle}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {content.about.campus.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[var(--color-blue-100)] p-4"
              >
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  {item.title}
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-4 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.admissions.heading}
            subtitle={content.admissions.subtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {content.admissions.steps.map((step, index) => (
              <Card
                key={step.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="info">
                      {content.admissions.stepLabel} {index + 1}
                    </Badge>
                    <ClipboardCheck className="h-5 w-5 text-[var(--color-blue-700)]" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[var(--color-muted)]">
                  {step.detail}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-4 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.admissions.programs.heading}
            subtitle={content.admissions.programs.subtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {content.admissions.programs.items.map((program) => (
              <Card key={program.title}>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2 text-sm text-[var(--color-muted)]">
                  {program.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-4 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.admissions.list.heading}
            subtitle={content.admissions.list.subtitle}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {content.admissions.list.items.map((notice, index) => (
              <Card
                key={notice.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="info">{notice.status}</Badge>
                  </div>
                  <CardTitle>{notice.name}</CardTitle>
                  <p className="text-sm text-[var(--color-muted)]">
                    {notice.grade}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-4 2xl:px-0">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.admissions.downloads.heading}
            subtitle={content.admissions.downloads.subtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {content.admissions.downloads.items.map((item, index) => (
              <Card
                key={item.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <Badge variant="warn">{item.tag}</Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <p className="text-sm text-[var(--color-muted)]">
                    {item.updated}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4" />
                    {content.admissions.downloads.downloadLabel}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-4 2xl:px-0 pb-6">
        <div className="mx-auto max-w-screen-2xl space-y-8">
          <SectionHeading
            title={content.admissions.faq.heading}
            subtitle={content.admissions.faq.subtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {content.admissions.faq.items.map((item) => (
              <Card key={item.question}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-[var(--color-muted)]">
                  {item.answer}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}




