<?php
// Add this to your WordPress theme's functions.php file
// This will enable CORS for your Next.js frontend

// Enable CORS for REST API requests
function add_cors_http_header() {
    // Get the origin of the request
    $origin = get_http_origin();
    
    // List of allowed origins
    $allowed_origins = [
        'https://necroiptv.us',
        'https://www.necroiptv.us',
        'http://localhost:3002',  // For development
        'http://localhost:3000',  // Alternative dev port
    ];
    
    // Check if the origin is in our allowed list
    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
    }
    
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    header('Access-Control-Allow-Credentials: true');
}

// Add CORS headers to REST API responses
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($served, $result, $request, $server) {
        add_cors_http_header();
        return $served;
    }, 10, 4);
});

// Handle preflight OPTIONS requests
add_action('init', function() {
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        add_cors_http_header();
        exit;
    }
});

// Alternative method: Add CORS headers to all responses
add_action('send_headers', 'add_cors_http_header');
?>
