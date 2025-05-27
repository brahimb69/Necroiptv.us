"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiCalendar, FiTag, FiUser } from "react-icons/fi";

const itemsPerPage = 6;

const BlogContent = ({ blogs = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  console.log("BlogContent: Received blogs:", { 
    blogsType: typeof blogs, 
    isArray: Array.isArray(blogs), 
    length: blogs?.length 
  });

  // Ensure blogs is an array
  const safeBlogsList = Array.isArray(blogs) ? blogs : [];

  // Filter posts based on category and search query
  const filteredPosts = safeBlogsList.filter((post) => {
    if (!post) return false;
    
    const matchesCategory =
      selectedCategory === "all" || 
      (post.categories && post.categories.includes(selectedCategory));
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      (post.title && post.title.toLowerCase().includes(searchLower)) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchLower)) ||
      (post.tags && post.tags.some((tag) =>
        tag.toLowerCase().includes(searchLower)
      ));
    
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Get unique categories and their frequencies
  const categoryFrequencies = safeBlogsList.reduce((acc, post) => {
    if (post && post.categories && Array.isArray(post.categories)) {
      post.categories.forEach((category) => {
        acc[category] = (acc[category] || 0) + 1;
      });
    }
    return acc;
  }, {});

  // Sort categories by frequency and get top 3
  const topCategories = Object.entries(categoryFrequencies)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([category]) => category);

  const categories = ["all", ...topCategories];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (!safeBlogsList || safeBlogsList.length === 0) {
    return (
      <div className="min-h-screen bg-background dark:bg-background-dark">
        <div className="container py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark">
              No blogs found
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-foreground-dark/70">
              Check back later for new content.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Header Section */}
      <div className="relative bg-gradient-to-b from-muted to-background dark:from-secondary dark:to-background-dark border-b border-border/50 dark:border-border-dark/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 bg-[size:20px_20px] opacity-20" />

        <div className="relative container py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-foreground dark:text-foreground-dark mb-4"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground dark:text-foreground-dark/70"
          >
            Stay updated with the latest IPTV news, guides, and insights
          </motion.p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-0 z-10 bg-background/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-border/50 dark:border-border-dark/50">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-2 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50 text-foreground dark:text-foreground-dark placeholder:text-muted-foreground/50 dark:placeholder:text-foreground-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-muted/50 dark:bg-secondary/50 text-muted-foreground dark:text-foreground-dark/70 hover:bg-muted dark:hover:bg-secondary"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentPosts.map((post) => (
            <motion.article
              key={post._id}
              variants={itemVariants}
              className="group relative bg-background/50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-border/50 dark:border-border-dark/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.featuredImage || "/images/blog-placeholder.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                  <FiTag className="w-4 h-4" />
                  <span>{post.categories[0]}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Link
                  href={`/${post.slug}`}
                  className="block group-hover:text-primary transition-colors"
                >
                  <h2 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground dark:text-foreground-dark/70 mb-4">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground dark:text-foreground-dark/50">
                  <div className="flex items-center gap-1">
                    <FiUser className="w-4 h-4" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : "bg-muted/50 dark:bg-secondary/50 text-muted-foreground dark:text-foreground-dark/70 hover:bg-muted dark:hover:bg-secondary"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        {/* No Results */}
        {currentPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground dark:text-foreground-dark/70">
              No blog posts found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogContent;
