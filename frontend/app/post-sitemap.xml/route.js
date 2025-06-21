import { BlogService } from "@/services/blog.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://necroiptv.us";
    const response = await BlogService.getBlogsForSitemap();
    const posts = response.success ? response.data : [];

    // Add cache headers for better performance
    const headers = {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400"
    };

    // If no posts, return empty sitemap
    if (!posts || posts.length === 0) {
      const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;
      return new NextResponse(emptySitemap, { headers });
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${posts
    .map(
      (post) => `
    <url>
      <loc>${baseUrl}/blog/${post.slug}</loc>
      <lastmod>${new Date(post.updatedAt || post.createdAt).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>${post.featuredImage ? `
      <image:image>
        <image:loc>${post.featuredImage}</image:loc>
        <image:title>${post.title.replace(/[<>&"']/g, (match) => {
          const entities = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' };
          return entities[match];
        })}</image:title>
        <image:caption>${(post.excerpt || post.title).replace(/[<>&"']/g, (match) => {
          const entities = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' };
          return entities[match];
        })}</image:caption>
      </image:image>` : ''}
    </url>
  `
    )
    .join("")}
</urlset>`;

    return new NextResponse(sitemap, { headers });
  } catch (error) {
    console.error("Error generating post sitemap:", error);
    
    // Return minimal sitemap on error to avoid breaking indexing
    const errorSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;
    
    return new NextResponse(errorSitemap, { 
      status: 200, // Return 200 to avoid breaking sitemap index
      headers: { "Content-Type": "application/xml" }
    });
  }
}
