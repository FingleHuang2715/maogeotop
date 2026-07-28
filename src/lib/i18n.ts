// 简繁体转换字典与域名语言识别
export type Locale = "zh-CN" | "zh-HK";

// 常见词汇香港繁体映射
const dictionary: Record<string, string> = {
  "猫哥建站": "貓哥建站",
  "提供专业一站式": "提供專業一站式",
  "官网建设与品牌出海营销解决方案": "官網建設與品牌出海營銷解決方案",
  "从智能官网定制到生成式引擎(GEO)优化，确保品牌词与核心产品在AGI中被大模型高权重引用。": "從智能官網定制到生成式引擎(GEO)優化，確保品牌詞與核心產品在AGI中被大模型高權重引用。",
  "免费 GEO 试用 ➔": "免費 GEO 試用 ➔",
  "了解 GEO 建站 ➔": "了解 GEO 建站 ➔",
  "查看客户案例 ➔": "查看客戶案例 ➔",
  "首页": "首頁",
  "GEO工具": "GEO工具",
  "外贸建站": "外貿建站",
  "GEO/SEO优化": "GEO/SEO優化",
  "服务器推荐": "伺服器推薦",
  "技术专区": "技術專區",
  "建站避坑工具": "建站避坑工具",
  "联系我们": "聯繫我們",
  "快捷导航": "快捷導航",
  "扫码加微信": "掃碼加微信",
  "友情链接：": "友情鏈接：",
  "隐私政策": "隱私政策",
  "服务条款": "服務條款",
  "站点地图": "站點地圖",
  "猫哥GEO": "貓哥GEO",
  "猫哥建站香港区": "貓哥建站香港區",
  "猫哥建站官网": "貓哥建站官網",
};

export function getLocaleFromHost(host: string | null): Locale {
  if (!host) return "zh-CN";
  if (host.includes("hk.maogeo.top")) {
    return "zh-HK";
  }
  return "zh-CN";
}

// 简易文本快速转繁体函数
export function t(text: string, locale: Locale): string {
  if (locale === "zh-CN") return text;
  return dictionary[text] || text;
}
