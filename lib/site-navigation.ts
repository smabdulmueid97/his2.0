export type Language = "en" | "bn";

export type NavLabel = {
  bn: string;
  en: string;
};

export type NavItem = {
  label: NavLabel;
  href: string;
  children?: { label: NavLabel; href: string }[];
};

export type CtaLink = {
  label: NavLabel;
  href: string;
  className: string;
};

export const mainNav: NavItem[] = [
  { label: { bn: "সূচনা", en: "Home" }, href: "/" },
  {
    label: { bn: "কার্যাবলী", en: "Activities" },
    href: "/activities",
    children: [
      {
        label: { bn: "ভর্তি কার্যক্রম", en: "Admission Process" },
        href: "/activities/admission-process",
      },
      {
        label: { bn: "ভর্তির তথ্য", en: "Admission Information" },
        href: "/activities/admission-info",
      },
      {
        label: { bn: "ভর্তির আবেদন ফরম", en: "Admission Form" },
        href: "/activities/admission-form",
      },
      {
        label: { bn: "অনলাইনে ভর্তি", en: "Online Admission" },
        href: "/activities/online-admission",
      },
      {
        label: { bn: "সহশিক্ষা কার্যক্রম", en: "Co-curricular" },
        href: "/activities/co-curricular",
      },
      { label: { bn: "বিএনসিসি", en: "BNCC" }, href: "/activities/bncc" },
      {
        label: { bn: "বিতর্ক প্রতিযোগিতা", en: "Debate" },
        href: "/activities/debate",
      },
      { label: { bn: "পাঠাগার", en: "Library" }, href: "/activities/library" },
      { label: { bn: "খেলাধুলা", en: "Sports" }, href: "/activities/sports" },
      { label: { bn: "ফি সংক্রান্ত", en: "Fees" }, href: "/activities/fees" },
      {
        label: { bn: "মোবাইল ব্যাংকিং", en: "Mobile Banking" },
        href: "/activities/mobile-banking",
      },
      {
        label: { bn: "বেতন বিস্তারিত", en: "Salary Details" },
        href: "/activities/salary-details",
      },
      { label: { bn: "এনওসি", en: "NOC" }, href: "/activities/noc" },
    ],
  },
  {
    label: { bn: "তথ্যাবলি", en: "Information" },
    href: "/information",
    children: [
      { label: { bn: "আমাদের কথা", en: "About Us" }, href: "/information/about-us" },
      {
        label: { bn: "প্রতিষ্ঠানের পরিচিতি", en: "Institution Profile" },
        href: "/information/institution-profile",
      },
      { label: { bn: "কমিটি পরিচিতি", en: "Committee" }, href: "/information/committee" },
      {
        label: { bn: "সভাপতির বাণী", en: "Chairman Message" },
        href: "/information/chairman-message",
      },
      {
        label: { bn: "প্রতিষ্ঠান প্রধানের বাণী", en: "Principal Message" },
        href: "/information/principal-message",
      },
      {
        label: { bn: "আইসিটি শিক্ষকের বাণী", en: "ICT Message" },
        href: "/information/ict-message",
      },
      {
        label: { bn: "শেখ রাসেল ডিজিটাল ল্যাব", en: "Digital Lab" },
        href: "/information/digital-lab",
      },
      {
        label: { bn: "মুক্তিযোদ্ধা কর্নার", en: "Freedom Fighter Corner" },
        href: "/information/freedom-fighter-corner",
      },
      {
        label: { bn: "লক্ষ্য ও উদ্দেশ্য", en: "Mission & Vision" },
        href: "/information/mission-vision",
      },
      { label: { bn: "অর্জন", en: "Achievements" }, href: "/information/achievements" },
      { label: { bn: "প্রসপেক্টাস", en: "Prospectus" }, href: "/information/prospectus" },
      { label: { bn: "পরিচিতি", en: "Introduction" }, href: "/information/introduction" },
      { label: { bn: "শিক্ষক পরিচিতি", en: "Teachers" }, href: "/information/teachers" },
      {
        label: { bn: "ক্লাস টিচার পরিচিতি", en: "Class Teachers" },
        href: "/information/class-teachers",
      },
      {
        label: { bn: "শিক্ষার্থী পরিচিতি", en: "Students" },
        href: "/information/students",
      },
      { label: { bn: "কর্মচারী পরিচিতি", en: "Staff" }, href: "/information/staff" },
      { label: { bn: "স্মৃতির পাতা", en: "Memories" }, href: "/information/memories" },
      {
        label: { bn: "কৃতী শিক্ষার্থী", en: "Meritorious Students" },
        href: "/information/meritorious-students",
      },
      {
        label: { bn: "প্রতিষ্ঠানের নীতিমালা", en: "Policies" },
        href: "/information/policies",
      },
      { label: { bn: "নিয়োগ সংক্রান্ত", en: "Recruitment" }, href: "/information/recruitment" },
      { label: { bn: "শূন্য পদের তথ্য", en: "Vacancies" }, href: "/information/vacancies" },
      { label: { bn: "নিয়োগ বিজ্ঞপ্তি", en: "Job Notice" }, href: "/information/job-notice" },
    ],
  },
  {
    label: { bn: "দৃশ্যাবলী", en: "Gallery" },
    href: "/gallery",
    children: [
      { label: { bn: "ছবি ঘর", en: "Photos" }, href: "/gallery/photos" },
      { label: { bn: "ভিডিও", en: "Videos" }, href: "/gallery/videos" },
    ],
  },
  {
    label: { bn: "ফলাফল", en: "Results" },
    href: "/results",
    children: [
      {
        label: { bn: "বোর্ড পরীক্ষা ফলাফল", en: "Board Exam Result" },
        href: "/results/board-exam",
      },
      {
        label: { bn: "ভর্তি পরীক্ষা ফলাফল", en: "Admission Exam Result" },
        href: "/results/admission-exam",
      },
      {
        label: { bn: "প্রতিষ্ঠানের পরীক্ষা ফলাফল", en: "Institution Exam Result" },
        href: "/results/institution-exam",
      },
      {
        label: { bn: "অনলাইন পরীক্ষা ফলাফল", en: "Online Exam Result" },
        href: "/results/online-exam",
      },
    ],
  },
  {
    label: { bn: "লিংকসমূহ", en: "Links" },
    href: "/links",
    children: [
      { label: { bn: "এমএমসি লগইন", en: "MMC Login" }, href: "/links/mmc-login" },
      {
        label: {
          bn: "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর (DSHE)",
          en: "Directorate of Secondary & Higher Education (DSHE)",
        },
        href: "/links/dshe",
      },
      {
        label: {
          bn: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB)",
          en: "National Curriculum & Textbook Board (NCTB)",
        },
        href: "/links/nctb",
      },
      {
        label: { bn: "শিক্ষক বাতায়ন", en: "Teachers Portal" },
        href: "/links/teachers-portal",
      },
      {
        label: {
          bn: "বাংলাদেশ শিক্ষা তথ্য ও পরিসংখ্যান ব্যুরো (BANBEIS)",
          en: "BANBEIS",
        },
        href: "/links/banbeis",
      },
      {
        label: {
          bn: "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর",
          en: "DSHE Directorate",
        },
        href: "/links/dshe-directorate",
      },
      {
        label: {
          bn: "মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড, রাজশাহী",
          en: "Rajshahi Education Board",
        },
        href: "/links/rajshahi-board",
      },
      {
        label: { bn: "শিক্ষা মন্ত্রণালয়", en: "Education Ministry" },
        href: "/links/education-ministry",
      },
      {
        label: {
          bn: "মাধ্যমিক ও উচ্চশিক্ষা বিভাগ - শিক্ষা মন্ত্রণালয়",
          en: "Secondary & Higher Education Division",
        },
        href: "/links/she-division",
      },
      {
        label: { bn: "ঢাকা শিক্ষা বোর্ড", en: "Dhaka Education Board" },
        href: "/links/dhaka-board",
      },
      {
        label: { bn: "বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড", en: "Madrasah Education Board" },
        href: "/links/madrasah-board",
      },
      {
        label: { bn: "জাতীয় বিশ্ববিদ্যালয়", en: "National University" },
        href: "/links/national-university",
      },
      {
        label: { bn: "জাতীয় বিশ্ববিদ্যালয় নোটিশ", en: "NU Notice" },
        href: "/links/nu-notice",
      },
      {
        label: { bn: "জাতীয় বিশ্ববিদ্যালয় ফলাফল", en: "NU Result" },
        href: "/links/nu-result",
      },
    ],
  },
  { label: { bn: "নোটিশ", en: "Notice" }, href: "/notice-board" },
  {
    label: { bn: "লগইন", en: "Login" },
    href: "/login",
    children: [
      { label: { bn: "শিক্ষার্থী", en: "Student" }, href: "/login/student" },
      { label: { bn: "শিক্ষক", en: "Teacher" }, href: "/login/teacher" },
      { label: { bn: "অ্যাডমিন", en: "Admin" }, href: "/login/admin" },
    ],
  },
  { label: { bn: "মোবাইল অ্যাপ", en: "Mobile App" }, href: "/mobile-app" },
  {
    label: { bn: "ডাউনলোড", en: "Downloads" },
    href: "/downloads",
    children: [
      {
        label: { bn: "নিবন্ধন/লটারী তথ্য ডাউনলোড", en: "Registration/Lottery" },
        href: "/downloads/registration-lottery",
      },
      {
        label: { bn: "অনলাইন ভিডিও ক্লাস", en: "Online Classes" },
        href: "/downloads/online-classes",
      },
      { label: { bn: "সাজেশন", en: "Suggestion" }, href: "/downloads/suggestion" },
      {
        label: { bn: "প্রতিদিনের পাঠ বিভাজন", en: "Daily Lesson Plan" },
        href: "/downloads/daily-lesson-plan",
      },
      {
        label: { bn: "ক্লাস রুটিন", en: "Class Routine" },
        href: "/downloads/class-routine",
      },
      {
        label: { bn: "পরীক্ষার রুটিন", en: "Exam Routine" },
        href: "/downloads/exam-routine",
      },
      { label: { bn: "সিলেবাস", en: "Syllabus" }, href: "/downloads/syllabus" },
      {
        label: { bn: "ছুটির তালিকা", en: "Holiday List" },
        href: "/downloads/holiday-list",
      },
      {
        label: { bn: "বিগত বছরের প্রশ্ন", en: "Previous Questions" },
        href: "/downloads/previous-questions",
      },
    ],
  },
];

export const ctaLinks: CtaLink[] = [
  {
    label: { bn: "অনলাইনে ভর্তি / ভর্তি ফরম", en: "Online Admission / Form" },
    href: "/online-admission",
    className:
      "inline-flex items-center justify-center rounded-full bg-[var(--color-gold-500)] px-4 py-2 text-sm font-semibold text-[var(--color-blue-900)] transition hover:bg-[color-mix(in_srgb,var(--color-gold-500),#000_8%)]",
  },
  {
    label: { bn: "প্রবেশপত্র", en: "Admit Card" },
    href: "/admit-card",
    className:
      "inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-blue-900)] transition hover:bg-[var(--color-blue-100)]",
  },
];

export const getLabel = (label: NavLabel, language: Language) =>
  language === "bn" ? label.bn : label.en;
