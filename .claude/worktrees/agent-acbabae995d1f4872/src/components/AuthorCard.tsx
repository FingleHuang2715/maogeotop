"use client";

import React, { useState } from "react";

interface AuthorCardProps {
  className?: string;
}

export default function AuthorCard({ className = "" }: AuthorCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyWeChat = () => {
    const wechatId = "maogeotop";
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(wechatId);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = wechatId;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Copy failed", err);
      }
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className={`mg-zhihu-author-card ${className}`}>
      {/* 顶部主理人基本信息 */}
      <div className="mg-ac-header">
        <div className="mg-ac-avatar-wrap">
          <img
            src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002037295.webp"
            alt="猫哥头像"
            className="mg-ac-avatar-img"
          />
        </div>
        <div className="mg-ac-info">
          <div className="mg-ac-name-row">
            <span className="mg-ac-name">猫哥</span>
            <span className="mg-ac-rank-badge" title="全栈架构与 GEO 专家">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" style={{ marginRight: 3 }}>
                <path d="M4.85 0.76C4.9 0.63 5.09 0.63 5.15 0.76L8.56 8.67C8.6 8.77 8.53 8.89 8.41 8.89H1.59C1.47 8.89 1.39 8.77 1.44 8.67L4.85 0.76Z" fill="#0A4ECB" />
                <path d="M0 2.38C-0.02 2.23 0.17 2.14 0.28 2.25L4.88 7.02C4.95 7.09 5.05 7.09 5.12 7.02L9.72 2.25C9.83 2.14 10.02 2.23 10 2.38L9.16 9.2C9.15 9.28 9.08 9.34 9 9.34H1C0.92 9.34 0.85 9.28 0.84 9.2L0 2.38Z" fill="#3B82F6" />
              </svg>
              LV.10 架构师
            </span>
          </div>
          <div className="mg-ac-position">企业建站 · GEO优化 · SEO专家</div>
        </div>
      </div>

      {/* 数据指标统计栏 */}
      <div className="mg-ac-stats-container">
        <div className="mg-ac-stat-item">
          <div className="mg-ac-stat-count">1500+</div>
          <div className="mg-ac-stat-label">交付案例</div>
        </div>
        <div className="mg-ac-stat-divider" />
        <div className="mg-ac-stat-item">
          <div className="mg-ac-stat-count">8年+</div>
          <div className="mg-ac-stat-label">深耕经验</div>
        </div>
        <div className="mg-ac-stat-divider" />
        <div className="mg-ac-stat-item">
          <div className="mg-ac-stat-count">99.99%</div>
          <div className="mg-ac-stat-label">满意度</div>
        </div>
      </div>

      {/* 核心优势精简点列表 */}
      <div className="mg-ac-highlights">
        <div className="mg-ac-highlight-item">
          <span className="mg-ac-hl-icon-svg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </span>
          <div className="mg-ac-hl-text">
            <strong>QS50 硕博团队：</strong>核心技术团队毕业于 QS50 顶尖名校，架构能力出众。
          </div>
        </div>

        <div className="mg-ac-highlight-item">
          <span className="mg-ac-hl-icon-svg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
            </svg>
          </span>
          <div className="mg-ac-hl-text">
            <strong>8年+ 深耕出海：</strong>专注企业建站、GEO 提炼与谷歌 SEO 实战提效。
          </div>
        </div>

        <div className="mg-ac-highlight-item">
          <span className="mg-ac-hl-icon-svg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </span>
          <div className="mg-ac-hl-text">
            <strong>1500+ 交付案例：</strong>服务涵盖多行业出海品牌，老客户高转介绍。
          </div>
        </div>

        <div className="mg-ac-highlight-item">
          <span className="mg-ac-hl-icon-svg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A4ECB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12l4 6-10 12L2 9z" />
              <path d="M11 3v18" />
              <path d="M2 9h20" />
            </svg>
          </span>
          <div className="mg-ac-hl-text">
            <strong>99.99% 满意度：</strong>100% 定制营销视觉与 CRO 转化率优化。
          </div>
        </div>
      </div>

      {/* 底部复制微信号操作按钮 */}
      <div className="mg-ac-actions">
        <button
          type="button"
          onClick={handleCopyWeChat}
          className={`mg-ac-btn mg-ac-copy-btn ${copied ? "is-copied" : ""}`}
          title="点击复制猫哥微信号: maogeotop"
        >
          {copied ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              已复制微信号 maogeotop
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              私信咨询 (点击复制微信)
            </>
          )}
        </button>
      </div>
    </div>
  );
}
