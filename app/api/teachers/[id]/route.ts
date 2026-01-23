import { NextResponse } from "next/server";

import { hashPassword } from "@/lib/auth/password";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/user";

type RouteContext = {
  params: { id: string };
};

export async function PATCH(request: Request, context: RouteContext) {
  const { id } = context.params;
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
  const cleanedSchoolId =
    typeof schoolId === "string" ? schoolId.trim() : schoolId;
  const cleanedFingerprintId =
    typeof fingerprintId === "string" ? fingerprintId.trim() : fingerprintId;
  const cleanedPassword = typeof password === "string" ? password.trim() : "";

  const updates = {
    fullName,
    schoolId: cleanedSchoolId,
    designation,
    subject,
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
    const teacher = await User.findOneAndUpdate(
      { _id: id, role: "teacher" },
      updatePayload,
      { new: true, runValidators: true }
    );

    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found." }, { status: 404 });
    }

    return NextResponse.json({
      teacher: {
        _id: teacher._id,
        fullName: teacher.fullName,
        schoolId: teacher.schoolId,
        designation: teacher.designation,
        subject: teacher.subject,
        phone: teacher.phone,
        fingerprintId: teacher.fingerprintId,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update teacher.";
    const status = message.includes("duplicate key") ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE(_: Request, context: RouteContext) {
  const { id } = context.params;

  try {
    await connectToDatabase();
    const teacher = await User.findOneAndDelete({ _id: id, role: "teacher" });

    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found." }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete teacher.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
