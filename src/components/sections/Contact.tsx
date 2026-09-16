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
        label: "Instagram",
        href: "https://www.instagram.com/fahad.almodares/",
      },
      {
        label: "Email",
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
        label: "Instagram",
        href: "https://www.instagram.com/fahad.almodares/",
      },
      {
        label: "Email",
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
          {section.links.map((link) => {
            const contentNode = (
              <>
                <span>{link.label}</span>
                <span className="contact__arrow" aria-hidden="true">↗</span>
              </>
            );

            if ("href" in link) {
              return (
                <a className="contact__link" data-magnetic href={link.href} key={link.label} rel="noopener noreferrer" target="_blank">
                  {contentNode}
                </a>
              );
            }

            return (
              <span className="contact__link contact__link--placeholder" key={link.label} aria-disabled="true">
                {contentNode}
              </span>
            );
          })}
          <p className="contact__location">{section.location}</p>
        </div>
      </div>
    </section>
  );
}

