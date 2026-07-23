import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories, getPaginatedPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "站点地图 (Sitemap) | 猫哥建站 - 全站结构与文章导航",
  description: "猫哥建站全站 HTML 站点地图，提供首页、外贸企业建站、GEO 优化、服务器推荐、避坑工具及完整技术专栏文章快速导航。",
  keywords: ["站点地图", "Sitemap", "猫哥建站导航", "文章全集列表"],
};

export const revalidate = 60; // 60s ISR

export default async function SitemapPage() {
  const [categories, paginatedPosts] = await Promise.all([
    getAllCategories(),
    getPaginatedPosts({ first: 100 }),
  ]);

  const posts = paginatedPosts.posts;

  const coreRoutes = [
    { title: "网站首页", path: "/", desc: "猫哥建站官网首页与核心优势展现" },
    { title: "外贸建站服务", path: "/waimaojianzhan", desc: "100% 定制高转化独立站建设方案" },
    { title: "GEO 生成式 AI 优化", path: "/web-design-seo", desc: "面向 Google AI Overviews & ChatGPT 提炼规则" },
    { title: "服务器推荐与配置", path: "/host-recommendation", desc: "高性能外贸独立站服务器与 CDN 节点选型" },
    { title: "建站避坑工具 (升级中)", path: "/audit-tool", desc: "外贸建站防踩雷与服务商资质自测" },
    { title: "猫哥技术专栏", path: "/blog", desc: "企业建站、GEO & 谷歌 SEO 独家实战干货" },
    { title: "隐私政策", path: "/privacy-policy", desc: "个人信息保护与隐私管理说明" },
    { title: "使用条款", path: "/terms-of-service", desc: "知识产权声明与服务使用协议" },
  ];

  return (
    <main style={{ background: "#f8fafc", minHeight: "80vh", padding: "40px 20px 80px" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "#ffffff",
          border: "1px solid rgba(10, 78, 203, 0.1)",
          borderRadius: "12px",
          padding: "40px 48px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
        }}
      >
        <div style={{ fontSize: "14px", color: "#86868b", marginBottom: "12px" }}>
          <Link href="/" style={{ color: "#515154", textDecoration: "none" }}>首页</Link> &gt; <span>站点地图</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "32px", paddingBottom: "20px", borderBottom: "2px solid #0A4ECB" }}>
          <div>
            <h1 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#1d1d1f", margin: "0 0 6px 0" }}>
              站点地图 (HTML Sitemap)
            </h1>
            <p style={{ fontSize: "14px", color: "#515154", margin: 0 }}>
              收录猫哥建站全站核心服务页面、技术栏目与最新发布的文章索引
            </p>
          </div>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 18px",
              background: "rgba(10, 78, 203, 0.08)",
              color: "#0A4ECB",
              border: "1px solid rgba(10, 78, 203, 0.2)",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            📄 查看 XML 爬虫 Sitemap
          </a>
        </div>

        {/* 1. 核心页面分类 */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "4px", height: "18px", background: "#0A4ECB", borderRadius: "2px", display: "inline-block" }} />
            核心页面与服务索引
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
            {coreRoutes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                style={{
                  padding: "16px",
                  background: "#f8fafc",
                  border: "1px solid rgba(10,78,203,0.08)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#0A4ECB" }}>{route.title}</span>
                <span style={{ fontSize: "12px", color: "#6b7280", lineHeight: "1.4" }}>{route.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 2. 栏目分类索引 */}
        {categories.length > 0 && (
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "4px", height: "18px", background: "#0A4ECB", borderRadius: "2px", display: "inline-block" }} />
              文章栏目分类
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={"/blog?category=" + encodeURIComponent(cat.slug)}
                  style={{
                    padding: "8px 16px",
                    background: "rgba(10, 78, 203, 0.06)",
                    color: "#0A4ECB",
                    border: "1px solid rgba(10, 78, 203, 0.15)",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  📁 {cat.name} ({cat.count || 0})
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 3. 文章全集列表 */}
        <section>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "4px", height: "18px", background: "#0A4ECB", borderRadius: "2px", display: "inline-block" }} />
            独家技术文章全集 ({posts.length} 篇)
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {posts.map((post) => (
              <div
                key={post.id}
                style={{
                  padding: "12px 16px",
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href={"/blog/" + post.slug}
                  style={{ fontSize: "14px", fontWeight: 600, color: "#1d1d1f", textDecoration: "none" }}
                >
                  📝 {post.title}
                </Link>
                <span style={{ fontSize: "12px", color: "#86868b", whiteSpace: "nowrap" }}>
                  {new Date(post.date).toLocaleDateString("zh-CN")}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
