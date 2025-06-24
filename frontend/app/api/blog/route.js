// Create this file at: app/api/blog/route.js
// This will be a server-side API route that fetches from WordPress

import { NextResponse } from 'next/server';
import axios from 'axios';

const WORDPRESS_API_URL = "https://blog.necroiptv.us/wp-json/wp/v2";

// Helper function to transform WordPress post
function transformWordPressPost(post) {
  return {
    _id: post.id.toString(),
    title: post.title.rendered,
    slug: post.slug,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-placeholder.jpg",
    categories: post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || [],
    tags: post._embedded?.['wp:term']?.[1]?.map(tag => tag.name) || [],
    author: {
      _id: post.author?.toString() || "admin",
      name: post._embedded?.author?.[0]?.name || "Admin",
      avatar: post._embedded?.author?.[0]?.avatar_urls?.["96"] || ""
    },
    createdAt: post.date,
    updatedAt: post.modified,
    status: post.status
  };
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '100';
    
    console.log('Fetching blogs from WordPress API...');
    
    let allBlogs = [];
    let currentPage = 1;
    const perPage = 100;

    // Fetch all pages
    while (true) {
      const endpoint = `${WORDPRESS_API_URL}/posts?_embed=true&per_page=${perPage}&page=${currentPage}`;
      
      const response = await axios.get(endpoint, {
        timeout: 10000,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Necro-IPTV-Server/1.0'
        }
      });

      if (response.data.length === 0) break;

      const blogs = response.data.map(post => transformWordPressPost(post));
      allBlogs = allBlogs.concat(blogs);

      const totalPages = parseInt(response.headers['x-wp-totalpages'] || '1');
      if (currentPage >= totalPages) break;
      
      currentPage++;
    }

    return NextResponse.json({
      success: true,
      data: allBlogs,
      pagination: {
        total: allBlogs.length,
        totalPages: 1,
        currentPage: 1,
        limit: allBlogs.length
      }
    });

  } catch (error) {
    console.error('Error fetching blogs:', error);
    
    // Return fallback data
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch blogs from WordPress',
      data: [], // Could return default blogs here
    }, { status: 500 });
  }
}
