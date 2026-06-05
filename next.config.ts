import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
