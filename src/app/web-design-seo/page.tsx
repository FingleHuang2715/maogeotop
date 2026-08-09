import { Metadata } from "next";
import GeoSeoOptimizationPage from "@/components/GeoSeoOptimization";

export const metadata: Metadata = {
  title: "外贸网页设计与 SEO 结合优化服务 - 猫哥建站",
  description: "猫哥提供现代高端外贸网页视觉设计与 Google SEO / GEO 深度融合研发服务。",
  keywords: ["外贸网页设计", "SEO网页设计", "独立站UI设计"],
  alternates: {
    canonical: "https://maogeo.top/web-design-seo",
    languages: {
      "zh-CN": "https://maogeo.top/web-design-seo",
      "zh-HK": "https://hk.maogeo.top/web-design-seo",
      "x-default": "https://maogeo.top/web-design-seo",
    },
  },
  openGraph: {
    title: "外贸网页设计与 SEO 结合优化服务 - 猫哥建站",
    description: "猫哥提供现代高端外贸网页视觉设计与 Google SEO / GEO 深度融合研发服务。",
    url: "https://maogeo.top/web-design-seo",
  },
};

export default function Page() {
  return <GeoSeoOptimizationPage />;
}
