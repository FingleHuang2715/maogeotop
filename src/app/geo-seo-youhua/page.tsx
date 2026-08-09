import { Metadata } from "next";
import GeoSeoOptimizationPage from "@/components/GeoSeoOptimization";

export const metadata: Metadata = {
  title: "生成式 AI (GEO) 提炼规则优化与谷歌 SEO 服务 - 猫哥建站",
  description: "猫哥 GEO 优化服务专为 ChatGPT、Perplexity、DeepSeek 等 AI 搜索引擎打造，通过 JSON-LD 语义实体与规则化提炼，让您的独立站优先被 AI 引用与推荐。",
  keywords: ["GEO优化", "生成式搜索引擎优化", "AI搜索引擎优化", "谷歌SEO优化", "JSON-LD实体优化"],
  alternates: {
    canonical: "https://maogeo.top/geo-seo-youhua",
    languages: {
      "zh-CN": "https://maogeo.top/geo-seo-youhua",
      "zh-HK": "https://hk.maogeo.top/geo-seo-youhua",
      "x-default": "https://maogeo.top/geo-seo-youhua",
    },
  },
  openGraph: {
    title: "生成式 AI (GEO) 提炼规则优化与谷歌 SEO 服务 - 猫哥建站",
    description: "猫哥 GEO 优化服务专为 ChatGPT、Perplexity、DeepSeek 等 AI 搜索引擎打造，通过 JSON-LD 语义实体与规则化提炼，让您的独立站优先被 AI 引用与推荐。",
    url: "https://maogeo.top/geo-seo-youhua",
  },
};

export default function Page() {
  return <GeoSeoOptimizationPage />;
}
