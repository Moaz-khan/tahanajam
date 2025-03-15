import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  if (!postId)
    return NextResponse.json({ error: "Post ID is required" }, { status: 400 });

  const query = `*[_type == "like" && postId == $postId][0]`;
  const data = await client.fetch(query, { postId });

  return NextResponse.json({ likes: data?.count || 0 });
}

export async function POST(req: Request) {
  const { postId } = await req.json();
  if (!postId)
    return NextResponse.json({ error: "Post ID is required" }, { status: 400 });

  const query = `*[_type == "like" && postId == $postId][0]`;
  const data = await client.fetch(query, { postId });

  if (data) {
    await client.patch(data._id).inc({ count: 1 }).commit();
  } else {
    await client.create({ _type: "like", postId, count: 1 });
  }

  return NextResponse.json({ message: "Liked!" });
}

export async function DELETE(req: Request) {
  const { postId } = await req.json();
  if (!postId)
    return NextResponse.json({ error: "Post ID is required" }, { status: 400 });

  const query = `*[_type == "like" && postId == $postId][0]`;
  const data = await client.fetch(query, { postId });

  if (data && data.count > 0) {
    await client.patch(data._id).dec({ count: 1 }).commit();
  }

  return NextResponse.json({ message: "Unliked!" });
}
