import { Metadata } from "next";
import ServerRecommendation from "@/components/ServerRecommendation";

export const metadata: Metadata = {
  title: "外贸建站主机精选推荐与测评 - 猫哥建站",
  description: "猫哥精选优质出海主机与云服务器提供商评测，助力外贸建站选型。",
  keywords: ["外贸主机推荐", "WordPress主机", "出海主机评测"],
  alternates: {
    canonical: "https://maogeo.top/host-recommendation",
    languages: {
      "zh-CN": "https://maogeo.top/host-recommendation",
      "zh-HK": "https://hk.maogeo.top/host-recommendation",
      "x-default": "https://maogeo.top/host-recommendation",
    },
  },
  openGraph: {
    title: "外贸建站主机精选推荐与测评 - 猫哥建站",
    description: "猫哥精选优质出海主机与云服务器提供商评测，助力外贸建站选型。",
    url: "https://maogeo.top/host-recommendation",
  },
};

export default function Page() {
  return <ServerRecommendation />;
}
