import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI environment variable.");
}

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      required: true,
    },
    schoolId: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    grade: { type: String, trim: true },
    section: { type: String, trim: true },
    guardianName: { type: String, trim: true },
    designation: { type: String, trim: true },
    subject: { type: String, trim: true },
    fingerprintId: { type: String, trim: true },
    passwordHash: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

UserSchema.index({ role: 1, schoolId: 1 }, { unique: true });
UserSchema.index({ fingerprintId: 1 }, { unique: true, sparse: true });

const ResultSubjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    marks: { type: Number, required: true },
    grade: { type: String, trim: true },
  },
  { _id: false }
);

const ResultSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    schoolId: { type: String, required: true, trim: true },
    examTitle: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    grade: { type: String, required: true, trim: true },
    section: { type: String, trim: true },
    roll: { type: String, trim: true },
    subjects: { type: [ResultSubjectSchema], default: [] },
    totalMarks: { type: Number },
    gpa: { type: Number },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

ResultSchema.index({ schoolId: 1, year: -1 });
ResultSchema.index({ student: 1, year: -1 });

const User = mongoose.models.User || mongoose.model("User", UserSchema);
const Result = mongoose.models.Result || mongoose.model("Result", ResultSchema);

const seedUsers = [
  {
    fullName: "Admin User",
    role: "admin",
    schoolId: "ADM-1001",
    phone: "01880000001",
    email: "admin@his.edu",
    password: "Admin@123",
  },
  {
    fullName: "Nusrat Jahan",
    role: "teacher",
    schoolId: "T-1001",
    designation: "Senior Teacher",
    subject: "Mathematics",
    phone: "01880000002",
    fingerprintId: "T1001",
    password: "Teacher@123",
  },
  {
    fullName: "Mahmud Hasan",
    role: "teacher",
    schoolId: "T-1002",
    designation: "Assistant Teacher",
    subject: "Science",
    phone: "01880000003",
    fingerprintId: "T1002",
    password: "Teacher@123",
  },
  {
    fullName: "Rahim Uddin",
    role: "student",
    schoolId: "S-2001",
    grade: "Class 8",
    section: "A",
    guardianName: "Md. Karim Uddin",
    phone: "01880000004",
    fingerprintId: "S2001",
    password: "Student@123",
  },
  {
    fullName: "Tania Akter",
    role: "student",
    schoolId: "S-2002",
    grade: "Class 10",
    section: "B",
    guardianName: "Salma Akter",
    phone: "01880000005",
    fingerprintId: "S2002",
    password: "Student@123",
  },
];

const seedResults = [
  {
    examTitle: "Term 1",
    year: 2026,
    subjects: [
      { name: "Bangla", marks: 88, grade: "A" },
      { name: "English", marks: 81, grade: "A-" },
      { name: "Mathematics", marks: 92, grade: "A+" },
      { name: "Science", marks: 86, grade: "A" },
      { name: "ICT", marks: 90, grade: "A+" },
    ],
    gpa: 4.86,
  },
  {
    examTitle: "Term 1",
    year: 2026,
    subjects: [
      { name: "Bangla", marks: 84, grade: "A-" },
      { name: "English", marks: 79, grade: "A-" },
      { name: "Mathematics", marks: 90, grade: "A+" },
      { name: "Physics", marks: 82, grade: "A-" },
      { name: "Chemistry", marks: 78, grade: "B+" },
    ],
    gpa: 4.63,
  },
];

const computeTotal = (subjects) =>
  subjects.reduce((sum, subject) => sum + subject.marks, 0);

async function seed() {
  await mongoose.connect(MONGODB_URI, { bufferCommands: false });

  for (const user of seedUsers) {
    const passwordHash = await bcrypt.hash(user.password, 10);
    const { password, ...data } = user;
    await User.updateOne(
      { role: data.role, schoolId: data.schoolId },
      {
        $setOnInsert: {
          ...data,
          passwordHash,
          active: true,
        },
      },
      { upsert: true }
    );
  }

  const students = await User.find({ role: "student" }).sort({ createdAt: 1 });

  for (let index = 0; index < seedResults.length; index += 1) {
    const student = students[index];
    if (!student) {
      continue;
    }
    const baseResult = seedResults[index];
    await Result.updateOne(
      { student: student._id, examTitle: baseResult.examTitle, year: baseResult.year },
      {
        $set: {
          student: student._id,
          schoolId: student.schoolId,
          examTitle: baseResult.examTitle,
          year: baseResult.year,
          grade: student.grade ?? "N/A",
          section: student.section,
          subjects: baseResult.subjects,
          totalMarks: computeTotal(baseResult.subjects),
          gpa: baseResult.gpa,
          publishedAt: new Date(),
        },
      },
      { upsert: true }
    );
  }

  console.log("Seed completed.");
  await mongoose.disconnect();
}

seed().catch(async (error) => {
  console.error("Seed failed:", error);
  await mongoose.disconnect();
  process.exit(1);
});
