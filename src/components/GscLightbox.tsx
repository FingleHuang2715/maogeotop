"use client";
import { useState, useEffect, useId, useRef } from "react";

export default function GscLightbox() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [isLightboxActive, setIsLightboxActive] = useState(false);
  const lightboxTitleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.openGscLightbox = (src: string) => {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setLightboxSrc(src);
      setIsLightboxActive(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      window.openGscLightbox = () => {};
    };
  }, []);

  useEffect(() => {
    if (!isLightboxActive) return;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [isLightboxActive]);

  const closeLightbox = () => setIsLightboxActive(false);

  return (
    <div
      id="geo-gsc-lightbox"
      className={"geo-lightbox-overlay " + (isLightboxActive ? "active" : "")}
      onMouseDown={closeLightbox}
      role="dialog"
      aria-modal="true"
      aria-labelledby={lightboxTitleId}
      aria-hidden={!isLightboxActive}
    >
      <div className="geo-lightbox-content" onMouseDown={(e) => e.stopPropagation()}>
        <h2 id={lightboxTitleId} className="geo-lightbox-sr-title">案例大图预览</h2>
        {lightboxSrc && (
          <img
            id="geo-gsc-lightbox-img-el"
            className="geo-lightbox-img"
            src={lightboxSrc}
            alt="案例大图预览"
          />
        )}
        <button ref={closeButtonRef} type="button" className="geo-lightbox-close" onClick={closeLightbox} aria-label="关闭大图预览">&times;</button>
      </div>
    </div>
  );
}
