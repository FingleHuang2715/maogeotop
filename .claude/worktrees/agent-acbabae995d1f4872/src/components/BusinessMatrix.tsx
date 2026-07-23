"use client";
import React from "react";

export function DualEngineServices() {
  return (
    <section className="hero-ext-dual-engine-section" style={{ width: "100%", background: "#ffffff", padding: "6rem 0" }}>
      <div className="hero-ext-container">
        
        {/* ==================== 1. 顶部：双引擎服务引入区 ==================== */}
        <div className="hero-ext-header-area" style={{ marginBottom: "2.5rem" }}>
          <div className="hero-ext-title-group">
            <span className="hero-ext-kicker">CORE SERVICES</span>
            <h2 className="hero-ext-main-title">双引擎驱动，打造高询盘品牌出海独立站</h2>
          </div>
          <div className="hero-ext-intro-text">
            <p>
              主创猫哥将<strong>高水准定制设计</strong>与<strong>前沿 GEO 流量营销</strong>深度整合，打通出海闭环。我们的目的不仅是为您搭建一个极具公信力的数字资产窗口，更是确保您的网站在 AI 检索时代能够被各大模型精准抓取并高频引用。
            </p>
          </div>
        </div>

        {/* ==================== 2. 服务大卡片展示 (双星引擎) ==================== */}
        <div className="hero-ext-services-grid" style={{ marginBottom: 0 }}>
          
          {/* 卡片 A：全球定制化官网建设 */}
          <div className="hero-ext-service-card">
            <div className="hero-ext-service-header">
              <div className="hero-ext-service-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <h3 className="hero-ext-service-title">全球定制化官网建设</h3>
            </div>
            <p className="hero-ext-service-desc">
              依托香港理工大学 AI 推荐算法学术背景及超过 8 年的海外建站与优化经验，彻底摒弃千篇一律的廉价模板。基于用户交互路径与高转化率 CRO 架构 100% 独立量身定制，全面契合谷歌 E-E-A-T 规范，树立坚实的海外品牌公信力。
            </p>
            <div className="hero-ext-service-footer">
              <a href="https://maogeo.top/%e5%a4%96%e8%b4%b8%e5%bb%ba%e7%ab%99/" className="hero-ext-service-link" target="_blank" rel="noopener">
                <span>了解定制建站方案</span>
                <span className="hero-ext-arrow" aria-hidden="true">➔</span>
              </a>
            </div>
          </div>

          {/* 卡片 B：全球品牌出海流量营销 */}
          <div className="hero-ext-service-card">
            <div className="hero-ext-service-header">
              <div className="hero-ext-service-icon hero-ext-icon-alt" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"></path></svg>
              </div>
              <h3 className="hero-ext-service-title">全球品牌出海流量营销</h3>
            </div>
            <p className="hero-ext-service-desc">
              针对主流生成式搜索引擎优化（GEO, Generative Engine Optimization），深度穿透大语言模型抓取与检索增强生成（RAG）逻辑。自研 GEO 优化系统，让您的产品信息和技术卖点在谷歌 AI Overviews 及主流 LLMs 的回答中被大模型优先推荐并添加精准引用链接。
            </p>
            <div className="hero-ext-service-footer">
              <a href="https://maogeo.top/geo-seo%e4%bc%98%e5%8c%96/" className="hero-ext-service-link" target="_blank" rel="noopener">
                <span>一键开启 GEO 优化</span>
                <span className="hero-ext-arrow" aria-hidden="true">➔</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export function IndustryMatrix() {
  return (
    <section className="hero-ext-industry-section" style={{ background: "#ffffff", padding: "6rem 0" }}>
      <div className="hero-ext-container">
        
        {/* ==================== 3. 中部：服务行业矩阵 (Bento Grid) ==================== */}
        <div className="hero-ext-industry-area" style={{ borderTop: "none", paddingTop: 0 }}>
          <div className="hero-ext-industry-header">
            <span className="hero-ext-kicker">INDUSTRY MATRIX</span>
            <h3 className="hero-ext-industry-title">聚焦高净值出海赛道 · 专属定制经验</h3>
            <p className="hero-ext-industry-desc">以下行业均沉淀了猫哥丰富的定制设计与 SEO/GEO 优化实操策略，有效提升转化与询盘量</p>
          </div>

          <div className="hero-ext-bento-grid">
            
            {/* Bento 1: 家居生活与智能硬件 (Featured - Span 2) [互换到顶部] */}
            <div className="hero-ext-bento-item hero-ext-bento-featured">
              <div className="hero-ext-bento-badge">Featured</div>
              <h4 className="hero-ext-bento-title">家居生活与智能硬件</h4>
              <p className="hero-ext-bento-desc">
                高频智能电子与消费场景生活美学融合，突出产品差异化卖点和全功能场景演示。
              </p>
              <div className="hero-ext-bento-keywords">
                <span>智能扫地机器人</span>
                <span>轻奢拼装家具</span>
                <span>智能穿戴设备</span>
                <span>户外便携遮阳</span>
              </div>
            </div>

            {/* Bento 2: 时尚服装与高端纺织面料 (Featured - Span 2) [互换到顶部] */}
            <div className="hero-ext-bento-item hero-ext-bento-featured">
              <div className="hero-ext-bento-badge">Featured</div>
              <h4 className="hero-ext-bento-title">时尚服装与高端纺织面料</h4>
              <p className="hero-ext-bento-desc">
                极其注重感官视觉传达与面料细节质感，适合高客单价海外时尚买手站。
              </p>
              <div className="hero-ext-bento-keywords">
                <span>特种户外服饰</span>
                <span>可回收环保面料</span>
                <span>设计师女装</span>
                <span>高级定制配饰</span>
              </div>
            </div>

            {/* Bento 3: 生物医药与医疗 CRO (Normal - Span 1) */}
            <div className="hero-ext-bento-item">
              <h4 className="hero-ext-bento-title">生物医药与医疗 CRO</h4>
              <p className="hero-ext-bento-desc">
                符合严苛医疗安全与信息隐私要求，设计严谨、专业度极高的高信任感界面。
              </p>
              <div className="hero-ext-bento-keywords">
                <span>CRO研发平台</span>
                <span>数字诊断仪器</span>
                <span>生物科技</span>
              </div>
            </div>

            {/* Bento 4: 农业装备与现代农资 (Normal - Span 1) */}
            <div className="hero-ext-bento-item">
              <h4 className="hero-ext-bento-title">农业装备与现代农资</h4>
              <p className="hero-ext-bento-desc">
                聚焦现代立体化、智能化的农业技术及垂直品类农资出海。
              </p>
              <div className="hero-ext-bento-keywords">
                <span>植保无人机</span>
                <span>智能温室大棚</span>
                <span>重型拖拉机</span>
              </div>
            </div>

            {/* Bento 5: 工业设备与智能制造 (Featured - Span 2) [互换到下方，文字丰富充实] */}
            <div className="hero-ext-bento-item hero-ext-bento-featured">
              <div className="hero-ext-bento-badge">Featured</div>
              <h4 className="hero-ext-bento-title">工业设备与智能制造</h4>
              <p className="hero-ext-bento-desc">
                大重工业与精密装备出海，重点突破高技术门槛展示、多维参数检索与全球工程案例证明，结合行业词库深度优化，向海外大客户精准传递可靠的工业级品质与生产交付实力。
              </p>
              <div className="hero-ext-bento-keywords">
                <span>精密工业阀门</span>
                <span>智能仓储 AGV</span>
                <span>工业机器人</span>
                <span>精密激光切割</span>
                <span>CNC数控加工</span>
                <span>自动化装配线</span>
              </div>
            </div>

            {/* Bento 6: 新新能源与高新环保科技 (Featured - Span 2) [互换到下方，文字丰富充实] */}
            <div className="hero-ext-bento-item hero-ext-bento-featured">
              <div className="hero-ext-bento-badge">Featured</div>
              <h4 className="hero-ext-bento-title">新能源与高新环保科技</h4>
              <p className="hero-ext-bento-desc">
                契合全球低碳与 ESG 环保政策方向，专为海外采购商及政企大客户（B2G/B2B）搭建极简高品质数字资产，全方位展示技术资质认证、专利矩阵与全生命周期运维保障。
              </p>
              <div className="hero-ext-bento-keywords">
                <span>屋顶光伏发电</span>
                <span>锂电池储能舱</span>
                <span>工业水净化</span>
                <span>半导体生产设备</span>
                <span>碳中和解决方案</span>
                <span>智能微电网系统</span>
              </div>
            </div>

            {/* Bento 7: 宠物用品与生命健康 (Normal - Span 1) */}
            <div className="hero-ext-bento-item">
              <h4 className="hero-ext-bento-title">宠物用品与生命健康</h4>
              <p className="hero-ext-bento-desc">
                契合海外高阶宠物消费市场，突出宠物福利、生命关怀与无公害天然配方。
              </p>
              <div className="hero-ext-bento-keywords">
                <span>智能宠物喂食</span>
                <span>益智解压玩具</span>
                <span>中兽药保健液</span>
              </div>
            </div>

            {/* Bento 8: 奢侈品皮具与高级定制珠宝 (Normal - Span 1) */}
            <div className="hero-ext-bento-item">
              <h4 className="hero-ext-bento-title">奢侈品皮具与定制珠宝</h4>
              <p className="hero-ext-bento-desc">
                突出视觉溢价与轻奢艺术感，为手工皮具、高定珠宝、国潮银饰打造极高溢价的交互网站。
              </p>
              <div className="hero-ext-bento-keywords">
                <span>纯手工皮具包袋</span>
                <span>高级定制首饰</span>
                <span>设计师国潮银饰</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default function BusinessMatrix() {
  return (
    <>
      <DualEngineServices />
      <IndustryMatrix />
    </>
  );
}
