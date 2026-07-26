"use client";

import React, { useEffect, useState } from "react";
import { copyWeChatAndShowModal } from "@/components/WeChatModal";

export default function FloatingContactBar() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 300;
        setShowToTop((current) => (current === next ? current : next));
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="mg-floating-contact-bar" aria-label="联系与回到顶部">
      <div className="mg-fc-item mg-fc-qr">
        <button type="button" className="mg-fc-btn" aria-label="查看微信二维码">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
        </button>
        <div className="mg-fc-popover mg-fc-qr-popover">
          <div className="mg-fc-qr-box">
            <img src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721003301773.webp" alt="猫哥微信二维码" width="300" height="300" loading="lazy" className="mg-fc-qr-img" />
          </div>
          <div className="mg-fc-qr-text"><strong>扫码添加猫哥微信</strong><span>微信号：maogeotop</span></div>
          <div className="mg-fc-arrow" />
        </div>
      </div>

      <div className="mg-fc-item mg-fc-wechat">
        <button type="button" onClick={copyWeChatAndShowModal} className="mg-fc-btn mg-fc-pulse-btn" aria-label="添加猫哥微信">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
        </button>
        <div className="mg-fc-popover">
          <div className="mg-fc-title">微信咨询</div>
          <div className="mg-fc-detail">maogeotop</div>
          <button type="button" className="mg-fc-action-btn" onClick={copyWeChatAndShowModal}>复制并打开提示</button>
          <div className="mg-fc-arrow" />
        </div>
      </div>

      <div className="mg-fc-item mg-fc-email">
        <a href="mailto:2678586420@qq.com" className="mg-fc-btn" aria-label="发送邮件">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
        </a>
        <div className="mg-fc-popover">
          <div className="mg-fc-title">官方邮箱</div>
          <div className="mg-fc-detail">2678586420@qq.com</div>
          <a href="mailto:2678586420@qq.com" className="mg-fc-action-btn">直接发送邮件</a>
          <div className="mg-fc-arrow" />
        </div>
      </div>

      {showToTop && (
        <div className="mg-fc-item mg-fc-totop">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mg-fc-btn mg-fc-top-btn" aria-label="回到顶部">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15" /></svg>
          </button>
        </div>
      )}
    </aside>
  );
}
