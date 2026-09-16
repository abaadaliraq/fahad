"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

const content = {
  ar: {
    label: "المسيرة المهنية",
    heading: ["خبرة تشكّلت عبر", "قطاعات مختلفة"],
    paragraphs: [
      "بدأ فهد المدرس مسيرته المهنية في القطاع المصرفي، وتدرّج في عدد من المناصب الإدارية والتخصصية في الإدارة والعلاقات العامة والتسويق، قبل الانتقال إلى ريادة الأعمال وتأسيس وتطوير مشاريع في التسويق، الإعلام، تطوير الأعمال والعقارات.",
      "تجمع مسيرته بين الخبرة المؤسسية والعمل الريادي، مع تركيز مستمر على بناء العلاقات، تطوير المشاريع وتحويل المعرفة والخبرة إلى فرص قابلة للنمو.",
    ],
  },
  en: {
    label: "Professional Journey",
    heading: ["Experience Shaped", "Across Different Sectors"],
    paragraphs: [
      "Fahad Al Modares began his professional journey in banking, moving through administrative and specialized roles in management, public relations and marketing before entering entrepreneurship and developing ventures across marketing, media, business development and real estate.",
      "His work brings together institutional experience and entrepreneurial practice, with a continued focus on relationships, venture building and turning knowledge into scalable opportunities.",
    ],
  },
} as const;

export function JourneyIntro() {
  const { language, direction } = useLanguage();
  const page = content[language];

  return (
    <section className="journey-intro" dir={direction} data-language={language} data-cursor-theme="dark">
      <div className="journey-intro__inner">
        <p className="journey-intro__label">{page.label}</p>
        <h2 className="journey-intro__heading">
          {page.heading.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <div className="journey-intro__text">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

