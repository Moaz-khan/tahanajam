// app/sitemap.xml/route.ts
import { MetadataRoute } from "next";
import { client } from "../../../sanity/lib/client";

export async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://tahanajam.vercel.app";

  const blogs = await client.fetch(`*[_type == "blog"]{ slug }`);
  const projects = await client.fetch(`*[_type == "project"]{ slug }`);

  return [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/work`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },

    ...blogs.map((b: any) => ({
      url: `${baseUrl}/blog/${b.slug.current}`,
      lastModified: new Date(),
    })),
    ...projects.map((p: any) => ({
      url: `${baseUrl}/work/${p.slug.current}`,
      lastModified: new Date(),
    })),
  ];
}
