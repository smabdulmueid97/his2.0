import { NextResponse } from "next/server";

import { verifyPassword } from "@/lib/auth/password";
import { signSession } from "@/lib/auth/session";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/user";

export async function POST(request: Request) {
  const payload = await request.json();
  const { role, schoolId, password } = payload ?? {};

  const cleanedRole =
    role === "student" || role === "teacher" || role === "admin" ? role : "";
  const cleanedSchoolId = typeof schoolId === "string" ? schoolId.trim() : "";
  const cleanedPassword = typeof password === "string" ? password : "";

  if (!cleanedRole || !cleanedSchoolId || !cleanedPassword) {
    return NextResponse.json(
      { error: "Role, ID, and password are required." },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const user = await User.findOne({
    role: cleanedRole,
    schoolId: cleanedSchoolId,
  });

  if (!user || !user.passwordHash) {
    return NextResponse.json({ error: "Invalid login." }, { status: 401 });
  }

  const isValid = await verifyPassword(cleanedPassword, user.passwordHash);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid login." }, { status: 401 });
  }

  const token = await signSession({
    sub: user._id.toString(),
    role: user.role,
    schoolId: user.schoolId,
  });

  const response = NextResponse.json({
    ok: true,
    redirect: `/${user.role}`,
  });

  response.cookies.set("his-session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
