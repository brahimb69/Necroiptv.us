import { NextResponse } from "next/server";
import { SitemapService } from "@/services/sitemap.service";

export async function POST() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://necroiptv.us";
    
    // Submit all sitemaps to search engines
    const results = await SitemapService.submitSitemapToSearchConsole(baseUrl);
    
    return NextResponse.json({
      success: true,
      message: "Sitemaps submitted to search engines",
      results
    });
  } catch (error) {
    console.error("Error submitting sitemaps:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to submit sitemaps"
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://necroiptv.us";
    
    // Validate all sitemaps
    const sitemaps = [
      `${baseUrl}/sitemap_index.xml`,
      `${baseUrl}/page-sitemap.xml`, 
      `${baseUrl}/post-sitemap.xml`
    ];
    
    const validationResults = await Promise.all(
      sitemaps.map(async (url) => ({
        url,
        ...(await SitemapService.validateSitemap(url))
      }))
    );
    
    return NextResponse.json({
      success: true,
      sitemaps: validationResults
    });
  } catch (error) {
    console.error("Error validating sitemaps:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to validate sitemaps"
    }, { status: 500 });
  }
}
