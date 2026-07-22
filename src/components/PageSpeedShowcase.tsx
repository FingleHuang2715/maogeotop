"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

const pageSpeedImages = [
  { url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260720233013776.webp", title: "PageSpeed 90-100分实测 1" },
  { url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260720233016826.webp", title: "PageSpeed 90-100分实测 2" },
  { url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260720233021295.webp", title: "PageSpeed 90-100分实测 3" },
  { url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260720233025348.webp", title: "PageSpeed 90-100分实测 4" },
  { url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260720233030162.webp", title: "PageSpeed 90-100分实测 5" },
  { url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260720233036644.webp", title: "PageSpeed 90-100分实测 6" },
  { url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260720233040136.webp", title: "PageSpeed 90-100分实测 7" },
  { url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260720233045573.webp", title: "PageSpeed 90-100分实测 8" },
  { url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260720233051655.webp", title: "PageSpeed 90-100分实测 9" }
];

export default function PageSpeedShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const isTransitioningRef = useRef(false);
  const totalCount = pageSpeedImages.length;

  const handleNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setRotationY((prev) => prev - 90);
    setCurrentIndex((prev) => (prev + 1) % totalCount);
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 900);
  }, [totalCount]);

  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setRotationY((prev) => prev + 90);
    setCurrentIndex((prev) => (prev - 1 + totalCount) % totalCount);
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 900);
  }, [totalCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handleImageClick = (url: string) => {
    if (typeof window.openGscLightbox === "function") {
      window.openGscLightbox(url);
    }
  };

  const frontIdx = currentIndex;
  const rightIdx = (currentIndex + 1) % totalCount;
  const backIdx = (currentIndex + 2) % totalCount;
  const leftIdx = (currentIndex - 1 + totalCount) % totalCount;

  return (
    <section className="pagespeed-cosmic-section" id="pagespeed-showcase">
      <div className="pagespeed-container">
        
        {/* 头部标题区 */}
        <div className="pagespeed-header">
          <div className="pagespeed-badge">
            <span className="pagespeed-badge-dot" aria-hidden="true"></span>
            <span>Google PageSpeed Insights · 90-100分绿标卓越区间</span>
          </div>
          <h2 className="pagespeed-title">
            谷歌 Core Web Vitals 官方实测，<br />
            <span className="pagespeed-gradient-text">稳定保持 90~100 分极速绿标性能</span>
          </h2>
        </div>

        {/* 左右分栏主体：左侧精简 3D Box Carousel 魔方，右侧重要性说明 */}
        <div className="pagespeed-main-grid">
          
          {/* 左侧：3D 魔方旋转轮播 (480px 宽度精简版) */}
          <div className="pagespeed-left-col">
            <div className="pagespeed-box-wrapper">
              <button className="pagespeed-nav-btn pagespeed-prev-btn" onClick={handlePrev} aria-label="上一张">
                ‹
              </button>

              <div className="pagespeed-box-viewport">
                <div 
                  className="pagespeed-box-cube"
                  style={{ transform: `rotateY(${rotationY}deg)` }}
                >
                  <div className="pagespeed-cube-face pagespeed-face-front" onClick={() => handleImageClick(pageSpeedImages[frontIdx].url)}>
                    <img src={pageSpeedImages[frontIdx].url} alt={pageSpeedImages[frontIdx].title} draggable="false" />
                    <div className="pagespeed-face-overlay">
                      <span>点击查看 90-100分 官方凭证原图 🔍</span>
                    </div>
                  </div>

                  <div className="pagespeed-cube-face pagespeed-face-right" onClick={() => handleImageClick(pageSpeedImages[rightIdx].url)}>
                    <img src={pageSpeedImages[rightIdx].url} alt={pageSpeedImages[rightIdx].title} draggable="false" />
                    <div className="pagespeed-face-overlay">
                      <span>点击查看 90-100分 官方凭证原图 🔍</span>
                    </div>
                  </div>

                  <div className="pagespeed-cube-face pagespeed-face-back" onClick={() => handleImageClick(pageSpeedImages[backIdx].url)}>
                    <img src={pageSpeedImages[backIdx].url} alt={pageSpeedImages[backIdx].title} draggable="false" />
                    <div className="pagespeed-face-overlay">
                      <span>点击查看 90-100分 官方凭证原图 🔍</span>
                    </div>
                  </div>

                  <div className="pagespeed-cube-face pagespeed-face-left" onClick={() => handleImageClick(pageSpeedImages[leftIdx].url)}>
                    <img src={pageSpeedImages[leftIdx].url} alt={pageSpeedImages[leftIdx].title} draggable="false" />
                    <div className="pagespeed-face-overlay">
                      <span>点击查看 90-100分 官方凭证原图 🔍</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="pagespeed-nav-btn pagespeed-next-btn" onClick={handleNext} aria-label="下一张">
                ›
              </button>
            </div>

            <div className="pagespeed-dots">
              {pageSpeedImages.map((_, idx) => (
                <span 
                  key={idx} 
                  className={"pagespeed-dot " + (currentIndex === idx ? "active" : "")}
                  onClick={() => {
                    const diff = idx - currentIndex;
                    setRotationY((prev) => prev - diff * 90);
                    setCurrentIndex(idx);
                  }}
                />
              ))}
            </div>
          </div>

          {/* 右侧：解释 PageSpeed 性能分数对独立站的核心重要性 */}
          <div className="pagespeed-right-col">
            <h3 className="importance-title">为什么 PageSpeed 性能分数对出海独立站极其关键？</h3>
            
            <div className="importance-cards">
              <div className="importance-card">
                <div className="importance-icon-box">01</div>
                <div>
                  <h4>提升 Google SEO 关键词排名与蜘蛛收录</h4>
                  <p>谷歌官方已将 Core Web Vitals (LCP/FID/CLS) 列为核心排名信号。90+ 绿标网站能获得更高权重的算法倾斜与极速收录。</p>
                </div>
              </div>

              <div className="importance-card">
                <div className="importance-icon-box">02</div>
                <div>
                  <h4>大幅降低海外买家跳出率 (Bounce Rate)</h4>
                  <p>统计表明网页加载延迟超过 3 秒，53% 海外买家会直接关掉离开。90+ 分数的秒开响应能够最大化留住高意向客户。</p>
                </div>
              </div>

              <div className="importance-card">
                <div className="importance-icon-box">03</div>
                <div>
                  <h4>翻倍提升独立站询盘转化率 (Conversion Rate)</h4>
                  <p>极速顺畅的浏览交互建立起强大的企业专业信任感，让流量不再白白流失，高效转化为高价值询盘订单。</p>
                </div>
              </div>

              <div className="importance-card">
                <div className="importance-icon-box">04</div>
                <div>
                  <h4>降低 Google Ads 竞价广告获客成本 (CPC)</h4>
                  <p>落地页加载速度直接决定 Google Ads 质量得分 (Quality Score)。分数越高，广告竞价扣费越低、ROI 越高。</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 大 Core Web Vitals 90-100 绿标区间数据看板 */}
        <div className="pagespeed-metrics-grid">
          <div className="metric-score-card">
            <div className="score-ring-wrap">
              <span className="score-num">95+</span>
              <span className="score-unit">/100</span>
            </div>
            <div className="score-label">Performance 性能</div>
          </div>
          <div className="metric-score-card">
            <div className="score-ring-wrap">
              <span className="score-num">100</span>
              <span className="score-unit">/100</span>
            </div>
            <div className="score-label">Accessibility 无障碍</div>
          </div>
          <div className="metric-score-card">
            <div className="score-ring-wrap">
              <span className="score-num">100</span>
              <span className="score-unit">/100</span>
            </div>
            <div className="score-label">Best Practices 最佳做法</div>
          </div>
          <div className="metric-score-card">
            <div className="score-ring-wrap">
              <span className="score-num">100</span>
              <span className="score-unit">/100</span>
            </div>
            <div className="score-label">SEO 搜索引擎优化</div>
          </div>
        </div>

      </div>
    </section>
  );
}
