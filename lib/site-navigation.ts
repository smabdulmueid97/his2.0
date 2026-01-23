export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "সূচনা", href: "/" },
  {
    label: "কার্যাবলী",
    href: "/activities",
    children: [
      { label: "ভর্তি কার্যক্রম", href: "/activities/admission-process" },
      { label: "ভর্তির তথ্য", href: "/activities/admission-info" },
      { label: "ভর্তির আবেদন ফর্ম", href: "/activities/admission-form" },
      { label: "অনলাইন ভর্তি", href: "/activities/online-admission" },
      { label: "সহশিক্ষা কার্যক্রম", href: "/activities/co-curricular" },
      { label: "বিএনসিসি", href: "/activities/bncc" },
      { label: "বিতর্ক প্রতিযোগিতা", href: "/activities/debate" },
      { label: "পাঠাগার", href: "/activities/library" },
      { label: "খেলাধুলা", href: "/activities/sports" },
      { label: "ফি সংক্রান্ত", href: "/activities/fees" },
      { label: "মোবাইল ব্যাংকিং", href: "/activities/mobile-banking" },
      { label: "বেতন বিস্তারিত", href: "/activities/salary-details" },
      { label: "এনওসি", href: "/activities/noc" },
    ],
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
      { label: "আইসিটি শিক্ষকের বাণী", href: "/information/ict-message" },
      { label: "শেখ রাসেল ডিজিটাল ল্যাব", href: "/information/digital-lab" },
      {
        label: "মুক্তিযোদ্ধা কর্ণার",
        href: "/information/freedom-fighter-corner",
      },
      { label: "লক্ষ্য ও উদ্দেশ্য", href: "/information/mission-vision" },
      { label: "অর্জন", href: "/information/achievements" },
      { label: "প্রসপেক্টাস", href: "/information/prospectus" },
      { label: "পরিচিতি", href: "/information/introduction" },
      { label: "শিক্ষক পরিচিতি", href: "/information/teachers" },
      { label: "ক্লাস টিচার পরিচিতি", href: "/information/class-teachers" },
      { label: "শিক্ষার্থী পরিচিতি", href: "/information/students" },
      { label: "কর্মচারী পরিচিতি", href: "/information/staff" },
      { label: "স্মৃতির পাতা", href: "/information/memories" },
      { label: "কৃতি শিক্ষার্থী", href: "/information/meritorious-students" },
      { label: "প্রতিষ্ঠানের নীতিমালা", href: "/information/policies" },
      { label: "নিয়োগ সংক্রান্ত", href: "/information/recruitment" },
      { label: "শূন্য পদের তথ্য", href: "/information/vacancies" },
      { label: "নিয়োগ বিজ্ঞপ্তি", href: "/information/job-notice" },
    ],
  },
  {
    label: "দৃশ্যাবলী",
    href: "/gallery",
    children: [
      { label: "ছবিঘর", href: "/gallery/photos" },
      { label: "ভিডিও", href: "/gallery/videos" },
    ],
  },
  {
    label: "ফলাফল",
    href: "/results",
    children: [
      { label: "বোর্ড পরীক্ষা ফলাফল", href: "/results/board-exam" },
      { label: "ভর্তি পরীক্ষা ফলাফল", href: "/results/admission-exam" },
      { label: "প্রতিষ্ঠানের পরীক্ষা ফলাফল", href: "/results/institution-exam" },
      { label: "অনলাইন পরীক্ষা ফলাফল", href: "/results/online-exam" },
    ],
  },
  {
    label: "লিংকসমূহ",
    href: "/links",
    children: [
      { label: "এমএমসি লগইন", href: "/links/mmc-login" },
      {
        label: "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর (DSHE)",
        href: "/links/dshe",
      },
      {
        label: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB)",
        href: "/links/nctb",
      },
      { label: "শিক্ষক বাতায়ন", href: "/links/teachers-portal" },
      {
        label: "বাংলাদেশ শিক্ষাতথ্য ও পরিসংখ্যান ব্যুরো (BANBEIS)",
        href: "/links/banbeis",
      },
      {
        label: "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর",
        href: "/links/dshe-directorate",
      },
      {
        label: "মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড, রাজশাহী",
        href: "/links/rajshahi-board",
      },
      { label: "শিক্ষা মন্ত্রণালয়", href: "/links/education-ministry" },
      {
        label: "মাধ্যমিক ও উচ্চশিক্ষা বিভাগ - শিক্ষা মন্ত্রণালয়",
        href: "/links/she-division",
      },
      { label: "ঢাকা শিক্ষা বোর্ড", href: "/links/dhaka-board" },
      { label: "বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড", href: "/links/madrasah-board" },
      { label: "জাতীয় বিশ্ববিদ্যালয়", href: "/links/national-university" },
      { label: "জাতীয় বিশ্ববিদ্যালয় নোটিশ", href: "/links/nu-notice" },
      { label: "জাতীয় বিশ্ববিদ্যালয় ফলাফল", href: "/links/nu-result" },
    ],
  },
  { label: "নোটিশ", href: "/notice-board" },
  {
    label: "লগইন",
    href: "/login",
    children: [
      { label: "শিক্ষার্থী", href: "/login/student" },
      { label: "শিক্ষক", href: "/login/teacher" },
      { label: "অ্যাডমিন", href: "/login/admin" },
    ],
  },
  { label: "মোবাইল অ্যাপ", href: "/mobile-app" },
  {
    label: "ডাউনলোড",
    href: "/downloads",
    children: [
      {
        label: "নিবন্ধন/লটারী তথ্য ডাউনলোড",
        href: "/downloads/registration-lottery",
      },
      { label: "অনলাইন ভিডিও ক্লাস", href: "/downloads/online-classes" },
      { label: "সাজেশন", href: "/downloads/suggestion" },
      { label: "প্রতিদিনের পাঠ বিভাজন", href: "/downloads/daily-lesson-plan" },
      { label: "ক্লাস রুটিন", href: "/downloads/class-routine" },
      { label: "পরীক্ষার রুটিন", href: "/downloads/exam-routine" },
      { label: "সিলেবাস", href: "/downloads/syllabus" },
      { label: "ছুটির তালিকা", href: "/downloads/holiday-list" },
      { label: "বিগত বছরগুলোর প্রশ্ন", href: "/downloads/previous-questions" },
    ],
  },
];

export const ctaLinks = [
  {
    label: "অনলাইনে ভর্তি / ভর্তি ফরম",
    href: "/online-admission",
    className:
      "inline-flex items-center justify-center rounded-full bg-[var(--color-gold-500)] px-4 py-2 text-sm font-semibold text-[var(--color-blue-900)] transition hover:bg-[color-mix(in_srgb,var(--color-gold-500),#000_8%)]",
  },
  {
    label: "প্রবেশপত্র",
    href: "/admit-card",
    className:
      "inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-blue-900)] transition hover:bg-[var(--color-blue-100)]",
  },
];
