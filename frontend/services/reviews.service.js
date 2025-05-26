import axios from "axios";

const WORDPRESS_API_URL = "https://necroiptv.us/wp-json/wp/v2";

export const ReviewsService = {
  // Get all reviews
  getAllReviews: async () => {
    try {
      // First, try to get all categories to find a reviews category
      const categoriesResponse = await axios.get(`${WORDPRESS_API_URL}/categories`);
      let reviewCategoryId = null;
      
      // Look for a category that might contain reviews
      const reviewsCategory = categoriesResponse.data.find(
        category => 
          category.name.toLowerCase().includes('review') || 
          category.name.toLowerCase().includes('testimonial')
      );
      
      if (reviewsCategory) {
        reviewCategoryId = reviewsCategory.id;
      }
      
      // Try different approaches to get reviews
      let data = [];
      
      // 1. Try custom post type if it exists
      try {
        const reviewsResponse = await axios.get(`${WORDPRESS_API_URL}/reviews`, {
          params: { per_page: 100, status: "publish" }
        });
        
        if (reviewsResponse.data && reviewsResponse.data.length > 0) {
          data = reviewsResponse.data;
        }
      } catch (error) {
        // Custom post type doesn't exist, continue to next approach
        console.log("No custom post type for reviews found");
      }
      
      // 2. If no data yet, try posts with reviews category
      if (data.length === 0 && reviewCategoryId) {
        const categoryPostsResponse = await axios.get(`${WORDPRESS_API_URL}/posts`, {
          params: { 
            per_page: 100, 
            status: "publish",
            categories: reviewCategoryId
          }
        });
        
        if (categoryPostsResponse.data && categoryPostsResponse.data.length > 0) {
          data = categoryPostsResponse.data;
        }
      }
      
      // 3. If still no data, try to find posts that might be reviews based on title/content
      if (data.length === 0) {
        const allPostsResponse = await axios.get(`${WORDPRESS_API_URL}/posts`, {
          params: { 
            per_page: 100, 
            status: "publish",
            search: "review testimonial" // Search for posts containing these terms
          }
        });
        
        if (allPostsResponse.data && allPostsResponse.data.length > 0) {
          data = allPostsResponse.data;
        }
      }
      
      // If we still have no data, return default reviews
      if (data.length === 0) {
        return {
          success: false,
          data: getDefaultReviews(),
          error: "No reviews found on WordPress site"
        };
      }
      
      // Transform WordPress posts to match our expected format
      const transformedReviews = data.map((review, index) => {
        // Extract rating from content or meta fields if available
        let rating = 5; // Default rating
        let content = review.content.rendered;
        let author = review.title.rendered;
        let location = ""; // Default location
        
        // Rotate between default avatars
        const avatarIndex = (index % 3) + 1;
        let avatar = `/images/review-auth-${avatarIndex}.png`;
        
        // Clean up HTML tags from content
        content = content.replace(/<\/?[^>]+(>|$)/g, "");
        
        // Try to extract structured data if available in the content
        const locationMatch = content.match(/Location:\s*([^,\n]+)/i) || 
                             content.match(/From:\s*([^,\n]+)/i) ||
                             content.match(/Country:\s*([^,\n]+)/i);
        if (locationMatch) {
          location = locationMatch[1].trim();
          content = content.replace(locationMatch[0], "");
        } else {
          // Assign default locations if none found
          const defaultLocations = ["United States", "Canada", "United Kingdom", "Australia", "Germany"];
          location = defaultLocations[index % defaultLocations.length];
        }
        
        const ratingMatch = content.match(/Rating:\s*(\d+)/i) || 
                           content.match(/(\d+)\/5/i) ||
                           content.match(/(\d+)\s*stars/i);
        if (ratingMatch) {
          rating = parseInt(ratingMatch[1]);
          content = content.replace(ratingMatch[0], "");
        }
        
        // If the content is too long, truncate it
        if (content.length > 300) {
          content = content.substring(0, 300) + "...";
        }
        
        // Clean up any extra whitespace
        content = content.trim();
        
        // If the author name is too generic or empty, use a default name
        if (!author || author === "Review" || author === "Testimonial" || author.length < 3) {
          const defaultNames = ["James G.", "Sarah M.", "Michael R.", "Emma T.", "David L."];
          author = defaultNames[index % defaultNames.length];
        }
        
        return {
          content,
          author,
          location,
          rating,
          avatar,
          date: review.date
        };
      });
      
      // Take only the first 6 reviews or all if less than 6
      const limitedReviews = transformedReviews.slice(0, 6);
      
      return {
        success: true,
        data: limitedReviews
      };
    } catch (error) {
      console.error("Error fetching reviews from WordPress:", error);
      
      // Return default reviews if API fails
      return {
        success: false,
        data: getDefaultReviews(),
        error: error.message
      };
    }
  },
};

// Helper function to get default reviews
function getDefaultReviews() {
  return [
    {
      content:
        "Necro IPTV has been amazing! With 25,000+ channels and 60,000+ VOD content, the variety is outstanding. The HD/4K streaming is smooth with no buffering, and their 24/7 customer support is incredibly responsive. Highly recommend Necro IPTV to anyone seeking a premium IPTV service!",
      author: "James G.",
      location: "Canada",
      rating: 5,
      avatar: "/images/review-auth-1.png",
    },
    {
      content:
        "I've tried several IPTV services, but Necro IPTV stands out. The 4K picture quality is exceptional, and their international channel selection is unmatched. The multi-device compatibility lets me watch on my Smart TV, Firestick, and phone. Necro IPTV's interface is user-friendly, making it easy to find my favorite shows.",
      author: "Sarah M.",
      location: "United States",
      rating: 5,
      avatar: "/images/review-auth-2.png",
    },
    {
      content:
        "The value for money with Necro IPTV is incredible. With such a vast library of premium content and reliable buffer-free streaming, Necro IPTV has transformed my entertainment experience. Their customer service team is always ready to help, and the regular channel updates keep the content fresh.",
      author: "Michael R.",
      location: "United Kingdom",
      rating: 5,
      avatar: "/images/review-auth-3.png",
    },
  ];
}

export default ReviewsService;
