"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { FullscreenToggle } from "@/components/ui/FullscreenToggle";
import { translations, type Language } from "@/lib/i18n";

const languages: Language[] = ["ar", "en"];
const sectionIds = ["home", "journey", "ventures", "vision", "current-roles", "contact"];

function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(id);
  if (!target) {
    return false;
  }

  target.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function Topbar() {
  const { language, setLanguage, direction } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const content = translations[language];
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const id = window.location.hash.replace("#", "");
    if (id) {
      window.setTimeout(() => scrollToSection(id, "auto"), 80);
    }
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55%", threshold: [0.12, 0.28, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const getHref = (href: string) => {
    if (!href.startsWith("#")) {
      return href;
    }

    return isHome ? href : `/${href}`;
  };

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMenuOpen(false);

    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();
    const id = href.slice(1);

    if (isHome) {
      if (scrollToSection(id)) {
        setActiveHref(href);
        window.history.replaceState(null, "", id === "home" ? "/" : href);
      }
      return;
    }

    router.push(`/${href}`);
  };

  return (
    <header className="topbar" dir={direction} data-cursor-theme="dark">
      <div className="topbar__inner">
        <a
          className="brand"
          data-cursor="logo"
          href={getHref("#home")}
          aria-label={content.topbarName}
          onClick={handleNavClick("#home")}
        >
          <Image
            className="brand__logo"
            src="/images/logo/fahad-logo.png"
            alt=""
            width={36}
            height={36}
            aria-hidden="true"
            priority
          />
          <span className="brand__name">{content.topbarName}</span>
        </a>

        <nav className="topbar__nav" dir={direction} aria-label="Primary navigation">
          {content.nav.map((item) => (
            <a
              className="topbar__nav-link"
              data-active={isHome && activeHref === item.href}
              href={getHref(item.href)}
              key={item.href}
              onClick={handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar__right">
          <FullscreenToggle />
          <button
            className="topbar__menu-toggle"
            type="button"
            aria-label={content.menu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="topbar__menu-line" />
            <span className="topbar__menu-line" />
          </button>

          <div className="language-switcher" aria-label="Language switcher">
            {languages.map((item, index) => (
              <span className="language-switcher__item" key={item}>
                <button
                  className="language-switcher__button"
                  data-active={language === item}
                  type="button"
                  onClick={() => {
                    setLanguage(item);
                    setIsMenuOpen(false);
                  }}
                  aria-pressed={language === item}
                >
                  {item.toUpperCase()}
                </button>
                {index === 0 ? (
                  <span className="language-switcher__divider" aria-hidden="true">
                    |
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </div>

      <nav
        className="topbar__mobile-nav"
        dir={direction}
        data-open={isMenuOpen}
        id="mobile-navigation"
        aria-label="Mobile navigation"
      >
        {content.nav.map((item) => (
          <a
            className="topbar__nav-link"
            data-active={isHome && activeHref === item.href}
            href={getHref(item.href)}
            key={item.href}
            onClick={handleNavClick(item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
