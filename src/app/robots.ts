import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/audit-tool",
          "/api/",
          // 🛡️ 封锁旧 CMS/论坛系统遗留的垃圾 URL 参数（?s=search/index/...），防止 Google 将其收录为重复页面
          "/*?s=",
          "/*?s=search",
        ],
      }
    ],
    sitemap: "https://maogeo.top/sitemap.xml",
  };
}
