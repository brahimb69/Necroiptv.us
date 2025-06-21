import BlogService from "@/services/blog.service";
import { notFound } from "next/navigation";
import BlogPostContent from "../../components/sections/BlogPostContent";

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
        canonical: `https://necroiptv.us/blog/${slug}`,
      },
      openGraph: {
        title: `${post.title} | Necro IPTV Blog`,
        description: post.excerpt || `Read ${post.title} on Necro IPTV blog.`,
        type: "article",
        publishedTime: post.createdAt,
        authors: [post.author?.name || "Necro IPTV Team"],
        tags: post.tags || [],
        url: `https://necroiptv.us/blog/${slug}`,
        siteName: "Necro IPTV",
        images: [
          {
            url: post.featuredImage || "/images/necro-iptv-blog-default.jpg",
            width: 1200,
            height: 630,
            alt: post.title
          }
        ]
      },      twitter: {
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

export default async function BlogPost({ params }) {
  const { slug } = await params;

  try {
    const response = await BlogService.getBlogBySlug(slug);
    
    // Handle explicit 404 from service
    if (!response.success && response.status === 404) {
      notFound();
    }
    
    const post = response.data;

    if (!post) {
      notFound();
    }

    // Add comprehensive structured data for the blog post
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author?.name || "Necro IPTV Team",
        "url": `https://necroiptv.us/blog`
      },
      "publisher": {
        "@type": "Organization",
        "name": "Necro IPTV",
        "logo": {
          "@type": "ImageObject",
          "url": "https://necroiptv.us/images/logo-new.webp",
          "width": "200",
          "height": "60"
        },
        "url": "https://necroiptv.us"
      },
      "datePublished": post.createdAt,
      "dateModified": post.updatedAt || post.createdAt,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://necroiptv.us/blog/${slug}`
      },
      "image": {
        "@type": "ImageObject",
        "url": post.featuredImage || "https://necroiptv.us/images/necro-iptv-blog-default.jpg",
        "width": "1200",
        "height": "630"
      },
      "articleSection": "IPTV Guides",
      "keywords": post.tags?.join(', ') || "IPTV, streaming, Necro IPTV",
      "wordCount": post.content?.length || 0,
      "isPartOf": {
        "@type": "Blog",
        "name": "Necro IPTV Blog",
        "url": "https://necroiptv.us/blog"
      }
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <BlogPostContent post={post} />
      </>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
}
