"use client";

import React, { useEffect, useId, useRef, useState } from "react";

interface WeChatEventDetail {
  copied?: boolean;
  wechatId?: string;
}

function fallbackCopy(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textArea);
  return copied;
}

export async function copyWeChatAndShowModal(e?: React.MouseEvent) {
  e?.preventDefault();
  const wechatId = "maogeotop";
  let copied = false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(wechatId);
      copied = true;
    } else {
      copied = fallbackCopy(wechatId);
    }
  } catch {
    copied = false;
  }

  window.dispatchEvent(new CustomEvent<WeChatEventDetail>("open-wechat-modal", { detail: { copied, wechatId } }));
}

export default function WeChatModal() {
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [wechatId, setWechatId] = useState("maogeotop");
  const [copied, setCopied] = useState(false);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const detail = (event as CustomEvent<WeChatEventDetail>).detail;
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setWechatId(detail?.wechatId || "maogeotop");
      setCopied(Boolean(detail?.copied));
      setIsOpen(true);
    };
    window.addEventListener("open-wechat-modal", handleOpen);
    return () => window.removeEventListener("open-wechat-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key === "Tab") {
        const dialog = closeButtonRef.current?.closest<HTMLElement>("[role='dialog']");
        const controls = dialog?.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex='-1'])"
        );
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="mg-wechat-modal-overlay" onMouseDown={closeModal}>
      <section
        className="mg-wechat-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button ref={closeButtonRef} type="button" className="mg-wechat-modal-close" onClick={closeModal} aria-label="关闭微信咨询弹窗">×</button>
        <div className="mg-wechat-modal-icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        </div>
        <p className="mg-wechat-modal-kicker">WECHAT CONTACT</p>
        <h2 id={titleId} className="mg-wechat-modal-title">{copied ? "微信号已复制" : "添加猫哥微信"}</h2>
        <div className="mg-wechat-modal-code-box">
          <span className="mg-wechat-modal-label">微信号</span>
          <strong className="mg-wechat-modal-code">{wechatId}</strong>
        </div>
        <p id={descriptionId} className="mg-wechat-modal-tip">
          {copied ? "打开微信，在搜索框粘贴上方微信号即可添加。" : "浏览器未允许自动复制，请长按或选择上方微信号后手动复制。"}
        </p>
        <button type="button" className="mg-wechat-modal-btn" onClick={closeModal}>我知道了</button>
      </section>
    </div>
  );
}
