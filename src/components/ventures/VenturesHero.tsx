"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

const ventureImages = [
  "/images/ventures/full/venture-darb.jpg",
  "/images/ventures/full/venture-majarra.jpg",
  "/images/ventures/full/venture-business.jpg",
  "/images/ventures/full/venture-community.jpg",
] as const;

const content = {
  ar: {
    label: "الشركات والمشاريع",
    panels: [
      { number: "01", title: "درب التبانة", meta: "التسويق • الإعلام • تطوير الأعمال • بناء العلامات", image: ventureImages[0], mood: "darb" },
      { number: "02", title: "المجرة", meta: "التسويق والاستشارات العقارية", image: ventureImages[1], mood: "majarra" },
      { number: "03", title: "تطوير المشاريع", meta: "الاستراتيجيات • النمو • الشراكات • الفرص", image: ventureImages[2], mood: "business" },
      { number: "04", title: "المجتمعات والفعاليات", meta: "الفعاليات • المؤتمرات • العلاقات • ريادة الأعمال", image: ventureImages[3], mood: "community" },
    ],
  },
  en: {
    label: "VENTURES & PROJECTS",
    panels: [
      { number: "01", title: "DARB AL-TABANA", meta: "Marketing • Media • Business Development • Branding", image: ventureImages[0], mood: "darb" },
      { number: "02", title: "AL-MAJARRA", meta: "Real Estate Marketing • Advisory", image: ventureImages[1], mood: "majarra" },
      { number: "03", title: "BUSINESS DEVELOPMENT", meta: "Strategy • Growth • Partnerships • Opportunities", image: ventureImages[2], mood: "business" },
      { number: "04", title: "COMMUNITIES & EVENTS", meta: "Events • Conferences • Relationships • Entrepreneurship", image: ventureImages[3], mood: "community" },
    ],
  },
} as const;

export function VenturesHero() {
  const { language, direction } = useLanguage();
  const page = content[language];
  const panels = [...page.panels, ...page.panels];

  return (
    <section className="ventures-full-hero" id="ventures-hero" dir={direction} data-language={language} data-cursor-theme="dark">
      <p className="ventures-full-hero__label">{page.label}</p>
      <div className="ventures-full-hero__track" aria-hidden="true">
        {panels.map((panel, index) => (
          <article className="ventures-full-hero__panel" data-mood={panel.mood} key={`${panel.number}-${index}`}>
            <Image src={panel.image} alt="" fill sizes="(max-width: 900px) 72vw, 25vw" priority={index < 4} />
            <div className="ventures-full-hero__shade" />
            <div className="ventures-full-hero__copy">
              <span>{panel.number}</span>
              <h1>{panel.title}</h1>
              <p>{panel.meta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

