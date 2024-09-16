import connectMongoDB from "@/libs/mongodb";
import Arquive from "@/models/arquives";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Arquive.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Arquive updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const arquive = await Arquive.findOne({ _id: id });
  return NextResponse.json({ arquive }, { status: 200 });
}
