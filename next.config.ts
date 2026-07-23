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
      {
        protocol: "https",
        hostname: "geo.maogeo.top",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://sdk.51.la https://*.51.la",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data: https:",
              "connect-src 'self' https:",
              "frame-src https:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/%e5%a4%96%e8%b4%b8%e5%bb%ba%e7%ab%99",
        destination: "/waimaojianzhan",
        permanent: true,
      },
      {
        source: "/%e5%bb%ba%e7%ab%99%e9%81%bf%e5%9d%91%e5%b7%a5%e5%85%b7",
        destination: "/audit-tool",
        permanent: true,
      },
      {
        source: "/%e6%9c%8d%e5%8a%a1%e5%99%a8%e6%8e%a8%e8%8d%90",
        destination: "/server-recommendation",
        permanent: true,
      },
      {
        source: "/geo%e5%b7%a5%e5%85%b7",
        destination: "/geo-tools",
        permanent: true,
      },
      {
        source: "/geo-seo%e4%bc%98%e5%8c%96",
        destination: "/geo-seo-youhua",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
