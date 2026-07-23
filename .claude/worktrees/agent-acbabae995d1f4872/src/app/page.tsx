"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutMarketingSection from "@/components/AboutMarketingSection";
import { DualEngineServices, IndustryMatrix } from "@/components/BusinessMatrix";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import GscAchievements from "@/components/GscAchievements";
import CasesShowcase from "@/components/CasesShowcase";
import PageSpeedShowcase from "@/components/PageSpeedShowcase";

export default function Home() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [isLightboxActive, setIsLightboxActive] = useState(false);

  useEffect(() => {
    // 挂载全局方法，支持任何组件触发灯箱
    window.openGscLightbox = (src: string) => {
      setLightboxSrc(src);
      setIsLightboxActive(true);
      document.body.style.overflow = "hidden"; // 锁死底层滚动
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  const closeLightbox = () => {
    setIsLightboxActive(false);
    document.body.style.overflow = ""; // 恢复滚动
  };

  return (
    <main style={{ background: "#f5f5f7" }}>
      {/* 1. 首屏 Hero Section (轻科技浅灰底) */}
      <HeroSection />

      {/* 2. 主理人品牌名片与全流程外贸营销方案 (深色极客黑底深层对比) */}
      <AboutMarketingSection />

      {/* 3. 双引擎驱动服务 (苹果极简灰白底) */}
      <DualEngineServices />

      {/* 4. 出海行业矩阵 Bento Grid (纯白底细边框) */}
      <IndustryMatrix />

      {/* 5. 精美建站案例 Showcase (暗色高科技展厅深底) */}
      <CasesShowcase />

      {/* 6. GSC 真实流量成果 (轻科技浅灰底 + 蓝紫光晕) */}
      <GscAchievements />

      {/* 7. Google PageSpeed 100分满分性能实测 (3D Box Carousel 循环展示) */} 
      <PageSpeedShowcase />

      {/* 7. 客户评价与实操社群 (纯净雪白底) */}
      <ReviewsCarousel />

      {/* 全局 React 灯箱大图预览系统 */}
      <div 
        id="geo-gsc-lightbox" 
        className={"geo-lightbox-overlay " + (isLightboxActive ? "active" : "")}
        onClick={closeLightbox}
      >
        <div className="geo-lightbox-content" onClick={(e) => e.stopPropagation()}>
          {lightboxSrc && (
            <img 
              id="geo-gsc-lightbox-img-el" 
              className="geo-lightbox-img" 
              src={lightboxSrc} 
              alt="大图预览" 
            />
          )}
          <div className="geo-lightbox-close" onClick={closeLightbox}>&times;</div>
        </div>
      </div>
    </main>
  );
}
