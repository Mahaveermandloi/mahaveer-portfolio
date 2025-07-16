/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // ✅ disables next/image optimization in static export mode
  },
};

export default nextConfig;

