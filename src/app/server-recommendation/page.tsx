import { Metadata } from "next";
import ServerRecommendation from "@/components/ServerRecommendation";

export const metadata: Metadata = {
  title: "外贸独立站 VPS 云服务器精选推荐与避坑指南 - 猫哥建站",
  description: "猫哥精选优质出海 VPS 云服务器提供商，涵盖 Hetzner、Cloudways、RackNerd、Vultr 等节点实测性能与性价比评测，助力外贸建站选型。",
  keywords: ["外贸VPS推荐", "海外云服务器", "Hetzner服务器", "Cloudways评测", "外贸服务器选型"],
  alternates: {
    canonical: "https://maogeo.top/server-recommendation",
    languages: {
      "zh-CN": "https://maogeo.top/server-recommendation",
      "zh-HK": "https://hk.maogeo.top/server-recommendation",
      "x-default": "https://maogeo.top/server-recommendation",
    },
  },
  openGraph: {
    title: "外贸独立站 VPS 云服务器精选推荐与避坑指南 - 猫哥建站",
    description: "猫哥精选优质出海 VPS 云服务器提供商，涵盖 Hetzner、Cloudways、RackNerd、Vultr 等节点实测性能与性价比评测，助力外贸建站选型。",
    url: "https://maogeo.top/server-recommendation",
  },
};

export default function Page() {
  return <ServerRecommendation />;
}
