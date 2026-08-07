"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPaginatedPosts, WPPost } from "@/lib/wordpress";
import "@/styles/HomeBlogSection.css";

export default function HomeBlogSection() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchPosts() {
      try {
        const data = await getPaginatedPosts({ first: 10 });
        if (isMounted) {
          setPosts(data.posts || []);
        }
      } catch (error) {
        console.error("Failed to fetch home blog section posts:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchPosts();
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <section className="mg-home-blog-section">
        <div className="mg-home-blog-container">
          <div className="mg-home-blog-header">
            <div className="mg-home-blog-title-group">
              <span className="mg-home-blog-kicker">WORDPRESS TUTORIALS & GUIDES</span>
              <h2 className="mg-home-blog-main-title">WordPress 教程博客专栏</h2>
            </div>
          </div>
          <div style={{ padding: "40px 0", textAlign: "center", color: "#86868b", fontSize: "14px" }}>
            正在加载最新 10 篇教程专栏...
          </div>
        </div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  const featuredPost = posts[0];
  const listPosts = posts.slice(1, 10);

  return (
    <section className="mg-home-blog-section">
      <div className="mg-home-blog-container">
        
        {/* 🌟 1. 区域 Header */}
        <div className="mg-home-blog-header">
          <div className="mg-home-blog-title-group">
            <span className="mg-home-blog-kicker">WORDPRESS TUTORIALS & GUIDES</span>
            <h2 className="mg-home-blog-main-title">WordPress 教程博客专栏</h2>
          </div>
          <Link href="/blog" className="mg-home-blog-more-link">
            <span>浏览全部 {posts.length}+ 篇教程</span>
            <span className="mg-home-blog-arrow">➔</span>
          </Link>
        </div>

        {/* 🌟 2. 类似权威新闻媒体的两列 Grid 布局 */}
        <div className="mg-home-blog-grid">
          
          {/* 左侧：第 1 篇文章 (大图聚焦卡片) */}
          <div className="mg-home-blog-featured-col">
            <article className="mg-home-blog-featured-card">
              <Link href={`/blog/${featuredPost.slug}`} className="mg-home-blog-featured-thumb">
                <img 
                  src={featuredPost.featuredImage?.node?.sourceUrl ? `/api/img-proxy?url=${encodeURIComponent(featuredPost.featuredImage.node.sourceUrl)}` : "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp"} 
                  alt={featuredPost.title} 
                  loading="lazy"
                />
                <span className="mg-home-blog-tag">最新教程</span>
              </Link>

              <div className="mg-home-blog-featured-content">
                <div className="mg-home-blog-meta">
                  <span className="mg-home-blog-author">猫哥</span>
                  <span>•</span>
                  <time dateTime={featuredPost.date}>
                    {new Date(featuredPost.date).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" })}
                  </time>
                </div>
                <h3 className="mg-home-blog-featured-title">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h3>
                <div 
                  className="mg-home-blog-featured-excerpt"
                  dangerouslySetInnerHTML={{ __html: featuredPost.excerpt }}
                />
                <Link href={`/blog/${featuredPost.slug}`} className="mg-home-blog-read-btn">
                  <span>阅读全文</span>
                  <span className="arrow">➔</span>
                </Link>
              </div>
            </article>
          </div>

          {/* 右侧：第 2~10 篇文章 (新闻风极简列表) */}
          <div className="mg-home-blog-list-col">
            <div className="mg-home-blog-news-list">
              {listPosts.map((post, idx) => (
                <article key={post.id || idx} className="mg-home-blog-news-item">
                  <span className="mg-home-blog-news-date">
                    {new Date(post.date).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" })}
                  </span>
                  <h4 className="mg-home-blog-news-title">
                    <Link href={`/blog/${post.slug}`} title={post.title}>
                      {post.title}
                    </Link>
                  </h4>
                </article>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
