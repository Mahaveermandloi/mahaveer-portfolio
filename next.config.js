/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // optional: keeps next/image working on Netlify
  },
};

module.exports = nextConfig;
