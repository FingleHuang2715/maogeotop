"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    carouselDragged: boolean;
    openGscLightbox: (src: string) => void;
  }
}

export default function ReviewsCarousel() {
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const ring = ringRef.current;
    if (!stage || !ring) return;

    const slides = ring.querySelectorAll(".reviews-carousel-slide");
    const count = slides.length;
    if (count === 0) return;

    const angle = 360 / count;
    const spacing = 6.8;
    const speed = 6;
    const direction = "right" as string;
    const drag = true;
    const sensitivity = 5;

    let radius = 0;
    let rotY = 0;
    let velocity = 0;
    let lastTime = 0;
    let isDragging = false;
    let startX = 0;
    let totalDeltaX = 0;
    let animationFrameId = 0;

    const degPerSec = speed * 6 * (direction === "left" ? -1 : 1);
    window.carouselDragged = false;

    // 动态计算卡片在 3D 环中的半径与角度排列
    function updateLayout() {
      if (!ring) return;
      const cardWidth = ring.clientWidth;
      const factor = 1 + spacing * 0.15;
      radius = (cardWidth * factor) / (2 * Math.tan(Math.PI / count));

      slides.forEach((slide, i) => {
        (slide as HTMLElement).style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
      });
    }

    updateLayout();
    window.addEventListener("resize", updateLayout);

    const applyTransform = () => {
      if (!ring) return;
      ring.style.transform = `translateZ(${-radius}px) rotateY(${rotY}deg)`;
    };

    // 惯性阻尼和匀速自转循环
    function draw(now: number) {
      const dt = lastTime ? (now - lastTime) / 1000 : 0;
      lastTime = now;
      const f = Math.min(dt, 0.1);

      if (!isDragging) {
        if (Math.abs(velocity) > 0.01) {
          rotY += velocity * f;
          velocity *= 0.94; // 阻尼系数
        } else {
          rotY += degPerSec * f; // 匀速自动旋转
        }
      }
      applyTransform();
      animationFrameId = requestAnimationFrame(draw);
    }
    animationFrameId = requestAnimationFrame(draw);

    // Pointer Events 交互绑定
    const handlePointerDown = (e: PointerEvent) => {
      stage.setPointerCapture(e.pointerId);
      isDragging = true;
      startX = e.clientX;
      totalDeltaX = 0;
      window.carouselDragged = false;
      velocity = 0;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      startX = e.clientX;
      totalDeltaX += Math.abs(dx);

      if (totalDeltaX > 8) {
        window.carouselDragged = true;
      }

      const k = 0.3 * sensitivity;
      rotY += dx * k;
      velocity = dx * k * 60;
      applyTransform();
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      try {
        stage.releasePointerCapture(e.pointerId);
      } catch (err) {}
      isDragging = false;

      setTimeout(() => {
        window.carouselDragged = false;
      }, 50);
    };

    if (drag) {
      stage.addEventListener("pointerdown", handlePointerDown);
      stage.addEventListener("pointermove", handlePointerMove);
      stage.addEventListener("pointerup", handlePointerUp);
      stage.addEventListener("pointercancel", handlePointerUp);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateLayout);
      if (drag) {
        stage.removeEventListener("pointerdown", handlePointerDown);
        stage.removeEventListener("pointermove", handlePointerMove);
        stage.removeEventListener("pointerup", handlePointerUp);
        stage.removeEventListener("pointercancel", handlePointerUp);
      }
    };
  }, []);

  const spriteUrl = "https://maogewordpress.oss-cn-shenzhen.aliyuncs.com/wp-content/uploads/2026/07/20260715230143599-scaled.webp";

  const handleSlideClick = (index: number) => {
    if (window.carouselDragged) return;
    if (typeof window.openGscLightbox === "function") {
      window.openGscLightbox(spriteUrl);
    }
  };

  return (
    <section className="reviews-cosmic" id="reviews-section">
      <div className="reviews-bg-glow reviews-glow-left" aria-hidden="true"></div>
      <div className="reviews-bg-glow reviews-glow-right" aria-hidden="true"></div>

      <div className="reviews-container">
        <div className="reviews-header">
          <div className="reviews-version-badge">
            <span className="reviews-version-dot" aria-hidden="true"></span>
            <span className="reviews-version-text">口碑实证 · 真实评价</span>
          </div>
          <h2 className="reviews-title">
            客户的真实反馈，<br />
            <span className="reviews-title-accent">是猫哥最好的黄金招牌</span>
          </h2>
        </div>

        <div ref={stageRef} className="reviews-carousel-stage" id="reviews-stage">
          <div className="reviews-carousel-tilt">
            <div ref={ringRef} className="reviews-carousel-ring" id="reviews-ring">
              
              {/* 8 个好评卡片，自动切割雪碧图相应槽位 */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="reviews-carousel-slide">
                  <div
                    className={`reviews-face-front reviews-sprite-${i + 1}`}
                    onClick={() => handleSlideClick(i)}
                  ></div>
                  <div className={`reviews-face-back reviews-sprite-${i + 1}`}></div>
                </div>
              ))}

            </div>
          </div>
        </div>

        <div className="reviews-footer-tips">
          <span className="reviews-swipe-icon" aria-hidden="true">↔</span>
          <p className="reviews-swipe-text">支持鼠标拖拽旋转，或手机左右滑动探索 3D 真实好评记录（点击可查看大图）</p>
        </div>
      </div>
    </section>
  );
}
