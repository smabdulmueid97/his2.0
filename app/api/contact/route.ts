import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/lib/models/contact-message";

export async function POST(request: Request) {
  const payload = await request.json();
  const { name, phone, email, subject, message } = payload ?? {};
  const cleanedName = typeof name === "string" ? name.trim() : "";
  const cleanedPhone = typeof phone === "string" ? phone.trim() : "";
  const cleanedEmail = typeof email === "string" ? email.trim() : "";
  const cleanedSubject = typeof subject === "string" ? subject.trim() : "";
  const cleanedMessage = typeof message === "string" ? message.trim() : "";

  if (!cleanedName || !cleanedPhone || !cleanedMessage) {
    return NextResponse.json(
      { error: "Name, phone, and message are required." },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const contactMessage = await ContactMessage.create({
      name: cleanedName,
      phone: cleanedPhone,
      email: cleanedEmail || undefined,
      subject: cleanedSubject || undefined,
      message: cleanedMessage,
      status: "new",
    });

    return NextResponse.json({ contactMessage }, { status: 201 });
  } catch (error) {
    const messageText =
      error instanceof Error ? error.message : "Failed to save message.";
    return NextResponse.json({ error: messageText }, { status: 500 });
  }
}
