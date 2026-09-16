"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { JourneyCard } from "@/components/ui/JourneyCard";
import { translations } from "@/lib/i18n";

export function Journey() {
  const { language, direction } = useLanguage();
  const content = translations[language].journey;

  return (
    <section className="journey" id="journey" dir={direction} data-language={language} data-cursor-theme="dark">
      <div className="journey__glass" aria-hidden="true" />
      <div className="journey__content">
        <div className="journey__header">
          <p className="journey__label">{content.label}</p>
          <h2 className="journey__title">
            {content.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="journey__intro">{content.intro}</p>
        </div>

        <div className="journey__cards">
          {content.cards.map((card, index) => (
            <JourneyCard card={card} featured={index === 1} key={card.number} />
          ))}
        </div>

        <a className="journey__cta" data-magnetic href="/journey">
          <span>{content.cta}</span>
          <span className="journey__cta-arrow" aria-hidden="true">
            {content.ctaArrow}
          </span>
        </a>
      </div>
    </section>
  );
}

