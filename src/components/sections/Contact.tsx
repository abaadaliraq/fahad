"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

const content = {
  ar: {
    label: "تواصل",
    heading: ["لنتحدث عن", "الفكرة القادمة."],
    subline: "للتعاون، الشراكات والفرص الجديدة.",
    location: "Baghdad — Iraq",
    links: [
      {
        label: "واتساب",
        href: "https://wa.me/9647800098989",
      },
      {
        label: "إنستغرام",
        href: "https://www.instagram.com/fahad.almodares?stkn=ejM1bnJkOHFiNGMw",
      },
      {
        label: "Email",
        href: "mailto:hello@fahadmodares.com",
      },
    ],
  },
  en: {
    label: "Contact",
    heading: ["Let's Talk About", "What's Next."],
    subline: "For collaborations, partnerships and new opportunities.",
    location: "Baghdad — Iraq",
    links: [
      {
        label: "WhatsApp",
        href: "https://wa.me/9647800098989",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/fahad.almodares?stkn=ejM1bnJkOHFiNGMw",
      },
      {
        label: "Email",
        href: "mailto:hello@fahadmodares.com",
      },
    ],
  },
} as const;

export function Contact() {
  const { language, direction } = useLanguage();
  const section = content[language];

  return (
    <section className="contact" id="contact" dir={direction} data-language={language} data-cursor-theme="light">
      <div className="contact__inner">
        <header className="contact__header">
          <p className="contact__label">{section.label}</p>
          <h2 className="contact__heading">
            {section.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="contact__subline">{section.subline}</p>
        </header>

        <div className="contact__links" aria-label={section.label}>
          {section.links.map((link) => (
            <a className="contact__link" data-magnetic href={link.href} key={link.label} rel="noopener noreferrer" target="_blank" aria-label={link.label}>
              <span>{link.label}</span>
              <span className="contact__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
          <p className="contact__location">{section.location}</p>
        </div>
      </div>
    </section>
  );
}

