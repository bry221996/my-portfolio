/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dykynznipbar7.cloudfront.net",
      },
    ],
  },
};

module.exports = nextConfig;
