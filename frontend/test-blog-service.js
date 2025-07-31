const axios = require('axios');

// Test the exact same request that your blog service makes
async function testBlogServiceDirect() {
  try {
    console.log('Testing blog service API call...');
    
    const WORDPRESS_API_URL = "https://blog.necroiptv.us/wp-json/wp/v2";
    const url = `${WORDPRESS_API_URL}/posts?_embed=true&per_page=5`;
    
    console.log('Making request to:', url);
    
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Necro-IPTV-Frontend/1.0'
      }
    });
    
    console.log('✅ Status:', response.status);
    console.log('📄 Content-Type:', response.headers['content-type']);
    console.log('📝 Posts returned:', response.data.length);
    
    if (response.data.length > 0) {
      const firstPost = response.data[0];
      console.log('\n🔍 First post analysis:');
      console.log('- ID:', firstPost.id);
      console.log('- Title:', firstPost.title?.rendered);
      console.log('- Slug:', firstPost.slug);
      console.log('- Date:', firstPost.date);
      console.log('- Has _embedded:', !!firstPost._embedded);
      console.log('- Featured media ID:', firstPost.featured_media);
      
      // Check categories
      if (firstPost._embedded?.['wp:term']?.[0]) {
        console.log('- Categories:', firstPost._embedded['wp:term'][0].map(cat => cat.name));
      }
      
      // Check tags  
      if (firstPost._embedded?.['wp:term']?.[1]) {
        console.log('- Tags:', firstPost._embedded['wp:term'][1].map(tag => tag.name));
      }
      
      // Check featured image
      if (firstPost._embedded?.['wp:featuredmedia']?.[0]) {
        console.log('- Featured image URL:', firstPost._embedded['wp:featuredmedia'][0].source_url);
      }
      
      // Check author
      if (firstPost._embedded?.author?.[0]) {
        console.log('- Author:', firstPost._embedded.author[0].name);
      }
    }
    
    console.log('\n✅ Blog API is working correctly!');
    
  } catch (error) {
    console.error('❌ Error testing blog service:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
      console.error('Data:', error.response.data);
    } else {
      console.error('Message:', error.message);
    }
  }
}

testBlogServiceDirect();
