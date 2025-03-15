import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  if (!postId) {
    return NextResponse.json({ message: "Missing postId" }, { status: 400 });
  }

  const comments = await client.fetch(
    `*[_type == "comment" && postId == $postId] | order(createdAt desc)`,
    { postId },
  );

  return NextResponse.json(comments, { status: 200 });
}
