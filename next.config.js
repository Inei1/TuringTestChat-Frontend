/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
    styledComponents: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:8080/:path*"
      }
    ]
  }
};

module.exports = nextConfig
