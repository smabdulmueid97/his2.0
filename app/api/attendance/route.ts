import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";
import Attendance from "@/lib/models/attendance";
import User from "@/lib/models/user";

export async function GET(request: Request) {
  await connectToDatabase();

  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") ?? "20");
  const studentId = searchParams.get("studentId");
  const cleanedStudentId = studentId?.trim();

  const query: Record<string, string> = {};
  if (cleanedStudentId) {
    query.schoolId = cleanedStudentId;
  }

  const attendance = await Attendance.find(query)
    .sort({ recordedAt: -1 })
    .limit(limit)
    .populate("student", "fullName schoolId grade section")
    .lean();

  return NextResponse.json({ attendance });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const { schoolId, fingerprintId, recordedAt } = payload ?? {};
  const cleanedSchoolId =
    typeof schoolId === "string" ? schoolId.trim() : "";
  const cleanedFingerprintId =
    typeof fingerprintId === "string" ? fingerprintId.trim() : "";

  if (!cleanedSchoolId || !cleanedFingerprintId) {
    return NextResponse.json(
      { error: "Student ID and fingerprint ID are required." },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const student = await User.findOne({
      role: "student",
      schoolId: cleanedSchoolId,
      fingerprintId: cleanedFingerprintId,
    });

    if (!student) {
      return NextResponse.json(
        { error: "Student not found or fingerprint mismatch." },
        { status: 404 }
      );
    }

    const parsedRecordedAt = recordedAt ? new Date(recordedAt) : new Date();
    const safeRecordedAt = Number.isNaN(parsedRecordedAt.getTime())
      ? new Date()
      : parsedRecordedAt;

    const attendance = await Attendance.create({
      student: student._id,
      schoolId: cleanedSchoolId,
      fingerprintId: cleanedFingerprintId,
      recordedAt: safeRecordedAt,
      status: "present",
      method: "fingerprint",
    });

    return NextResponse.json({ attendance }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to record attendance.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
