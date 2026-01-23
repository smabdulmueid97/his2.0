import { NextResponse } from "next/server";

import { hashPassword } from "@/lib/auth/password";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/user";

export async function POST(request: Request) {
  const payload = await request.json();
  const { fullName, schoolId, phone, email, password } = payload ?? {};

  const cleanedName = typeof fullName === "string" ? fullName.trim() : "";
  const cleanedSchoolId =
    typeof schoolId === "string" ? schoolId.trim() : "";
  const cleanedPhone = typeof phone === "string" ? phone.trim() : "";
  const cleanedEmail = typeof email === "string" ? email.trim() : "";
  const cleanedPassword = typeof password === "string" ? password.trim() : "";

  if (!cleanedName || !cleanedSchoolId || !cleanedPassword) {
    return NextResponse.json(
      { error: "Name, admin ID, and password are required." },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const existingAdmin = await User.findOne({ role: "admin" });
  if (existingAdmin) {
    return NextResponse.json(
      { error: "Admin already exists." },
      { status: 409 }
    );
  }

  const passwordHash = await hashPassword(cleanedPassword);
  const admin = await User.create({
    fullName: cleanedName,
    role: "admin",
    schoolId: cleanedSchoolId,
    phone: cleanedPhone || undefined,
    email: cleanedEmail || undefined,
    passwordHash,
    active: true,
  });

  return NextResponse.json(
    {
      admin: {
        _id: admin._id,
        fullName: admin.fullName,
        schoolId: admin.schoolId,
        phone: admin.phone,
        email: admin.email,
      },
    },
    { status: 201 }
  );
}
