"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

const content = {
  ar: {
    label: "الشركات والمشاريع",
    title: ["من الفكرة", "إلى مشروع قابل للنمو"],
    paragraphs: [
      "تمتد تجربة فهد المدرس في تأسيس وتطوير المشاريع عبر التسويق، الإعلام، تطوير الأعمال والعقارات، مع تركيز على بناء العلامات، تطوير الفرص وصناعة الشراكات التي تساعد المشاريع على النمو.",
      "تجمع هذه المشاريع بين الخبرة المؤسسية، فهم السوق، العلاقات والاستراتيجية، وتحويلها إلى أعمال قابلة للتطوير والاستمرار.",
    ],
  },
  en: {
    label: "VENTURES & PROJECTS",
    title: ["From an Idea", "to a Business Built to Grow"],
    paragraphs: [
      "Fahad Al Modares' experience in founding and developing ventures extends across marketing, media, business development and real estate, with a focus on building brands, developing opportunities and creating partnerships that help projects grow.",
      "These ventures combine institutional experience, market understanding, relationships and strategy, turning them into work that can scale and endure.",
    ],
  },
} as const;

export function VenturesIntro() {
  const { language, direction } = useLanguage();
  const page = content[language];

  return (
    <section className="ventures-intro" dir={direction} data-language={language}>
      <div className="ventures-intro__inner">
        <p className="ventures-intro__label">{page.label}</p>
        <h2 className="ventures-intro__heading">
          {page.title.map((line) => <span key={line}>{line}</span>)}
        </h2>
        <div className="ventures-intro__text">
          {page.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}