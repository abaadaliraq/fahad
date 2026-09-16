"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/providers/LanguageProvider";
import styles from "./FullscreenToggle.module.css";

function FullscreenIcon({ active }: { active: boolean }) {
  if (active) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M8 3v5H3" />
        <path d="M16 3v5h5" />
        <path d="M8 21v-5H3" />
        <path d="M16 21v-5h5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8 3H3v5" />
      <path d="M16 3h5v5" />
      <path d="M8 21H3v-5" />
      <path d="M16 21h5v-5" />
    </svg>
  );
}

export function FullscreenToggle() {
  const { language } = useLanguage();
  const [isSupported, setIsSupported] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const sync = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
      ScrollTrigger.refresh();
    };

    const timer = window.setTimeout(() => {
      const supported = typeof document.documentElement.requestFullscreen === "function" && typeof document.exitFullscreen === "function";
      setIsSupported(supported);
      if (supported) {
        sync();
      }
    }, 0);

    document.addEventListener("fullscreenchange", sync);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("fullscreenchange", sync);
    };
  }, []);

  if (!isSupported) {
    return null;
  }

  const label = language === "ar"
    ? isFullscreen ? "إنهاء ملء الشاشة" : "عرض ملء الشاشة"
    : isFullscreen ? "Exit fullscreen" : "Enter fullscreen";

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await document.documentElement.requestFullscreen();
  };

  return (
    <button className={styles.toggle} type="button" aria-label={label} onClick={toggleFullscreen}>
      <FullscreenIcon active={isFullscreen} />
      <span className={styles.tooltip} role="tooltip">{label}</span>
    </button>
  );
}
