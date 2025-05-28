/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["necroiptv.us", "blog.necroiptv.us"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'necroiptv.us',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.necroiptv.us',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // Add headers for XML content type
  async headers() {
    return [
      {
        source: "/:path*\\.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
