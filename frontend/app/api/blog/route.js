// Create this file at: app/api/blog/route.js
// This will be a server-side API route that fetches from WordPress

import { NextResponse } from 'next/server';
import axios from 'axios';

const WORDPRESS_API_URL = "https://blog.necroiptv.us/wp-json/wp/v2";

// Helper function to get featured images for multiple posts efficiently
async function getFeaturedImagesForPosts(posts) {
  const postsWithImages = [];
  
  // Only fetch featured images for the first 20 posts to avoid performance issues
  const priorityPosts = posts.slice(0, 20);
  const remainingPosts = posts.slice(20);
  
  console.log(`Fetching featured images for ${priorityPosts.length} priority posts...`);
  
  // Process priority posts with featured images
  for (const post of priorityPosts) {
    let featuredImage = "/images/blog-placeholder.jpg";
    
    if (post.featured_media && post.featured_media !== 0) {
      try {
        const response = await axios.get(`${WORDPRESS_API_URL}/media/${post.featured_media}`, {
          timeout: 3000,
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'Necro-IPTV-Server/1.0'
          }
        });
        
        featuredImage = response.data?.source_url || "/images/blog-placeholder.jpg";
      } catch (error) {
        console.log(`Could not fetch featured image for post ${post.id}:`, error.message);
      }
    }
    
    postsWithImages.push(transformWordPressPost(post, featuredImage));
  }
  
  // Process remaining posts with placeholder images
  for (const post of remainingPosts) {
    postsWithImages.push(transformWordPressPost(post, "/images/blog-placeholder.jpg"));
  }
  
  return postsWithImages;
}

// Helper function to transform WordPress post
function transformWordPressPost(post, featuredImage = "/images/blog-placeholder.jpg") {
  return {
    _id: post.id.toString(),
    title: post.title.rendered,
    slug: post.slug,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    featuredImage: featuredImage,
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
    
    console.log('Fetching latest blogs from WordPress API...');
    
    let allPosts = [];
    let currentPage = 1;
    const perPage = 100;

    // Fetch all pages with proper ordering - SKIP _embed to avoid issues
    while (true) {
      let endpoint = `${WORDPRESS_API_URL}/posts?per_page=${perPage}&page=${currentPage}&orderby=date&order=desc`;
      
      console.log(`Fetching page ${currentPage}: ${endpoint}`);
      
      let response = await axios.get(endpoint, {
        timeout: 15000,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Necro-IPTV-Server/1.0'
        }
      });

      if (response.data.length === 0) break;

      console.log(`Page ${currentPage}: Got ${response.data.length} posts`);
      console.log(`Latest post on this page: ${response.data[0]?.title?.rendered || 'N/A'} (${response.data[0]?.date || 'N/A'})`);

      allPosts = allPosts.concat(response.data);

      const totalPages = parseInt(response.headers['x-wp-totalpages'] || '1');
      console.log(`Total pages available: ${totalPages}`);
      
      if (currentPage >= totalPages) break;
      
      currentPage++;
    }

    // Sort all posts by creation date (newest first) to ensure proper ordering
    allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Transform posts with featured images for priority posts only
    const allBlogs = await getFeaturedImagesForPosts(allPosts);

    console.log(`✅ Successfully fetched ${allBlogs.length} blogs`);
    console.log(`Latest article: ${allBlogs[0]?.title || 'N/A'} (${allBlogs[0]?.createdAt || 'N/A'})`);
    console.log(`Second latest: ${allBlogs[1]?.title || 'N/A'} (${allBlogs[1]?.createdAt || 'N/A'})`);

    return NextResponse.json({
      success: true,
      data: allBlogs,
      pagination: {
        total: allBlogs.length,
        totalPages: 1,
        currentPage: 1,
        limit: allBlogs.length
      },
      meta: {
        latestArticle: allBlogs[0]?.title || 'N/A',
        latestDate: allBlogs[0]?.createdAt || 'N/A',
        totalFetched: allBlogs.length,
        lastFetch: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Error fetching blogs:', error.message);
    
    // Return fallback data
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch blogs from WordPress',
      data: [],
      fallback: true
    }, { status: 500 });
  }
}
