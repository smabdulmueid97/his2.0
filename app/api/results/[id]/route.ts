import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";
import Result from "@/lib/models/result";

type RouteParams = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  await connectToDatabase();
  const result = await Result.findById(id).lean();
  if (!result) {
    return NextResponse.json({ error: "Result not found." }, { status: 404 });
  }
  return NextResponse.json({ result });
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const { id } = await params;
  const payload = await request.json();
  await connectToDatabase();
  const result = await Result.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  }).lean();
  if (!result) {
    return NextResponse.json({ error: "Result not found." }, { status: 404 });
  }
  return NextResponse.json({ result });
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  await connectToDatabase();
  const result = await Result.findByIdAndDelete(id).lean();
  if (!result) {
    return NextResponse.json({ error: "Result not found." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}