// Quick test to see if getDefaultBlogs works
const { getDefaultBlogs } = require('./services/blog.service.js');

console.log("Testing getDefaultBlogs...");
try {
  const blogs = getDefaultBlogs();
  console.log("✅ Success! Got", blogs.length, "blogs");
  console.log("First blog title:", blogs[0]?.title);
} catch (error) {
  console.error("❌ Error:", error.message);
}
