"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { copyWeChatAndShowModal } from "@/components/WeChatModal";

const navigationItems = [
  { href: "/", label: "首页", match: (path: string) => path === "/" },
  { href: "/geo-tools", label: "GEO工具", match: (path: string) => path === "/geo-tools" },
  { href: "/waimaojianzhan", label: "外贸建站", match: (path: string) => path === "/waimaojianzhan" },
  { href: "/geo-seo-youhua", label: "GEO/SEO优化", match: (path: string) => path === "/geo-seo-youhua" || path === "/web-design-seo" },
  { href: "/server-recommendation", label: "服务器推荐", match: (path: string) => path === "/server-recommendation" || path === "/host-recommendation" },
  { href: "/blog", label: "技术专区", match: (path: string) => path.startsWith("/blog") },
  { href: "/audit-tool", label: "建站避坑工具", match: (path: string) => path === "/audit-tool" },
];

export default function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 50;
        setIsScrolled((current) => (current === next ? current : next));
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("mg-menu-open", isMenuOpen);
    if (isMenuOpen) {
      requestAnimationFrame(() => navRef.current?.querySelector<HTMLElement>("a, button")?.focus());
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && isMenuOpen) {
        const controls = navRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"
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
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("mg-menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`mg-site-header ${isScrolled ? "scrolled" : ""}`} id="mgSiteHeader">
        <div className="mg-header-container">
          <Link href="/" className="mg-header-logo" aria-label="猫哥建站首页">
            <Image
              src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002042147.webp"
              alt="猫哥建站 Logo"
              width={711}
              height={150}
              priority
              sizes="(max-width: 900px) 114px, 122px"
              className="mg-header-logo-image"
            />
          </Link>

          <nav ref={navRef} id={menuId} className={`mg-header-nav ${isMenuOpen ? "is-open" : ""}`} aria-label="主导航">
            <ul className="mg-menu-list">
              {navigationItems.map((item) => (
                <li key={item.href} className={item.match(pathname) ? "current-menu-item" : ""}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li className="mg-mobile-consult-item">
                <button type="button" onClick={copyWeChatAndShowModal} className="mg-header-btn mg-mobile-consult-btn">
                  免费建站咨询
                </button>
              </li>
            </ul>
          </nav>

          <div className="mg-header-right-group">
            <form action="/blog" method="GET" className="mg-header-search-form" role="search">
              <input type="search" name="q" placeholder="搜索文章教程..." className="mg-header-search-input" aria-label="搜索文章教程" />
              <button type="submit" className="mg-header-search-btn" aria-label="提交搜索">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </button>
            </form>
            <button type="button" onClick={copyWeChatAndShowModal} className="mg-header-btn">
              免费建站咨询
            </button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className={`mg-burger-icon ${isMenuOpen ? "is-open" : ""}`}
            aria-label={isMenuOpen ? "关闭导航菜单" : "打开导航菜单"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="mg-burger-line" />
            <span className="mg-burger-line" />
            <span className="mg-burger-line" />
          </button>
        </div>
      </header>
      {isMenuOpen && <button type="button" className="mg-menu-backdrop" aria-label="关闭导航菜单" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
}
