import { getDefaultBlogs } from "@/services/blog.service";
import Link from "next/link";

export const metadata = {
  title: "Necro IPTV Blog | Expert IPTV Guides, News & Streaming Tips",
  description: "Stay updated with the Necro IPTV blog featuring expert IPTV guides, setup tutorials, streaming technology news, device compatibility tips, and premium entertainment insights.",
};

export default function BlogPage() {
  // Get default blogs
  const blogs = getDefaultBlogs();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Necro IPTV Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest IPTV news, guides, and insights from our expert team
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog._id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Featured Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="font-bold text-lg mb-2">Necro IPTV</h3>
                  <p className="text-sm opacity-90">Premium IPTV Service</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
                
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.categories && blog.categories.map((category) => (
                    <span 
                      key={category}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="font-medium">{blog.author?.name || 'Necro IPTV Team'}</span>
                  <span>
                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                
                {/* Read More Link */}
                <div className="mt-4">
                  <Link 
                    href={`/${blog.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                  >
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className="mt-16 text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Experience Premium IPTV?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Join thousands of satisfied customers enjoying 25,000+ channels and 60,000+ VOD content
          </p>
          <Link 
            href="/pricing"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Pricing Plans
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}