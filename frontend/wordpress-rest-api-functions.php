<?php
// Add to your WordPress theme's functions.php file

// Ensure REST API is enabled
add_action('rest_api_init', function() {
    // This ensures the REST API is initialized
    error_log('WordPress REST API initialized');
});

// Enable REST API for logged out users (if needed)
add_filter('rest_authentication_errors', function($result) {
    // If there's already an error, return it
    if (true === $result || is_wp_error($result)) {
        return $result;
    }
    
    // Allow access to certain endpoints without authentication
    $allowed_routes = [
        '/wp/v2/posts',
        '/wp/v2/pages',
        '/wp/v2/categories',
        '/wp/v2/tags',
        '/wp/v2/media'
    ];
    
    $current_route = $GLOBALS['wp']->query_vars['rest_route'] ?? '';
    
    foreach ($allowed_routes as $route) {
        if (strpos($current_route, $route) === 0) {
            return true; // Allow access
        }
    }
    
    return $result;
});

// Add CORS headers for external access
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: https://necroiptv.us');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
});

// Debug function to check REST API status
function check_rest_api_status() {
    if (current_user_can('manage_options')) {
        $rest_url = rest_url('wp/v2/posts');
        echo '<div class="notice notice-info"><p>';
        echo 'REST API URL: <a href="' . esc_url($rest_url) . '" target="_blank">' . esc_html($rest_url) . '</a>';
        echo '</p></div>';
    }
}
add_action('admin_notices', 'check_rest_api_status');
?>
