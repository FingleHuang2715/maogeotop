import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "post.maogeo.top",
      },
      {
        protocol: "https",
        hostname: "maogewordpress.oss-cn-shenzhen.aliyuncs.com",
      },
      {
        protocol: "https",
        hostname: "cdn.maogeo.top",
      },
    ],
  },
};

export default nextConfig;
