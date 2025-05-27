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

# Allow blog articles at root level (necroiptv.us/slug)
Allow: /*

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Block old blog structure to prevent duplicate content and crawling issues
Disallow: /blog/

# Allow search engines to access CSS and JS files
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /*.css$
Allow: /*.js$

# Sitemaps
Sitemap: ${baseUrl}/sitemap_index.xml
Sitemap: ${baseUrl}/page-sitemap.xml
Sitemap: ${baseUrl}/post-sitemap.xml

# Clean URLs
Host: ${baseUrl.replace('https://', '')}
`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
