import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // Enable static export
  trailingSlash: true,          // Required for static routing
  images: {
    unoptimized: true,          // Disable image optimization (needed for static export)
  },
  basePath: "/personal-website",  // Replace with your GitHub repo name
  assetPrefix: "/personal-website/",
};

export default nextConfig;