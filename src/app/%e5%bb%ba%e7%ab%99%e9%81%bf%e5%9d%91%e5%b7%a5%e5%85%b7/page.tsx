"use client";

import React from "react";
import Link from "next/link";

export default function BuildingAuditToolPage() {
  return (
    <main
      style={{
        minHeight: "80vh",
        background: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          background: "#ffffff",
          border: "1px solid rgba(10, 78, 203, 0.12)",
          borderRadius: "16px",
          padding: "54px 36px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(10, 78, 203, 0.06)",
        }}
      >
        {/* 高科技感 正在开发矢量 SVG 徽章 */}
        <div
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(10, 78, 203, 0.08) 0%, rgba(37, 99, 235, 0.14) 100%)",
            border: "1px solid rgba(10, 78, 203, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px auto",
            boxShadow: "0 8px 24px rgba(10, 78, 203, 0.12)",
          }}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0A4ECB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.18 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>

        <span
          style={{
            display: "inline-block",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "#0A4ECB",
            background: "linear-gradient(135deg, rgba(10, 78, 203, 0.08) 0%, rgba(37, 99, 235, 0.12) 100%)",
            border: "1px solid rgba(10, 78, 203, 0.22)",
            padding: "5px 16px",
            borderRadius: "20px",
            marginBottom: "18px",
            letterSpacing: "0.05em",
          }}
        >
          🚧 功能升级中 · COMING SOON
        </span>

        <h1
          style={{
            fontSize: "2.1rem",
            fontWeight: 900,
            color: "#1d1d1f",
            margin: "0 0 14px 0",
            letterSpacing: "-0.02em",
          }}
        >
          建站避坑工具正在开发中
        </h1>

        <p
          style={{
            fontSize: "0.98rem",
            color: "#515154",
            lineHeight: "1.75",
            margin: "0 0 36px 0",
          }}
        >
          我们正在全力升级全新的外贸建站避坑自测与服务商防踩雷系统，包含智能评估、多维度技术参数对比与全方位陷阱筛查，敬请期待！
        </p>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              padding: "12px 30px",
              background: "linear-gradient(135deg, #0A4ECB 0%, #2563eb 100%)",
              color: "#ffffff",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 6px 18px rgba(10, 78, 203, 0.25)",
            }}
          >
            返回首页
          </Link>
          <Link
            href="/blog"
            style={{
              padding: "12px 30px",
              background: "rgba(10, 78, 203, 0.08)",
              color: "#0A4ECB",
              border: "1px solid rgba(10, 78, 203, 0.2)",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            浏览猫哥技术文章
          </Link>
        </div>
      </div>
    </main>
  );
}
