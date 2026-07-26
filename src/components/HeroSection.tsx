"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { copyWeChatAndShowModal } from "@/components/WeChatModal";

interface SlideData {
  title: string;
  subTitle: string;
  desc: string;
  btnText: string;
  btnLink: string;
}

const slides: SlideData[] = [
  {
    title: "提供专业一站式",
    subTitle: "官网建设与品牌出海营销解决方案",
    desc: "从智能官网定制到生成式引擎(GEO)优化，确保品牌词与核心产品在 AGI 检索环境中被大模型高权重引用。",
    btnText: "免费 GEO 试用 ➔",
    btnLink: "https://geo.maogeo.top/"
  },
  {
    title: "AI 时代优先收录",
    subTitle: "针对 ChatGPT / DeepSeek / Gemini 优化",
    desc: "打破传统 SEO 瓶颈，通过结构化数据与语义锚点重构，打造 24 小时出海金牌推销员。",
    btnText: "了解 GEO 建站 ➔",
    btnLink: "/geo-tools"
  },
  {
    title: "100% 独立源码全交付",
    subTitle: "先进前后端分离，极速与高安全运行",
    desc: "拒绝模板与捆绑陷阱，支持自由迁移服务器，采用最先进的前后端分离技术，稳定运行10年不出故障。",
    btnText: "查看客户案例 ➔",
    btnLink: "#geo-site-cases"
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion) startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  const handleTabMouseEnter = (index: number) => {
    stopAutoplay();
    setActiveSlide(index);
  };

  const handleTabMouseLeave = () => {
    startAutoplay();
  };

  // 3D 魔方逻辑 (与 GEO 工具页面完全一致)
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const wrapper = document.querySelector('.home-hero .hero-cube-wrapper');
    const cube = document.querySelector('.home-hero .hero-cube');

    if (wrapper && cube) {
      const parentContainer = wrapper.parentElement;

      gsap.from(wrapper, {
        scale: 0,
        rotateX: 360,
        rotateY: 360,
        duration: 1.8,
        ease: 'power4.out'
      });

      const cubeTween = gsap.to(cube, {
        rotateY: 360,
        rotateX: -360,
        duration: 25,
        repeat: -1,
        ease: 'none'
      });

      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (!isMobile && parentContainer) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = parentContainer.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          const tiltX = (y / (rect.height / 2)) * -20;
          const tiltY = (x / (rect.width / 2)) * 20;

          gsap.to(wrapper, {
            rotateX: tiltX,
            rotateY: tiltY,
            duration: 0.8,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(wrapper, {
            rotateX: 0,
            rotateY: 0,
            duration: 1.5,
            ease: 'power3.out',
            overwrite: 'auto'
          });
        };

        parentContainer.addEventListener('mousemove', handleMouseMove);
        parentContainer.addEventListener('mouseleave', handleMouseLeave);

        const handleMouseEnterWrapper = () => {
          gsap.to(cubeTween, { timeScale: 0.15, duration: 1.2 });
        };
        const handleMouseLeaveWrapper = () => {
          gsap.to(cubeTween, { timeScale: 1, duration: 1.8 });
        };

        wrapper.addEventListener('mouseenter', handleMouseEnterWrapper);
        wrapper.addEventListener('mouseleave', handleMouseLeaveWrapper);

        return () => {
          parentContainer.removeEventListener('mousemove', handleMouseMove);
          parentContainer.removeEventListener('mouseleave', handleMouseLeave);
          wrapper.removeEventListener('mouseenter', handleMouseEnterWrapper);
          wrapper.removeEventListener('mouseleave', handleMouseLeaveWrapper);
          cubeTween.kill();
        };
      }
    }
  }, []);

  return (
    <section 
      className="geo-functions-section hero-cosmic home-hero"
      aria-label="猫哥GEO独立站首屏" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721010110868.webp')", 
        backgroundSize: "cover", 
        backgroundPosition: "center center",
        paddingTop: "2.5rem",
        paddingBottom: "0"
      }}
    >
      <div className="geo-container geo-functions-grid">
        {/* 左侧：GEO 工具页面风格滑块与文案 */}
        <div className="geo-functions-left">
          <div className="geo-badge">
            <span className="geo-badge-dot"></span>
            2026 NEXT-GEN · 下一代建站与GEO优化
          </div>
          
          <div className="geo-slides-container">
            {slides.map((slide, idx) => (
              <div 
                key={idx} 
                className={"geo-slide-item " + (activeSlide === idx ? "active" : "")}
              >
                <h1 className="geo-section-title" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', margin: '0 0 0.8rem 0', color: '#000000' }}>
                  {slide.title}<br />
                  <span className="gradient-text" style={{ background: '#0A4ECB', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    {slide.subTitle}
                  </span>
                </h1>
                <p className="geo-section-subtitle home-hero-subtitle" style={{ fontSize: '0.95rem', margin: '0 0 1.2rem 0', lineHeight: 1.6, color: '#17243a' }}>
                  {slide.desc}
                </p>
                
                <ul className="srv-hero-meta-list" style={{ marginBottom: '1.4rem' }}>
                  <li className="srv-hero-meta-item" style={{ color: '#0A4ECB', background: 'rgba(10, 78, 203, 0.05)', borderColor: 'rgba(10, 78, 203, 0.12)' }}>✓ 8年+ 谷歌SEO与出海经验</li>
                  <li className="srv-hero-meta-item" style={{ color: '#0A4ECB', background: 'rgba(10, 78, 203, 0.05)', borderColor: 'rgba(10, 78, 203, 0.12)' }}>✓ 1500+ 定制建站交付案例</li>
                  <li className="srv-hero-meta-item" style={{ color: '#0A4ECB', background: 'rgba(10, 78, 203, 0.05)', borderColor: 'rgba(10, 78, 203, 0.12)' }}>✓ 100% 源码交付与生成式AI收录</li>
                </ul>

                <div className="geo-slider-btn-wrap home-hero-actions">
                  <a href={slide.btnLink} target={slide.btnLink.startsWith("http") ? "_blank" : undefined} rel={slide.btnLink.startsWith("http") ? "noopener noreferrer" : undefined} className="geo-slider-btn">
                    <span className="geo-slider-btn-text">{slide.btnText}</span>
                  </a>
                  <button 
                    onClick={copyWeChatAndShowModal}
                    type="button"
                    className="geo-slider-btn geo-slider-btn-secondary"
                  >
                    <span className="geo-slider-btn-text">微信咨询：maogeotop</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：GEO 工具页面风格 3D 炫彩魔方 */}
        <div className="geo-functions-right">
          <div className="hero-cube-wrapper">
            <div className="hero-cube">
              <div className="cube-face face-front">
                <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235653789.webp" alt="AI数据中心查询报表" width={600} height={400} sizes="(max-width: 768px) 220px, 400px" priority fetchPriority="high" />
              </div>
              <div className="cube-face face-back">
                <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235509827.webp" alt="文章生成与发布" width={600} height={400} sizes="(max-width: 768px) 220px, 400px" loading="lazy" decoding="async" />
              </div>
              <div className="cube-face face-left">
                <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235532486.webp" alt="个人自媒体账号授权矩阵发布" width={600} height={400} sizes="(max-width: 768px) 220px, 400px" loading="lazy" decoding="async" />
              </div>
              <div className="cube-face face-right">
                <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235522326.webp" alt="批量爆款文章复刻" width={600} height={400} sizes="(max-width: 768px) 220px, 400px" loading="lazy" decoding="async" />
              </div>
              <div className="cube-face face-top">
                <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235413409.webp" alt="知名网站媒体投稿" width={600} height={400} sizes="(max-width: 768px) 220px, 400px" loading="lazy" decoding="async" />
              </div>
              <div className="cube-face face-bottom">
                <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235559895.webp" alt="B2B行业网站矩阵发布" width={600} height={400} sizes="(max-width: 768px) 220px, 400px" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部控制 Tab */}
      <div className="geo-slider-nav-wrap">
        <div className="geo-slider-nav-tabs" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {slides.map((slide, idx) => (
            <button
              type="button"
              key={idx}
              className={"geo-slider-nav-tab " + (activeSlide === idx ? "active" : "")}
              onClick={() => setActiveSlide(idx)}
              onMouseEnter={() => handleTabMouseEnter(idx)}
              onMouseLeave={handleTabMouseLeave}
              aria-label={`显示：${slide.title}`}
              aria-pressed={activeSlide === idx}
            >
              <span className="geo-nav-tab-title" style={{ color: activeSlide === idx ? '#0A4ECB' : '#000000', fontSize: '15px', fontWeight: '800' }}>{slide.title}</span>
              <span className="geo-nav-tab-desc" style={{ color: '#000000', fontSize: '13px', fontWeight: '600' }}>{slide.subTitle}</span>
              <span className="geo-nav-tab-progress" aria-hidden="true">
                <span className="geo-nav-tab-progress-inner" style={{ background: '#0A4ECB' }}></span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 保留的底部高级液态走马灯（无 highlight 激活状态，全员统一） */}
      <div className="hero-marquee-container" style={{ marginTop: '0' }}>
        <div className="hero-marquee-track">
          <div className="hero-marquee-list">
            <Link href="/waimaojianzhan" className="hero-marquee-item">品牌型网站</Link>
            <Link href="/waimaojianzhan" className="hero-marquee-item">出海独立站</Link>
            <Link href="/waimaojianzhan" className="hero-marquee-item">外贸SOHO建站</Link>
            <Link href="/geo-seo-youhua" className="hero-marquee-item">GEO/SEO优化总纲</Link>
            <Link href="/geo-tools" className="hero-marquee-item">GEO优化工具</Link>
            <Link href="/geo-tools" className="hero-marquee-item">生成式搜索引擎优化</Link>
            <Link href="/blog" className="hero-marquee-item">技术教程</Link>
            <Link href="/audit-tool" className="hero-marquee-item">建站防坑检测</Link>
            <Link href="/server-recommendation" className="hero-marquee-item">服务器推荐</Link>
          </div>
          <div className="hero-marquee-list" aria-hidden="true">
            <span className="hero-marquee-item">品牌型网站</span>
            <span className="hero-marquee-item">出海独立站</span>
            <span className="hero-marquee-item">外贸SOHO建站</span>
            <span className="hero-marquee-item">GEO/SEO优化总纲</span>
            <span className="hero-marquee-item">GEO优化工具</span>
            <span className="hero-marquee-item">生成式搜索引擎优化</span>
            <span className="hero-marquee-item">技术教程</span>
            <span className="hero-marquee-item">建站防坑检测</span>
            <span className="hero-marquee-item">服务器推荐</span>
          </div>
        </div>
      </div>
    </section>
  );
}

