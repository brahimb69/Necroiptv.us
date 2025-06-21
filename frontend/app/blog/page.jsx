"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiTag,
  FiSearch,
  FiFilter,
  FiChevronRight,
  FiBookOpen,
  FiTrendingUp
} from "react-icons/fi";
import { BlogService } from "@/services/blog.service";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await BlogService.getAllBlogs();
        if (response.success) {
          setPosts(response.data);
          setFilteredPosts(response.data);
          
          // Extract unique categories
          const allCategories = ["All"];
          response.data.forEach(post => {
            post.categories.forEach(cat => {
              if (!allCategories.includes(cat)) {
                allCategories.push(cat);
              }
            });
          });
          setCategories(allCategories);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post =>
        post.categories.includes(selectedCategory)
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, posts]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const stripHtml = (html) => {
    return html.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background dark:bg-background-dark flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary dark:border-primary-hover"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Header Section */}
      <div className="relative bg-gradient-to-b from-muted to-background dark:from-secondary dark:to-background-dark border-b border-border/50 dark:border-border-dark/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 bg-[size:20px_20px] opacity-20" />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <div className="absolute left-0 right-0 top-0 -translate-y-1/2 h-[300px] w-full bg-gradient-to-br from-primary/20 to-blue-600/20 dark:from-primary/10 dark:to-blue-600/10 blur-[60px] opacity-70" />
          <div className="absolute inset-0 bg-background/20 dark:bg-background-dark/20" />
        </div>

        <div className="relative container py-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="p-1 inline-block rounded-lg bg-primary/10 dark:bg-gradient-to-r dark:from-primary/20 dark:to-blue-500/20 mb-6">
              <span className="text-primary dark:text-white text-sm font-medium px-4 py-2 flex items-center gap-2">
                <FiBookOpen className="w-4 h-4" />
                Necro IPTV Blog
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground dark:text-foreground-dark mb-6">
              IPTV Insights & 
              <span className="text-primary dark:text-primary-hover"> Expert Guides</span>
            </h1>
            
            <p className="text-lg text-muted-foreground dark:text-foreground-dark/70 max-w-2xl mx-auto mb-8">
              Stay updated with the latest IPTV trends, setup guides, troubleshooting tips, and streaming insights from our experts at Necro IPTV.
            </p>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground dark:text-foreground-dark/50" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-background/80 dark:bg-gray-800/80 backdrop-blur-sm border border-border/50 dark:border-border-dark/50 text-foreground dark:text-foreground-dark placeholder:text-muted-foreground/50 dark:placeholder:text-foreground-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
              </div>
              
              <div className="relative">
                <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground dark:text-foreground-dark/50" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-12 pr-8 py-3 rounded-xl bg-background/80 dark:bg-gray-800/80 backdrop-blur-sm border border-border/50 dark:border-border-dark/50 text-foreground dark:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container py-16">
        {filteredPosts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FiSearch className="w-16 h-16 text-muted-foreground dark:text-foreground-dark/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark mb-2">
              No articles found
            </h3>
            <p className="text-muted-foreground dark:text-foreground-dark/70">
              Try adjusting your search terms or filter criteria.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Featured Post (First Post) */}
            {filteredPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
              >
                <div className="flex items-center gap-2 mb-6">
                  <FiTrendingUp className="w-5 h-5 text-primary dark:text-primary-hover" />
                  <span className="text-sm font-medium text-primary dark:text-primary-hover uppercase tracking-wide">
                    Featured Article
                  </span>
                </div>
                
                <div className="group relative rounded-3xl overflow-hidden bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border border-border/50 dark:border-border-dark/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative h-64 lg:h-96">
                      <Image
                        src={filteredPosts[0].featuredImage || "/images/blog-placeholder.jpg"}
                        alt={filteredPosts[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/50" />
                    </div>
                    
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        {filteredPosts[0].categories.map((category, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary-hover/10 text-primary dark:text-primary-hover text-sm font-medium"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground dark:text-foreground-dark mb-4 group-hover:text-primary dark:group-hover:text-primary-hover transition-colors duration-300">
                        {filteredPosts[0].title}
                      </h2>
                      
                      <p className="text-muted-foreground dark:text-foreground-dark/70 mb-6 text-lg leading-relaxed">
                        {stripHtml(filteredPosts[0].excerpt || filteredPosts[0].content)}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground dark:text-foreground-dark/70">
                          <div className="flex items-center gap-2">
                            <FiUser className="w-4 h-4" />
                            <span>{filteredPosts[0].author?.name || "Necro IPTV Team"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiCalendar className="w-4 h-4" />
                            <span>{formatDate(filteredPosts[0].createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiClock className="w-4 h-4" />
                            <span>{getReadingTime(filteredPosts[0].content)} min read</span>
                          </div>
                        </div>
                      </div>
                      
                      <Link 
                        href={`/blog/${filteredPosts[0].slug}`}
                        className="inline-flex items-center gap-2 text-primary dark:text-primary-hover font-semibold hover:gap-3 transition-all duration-300 group/link"
                      >
                        Read Full Article
                        <FiChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Regular Posts Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post._id}
                  variants={itemVariants}
                  className="group relative rounded-2xl overflow-hidden bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border border-border/50 dark:border-border-dark/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.featuredImage || "/images/blog-placeholder.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    {post.categories.length > 0 && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-primary/90 dark:bg-primary-hover/90 text-white text-xs font-medium backdrop-blur-sm">
                          {post.categories[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-3 line-clamp-2 group-hover:text-primary dark:group-hover:text-primary-hover transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground dark:text-foreground-dark/70 mb-4 line-clamp-3 leading-relaxed">
                      {stripHtml(post.excerpt || post.content)}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground dark:text-foreground-dark/70 mb-4">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-3 h-3" />
                        <span>{formatDate(post.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock className="w-3 h-3" />
                        <span>{getReadingTime(post.content)} min</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary dark:text-primary-hover font-medium text-sm hover:gap-3 transition-all duration-300 group/link"
                    >
                      Read More
                      <FiChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/30 dark:border-border-dark/30">
                        <FiTag className="w-3 h-3 text-muted-foreground dark:text-foreground-dark/50" />
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 rounded text-xs bg-muted/50 dark:bg-gray-700/50 text-muted-foreground dark:text-foreground-dark/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5 dark:from-secondary/10 dark:via-gray-800/10 dark:to-secondary/10 border-t border-border/50 dark:border-border-dark/50">
        <div className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground dark:text-foreground-dark mb-4">
              Ready to Experience Premium IPTV?
            </h3>
            <p className="text-muted-foreground dark:text-foreground-dark/70 mb-8">
              Join thousands of satisfied customers who trust Necro IPTV for their entertainment needs.
            </p>
            <Link 
              href="/pricing"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-primary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary text-white font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              View Our Plans
              <FiChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
