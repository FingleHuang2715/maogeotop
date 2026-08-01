import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,

  images: {
    unoptimized: process.env.NODE_ENV === "development",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "imagedelivery.net", pathname: "/**" },
      { protocol: "https", hostname: "post.maogeo.top", pathname: "/**" },
      { protocol: "https", hostname: "maogewordpress.oss-cn-shenzhen.aliyuncs.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn.maogeo.top", pathname: "/**" },
      { protocol: "https", hostname: "geo.maogeo.top", pathname: "/**" },
    ],
  },

  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/geo-seo%e4%bc%98%e5%8c%96",
        destination: "/geo-seo-youhua",
        permanent: true,
      },
      {
        source: "/geo-seo%E4%BC%98%E5%8C%96",
        destination: "/geo-seo-youhua",
        permanent: true,
      },
      {
        source: "/geo-seo优化",
        destination: "/geo-seo-youhua",
        permanent: true,
      },
      {
        source: "/%e5%a4%96%e8%b4%b8%e5%bb%ba%e7%ab%99",
        destination: "/waimaojianzhan",
        permanent: true,
      },
      {
        source: "/%E5%A4%96%E8%B4%B8%E5%BB%BA%E7%AB%99",
        destination: "/waimaojianzhan",
        permanent: true,
      },
      {
        source: "/外贸建站",
        destination: "/waimaojianzhan",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
