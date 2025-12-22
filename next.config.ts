import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Nếu deploy trên subpath (ví dụ: https://username.github.io/repo-name/)
  // Uncomment và thay đổi basePath & assetPrefix:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name',
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
