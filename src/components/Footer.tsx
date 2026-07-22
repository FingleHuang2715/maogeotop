"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mg-site-footer">
      <div className="mg-footer-container">
        
        {/* 第 1 列：品牌及价值 */}
        <div className="mg-footer-col mg-footer-about">
          <div style={{ marginBottom: '14px' }}>
            <img 
              src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002042147.webp" 
              alt="猫哥建站 Logo" 
              style={{ height: '38px', width: 'auto', display: 'block' }}
            />
          </div>
          <p className="mg-footer-brand-desc">
            专注谷歌 SEO 优化和定制出海建站8年。猫哥网络科技基于先进的生成式引擎优化（GEO）理念，为外贸企业搭建被各大 AI 大模型和搜索引擎深度检索与引用的数字化数字资产。
          </p>
          <div className="mg-footer-social">
            <span className="mg-eeat-badge">✓ 谷歌官方推荐</span>
            <span className="mg-eeat-badge">✓ 100% 交付率</span>
          </div>
        </div>

        {/* 第 2 列：快捷导航 */}
        <div className="mg-footer-col">
          <h4 className="mg-footer-title">快捷导航</h4>
                              <ul className="mg-footer-links">
            <li>
              <Link href="/">网站首页</Link>
            </li>
            <li>
              <Link href="/geo-tools">GEO工具</Link>
            </li>
            <li>
              <Link href="/waimaojianzhan">外贸建站页面</Link>
            </li>
            <li>
              <Link href="/geo-seo-youhua">GEO/SEO优化</Link>
            </li>
            <li>
              <Link href="/server-recommendation">服务器推荐</Link>
            </li>
            <li>
              <Link href="/blog">技术专区专栏</Link>
            </li>
          </ul>
        </div>

        {/* 第 3 列：联系方式 */}
        <div className="mg-footer-col">
          <h4 className="mg-footer-title">联系我们</h4>
          <ul className="mg-footer-contact">
            <li>
              <strong>在线微信:</strong>
              <span style={{ color: "var(--blue-bright, #1b63e8)", fontWeight: 700 }}>maogeotop</span>
            </li>
            <li>
              <strong>官方邮箱:</strong>
              <span>2678586420@qq.com</span>
            </li>
            <li>
              <strong>工作时间:</strong>
              <span style={{ color: "#7a7a9a" }}>周一至周日 9:00 - 22:00</span>
            </li>
          </ul>
        </div>

        {/* 第 4 列：猫哥微信二维码 */}
        <div className="mg-footer-col mg-footer-qr" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h4 className="mg-footer-title">扫码加微信</h4>
          <div style={{ background: '#ffffff', padding: '6px', border: '1px solid rgba(10, 78, 203, 0.15)', borderRadius: '0 !important' }}>
            <img 
              src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721003301773.webp" 
              alt="猫哥微信二维码" 
              style={{ width: '105px', height: '105px', display: 'block', borderRadius: '0 !important' }}
            />
          </div>
          <span style={{ fontSize: '11px', color: '#7a7a9a', marginTop: '6px' }}>扫一扫 免费咨询GEO建站</span>
        </div>

      </div>

      {/* 底部版权和ICP备案号栏 */}
      <div className="mg-footer-bottom">
        <div className="mg-footer-bottom-container">
          <div className="mg-footer-copy">
            &copy; {new Date().getFullYear()} 猫哥网络科技. All Rights Reserved.
            <a 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="nofollow" 
              style={{ color: "#7a7a9a", textDecoration: "none", marginLeft: "15px" }}
            >
              粤ICP备2024338363号-2
            </a>
          </div>
          <div className="mg-footer-extra-links" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Link href="/privacy-policy" style={{ color: "#7a7a9a", textDecoration: "none" }}>隐私政策</Link>
            <span>|</span>
            <Link href="/terms-of-service" style={{ color: "#7a7a9a", textDecoration: "none" }}>使用条款</Link>
            <span>|</span>
            <Link href="/sitemap" style={{ color: "#7a7a9a", textDecoration: "none" }}>站点地图</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
