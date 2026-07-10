/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Smaller, faster production server for Render
  output: "standalone",
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
