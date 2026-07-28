"use client";

import { useEffect } from "react";
import { convertS2HK } from "@/lib/opencc";

export default function AutoTraditionalHK() {
  useEffect(() => {
    // 仅在 hk.maogeo.top 域名下自动将页面全量 UI 转换为香港繁体
    if (typeof window === "undefined") return;
    const isHKDomain = window.location.hostname.includes("hk.maogeo.top");
    if (!isHKDomain) return;

    // 改变 <html> 标签属性为 zh-HK
    document.documentElement.lang = "zh-HK";

    // 递归遍历所有文本节点并转换为地道香港繁体
    const translateNode = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim()) {
        node.nodeValue = convertS2HK(node.nodeValue);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        // 避开 script, style 等标签
        if (el.tagName === "SCRIPT" || el.tagName === "STYLE" || el.tagName === "NOSCRIPT") return;

        // 转换 placeholder, alt, title 属性
        if (el.getAttribute("placeholder")) {
          el.setAttribute("placeholder", convertS2HK(el.getAttribute("placeholder")!));
        }
        if (el.getAttribute("alt")) {
          el.setAttribute("alt", convertS2HK(el.getAttribute("alt")!));
        }
        if (el.getAttribute("title")) {
          el.setAttribute("title", convertS2HK(el.getAttribute("title")!));
        }

        for (let i = 0; i < node.childNodes.length; i++) {
          translateNode(node.childNodes[i]);
        }
      }
    };

    // 首次页面挂载转换
    translateNode(document.body);

    // 🌟 防抖延迟批量处理 DOM 变动，完全解压主线程 Style & Layout
    let timer: NodeJS.Timeout | null = null;
    const observer = new MutationObserver(() => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        translateNode(document.body);
      }, 150);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
