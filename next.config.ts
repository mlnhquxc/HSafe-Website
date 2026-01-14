import type { NextConfig } from "next";

// Chỉ dùng basePath khi build production (GitHub Pages),
// dev vẫn chạy ở http://localhost:3000
const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/HSafe-Website"; // ⚠️ phải trùng TÊN REPO

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Prod: https://mlnhquxc.github.io/HSafe-Website/ -> có basePath
  // Dev:  http://localhost:3000 -> không basePath
  basePath: isProd ? repoBasePath : undefined,
  assetPrefix: isProd ? repoBasePath : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBasePath : "",
  },
  // Fix cross-origin warning for dev server
  allowedDevOrigins: ["v1.hsafe.net"],
  // Giảm CPU: disable experimental features
  experimental: {
    // Tắt optimizations không cần thiết
    optimizePackageImports: [],
  },
  // Giảm memory/CPU khi build
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
