// app/sitemap.xml/route.ts
import { client } from "../../sanity/lib/client";

export async function GET() {
  const baseUrl = "https://tahanajam.vercel.app";

  const blogs = await client.fetch(`*[_type == "blog"]{ slug }`);

  // Sitemap XML generate karte hain string ke form me
  const urls = [
    { loc: baseUrl, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/about`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/contact`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/work`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/blog`, lastmod: new Date().toISOString() },
    ...blogs.map((b: { slug: { current: string } }) => ({
      loc: `${baseUrl}/blog/${b.slug.current}`,
      lastmod: new Date().toISOString(),
    })),
  ];

  // XML string banate hain
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
      </url>
    `,
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
