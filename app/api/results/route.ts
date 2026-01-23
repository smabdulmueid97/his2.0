import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";
import Result from "@/lib/models/result";
import User from "@/lib/models/user";

export async function GET(request: Request) {
  await connectToDatabase();

  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") ?? "0");
  const schoolId = searchParams.get("schoolId");
  const studentId = searchParams.get("studentId");
  const year = searchParams.get("year");
  const examTitle = searchParams.get("examTitle");

  const query: Record<string, string | number> = {};
  if (schoolId?.trim()) {
    query.schoolId = schoolId.trim();
  }
  if (studentId?.trim()) {
    query.student = studentId.trim();
  }
  if (year) {
    const parsedYear = Number(year);
    if (!Number.isNaN(parsedYear)) {
      query.year = parsedYear;
    }
  }
  if (examTitle?.trim()) {
    query.examTitle = examTitle.trim();
  }

  const cursor = Result.find(query).sort({ publishedAt: -1 });
  if (limit > 0) {
    cursor.limit(limit);
  }

  const results = await cursor.lean();
  return NextResponse.json({ results });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const {
    studentId,
    schoolId,
    examTitle,
    year,
    grade,
    section,
    roll,
    subjects,
    totalMarks,
    gpa,
    publishedAt,
  } = payload ?? {};

  const cleanedStudentId = typeof studentId === "string" ? studentId.trim() : "";
  const cleanedSchoolId = typeof schoolId === "string" ? schoolId.trim() : "";
  const cleanedExamTitle = typeof examTitle === "string" ? examTitle.trim() : "";
  const cleanedGrade = typeof grade === "string" ? grade.trim() : "";
  const parsedYear = Number(year);

  if (
    !cleanedStudentId ||
    !cleanedSchoolId ||
    !cleanedExamTitle ||
    !cleanedGrade ||
    Number.isNaN(parsedYear)
  ) {
    return NextResponse.json(
      { error: "Student, school ID, exam title, year, and grade are required." },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const student = await User.findById(cleanedStudentId).select(
    "_id role schoolId"
  );
  if (!student || student.role !== "student") {
    return NextResponse.json(
      { error: "Student record not found." },
      { status: 404 }
    );
  }

  if (student.schoolId !== cleanedSchoolId) {
    return NextResponse.json(
      { error: "Student does not belong to the provided school ID." },
      { status: 400 }
    );
  }

  const computedTotalMarks = Array.isArray(subjects)
    ? subjects.reduce(
        (sum: number, item: { marks?: number }) =>
          sum + (typeof item?.marks === "number" ? item.marks : 0),
        0
      )
    : undefined;

  const result = await Result.create({
    student: student._id,
    schoolId: cleanedSchoolId,
    examTitle: cleanedExamTitle,
    year: parsedYear,
    grade: cleanedGrade,
    section: typeof section === "string" ? section.trim() : undefined,
    roll: typeof roll === "string" ? roll.trim() : undefined,
    subjects: Array.isArray(subjects) ? subjects : [],
    totalMarks:
      typeof totalMarks === "number" ? totalMarks : computedTotalMarks,
    gpa: typeof gpa === "number" ? gpa : undefined,
    publishedAt: publishedAt ? new Date(publishedAt) : undefined,
  });

  return NextResponse.json({ result }, { status: 201 });
}
