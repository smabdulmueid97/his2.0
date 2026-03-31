import { NextResponse } from "next/server";

import { hashPassword } from "@/lib/auth/password";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/user";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  const { id } = await context.params;
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
  const cleanedSchoolId =
    typeof schoolId === "string" ? schoolId.trim() : schoolId;
  const cleanedFingerprintId =
    typeof fingerprintId === "string" ? fingerprintId.trim() : fingerprintId;
  const cleanedPassword = typeof password === "string" ? password.trim() : "";

  const updates = {
    fullName,
    schoolId: cleanedSchoolId,
    grade,
    section,
    guardianName,
    phone,
    fingerprintId: cleanedFingerprintId,
    active,
  };

  const updatePayload: Record<string, unknown> = Object.fromEntries(
    Object.entries(updates).filter(([, value]) => value !== undefined)
  );

  if (cleanedPassword) {
    updatePayload.passwordHash = await hashPassword(cleanedPassword);
  }

  try {
    await connectToDatabase();
    const student = await User.findOneAndUpdate(
      { _id: id, role: "student" },
      updatePayload,
      { new: true, runValidators: true }
    );

    if (!student) {
      return NextResponse.json({ error: "Student not found." }, { status: 404 });
    }

    return NextResponse.json({
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
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update student.";
    const status = message.includes("duplicate key") ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE(_: Request, context: RouteContext) {
  const { id } = await context.params;

  try {
    await connectToDatabase();
    const student = await User.findOneAndDelete({ _id: id, role: "student" });

    if (!student) {
      return NextResponse.json({ error: "Student not found." }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete student.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}