/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'cdn.cdnlogo.com', 'www.cdnlogo.com'],
  },
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
