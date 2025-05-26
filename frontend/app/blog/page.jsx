import BlogContent from "@/app/components/sections/BlogContent";
import BlogService, { getDefaultBlogs } from "@/services/blog.service";
import { metadata as blogMetadata } from "./metadata";

export const metadata = blogMetadata;

// This is needed for Next.js to know this is a dynamic page
export const dynamic = "force-dynamic";

// Fetch blogs server-side
async function getBlogs() {
  try {
    const response = await BlogService.getAllBlogs({
      status: "published",
      limit: 12 // Adjust as needed
    });

    // Check if the response has the expected structure
    if (response?.success && Array.isArray(response.data)) {
      return response.data;
    }

    // If the response doesn't have the expected structure but has data use it
    if (response?.data && Array.isArray(response.data)) {
      return response.data;
    }

    console.error("Invalid response structure:", response);
    return [];
  } catch (error) {
    console.error("Error fetching blogs:", error);

    // Use the imported getDefaultBlogs function
    try {
      return getDefaultBlogs();
    } catch (innerError) {
      console.error("Error getting default blogs:", innerError);
      return [];
    }
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  return <BlogContent blogs={blogs} />;
}
