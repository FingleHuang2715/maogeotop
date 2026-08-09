import { Metadata } from "next";
import WaimaojianzhanClient from "@/components/WaimaojianzhanClient";

export const metadata: Metadata = {
  title: "专业外贸营销与 GEO 建站服务 - 猫哥建站",
  description: "猫哥提供 8年+ 实战外贸独立站建设与生成式 AI (GEO) 提炼规则优化服务，打破模板站同质化困境，打造 PageSpeed 95+ 极速高询盘转化网站。",
  keywords: ["外贸建站服务", "GEO建站", "外贸独立站开发", "谷歌SEO建站", "出海营销型网站"],
  alternates: {
    canonical: "https://maogeo.top/waimaojianzhan",
    languages: {
      "zh-CN": "https://maogeo.top/waimaojianzhan",
      "zh-HK": "https://hk.maogeo.top/waimaojianzhan",
      "x-default": "https://maogeo.top/waimaojianzhan",
    },
  },
  openGraph: {
    title: "专业外贸营销与 GEO 建站服务 - 猫哥建站",
    description: "猫哥提供 8年+ 实战外贸独立站建设与生成式 AI (GEO) 提炼规则优化服务，打破模板站同质化困境，打造 PageSpeed 95+ 极速高询盘转化网站。",
    url: "https://maogeo.top/waimaojianzhan",
  },
};

export default function Page() {
  return <WaimaojianzhanClient />;
}
