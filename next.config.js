/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['cdna.artstation.com', 'cdnb.artstation.com', 'images.unsplash.com', 'mj-gallery.com'],
  }
}