"use client";

import { copyWeChatAndShowModal } from "@/components/WeChatModal";
import React from "react";
import "@/styles/WhyChooseMaoge.css";
import "@/styles/WhyChooseYtCaptain.css";


export default function WhyChooseYtCaptainPage() {
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
              <ul className="srv-summary-list" style={{ gap: '0.8rem' }}>
                <li>
                  <strong>QS50 顶尖名校硕博团队</strong>：核心技术团队毕业于 QS50 顶尖名校，技术深度与架构能力无可比拟。
                </li>
                <li>
                  <strong>8年+ 深耕经验</strong>：专注谷歌 SEO 优化与定制外贸建站，技术实力由谷歌排名直接证明。
                </li>
                <li>
                  <strong>1500+ 交付案例</strong>：服务涵盖多行业出海品牌，大部分源于老客户转介绍与推荐。
                </li>
                <li>
                  <strong>99.99% 客户满意度</strong>：100% 定制化营销视觉排版，做更好的用户体验与询盘转化率（CRO）优化。
                </li>
              </ul>
            </aside>
          </div>

        </div>
      </section>

      <section className="why-section3">
        <div className="why-section3-container">
          <div className="why-section3-header">
            <span className="why-section3-tag">核心对比与优势</span>
            <h2 className="why-section3-title">为什么必须做<span className="gradient-text">外贸营销型网站</span>？</h2>
            <p className="why-section3-subtitle">相比传统的模板站与简单展示站，营销型网站是您在海外市场的24小时“金牌推销员”</p>
          </div>
          
          <div className="why-section3-grid">
            <div className="why-section3-card">
              <div className="why-section3-card-num">01</div>
              <div className="why-section3-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h4 className="why-section3-card-title">传递全面的“差异化”内容</h4>
              <p className="why-section3-card-desc">打破千篇一律的产品罗列，深入挖掘并多维度展示公司的差异化核心竞争优势、技术壁垒与出海资质，快速建立海外信任度。</p>
            </div>
            
            <div className="why-section3-card">
              <div className="why-section3-card-num">02</div>
              <div className="why-section3-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h4 className="why-section3-card-title">深谙询盘转化（CRO）模型</h4>
              <p className="why-section3-card-desc">页面板块设计完全基于海外采购商决策逻辑，科学配置黄金转化通道、引导性文案与无阻力表单，大幅提升访问到询盘的转化比例。</p>
            </div>
            
            <div className="why-section3-card">
              <div className="why-section3-card-num">03</div>
              <div className="why-section3-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h4 className="why-section3-card-title">国际化设计风格精准抓人</h4>
              <p className="why-section3-card-desc">拒绝过时的审美，采用符合欧美等海外市场审美习惯的高端简约风格。色彩与排版对比鲜明，让买家进入网站第一秒即被视觉亮点吸引。</p>
            </div>
            
            <div className="why-section3-card">
              <div className="why-section3-card-num">04</div>
              <div className="why-section3-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4 className="why-section3-card-title">化身全天候“金牌推销员”</h4>
              <p className="why-section3-card-desc">网站不仅是线上名片，更是自动化获客系统。通过契合谷歌最新AI（GEO）架构的页面布局，让网页更容易被谷歌大量检索并收录，主动获取精准询盘。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section4">
        <div className="why-section4-container">
          <div className="why-section4-header">
            <span className="why-section4-tag">核心技术细节</span>
            <h2 className="why-section4-title">猫哥外贸建站 <span className="gradient-text">15 大核心技术优势</span></h2>
            <p className="why-section4-subtitle">不仅仅做设计，更是为您搭建一套符合谷歌最新 AI 搜索算法的高性能数字化获客系统</p>
          </div>
          
          <div className="why-section4-grid">
            <div className="why-section4-item">
              <div className="why-section4-item-icon">01</div>
              <h4 className="why-section4-item-title">高端品牌化定制 UI 设计与交互</h4>
              <p className="why-section4-item-desc">无损复刻国际前沿设计风格，完美接入 GSAP 动效物理引擎。用流畅的微交互与极具视觉冲击力的排版建立海外买家的专业信任感。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">02</div>
              <h4 className="why-section4-item-title">超高性能的下一代极速架构</h4>
              <p className="why-section4-item-desc">采用最先进的前后端解耦建站技术，网站无须进行繁琐的后期插件优化，谷歌 Core Web Vitals 测速分数即可稳定达到 90+ 绿标区间。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">03</div>
              <h4 className="why-section4-item-title">军工级系统安全与 10 年维保承诺</h4>
              <p className="why-section4-item-desc">安全性能拉满，从底层隔离代码漏洞。网站稳定运行 10 年不出任何致命故障，全网唯一敢在合同里承诺 10 年维保支持的服务商。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">04</div>
              <h4 className="why-section4-item-title">高弹性的百万人高并发承载能力</h4>
              <p className="why-section4-item-desc">传统网站架构在流量突增或遭受恶意攻击时需要高昂的服务器升级配置。猫哥通过边缘计算分发，普通服务器亦能轻松支持百万并发流量，降本增效。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">05</div>
              <h4 className="why-section4-item-title">符合 AI 的底层 SEO 结构基因</h4>
              <p className="why-section4-item-desc">无须依赖第三方臃肿的 SEO 插件。建站时即为所有页面部署规范的 HTML5 结构、内链锚文本和 TDK 规范，天然契合 Google SEO 抓取逻辑。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">06</div>
              <h4 className="why-section4-item-title">全面 SEO/GEO 关键词及语义布局</h4>
              <p className="why-section4-item-desc">全面覆盖大语言模型（GEO）抓取和结构化数据设计，进行精准的核心词与长尾词语义网络规划，让页面在大模型检索中被高权重引用。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">07</div>
              <h4 className="why-section4-item-title">100% 定制外贸网站手工设计</h4>
              <p className="why-section4-item-desc">根据您的行业特性和目标国家进行 1-to-1 个性化视觉创意，绝不使用套版，利于突显高溢价品牌出海形象。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">08</div>
              <h4 className="why-section4-item-title">自适应多端响应式架构</h4>
              <p className="why-section4-item-desc">完美适配电脑、平板与移动端。特别针对海外移动流量的屏幕手势和触控排版进行调优，锁死移动端流量高转化率。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">09</div>
              <h4 className="why-section4-item-title">标配 SSL 安全加密证书</h4>
              <p className="why-section4-item-desc">全站默认部署 HTTPS 加密，保障外贸数据传输保密性，消除谷歌浏览器“不安全”标识警告，反哺网站排名权重。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">10</div>
              <h4 className="why-section4-item-title">图片 Alt 语义标签与极速优化</h4>
              <p className="why-section4-item-desc">自动或支持手动配置图片 Alt 属性，方便谷歌图片搜索进行索引，结合 WebP 压缩与懒加载技术，极速加载页面。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">11</div>
              <h4 className="why-section4-item-title">CRO 营销转化路径深度设计</h4>
              <p className="why-section4-item-desc">依据买家漏斗决策逻辑设计交互锚点，突出工厂硬实力和资质背书，合理规划低阻力联系表单，成倍提升流量转化效率。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">12</div>
              <h4 className="why-section4-item-title">建站前中后期全托管内容指导</h4>
              <p className="why-section4-item-desc">前置提供详细建站资料模版；中期提供布局审查；后期提供全套日常运营与排名监控的高清指导教学视频。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">13</div>
              <h4 className="why-section4-item-title">无感轻量级纯 CSS 悬浮栏</h4>
              <p className="why-section4-item-desc">采用不依赖 JS 的轻量纯 CSS 侧边栏，支持 WhatsApp、微信、邮件等多通道快捷展开，不影响核心网页测速。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">14</div>
              <h4 className="why-section4-item-title">精准 XML Sitemap 站点地图推送</h4>
              <p className="why-section4-item-desc">自动更新结构化 XML 地图，并在后台实时挂接谷歌控制台，极速通知谷歌蜘蛛爬取收录新增和改版页面。</p>
            </div>
            
            <div className="why-section4-item">
              <div className="why-section4-item-icon">15</div>
              <h4 className="why-section4-item-title">GA分析与 GSC 流量跟踪服务</h4>
              <p className="why-section4-item-desc">专业代办配置谷歌分析 4 (GA4) 与 Search Console 追踪代码，实时跟踪访客轨迹和搜索词，让外贸决策有数据可依。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section5">
        <div className="why-section5-container">
          <div className="why-section5-header">
            <span className="why-section5-tag">警示防坑指南</span>
            <h2 className="why-section5-title">外贸建站中常见的 <span className="why-section5-accent-text">9 大“雷区”</span></h2>
            <p className="why-section5-subtitle">避开销售话术陷阱，省去几万块冤枉钱。看完以下总结，少走三年弯路。</p>
          </div>
          
          <div className="why-section5-grid">
            <div className="why-section5-card">
              <div className="why-section5-card-badge">01</div>
              <h4 className="why-section5-card-title">高昂的服务器费用与服务器权限陷阱</h4>
              <p className="why-section5-card-desc">有些公司服务器报价动辄数千元甚至上万元一年，并且使用的还是低效共享主机而非独享节点。甚至不给您服务器控制权限，后期维护不仅麻烦，还会额外收取高额搬迁与运维费。</p>
            </div>
            
            <div className="why-section5-card">
              <div className="why-section5-card-badge">02</div>
              <h4 className="why-section5-card-title">域名权限归属与资产流失</h4>
              <p className="why-section5-card-desc">域名是比服务器还重要的核心数字资产，网站所有流量与权重价值最终都会累计在域名上。随着网站运营时间变长和投流费用大量投入，域名会越来越值钱。若域名控制权不在自己手里，后果不堪设想。</p>
            </div>
            
            <div className="why-section5-card">
              <div className="why-section5-card-badge">03</div>
              <h4 className="why-section5-card-title">网站速度极慢导致推广致命打击</h4>
              <p className="why-section5-card-desc">有很多建站商建出来的网站谷歌测速分数低于 60 分，严重达不到正常使用标准，对于网站后期推广与 SEO 是致命影响。猫哥提供部分修复优化的支持，当然最好还是推荐使用猫哥最新的建站技术，无需优化，速度即可秒杀传统建站。</p>
            </div>
            
            <div className="why-section5-card">
              <div className="why-section5-card-badge">04</div>
              <h4 className="why-section5-card-title">买模板站导致极其糟糕的海外体验</h4>
              <p className="why-section5-card-desc">模板站代码冗余且套用度极高，导致打开速度奇慢。由于排版和拓展性受限，强行塞入资料会让布局非常违和，降低海外采购商的信任度与询盘转化率。</p>
            </div>
            
            <div className="why-section5-card">
              <div className="why-section5-card-badge">05</div>
              <h4 className="why-section5-card-title">盲目相信“几百个词保证首页”的话术</h4>
              <p className="why-section5-card-desc">不看产品本身和内容质量，直接承诺海量词上首页，完全是不负责任的行为。要么做上去的都是毫无搜索量的生僻词，要么干脆把达不到标的责任甩锅给您的资料不合格。</p>
            </div>
            
            <div className="why-section5-card">
              <div className="why-section5-card-badge">06</div>
              <h4 className="why-section5-card-title">不懂整理高质量资料导致建站半吊子</h4>
              <p className="why-section5-card-desc">大多数网络公司接到项目后，会把项目流程化拆分发给流水线小工。他们巴不得您给的资料越少越好，越快交工提成拿得越快，而根本不在意缺失核心卖点对后期转化的致命影响。</p>
            </div>
            
            <div className="why-section5-card">
              <div className="why-section5-card-badge">07</div>
              <h4 className="why-section5-card-title">不懂关键词和长尾词布局，SEO做瞎</h4>
              <p className="why-section5-card-desc">很多企业只整理了几个核心行业大词，却完全不知道如何布局能快速起量、高性价比的搜索长尾词。这会导致网站与海外用户的实际搜索意图缺乏相关性，最终网站毫无排名。</p>
            </div>
            
            <div className="why-section5-card">
              <div className="why-section5-card-badge">08</div>
              <h4 className="why-section5-card-title">网络公司销售流失率极高，对接断层</h4>
              <p className="why-section5-card-desc">建站公司的销售人员流动频繁，网站一旦遇到技术问题或修改意见，经常发现当初对接的销售已经离职，新来的人又不熟悉您的情况，沟通成本极高。而在猫哥这，核心骨干直接服务终身。</p>
            </div>
            
            <div className="why-section5-card">
              <div className="why-section5-card-badge">09</div>
              <h4 className="why-section5-card-title">认为规模越大、价格越贵的建站越好</h4>
              <p className="why-section5-card-desc">网络公司销售提成通常高达40%以上，公司越大往往意味着销售和运营团队庞大，建站费用绝大部分用来填补广告和提成，而非技术本身。流水线作业的网站往往细节粗糙、效果欠佳。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section6">
        <div className="why-section6-container">
          <div className="why-section6-glass-card">
            <div className="why-section6-glow-effect"></div>
            
            <div className="why-section6-content">
              <span className="why-section6-tag">立即行动</span>
              <h2 className="why-section6-title">选择猫哥，让您的外贸网站<br /><span className="gradient-text">主动获取更多优质询盘</span></h2>
              <p className="why-section6-desc">
                专注高端出海建站设计与谷歌SEO优化研究超过15年，我们跳过层层销售抽成，由资深技术专家与您直接对接，提供高保真定制服务。保障98%初稿超预期交付率，助力企业数字化资产全面升级。
              </p>
              
              <div className="why-section6-contacts">
                <div className="why-section6-contact-item">
                  <div className="why-section6-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div className="why-section6-contact-info">
                    <span className="why-section6-contact-label">微信直连（获取建站方案及免费素材包）</span>
                    <a href="#" onClick={copyWeChatAndShowModal} className="why-section6-contact-value why-section6-pulse-btn">maogeotop</a>
                  </div>
                </div>
                
                <div className="why-section6-contact-item">
                  <div className="why-section6-contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="why-section6-contact-info">
                    <span className="why-section6-contact-label">官方邮箱（欢迎发送您的产品资料与报价需求）</span>
                    <a href="mailto:2678586420@qq.com" className="why-section6-contact-value">2678586420@qq.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
