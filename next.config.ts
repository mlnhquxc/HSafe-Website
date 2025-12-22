import type { NextConfig } from "next";

// GitHub Pages subpath - change this if your repo name is different
const basePath = '/HSafe-Website';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
