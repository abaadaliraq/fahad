"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

const content = {
  ar: {
    label: "المجتمع والشراكات",
    title: ["أثر يمتد", "أبعد من الأعمال"],
    line: "علاقات، مجتمعات ومبادرات صنعت مساحات جديدة للتعاون والتأثير.",
    names: ["Startup Grind Baghdad", "Al-Shafaq", "Al-Sayd Iraqi Club"],
  },
  en: {
    label: "Community & Partnerships",
    title: ["Impact Beyond", "Business"],
    line: "Relationships, communities and initiatives that created new spaces for collaboration and impact.",
    names: ["Startup Grind Baghdad", "Al-Shafaq", "Al-Sayd Iraqi Club"],
  },
} as const;

export function CommunityPartnerships() {
  const { language, direction } = useLanguage();
  const section = content[language];

  return (
    <section className="community-partnerships" id="community" dir={direction} data-language={language}>
      <div className="community-partnerships__inner">
        <header className="community-partnerships__header">
          <p className="community-partnerships__label">{section.label}</p>
          <h2 className="community-partnerships__title">
            {section.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="community-partnerships__line">{section.line}</p>
        </header>

        <figure className="community-partnerships__visual">
          <Image src="/images/community/community-main.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 88vw" />
          <div className="community-partnerships__overlay" aria-hidden="true" />
          <figcaption className="community-partnerships__names" aria-label={section.label}>
            {section.names.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </figcaption>
          <div className="community-partnerships__keywords" aria-hidden="true">
            <span>COMMUNITY</span>
            <span>PARTNERSHIPS</span>
            <span>IMPACT</span>
          </div>
        </figure>
      </div>
    </section>
  );
}