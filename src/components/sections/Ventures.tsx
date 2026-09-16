"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n";

export function Ventures() {
  const { language, direction } = useLanguage();
  const content = translations[language].ventures;

  return (
    <section
      className="ventures"
      id="ventures"
      dir={direction}
      data-language={language}
      style={{ "--ventures-bg": `url(${content.backgroundImage})` } as CSSProperties}
    >
      <div className="ventures__backdrop" aria-hidden="true" />
      <div className="ventures__inner">
        <p className="ventures__section-label">{content.label}</p>

        <article className="ventures-card">
          <div
            className="ventures-card__media"
            style={{ "--ventures-card-image": `url(${content.cardImage})` } as CSSProperties}
            aria-hidden="true"
          />

          <div className="ventures-card__text">
            <span className="ventures-card__detail">{content.detail}</span>
            <p className="ventures-card__eyebrow">{content.eyebrow}</p>
            <h2 className="ventures-card__title">
              {content.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="ventures-card__description">{content.description}</p>
            <p className="ventures-card__names">{content.names.join(" • ")}</p>
            <a className="ventures-card__cta" data-magnetic href="/ventures">
              <span>{content.cta}</span>
              <span className="ventures-card__cta-arrow" aria-hidden="true">
                {content.ctaArrow}
              </span>
            </a>
            <span className="ventures-card__footer">{content.footer}</span>
          </div>
        </article>
      </div>
    </section>
  );
}

