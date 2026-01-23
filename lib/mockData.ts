export type Notice = {
  id: string;
  title: string;
  date: string;
  category: string;
  audience: string;
  status: string;
  excerpt: string;
  body: string;
  attachment: string;
};

export type Routine = {
  id: string;
  grade: string;
  section: string;
  days: string;
  time: string;
  room: string;
  teacher: string;
  highlights: string[];
  download: string;
};

export type Result = {
  id: string;
  student: string;
  grade: string;
  term: string;
  gpa: string;
  merit: string;
  status: string;
  remarks: string;
  subjectScores: string[];
  download: string;
};

export type AdmissionEntry = {
  id: string;
  student: string;
  grade: string;
  status: string;
  score: string;
  interviewDate: string;
};

export type FeePlan = {
  id: string;
  grade: string;
  term: string;
  total: string;
  items: { label: string; amount: string }[];
  note: string;
};

export type DownloadItem = {
  id: string;
  title: string;
  type: string;
  size: string;
  updated: string;
  tag: string;
};

export const notices: Notice[] = [
  {
    id: "NT-1001",
    title: "টার্ম-১ পরীক্ষার রুটিন প্রকাশিত",
    date: "2025-02-15",
    category: "পরীক্ষা",
    audience: "সকল শিক্ষার্থী",
    status: "নতুন",
    excerpt:
      "শ্রেণি ৬-১২ এর চূড়ান্ত পরীক্ষার তারিখ প্রকাশিত হয়েছে। আসন ও প্রবেশপত্র সংগ্রহ নিশ্চিত করুন।",
    body:
      "টার্ম-১ চূড়ান্ত পরীক্ষার রুটিন শ্রেণি ৬-১২ এর জন্য প্রকাশিত হয়েছে। প্রবেশপত্র ১৮-২০ ফেব্রুয়ারি অফিস থেকে বিতরণ করা হবে। লাইব্রেরি ও পরিবহন বকেয়া পরিশোধের পর প্রবেশপত্র সংগ্রহ করতে হবে।",
    attachment: "Term_I_Exam_Schedule.pdf",
  },
  {
    id: "NT-1002",
    title: "বিজ্ঞান মেলা নিবন্ধন শুরু",
    date: "2025-02-12",
    category: "ইভেন্ট",
    audience: "শ্রেণি ৭-১০",
    status: "খোলা",
    excerpt:
      "সর্বোচ্চ তিন জনের দল বার্ষিক HIS বিজ্ঞান মেলায় নিবন্ধন করতে পারে।",
    body:
      "বার্ষিক বিজ্ঞান মেলা ৩ মার্চ অনুষ্ঠিত হবে। প্রকল্পের সারসংক্ষেপ ২২ ফেব্রুয়ারির মধ্যে জমা দিন। নির্বাচিত দলগুলো ল্যাব এক্সেস সময়সূচি পাবে।",
    attachment: "Science_Fair_Guide.pdf",
  },
  {
    id: "NT-1003",
    title: "অভিভাবক-শিক্ষক সভা সপ্তাহ",
    date: "2025-02-08",
    category: "একাডেমিক",
    audience: "অভিভাবক",
    status: "নির্ধারিত",
    excerpt:
      "শ্রেণি শিক্ষক ও বিষয় সমন্বয়কারীর সাথে ব্যক্তিগত সভা হবে।",
    body:
      "অভিভাবক-শিক্ষক সভা সপ্তাহ ২৪ ফেব্রুয়ারি থেকে শুরু হবে। স্টুডেন্ট পোর্টালের মাধ্যমে সময় নির্ধারণ করুন। স্লট সীমিত এবং ২০ ফেব্রুয়ারিতে বন্ধ হবে।",
    attachment: "PTC_Slots.pdf",
  },
];

export const routines: Routine[] = [
  {
    id: "RT-2001",
    grade: "শ্রেণি ৬",
    section: "A",
    days: "রবি-বৃহস্পতি",
    time: "সকাল ৮:১০ - দুপুর ১:৪০",
    room: "ব্লক বি, তৃতীয় তলা",
    teacher: "মিস আমিনা রহমান",
    highlights: ["মঙ্গলবার STEM ল্যাব", "বৃহস্পতিবার সৃজনশীল শিল্প"],
    download: "Routine_Grade6A.pdf",
  },
  {
    id: "RT-2002",
    grade: "শ্রেণি ৮",
    section: "B",
    days: "রবি-বৃহস্পতি",
    time: "সকাল ৮:০০ - দুপুর ২:০০",
    room: "ব্লক সি, দ্বিতীয় তলা",
    teacher: "মি. হাসান আলী",
    highlights: ["বুধবার বিতর্ক ক্লাব", "সোমবার কোডিং ল্যাব"],
    download: "Routine_Grade8B.pdf",
  },
  {
    id: "RT-2003",
    grade: "শ্রেণি ১০",
    section: "A",
    days: "রবি-বৃহস্পতি",
    time: "সকাল ৮:০০ - দুপুর ২:১০",
    room: "ব্লক এ, চতুর্থ তলা",
    teacher: "মিস রুমি আক্তার",
    highlights: ["রবিবার উন্নত গণিত", "বুধবার পদার্থবিজ্ঞান ল্যাব"],
    download: "Routine_Grade10A.pdf",
  },
];

export const results: Result[] = [
  {
    id: "RS-3001",
    student: "নাদিয়া নূর",
    grade: "শ্রেণি ১০",
    term: "টার্ম-১",
    gpa: "৪.৮৬",
    merit: "১২",
    status: "উত্তীর্ণ",
    remarks: "চমৎকার অগ্রগতি, রসায়নে আরও মনোযোগ দিন।",
    subjectScores: [
      "বাংলা: ৯২",
      "ইংরেজি: ৮৮",
      "গণিত: ৯৬",
      "পদার্থবিজ্ঞান: ৯৪",
      "রসায়ন: ৮৫",
    ],
    download: "Result_NadiaNoor_T1.pdf",
  },
  {
    id: "RS-3002",
    student: "তারিক ইসলাম",
    grade: "শ্রেণি ৮",
    term: "টার্ম-১",
    gpa: "৪.৪৫",
    merit: "২৭",
    status: "উত্তীর্ণ",
    remarks: "গণিতে ভাল, ইংরেজি লেখায় উন্নতি করুন।",
    subjectScores: [
      "বাংলা: ৮৪",
      "ইংরেজি: ৭৬",
      "গণিত: ৯২",
      "বিজ্ঞান: ৮৬",
      "আইসিটি: ৮৯",
    ],
    download: "Result_TariqIslam_T1.pdf",
  },
  {
    id: "RS-3003",
    student: "সাদিয়া খান",
    grade: "শ্রেণি ৬",
    term: "টার্ম-১",
    gpa: "৪.৭২",
    merit: "১৮",
    status: "উত্তীর্ণ",
    remarks: "সব বিষয়ে ধারাবাহিক ফলাফল।",
    subjectScores: [
      "বাংলা: ৯০",
      "ইংরেজি: ৮৮",
      "গণিত: ৯৪",
      "বিজ্ঞান: ৯১",
      "বিজিএস: ৮৯",
    ],
    download: "Result_SadiaKhan_T1.pdf",
  },
];

export const admissionsList: AdmissionEntry[] = [
  {
    id: "AD-4001",
    student: "মাহির চৌধুরী",
    grade: "শ্রেণি ৫",
    status: "স্বল্প তালিকাভুক্ত",
    score: "৮৬",
    interviewDate: "2025-02-22",
  },
  {
    id: "AD-4002",
    student: "রাইসা আহমেদ",
    grade: "শ্রেণি ৭",
    status: "নির্বাচিত",
    score: "৯১",
    interviewDate: "2025-02-21",
  },
  {
    id: "AD-4003",
    student: "ইমরান হোসেন",
    grade: "শ্রেণি ৯",
    status: "অপেক্ষমাণ",
    score: "৭৯",
    interviewDate: "2025-02-24",
  },
];

export const feeTables: FeePlan[] = [
  {
    id: "FE-5001",
    grade: "শ্রেণি ১-৫",
    term: "টার্ম-১",
    total: "১৮,৫০০ টাকা",
    items: [
      { label: "বেতন", amount: "১২,০০০ টাকা" },
      { label: "পরীক্ষা ফি", amount: "১,৫০০ টাকা" },
      { label: "ল্যাব ও কার্যক্রম", amount: "২,০০০ টাকা" },
      { label: "রক্ষণাবেক্ষণ", amount: "৩,০০০ টাকা" },
    ],
    note: "পরিবহন ফি রুট অনুযায়ী আলাদা।",
  },
  {
    id: "FE-5002",
    grade: "শ্রেণি ৬-৮",
    term: "টার্ম-১",
    total: "২২,০০০ টাকা",
    items: [
      { label: "বেতন", amount: "১৪,৫০০ টাকা" },
      { label: "পরীক্ষা ফি", amount: "২,০০০ টাকা" },
      { label: "ল্যাব ও কার্যক্রম", amount: "২,৫০০ টাকা" },
      { label: "রক্ষণাবেক্ষণ", amount: "৩,০০০ টাকা" },
    ],
    note: "৫ মার্চের আগে পরিশোধে ছাড় প্রযোজ্য।",
  },
  {
    id: "FE-5003",
    grade: "শ্রেণি ৯-১২",
    term: "টার্ম-১",
    total: "২৬,৫০০ টাকা",
    items: [
      { label: "বেতন", amount: "১৭,০০০ টাকা" },
      { label: "পরীক্ষা ফি", amount: "২,৫০০ টাকা" },
      { label: "ল্যাব ও কার্যক্রম", amount: "৩,০০০ টাকা" },
      { label: "রক্ষণাবেক্ষণ", amount: "৪,০০০ টাকা" },
    ],
    note: "দুই কিস্তিতে পরিশোধের সুযোগ রয়েছে।",
  },
];

export const downloads: DownloadItem[] = [
  {
    id: "DL-6001",
    title: "প্রসপেক্টাস ২০২৫",
    type: "পিডিএফ",
    size: "২.৩ এমবি",
    updated: "২০২৫-০১-১০",
    tag: "ভর্তি",
  },
  {
    id: "DL-6002",
    title: "একাডেমিক ক্যালেন্ডার",
    type: "পিডিএফ",
    size: "১.১ এমবি",
    updated: "২০২৫-০১-০৫",
    tag: "একাডেমিক",
  },
  {
    id: "DL-6003",
    title: "আচরণবিধি",
    type: "পিডিএফ",
    size: "৮৬০ কেবি",
    updated: "২০২৪-১২-১৮",
    tag: "নীতি",
  },
];
