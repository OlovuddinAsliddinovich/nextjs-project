/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com", "us-west-2.graphassets.com"],
  },
};

module.exports = nextConfig;
