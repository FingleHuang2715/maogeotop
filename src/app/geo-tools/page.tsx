"use client";
import { copyWeChatAndShowModal } from "@/components/WeChatModal";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/GeoTools.css";

interface SlideData {
  title: string;
  subTitle: string;
  desc: string;
  btnText: string;
  btnLink: string;
}

const slides: SlideData[] = [
  {
    title: "AI 可见度诊断",
    subTitle: "一键分析品牌在大模型中的声量",
    desc: "精准诊断品牌在 DeepSeek、豆包、通义千问、腾讯元宝、文心一言等国内主流大模型中的检索可见度与收录份额，用数据化报表精准呈现品牌数字踪迹。",
    btnText: "立即开启诊断",
    btnLink: "https://geo.maogeo.top/"
  },
  {
    title: "AI 智能模板中心",
    subTitle: "前沿 AI 灵感引擎，创作触手可及",
    desc: "内置覆盖外贸独立站、出海推广、营销创意文案、行业分析等多场景的生成模板，一键切换多种文风，让表达更精准有力。",
    btnText: "探索模板中心",
    btnLink: "https://geo.maogeo.top/"
  },
  {
    title: "AI 内容智创系统",
    subTitle: "大模型深度优化，精准引流获客",
    desc: "基于核心关键词与企业专属知识库，由 AI 自动扩展 LSI 词与长尾词，生成符合大模型引用标准的高自然度推广优化内容。",
    btnText: "体验智能智创",
    btnLink: "https://geo.maogeo.top/"
  },
  {
    title: "官媒矩阵一键投稿",
    subTitle: "全渠道直通发文，构筑内容壁垒",
    desc: "一键批量投稿分发至主流新闻媒体源、B2B 交易平台以及权威行业自媒体，打破单一性，极大缩短沙盒期并加速收录。",
    btnText: "立即选购套餐",
    btnLink: "https://geo.maogeo.top/"
  }
];

const models = [
  { name: "DeepSeek", shortName: "DeepSeek", desc: "深度求索 · 极佳性价比与长文本推理模型", href: "https://chat.deepseek.com/", icon: "https://geo.maogeo.top/assets/img/deepseek.png" },
  { name: "豆包", shortName: "豆包", desc: "字节跳动 · 抖音同源，支持高情商对话与知识检索", href: "https://www.doubao.com/", icon: "https://geo.maogeo.top/assets/img/doubao.png" },
  { name: "腾讯元宝", shortName: "元宝", desc: "腾讯AI · 微信生态、文章与全网知识搜索", href: "https://yuanbao.tencent.com/", icon: "https://geo.maogeo.top/assets/img/yuanbao.png" },
  { name: "通义千问", shortName: "通义千问", desc: "阿里云 · 强逻辑推理能力，千行百业的基座支撑", href: "https://www.tongyi.com/", icon: "https://geo.maogeo.top/assets/img/qianwen.png" },
  { name: "文心一言", shortName: "文心一言", desc: "百度 · 强大的中文语义理解与百度搜索引用整合", href: "https://yiyan.baidu.com/", icon: "https://geo.maogeo.top/assets/img/wenxin.png" },
  { name: "Kimi", shortName: "Kimi", desc: "月之暗面 · 百万字长文本极速分析与专业搜索引用", href: "https://www.kimi.com/", icon: "https://geo.maogeo.top/assets/img/kimi.png" },
  { name: "智谱清言", shortName: "智谱清言", desc: "智谱AI · 卓越的学术研究与长文本推理大模型", href: "https://chatglm.cn/", icon: "https://geo.maogeo.top/assets/img/zhipu.png" },
  { name: "纳米AI", shortName: "纳米AI", desc: "360 · 纳米搜索引擎，智能多维检索与安全合规", href: "https://www.n.cn/", icon: "https://geo.maogeo.top/assets/img/nami.png" },
] as const;

export default function GeoToolsPage() {
  // GSAP SVG Mask Zoom & Pin refs (SKILL.md)
  const maskPinRef = useRef<HTMLDivElement>(null);
  const svgMaskRef = useRef<HTMLDivElement>(null);
  const cockpitContentRef = useRef<HTMLDivElement>(null);
  const compassNodesRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeModel, setActiveModel] = useState<{ name: string; desc: string }>({
    name: models[0].name,
    desc: models[0].desc,
  });

  // Use one compositor-only rotation instead of forcing a React render on every frame.
  useEffect(() => {
    const nodeTrack = compassNodesRef.current;
    if (!nodeTrack || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.to(nodeTrack, {
      "--marquee-rotation": "180deg",
      duration: 90,
      repeat: -1,
      ease: "none",
    });

    return () => {
      tween.kill();
    };
  }, []);
  
  // 🌟 SKILL.md SVG Cutout Mask Zoom Animation ("猫哥GEO" 镂空放大展开)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (maskPinRef.current && svgMaskRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: maskPinRef.current,
            start: "top top",
            end: "+=160%",
            pin: true,
            scrub: 0.6,
          },
        });

        tl.to(svgMaskRef.current, { scale: 85, ease: "power2.in", duration: 1.5 })
          .to(svgMaskRef.current, { opacity: 0, pointerEvents: "none", duration: 0.4 }, "-=0.4")
          .fromTo(cockpitContentRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.8");
      }
    }, maskPinRef);

    return () => ctx.revert();
  }, []);

  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play slider logic
  useEffect(() => {
    startAutoplay();
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

  
  // Place each model once on the upper semicircle; the parent track rotates on the compositor.
  const getNodeStyle = (index: number) => {
    const angle = 180 + index * (180 / models.length);
    return {
      "--node-angle": `${angle}deg`,
    } as React.CSSProperties;
  };

  const handleTabMouseLeave = () => {
    startAutoplay();
  };

  // 3D cube logic
  useEffect(() => {
    const wrapper = document.querySelector('.hero-cube-wrapper');
    const cube = document.querySelector('.hero-cube');

    if (wrapper && cube) {
      const parentContainer = wrapper.parentElement;

      // 1. 3D 魔方入场动效
      gsap.from(wrapper, {
        scale: 0,
        rotateX: 360,
        rotateY: 360,
        duration: 1.8,
        ease: 'power4.out'
      });

      // 2. 3D 魔方持续自动旋转
      const cubeTween = gsap.to(cube, {
        rotateY: 360,
        rotateX: -360,
        duration: 25,
        repeat: -1,
        ease: 'none'
      });

      // 3. 鼠标交互
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

        // 4. 鼠标悬停减慢旋转
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
    <main className="geo-tools-root">
      {/* 🌟 Tencent Cloud style Hero Slider */}
      <section className="geo-functions-section" id="geo-features" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.82)), url('https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721010110868.webp')", backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="geo-container geo-functions-grid">
          
          <div className="geo-functions-left">
            <div className="geo-badge">
              <span className="geo-badge-dot"></span>
              智能驱动，GEO 核心四大功能
            </div>
            
            {/* Slides container */}
            <div className="geo-slides-container">
              {slides.map((slide, idx) => (
                <div 
                  key={idx} 
                  className={"geo-slide-item " + (activeSlide === idx ? "active" : "")}
                >
                  <h2 className="geo-section-title">
                    {slide.title}
                    <p className="gradient-text">{slide.subTitle}</p>
                  </h2>
                  <p className="geo-section-subtitle">
                    {slide.desc}
                  </p>
                  <div className="geo-slider-btn-wrap">
                    <a href={slide.btnLink} className="geo-slider-btn">
                      <span className="geo-slider-btn-text">{slide.btnText}</span>
                      <span className="geo-slider-btn-icon">➔</span>
                    </a>
                    <a 
                      href="https://mcnkw44q57n7.feishu.cn/docx/TmEgdoYc9oONpCx1SGOch33Mneh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="geo-slider-btn geo-slider-btn-secondary"
                    >
                      <span className="geo-slider-btn-text">视频演示</span>
                      <span className="geo-slider-btn-icon">▶</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="geo-functions-right">
            <div className="hero-cube-wrapper">
              <div className="hero-cube">
                <div className="cube-face face-front">
                  <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235653789.webp" alt="AI数据中心查询报表" width={1200} height={800} sizes="220px" priority />
                </div>
                <div className="cube-face face-back">
                  <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235509827.webp" alt="文章生成与发布" width={1200} height={800} sizes="220px" />
                </div>
                <div className="cube-face face-left">
                  <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235532486.webp" alt="个人自媒体账号授权矩阵发布" width={1200} height={800} sizes="220px" />
                </div>
                <div className="cube-face face-right">
                  <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235522326.webp" alt="批量爆款文章复刻" width={1200} height={800} sizes="220px" />
                </div>
                <div className="cube-face face-top">
                  <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235413409.webp" alt="知名网站媒体投稿" width={1200} height={800} sizes="220px" />
                </div>
                <div className="cube-face face-bottom">
                  <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235559895.webp" alt="B2B行业网站矩阵发布" width={1200} height={800} sizes="220px" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 🌟 Slider Controller Tabs at the bottom */}
        <div className="geo-slider-nav-wrap">
          <div className="geo-slider-nav-tabs">
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
                <span className="geo-nav-tab-title">{slide.title}</span>
                <span className="geo-nav-tab-desc">{slide.subTitle.split("，")[0]}</span>
                <span className="geo-nav-tab-progress" aria-hidden="true">
                  <span className="geo-nav-tab-progress-inner"></span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 新增：系统核心优势 (Tencent Cloud ModelHub Style) */}
      <section className="geo-advantages-section">
        <div className="geo-container-wide">
          <div className="geo-advantages-inner">
            
            {/* 左侧大特性展示卡片 (Featured) */}
            <div className="geo-advantages-featured">
              <div className="geo-featured-inner">
                <div className="geo-featured-content">
                  <div className="geo-featured-tag">全场景赋能</div>
                  <h3 className="geo-featured-title">
                    系统六大核心优势
                    <p>企业拥抱 <span className="gradient-text">GEO 优化首选</span></p>
                  </h3>
                  <p className="geo-featured-desc">
                    通过行业领先的智能化算法和自动化矩阵，大幅降低获客成本，全面构筑企业在生成式检索时代的领先优势。
                  </p>
                </div>
                
                {/* 留出主图片位置给用户 */}
                <div className="geo-featured-media">
                  <Image
                    src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235653789.webp"
                    alt="系统核心优势数据报表"
                    className="geo-featured-img"
                    width={1200}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 38vw"
                  />
                </div>
                
                <div className="geo-featured-actions">
                  <a className="geo-featured-btn" href="https://geo.maogeo.top/" target="_blank" rel="noopener noreferrer">
                    <span className="geo-featured-btn-text">立即体验</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 右侧 6 个优势项列表 (Grid List) */}
            <div className="geo-advantages-list">
              
              {/* 优势 1 */}
              <div className="geo-advantage-item">
                <div className="geo-advantage-item-content">
                  <div className="geo-advantage-icon">
                    {/* 留出小图标位置给用户 */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--geo-neon-indigo)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                  </div>
                  <div className="geo-advantage-info">
                    <div className="geo-advantage-header">
                      <span className="geo-advantage-name">AI 蒸馏</span>
                      <div className="geo-advantage-tag">智能拓展</div>
                    </div>
                    <p className="geo-advantage-desc">基于企业核心关键词，通过大模型算法深度匹配，自动蒸馏拓展出相关高价值联想与高频问答矩阵。</p>
                  </div>
                </div>
              </div>

              {/* 优势 2 */}
              <div className="geo-advantage-item">
                <div className="geo-advantage-item-content">
                  <div className="geo-advantage-icon">
                    {/* 留出小图标位置给用户 */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--geo-neon-indigo)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                  </div>
                  <div className="geo-advantage-info">
                    <div className="geo-advantage-header">
                      <span className="geo-advantage-name">排名提升</span>
                      <div className="geo-advantage-tag">精准卡位</div>
                    </div>
                    <p className="geo-advantage-desc">配合定制的优化推荐算法，快速提升本地化搜索与智能大模型检索的收录排名，抢占核心入口。</p>
                  </div>
                </div>
              </div>

              {/* 优势 3 */}
              <div className="geo-advantage-item">
                <div className="geo-advantage-item-content">
                  <div className="geo-advantage-icon">
                    {/* 留出小图标位置给用户 */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--geo-neon-indigo)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                  </div>
                  <div className="geo-advantage-info">
                    <div className="geo-advantage-header">
                      <span className="geo-advantage-name">稳定高效</span>
                      <div className="geo-advantage-tag">自动化降本</div>
                    </div>
                    <p className="geo-advantage-desc">系统高效稳定运行，提供自动化的文章生成、TDK 对齐与同步矩阵发布，成倍缩减内容发布周期。</p>
                  </div>
                </div>
              </div>

              {/* 优势 4 */}
              <div className="geo-advantage-item">
                <div className="geo-advantage-item-content">
                  <div className="geo-advantage-icon">
                    {/* 留出小图标位置给用户 */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--geo-neon-indigo)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="0"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><path d="M6 10l3-3 3 3 5-5"></path></svg>
                  </div>
                  <div className="geo-advantage-info">
                    <div className="geo-advantage-header">
                      <span className="geo-advantage-name">数据监控</span>
                      <div className="geo-advantage-tag">实时分析</div>
                    </div>
                    <p className="geo-advantage-desc">提供实时的数据观测、分析报表与检索可见度可视化大盘，精准捕捉每次搜索曝光的变化痕迹。</p>
                  </div>
                </div>
              </div>

              {/* 优势 5 */}
              <div className="geo-advantage-item">
                <div className="geo-advantage-item-content">
                  <div className="geo-advantage-icon">
                    {/* 留出小图标位置给用户 */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--geo-neon-indigo)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                  </div>
                  <div className="geo-advantage-info">
                    <div className="geo-advantage-header">
                      <span className="geo-advantage-name">流量增长</span>
                      <div className="geo-advantage-tag">高转化转化</div>
                    </div>
                    <p className="geo-advantage-desc">依靠大模型推荐逻辑做针对性语义优化，引入高转化自然意向流量，强效拉升询盘和获客速率。</p>
                  </div>
                </div>
              </div>

              {/* 优势 6 */}
              <div className="geo-advantage-item">
                <div className="geo-advantage-item-content">
                  <div className="geo-advantage-icon">
                    {/* 留出小图标位置给用户 */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--geo-neon-indigo)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                  </div>
                  <div className="geo-advantage-info">
                    <div className="geo-advantage-header">
                      <span className="geo-advantage-name">持续迭代</span>
                      <div className="geo-advantage-tag">算法跟进</div>
                    </div>
                    <p className="geo-advantage-desc">资深算法团队持续对齐各大主流模型的知识库更新与最新抓取逻辑，确保策略的长效稳定与领先。</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

                                                                  {/* 🌟 重构：主流AI模型优化与收录 (带 SKILL.md SVG 镂空展开“猫哥GEO”动画) */}
      <section className="geo-compass-section" ref={maskPinRef}>
        
        {/* SVG Cutout Mask Overlay (Skill.md SVG 镂空放大展开特效，文字: 猫哥GEO) */}
        <div ref={svgMaskRef} className="geo-svg-mask-overlay">
          <svg className="geo-svg-mask-element" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="cutout-mask-maogeo">
                <rect width="1000" height="600" fill="white" />
                <text 
                  x="500" 
                  y="340" 
                  textAnchor="middle" 
                  fill="black" 
                  fontSize="95" 
                  fontWeight="900" 
                  fontFamily="'PingFang SC', 'Microsoft YaHei', sans-serif"
                  letterSpacing="4"
                >
                  猫哥GEO
                </text>
              </mask>
            </defs>
            <rect width="1000" height="600" fill="#ffffff" mask="url(#cutout-mask-maogeo)" />
          </svg>
        </div>

        <div className="geo-container-wide" ref={cockpitContentRef}>
          
          {/* 飞船驾驶舱第一视角 HUD 容器 (移除 hover 暂停状态) */}
          <div className="geo-compass-wrapper">
            
            {/* 左右两侧飞船驾驶舱边缘立柱 HUD 面板 */}
            <div className="geo-cockpit-pillar left">
              <div className="geo-pillar-line"></div>
              <div className="geo-pillar-data">SYS.LOC: ONLINE</div>
            </div>
            <div className="geo-cockpit-pillar right">
              <div className="geo-pillar-line"></div>
              <div className="geo-pillar-data">GEO.OPTIMIZE: 99.4%</div>
            </div>

            {/* 罗盘雷达大转盘 (1400px，仅露出上半圈) */}
            <div className="geo-compass-dial-container">
              
              {/* 1. 自主无限旋转的方向盘 */}
              <div className="geo-cockpit-steering-wheel">
                <div className="geo-wheel-ring-outer"></div>
                <div className="geo-wheel-ring-dashed"></div>
                <div className="geo-wheel-ring-inner"></div>
                <div className="geo-wheel-ticks"></div>
                <div className="geo-wheel-radar-sweep"></div>
              </div>

              {/* 2. 静态自研跑马灯节点容器 */}
              <div className="geo-compass-nodes" ref={compassNodesRef}>
                {models.map((model, index) => (
                  <a
                    key={model.name}
                    href={model.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`geo-compass-node ${activeModel.name === model.name ? "active" : ""}`}
                    style={getNodeStyle(index)}
                    onMouseEnter={() => setActiveModel({ name: model.name, desc: model.desc })}
                    onFocus={() => setActiveModel({ name: model.name, desc: model.desc })}
                    aria-label={`打开 ${model.name}`}
                  >
                    <span className="geo-node-icon-wrap">
                      <img src={model.icon} alt="" width="34" height="34" loading="lazy" />
                    </span>
                    <span className="geo-node-label">{model.shortName}</span>
                  </a>
                ))}

                <button
                  type="button"
                  className={`geo-compass-node geo-compass-more ${activeModel.name === "更多模型" ? "active" : ""}`}
                  style={getNodeStyle(models.length)}
                  onMouseEnter={() => setActiveModel({ name: "更多模型", desc: "资深算法团队持续进行深度模型适配与更新" })}
                  onFocus={() => setActiveModel({ name: "更多模型", desc: "资深算法团队持续进行深度模型适配与更新" })}
                  aria-label="查看更多适配模型"
                >
                  <span className="geo-node-icon-wrap bg-gradient" aria-hidden="true">+</span>
                  <span className="geo-node-label">更多AI</span>
                </button>
              </div>

            </div>

            {/* 3. 罗盘上方中央摆置全息 HUD 仪表盘 (中间的“立即体验”硬编码链接至 geo.maogeo.top) */}
            <div className="geo-compass-center-hub">
              <div className="geo-hub-hologram">
                <div className="geo-hologram-grid"></div>
                <div className="geo-hologram-scanline"></div>
                
                {/* 🌟 核心标题：主流AI模型优化与收录 (浅色、极高对比度、放在圆心正上方仪表最顶部) */}
                <h2 className="geo-hud-main-title">主流AI模型优化与收录</h2>
                
                <div className="geo-hud-divider"></div>
                
                <div className="geo-hub-model-name" id="mg-active-model-name" aria-live="polite">{activeModel.name}</div>
                <div className="geo-hub-model-desc" id="mg-active-model-desc">{activeModel.desc}</div>
                <a 
                  className="geo-hub-action-btn" 
                  id="mg-active-model-link"
                  href="https://geo.maogeo.top/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  立即体验 ➔
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Capabilities Section */}
      <section className="geo-capabilities-section" id="geo-capabilities">
        <div className="geo-container">
          <div className="geo-section-header">
            <h2 className="geo-section-title">底层技术重构，<span className="gradient-text">六大深度GEO能力</span></h2>
            <p className="geo-section-subtitle">专注大模型抓取及收录算法底层规律，提供真正能落地的技术解决方案。</p>
          </div>

          <div className="geo-capabilities-grid">
            <div className="geo-capability-card">
              <div className="geo-capability-num">01</div>
              <h3 className="geo-capability-title">多自媒体矩阵授权验证</h3>
              <p className="geo-capability-desc">一键批量关联知乎、百家号、头条号等多账号管理，系统内置物理级安全风控保护，极大保障多平台发文的账号稳定性。</p>
            </div>
            <div className="geo-capability-card">
              <div className="geo-capability-num">02</div>
              <h3 className="geo-capability-title">AI 大模型多维可见度体检</h3>
              <p className="geo-capability-desc">集成主流 AI 引擎检测链路，定期生成多维度分析报表，包含自然引用量、负面屏蔽占比与智能分类定位。</p>
            </div>
            <div className="geo-capability-card">
              <div className="geo-capability-num">03</div>
              <h3 className="geo-capability-title">千级优质官媒投稿发布</h3>
              <p className="geo-capability-desc">精选全网千余家高权威权重科技、外贸自媒体站点，一键触达各大搜索源，实现大面积收录引流。</p>
            </div>
            <div className="geo-capability-card">
              <div className="geo-capability-num">04</div>
              <h3 className="geo-capability-title">专属行业知识库集成</h3>
              <p className="geo-capability-desc">支持导入公司产品手册、技术文献等私域文档，生成式 AI 将严格按照知识库内容产出，杜绝大模型胡言乱语。</p>
            </div>
            <div className="geo-capability-card">
              <div className="geo-capability-num">05</div>
              <h3 className="geo-capability-title">AI内容智创及TDK优化</h3>
              <p className="geo-capability-desc">全流程接入主流大模型，结合特定 GEO 调优算法，生成更具大模型检索相关性的原创长尾词文案与 Meta 标签。</p>
            </div>
            <div className="geo-capability-card">
              <div className="geo-capability-num">06</div>
              <h3 className="geo-capability-title">自动化 Sitemap 监控</h3>
              <p className="geo-capability-desc">实时与各大搜索引擎保持索引对接，更新文章即时提交爬取，最大化降低新站等待收录的沟通成本。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance / Regulatory Check */}
      <section className="geo-compliance-section">
        <div className="geo-container">
          <div className="geo-compliance-box">
            <h3 className="geo-compliance-title">合规声明与使用守则</h3>
            <p className="geo-compliance-desc">
              本系统发布的所有内容应严格遵守当地网络安全及相关法律法规。自媒体矩阵管理及新闻源投稿服务仅支持合规产品的品牌宣传与技术推广，禁止发布任何带有误导性、虚假以及侵权性质的文章信息。
            </p>
          </div>
        </div>
      </section>

      {/* 🌟 重构：开放 API 平台与自动发布 Webhook (腾讯云市场风格) */}
      <section className="tpm-portal-section tpm-portal-market__section">
        <div className="tpm-portal-section__inner">
          <div className="tpm-portal-section__hd">
            <div className="tpm-portal-section__hd-content">
              <div className="tpm-portal-section__tag">AI 生态</div>
              <div className="tpm-portal-section__hd-main">
                <div className="tpm-portal-section__title">丰富的 AI 应用生态，满足您的多元业务场景</div>
              </div>
            </div>
          </div>
          <div className="tpm-portal-section__bd">
            <div className="tpm-portal-module">
              <div className="tpm-portal-market">
                <div className="tpm-portal-market__inner">
                  
                  {/* 左侧大面板 */}
                  <div className="tpm-portal-market__panel">
                    <div className="tpm-portal-market__panel-body">
                      <div className="tpm-portal-market__panel-title">Ai官网SEO</div>
                      
                      <div style={{ fontSize: '13px', color: '#0A4ECB', fontWeight: 700, marginBottom: '8px', letterSpacing: '0.05em' }}>
                        功能介绍
                      </div>
                      
                      <div className="tpm-portal-market__panel-desc" style={{ fontSize: '13.5px', lineHeight: '1.7', color: '#4a4a6a' }}>
                        该功能是可以将AI写作的文章，同步到已有的官网中，免人工编辑维护官网，全自动每日排期发布文章，增加官网SEO的权重，从而促进GEO搜索的几率（官网到达一定权重之后，AI抓取几率会大大增加）；
                      </div>

                      <div className="tpm-portal-market__features" style={{ marginTop: '1.2rem' }}>
                        <div className="tpm-portal-market__feature-item" style={{ lineHeight: '1.6' }}>
                          <span className="tpm-portal-market__feature-text">
                            当前已上架 <strong style={{ color: '#0A4ECB' }}>3</strong> 种官网主流框架：<span className="linear" style={{ fontWeight: 700 }}>WordPress，PbootCMS，EyouCms</span>
                          </span>
                        </div>
                        <div className="tpm-portal-market__feature-item" style={{ marginTop: '4px' }}>
                          <span className="tpm-portal-market__feature-text" style={{ color: '#7a7a9a', fontSize: '12.5px' }}>
                            更多框架正在开发中。。。
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="tpm-portal-market__panel-footer" style={{ marginTop: '2rem' }}>
                      <a 
                        className="tpm-portal-market__panel-btn" 
                        href="https://geo.maogeo.top/"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="tpm-portal-market__panel-btn-text">前往 API 平台</span>
                      </a>
                    </div>
                  </div>

                                    {/* 右侧卡片区域 (展示 3 个系统的预留图卡片) */}
                  <div className="tpm-portal-market__cards-wrapper">
                    
                    {/* 卡片 1 - WordPress 系统 */}
                    <div className="tpm-portal-market__card-item">
                      <a href="https://geo.maogeo.top/" className="tpm-portal-market__card" target="_blank" rel="noopener noreferrer">
                        <div className="tpm-portal-market__card-inner">
                          <div className="tpm-portal-market__card-media">
                            {/* 预留图容器 1 */}
                            <div className="tpm-portal-market__img-placeholder" style={{ background: '#090b14', overflow: 'hidden' }}>
                              <img src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721000438532.webp" alt="WordPress 自动同步" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                          </div>
                          <div className="tpm-portal-market__card-body">
                            <div className="tpm-portal-market__card-title">
                              WordPress 自动同步
                              <p>全球占有率第一的开源 CMS 框架</p>
                            </div>
                            <div className="tpm-portal-market__card-link">查看详情</div>
                          </div>
                          <div className="tpm-portal-market__card-body--active">
                            <div className="tpm-portal-market__card-title">
                              WordPress 自动同步
                              <p>全球占有率第一的开源 CMS 框架</p>
                            </div>
                            <div className="tpm-portal-market__card-features">
                              <div>
                                <div className="tpm-portal-market__card-feature">插件 / REST API 自动推送</div>
                                <div className="tpm-portal-market__card-feature">定时排期无缝同步发文</div>
                                <div className="tpm-portal-market__card-feature">自动生成 Sitemap 促进抓取</div>
                              </div>
                            </div>
                            <div className="tpm-portal-market__card-link">查看详情</div>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* 卡片 2 - PbootCMS 系统 */}
                    <div className="tpm-portal-market__card-item">
                      <a href="https://geo.maogeo.top/" className="tpm-portal-market__card" target="_blank" rel="noopener noreferrer">
                        <div className="tpm-portal-market__card-inner">
                          <div className="tpm-portal-market__card-media">
                            {/* 预留图容器 2 */}
                            <div className="tpm-portal-market__img-placeholder" style={{ background: '#090b14', overflow: 'hidden' }}>
                              <img src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721000440956.webp" alt="PbootCMS 自动同步" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                          </div>
                          <div className="tpm-portal-market__card-body">
                            <div className="tpm-portal-market__card-title">
                              PbootCMS 自动同步
                              <p>高效简洁的企业建站开源系统</p>
                            </div>
                            <div className="tpm-portal-market__card-link">查看详情</div>
                          </div>
                          <div className="tpm-portal-market__card-body--active">
                            <div className="tpm-portal-market__card-title">
                              PbootCMS 自动同步
                              <p>高效简洁的企业建站开源系统</p>
                            </div>
                            <div className="tpm-portal-market__card-features">
                              <div>
                                <div className="tpm-portal-market__card-feature">原生 Webhook 接口挂载</div>
                                <div className="tpm-portal-market__card-feature">多分类文章自动关联</div>
                                <div className="tpm-portal-market__card-feature">免人工维护高效积累权重</div>
                              </div>
                            </div>
                            <div className="tpm-portal-market__card-link">查看详情</div>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* 卡片 3 - EyouCms 系统 */}
                    <div className="tpm-portal-market__card-item">
                      <a href="https://geo.maogeo.top/" className="tpm-portal-market__card" target="_blank" rel="noopener noreferrer">
                        <div className="tpm-portal-market__card-inner">
                          <div className="tpm-portal-market__card-media">
                            {/* 预留图容器 3 */}
                            <div className="tpm-portal-market__img-placeholder" style={{ background: '#090b14', overflow: 'hidden' }}>
                              <img src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721000433153.webp" alt="EyouCms 易优系统" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                          </div>
                          <div className="tpm-portal-market__card-body">
                            <div className="tpm-portal-market__card-title">
                              EyouCms 易优系统
                              <p>专为企业营销设计的 CMS 框架</p>
                            </div>
                            <div className="tpm-portal-market__card-link">查看详情</div>
                          </div>
                          <div className="tpm-portal-market__card-body--active">
                            <div className="tpm-portal-market__card-title">
                              EyouCms 易优系统
                              <p>专为企业营销设计的 CMS 框架</p>
                            </div>
                            <div className="tpm-portal-market__card-features">
                              <div>
                                <div className="tpm-portal-market__card-feature">一键配置密钥精准推送</div>
                                <div className="tpm-portal-market__card-feature">GEO 关键词与 TDK 自动对齐</div>
                                <div className="tpm-portal-market__card-feature">大幅提升大模型抓取权重</div>
                              </div>
                            </div>
                            <div className="tpm-portal-market__card-link">查看详情</div>
                          </div>
                        </div>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="geo-cta-section">
        <div className="geo-container">
          <div className="geo-cta-box">
            <h2 className="geo-cta-title">抢抓大模型时代红利，即刻开启 GEO 优化之旅</h2>
            <p className="geo-cta-desc">
              让您的产品成为大语言模型的首选引用对象，占领下一代检索的黄金入口。
            </p>
            <div className="geo-cta-buttons">
              <a href="#" onClick={copyWeChatAndShowModal} className="geo-cta-btn-primary">
                联系猫哥微信咨询：maogeotop
              </a>
            </div>
            <div className="geo-cta-contact">
              <span>💬 官方客服微信：<strong>maogeotop</strong> (备注：GEO试用)</span>
              <span>📧 官方咨询邮箱：<strong>2678586420@qq.com</strong></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
