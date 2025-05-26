import BlogService, { getDefaultBlogs } from "@/services/blog.service";
import { notFound, redirect } from "next/navigation";
import BlogPostContent from "../../components/sections/BlogPostContent";

// This is needed for Next.js to know this is a dynamic page
export const dynamic = "force-dynamic";

export default async function BlogPost({ params }) {
  // Redirect to the new root-level URL structure
  redirect(`/${params.slug}`);
}
