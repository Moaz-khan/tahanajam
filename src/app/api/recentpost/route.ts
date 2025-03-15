import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

// Sanity Query Function
const query = `*[_type == "blog"] | order(_createdAt desc)[0...5] {
  _id,
  title,
  slug,
  mainImage { asset -> { url } },
  launchAt,
"thumbnailImage": thumbnailImage.asset->url,

}`;

export async function GET() {
  try {
    const posts = await client.fetch(query, {}, { cache: "no-store" });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching recent posts", error },
      { status: 500 },
    );
  }
}
