"use client";

import { copyWeChatAndShowModal } from "@/components/WeChatModal";
import React from "react";
import "@/styles/WhyChooseMaoge.css";
import "@/styles/WhyChooseYtCaptain.css";

export default function WaimaojianzhanClient() {
  return (
    <main className="why-yt-captain-root" >
      <section className="srv-sec1-hero" id="why-section-hero" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.82)), url('https://cdn.maogeo.top/wp-content/uploads/2026/07/20260721010110868.webp')", backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="srv-sec1-hero-glow" aria-hidden="true"></div>
        <div className="srv-sec1-container">
          
          <div className="srv-hero-grid">
            <div className="srv-hero-left">
              <span className="srv-hero-eyebrow">外贸营销与 GEO 建站服务 · 猫哥 8年+ 实战</span>
              <h1 className="srv-sec1-hero-title">
                专业外贸营销与<br />
                <span className="gradient-text">GEO 建站服务</span>
              </h1>
              <p className="srv-sec1-hero-desc">
                让外贸独立站成为被谷歌 AI 检索并引用的数字化资产。打破千篇一律模板站困境，深谙海外买家询盘转化逻辑，打造 24 小时出海金牌推销员。
              </p>
              
              <ul className="srv-hero-meta-list">
                <li className="srv-hero-meta-item">✓ 8年+ 深耕外贸建站与谷歌 SEO</li>
                <li className="srv-hero-meta-item">✓ 1500+ 交付项目及出海案例</li>
                <li className="srv-hero-meta-item">✓ 99.99% 客户满意度与超高复购</li>
              </ul>

              <div className="srv-hero-actions">
                <a href="#" onClick={copyWeChatAndShowModal} className="srv-btn-primary">微信咨询：maogeotop ➔</a>
                <a href="mailto:2678586420@qq.com" className="srv-btn-secondary">联系邮箱：2678586420@qq.com</a>
              </div>
            </div>

            <aside className="srv-hero-summary-card">
              <h2 className="srv-summary-title">💡 为什么选择猫哥？</h2>
              <ul className="srv-summary-list">
                <li className="srv-summary-item">
                  <strong>深度定制非模板：</strong>拒绝工厂流水线垃圾源码，整站自研轻量极速架构。
                </li>
                <li className="srv-summary-item">
                  <strong>SEO 与 GEO 双引擎：</strong>上线即自带结构化 Schema 数据与 AI 语料收录埋点。
                </li>
                <li className="srv-summary-item">
                  <strong>转化率驱动：</strong>独创 B2B 出海买家心理学动线设计，询盘量显著提升。
                </li>
              </ul>
            </aside>
          </div>

        </div>
      </section>

      {/* 2. 8大核心对比 */}
      <section className="srv-sec2-matrix" id="why-section-compare">
        <div className="srv-sec2-container">
          
          <header className="srv-matrix-header">
            <span className="srv-sec2-subtitle">PROS & CONS COMPARE</span>
            <h2 className="srv-sec2-title">传统外贸建站 vs <span className="gradient-text">猫哥 GEO 营销型独立站</span></h2>
            <p className="srv-sec2-desc">拒绝只看表面好看的防盗版花架子，真正以搜索曝光、AI 引用与转化询盘为最终交付目标。</p>
          </header>

          <div className="srv-matrix-grid">
            {/* 对比项 1 */}
            <div className="srv-matrix-card traditional">
              <div className="srv-card-badge bad">传统外贸模板站</div>
              <h3 className="srv-card-title">臃肿模板与代码垃圾</h3>
              <p className="srv-card-desc">使用 Elementor / Avada 等通用模板强行堆砌，首屏加载需 5~10 秒，跑分一片惨红，谷歌根本不给排名。</p>
            </div>
            <div className="srv-matrix-card maoge">
              <div className="srv-card-badge good">猫哥 GEO 方案</div>
              <h3 className="srv-card-title">自研极速架构 (PageSpeed 95+)</h3>
              <p className="srv-card-desc">纯净代码无多余插件，TTFB 响应低于 0.2 秒，完美通过 Google Core Web Vitals 考核。</p>
            </div>

            {/* 对比项 2 */}
            <div className="srv-matrix-card traditional">
              <div className="srv-card-badge bad">传统外贸模板站</div>
              <h3 className="srv-card-title">忽视 GEO 与 AI 提炼</h3>
              <p className="srv-card-desc">缺乏 ChatGPT / DeepSeek / Copilot 等生成式 AI 搜索的结构化数据埋点，在 AI 检索时代彻底隐形。</p>
            </div>
            <div className="srv-matrix-card maoge">
              <div className="srv-card-badge good">猫哥 GEO 方案</div>
              <h3 className="srv-card-title">原生 GEO AI 引用算法优化</h3>
              <p className="srv-card-desc">全站注入 JSON-LD 语义实体与规则化提取标签，优先被 AI 搜索引擎作为权威出处抓取并引用推荐。</p>
            </div>

            {/* 对比项 3 */}
            <div className="srv-matrix-card traditional">
              <div className="srv-card-badge bad">传统外贸模板站</div>
              <h3 className="srv-card-title">断层式交付无售后</h3>
              <p className="srv-card-desc">网站建好打包丢给客户，后续如何更新、如何做 SEO 优化完全不管，网站直接沦为死站。</p>
            </div>
            <div className="srv-matrix-card maoge">
              <div className="srv-card-badge good">猫哥 GEO 方案</div>
              <h3 className="srv-card-title">全套 SEO 陪跑与技术保障</h3>
              <p className="srv-card-desc">提供全套后台培训教程、关键词策略指导与安全运维护航，陪伴独立站长效产生询盘价值。</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. 建站流程 6 大步骤 */}
      <section className="srv-sec3-process" id="why-section-process">
        <div className="srv-sec3-container">
          <header className="srv-sec3-header">
            <span className="srv-sec3-subtitle">STANDARD WORKFLOW</span>
            <h2 className="srv-sec3-title">严谨规范的 <span className="gradient-text">6 步高标准建站交付流程</span></h2>
          </header>

          <ol className="srv-process-timeline">
            <li className="srv-process-step">
              <span className="srv-step-num">01</span>
              <h3 className="srv-step-title">需求调研与关键词规划</h3>
              <p className="srv-step-desc">深度挖掘行业核心词与长尾转化词，定好站点架构与 SEO 埋点基调。</p>
            </li>
            <li className="srv-process-step">
              <span className="srv-step-num">02</span>
              <h3 className="srv-step-title">高保真原型与动线设计</h3>
              <p className="srv-step-desc">规划 B2B 买家信任动线，设计高留存、高转化的视觉原型图。</p>
            </li>
            <li className="srv-process-step">
              <span className="srv-step-num">03</span>
              <h3 className="srv-step-title">前端极速代码开发</h3>
              <p className="srv-step-desc">基于 Next.js / Tailwind 自研开发，适配全终端响应式与极速加载。</p>
            </li>
            <li className="srv-process-step">
              <span className="srv-step-num">04</span>
              <h3 className="srv-step-title">GEO / SEO 结构化部署</h3>
              <p className="srv-step-desc">注入 Schema 结构化数据、OpenGraph 社交标记以及 AI 提炼规则。</p>
            </li>
            <li className="srv-process-step">
              <span className="srv-step-num">05</span>
              <h3 className="srv-step-title">PageSpeed 性能终极调优</h3>
              <p className="srv-step-desc">压缩图片、优化 CDN 分发与缓存头，确保谷歌性能测试达 90+ 满分分值。</p>
            </li>
            <li className="srv-process-step">
              <span className="srv-step-num">06</span>
              <h3 className="srv-step-title">上线部署与培训交付</h3>
              <p className="srv-step-desc">协助解析域名、配置 HTTPS 证书，提交 GSC 索引并交付后台使用指南。</p>
            </li>
          </ol>
        </div>
      </section>

      {/* 4. 底部 CTA 行动呼吁 */}
      <section className="srv-sec4-cta" id="why-section-cta">
        <div className="srv-sec4-container">
          <h2 className="srv-cta-title">准备好开启您的 <span className="gradient-text">高转化出海独立站</span> 了吗？</h2>
          <p className="srv-cta-desc">告别低效无询盘的模板站，让每一位访问者都转化为真实的高意向海外买家。</p>
          <div className="srv-cta-btns">
            <a href="#" onClick={copyWeChatAndShowModal} className="srv-btn-primary large">立即预约建站诊断 (微信：maogeotop) ➔</a>
          </div>
        </div>
      </section>
    </main>
  );
}
