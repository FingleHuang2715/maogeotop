import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "使用条款 | 猫哥建站 - 专业外贸企业建站与 GEO/SEO 优化服务",
  description: "猫哥建站服务使用条款。规范网站访问、出海建站服务交付、GEO/SEO 优化授权及知识产权声明。",
  keywords: ["使用条款", "服务协议", "猫哥建站版权声明", "知识产权说明"],
};

export default function TermsOfServicePage() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "80vh", padding: "40px 20px 80px" }}>
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          background: "#ffffff",
          border: "1px solid rgba(10, 78, 203, 0.1)",
          borderRadius: "12px",
          padding: "40px 48px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
        }}
      >
        <div style={{ fontSize: "14px", color: "#86868b", marginBottom: "12px" }}>
          <Link href="/" style={{ color: "#515154", textDecoration: "none" }}>首页</Link> &gt; <span>使用条款</span>
        </div>

        <h1 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#1d1d1f", marginBottom: "16px" }}>
          服务使用条款 (Terms of Service)
        </h1>
        <p style={{ fontSize: "14px", color: "#86868b", marginBottom: "32px" }}>
          最近更新日期：2026年7月22日
        </p>

        <section style={{ fontSize: "15px", lineHeight: "1.8", color: "#334155", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              1. 服务条款的接受与修改
            </h2>
            <p>
              欢迎访问猫哥建站（maogeo.top）。当您访问本网站或使用由猫哥团队提供的外贸建站、生成式搜索引擎（GEO）提炼规则布局、谷歌 SEO 优化与定制咨询服务时，即表示您已阅读、理解并同意受本《使用条款》的约束。我们保留根据业务发展随时修改本条款的权利，修改后的条款将在网站公布后立即生效。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              2. 服务范围与约定
            </h2>
            <p style={{ marginBottom: "8px" }}>猫哥建站为企业客户提供以下高品质数字营销服务：</p>
            <ul style={{ paddingLeft: "20px" }}>
              <li><strong>企业高转化建站：</strong>100% 响应式视觉设计、定制代码架构、高询盘率排版与极速加载性能优化；</li>
              <li><strong>GEO 生成式 AI 优化：</strong>面向 Google AI Overviews、Perplexity、ChatGPT 等 AI 搜索大模型的数据提炼与权威语义构建；</li>
              <li><strong>谷歌技术 SEO 优化：</strong>技术 SEO 规范落地、Schema 结构化数据注入、死链清理与国际化多语言扩展支持。</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              3. 知识产权与版权声明
            </h2>
            <p>
              本网站包含的所有内容（包括但不限于文字、设计排版、技术源码、品牌 Logo、UI 视觉组件、独家文章及案例展示）的知识产权均归猫哥建站或相关权利人所有。未经猫哥团队的书面明确授权，任何单位和个人不得擅自抄袭、镜像、复制或用于商业性传播。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              4. 免责声明与第三方算法变动
            </h2>
            <p>
              我们致力于采用最新符合 Google 官方白帽指南及生成式 AI 检索规范的技术方案提升您的出海营销成效。但鉴于搜索引擎（如 Google、Bing）及 AI 大模型（如 OpenAI、Anthropic）算法属于第三方独立控制并随时可能进行迭代更新，我们不对不可抗力因素造成的特定排名时间做绝对兜底担保。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              5. 适用法律与争议解决
            </h2>
            <p>
              本使用条款的订立、执行、解释及争议解决均适用中华人民共和国法律。如双方就本协议内容或其执行发生争议，应优先通过友好协商解决；协商不成的，任何一方均可向主理人所在地有管辖权的人民法院提起诉讼。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              6. 联系我们
            </h2>
            <p>
              若您对本服务条款有任何疑问，请联系猫哥客服团队：
            </p>
            <div style={{ marginTop: "12px", padding: "16px", background: "#f8fafc", border: "1px solid rgba(10,78,203,0.12)", borderRadius: "8px" }}>
              <p style={{ margin: "0 0 6px 0" }}><strong>微信：</strong>maogeotop</p>
              <p style={{ margin: "0 0 6px 0" }}><strong>邮箱：</strong>2678586420@qq.com</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
