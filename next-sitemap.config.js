/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://tahanajam.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/api/*"], // api routes robots.txt me block kar rahe hain
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
  },
};
