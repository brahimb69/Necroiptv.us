// Test the actual blog service module
import { BlogService } from './services/blog.service.js';

async function testActualBlogService() {
  try {
    console.log('🧪 Testing actual BlogService.getAllBlogs()...');
    
    const result = await BlogService.getAllBlogs();
    
    console.log('✅ Service response received');
    console.log('Success:', result.success);
    console.log('Data count:', result.data?.length || 0);
    
    if (result.success && result.data?.length > 0) {
      console.log('\n📝 First blog post:');
      const firstPost = result.data[0];
      console.log('- Title:', firstPost.title);
      console.log('- Slug:', firstPost.slug);
      console.log('- Date:', firstPost.createdAt);
      console.log('- Categories:', firstPost.categories);
      console.log('- Featured Image:', firstPost.featuredImage);
      console.log('- Author:', firstPost.author?.name);
    } else {
      console.log('❌ Service returned error or no data');
      console.log('Error:', result.error);
    }
    
  } catch (error) {
    console.error('❌ Error testing BlogService:', error);
  }
}

testActualBlogService();
