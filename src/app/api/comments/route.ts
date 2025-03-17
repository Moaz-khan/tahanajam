import { NextResponse } from "next/server";

const comments = [
  { image: "/images/comments/1.png" },
  { image: "/images/comments/2.png" },
  { image: "/images/comments/3.png" },
  { image: "/images/comments/4.png" },
  { image: "/images/comments/5.png" },

];

export async function GET() {
  return NextResponse.json(comments, { status: 200 });
}
