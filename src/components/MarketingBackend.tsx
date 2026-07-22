"use client";
export default function MarketingBackend() {
  
  return (
    <section className="backend-cosmic" id="section-marketing-ideas">

  
  <div className="backend-cosmic__glow backend-cosmic__glow--left" aria-hidden="true"></div>
  <div className="backend-cosmic__glow backend-cosmic__glow--right" aria-hidden="true"></div>

  <div className="backend-cosmic__container">

    
    <div className="backend-cosmic__left">

      
      <div className="backend-cosmic__badge">
        <span className="backend-cosmic__badge-num">0.7</span>
        <span className="backend-cosmic__badge-text">智能GEO管理</span>
      </div>

      
      <h2 className="backend-cosmic__title">
        持续给外贸人<br />
        <span className="gradient-text">提供网站营销思路</span>
      </h2>

      
      <p className="backend-cosmic__desc">
        自研 <strong>GEO 优化系统</strong>深度融合 WordPress 后台，为您提供大模型抓取的全字段 SEO/GEO 诊断建议与原创内容智创引导。无需复杂的技术背景，即可帮助企业持续产出能够被 AI 大模型识别并引用的高质量网页内容。
      </p>

      
      <ul className="backend-cosmic__features" aria-label="GEO优化系统核心优势">
        <li className="backend-cosmic__feature-item">
          <span className="backend-cosmic__feature-icon" aria-hidden="true">⚡</span>
          <div className="backend-cosmic__feature-text">
            <strong>快速高效</strong>
            <span>AI 辅助内容提炼建议，后台逐字段提示，大幅提升内容收录速度。</span>
          </div>
        </li>
        <li className="backend-cosmic__feature-item">
          <span className="backend-cosmic__feature-icon" aria-hidden="true">🌱</span>
          <div className="backend-cosmic__feature-text">
            <strong>新手友好</strong>
            <span>针对买家心理学与搜索意图进行填表式引导，零门槛运营独立站。</span>
          </div>
        </li>
        <li className="backend-cosmic__feature-item">
          <span className="backend-cosmic__feature-icon" aria-hidden="true">🔍</span>
          <div className="backend-cosmic__feature-text">
            <strong>算法穿透</strong>
            <span>深度贴合大语言模型检索增强生成 (RAG) 机制，增加被 AI 检索引用的概率。</span>
          </div>
        </li>
      </ul>

      
      <div className="backend-cosmic__page-types" aria-label="支持的页面类型">
        <a href="https://maogeo.top/geo%e5%b7%a5%e5%85%b7/" className="backend-cosmic__page-tag backend-cosmic__page-tag--active">
          <span className="backend-cosmic__page-tag-dot" aria-hidden="true"></span>
          分类聚合页
        </a>
        <a href="https://maogeo.top/geo%e5%b7%a5%e5%85%b7/" className="backend-cosmic__page-tag">
          <span className="backend-cosmic__page-tag-dot" aria-hidden="true"></span>
          产品详情页
        </a>
        <a href="https://maogeo.top/geo%e5%b7%a5%e5%85%b7/" className="backend-cosmic__page-tag">
          <span className="backend-cosmic__page-tag-dot" aria-hidden="true"></span>
          新闻文章页
        </a>
      </div>

    </div>

    
    <div className="backend-cosmic__right" aria-label="GEO优化系统后台管理面板截图展示">

      
      <div className="backend-cosmic__browser">

        
        <div className="backend-cosmic__browser-bar">
          <span className="backend-cosmic__browser-dot backend-cosmic__browser-dot--red" aria-hidden="true"></span>
          <span className="backend-cosmic__browser-dot backend-cosmic__browser-dot--yellow" aria-hidden="true"></span>
          <span className="backend-cosmic__browser-dot backend-cosmic__browser-dot--green" aria-hidden="true"></span>
          <span className="backend-cosmic__browser-url" aria-hidden="true">yoursite.com/wp-admin/geo-system</span>
        </div>

        
        <div className="backend-cosmic__image-viewport" onClick={() => { if (typeof window !== "undefined" && window.openGscLightbox) window.openGscLightbox('https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235442930.webp'); }}>
          <img src="https://cdn.maogeo.top/wp-content/uploads/2026/07/20260715235442930.webp" className="backend-cosmic__img-content" alt="GEO优化系统后台操作面板" />
          <div className="backend-cosmic__zoom-tip">🔍 点击查看高清原图</div>
        </div>

      </div>

      
      <div className="backend-cosmic__float-tag backend-cosmic__float-tag--top" aria-hidden="true">
        ✓ 自动 GEO/SEO 诊断提示
      </div>
      <div className="backend-cosmic__float-tag backend-cosmic__float-tag--bottom" aria-hidden="true">
        ✓ RAG 算法友好度评估
      </div>

    </div>

  </div>
</section>
  );
}
