import { Metadata } from "next";
import GeoToolsClient from "@/components/GeoToolsClient";

export const metadata: Metadata = {
  title: "GEO (Generative Engine Optimization) AI 工具链 - 猫哥建站",
  description: "猫哥 GEO 工具链涵盖 DeepSeek、Kimi、通义千问、豆包等 8 大主流大模型引擎的可见度诊断、提炼词库规划与 AI 权威源塑造功能。",
  keywords: ["GEO工具", "AI搜索诊断", "DeepSeek优化", "大模型引用检测", "生成式AI工具链"],
  alternates: {
    canonical: "https://maogeo.top/geo-tools",
    languages: {
      "zh-CN": "https://maogeo.top/geo-tools",
      "zh-HK": "https://hk.maogeo.top/geo-tools",
      "x-default": "https://maogeo.top/geo-tools",
    },
  },
  openGraph: {
    title: "GEO (Generative Engine Optimization) AI 工具链 - 猫哥建站",
    description: "猫哥 GEO 工具链涵盖 DeepSeek、Kimi、通义千问、豆包等 8 大主流大模型引擎的可见度诊断、提炼词库规划与 AI 权威源塑造功能。",
    url: "https://maogeo.top/geo-tools",
  },
};

export default function Page() {
  return <GeoToolsClient />;
}
