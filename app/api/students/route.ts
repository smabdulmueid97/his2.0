import { NextResponse } from "next/server";

import { hashPassword } from "@/lib/auth/password";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/user";

export async function GET(request: Request) {
  await connectToDatabase();

  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") ?? "0");
  const schoolId = searchParams.get("schoolId");
  const cleanedSchoolId = schoolId?.trim();

  const query: Record<string, string> = { role: "student" };
  if (cleanedSchoolId) {
    query.schoolId = cleanedSchoolId;
  }

  const cursor = User.find(query).sort({ createdAt: -1 });
  if (limit > 0) {
    cursor.limit(limit);
  }

  const students = await cursor.select("-passwordHash").lean();
  return NextResponse.json({ students });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const {
    fullName,
    schoolId,
    grade,
    section,
    guardianName,
    phone,
    fingerprintId,
    password,
    active,
  } = payload ?? {};
  const cleanedSchoolIdPost =
    typeof schoolId === "string" ? schoolId.trim() : "";
  const cleanedFingerprintId =
    typeof fingerprintId === "string" ? fingerprintId.trim() : "";
  const cleanedPassword = typeof password === "string" ? password.trim() : "";

  if (
    !fullName ||
    !cleanedSchoolIdPost ||
    !grade ||
    !cleanedFingerprintId ||
    !cleanedPassword
  ) {
    return NextResponse.json(
      {
        error:
          "Full name, student ID, grade, fingerprint ID, and password are required.",
      },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const passwordHash = await hashPassword(cleanedPassword);
    const student = await User.create({
      fullName,
      role: "student",
      schoolId: cleanedSchoolIdPost,
      grade,
      section,
      guardianName,
      phone,
      fingerprintId: cleanedFingerprintId,
      passwordHash,
      active: active ?? true,
    });
    return NextResponse.json(
      {
        student: {
          _id: student._id,
          fullName: student.fullName,
          schoolId: student.schoolId,
          grade: student.grade,
          section: student.section,
          guardianName: student.guardianName,
          phone: student.phone,
          fingerprintId: student.fingerprintId,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create student.";
    const status = message.includes("duplicate key") ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
