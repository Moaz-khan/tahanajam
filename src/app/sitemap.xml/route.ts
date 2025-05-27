// app/sitemap.xml/route.ts
import { client } from "../../sanity/lib/client";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Sanity se blog slugs
  const blogs = await client.fetch(`*[_type == "blog"]{ slug }`);

  // 🔥 Manually defined Work slugs
  const workSlugs = [
    "fynix",
    "coinio",
    "emaildesignportfolio",
    "ovendelights",
    " morphosys",
    "ascp",
    "inhancejeweles",
    "althunayan",
  ];

  // Static & dynamic URLs combine karo
  const urls = [
    { loc: baseUrl, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/about`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/contact`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/work`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/blog`, lastmod: new Date().toISOString() },

    // ✅ Add Work Detail Pages
    ...workSlugs.map((slug) => ({
      loc: `${baseUrl}/work/${slug}`,
      lastmod: new Date().toISOString(),
    })),

    // ✅ Add Blog Detail Pages
    ...blogs.map((b: { slug: { current: string } }) => ({
      loc: `${baseUrl}/blog/${b.slug.current}`,
      lastmod: new Date().toISOString(),
    })),
  ];

  // Generate XML
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
