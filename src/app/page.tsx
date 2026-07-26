"use client";
import { useState, useEffect, useId, useRef } from "react";
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
  const lightboxTitleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // 挂载全局方法，支持任何组件触发灯箱
    window.openGscLightbox = (src: string) => {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setLightboxSrc(src);
      setIsLightboxActive(true);
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
      window.openGscLightbox = () => {};
    };
  }, []);

  useEffect(() => {
    if (!isLightboxActive) return;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [isLightboxActive]);

  const closeLightbox = () => {
    setIsLightboxActive(false);
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
        onMouseDown={closeLightbox}
        role="dialog"
        aria-modal="true"
        aria-labelledby={lightboxTitleId}
        aria-hidden={!isLightboxActive}
      >
        <div className="geo-lightbox-content" onMouseDown={(event) => event.stopPropagation()}>
          <h2 id={lightboxTitleId} className="geo-lightbox-sr-title">案例大图预览</h2>
          {lightboxSrc && (
            <img
              id="geo-gsc-lightbox-img-el"
              className="geo-lightbox-img"
              src={lightboxSrc}
              alt="案例大图预览"
            />
          )}
          <button ref={closeButtonRef} type="button" className="geo-lightbox-close" onClick={closeLightbox} aria-label="关闭大图预览">&times;</button>
        </div>
      </div>
    </main>
  );
}
