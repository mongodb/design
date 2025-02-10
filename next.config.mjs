/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.contentstack.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
