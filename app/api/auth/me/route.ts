import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { verifySession } from "@/lib/auth/session";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/user";

export async function GET() {
  const sessionToken = cookies().get("his-session")?.value;
  if (!sessionToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const session = await verifySession(sessionToken);
    await connectToDatabase();
    const user = await User.findById(session.sub).select("-passwordHash").lean();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        role: user.role,
        schoolId: user.schoolId,
        grade: user.grade,
        section: user.section,
        designation: user.designation,
        subject: user.subject,
        phone: user.phone,
        guardianName: user.guardianName,
        fingerprintId: user.fingerprintId,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
