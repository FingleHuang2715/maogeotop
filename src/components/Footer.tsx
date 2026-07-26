"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mg-site-footer">
      <div className="mg-footer-container">
        
        {/* 第 1 列：品牌及价值 */}
        <div className="mg-footer-col mg-footer-about">
          <div style={{ marginBottom: '16px' }}>
            <img 
              src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721002042147.webp" 
              alt="猫哥建站 Logo" 
              style={{ height: '38px', width: 'auto', display: 'block' }}
            />
          </div>
          <p className="mg-footer-brand-desc">
            专注谷歌 SEO 优化和定制出海建站8年。猫哥网络科技基于先进的生成式引擎优化（GEO）理念，为外贸企业搭建被各大 AI 大模型和搜索引擎深度检索与引用的数字化资产。
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
            <li><Link href="/">网站首页</Link></li>
            <li><Link href="/geo-tools">GEO工具</Link></li>
            <li><Link href="/waimaojianzhan">外贸建站</Link></li>
            <li><Link href="/geo-seo-youhua">GEO/SEO优化</Link></li>
            <li><Link href="/server-recommendation">服务器推荐</Link></li>
            <li><Link href="/blog">技术专区</Link></li>
          </ul>
        </div>

        {/* 第 3 列：联系方式 */}
        <div className="mg-footer-col">
          <h4 className="mg-footer-title">联系我们</h4>
          <ul className="mg-footer-contact">
            <li>
              <strong>在线微信:</strong>
              <span className="mg-contact-highlight">maogeotop</span>
            </li>
            <li>
              <strong>官方邮箱:</strong>
              <span>2678586420@qq.com</span>
            </li>
            <li>
              <strong>工作时间:</strong>
              <span>周一至周日 9:00 - 22:00</span>
            </li>
          </ul>
        </div>

        {/* 第 4 列：猫哥微信二维码 */}
        <div className="mg-footer-col mg-footer-qr">
          <h4 className="mg-footer-title">扫码加微信</h4>
          <div className="mg-qr-box">
            <img 
              src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721003301773.webp" 
              alt="猫哥微信二维码" 
              style={{ width: '100px', height: '100px', display: 'block' }}
            />
          </div>
          <span className="mg-qr-sub">免费咨询 GEO 建站与 SEO 方案</span>
        </div>

      </div>

      {/* 🌟 友情链接区块 (Friend Links Section) */}
      <div className="mg-footer-friendlinks-wrap">
        <div className="mg-footer-friendlinks-container">
          <span className="mg-friendlinks-label">🔗 友情链接：</span>
          <div className="mg-friendlinks-list">
            <a href="https://geo.maogeo.top" target="_blank" rel="noopener noreferrer">猫哥GEO</a>
            <span className="mg-friendlinks-sep">|</span>
            <a href="https://hk.maogeo.top" target="_blank" rel="noopener noreferrer">猫哥建站香港区</a>
            <span className="mg-friendlinks-sep">|</span>
            <a href="https://maogeo.top" target="_blank" rel="noopener noreferrer">猫哥建站官网</a>
            <span className="mg-friendlinks-sep">|</span>
            <a target="_blank" title="51la网站统计" href="https://v6.51.la/land/KqyLKxdjr8HVgyyQ" rel="noopener noreferrer" className="mg-51la-link">
              <img src="https://sdk.51.la/icon/2-1.png" alt="51la网站统计" style={{ height: '16px', width: 'auto', verticalAlign: 'middle' }} />
            </a>
          </div>
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
              rel="nofollow noreferrer" 
              className="mg-icp-link"
            >
              粤ICP备2024338363号-2
            </a>
          </div>
          <div className="mg-footer-terms">
            <Link href="/privacy-policy">隐私政策</Link>
            <span>|</span>
            <Link href="/terms-of-service">服务条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
