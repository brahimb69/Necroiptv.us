// Test CORS headers from the browser
async function testCORS() {
  try {
    console.log('Testing CORS headers...');
    
    const response = await fetch('https://blog.necroiptv.us/wp-json/wp/v2/posts?per_page=1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:');
    
    // Log all response headers
    response.headers.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('Data received successfully:', data.length, 'posts');
    }
    
  } catch (error) {
    console.error('CORS test failed:', error);
  }
}

// Run the test
testCORS();
