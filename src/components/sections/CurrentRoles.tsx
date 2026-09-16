"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

const content = {
  ar: {
    label: "الأدوار الحالية",
    heading: ["أدوار يصنع", "من خلالها الأثر"],
    subline: "ثلاث مساحات تجمع ريادة الأعمال، العمل المجتمعي وبناء المجتمعات الريادية.",
    imageAlt: "صورة تمثل الدور الحالي",
    roles: [
      {
        number: "01",
        image: "/images/current-roles/darb.jpg",
        imagePosition: "center top",
        href: "https://www.instagram.com/darb.al.tabana/",
        arabicName: "درب التبانة",
        englishName: "DARB AL-TABANA",
        title: "المؤسس والرئيس التنفيذي",
        keywords: "Marketing • Media • Business Development",
      },
      {
        number: "02",
        image: "/images/current-roles/al-shafaq.jpg",
        imagePosition: "center center",
        href: "https://www.instagram.com/al.shafaq_organization/",
        arabicName: "منظمة الشفق للمساعدات الإنسانية",
        englishName: "AL-SHAFAQ HUMANITARIAN ASSISTANCE ORGANIZATION",
        title: "رئيس مجلس الإدارة",
        keywords: "Humanitarian • Community • Leadership",
        featured: true,
      },
      {
        number: "03",
        image: "/images/current-roles/startup-grind.jpg",
        imagePosition: "center center",
        href: "https://www.instagram.com/sgbaghdad/",
        arabicName: "Startup Grind Baghdad",
        englishName: "STARTUP GRIND BAGHDAD",
        title: "شريك ومدير التسويق الإقليمي",
        keywords: "Entrepreneurship • Community • Marketing",
      },
    ],
  },
  en: {
    label: "Current Roles",
    heading: ["Roles Where", "Impact Takes Shape"],
    subline: "Three spaces connecting entrepreneurship, community work and entrepreneurial ecosystems.",
    imageAlt: "Visual for current role",
    roles: [
      {
        number: "01",
        image: "/images/current-roles/darb.jpg",
        imagePosition: "center top",
        href: "https://www.instagram.com/darb.al.tabana/",
        arabicName: "Darb Al-Tabana",
        englishName: "DARB AL-TABANA",
        title: "Founder & CEO",
        keywords: "Marketing • Media • Business Development",
      },
      {
        number: "02",
        image: "/images/current-roles/al-shafaq.jpg",
        imagePosition: "center center",
        href: "https://www.instagram.com/al.shafaq_organization/",
        arabicName: "Al-Shafaq Humanitarian Assistance Organization",
        englishName: "AL-SHAFAQ HUMANITARIAN ASSISTANCE ORGANIZATION",
        title: "Chairman of the Board",
        keywords: "Humanitarian • Community • Leadership",
        featured: true,
      },
      {
        number: "03",
        image: "/images/current-roles/startup-grind.jpg",
        imagePosition: "center center",
        href: "https://www.instagram.com/sgbaghdad/",
        arabicName: "Startup Grind Baghdad",
        englishName: "STARTUP GRIND BAGHDAD",
        title: "Partner & Regional Marketing Director",
        keywords: "Entrepreneurship • Community • Marketing",
      },
    ],
  },
} as const;

export function CurrentRoles() {
  const { language, direction } = useLanguage();
  const section = content[language];

  return (
    <section className="current-roles" id="current-roles" dir={direction} data-language={language} data-cursor-theme="dark">
      <div className="current-roles__inner">
        <header className="current-roles__header">
          <p className="current-roles__label">{section.label}</p>
          <h2 className="current-roles__heading">
            {section.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="current-roles__subline">{section.subline}</p>
        </header>

        <div className="current-roles__panels" aria-label={section.label}>
          {section.roles.map((role) => (
            <a
              className="current-roles__panel"
              data-featured={role.number === "02" ? "true" : "false"}
              href={role.href}
              key={role.number}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="current-roles__image"
                src={role.image}
                alt={section.imageAlt}
                fill
                sizes="(max-width: 900px) 82vw, 33vw"
                style={{ objectPosition: role.imagePosition }}
              />
              <span className="current-roles__overlay" aria-hidden="true" />
              <span className="current-roles__arrow" aria-hidden="true">↗</span>
              <span className="current-roles__copy">
                <span className="current-roles__number">{role.number}</span>
                <span className="current-roles__name">{role.arabicName}</span>
                <span className="current-roles__english">{role.englishName}</span>
                <span className="current-roles__position">{role.title}</span>
                <span className="current-roles__keywords">{role.keywords}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}




