"use client";
import React, { useState, useEffect } from "react";

export function copyWeChatAndShowModal(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  const wechatId = "maogeotop";
  navigator.clipboard.writeText(wechatId).then(() => {
    window.dispatchEvent(new CustomEvent("open-wechat-modal", { detail: { copied: true, wechatId } }));
  }).catch(() => {
    window.dispatchEvent(new CustomEvent("open-wechat-modal", { detail: { copied: false, wechatId } }));
  });
}

export default function WeChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [wechatId, setWechatId] = useState("maogeotop");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ wechatId?: string }>;
      if (customEvent.detail?.wechatId) {
        setWechatId(customEvent.detail.wechatId);
      }
      setIsOpen(true);
    };

    window.addEventListener("open-wechat-modal", handleOpen);
    return () => {
      window.removeEventListener("open-wechat-modal", handleOpen);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="mg-wechat-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="mg-wechat-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="mg-wechat-modal-close" onClick={() => setIsOpen(false)}>×</button>
        <div className="mg-wechat-modal-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', background: 'rgba(10, 78, 203, 0.08)', borderRadius: '50%', color: '#0A4ECB', margin: '0 auto 16px auto' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </div>
        <h3 className="mg-wechat-modal-title">客服微信号已成功复制！</h3>
        <div className="mg-wechat-modal-code-box">
          <span className="mg-wechat-modal-label">微信号：</span>
          <strong className="mg-wechat-modal-code">{wechatId}</strong>
        </div>
        <p className="mg-wechat-modal-tip">
          已自动复制至剪贴板，您可以直接打开微信，在搜索框中粘贴微信号 <strong>{wechatId}</strong> 添加猫哥客服好友。
        </p>
        <div className="mg-wechat-modal-actions">
          <button className="mg-wechat-modal-btn" onClick={() => setIsOpen(false)}>我知道了</button>
        </div>
      </div>
    </div>
  );
}
