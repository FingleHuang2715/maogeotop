"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { WPPost } from "@/lib/wordpress";

export default function HomeBlogCarousel({ posts }: { posts: WPPost[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    if (posts.length <= 1) return;
    autoplayTimerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % posts.length);
    }, 5000);
  }, [posts.length]);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => { if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current); };
  }, [startAutoplay]);

  return (
    <div
      className="mg-home-blog-carousel-col"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="mg-home-blog-carousel-wrapper">
        {posts.map((post, idx) => (
          <article
            key={post.id || idx}
            className={`mg-home-blog-slide ${idx === activeSlide ? "active" : ""}`}
          >
            <Link href={`/blog/${post.slug}`} className="mg-home-blog-slide-thumb">
              <img
                src={post.featuredImage?.node?.sourceUrl
                  ? `/api/img-proxy?url=${encodeURIComponent(post.featuredImage.node.sourceUrl)}`
                  : "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp"}
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

        {posts.length > 1 && (
          <div className="mg-home-blog-dots">
            {posts.map((_, idx) => (
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
  );
}
