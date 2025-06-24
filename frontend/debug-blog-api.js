#!/usr/bin/env node

const https = require('https');
const axios = require('axios');

// Test different blog configurations
const testConfigs = [
  'https://blog.necroiptv.us/wp-json/wp/v2/posts',
  'https://necroiptv.us/wp-json/wp/v2/posts',
  'https://blog.necroiptv.us/',
  'https://necroiptv.us/'
];

async function testEndpoint(url) {
  console.log(`\n🔍 Testing: ${url}`);
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Necro-IPTV-Debug/1.0'
      }
    });
    
    console.log(`✅ Status: ${response.status}`);
    console.log(`📄 Content-Type: ${response.headers['content-type']}`);
    
    if (url.includes('wp-json')) {
      if (Array.isArray(response.data)) {
        console.log(`📊 Found ${response.data.length} posts`);
        if (response.data.length > 0) {
          console.log(`📝 First post: "${response.data[0].title?.rendered || 'No title'}"`);
        }
      } else {
        console.log(`📄 Response type: ${typeof response.data}`);
      }
    }
  } catch (error) {
    if (error.response) {
      console.log(`❌ HTTP Error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.code === 'ENOTFOUND') {
      console.log(`❌ DNS Error: Domain not found`);
    } else if (error.code === 'ECONNREFUSED') {
      console.log(`❌ Connection Error: Server refused connection`);
    } else if (error.code === 'ETIMEDOUT') {
      console.log(`❌ Timeout Error: Request timed out`);
    } else {
      console.log(`❌ Error: ${error.message}`);
    }
  }
}

async function runTests() {
  console.log('🔧 Necro IPTV Blog API Debug Tool');
  console.log('=' * 50);
  
  for (const config of testConfigs) {
    await testEndpoint(config);
  }
  
  console.log('\n💡 Next Steps:');
  console.log('1. If blog.necroiptv.us is not accessible, check your DNS/hosting setup');
  console.log('2. If WordPress is hosted elsewhere, update the API URL in blog.service.js');
  console.log('3. If WordPress REST API is disabled, enable it in your WordPress admin');
  console.log('4. Check if CORS is properly configured for cross-domain requests');
}

runTests().catch(console.error);
