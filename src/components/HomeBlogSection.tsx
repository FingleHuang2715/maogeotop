"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { getPaginatedPosts, WPPost } from "@/lib/wordpress";
import "@/styles/HomeBlogSection.css";

export default function HomeBlogSection() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchPosts() {
      try {
        const data = await getPaginatedPosts({ first: 15 });
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

  // 置顶或前 5 篇文章作为轮播 Slide
  const stickyPosts = posts.filter(p => p.isSticky);
  const carouselPosts = stickyPosts.length >= 3 
    ? stickyPosts.slice(0, 5) 
    : posts.slice(0, 5);

  // 右侧极简新闻列表文章（避开轮播，最多取 8 篇）
  const listPosts = posts.filter(p => !carouselPosts.some(c => c.id === p.id)).slice(0, 8);

  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    if (carouselPosts.length <= 1) return;
    autoplayTimerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselPosts.length);
    }, 5000);
  }, [carouselPosts.length]);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [startAutoplay]);

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
          <div style={{ padding: "30px 0", textAlign: "center", color: "#86868b", fontSize: "14px" }}>
            正在加载教程专栏...
          </div>
        </div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return null;
  }

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
            <span>查看全部文章</span>
            <span className="mg-home-blog-arrow">➔</span>
          </Link>
        </div>

        {/* 🌟 2. 左侧 5 连排轮播大卡片 + 右侧双列 8 连排新闻网格 */}
        <div className="mg-home-blog-grid">
          
          {/* 左侧：精选 / 置顶 5 篇文章 Swiper 轮播 */}
          <div 
            className="mg-home-blog-carousel-col"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
          >
            <div className="mg-home-blog-carousel-wrapper">
              {carouselPosts.map((post, idx) => (
                <article 
                  key={post.id || idx} 
                  className={`mg-home-blog-slide ${idx === activeSlide ? "active" : ""}`}
                >
                  <Link href={`/blog/${post.slug}`} className="mg-home-blog-slide-thumb">
                    <img 
                      src={post.featuredImage?.node?.sourceUrl ? `/api/img-proxy?url=${encodeURIComponent(post.featuredImage.node.sourceUrl)}` : "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp"} 
                      alt={post.title} 
                      loading="lazy"
                    />
                    <span className="mg-home-blog-tag">精选教程</span>
                  </Link>

                  <div className="mg-home-blog-slide-content">
                    <div className="mg-home-blog-meta">
                      <span className="mg-home-blog-author">猫哥</span>
                      <span>•</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" })}
                      </time>
                    </div>
                    <h3 className="mg-home-blog-slide-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                  </div>
                </article>
              ))}

              {/* 轮播指示点和控制 */}
              {carouselPosts.length > 1 && (
                <div className="mg-home-blog-dots">
                  {carouselPosts.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`mg-home-blog-dot ${idx === activeSlide ? "active" : ""}`}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`切换到第 ${idx + 1} 篇教程`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 右侧：新闻风双列 (2 Columns Grid) 8 连排列表 */}
          <div className="mg-home-blog-list-col">
            <div className="mg-home-blog-news-grid">
              {listPosts.map((post, idx) => (
                <article key={post.id || idx} className="mg-home-blog-news-card">
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
