import { NextResponse } from "next/server";
import { getAllPostSlugsForSitemap } from "@/lib/wordpress";

export const revalidate = 3600; // 缓存 1 小时，随请求自动更新

export async function GET(request: Request) {
  let baseUrl = "https://maogeo.top";
  const host = request.headers.get("host") || "";
  const cleanHost = host.replace(/:[0-9]+$/, "");
  if (cleanHost.includes("hk.maogeo.top")) {
    baseUrl = "https://hk.maogeo.top";
  }

  // 🌟 将所有核心静态页面的最后修改时间刷新为当前最新时间，向 Google 强力发出重新抓取信号
  const now = new Date().toISOString();
  const staticPages = [
    { loc: `${baseUrl}`, priority: "1.0", changefreq: "daily", lastmod: now },
    { loc: `${baseUrl}/waimaojianzhan`, priority: "0.9", changefreq: "weekly", lastmod: now },
    { loc: `${baseUrl}/geo-tools`, priority: "0.9", changefreq: "weekly", lastmod: now },
    { loc: `${baseUrl}/geo-seo-youhua`, priority: "0.9", changefreq: "weekly", lastmod: now },
    { loc: `${baseUrl}/server-recommendation`, priority: "0.8", changefreq: "weekly", lastmod: now },
    { loc: `${baseUrl}/blog`, priority: "0.9", changefreq: "daily", lastmod: now },
    { loc: `${baseUrl}/privacy-policy`, priority: "0.3", changefreq: "monthly", lastmod: now },
    { loc: `${baseUrl}/terms-of-service`, priority: "0.3", changefreq: "monthly", lastmod: now },
    { loc: `${baseUrl}/sitemap`, priority: "0.5", changefreq: "weekly", lastmod: now },
  ];

  let postPages: { loc: string; priority: string; changefreq: string; lastmod: string }[] = [];
  try {
    const posts = await getAllPostSlugsForSitemap();
    if (posts?.length) {
      postPages = posts.map((post) => ({
        loc: `${baseUrl}/blog/${post.slug}`,
        priority: "0.8",
        changefreq: "weekly",
        lastmod: post.date ? new Date(post.date).toISOString() : now,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch posts for sitemap-index.xml:", error);
  }

  const allPages = [...staticPages, ...postPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
