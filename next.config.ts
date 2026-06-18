import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.zillowstatic.com" },
      { protocol: "https", hostname: "**.zillow.com" },
    ],
  },
};

export default nextConfig;
