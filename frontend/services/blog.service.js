import axios from "axios";

// Updated WordPress API URL to point to your blog domain
const WORDPRESS_API_URL = "https://blog.necroiptv.us/wp-json/wp/v2";

// Helper function to fix malformed JSON from WordPress API
function fixMalformedJson(jsonString) {
  if (typeof jsonString !== 'string') {
    return jsonString;
  }
  
  try {
    // First try to parse it normally
    return JSON.parse(jsonString);
  } catch (e) {
    // If that fails, try to fix the JSON
    try {
      // Replace missing commas between properties
      let fixed = jsonString.replace(/([\\"'}])([\\"{\w])/g, '$1,$2');
      // Replace missing commas between array elements
      fixed = fixed.replace(/(\d+|\w+|true|false|null)(\[)/g, '$1,$2');
      // Replace missing commas between object properties
      fixed = fixed.replace(/(\})([\\"{\w])/g, '$1,$2');
      
      // Try to parse the fixed JSON
      return JSON.parse(fixed);
    } catch (error) {
      console.error("Error parsing fixed JSON:", error);
      throw error;
    }
  }
}

// Custom axios instance with response interceptor to fix malformed JSON
const axiosInstance = axios.create();
axiosInstance.interceptors.response.use(response => {
  if (typeof response.data === 'string') {
    try {
      // Try to fix and parse the JSON response
      response.data = fixMalformedJson(response.data);
    } catch (error) {
      console.error("Error parsing JSON response:", error);
    }
  }
  return response;
});

// Helper function to make API requests with error handling
async function makeApiRequest(url, options = {}) {
  try {
    console.log("Making API request to:", url);
    const response = await axiosInstance(url, options);
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      // If the error response contains data, try to fix it
      if (typeof error.response.data === 'string') {
        try {
          error.response.data = fixMalformedJson(error.response.data);
        } catch (parseError) {
          console.error("Error parsing error response:", parseError);
        }
      }
    }
    throw error;
  }
}

// Helper function to get featured image URL from WordPress post
function getFeaturedImageUrl(post) {
  // Method 1: Try to get from _embedded['wp:featuredmedia']
  if (post._embedded && 
      post._embedded['wp:featuredmedia'] && 
      post._embedded['wp:featuredmedia'][0]) {
    
    // Try source_url first
    if (post._embedded['wp:featuredmedia'][0].source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    
    // If that's not available, try media_details
    if (post._embedded['wp:featuredmedia'][0].media_details && 
        post._embedded['wp:featuredmedia'][0].media_details.sizes) {
      
      // Try to get full size
      if (post._embedded['wp:featuredmedia'][0].media_details.sizes.full) {
        return post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
      }
      
      // Or large size
      if (post._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
        return post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
      }
      
      // Or medium size
      if (post._embedded['wp:featuredmedia'][0].media_details.sizes.medium) {
        return post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
      }
    }
  }
  
  // Method 2: Try to handle featured_media ID directly
  if (post.featured_media && post.featured_media !== 0) {
    console.log('Post has featured_media ID:', post.featured_media);
    // We would need to make another API call to get the image URL
    // But instead, we'll return a placeholder for now
  }
  
  // Default fallback
  return "/images/blog-placeholder.jpg";
}

// Helper function to transform WordPress post to your blog format
function transformWordPressPost(post) {
  // Debug log removed
  
  return {
    _id: post.id.toString(),
    title: post.title.rendered,
    slug: post.slug,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    featuredImage: getFeaturedImageUrl(post),
    categories: post._embedded && 
                post._embedded['wp:term'] && 
                post._embedded['wp:term'][0] ? 
                post._embedded['wp:term'][0].map(cat => cat.name) : 
                [],
    tags: post._embedded && 
          post._embedded['wp:term'] && 
          post._embedded['wp:term'][1] ? 
          post._embedded['wp:term'][1].map(tag => tag.name) : 
          [],
    author: {
      _id: post.author ? post.author.toString() : "admin",
      name: post._embedded && 
            post._embedded.author && 
            post._embedded.author[0] ? 
            post._embedded.author[0].name : 
            "Admin",
      avatar: post._embedded && 
              post._embedded.author && 
              post._embedded.author[0] && 
              post._embedded.author[0].avatar_urls ? 
              post._embedded.author[0].avatar_urls["96"] : 
              ""
    },
    createdAt: post.date,
    updatedAt: post.modified,
    status: post.status
  };
}

export const BlogService = {
  // Get all blogs with pagination and filters
  getAllBlogs: async (params = {}) => {
    try {
      const { status, category, tag, search } = params;
      let allBlogs = [];
      let page = 1;
      const limit = 100; // Adjust as needed, WordPress might have a max limit

      // Build the base WordPress API query URL
      let baseEndpoint = `${WORDPRESS_API_URL}/posts?_embed=true&per_page=${limit}`;

      // Add additional query parameters if provided
      if (category) {
        baseEndpoint += `&categories=${category}`;
      }

      if (tag) {
        baseEndpoint += `&tags=${tag}`;
      }

      if (search) {
        baseEndpoint += `&search=${encodeURIComponent(search)}`;
      }

      let totalPages = 1; // Initialize totalPages to 1

      // Fetch all pages
      while (page <= totalPages) {
        const endpoint = `${baseEndpoint}&page=${page}`;
        const response = await makeApiRequest(endpoint);

        // Transform WordPress API response to match your expected format
        const blogs = response.data.map(post => transformWordPressPost(post));
        allBlogs = allBlogs.concat(blogs);

        // Update totalPages from the response headers
        totalPages = parseInt(response.headers['x-wp-totalpages'] || totalPages);
        page++;
      }

      return {
        success: true,
        data: allBlogs,
        pagination: {
          total: allBlogs.length,
          totalPages: 1, // Since we fetched all pages, totalPages is 1
          currentPage: 1,
          limit: allBlogs.length
        }
      };
    } catch (error) {
      console.error("Error fetching blogs:", error);
      // Fallback to default blogs in case of error
      return BlogService.getDefaultBlogs(params);
    }
  },

  // Get single blog by slug
  getBlogBySlug: async (slug) => {
    try {
      // Ensure _embed=true is used for consistency
      const response = await makeApiRequest(`${WORDPRESS_API_URL}/posts?_embed=true&slug=${slug}`);
      
      if (response.data && response.data.length > 0) {
        // Redundant log removed, keeping the one in transformWordPressPost for now
        
        const blog = transformWordPressPost(response.data[0]);
        return { success: true, data: blog };
      } else {
        throw new Error("Blog post not found");
      }
    } catch (error) {
      console.error("Error fetching blog by slug:", error);
      // Fallback to default blogs in case of error
      const defaultBlogs = getDefaultBlogs();
      const defaultBlog = defaultBlogs.find(blog => blog.slug === slug) || defaultBlogs[0];
      return { success: true, data: defaultBlog };
    }
  },

  // Get all published blogs for sitemap
  getBlogsForSitemap: async () => {
    try {
      // Get maximum number of posts for sitemap (adjust per_page as needed)
      const response = await makeApiRequest(`${WORDPRESS_API_URL}/posts?per_page=100`);
      
      const sitemapData = response.data.map(post => ({
        slug: post.slug,
        updatedAt: post.modified
      }));
      
      return { success: true, data: sitemapData };
    } catch (error) {
      console.error("Error fetching blogs for sitemap:", error);
      // Fallback to default blogs in case of error
      return BlogService.getDefaultBlogs({ mode: "sitemap" });
    }
  },
  
  // Keep the getDefaultBlogs function as a fallback
  getDefaultBlogs: (params = {}) => {
    const defaultBlogs = getDefaultBlogs();
    
    if (params.mode === "sitemap") {
      const sitemapData = defaultBlogs.map(blog => ({
        slug: blog.slug,
        updatedAt: blog.updatedAt
      }));
      
      return { success: true, data: sitemapData };
    }
    
    // Filter based on params if needed
    const { page = 1, limit = 10, status, category, tag, search } = params;
    
    let filteredBlogs = defaultBlogs;
    
    // Filter by status if provided
    if (status) {
      filteredBlogs = filteredBlogs.filter(blog => 
        blog.status === (status === "published" ? "published" : status)
      );
    }
    
    // Filter by category if provided
    if (category) {
      filteredBlogs = filteredBlogs.filter(blog => 
        blog.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
      );
    }
    
    // Filter by tag if provided
    if (tag) {
      filteredBlogs = filteredBlogs.filter(blog => 
        blog.tags.some(t => t.toLowerCase() === tag.toLowerCase())
      );
    }
    
    // Filter by search if provided
    if (search) {
      const searchLower = search.toLowerCase();
      filteredBlogs = filteredBlogs.filter(blog => 
        blog.title.toLowerCase().includes(searchLower) ||
        blog.excerpt.toLowerCase().includes(searchLower) ||
        blog.content.toLowerCase().includes(searchLower) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        blog.categories.some(cat => cat.toLowerCase().includes(searchLower))
      );
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);
    
    return {
      success: true,
      data: paginatedBlogs,
      pagination: {
        total: filteredBlogs.length,
        totalPages: Math.ceil(filteredBlogs.length / limit),
        currentPage: page,
        limit: limit
      }
    };
  }
};

// Helper function to get default blogs
export function getDefaultBlogs() {
  return [
    {
      _id: "1",
      title: "Welcome to Necro IPTV",
      slug: "welcome-to-necro-iptv",
      excerpt: "Discover the ultimate IPTV experience with Necro IPTV. Our service offers 25,000+ channels and 60,000+ VOD content in HD/4K quality...",
      content: `<p>Welcome to Necro IPTV, your premier destination for high-quality IPTV services!</p>
      <p>Our service offers an unparalleled streaming experience with:</p>
      <ul>
        <li>25,000+ live channels from around the world</li>
        <li>60,000+ movies and TV shows in our VOD library</li>
        <li>Crystal clear HD and 4K streaming quality</li>
        <li>Reliable, buffer-free playback</li>
        <li>Multi-device compatibility</li>
        <li>24/7 customer support</li>
      </ul>
      <p>Whether you're a sports enthusiast, movie lover, or enjoy international programming, Necro IPTV has something for everyone.</p>
      <p>Our easy-to-use interface makes finding and enjoying your favorite content simple and intuitive. With regular updates to our channel lineup and VOD library, you'll never run out of entertainment options.</p>
      <p>Start your journey with Necro IPTV today and transform your viewing experience!</p>`,
      featuredImage: "/images/blog-placeholder.jpg",
      categories: ["IPTV", "Streaming"],
      tags: ["IPTV", "Streaming", "Entertainment"],
      author: {
        _id: "admin",
        name: "Admin",
        avatar: ""
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: "published"
    },
    {
      _id: "2",
      title: "How to Set Up Necro IPTV on Different Devices",
      slug: "how-to-set-up-necro-iptv-on-different-devices",
      excerpt: "Learn how to set up and enjoy Necro IPTV on various devices including Smart TVs, Amazon Firestick, Android boxes, and mobile devices...",
      content: `<p>Setting up Necro IPTV on your favorite devices is quick and easy. This guide will walk you through the process for the most popular streaming platforms.</p>
      <h2>Amazon Firestick / Fire TV</h2>
      <ol>
        <li>From your Firestick home screen, go to "Settings" > "My Fire TV" > "Developer Options"</li>
        <li>Enable "Apps from Unknown Sources"</li>
        <li>Return to the home screen and search for "Downloader"</li>
        <li>Install the Downloader app</li>
        <li>Open Downloader and enter the URL provided in your welcome email</li>
        <li>Follow the on-screen instructions to install the IPTV app</li>
        <li>Open the app and enter your Necro IPTV credentials</li>
      </ol>
      <h2>Android TV / Box</h2>
      <ol>
        <li>Go to "Settings" > "Security" or "Privacy"</li>
        <li>Enable "Unknown Sources"</li>
        <li>Open the Google Play Store</li>
        <li>Search for and install an IPTV player (TiviMate, IPTV Smarters, etc.)</li>
        <li>Open the app and enter your Necro IPTV credentials or M3U URL</li>
      </ol>
      <h2>iOS Devices</h2>
      <ol>
        <li>Open the App Store</li>
        <li>Search for and install an IPTV player (GSE Smart IPTV, IPTV Smarters)</li>
        <li>Open the app and add your Necro IPTV playlist using the M3U URL or credentials</li>
      </ol>
      <p>For any setup assistance, our 24/7 customer support team is always ready to help!</p>`,
      featuredImage: "/images/blog-placeholder.jpg",
      categories: ["Tutorials", "IPTV"],
      tags: ["Setup", "Firestick", "Android", "iOS", "Smart TV"],
      author: {
        _id: "admin",
        name: "Admin",
        avatar: ""
      },
      createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      updatedAt: new Date(Date.now() - 86400000).toISOString(),
      status: "published"
    },
    {
      _id: "3",
      title: "Top 10 Sports Channels on Necro IPTV",
      slug: "top-10-sports-channels-on-necro-iptv",
      excerpt: "Explore the best sports channels available on Necro IPTV. From football to basketball, cricket to tennis, we've got all your favorite sports covered...",
      content: `<p>Sports fans rejoice! Necro IPTV offers an extensive collection of premium sports channels from around the world. Here are our top 10 picks that you shouldn't miss:</p>
      <h2>1. ESPN</h2>
      <p>The worldwide leader in sports, featuring comprehensive coverage of all major sporting events.</p>
      <h2>2. Sky Sports</h2>
      <p>Premier League football, Formula 1, golf, cricket, and more - Sky Sports has it all.</p>
      <h2>3. beIN Sports</h2>
      <p>Extensive coverage of European football leagues, tennis, and other international sports.</p>
      <h2>4. DAZN</h2>
      <p>The "Netflix of Sports" offering boxing, MMA, and various other sports content.</p>
      <h2>5. NBC Sports</h2>
      <p>Home to the Olympics, Premier League, NHL, NASCAR, and more.</p>
      <h2>6. Fox Sports</h2>
      <p>MLB, NFL, NASCAR, and college sports coverage.</p>
      <h2>7. NBA TV</h2>
      <p>24/7 basketball coverage including live games, analysis, and documentaries.</p>
      <h2>8. WWE Network</h2>
      <p>All your favorite wrestling content including PPV events and original programming.</p>
      <h2>9. Tennis Channel</h2>
      <p>Comprehensive tennis coverage including Grand Slams and ATP/WTA tournaments.</p>
      <h2>10. Golf Channel</h2>
      <p>PGA Tour events, instructional programs, and golf lifestyle content.</p>
      <p>With Necro IPTV, you'll never miss your favorite sporting events again!</p>`,
      featuredImage: "/images/blog-placeholder.jpg",
      categories: ["Sports", "IPTV"],
      tags: ["Sports", "Channels", "ESPN", "Sky Sports"],
      author: {
        _id: "admin",
        name: "Admin",
        avatar: ""
      },
      createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      updatedAt: new Date(Date.now() - 172800000).toISOString(),
      status: "published"
    }
  ];
}

export default BlogService;
