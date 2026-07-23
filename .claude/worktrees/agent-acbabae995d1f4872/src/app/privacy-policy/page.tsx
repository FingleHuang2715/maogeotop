import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策 | 猫哥建站 - 专业外贸企业建站与 GEO/SEO 优化服务",
  description: "猫哥建站隐私政策。了解我们如何收集、使用、保护您的个人隐私信息以及您的相关权利。",
  keywords: ["隐私政策", "猫哥建站隐私声明", "数据保护", "用户数据安全"],
};

export default function PrivacyPolicyPage() {
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
          <Link href="/" style={{ color: "#515154", textDecoration: "none" }}>首页</Link> &gt; <span>隐私政策</span>
        </div>

        <h1 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#1d1d1f", marginBottom: "16px" }}>
          隐私政策 (Privacy Policy)
        </h1>
        <p style={{ fontSize: "14px", color: "#86868b", marginBottom: "32px" }}>
          最近更新日期：2026年7月22日
        </p>

        <section style={{ fontSize: "15px", lineHeight: "1.8", color: "#334155", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              1. 导言与概述
            </h2>
            <p>
              猫哥建站（以下简称“我们”或“本网站”）非常重视用户的隐私保护。本《隐私政策》旨在帮助您了解在浏览我们的网站（maogeo.top）、咨询我们的外贸建站、GEO（生成式搜索引擎优化）与谷歌 SEO 优化服务时，我们如何收集、处理、存储与保护您的个人信息。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              2. 我们收集的信息
            </h2>
            <p style={{ marginBottom: "8px" }}>为了向您提供优质、精准的定制建站与优化咨询服务，我们可能会在您主动提供或使用网站服务时收集以下必要信息：</p>
            <ul style={{ paddingLeft: "20px" }}>
              <li><strong>联系信息：</strong>当您通过微信、电子邮件或在线表单与猫哥联系时，您提供的微信号、邮箱地址、手机号码等；</li>
              <li><strong>项目需求信息：</strong>您提交的公司名称、主营业务、产品类型、目标出海市场及站点建设指标；</li>
              <li><strong>设备与访问日志：</strong>包括您的 IP 地址、浏览器类型、操作系统版本、访问时间及页面停留时间等通用 Web 访问统计数据。</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              3. 信息的使用目的
            </h2>
            <p style={{ marginBottom: "8px" }}>我们收集的信息将严格用于以下用途：</p>
            <ul style={{ paddingLeft: "20px" }}>
              <li>响应您的外贸建站、GEO 提炼及 SEO 诊断咨询，并提供精准的技术报价与排版方案；</li>
              <li>履行与您签署的独立站建设服务协议及售后支持；</li>
              <li>优化我们的网站性能与用户交互体验，保障系统的稳定安全运行；</li>
              <li>在获得您同意的情况下，向您发送重要的行业趋势报告或服务更新通知。</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              4. 信息的安全与存储
            </h2>
            <p>
              我们采用业界领先的安全加密技术（如 HTTPS/TLS 数据传输加密）与严格的访问权限控制来保障您的个人数据安全。我们绝不会将您的个人隐私信息出租、出售或泄露给任何未经授权的第三方公司或机构，法律法规另有规定者除外。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              5. Cookie 与跟踪技术
            </h2>
            <p>
              我们的网站可能使用必要型 Cookie 来维护基本功能（如保存语言偏好、防范恶意提交流量）。您可以随时通过浏览器设置拒绝或删除非必要 Cookie，但这可能影响网站部分个性化功能的使用。
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1d1d1f", marginBottom: "10px", borderLeft: "4px solid #0A4ECB", paddingLeft: "12px" }}>
              6. 您的权利与联系方式
            </h2>
            <p>
              您随时有权要求查询、更正或申请删除我们所持有的关于您的个人数据信息。如您对本隐私政策有任何疑问或相关请求，请直接联系主理人：
            </p>
            <div style={{ marginTop: "12px", padding: "16px", background: "#f8fafc", border: "1px solid rgba(10,78,203,0.12)", borderRadius: "8px" }}>
              <p style={{ margin: "0 0 6px 0" }}><strong>微信：</strong>maogeotop</p>
              <p style={{ margin: "0 0 6px 0" }}><strong>邮箱：</strong>2678586420@qq.com</p>
              <p style={{ margin: 0 }}><strong>官方网站：</strong>https://maogeo.top</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
