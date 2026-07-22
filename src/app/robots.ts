import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/audit-tool",
        "/%e5%bb%ba%e7%ab%99%e9%81%bf%e5%9d%91%e5%b7%a5%e5%85%b7",
        "/api/",
      ],
    },
    sitemap: "https://maogeo.top/sitemap.xml",
  };
}
