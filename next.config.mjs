/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/app/sitemap.xml",
      },
    ];
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.fotogiraffe-assets.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
