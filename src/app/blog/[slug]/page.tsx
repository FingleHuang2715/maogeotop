import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/wordpress";
import AuthorCard from "@/components/AuthorCard";
import "@/styles/BlogSingle.css";

export const revalidate = 60; // ISR cache 60s

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPostBySlug(decodedSlug);

  if (!post) {
    return {
      title: "文章未找到 | 猫哥建站",
    };
  }

  const cleanExcerpt = post.excerpt ? post.excerpt.replace(/<[^>]+>/g, "").trim().slice(0, 160) : post.title;
  const categories = post.categories?.nodes.map((c) => c.name) || [];
  const tags = post.tags?.nodes.map((t) => t.name) || [];

  return {
    title: `${post.title} - 猫哥技术专栏 | 猫哥建站`,
    description: cleanExcerpt,
    keywords: [...categories, ...tags, "猫哥建站", "企业建站", "GEO优化", "谷歌SEO"],
    openGraph: {
      title: `${post.title} - 猫哥技术专栏`,
      description: cleanExcerpt,
      images: post.featuredImage ? [{ url: post.featuredImage.node.sourceUrl }] : [],
    },
  };
}

interface TocItem {
  id: string;
  text: string;
  level: number;
  children: TocItem[];
}

// 辅助函数：将文章 HTML 中的 H2/H3 提取并自动注入 id 生成目录树（避免使用 backreference）
function parseTocAndInjectIds(htmlContent: string): {
  cleanHtml: string;
  toc: TocItem[];
} {
  const toc: TocItem[] = [];
  let index = 0;
  
  const cleanHtml = htmlContent.replace(
    /<h([2-3])([^>]*)>([\s\S]*?)<\/h[23]>/gi,
    (match, levelStr, attrs, contentText) => {
      const level = parseInt(levelStr, 10);
      const text = contentText.replace(/<[^>]+>/g, "").trim();
      const id = "toc-anchor-" + (index++);
      
      const item: TocItem = { id, text, level, children: [] };
      
      if (level === 2) {
        toc.push(item);
      } else if (level === 3 && toc.length > 0) {
        toc[toc.length - 1].children.push(item);
      }
      
      return "<h" + level + attrs + " id=\"" + id + "\">" + contentText + "</h" + level + ">";
    }
  );
  
  return { cleanHtml, toc };
}

export default async function BlogSinglePage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPostBySlug(decodedSlug);

  if (!post) {
    notFound();
  }

  // 提取正文目录树并为 HTML 标签打上 Anchor ID
  const { cleanHtml, toc } = parseTocAndInjectIds(post.content || "");

  return (
    <main className="mg-single-wrapper">
      <div className="mg-single-container">

        {/* 2. 中间正文 */}
        <section className="mg-post-center-col">
          <div className="mg-post-main">
            <div className="mg-archive-breadcrumbs" style={{ marginBottom: "16px" }}>
              <Link href="/">首页</Link> &gt; <Link href="/blog">文章专栏</Link> &gt; <span>正文</span>
            </div>
            <h1 className="mg-post-title">
              {post.isSticky && <span className="mg-feed-sticky-tag">置顶</span>}
              {post.title}
            </h1>
            
            <div className="mg-post-meta">
              <span className="mg-feed-meta-author">猫哥</span>
              <span className="mg-meta-item" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>
                  发布于 {new Date(post.date).toLocaleDateString("zh-CN", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                  })}
                </span>
              </span>
              {post.categories?.nodes && post.categories.nodes.map(c => (
                <span className="mg-meta-tag" key={c.slug} style={{ marginRight: 6 }}>
                  {c.name}
                </span>
              ))}
            </div>

            {post.featuredImage && (
              <div className="mg-post-featured-image">
                <img src={post.featuredImage.node.sourceUrl} alt={post.title} />
              </div>
            )}

            <div 
              className="mg-post-content"
              dangerouslySetInnerHTML={{ __html: cleanHtml }}
            />

            {/* 真实 Tags 列表 */}
            {post.tags?.nodes && post.tags.nodes.length > 0 && (
              <div style={{ marginTop: "24px", display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: "#86868b", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                  <span>文章标签:</span>
                </span>
                {post.tags.nodes.map(t => (
                  <Link 
                    key={t.slug} 
                    href={"/blog?tag=" + encodeURIComponent(t.slug)} 
                    style={{ fontSize: "12px", background: "#f5f5f7", color: "#515154", padding: "4px 10px", borderRadius: "12px", textDecoration: "none", border: "1px solid #e5e7eb" }}
                  >
                    #{t.name}
                  </Link>
                ))}
              </div>
            )}

            {/* 版权声明 */}
            <div style={{ marginTop: "40px", padding: "16px 20px", border: "1px dashed rgba(10, 78, 203, 0.2)", borderRadius: "8px", backgroundColor: "#f8fafc", fontSize: "13.5px", color: "#515154" }}>
              <p style={{ margin: "0 0 8px 0" }}>
                <strong>版权声明：</strong>本文为「猫哥建站」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
              </p>
              <p style={{ margin: 0, wordBreak: "break-all" }}>
                <strong>本文链接：</strong>
                <Link href={"/blog/" + post.slug} style={{ color: "#0A4ECB", textDecoration: "none", fontWeight: 600 }}>
                  {"https://maogeo.top/blog/" + post.slug}
                </Link>
              </p>
            </div>

          </div>
        </section>

        {/* 3. 右侧侧边栏：知乎主理人名片与目录 (取消栏目导航，跟随页面滚动) */}
        <aside className="mg-archive-sidebar">
          {/* 知乎风格主理人名片 */}
          <AuthorCard />

          {/* 🌟 动态自动目录 TOC 挂载 */}
          {toc.length > 0 && (
            <div className="mg-sidebar-widget mg-toc-widget">
              <h4 className="mg-widget-title">文章目录</h4>
              <ul className="mg-toc-list">
                {toc.map((h2_item) => (
                  <li key={h2_item.id} className="mg-toc-h2-item">
                    {h2_item.children.length > 0 ? (
                      <details className="mg-toc-details" open>
                        <summary className="mg-toc-summary">
                          <Link href={"#" + h2_item.id}>{h2_item.text}</Link>
                          <span className="mg-toc-arrow">▼</span>
                        </summary>
                        <ul className="mg-toc-sub-list">
                          {h2_item.children.map((h3_item) => (
                            <li key={h3_item.id} className="mg-toc-h3-item">
                              <Link href={"#" + h3_item.id}>{h3_item.text}</Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <div className="mg-toc-summary-flat">
                        <Link href={"#" + h2_item.id}>{h2_item.text}</Link>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

      </div>
    </main>
  );
}
