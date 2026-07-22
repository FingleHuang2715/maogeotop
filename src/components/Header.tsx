"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { copyWeChatAndShowModal } from "@/components/WeChatModal";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleWechatCopy = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    copyWeChatAndShowModal(e);
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      triggerToast("已复制微信，请打开微信app添加。");
    } catch (err) {
      triggerToast("复制失败，请手动添加微信：" + text);
    }
    document.body.removeChild(textArea);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`mg-site-header ${isScrolled ? "scrolled" : ""}`} id="mgSiteHeader">
        <div className="mg-header-container">
          
          {/* 品牌 Logo 预留区 */}
          <div className="mg-header-logo-container">
            <Link href="/" className="mg-header-logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002042147.webp" 
                alt="猫哥建站 Logo" 
                style={{ height: '42px', width: 'auto', display: 'block' }}
              />
            </Link>
          </div>

          {/* 纯 CSS 汉堡菜单复选框 (隐藏) */}
          <input type="checkbox" id="mgMenuToggle" className="mg-menu-toggle" />

          {/* 动态菜单结构还原 */}
                    {/* 动态菜单结构还原 */}
                    {/* 动态菜单结构还原 */}
                    {/* 动态菜单结构 (百度与谷歌 SEO 最优 URL) */}
          <nav className="mg-header-nav">
            <ul className="mg-menu-list">
              <li className={pathname === "/" ? "current-menu-item" : ""}>
                <Link href="/">首页</Link>
              </li>
              <li className={pathname === "/geo-tools" || pathname.includes("geo%e5%b7%a5%e5%85%b7") ? "current-menu-item" : ""}>
                <Link href="/geo-tools">GEO工具</Link>
              </li>
              <li className={pathname === "/waimaojianzhan" || pathname.includes("%e5%a4%96%e8%b4%b8%e5%bb%ba%e7%ab%99") ? "current-menu-item" : ""}>
                <Link href="/waimaojianzhan">外贸建站</Link>
              </li>
              <li className={pathname === "/geo-seo-youhua" || pathname === "/web-design-seo" || pathname.includes("geo-seo%e4%bc%98%e5%8c%96") ? "current-menu-item" : ""}>
                <Link href="/geo-seo-youhua">GEO/SEO优化</Link>
              </li>
              <li className={pathname === "/server-recommendation" || pathname === "/host-recommendation" || pathname.includes("%e6%9c%8d%e5%8a%a1%e5%99%a8%e6%8e%a8%e8%8d%90") ? "current-menu-item" : ""}>
                <Link href="/server-recommendation">服务器推荐</Link>
              </li>
              <li className={pathname.startsWith("/blog") ? "current-menu-item" : ""}>
                <Link href="/blog">技术专区</Link>
              </li>
              <li className={pathname === "/audit-tool" || pathname.includes("%e5%bb%ba%e7%ab%99%e9%81%bf%e5%9d%91%e5%b7%a5%e5%85%b7") ? "current-menu-item" : ""}>
                <Link href="/audit-tool">建站避坑工具</Link>
              </li>
            </ul>
          </nav>

          {/* 右侧动作按钮 */}
                    {/* 右侧动作按钮与页眉搜索栏 */}
          <div className="mg-header-right-group" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            
            {/* 页眉搜索栏 */}
            <form action="/blog" method="GET" className="mg-header-search-form">
              <input 
                type="text" 
                name="q" 
                placeholder="搜索文章教程..." 
                className="mg-header-search-input"
              />
              <button type="submit" className="mg-header-search-btn" aria-label="搜索">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
            </form>

            <button onClick={handleWechatCopy} className="mg-header-btn">
              免费建站咨询
            </button>
          </div>

          {/* 手机汉堡按钮图标 */}
          <label htmlFor="mgMenuToggle" className="mg-burger-icon">
            <span className="mg-burger-line"></span>
            <span className="mg-burger-line"></span>
            <span className="mg-burger-line"></span>
          </label>

        </div>
      </header>

      {/* 弹窗 Toast */}
      <div className={`hero-toast-el ${showToast ? "show" : ""}`}>
        {toastMessage}
      </div>
    </>
  );
}
