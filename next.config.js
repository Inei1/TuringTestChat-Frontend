/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
    styledComponents: true,
  },
  reactStrictMode: false,
  trailingSlash: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "http://localhost:8080/:path*"
  //     }
  //   ]
  // }
};

module.exports = nextConfig
