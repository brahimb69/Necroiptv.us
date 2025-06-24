#!/usr/bin/env node

const https = require('https');

// Test WordPress REST API endpoints
async function checkWordPressAPI() {
  const baseUrl = 'https://blog.necroiptv.us';
  
  const endpoints = [
    '/wp-json/',                    // API discovery endpoint
    '/wp-json/wp/v2/',             // API root
    '/wp-json/wp/v2/posts',        // Posts endpoint
    '/?rest_route=/',              // Alternative API access
    '/?rest_route=/wp/v2/posts'    // Alternative posts access
  ];

  console.log('🔍 Checking WordPress REST API status...\n');

  for (const endpoint of endpoints) {
    const url = baseUrl + endpoint;
    console.log(`Testing: ${url}`);
    
    try {
      const response = await fetch(url);
      console.log(`✅ Status: ${response.status}`);
      
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        console.log(`📄 Content-Type: ${contentType}`);
        
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          
          if (endpoint === '/wp-json/') {
            console.log(`📋 API Discovery: ${data.description || 'Found'}`);
            if (data.routes) {
              console.log(`🛣️  Available routes: ${Object.keys(data.routes).length}`);
            }
          } else if (endpoint.includes('posts')) {
            if (Array.isArray(data)) {
              console.log(`📝 Posts found: ${data.length}`);
            } else {
              console.log(`📄 Response type: ${typeof data}`);
            }
          }
        }
      } else {
        console.log(`❌ HTTP Error: ${response.statusText}`);
      }
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
    }
    
    console.log('---');
  }
}

checkWordPressAPI().catch(console.error);
