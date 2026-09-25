"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n";

type SocialIconProps = {
  icon: "instagram" | "facebook" | "linkedin";
};

function SocialIcon({ icon }: SocialIconProps) {
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
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.34 8h4.31v14H.34V8Zm7.09 0h4.13v1.91h.06c.58-1.1 1.99-2.26 4.1-2.26 4.38 0 5.19 2.9 5.19 6.67V22h-4.31v-6.8c0-1.62-.03-3.71-2.25-3.71-2.26 0-2.6 1.77-2.6 3.59V22H7.43V8Z" />
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

        <div className="footer__contact">
          <h2 className="footer__column-title">{content.contactTitle}</h2>
          <a href={`tel:${content.phoneHref}`}>{content.phone}</a>
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </div>

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

