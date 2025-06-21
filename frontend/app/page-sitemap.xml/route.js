import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://necroiptv.us";

  // Define static pages with SEO priorities and frequencies
  const staticPages = [
    { url: "", changefreq: "daily", priority: "1.0" }, // home page
    { url: "pricing", changefreq: "weekly", priority: "0.9" },
    { url: "channel-list", changefreq: "weekly", priority: "0.8" },
    { url: "multi-device", changefreq: "weekly", priority: "0.8" },
    { url: "contact", changefreq: "monthly", priority: "0.7" },
    { url: "blog", changefreq: "weekly", priority: "0.7" },
    { url: "refund-policy", changefreq: "monthly", priority: "0.5" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticPages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page.url ? page.url : ""}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      ${page.url === "" ? `
      <image:image>
        <image:loc>${baseUrl}/images/necro-iptv-hero.jpg</image:loc>
        <image:title>Necro IPTV Premium Service</image:title>
        <image:caption>Premium IPTV service with 25,000+ channels</image:caption>
      </image:image>` : ""}
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
