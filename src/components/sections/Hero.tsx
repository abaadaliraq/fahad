"use client";

import { useEffect, useMemo, useState } from "react";
import { Topbar } from "@/components/layout/Topbar";
import { TypewriterText } from "@/components/motion/TypewriterText";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n";

export function Hero() {
  const { language, direction } = useLanguage();
  const content = translations[language];
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const headlineLines = useMemo(() => {
    if (language === "ar") {
      return ["رائد أعمال", "وناقل للمعرفة والخبرة"];
    }

    return [...content.headline];
  }, [content.headline, language]);

  useEffect(() => {
    const resetTimer = window.setTimeout(() => {
      setTypingStarted(false);
      setTypingDone(false);
    }, 0);

    const start = () => setTypingStarted(true);
    window.addEventListener("fahad:hero-typewriter-start", start);

    if (document.documentElement.classList.contains("motion-ready")) {
      const timer = window.setTimeout(start, 120);
      return () => {
        window.clearTimeout(resetTimer);
        window.clearTimeout(timer);
        window.removeEventListener("fahad:hero-typewriter-start", start);
      };
    }

    return () => {
      window.clearTimeout(resetTimer);
      window.removeEventListener("fahad:hero-typewriter-start", start);
    };
  }, [language]);

  return (
    <section className="hero-shell" aria-label={content.topbarName}>
      <div className="hero" id="home" dir={direction} data-language={language} data-cursor-theme="dark">
        <Topbar />
        <div className="hero__portrait" aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <p className="hero__microcopy" aria-hidden="true">
          ENTREPRENEUR<br />
          BUSINESS BUILDER<br />
          KNOWLEDGE COMMUNICATOR
        </p>

        <div className="hero__content">
          <p className="hero__eyebrow">{content.eyebrow}</p>
          <h1 className="hero__headline" data-typing-started={typingStarted}>
            <TypewriterText
              lines={headlineLines}
              lineClassName="hero__headline-line"
              onComplete={() => setTypingDone(true)}
              start={typingStarted}
            />
          </h1>
          <p className="hero__supporting" data-visible={typingDone}>{content.supporting}</p>
          <a className="hero__cta" data-magnetic data-visible={typingDone} href="#journey">
            <span>{content.cta}</span>
            <span className="hero__cta-arrow" aria-hidden="true">
              {content.ctaArrow}
            </span>
          </a>
          <span className="hero__location" aria-hidden="true">
            BAGHDAD — IRAQ
          </span>
        </div>

        <div className="hero__wordmark" aria-hidden="true">FAHAD</div>
      </div>
    </section>
  );
}



