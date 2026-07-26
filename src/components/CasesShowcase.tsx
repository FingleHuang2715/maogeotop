"use client";
import React, { useState, useRef } from "react";

interface CaseItem {
  filename: string;
  title: string;
  desc: string;
  imgSrc: string;
  isExtra?: boolean;
}

export default function CasesShowcase() {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<{ open: boolean; src: string; title: string }>({
    open: false,
    src: "",
    title: ""
  });
  const lightboxScrollWrapperRef = useRef<HTMLDivElement>(null);

    const casesData: CaseItem[] = [
    {
      filename: "Solar_Photovoltaic.html",
      title: "光伏发电",
      desc: "分布式光伏发电设备组件、太阳能单晶板与家庭储能锂电池出海官网。",
      imgSrc: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010159831-scaled.webp"
    },
    {
      filename: "Industrial_AGV.html",
      title: "工业AGV",
      desc: "智能仓储移动搬运机器人、背负升降式 AGV 工厂出海独立站。",
      imgSrc: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010057988-scaled.webp"
    },
    {
      filename: "EV_Automotive.html",
      title: "新能源汽车",
      desc: "智能电动出海汽车、充电桩与新能源配套设备专栏站。",
      imgSrc: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717005925544-scaled.webp"
    },
    {
      filename: "CRO_BioMedicine.html",
      title: "CRO创新药",
      desc: "医药联合研发外包机构与临床前实验室服务推广官网。",
      imgSrc: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010005682-scaled.webp"
    },
    {
      filename: "Luxury_Leather.html",
      title: "奢侈品包包",
      desc: "高端奢品包袋皮具、定制款海外分销与数字营销官网。",
      imgSrc: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010032727-scaled.webp"
    },
    {
      filename: "Stage_Lighting.html",
      title: "舞台灯",
      desc: "舞台灯光与演艺舞台智能装备出海营销独立站。",
      imgSrc: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717005717260-scaled.webp"
    },
    {
      filename: "Market_Intelligence.html",
      title: "市场情报与咨询",
      desc: "跨国行业深度商业数据、全球市场调查与行业宏观咨询服务网。",
      imgSrc: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010131349-scaled.webp",
      isExtra: true
    },
    {
      filename: "Robotic_Arms.html",
      title: "智能工业多轴焊接机械臂系统网",
      desc: "工业多轴机械手、激光自动焊接装配码垛机械臂独立站。",
      imgSrc: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010230325-scaled.webp",
      isExtra: true
    },
    {
      filename: "Smart_Wearables.html",
      title: "智能穿戴设备",
      desc: "运动心率监测表、多功能蓝牙手环与健康智能穿戴设备出海官网。",
      imgSrc: "https://cdn.maogeo.top/wp-content/uploads/2026/07/20260717010307726-scaled.webp",
      isExtra: true
    }
  ];

  const handleToggleCases = () => {
    setExpanded(!expanded);
    if (expanded) {
      const sectionEl = document.getElementById("geo-site-cases");
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleOpenLightbox = (src: string, title: string) => {
    setLightbox({ open: true, src, title });
    if (lightboxScrollWrapperRef.current) {
      lightboxScrollWrapperRef.current.scrollTop = 0;
    }
  };

  const handleCloseLightbox = () => {
    setLightbox({ open: false, src: "", title: "" });
  };

  return (
    <>
      <section className="geo-cases-section" id="geo-site-cases">
        <div className="geo-cases-container">
          
          <div className="geo-cases-header">
            <div className="geo-cases-badge">
              <span className="geo-cases-badge-dot"></span>
              精美网站分享 · CASES SHOWCASE
            </div>
            <h2 className="geo-cases-title">精美网站分享与 <span className="gradient-text">定制化建站案例</span></h2>
            <p className="geo-cases-subtitle">精选各行业极具营销力与视觉质感的独立站，结合高转化路径与谷歌抓取规范。鼠标悬停可纵向滑动预览网页全貌。</p>
          </div>

          <div className="geo-cases-grid" role="list" aria-label="建站案例分享列表">
            {casesData.map((item, index) => {
              const extraClass = item.isExtra ? `geo-cases-extra ${expanded ? "show" : ""}` : "";
              return (
                <div key={index} className={`geo-cases-card ${extraClass}`} role="listitem">
                  <div className="geo-cases-browser">
                    <div className="geo-cases-browser-bar">
                      <div className="geo-cases-dots">
                        <span className="geo-cases-dot r"></span>
                        <span className="geo-cases-dot y"></span>
                        <span className="geo-cases-dot g"></span>
                      </div>
                      <span className="geo-cases-browser-title">{item.filename}</span>
                    </div>
                    <div 
                      className="geo-cases-viewport" 
                      onClick={() => handleOpenLightbox(item.imgSrc, item.title)}
                    >
                      <img 
                        src={item.imgSrc} 
                        alt={`${item.title}长截图`}
                        width={600}
                        height={900}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="geo-cases-hover-tip">Hover 滚动 / 点击查看原图</div>
                    </div>
                  </div>
                  <div className="geo-cases-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="geo-cases-load-more-row">
            <button 
              className="geo-cases-btn-more" 
              id="geo-cases-btn-toggle" 
              onClick={handleToggleCases}
            >
              {expanded ? "收起部分案例 ➔" : "加载更多建站案例 ➔"}
            </button>
          </div>

        </div>
      </section>

      {/* 独立：超级建站案例大图灯箱 */}
      <div 
        id="geo-cases-lightbox" 
        className={`geo-cases-lightbox-modal ${lightbox.open ? "show" : ""}`}
        onClick={handleCloseLightbox}
        style={{ display: lightbox.open ? "flex" : "none" }}
      >
        <span className="geo-cases-lightbox-close" aria-label="关闭大图" onClick={handleCloseLightbox}>&times;</span>
        
        <div 
          ref={lightboxScrollWrapperRef}
          className="geo-cases-lightbox-scroll-wrapper" 
          onClick={(e) => e.stopPropagation()}
        >
          <div className="geo-cases-lightbox-alert">
            <div className="geo-cases-lightbox-alert-main">
              💡 <strong>案例品鉴提示：</strong>由于网页大图经过压缩上传，部分细节可能会失真。如需获取<strong>原图高清大图</strong>或品鉴更多精美建站案例，请联系猫哥获取：
              <div className="geo-cases-lightbox-contacts">
                <span>💬 微信客服：<strong>maogeotop</strong></span>
                <span>📧 官方邮箱：<strong>2678586420@qq.com</strong></span>
              </div>
            </div>
            <div className="geo-cases-lightbox-alert-note">
              * 注：长页面截图是在自动化环境中生成，图片中可能存在少部分 CSS 渲染错位或空白，并不代表实际线上网站样式。
            </div>
          </div>

          <div className="geo-cases-lightbox-img-container">
            <h3 className="geo-cases-lightbox-img-title" id="geo-cases-lightbox-title-el">{lightbox.title}</h3>
            {lightbox.src && (
              <img className="geo-cases-lightbox-img" id="geo-cases-lightbox-img-el" src={lightbox.src} alt="建站案例全景图" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
