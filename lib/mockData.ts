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
    title: "Term I exam schedule published",
    date: "2025-02-15",
    category: "Exams",
    audience: "All Students",
    status: "New",
    excerpt:
      "Final exam dates for Grades 6-12 are now live. Please confirm your seat and admit card pickup.",
    body:
      "The Term I final exam schedule is now available for Grades 6-12. Admit cards will be distributed from the main office between Feb 18-20. Students must clear library and transport dues before collection.",
    attachment: "Term_I_Exam_Schedule.pdf",
  },
  {
    id: "NT-1002",
    title: "Science fair registration open",
    date: "2025-02-12",
    category: "Events",
    audience: "Grade 7-10",
    status: "Open",
    excerpt:
      "Teams of up to three students can register for the annual HIS Science Fair.",
    body:
      "The annual Science Fair will be held on Mar 3. Submit project abstracts by Feb 22. Shortlisted teams will receive lab access slots.",
    attachment: "Science_Fair_Guide.pdf",
  },
  {
    id: "NT-1003",
    title: "Parent-teacher conference week",
    date: "2025-02-08",
    category: "Academic",
    audience: "Parents",
    status: "Scheduled",
    excerpt:
      "Individual meetings will be held with class teachers and subject coordinators.",
    body:
      "Parent-teacher conference week begins Feb 24. Please book your slots using the Student Portal. Slots are limited and close on Feb 20.",
    attachment: "PTC_Slots.pdf",
  },
];

export const routines: Routine[] = [
  {
    id: "RT-2001",
    grade: "Grade 6",
    section: "A",
    days: "Sun-Thu",
    time: "8:10 AM - 1:40 PM",
    room: "Block B, 3F",
    teacher: "Ms. Amina Rahman",
    highlights: ["STEM Lab on Tue", "Creative Arts on Thu"],
    download: "Routine_Grade6A.pdf",
  },
  {
    id: "RT-2002",
    grade: "Grade 8",
    section: "B",
    days: "Sun-Thu",
    time: "8:00 AM - 2:00 PM",
    room: "Block C, 2F",
    teacher: "Mr. Hasan Ali",
    highlights: ["Debate Club on Wed", "Coding Lab on Mon"],
    download: "Routine_Grade8B.pdf",
  },
  {
    id: "RT-2003",
    grade: "Grade 10",
    section: "A",
    days: "Sun-Thu",
    time: "8:00 AM - 2:10 PM",
    room: "Block A, 4F",
    teacher: "Ms. Rumi Akter",
    highlights: ["Advanced Math on Sun", "Physics Lab on Wed"],
    download: "Routine_Grade10A.pdf",
  },
];

export const results: Result[] = [
  {
    id: "RS-3001",
    student: "Nadia Noor",
    grade: "Grade 10",
    term: "Term I",
    gpa: "4.86",
    merit: "12",
    status: "Passed",
    remarks: "Excellent progress, keep focus on Chemistry.",
    subjectScores: [
      "Bangla: 92",
      "English: 88",
      "Math: 96",
      "Physics: 94",
      "Chemistry: 85",
    ],
    download: "Result_NadiaNoor_T1.pdf",
  },
  {
    id: "RS-3002",
    student: "Tariq Islam",
    grade: "Grade 8",
    term: "Term I",
    gpa: "4.45",
    merit: "27",
    status: "Passed",
    remarks: "Strong in Math, improve in English writing.",
    subjectScores: [
      "Bangla: 84",
      "English: 76",
      "Math: 92",
      "Science: 86",
      "ICT: 89",
    ],
    download: "Result_TariqIslam_T1.pdf",
  },
  {
    id: "RS-3003",
    student: "Sadia Khan",
    grade: "Grade 6",
    term: "Term I",
    gpa: "4.72",
    merit: "18",
    status: "Passed",
    remarks: "Consistent performance across all subjects.",
    subjectScores: [
      "Bangla: 90",
      "English: 88",
      "Math: 94",
      "Science: 91",
      "BGS: 89",
    ],
    download: "Result_SadiaKhan_T1.pdf",
  },
];

export const admissionsList: AdmissionEntry[] = [
  {
    id: "AD-4001",
    student: "Mahir Chowdhury",
    grade: "Grade 5",
    status: "Shortlisted",
    score: "86",
    interviewDate: "2025-02-22",
  },
  {
    id: "AD-4002",
    student: "Raisa Ahmed",
    grade: "Grade 7",
    status: "Selected",
    score: "91",
    interviewDate: "2025-02-21",
  },
  {
    id: "AD-4003",
    student: "Imran Hossain",
    grade: "Grade 9",
    status: "Waitlisted",
    score: "79",
    interviewDate: "2025-02-24",
  },
];

export const feeTables: FeePlan[] = [
  {
    id: "FE-5001",
    grade: "Grades 1-5",
    term: "Term I",
    total: "BDT 18,500",
    items: [
      { label: "Tuition", amount: "BDT 12,000" },
      { label: "Exam Fee", amount: "BDT 1,500" },
      { label: "Lab & Activity", amount: "BDT 2,000" },
      { label: "Maintenance", amount: "BDT 3,000" },
    ],
    note: "Transport is billed separately based on route.",
  },
  {
    id: "FE-5002",
    grade: "Grades 6-8",
    term: "Term I",
    total: "BDT 22,000",
    items: [
      { label: "Tuition", amount: "BDT 14,500" },
      { label: "Exam Fee", amount: "BDT 2,000" },
      { label: "Lab & Activity", amount: "BDT 2,500" },
      { label: "Maintenance", amount: "BDT 3,000" },
    ],
    note: "Early payment discount applies before Mar 5.",
  },
  {
    id: "FE-5003",
    grade: "Grades 9-12",
    term: "Term I",
    total: "BDT 26,500",
    items: [
      { label: "Tuition", amount: "BDT 17,000" },
      { label: "Exam Fee", amount: "BDT 2,500" },
      { label: "Lab & Activity", amount: "BDT 3,000" },
      { label: "Maintenance", amount: "BDT 4,000" },
    ],
    note: "Payment in two installments is available.",
  },
];

export const downloads: DownloadItem[] = [
  {
    id: "DL-6001",
    title: "Prospectus 2025",
    type: "PDF",
    size: "2.3 MB",
    updated: "2025-01-10",
    tag: "Admissions",
  },
  {
    id: "DL-6002",
    title: "Academic Calendar",
    type: "PDF",
    size: "1.1 MB",
    updated: "2025-01-05",
    tag: "Academic",
  },
  {
    id: "DL-6003",
    title: "Code of Conduct",
    type: "PDF",
    size: "860 KB",
    updated: "2024-12-18",
    tag: "Policy",
  },
];
