const axios = require('axios');
const WORDPRESS_API_URL = 'https://blog.necroiptv.us/wp-json/wp/v2';

// Helper function to fix malformed JSON from WordPress API
function fixMalformedJson(jsonString) {
  // Replace missing commas between properties
  let fixed = jsonString.replace(/([\"'}])([\"{a-zA-Z])/g, '$1,$2');
  // Replace missing commas between array elements
  fixed = fixed.replace(/(\d+|\w+|true|false|null)(\[)/g, '$1,$2');
  // Replace missing commas between object properties
  fixed = fixed.replace(/(\})([\"{a-zA-Z])/g, '$1,$2');
  return fixed;
}

// Custom axios instance with response interceptor to fix malformed JSON
const axiosInstance = axios.create();
axiosInstance.interceptors.response.use(response => {
  if (typeof response.data === 'string') {
    try {
      // Try to fix and parse the JSON response
      const fixedJson = fixMalformedJson(response.data);
      response.data = JSON.parse(fixedJson);
      console.log('Successfully parsed JSON response');
    } catch (error) {
      console.error('Error parsing JSON response:', error);
    }
  }
  return response;
});

async function testFix() {
  try {
    const response = await axiosInstance.get(`${WORDPRESS_API_URL}/posts`, {
      params: { per_page: 1 },
      transformResponse: [data => {
        // Return the raw data string to be processed by the interceptor
        return data;
      }]
    });
    
    console.log('Response data type:', typeof response.data);
    console.log('Response data is array:', Array.isArray(response.data));
    console.log('First post:', JSON.stringify(response.data[0], null, 2));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

testFix();
