import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const mainNav: NavItem[] = [
  { label: "সূচনা", href: "/" },
  {
    label: "কার্যাবলী",
    href: "/activities",
    children: [
      { label: "ভর্তি কার্য", href: "/activities/admission-process" },
      { label: "ভর্তির তথ্য", href: "/activities/admission-info" },
      { label: "ভর্তির আবেদন ফর্ম", href: "/activities/admission-form" },
      { label: "অনলাইন ভর্তি", href: "/activities/online-admission" },
      { label: "সহশিখাক্রমিক কার্যক্রম", href: "/activities/co-curricular" },
      { label: "বিএনসিসি", href: "/activities/bncc" },
      { label: "বিতর্ক প্রতিযোগিতা", href: "/activities/debate" },
      { label: "পাঠাগার", href: "/activities/library" },
      { label: "খেলাধুলা", href: "/activities/sports" },
      { label: "ফি সম্পর্কিত", href: "/activities/fees" },
      { label: "মোবাইল ব্যাংকিং", href: "/activities/mobile-banking" },
      { label: "বেতন বিস্তারিত", href: "/activities/salary-details" },
      { label: "এন ও সি", href: "/activities/noc" }
    ]
  },
  {
    label: "তথ্যাবলি",
    href: "/information",
    children: [
      { label: "আমাদের কথা", href: "/information/about-us" },
      { label: "প্রতিষ্ঠানের পরিচিতি", href: "/information/institution-profile" },
      { label: "কমিটি পরিচিতি", href: "/information/committee" },
      { label: "সভাপতির বাণী", href: "/information/chairman-message" },
      { label: "প্রতিষ্ঠান প্রধানের বাণী", href: "/information/principal-message" },
      { label: "আই সি টি এর বাণী", href: "/information/ict-message" },
      { label: "শেখ রাসেল ডিজিটাল ল্যাব", href: "/information/digital-lab" },
      { label: "মুক্তিযোদ্ধা কর্ণার", href: "/information/freedom-fighter-corner" },
      { label: "লক্ষ্য - উদ্দেশ্য", href: "/information/mission-vision" },
      { label: "অর্জন", href: "/information/achievements" },
      { label: "প্রসপেক্টাস", href: "/information/prospectus" },
      { label: "পরিচিতি", href: "/information/introduction" },
      { label: "শিক্ষক পরিচিতি", href: "/information/teachers" },
      { label: "ক্লাস টিচার পরিচিতি", href: "/information/class-teachers" },
      { label: "শিক্ষার্থী পরিচিতি", href: "/information/students" },
      { label: "কর্মচারী পরিচিতি", href: "/information/staff" },
      { label: "স্মৃতির পাতা", href: "/information/memories" },
      { label: "কৃতি শিক্ষার্থীরা", href: "/information/meritorious-students" },
      { label: "প্রতিষ্ঠানের নীতিমালা", href: "/information/policies" },
      { label: "নিয়োগ সংক্রান্ত", href: "/information/recruitment" },
      { label: "শূন্য পদের তথ্য", href: "/information/vacancies" },
      { label: "নিয়োগ বিজ্ঞপ্তি", href: "/information/job-notice" }
    ]
  },
  {
    label: "দৃশ্যাবলী",
    href: "/gallery",
    children: [
      { label: "ছবিঘর", href: "/gallery/photos" },
      { label: "ভিডিও", href: "/gallery/videos" }
    ]
  },
  {
    label: "ফলাফল",
    href: "/results",
    children: [
      { label: "বোর্ড পরীক্ষা ফলাফল", href: "/results/board-exam" },
      { label: "ভর্তি পরীক্ষা ফলাফল", href: "/results/admission-exam" },
      { label: "প্রতিষ্ঠানের পরীক্ষা ফলাফল", href: "/results/institution-exam" },
      { label: "অনলাইন পরীক্ষা ফলাফল", href: "/results/online-exam" }
    ]
  },
  {
    label: "লিংক সমূহ",
    href: "/links",
    children: [
      { label: "MMC Login", href: "/links/mmc-login" },
      {
        label: "Directorate of Secondary and Higher Education (DSHE)",
        href: "/links/dshe"
      },
      {
        label: "National Curriculum and Textbook Board (NCTB)",
        href: "/links/nctb"
      },
      { label: "শিক্ষক বাতায়ন", href: "/links/teachers-portal" },
      {
        label: "Bangladesh Bureau of Educational Information and Statistics (BANBEIS)",
        href: "/links/banbeis"
      },
      {
        label: "Directorate Of Secondary And Higher Education",
        href: "/links/dshe-directorate"
      },
      {
        label: "Board of Intermediate and Secondary Education, Rajshahi",
        href: "/links/rajshahi-board"
      },
      { label: "Ministry of Education", href: "/links/education-ministry" },
      {
        label: "Secondary and Higher Education Division-Education Ministry",
        href: "/links/she-division"
      },
      { label: "Dhaka Education Board", href: "/links/dhaka-board" },
      { label: "Bangladesh Madrasah Education Board", href: "/links/madrasah-board" },
      { label: "National University", href: "/links/national-university" },
      { label: "National University Notice", href: "/links/nu-notice" },
      { label: "National University Result", href: "/links/nu-result" }
    ]
  },
  { label: "নোটিশ", href: "/notice-board" },
  {
    label: "লগইন",
    href: "/login",
    children: [
      { label: "শিক্ষার্থী", href: "/login/student" },
      { label: "শিক্ষক", href: "/login/teacher" },
      { label: "অ্যাডমিন", href: "/login/admin" }
    ]
  },
  { label: "মোবাইল অ্যাপ", href: "/mobile-app" },
  {
    label: "ডাউনলোড",
    href: "/downloads",
    children: [
      {
        label: "নিবন্ধন/লটারী তথ্য ডাউনলোড",
        href: "/downloads/registration-lottery"
      },
      { label: "অনলাইন ভিডিও ক্লাস", href: "/downloads/online-classes" },
      { label: "সাজেশন", href: "/downloads/suggestion" },
      { label: "প্রতিদিনের পাঠ বিভাজন", href: "/downloads/daily-lesson-plan" },
      { label: "ক্লাস রুটিন", href: "/downloads/class-routine" },
      { label: "পরীক্ষার রুটিন", href: "/downloads/exam-routine" },
      { label: "সিলেবাস", href: "/downloads/syllabus" },
      { label: "ছুটির তালিকা", href: "/downloads/holiday-list" },
      { label: "বিগত বছরগুলোর প্রশ্ন", href: "/downloads/previous-questions" }
    ]
  }
];

const ctaLinks = [
  {
    label: "অনলাইনে ভর্তি / ভর্তি ফরম",
    href: "/online-admission",
    className:
      "inline-flex items-center justify-center rounded-full bg-[var(--color-gold-500)] px-4 py-2 text-sm font-semibold text-[var(--color-blue-900)] transition hover:bg-[color-mix(in_srgb,var(--color-gold-500),#000_8%)]"
  },
  {
    label: "প্রবেশপত্র",
    href: "/admit-card",
    className:
      "inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-blue-900)] transition hover:bg-[var(--color-blue-100)]"
  }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-white)]">
      <div className="border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-white)_90%,transparent)]">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-3 py-4 lg:flex-row lg:items-center lg:justify-between 2xl:px-0">
          <Link href="/" className="flex items-start gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-blue-700)] text-xl font-bold text-[var(--color-white)]">
              HIS
            </span>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-[var(--color-ink)] sm:text-xl">
                Habiba International School
              </p>
              <div className="text-xs text-[var(--color-muted)] sm:text-sm">
                <span className="block">
                  29 Al Madina Road, East Ahamed Nagor, Mirpur -1, Dhaka -216
                </span>
                <span className="block">01881659906 , 02226622923</span>
              </div>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            {ctaLinks.map((item) => (
              <Link key={item.href} href={item.href} className={item.className}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-white)]">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-3 px-3 py-3 lg:h-14 2xl:px-0">
          <nav className="hidden items-center gap-5 text-sm font-semibold text-[var(--color-ink)] lg:flex">
            {mainNav.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 transition hover:text-[var(--color-blue-700)]"
                >
                  {item.label}
                  {item.children ? (
                    <span className="text-[10px] text-[var(--color-muted)]">
                      ▼
                    </span>
                  ) : null}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-30 mt-3 min-w-[240px] rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] p-2 text-sm text-[var(--color-ink)] opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-3 py-2 transition hover:bg-[color-mix(in_srgb,var(--color-blue-700)_12%,transparent)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <details className="lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-semibold text-[var(--color-blue-900)] transition hover:bg-[var(--color-blue-100)] [&::-webkit-details-marker]:hidden">
              মেনু
              <span className="text-[10px] text-[var(--color-muted)]">▼</span>
            </summary>
            <div className="mt-4 space-y-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] p-4 text-sm text-[var(--color-ink)]">
              <div className="space-y-2">
                {mainNav.map((item) =>
                  item.children ? (
                    <details
                      key={item.label}
                      className="rounded-xl border border-[var(--color-line)]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
                        <span>{item.label}</span>
                        <span className="text-[10px] text-[var(--color-muted)]">
                          ▼
                        </span>
                      </summary>
                      <div className="grid gap-1 px-4 pb-3 text-sm">
                        <Link
                          href={item.href}
                          className="rounded-lg px-2 py-1 font-semibold text-[var(--color-blue-700)] transition hover:bg-[color-mix(in_srgb,var(--color-blue-700)_12%,transparent)]"
                        >
                          সব দেখুন
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="rounded-lg px-2 py-1 transition hover:bg-[color-mix(in_srgb,var(--color-blue-700)_12%,transparent)]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between rounded-xl border border-[var(--color-line)] px-4 py-3 font-semibold transition hover:border-[var(--color-blue-700)]"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
              <div className="flex flex-col gap-2">
                {ctaLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={item.className}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
