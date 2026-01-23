import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";
import Result from "@/lib/models/result";

type RouteParams = {
  params: { id: string };
};

export async function GET(_request: Request, { params }: RouteParams) {
  await connectToDatabase();
  const result = await Result.findById(params.id).lean();
  if (!result) {
    return NextResponse.json({ error: "Result not found." }, { status: 404 });
  }
  return NextResponse.json({ result });
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const payload = await request.json();
  await connectToDatabase();
  const result = await Result.findByIdAndUpdate(params.id, payload, {
    new: true,
    runValidators: true,
  }).lean();
  if (!result) {
    return NextResponse.json({ error: "Result not found." }, { status: 404 });
  }
  return NextResponse.json({ result });
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  await connectToDatabase();
  const result = await Result.findByIdAndDelete(params.id).lean();
  if (!result) {
    return NextResponse.json({ error: "Result not found." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
