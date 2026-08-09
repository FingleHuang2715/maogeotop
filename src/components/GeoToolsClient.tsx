"use client";
import { copyWeChatAndShowModal } from "@/components/WeChatModal";
import React, { useEffect, useState, useRef, useCallback } from "react";
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
    title: "提炼词库规划",
    subTitle: "挖掘 AI 搜索的高频商业提问",
    desc: "基于 GEO 算法全盘梳理海外买家在生成式 AI 中提问的目标核心词与长尾长句，全方位覆盖用户高意向决策搜索场景。",
    btnText: "定制词库策略",
    btnLink: "https://geo.maogeo.top/"
  },
  {
    title: "AI 权威源塑造",
    subTitle: "构建被大模型高频采信的知识库",
    desc: "通过 JSON-LD 实体图谱与高权重全网公信力埋点，将品牌核心产品与技术知识点直接打造成大模型生成回答时的推荐引用来源。",
    btnText: "塑造品牌知识库",
    btnLink: "https://geo.maogeo.top/"
  },
  {
    title: "GEO 监测面板",
    subTitle: "实时追踪 AI 引用变化与竞品动态",
    desc: "可视化监控多平台 AI 模型的引用率变化、源网页被采信频次以及主要竞品的数字声音，确保 GEO 优化战略精准且长效提效。",
    btnText: "体验监测面板",
    btnLink: "https://geo.maogeo.top/"
  }
];

export default function GeoToolsClient() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const prevAngleRef = useRef(0);
  const isControlledRef = useRef(false);

  const animateRotation = useCallback(() => {
    if (isControlledRef.current) return;
    setRotationAngle((prev) => {
      const next = (prev + 0.15) % 360;
      prevAngleRef.current = next;
      return next;
    });
    animationFrameRef.current = requestAnimationFrame(animateRotation);
  }, []);

  useEffect(() => {
    if (isRotating) {
      animationFrameRef.current = requestAnimationFrame(animateRotation);
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isRotating, animateRotation]);

  const handleCompassClick = (index: number) => {
    setCurrentSlideIndex(index);
    isControlledRef.current = true;
    setIsRotating(false);
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

    const targetAngle = index * 90;
    let currentNorm = prevAngleRef.current % 360;
    if (currentNorm < 0) currentNorm += 360;

    let delta = targetAngle - currentNorm;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    const finalAngle = prevAngleRef.current + delta;
    prevAngleRef.current = finalAngle;
    setRotationAngle(finalAngle);
  };

  const handleCompassMouseEnter = () => {
    setIsRotating(false);
  };

  const handleCompassMouseLeave = () => {
    isControlledRef.current = false;
    setIsRotating(true);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
        );
      }

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="geo-tools-page" ref={containerRef}>
      <header className="geo-tools-hero" ref={heroRef}>
        <div className="geo-tools-badge">GEO (Generative Engine Optimization) 工具链</div>
        <h1 className="geo-tools-title">
          让 AI 成为你的 <span className="highlight">免费超级业务员</span>
        </h1>
        <p className="geo-tools-subtitle">
          深度融合 DeepSeek、ChatGPT、Perplexity 与 Claude 等主流大模型检索规则。通过数据化诊断与实体塑造，抢占生成式搜索时代的流量红利。
        </p>
      </header>

      <section className="geo-tools-compass-section">
        <div
          className="geo-compass-container"
          onMouseEnter={handleCompassMouseEnter}
          onMouseLeave={handleCompassMouseLeave}
        >
          <div
            className="geo-compass-dial"
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          >
            <div className="geo-compass-ring outer" />
            <div className="geo-compass-ring inner" />

            <div
              className={`geo-compass-node node-0 ${currentSlideIndex === 0 ? "active" : ""}`}
              onClick={() => handleCompassClick(0)}
              style={{ transform: `rotate(${-rotationAngle}deg)` }}
            >
              <div className="geo-node-icon">
                <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194647707.webp" alt="DeepSeek" width={32} height={32} unoptimized />
              </div>
              <span className="geo-node-label">DeepSeek</span>
            </div>

            <div
              className={`geo-compass-node node-1 ${currentSlideIndex === 1 ? "active" : ""}`}
              onClick={() => handleCompassClick(1)}
              style={{ transform: `rotate(${-rotationAngle}deg)` }}
            >
              <div className="geo-node-icon">
                <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194652455.webp" alt="Kimi" width={32} height={32} unoptimized />
              </div>
              <span className="geo-node-label">Kimi</span>
            </div>

            <div
              className={`geo-compass-node node-2 ${currentSlideIndex === 2 ? "active" : ""}`}
              onClick={() => handleCompassClick(2)}
              style={{ transform: `rotate(${-rotationAngle}deg)` }}
            >
              <div className="geo-node-icon">
                <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194655116.webp" alt="通义千问" width={32} height={32} unoptimized />
              </div>
              <span className="geo-node-label">通义千问</span>
            </div>

            <div
              className={`geo-compass-node node-3 ${currentSlideIndex === 3 ? "active" : ""}`}
              onClick={() => handleCompassClick(3)}
              style={{ transform: `rotate(${-rotationAngle}deg)` }}
            >
              <div className="geo-node-icon">
                <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194650592.webp" alt="豆包" width={32} height={32} unoptimized />
              </div>
              <span className="geo-node-label">豆包</span>
            </div>
          </div>

          <div className="geo-compass-center-card">
            <div className="geo-card-header">
              <span className="geo-card-step">0{currentSlideIndex + 1} / 04</span>
              <span className="geo-card-subtitle">{currentSlide.subTitle}</span>
            </div>
            <h2 className="geo-card-title">{currentSlide.title}</h2>
            <p className="geo-card-desc">{currentSlide.desc}</p>
            <div className="geo-card-actions">
              <a href={currentSlide.btnLink} target="_blank" rel="noopener noreferrer" className="geo-btn-primary">
                {currentSlide.btnText} →
              </a>
            </div>
          </div>
        </div>

        <div className="geo-compass-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`geo-dot ${currentSlideIndex === idx ? "active" : ""}`}
              onClick={() => handleCompassClick(idx)}
              aria-label={`切换到第 ${idx + 1} 个工具功能`}
            />
          ))}
        </div>
      </section>

      <section className="geo-models-grid-section">
        <h2 className="geo-section-title">支持检索分析的全网 8 大主流大模型引擎</h2>
        <p className="geo-section-subtitle">全面覆盖国内与海外主流 AI 基础设施，全方位打通品牌数字资产引用链路</p>

        <div className="geo-models-grid" ref={gridRef}>
          <div className="geo-model-card">
            <div className="geo-model-logo">
              <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194647707.webp" alt="DeepSeek" width={48} height={48} unoptimized />
            </div>
            <h3 className="geo-model-name">DeepSeek</h3>
            <p className="geo-model-desc">国内顶尖开源大模型，长文本推理与逻辑回答能力极强。</p>
          </div>

          <div className="geo-model-card">
            <div className="geo-model-logo">
              <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194652455.webp" alt="Kimi" width={48} height={48} unoptimized />
            </div>
            <h3 className="geo-model-name">Kimi 智能助手</h3>
            <p className="geo-model-desc">月之暗面推出，擅长超长上下文解析与互联网最新资料搜集。</p>
          </div>

          <div className="geo-model-card">
            <div className="geo-model-logo">
              <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194655116.webp" alt="通义千问" width={48} height={48} unoptimized />
            </div>
            <h3 className="geo-model-name">阿里云 通义千问</h3>
            <p className="geo-model-desc">阿里巴巴自研，全景商业生态与多模态交互旗舰大模型。</p>
          </div>

          <div className="geo-model-card">
            <div className="geo-model-logo">
              <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194650592.webp" alt="豆包" width={48} height={48} unoptimized />
            </div>
            <h3 className="geo-model-name">字节跳动 豆包</h3>
            <p className="geo-model-desc">字节跳动推出，移动端C端用户量巨大，检索推荐应用广泛。</p>
          </div>

          <div className="geo-model-card">
            <div className="geo-model-logo">
              <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194645489.webp" alt="腾讯元宝" width={48} height={48} unoptimized />
            </div>
            <h3 className="geo-model-name">腾讯元宝</h3>
            <p className="geo-model-desc">基于混元大模型，独家接入微信公众号等腾讯全网优质生态内容。</p>
          </div>

          <div className="geo-model-card">
            <div className="geo-model-logo">
              <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194649263.webp" alt="文心一言" width={48} height={48} unoptimized />
            </div>
            <h3 className="geo-model-name">百度 文心一言</h3>
            <p className="geo-model-desc">百度旗舰大模型，深度集成百度搜索实时索引与知识图谱。</p>
          </div>

          <div className="geo-model-card">
            <div className="geo-model-logo">
              <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194658286.webp" alt="智谱清言" width={48} height={48} unoptimized />
            </div>
            <h3 className="geo-model-name">智谱清言</h3>
            <p className="geo-model-desc">基于 GLM 大模型，学术科研与高精度逻辑提炼首选引擎。</p>
          </div>

          <div className="geo-model-card">
            <div className="geo-model-logo">
              <Image src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260723194653302.webp" alt="纳米 AI" width={48} height={48} unoptimized />
            </div>
            <h3 className="geo-model-name">纳米 AI 搜索</h3>
            <p className="geo-model-desc">360 旗下 AI 搜索门户，专注极速多源对比与精准答案提炼。</p>
          </div>
        </div>
      </section>

      <section className="geo-tools-cta">
        <div className="geo-cta-box">
          <h2 className="geo-cta-title">准备好全面提升品牌在大模型中的声量了吗？</h2>
          <p className="geo-cta-desc">立即开启免费诊断，了解您的独立站在 DeepSeek 与 ChatGPT 中的推荐排名表现。</p>
          <div className="geo-cta-actions">
            <a href="https://geo.maogeo.top/" target="_blank" rel="noopener noreferrer" className="geo-btn-primary">
              进入 GEO 诊断平台 →
            </a>
            <button onClick={copyWeChatAndShowModal} className="geo-btn-secondary">
              联系猫哥定制 GEO 方案
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
