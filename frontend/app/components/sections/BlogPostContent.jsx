"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCalendar,
  FiFacebook,
  FiLinkedin,
  FiTag,
  FiTwitter,
  FiUser,
} from "react-icons/fi";

export default function BlogPostContent({ post }) {
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Post not found</h2>
            <p className="mt-4 text-gray-600">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const shareUrl = `https://necroiptv.us/blog/${post.slug}`;
  const shareText = `Check out this article: ${post.title}`;

  const shareLinks = [
    {
      name: "Facebook",
      icon: FiFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        shareUrl
      )}&title=${encodeURIComponent(post.title)}`,
    },
  ];

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background dark:bg-background-dark"
    >
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={post.featuredImage || "/images/blog-placeholder.jpg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="flex justify-center gap-2 mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="bg-blue-600/80 px-4 py-1 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-gray-200">
                <span>By {post.author.name}</span>
                <span>•</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                {post.views !== undefined && (
                  <>
                    <span>•</span>
                    <span>{post.views || 0} views</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container relative -mt-32 z-20">
        <div className="max-w-4xl mx-auto">
          {/* Navigation and Share */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 dark:bg-gray-800/80 backdrop-blur-sm text-sm text-muted-foreground dark:text-foreground-dark/70 hover:text-primary dark:hover:text-primary-hover transition-all duration-300 hover:scale-105"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/80 dark:bg-gray-800/80 backdrop-blur-sm text-muted-foreground hover:text-primary dark:text-foreground-dark/70 dark:hover:text-primary-hover transition-all duration-300 hover:scale-110"
                >
                  <link.icon className="w-4 h-4" />
                  <span className="sr-only">Share on {link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Article Header Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-background/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <motion.span
                  key={tag}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-1.5 text-sm font-medium text-primary dark:text-primary-hover bg-primary/10 dark:bg-primary-hover/10 rounded-full transition-colors duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground-dark mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground dark:text-foreground-dark/70">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-primary/10 dark:bg-primary-hover/10">
                  <FiUser className="w-4 h-4 text-primary dark:text-primary-hover" />
                </div>
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-primary/10 dark:bg-primary-hover/10">
                  <FiCalendar className="w-4 h-4 text-primary dark:text-primary-hover" />
                </div>
                <span>
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-primary/10 dark:bg-primary-hover/10">
                  <FiTag className="w-4 h-4 text-primary dark:text-primary-hover" />
                </div>
                <span>{post.categories.flatMap((category, index) => [
                  index > 0 && ", ",
                  category
                ])}</span>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-background/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl p-8 mb-8 shadow-lg prose dark:prose-invert prose-lg max-w-none"
          >
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose-headings:text-foreground dark:prose-headings:text-foreground-dark prose-p:text-muted-foreground dark:prose-p:text-foreground-dark/70 prose-a:text-primary dark:prose-a:text-primary-hover prose-strong:text-foreground dark:prose-strong:text-foreground-dark"
            />
          </motion.div>

          {/* Footer Navigation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between py-8 border-t border-border/50 dark:border-border-dark/50"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background/95 dark:bg-gray-800/95 backdrop-blur-sm text-sm font-medium text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-hover shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground dark:text-foreground-dark/70">
                Share this article:
              </span>
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/95 dark:bg-gray-800/95 backdrop-blur-sm text-muted-foreground hover:text-primary dark:text-foreground-dark/70 dark:hover:text-primary-hover shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <link.icon className="w-4 h-4" />
                  <span className="sr-only">Share on {link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
