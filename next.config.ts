import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
    domains: [], 
  },
  trailingSlash: true,
};

export default nextConfig;
