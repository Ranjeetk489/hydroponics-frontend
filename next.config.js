/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'www.pexels.com', 'images.pexels.com'],
    
  },
  experimental: { images: { layoutRaw: true } },
};

module.exports = nextConfig;
