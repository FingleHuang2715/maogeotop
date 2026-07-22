import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getPaginatedPosts, getAllCategories, getAllTags } from "@/lib/wordpress";
import AuthorCard from "@/components/AuthorCard";
import "@/styles/BlogArchive.css";

export const metadata: Metadata = {
  title: "猫哥技术专栏 · 企业建站 · GEO & SEO 实战指南 | 猫哥建站",
  description: "专注于企业高转化定制建站、生成式 AI (GEO) 提炼规则与谷歌 SEO 搜索排名优化，助力出海企业打造成本可控、获客高效的数字营销阵地。",
  keywords: ["企业建站", "GEO优化", "谷歌SEO", "外贸建站指南", "出海独立站", "猫哥技术专区"],
};

export const revalidate = 60; // ISR cache 60s

interface PageProps {
  searchParams: Promise<{
    q?: string;
    after?: string;
    before?: string;
    category?: string;
    tag?: string;
  }>;
}

export default async function BlogArchivePage({ searchParams }: PageProps) {
  const { q, after, before, category, tag } = await searchParams;
  const limit = 10;

  // 1. 并发抓取分类、标签与文章列表
  const [categories, tags, paginatedData] = await Promise.all([
    getAllCategories(),
    getAllTags(),
    getPaginatedPosts({
      first: limit,
      after,
      last: before ? limit : null,
      before,
      query: q,
      categorySlug: category,
      tagSlug: tag,
    })
  ]);

  const { posts, pageInfo } = paginatedData;

  // 2. 构造翻页 URL
  const searchPart = q ? "q=" + encodeURIComponent(q) + "&" : "";
  const catPart = category ? "category=" + encodeURIComponent(category) + "&" : "";
  const tagPart = tag ? "tag=" + encodeURIComponent(tag) + "&" : "";
  const baseQuery = searchPart + catPart + tagPart;

  const prevUrl = pageInfo.hasPreviousPage && pageInfo.startCursor
    ? "/blog?" + baseQuery + "before=" + encodeURIComponent(pageInfo.startCursor)
    : "#";
  const nextUrl = pageInfo.hasNextPage && pageInfo.endCursor
    ? "/blog?" + baseQuery + "after=" + encodeURIComponent(pageInfo.endCursor)
    : "#";

  return (
    <main className="mg-archive-wrapper">
      <div className="mg-archive-container">
        
        {/* 1. 面包屑与头部 */}
        <header className="mg-archive-header-card">
          <div className="mg-archive-header-left">
            <span className="mg-archive-badge">
              <svg className="mg-archive-badge-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              猫哥技术专区 · 独家干货
            </span>
            <div className="mg-archive-breadcrumbs">
              <Link href="/">首页</Link> &gt; <span>文章专栏</span>
            </div>
            <h1 className="mg-archive-main-title">
              {q 
                ? "关于 “" + q + "” 的搜索结果" 
                : category 
                ? "分类：" + category 
                : tag 
                ? "标签：" + tag 
                : "猫哥技术专栏 · 企业建站 · GEO & SEO 实战指南"}
            </h1>
            <p className="mg-archive-sub-desc">
              专注于企业高转化定制建站、生成式 AI (GEO) 提炼规则与谷歌 SEO 搜索排名优化，助力出海企业打造成本可控、获客高效的数字营销阵地。
            </p>
          </div>

          <form action="/blog" method="GET" className="mg-search-form" style={{ display: 'flex', gap: '8px', minWidth: '240px' }}>
            <input 
              type="text" 
              name="q" 
              placeholder="搜索文章教程..." 
              defaultValue={q || ""}
              className="mg-search-input"
              style={{ flex: 1, padding: '10px 16px', fontSize: '13px', border: '1.5px solid rgba(10, 78, 203, 0.2)', borderRadius: '6px', outline: 'none' }}
            />
            {category && <input type="hidden" name="category" value={category} />}
            {tag && <input type="hidden" name="tag" value={tag} />}
            <button type="submit" className="mg-search-btn" style={{ padding: '10px 18px', background: '#0A4ECB', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700 }}>搜索</button>
          </form>
        </header>

        {/* 2. 真实分类过滤栏 */}
        <nav className="mg-archive-cats-bar">
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#86868b", marginRight: "8px" }}>栏目分类:</span>
          <Link 
            href="/blog" 
            className={"mg-cat-item-link " + (!category ? "active" : "")}
          >
            全部
          </Link>
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              href={"/blog?category=" + encodeURIComponent(cat.slug)} 
              className={"mg-cat-item-link " + (category === cat.slug ? "active" : "")}
            >
              {cat.name} ({cat.count || 0})
            </Link>
          ))}
        </nav>

        {/* 4. 中间文章列表流 */}
        <section className="mg-archive-main-flow">
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", background: "#ffffff", borderRadius: "12px", border: "1px solid rgba(10,78,203,0.1)" }}>
              没有找到相关文章，您可以换个词搜索，或者返回查看全部文章。 <br />
              <Link href="/blog" style={{ color: "#0A4ECB", textDecoration: "underline", display: "inline-block", marginTop: "12px", fontWeight: 700 }}>
                返回全部文章
              </Link>
            </div>
          ) : (
            <>
              {posts.map((post) => (
                <article className="mg-feed-item" key={post.id}>
                  {post.featuredImage && (
                    <Link href={"/blog/" + post.slug} className="mg-feed-thumb">
                      <img src={post.featuredImage.node.sourceUrl} alt={post.title} />
                    </Link>
                  )}
                  <div className="mg-feed-content">
                    <h3 className="mg-feed-title">
                      {post.isSticky && <span className="mg-feed-sticky-tag">置顶</span>}
                      <Link href={"/blog/" + post.slug}>{post.title}</Link>
                    </h3>
                    <div 
                      className="mg-feed-excerpt"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                    
                    {/* 🌟 完整展示：发布者、日期、所有分类、所有标签 */}
                    <div className="mg-feed-meta">
                      <div className="mg-feed-meta-row">
                        <span className="mg-feed-meta-author">猫哥</span>
                        <span>•</span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>
                            {new Date(post.date).toLocaleDateString("zh-CN", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit"
                            })}
                          </span>
                        </span>
                        
                        {/* 展示所有分类 */}
                        {post.categories?.nodes && post.categories.nodes.length > 0 && (
                          <div className="mg-feed-cats-wrap">
                            <span className="mg-meta-label">• 分类:</span>
                            {post.categories.nodes.map((c) => (
                              <Link 
                                key={c.slug} 
                                href={"/blog?category=" + encodeURIComponent(c.slug)}
                                className="mg-feed-cat-pill"
                              >
                                {c.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* 展示所有标签 */}
                      {post.tags?.nodes && post.tags.nodes.length > 0 && (
                        <div className="mg-feed-meta-row" style={{ marginTop: 2 }}>
                          <div className="mg-feed-tags-wrap">
                            <span className="mg-meta-label" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                <line x1="7" y1="7" x2="7.01" y2="7" />
                              </svg>
                              <span>标签:</span>
                            </span>
                            {post.tags.nodes.map((t) => (
                              <Link 
                                key={t.slug} 
                                href={"/blog?tag=" + encodeURIComponent(t.slug)}
                                className="mg-feed-tag-pill"
                              >
                                #{t.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}

              <div className="mg-pagination-wrap">
                <Link 
                  href={prevUrl} 
                  className={"mg-page-btn " + (!pageInfo.hasPreviousPage ? "disabled" : "")}
                  aria-disabled={!pageInfo.hasPreviousPage}
                >
                  &larr; 上一页
                </Link>
                <Link 
                  href={nextUrl} 
                  className={"mg-page-btn " + (!pageInfo.hasNextPage ? "disabled" : "")}
                  aria-disabled={!pageInfo.hasNextPage}
                >
                  下一页 &rarr;
                </Link>
              </div>
            </>
          )}
        </section>

        {/* 5. 右侧侧边栏：知乎风格名片 + 真实标签云 */}
        <aside className="mg-archive-sidebar">
          {/* 知乎风格主理人名片 */}
          <AuthorCard />

          <div className="mg-sidebar-widget">
            <h4 className="mg-widget-title">文章标签云</h4>
            <div className="mg-sidebar-tags">
              {tags.map((t) => (
                <Link 
                  key={t.slug} 
                  href={"/blog?tag=" + encodeURIComponent(t.slug)} 
                  className={"mg-sidebar-tag-link " + (tag === t.slug ? "active" : "")}
                  style={{
                    backgroundColor: tag === t.slug ? "var(--blue, #0A4ECB)" : "",
                    color: tag === t.slug ? "#ffffff" : ""
                  }}
                >
                  #{t.name} ({t.count || 0})
                </Link>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}
