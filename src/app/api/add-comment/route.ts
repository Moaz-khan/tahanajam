import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const { postId, name, text } = await req.json();

    if (!postId || !name || !text) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    await client.create({
      _type: "comment",
      postId,
      name,
      text,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Comment added successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
