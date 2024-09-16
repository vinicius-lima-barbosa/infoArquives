import connectMongoDB from "@/libs/mongodb";
import Arquive from "@/models/arquives";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Arquive.create({ title, description });
  return NextResponse.json({ message: "Arquive Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const arquives = await Arquive.find();
  return NextResponse.json({ arquives });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Arquive.findByIdAndDelete(id);
  return NextResponse.json({ message: "Arquive deleted" }, { status: 200 });
}
