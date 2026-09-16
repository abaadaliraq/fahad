"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const content = {
  ar: {
    label: "الرؤية والخبرة",
    heading: ["الخبرة تصنع رؤية", "أوضح للفرص"],
    intro:
      "تشكّلت رؤية فهد المدرس عبر تجربة امتدت بين العمل المؤسسي، التسويق، العلاقات العامة، تطوير الأعمال، العقارات وريادة المشاريع. تجربة تجمع بين فهم السوق، بناء العلاقات وتحويل الأفكار إلى خطوات قابلة للتنفيذ.",
    supporting:
      "بالنسبة له، تبدأ الفرص من الفهم الصحيح للناس والسوق والسياق، ثم تأتي الاستراتيجية والعلاقات والتنفيذ.",
    pillars: [
      {
        number: "01",
        label: "STRATEGY",
        title: "الاستراتيجية",
        text: "فهم المؤسسة والسوق والجمهور قبل اتخاذ القرار، ثم تحويل الرؤية إلى أولويات وخطوات يمكن تنفيذها وقياسها.",
      },
      {
        number: "02",
        label: "RELATIONSHIPS",
        title: "العلاقات",
        text: "بناء علاقات وشراكات طويلة الأمد تربط المؤسسات بالأشخاص والأسواق والفرص التي يمكن أن تضيف قيمة حقيقية.",
      },
      {
        number: "03",
        label: "GROWTH",
        title: "النمو",
        text: "البحث عن الفرص القابلة للتوسع، تطوير المشاريع والخدمات وتحسين موقعها في السوق بطريقة تدعم الاستمرارية.",
      },
    ],
  },
  en: {
    label: "Vision & Experience",
    heading: ["Experience Builds", "a Clearer View of Opportunity"],
    intro:
      "Fahad Al Modares' perspective has been shaped across institutional work, marketing, public relations, business development, real estate and entrepreneurship.",
    supporting:
      "For him, opportunity begins with understanding people, markets and context, followed by strategy, relationships and execution.",
    pillars: [
      {
        number: "01",
        label: "STRATEGY",
        title: "Strategy",
        text: "Understanding the organization, market and audience before turning vision into clear and measurable action.",
      },
      {
        number: "02",
        label: "RELATIONSHIPS",
        title: "Relationships",
        text: "Building long-term relationships and partnerships that connect organizations with people, markets and opportunities.",
      },
      {
        number: "03",
        label: "GROWTH",
        title: "Growth",
        text: "Identifying scalable opportunities, developing ventures and strengthening their position for sustainable growth.",
      },
    ],
  },
} as const;

export function VisionExperience() {
  const { language, direction } = useLanguage();
  const section = content[language];
  const [openPillar, setOpenPillar] = useState<string>(section.pillars[0].number);

  return (
    <section className="vision-experience" id="vision" dir={direction} data-language={language} data-cursor-theme="dark">
      <div className="vision-experience__inner">
        <div className="vision-experience__header">
          <p className="vision-experience__label">{section.label}</p>
          <h2 className="vision-experience__title">
            {section.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <div className="vision-experience__intro">
            <p>{section.intro}</p>
            <p>{section.supporting}</p>
          </div>
        </div>

        <div className="vision-experience__pillars">
          {section.pillars.map((pillar) => {
            const isOpen = openPillar === pillar.number;

            return (
              <article className="vision-experience__pillar" data-open={isOpen} key={pillar.number}>
                <button
                  className="vision-experience__pillar-button"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenPillar((current) => (current === pillar.number ? "" : pillar.number))}
                >
                  <span className="vision-experience__number">{pillar.number}</span>
                  <span className="vision-experience__word">{pillar.label}</span>
                  <span className="vision-experience__pillar-title">{pillar.title}</span>
                  <span className="vision-experience__toggle" aria-hidden="true">⌄</span>
                </button>
                <div className="vision-experience__pillar-panel">
                  <p>{pillar.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="vision-experience__watermark" aria-hidden="true">VISION</div>
    </section>
  );
}
