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
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
