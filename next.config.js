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
  /*
  Added social links to header
  Improved responsiveness of login/register buttons
  Added a message to reset password screen that notifies you of the requirement to not be unsubscribed to receive an email
  Minor optimizations to images
  Fixed an issue where images on the result screen would be too large on mobile
  Fixed an issue where mobile displays weren't being detected properly on first loading the website
  */
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
