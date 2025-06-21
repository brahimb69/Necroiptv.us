import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://necroiptv.us";

  const robotsTxt = `# Necro IPTV - Premium IPTV Service Robots.txt
# https://www.robotstxt.org/robotstxt.html

User-agent: *
Allow: /
Allow: /pricing
Allow: /channel-list
Allow: /multi-device
Allow: /contact
Allow: /blog
Allow: /refund-policy

# Allow blog structure for proper indexing
# Blog posts are now at /blog/slug path (necroiptv.us/blog/slug)
Allow: /blog/*

# Prioritize important pages for crawling
Allow: /blog/
Allow: /pricing/
Allow: /channel-list/

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /.well-known/

# Allow search engines to access CSS, JS, and media files
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /favicon.ico
Allow: /*.css$
Allow: /*.js$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.webp$

# Sitemaps - Multiple references for better discovery
Sitemap: ${baseUrl}/sitemap_index.xml
Sitemap: ${baseUrl}/page-sitemap.xml
Sitemap: ${baseUrl}/post-sitemap.xml

# Clean URLs - Help search engines understand canonical domain
Host: ${baseUrl.replace('https://', '')}
`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
