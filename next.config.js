/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unspalsh.com',
      's3.us-west-2.amazonaws.com'
    ]
  },
  swcMinify: true,
}

module.exports = nextConfig