"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

const journeyImages = [
  "/images/journey/full/career-slide-01.jpg",
  "/images/journey/full/career-slide-02.jpg",
  "/images/journey/full/career-slide-03.jpg",
  "/images/journey/full/career-slide-04.jpg",
] as const;

const content = {
  ar: {
    label: "المسيرة المهنية",
    panels: [
      {
        number: "01",
        title: "البداية المصرفية",
        category: "الإدارة • العمليات • القطاع المصرفي",
        image: journeyImages[0],
        tone: "teal",
      },
      {
        number: "02",
        title: "العلاقات والتسويق",
        category: "العلاقات العامة • التسويق • الاتصال المؤسسي",
        image: journeyImages[1],
        tone: "green",
      },
      {
        number: "03",
        title: "ريادة الأعمال",
        category: "تأسيس المشاريع • تطوير الأعمال • بناء العلامات",
        image: journeyImages[2],
        tone: "warm",
      },
      {
        number: "04",
        title: "المشاريع والأثر",
        category: "العقارات • الشراكات • المجتمعات • نقل المعرفة",
        image: journeyImages[3],
        tone: "black",
      },
    ],
  },
  en: {
    label: "PROFESSIONAL JOURNEY",
    panels: [
      {
        number: "01",
        title: "BANKING FOUNDATIONS",
        category: "Administration • Operations • Banking",
        image: journeyImages[0],
        tone: "teal",
      },
      {
        number: "02",
        title: "PR & MARKETING",
        category: "Public Relations • Marketing • Corporate Communication",
        image: journeyImages[1],
        tone: "green",
      },
      {
        number: "03",
        title: "ENTREPRENEURSHIP",
        category: "Ventures • Business Development • Brand Building",
        image: journeyImages[2],
        tone: "warm",
      },
      {
        number: "04",
        title: "VENTURES & IMPACT",
        category: "Real Estate • Partnerships • Communities • Knowledge",
        image: journeyImages[3],
        tone: "black",
      },
    ],
  },
} as const;

export function JourneyHero() {
  const { language, direction } = useLanguage();
  const page = content[language];
  const panels = [...page.panels, ...page.panels];

  return (
    <section className="journey-full-hero" dir={direction} data-language={language} data-cursor-theme="dark">
      <h1 className="seo-only">{language === "ar" ? "المسيرة المهنية" : "Professional Journey"}</h1>
      <p className="journey-full-hero__label">{page.label}</p>
      <div className="journey-full-hero__track" aria-hidden="true">
        {panels.map((panel, index) => (
          <article className="journey-full-hero__panel" data-tone={panel.tone} key={`${panel.number}-${index}`}>
            <Image src={panel.image} alt="" fill sizes="(max-width: 900px) 100vw, 25vw" priority={index < 4} />
            <div className="journey-full-hero__shade" />
            <div className="journey-full-hero__panel-copy">
              <span>{panel.number}</span>
              <h2>{panel.title}</h2>
              <p>{panel.category}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="journey-full-hero__fade" aria-hidden="true" />
    </section>
  );
}

