import BlogService, { getDefaultBlogs } from "@/services/blog.service";
import { notFound, redirect } from "next/navigation";

// This is needed for Next.js to know this is a dynamic page
export const dynamic = "force-dynamic";

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    const response = await BlogService.getBlogBySlug(slug);
    const post = response.data;

    if (!post) {
      return {
        title: "Page Not Found | Necro IPTV",
        description: "The requested page could not be found on Necro IPTV."
      };
    }

    return {
      title: `${post.title} | Necro IPTV Blog`,
      description: post.excerpt || `Read ${post.title} on Necro IPTV blog. Expert IPTV insights, guides, and news for premium streaming experience.`,
      keywords: `${post.title}, Necro IPTV blog, IPTV guides, streaming tips, ${post.tags?.join(', ') || 'IPTV news'}`,
      authors: [{ name: post.author?.name || "Necro IPTV Team" }],
      alternates: {
        canonical: `https://necroiptv.us/${slug}`,
      },
      openGraph: {
        title: `${post.title} | Necro IPTV Blog`,
        description: post.excerpt || `Read ${post.title} on Necro IPTV blog.`,
        type: "article",
        publishedTime: post.createdAt,
        authors: [post.author?.name || "Necro IPTV Team"],
        tags: post.tags || [],
        url: `https://necroiptv.us/${slug}`,
        siteName: "Necro IPTV",
        images: [
          {
            url: post.featuredImage || "/images/necro-iptv-blog-default.jpg",
            width: 1200,
            height: 630,
            alt: post.title
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} | Necro IPTV`,
        description: post.excerpt || `Read ${post.title} on Necro IPTV blog.`,
        images: [post.featuredImage || "/images/necro-iptv-blog-default.jpg"],
        creator: "@NecroIPTV"
      }
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Necro IPTV Blog Post",
      description: "Read the latest from Necro IPTV blog."
    };
  }
}

// Define static pages to avoid conflicts
const staticPages = [
  'pricing',
  'channel-list', 
  'multi-device',
  'contact',
  'blog',
  'refund-policy',
  'sitemap_index.xml',
  'page-sitemap.xml',
  'post-sitemap.xml',
  'robots.txt'
];

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  
  // If the slug matches a static page, redirect to avoid conflicts
  if (staticPages.includes(slug)) {
    redirect(`/${slug}`);
  }

  try {
    // Check if this slug is a blog post
    const response = await BlogService.getBlogBySlug(slug);
    
    // If it's a valid blog post, redirect to /blog/slug
    if (response.success && response.data) {
      redirect(`/blog/${slug}`);
    }
    
    // Handle explicit 404 from service
    if (!response.success && response.status === 404) {
      notFound();
    }

    // If we get here, it's not a blog post and not found
    notFound();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
}