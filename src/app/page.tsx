// 服务端组件：无 "use client"，直接在服务端获取数据并渲染，首屏零等待
import HeroSection from "@/components/HeroSection";
import AboutMarketingSection from "@/components/AboutMarketingSection";
import { DualEngineServices, IndustryMatrix } from "@/components/BusinessMatrix";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import GscAchievements from "@/components/GscAchievements";
import CasesShowcase from "@/components/CasesShowcase";
import PageSpeedShowcase from "@/components/PageSpeedShowcase";
import HomeBlogSection from "@/components/HomeBlogSection";
import GscLightbox from "@/components/GscLightbox";

export default function Home() {
  return (
    <main style={{ background: "#f5f5f7" }}>
      {/* 1. 首屏 Hero Section */}
      <HeroSection />

      {/* 2. WordPress 教程博客专栏（服务端直接渲染，零加载等待） */}
      <HomeBlogSection />

      {/* 3. 主理人品牌名片与全流程外贸营销方案 */}
      <AboutMarketingSection />

      {/* 4. 双引擎驱动服务 */}
      <DualEngineServices />

      {/* 5. 出海行业矩阵 Bento Grid */}
      <IndustryMatrix />

      {/* 6. 精美建站案例 Showcase */}
      <CasesShowcase />

      {/* 7. GSC 真实流量成果 */}
      <GscAchievements />

      {/* 8. Google PageSpeed 100分满分性能实测 */}
      <PageSpeedShowcase />

      {/* 9. 客户评价与实操社群 */}
      <ReviewsCarousel />

      {/* 全局灯箱大图预览（Client 组件，独立挂载） */}
      <GscLightbox />
    </main>
  );
}
