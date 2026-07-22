import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeChatModal from "@/components/WeChatModal";
import SmoothScroll from "@/components/SmoothScroll";

import Script from "next/script";
import FloatingContactBar from "@/components/FloatingContactBar";

export const metadata: Metadata = {
  title: "猫哥建站 - 专业外贸企业建站、GEO优化与谷歌SEO实战服务",
  description: "猫哥建站专注为出海企业提供高端定制外贸网站建设、生成式 AI (GEO) 提炼规则优化与谷歌 SEO 搜索排名提效方案，打造高询盘转化率独立站数字营销资产。",
  keywords: ["外贸建站", "企业建站", "GEO优化", "谷歌SEO", "独立站开发", "生成式搜索引擎优化", "出海营销"],
  icons: {
    icon: [
      { url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp", type: "image/webp" },
    ],
    shortcut: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp",
    apple: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp",
  },
  openGraph: {
    title: "猫哥建站 - 专业外贸企业建站、GEO优化与谷歌SEO实战服务",
    description: "猫哥建站专注为出海企业提供高端定制外贸网站建设、生成式 AI (GEO) 提炼规则优化与谷歌 SEO 搜索排名提效方案，打造高询盘转化率独立站数字营销资产。",
    images: [
      {
        url: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp",
        width: 512,
        height: 512,
        alt: "猫哥建站 Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp" />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <WeChatModal />
          <FloatingContactBar />
        </SmoothScroll>
        {/* 51LA 统计 SDK 异步加载脚本 */}
        <Script
          id="LA_COLLECT"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"KqyLKxdjr8HVgyyQ",ck:"KqyLKxdjr8HVgyyQ"});`,
          }}
        />
      </body>
    </html>
  );
}
