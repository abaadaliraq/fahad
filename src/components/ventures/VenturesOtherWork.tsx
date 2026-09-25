"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

const content = {
  ar: {
    title: ["أعمال تمتد", "أبعد من الشركات"],
    text: "تشمل تجربة فهد أيضاً تطوير الشراكات، إدارة الفرص التجارية، بناء المجتمعات وتنظيم الفعاليات والعمل مع مؤسسات ومبادرات في مجالات مختلفة.",
    items: [
      ["Startup Grind Baghdad", "Partner & Founder / Regional Marketing Director"],
      ["Al-Shafaq Humanitarian Assistance Organization", "Chairman of the Board of Trustees"],
      ["Al-Sayd Iraqi Club", "Exclusive Advertising Agent"],
    ],
    ctaTitle: "لديك فكرة أو فرصة تعاون؟",
    cta: "تواصل مع فهد ←",
  },
  en: {
    title: ["Work Beyond", "the Ventures"],
    text: "Fahad's experience also includes developing partnerships, managing commercial opportunities, building communities, organizing events and working with institutions and initiatives across different fields.",
    items: [
      ["Startup Grind Baghdad", "Partner & Founder / Regional Marketing Director"],
      ["Al-Shafaq Humanitarian Assistance Organization", "Chairman of the Board of Trustees"],
      ["Al-Sayd Iraqi Club", "Exclusive Advertising Agent"],
    ],
    ctaTitle: "Have an idea or collaboration opportunity?",
    cta: "Contact Fahad →",
  },
} as const;

export function VenturesOtherWork() {
  const { language, direction } = useLanguage();
  const page = content[language];

  return (
    <section className="ventures-other" dir={direction} data-language={language} data-cursor-theme="dark">
      <div className="ventures-other__inner">
        <div className="ventures-other__header">
          <h2>{page.title.map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{page.text}</p>
        </div>
        <div className="ventures-other__list">
          {page.items.map(([name, role]) => (
            <div className="ventures-other__item" key={name}>
              <strong>{name}</strong>
              <span>{role}</span>
            </div>
          ))}
        </div>
        <div className="ventures-other__cta">
          <p>{page.ctaTitle}</p>
          <Link data-magnetic href="/#contact">{page.cta}</Link>
        </div>
      </div>
    </section>
  );
}
