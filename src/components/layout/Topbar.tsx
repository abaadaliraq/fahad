"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

function normalizeHref(href: string) {
  return href === "/#home" ? "/" : href;
}

export function Topbar() {
  const { language, setLanguage, direction } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const content = translations[language];
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const id = window.location.hash.replace("#", "");
    if (id) {
      window.setTimeout(() => {
        if (scrollToSection(id, "auto")) {
          setActiveHref("/#" + id);
        }
      }, 80);
      return;
    }

    const timer = window.setTimeout(() => setActiveHref("/"), 0);
    return () => window.clearTimeout(timer);
  }, [isHome, pathname]);

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
          setActiveHref(visible.target.id === "home" ? "/" : "/#" + visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55%", threshold: [0.12, 0.28, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const handleHashClick = (href: string) => () => {
    setIsMenuOpen(false);

    if (!isHome || !href.startsWith("/#")) {
      return;
    }

    const id = href.slice(2);
    window.setTimeout(() => {
      if (scrollToSection(id)) {
        setActiveHref(href);
      }
    }, 0);
  };

  const isActive = (href: string) => {
    const normalized = normalizeHref(href);

    if (normalized === "/ventures") {
      return pathname.startsWith("/ventures");
    }

    if (normalized === "/journey") {
      return pathname === "/journey";
    }

    return activeHref === normalized;
  };

  return (
    <header className="topbar" dir={direction} data-cursor-theme="dark">
      <div className="topbar__inner">
        <Link
          className="brand"
          data-cursor="logo"
          href="/"
          aria-label={content.topbarName}
          onClick={() => setIsMenuOpen(false)}
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
        </Link>

        <nav className="topbar__nav" dir={direction} aria-label="Primary navigation">
          {content.nav.map((item) => (
            <Link
              className="topbar__nav-link"
              data-active={isActive(item.href)}
              href={item.href}
              key={item.href}
              onClick={handleHashClick(item.href)}
            >
              {item.label}
            </Link>
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
          <Link
            className="topbar__nav-link"
            data-active={isActive(item.href)}
            href={item.href}
            key={item.href}
            onClick={handleHashClick(item.href)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
