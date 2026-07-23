"use client";
import React from "react";

export default function FaqAccordion() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "购买建站的模板网站导致体验糟糕？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "购买网络公司的模板网站，费用几百到上万元。模板站因为内容和代码套用了很多网站，导致对搜索引擎优化友好度低，布局设计排版有限制。替换成自己的内容后，网站会违和，一眼看出是套用模板，客户信任度降低。"
        }
      },
      {
        "@type": "Question",
        "name": "购买WP主题模板修改让网站不符合标准？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "在ThemeForest购买国外设计的主题模板进行修改。国外主题模板是为了设计而做，结构不符合B2B网站结构。网站包括产品详情页、类目页和新闻页面的设计 and 管理。模板样式与实际内容差异较大，网站容易排版错乱导致体验弱，不仅浪费金钱也花费了时间。"
        }
      },
      {
        "@type": "Question",
        "name": "盲目相信网络公司排名保证话术？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "网络公司承诺短时间几百个关键词排名首页、不达标不计费等\"宣传话术\"。这是为了成交网站项目的话术，在不清楚客户资料的前提下不可做排名和效果保证。谷歌官方文档：没有人可以保证在Google搜索结果中排名第一，千万不要相信声称与Google有\"特殊关系\"的SEO。"
        }
      },
      {
        "@type": "Question",
        "name": "建站前没有做关键词调研导致页面价值低？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "绝大部分外贸人在整理资料时，只会把产品核心词作为关键词整理，对于拓展的长尾词就不知道如何去写了，这会影响网站后期的SEO优化。因为客户不仅会搜索核心词，也可能会搜索其他相关联想词，如果网站没有那些拓展词就会降低与客户搜索关键词的相关性。"
        }
      },
      {
        "@type": "Question",
        "name": "认为越大越贵的公司做的网站效果越好？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "越大的公司，越把网站项目流程化，做的工作不会那么细致。网络公司销售提成通常在40%以上，公司越大销售岗位越多，运营成本就越高，低价不是网站技术高超。销售人员流动很大，有时联系的销售不在职了，新对接的人对网站不熟悉导致沟通效率都降低。"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="faq-cosmic" id="section-faq">
        <div className="faq-cosmic__bg-decoration" aria-hidden="true"></div>

        <div className="faq-cosmic__container">
          <header className="faq-cosmic__header">
            <div className="faq-cosmic__badge">
              <span className="faq-cosmic__badge-icon" aria-hidden="true">⚠</span>
              外贸建站避坑指南
            </div>
            <h2 className="faq-cosmic__title">
              外贸建站前，<br />
              <span className="gradient-text">需要注意哪些问题？</span>
            </h2>
            <p className="faq-cosmic__subtitle">
              超过 90% 的外贸人在建站时都踩过这些坑，提前了解让你少走弯路
            </p>
          </header>

          <div className="faq-cosmic__grid" role="list" aria-label="常见问题列表">
            
            {/* 左列 */}
            <div className="faq-cosmic__col" role="listitem">
              <details className="faq-cosmic__item" role="group">
                <summary className="faq-cosmic__summary">
                  <span className="faq-cosmic__q-num" aria-hidden="true">01</span>
                  <span className="faq-cosmic__q-text">购买建站的模板网站导致体验糟糕？</span>
                  <span className="faq-cosmic__q-toggle" aria-hidden="true">
                    <span className="faq-cosmic__toggle-plus">＋</span>
                    <span className="faq-cosmic__toggle-minus">－</span>
                  </span>
                </summary>
                <div className="faq-cosmic__answer">
                  <div className="faq-cosmic__answer-inner">
                    <p>
                      购买网络公司的模板网站，费用几百到上万元。模板站因为内容和代码
                      <strong>套用了很多网站</strong>，导致对搜索引擎优化友好度低，布局设计排版有限制。
                    </p>
                    <p>
                      替换成自己的内容后，网站会违和，一眼看出是套用模板，
                      <strong>客户信任度降低</strong>。
                    </p>
                  </div>
                </div>
              </details>

              <details className="faq-cosmic__item" role="group">
                <summary className="faq-cosmic__summary">
                  <span className="faq-cosmic__q-num" aria-hidden="true">02</span>
                  <span className="faq-cosmic__q-text">购买WP主题模板修改让网站不符合标准？</span>
                  <span className="faq-cosmic__q-toggle" aria-hidden="true">
                    <span className="faq-cosmic__toggle-plus">＋</span>
                    <span className="faq-cosmic__toggle-minus">－</span>
                  </span>
                </summary>
                <div className="faq-cosmic__answer">
                  <div className="faq-cosmic__answer-inner">
                    <p>
                      在 ThemeForest 购买国外设计的主题模板进行修改。国外主题模板是为了
                      <strong>设计美观而做</strong>，结构不符合 B2B 网站结构。网站包括产品详情页、类目页和新闻页面的设计和管理。
                    </p>
                    <p>
                      模板样式与实际内容差异较大，网站容易排版错乱导致体验弱，
                      <strong>不仅浪费金钱也花费了时间</strong>。
                    </p>
                  </div>
                </div>
              </details>

              <details className="faq-cosmic__item" role="group">
                <summary className="faq-cosmic__summary">
                  <span className="faq-cosmic__q-num" aria-hidden="true">03</span>
                  <span className="faq-cosmic__q-text">盲目相信网络公司排名保证话术？</span>
                  <span className="faq-cosmic__q-toggle" aria-hidden="true">
                    <span className="faq-cosmic__toggle-plus">＋</span>
                    <span className="faq-cosmic__toggle-minus">－</span>
                  </span>
                </summary>
                <div className="faq-cosmic__answer">
                  <div className="faq-cosmic__answer-inner">
                    <p>
                      网络公司承诺短时间几百个关键词排名首页、不达标不计费等
                      <strong>「宣传话术」</strong>。这是为了成交网站项目的话术，
                      在不清楚客户资料的前提下不可做排名和效果保证。
                    </p>
                    <blockquote className="faq-cosmic__quote">
                      📋 谷歌官方文档：没有人可以保证在 Google 搜索结果中排名第一，
                      千万不要相信声称与 Google 有「特殊关系」的 SEO。
                    </blockquote>
                  </div>
                </div>
              </details>
            </div>

            {/* 右列 */}
            <div className="faq-cosmic__col" role="listitem">
              <details className="faq-cosmic__item" role="group">
                <summary className="faq-cosmic__summary">
                  <span className="faq-cosmic__q-num" aria-hidden="true">04</span>
                  <span className="faq-cosmic__q-text">建站前没有做关键词调研导致页面价值低？</span>
                  <span className="faq-cosmic__q-toggle" aria-hidden="true">
                    <span className="faq-cosmic__toggle-plus">＋</span>
                    <span className="faq-cosmic__toggle-minus">－</span>
                  </span>
                </summary>
                <div className="faq-cosmic__answer">
                  <div className="faq-cosmic__answer-inner">
                    <p>
                      绝大部分外贸人在整理资料时，只会把产品核心词作为关键词整理，
                      对于拓展的<strong>长尾词就不知道如何去写了</strong>，这会影响网站后期的 SEO 优化。
                    </p>
                    <p>
                      因为客户不仅会搜索核心词，也可能会搜索其他相关联想词，如果网站没有那些
                      <strong>拓展词就会降低</strong>与客户搜索关键词的相关性。
                    </p>
                  </div>
                </div>
              </details>

              <details className="faq-cosmic__item" role="group">
                <summary className="faq-cosmic__summary">
                  <span className="faq-cosmic__q-num" aria-hidden="true">05</span>
                  <span className="faq-cosmic__q-text">认为越大越贵的公司做的网站效果越好？</span>
                  <span className="faq-cosmic__q-toggle" aria-hidden="true">
                    <span className="faq-cosmic__toggle-plus">＋</span>
                    <span className="faq-cosmic__toggle-minus">－</span>
                  </span>
                </summary>
                <div className="faq-cosmic__answer">
                  <div className="faq-cosmic__answer-inner">
                    <p>
                      越大的公司，越把网站项目<strong>流程化</strong>，做的工作不会那么细致。
                      网络公司销售提成通常在 40% 以上，公司越大销售岗位越多，
                      运营成本就越高，低价不是网站技术高超。
                    </p>
                    <p>
                      销售人员流动很大，有时联系的销售不在职了，新对接的人对网站不熟悉
                      导致<strong>沟通效率都降低</strong>。
                    </p>
                  </div>
                </div>
              </details>

              <div className="faq-cosmic__cta-hint" aria-label="避坑提示">
                <span className="faq-cosmic__cta-hint-icon" aria-hidden="true">🛡️</span>
                <div className="faq-cosmic__cta-hint-text">
                  <strong>猫哥建站</strong>帮你规避以上所有风险，
                  15年经验，每个细节都为你把关。
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
