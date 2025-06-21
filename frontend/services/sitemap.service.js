// Service to handle sitemap submissions and notifications to search engines

export class SitemapService {
  static async pingSearchEngines(sitemapUrl) {
    const searchEngines = [
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    ];

    const results = [];
    
    for (const pingUrl of searchEngines) {
      try {
        const response = await fetch(pingUrl, {
          method: 'GET',
          headers: {
            'User-Agent': 'Necro IPTV Sitemap Bot/1.0'
          }
        });
        
        results.push({
          engine: pingUrl.includes('google') ? 'Google' : 'Bing',
          success: response.ok,
          status: response.status
        });
      } catch (error) {
        results.push({
          engine: pingUrl.includes('google') ? 'Google' : 'Bing',
          success: false,
          error: error.message
        });
      }
    }
    
    return results;
  }

  static async submitSitemapToSearchConsole(baseUrl) {
    const sitemaps = [
      `${baseUrl}/sitemap_index.xml`,
      `${baseUrl}/page-sitemap.xml`,
      `${baseUrl}/post-sitemap.xml`
    ];

    const results = [];
    
    for (const sitemap of sitemaps) {
      try {
        const pingResults = await this.pingSearchEngines(sitemap);
        results.push({
          sitemap,
          results: pingResults
        });
      } catch (error) {
        results.push({
          sitemap,
          error: error.message
        });
      }
    }
    
    return results;
  }

  // Method to validate sitemap accessibility
  static async validateSitemap(sitemapUrl) {
    try {
      const response = await fetch(sitemapUrl);
      const content = await response.text();
      
      return {
        accessible: response.ok,
        status: response.status,
        contentType: response.headers.get('content-type'),
        hasXmlContent: content.includes('<?xml'),
        size: content.length
      };
    } catch (error) {
      return {
        accessible: false,
        error: error.message
      };
    }
  }
}
