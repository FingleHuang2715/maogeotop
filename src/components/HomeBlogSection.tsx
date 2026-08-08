// 纯服务端组件：在服务端直接获取数据，首屏零等待无加载闪屏
import React from "react";
import Link from "next/link";
import { getPaginatedPosts, WPPost } from "@/lib/wordpress";
import HomeBlogCarousel from "@/components/HomeBlogCarousel";
import "@/styles/HomeBlogSection.css";

export default async function HomeBlogSection() {
  let posts: WPPost[] = [];
  try {
    const data = await getPaginatedPosts({ first: 30 });
    posts = data.posts || [];
  } catch (error) {
    console.error("Failed to fetch home blog section posts:", error);
  }

  if (!posts || posts.length === 0) return null;

  // 置顶或前 5 篇文章作为轮播 Slide
  const stickyPosts = posts.filter(p => p.isSticky);
  const carouselPosts = stickyPosts.length >= 3
    ? stickyPosts.slice(0, 5)
    : posts.slice(0, 5);

  // 右侧极简新闻列表：过滤轮播文章后取 20 篇，分两列各 10 篇
  const listPosts = posts.filter(p => !carouselPosts.some(c => c.id === p.id)).slice(0, 20);
  const leftColPosts = listPosts.slice(0, 10);
  const rightColPosts = listPosts.slice(10, 20);

  return (
    <section className="mg-home-blog-section">
      <div className="mg-home-blog-container">

        {/* 区域 Header */}
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

        {/* 左侧 5 连排大图轮播（Client 组件） + 右侧 2 列各 10 篇新闻列表（纯服务端渲染） */}
        <div className="mg-home-blog-grid">

          {/* 左侧：Client 组件处理轮播交互 */}
          <HomeBlogCarousel posts={carouselPosts} />

          {/* 右侧：纯服务端渲染，零 JS，两列各 10 篇 */}
          <div className="mg-home-blog-list-col">
            <div className="mg-home-blog-two-cols">

              <div className="mg-home-blog-news-column">
                {leftColPosts.map((post, idx) => (
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

              <div className="mg-home-blog-news-column">
                {rightColPosts.map((post, idx) => (
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

      </div>
    </section>
  );
}
