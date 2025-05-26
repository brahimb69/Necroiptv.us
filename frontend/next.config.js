/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect old blog URLs to new structure
      {
        source: '/blog/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
  // Other config options
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },
};

module.exports = nextConfig;
