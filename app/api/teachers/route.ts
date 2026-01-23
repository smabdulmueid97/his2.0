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

  const query: Record<string, string> = { role: "teacher" };
  if (cleanedSchoolId) {
    query.schoolId = cleanedSchoolId;
  }

  const cursor = User.find(query).sort({ createdAt: -1 });
  if (limit > 0) {
    cursor.limit(limit);
  }

  const teachers = await cursor.select("-passwordHash").lean();
  return NextResponse.json({ teachers });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const {
    fullName,
    schoolId,
    designation,
    subject,
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

  if (!fullName || !cleanedSchoolIdPost || !designation || !cleanedPassword) {
    return NextResponse.json(
      {
        error:
          "Full name, teacher ID, designation, and password are required.",
      },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const passwordHash = await hashPassword(cleanedPassword);
    const teacher = await User.create({
      fullName,
      role: "teacher",
      schoolId: cleanedSchoolIdPost,
      designation,
      subject,
      phone,
      fingerprintId: cleanedFingerprintId || undefined,
      passwordHash,
      active: active ?? true,
    });
    return NextResponse.json(
      {
        teacher: {
          _id: teacher._id,
          fullName: teacher.fullName,
          schoolId: teacher.schoolId,
          designation: teacher.designation,
          subject: teacher.subject,
          phone: teacher.phone,
          fingerprintId: teacher.fingerprintId,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create teacher.";
    const status = message.includes("duplicate key") ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
