import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/b2b-lead-generation-company",
  assetPrefix: "/b2b-lead-generation-company",

  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
