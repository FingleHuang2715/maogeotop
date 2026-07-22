"use client";
import { useEffect, useState } from "react";

export default function GscAchievements() {
  const [currentGscIndex, setCurrentGscIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = 5;

  // 计算幻灯片的相对 3D 状态类
  const getSlideClass = (index: number) => {
    const relativePos = (index - currentGscIndex + totalSlides) % totalSlides;
    if (relativePos === 0) return "active";
    if (relativePos === 1) return "next";
    if (relativePos === 2) return "far-next";
    if (relativePos === totalSlides - 1) return "prev";
    return "far-prev";
  };

  const handleMove = (direction: number) => {
    setCurrentGscIndex((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  const handleJump = (index: number) => {
    setCurrentGscIndex(index);
  };

  // 自动轮播 (5 秒，鼠标悬停时暂停)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleMove(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleImageClick = (src: string) => {
    if (typeof window !== "undefined" && typeof window.openGscLightbox === "function") {
      window.openGscLightbox(src);
    }
  };

  const slidesData = [
    { src: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260716233108417.webp", tag: "项目案例 A · 自然流量跃升" },
    { src: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260716233102244.webp", tag: "项目案例 B · 曝光展示量突围" },
    { src: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260716233058786.webp", tag: "项目案例 C · 关键词排名攀升" },
    { src: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260716233052169.webp", tag: "项目案例 D · AI检索引用暴增" },
    { src: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260716233046692.webp", tag: "项目案例 E · 全域流量双倍扩容" }
  ];

  return (
    <section className="geo-gsc-section" id="geo-gsc-results">
      <div className="geo-gsc-container">
        
        <div className="geo-gsc-header">
          <div className="geo-gsc-badge">
            <span className="geo-gsc-badge-dot"></span>
            实战数据 · GSC流量突破
          </div>
          <h2 className="geo-gsc-title">用真实数据，验证 <span className="gradient-text">SEO/GEO 增长奇迹</span></h2>
          <p className="geo-gsc-subtitle">我们用真实的 Google Search Console 流量曲线，证明高阶生成式引擎优化与技术 SEO 对询盘转化的双重推力。</p>
        </div>

        <div className="geo-gsc-grid">
          
          <div className="geo-gsc-left-metrics">
            <div className="geo-gsc-metric-card">
              <div className="geo-gsc-metric-num gradient-text">420%</div>
              <div className="geo-gsc-metric-info">
                <h4>曝光展示总量增长</h4>
                <p>通过精准长尾词蒸馏与 AI 语义布局，使网页在大模型及谷歌搜索的曝光频次短期内暴涨。</p>
              </div>
            </div>

            <div className="geo-gsc-metric-card">
              <div className="geo-gsc-metric-num gradient-text">280%</div>
              <div className="geo-gsc-metric-info">
                <h4>自然点击流量提升</h4>
                <p>优化页面 Title 与 Snippet（大模型参考源），极大提高自然点击率，引入海量精准流量。</p>
              </div>
            </div>

            <div className="geo-gsc-metric-card">
              <div className="geo-gsc-metric-num gradient-text">0-1S</div>
              <div className="geo-gsc-metric-info">
                <h4>平均首字节响应速度</h4>
                <p>全域技术级别 SEO 诊断，压缩脚本并延迟渲染，将全载时间缩短在 0-1 秒内的黄金阈值。</p>
              </div>
            </div>
            
            <div className="geo-gsc-cta-box">
              <a href="http://geo.maogeo.top" target="_blank" rel="noopener" className="gradient-btn geo-gsc-btn">立即分析我的网站流量 ➔</a>
            </div>
          </div>

          <div 
            className="geo-gsc-right-carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="geo-gsc-slider-viewport">
              {slidesData.map((slide, idx) => (
                <div key={idx} className={`geo-gsc-slide ${getSlideClass(idx)}`} data-index={idx}>
                  <div className="geo-gsc-img-frame">
                    <img 
                      src={slide.src} 
                      alt={slide.tag} 
                      onClick={() => handleImageClick(slide.src)}
                      style={{ cursor: "zoom-in" }}
                    />
                    <div className="geo-gsc-img-tag">{slide.tag}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="geo-gsc-controls">
              <button 
                className="geo-gsc-ctrl-btn prev" 
                onClick={() => handleMove(-1)} 
                aria-label="上一张"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <div className="geo-gsc-dots-indicator">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <span 
                    key={idx}
                    className={`geo-gsc-dot-indicator ${idx === currentGscIndex ? "active" : ""}`} 
                    onClick={() => handleJump(idx)}
                  ></span>
                ))}
              </div>

              <button 
                className="geo-gsc-ctrl-btn next" 
                onClick={() => handleMove(1)} 
                aria-label="下一张"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
