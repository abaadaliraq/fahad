"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n";

type SocialIconProps = {
  icon: "instagram" | "facebook" | "x" | "email";
};

function SocialIcon({ icon }: SocialIconProps) {
  if (icon === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M3.5 5h17A1.5 1.5 0 0 1 22 6.5v11A1.5 1.5 0 0 1 20.5 19h-17A1.5 1.5 0 0 1 2 17.5v-11A1.5 1.5 0 0 1 3.5 5Zm.7 2 7.8 5.45L19.8 7H4.2Zm15.8 1.8-7.42 5.18a1 1 0 0 1-1.16 0L4 8.8V17h16V8.8Z" />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.35A4.65 4.65 0 1 1 12 16.65a4.65 4.65 0 0 1 0-9.3Zm0 2A2.65 2.65 0 1 0 12 14.65a2.65 2.65 0 0 0 0-5.3Zm4.9-2.05a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M18.9 2h3.2l-7 8 8.2 12h-6.4l-5-7.2L6.2 22H3l7.5-8.6L2.6 2h6.6l4.5 6.5L18.9 2Zm-1.1 17.9h1.8L8.2 4H6.3l11.5 15.9Z" />
    </svg>
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Footer() {
  const { language, direction } = useLanguage();
  const content = translations[language].footer;

  return (
    <footer className="footer" dir={direction} data-language={language} data-cursor-theme="dark">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link className="footer__identity" href="/" aria-label={language === "ar" ? "العودة إلى الصفحة الرئيسية" : "Back to homepage"}>
            <Image
              className="footer__logo"
              src="/images/logo/fahad-logo.png"
              alt=""
              width={52}
              height={52}
              aria-hidden="true"
            />
            <div className="footer__identity-copy">
              <p className="footer__name">Fahad Al Modares</p>
              <p className="footer__tagline">Entrepreneur & Knowledge Communicator</p>
            </div>
          </Link>
          <p className="footer__intro">{content.intro}</p>
        </div>

        <nav className="footer__links" aria-label={content.navigationLabel}>
          {content.columns.map((column) => (
            <div className="footer__column" key={column.title}>
              <h2 className="footer__column-title">{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer__social" aria-label={content.socialTitle}>
          {content.social.map((item) => (
            <a
              href={item.href}
              key={item.label}
              aria-label={item.label}
              target={isExternalHref(item.href) ? "_blank" : undefined}
              rel={isExternalHref(item.href) ? "noopener noreferrer" : undefined}
            >
              <SocialIcon icon={item.icon} />
            </a>
          ))}
        </div>

        <div className="footer__contact">
          <h2 className="footer__column-title">{content.contactTitle}</h2>
          <div className="footer__contact-groups">
            {content.contactGroups.map((group) => (
              <div className="footer__contact-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {"href" in link ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${group.title} - ${link.label}`}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <span>{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


        <div className="footer__bottom">
          <span>{content.copyright}</span>
          <a className="footer__credit" href="https://www.abaad-aliraq.com/" target="_blank" rel="noopener noreferrer">
            <Image
              className="footer__credit-logo"
              src="/images/abaadlogo.png"
              alt=""
              width={26}
              height={26}
              aria-hidden="true"
            />
            <span>Developed by Abaad Al-Iraq</span>
          </a>
          <span>{content.location}</span>
        </div>

        <div className="footer__wordmark" aria-hidden="true">FAHAD</div>
      </div>
    </footer>
  );
}
