"use client";

import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Topbar } from "@/components/layout/Topbar";
import { useLanguage } from "@/components/providers/LanguageProvider";

const content = {
  ar: {
    label: "Darb Al-Tabana / درب التبانة",
    title: "درب التبانة",
    roleName: "فهد المدرس",
    role: "المؤسس والرئيس التنفيذي",
    intro: "شركة تعمل في التسويق، الإعلام، تطوير الأعمال والمشاريع، صناعة المحتوى، بناء وتطوير العلامات التجارية وتنظيم الفعاليات والمؤتمرات.",
    details: [
      ["العلاقة", "أسس فهد المدرس شركة درب التبانة ويتولى منصب المؤسس والرئيس التنفيذي للشركة."],
      ["مجالات العمل", "Marketing Strategy، Brand Development، Content & Media، Business Development، Public Relations، Events & Conferences."],
      ["الموقع", "Baghdad — Iraq"],
    ],
    instagram: "Instagram ↗",
    home: "العودة للرئيسية",
  },
  en: {
    label: "Darb Al-Tabana",
    title: "Darb Al-Tabana",
    roleName: "Fahad Al Modares",
    role: "Founder & CEO",
    intro: "A company working across marketing, media, business and project development, content creation, brand building and event and conference organization.",
    details: [
      ["Relationship", "Fahad Al Modares is the Founder and CEO of Darb Al-Tabana."],
      ["Fields", "Marketing Strategy, Brand Development, Content & Media, Business Development, Public Relations, Events & Conferences."],
      ["Location", "Baghdad — Iraq"],
    ],
    instagram: "Instagram ↗",
    home: "Back to home",
  },
} as const;

export function DarbAlTabanaPage() {
  const { language, direction } = useLanguage();
  const page = content[language];

  return (
    <>
      <Topbar />
      <main className="darb-page" dir={direction} data-language={language}>
        <section className="darb-page__inner">
          <p className="darb-page__label">{page.label}</p>
          <h1>{page.title}</h1>
          <div className="darb-page__role">
            <span>{page.roleName}</span>
            <strong>{page.role}</strong>
          </div>
          <p className="darb-page__intro">{page.intro}</p>
          <div className="darb-page__details">
            {page.details.map(([title, text]) => (
              <div className="darb-page__detail" key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="darb-page__links">
            <a href="https://www.instagram.com/darb.al.tabana/" target="_blank" rel="noopener noreferrer">{page.instagram}</a>
            <Link href="/">{page.home}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
