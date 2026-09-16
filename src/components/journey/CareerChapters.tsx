"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

const journeyImages = [
  "/images/journey/details/banking.jpg",
  "/images/journey/details/marketing.jpg",
  "/images/journey/details/entrepreneurship.jpg",
  "/images/journey/details/impact.jpg",
] as const;

const content = {
  ar: [
    {
      number: "01",
      title: "البداية في القطاع المصرفي",
      meta: "الإدارة • العمليات • العلاقات العامة",
      body: "بدأت المسيرة المهنية من القطاع المصرفي، حيث اكتسب فهد خبرة في الإدارة والعمليات وبناء الهياكل المؤسسية، قبل أن تتوسع مسؤولياته إلى العلاقات العامة والتسويق والاتصال.",
      image: journeyImages[0],
      items: [
        ["Zain Iraq Bank", "Founding Administrative Member"],
        ["Zain Iraq Bank", "Executive Director - Administrative Affairs"],
        ["Zain Iraq Bank", "Director of Public Relations & Marketing"],
        ["Al-Alam Bank", "Public Relations & Marketing Manager"],
      ],
      tone: "cream",
    },
    {
      number: "02",
      title: "العلاقات العامة والتسويق",
      meta: "الاتصال المؤسسي • النمو • الاستراتيجية",
      body: "شكّلت العلاقات العامة والتسويق مرحلة محورية في المسيرة، شملت تطوير الحضور المؤسسي، بناء العلاقات، إدارة الاتصال والتسويق والمساهمة في توسع المؤسسات وتطوير فروعها.",
      image: journeyImages[1],
      items: [
        ["Public Relations", "Relationship building and communication"],
        ["Marketing Strategy", "Positioning and institutional presence"],
        ["Corporate Communication", "Messaging and growth support"],
        ["Institutional Growth", "Branch and network development"],
      ],
      tone: "dark",
    },
    {
      number: "03",
      title: "ريادة الأعمال وتطوير المشاريع",
      meta: "التأسيس • تطوير الأعمال • بناء العلامات",
      body: "انتقلت الخبرة المتراكمة إلى تأسيس وتطوير أعمال مستقلة تعمل في التسويق، الإعلام، تطوير الأعمال وبناء العلامات التجارية.",
      image: journeyImages[2],
      items: [
        ["Darb Al-Tabana", "Founder & CEO - التسويق، الإعلام، تطوير الأعمال، صناعة المحتوى، بناء العلامات وتنظيم الفعاليات"],
        ["Al-Majarra Real Estate Marketing", "Founder - التسويق والاستشارات العقارية والمشاريع في العراق، مصر ودبي"],
      ],
      tone: "cream",
    },
    {
      number: "04",
      title: "الشراكات والمجتمع والأثر",
      meta: "الشراكات • المجتمعات • نقل المعرفة",
      body: "امتدت المسيرة إلى بناء المجتمعات الريادية، تطوير الشراكات والعمل المؤسسي والمجتمعي، إلى جانب نقل المعرفة والخبرة من خلال المشاريع والفعاليات والعلاقات المهنية.",
      image: journeyImages[3],
      items: [
        ["Startup Grind Baghdad", "Partner & Founder / Regional Marketing Director"],
        ["Al-Shafaq Humanitarian Assistance Organization", "Chairman of the Board of Trustees"],
        ["Al-Sayd Iraqi Club", "Exclusive Advertising Agent"],
      ],
      tone: "dark",
    },
  ],
  en: [
    {
      number: "01",
      title: "Banking Foundations",
      meta: "Administration • Operations • Public Relations",
      body: "The professional journey began in banking, where Fahad gained experience in administration, operations and institutional structures before his responsibilities expanded into public relations, marketing and communication.",
      image: journeyImages[0],
      items: [
        ["Zain Iraq Bank", "Founding Administrative Member"],
        ["Zain Iraq Bank", "Executive Director - Administrative Affairs"],
        ["Zain Iraq Bank", "Director of Public Relations & Marketing"],
        ["Al-Alam Bank", "Public Relations & Marketing Manager"],
      ],
      tone: "cream",
    },
    {
      number: "02",
      title: "Public Relations & Marketing",
      meta: "Corporate Communication • Growth • Strategy",
      body: "Public relations and marketing formed a central chapter, covering institutional presence, relationship building, communication management and contribution to organizational expansion.",
      image: journeyImages[1],
      items: [
        ["Public Relations", "Relationship building and communication"],
        ["Marketing Strategy", "Positioning and institutional presence"],
        ["Corporate Communication", "Messaging and growth support"],
        ["Institutional Growth", "Branch and network development"],
      ],
      tone: "dark",
    },
    {
      number: "03",
      title: "Entrepreneurship & Business Development",
      meta: "Ventures • Business Development • Brand Building",
      body: "Accumulated experience moved into founding and developing independent businesses across marketing, media, business development and brand building.",
      image: journeyImages[2],
      items: [
        ["Darb Al-Tabana", "Founder & CEO - marketing, media, business development, content, branding and event organization"],
        ["Al-Majarra Real Estate Marketing", "Founder - real estate marketing, consulting and projects in Iraq, Egypt and Dubai"],
      ],
      tone: "cream",
    },
    {
      number: "04",
      title: "Partnerships, Community & Impact",
      meta: "Partnerships • Communities • Knowledge",
      body: "The journey extended into entrepreneurial communities, partnerships and civic work, alongside sharing knowledge and experience through projects, events and professional relationships.",
      image: journeyImages[3],
      items: [
        ["Startup Grind Baghdad", "Partner & Founder / Regional Marketing Director"],
        ["Al-Shafaq Humanitarian Assistance Organization", "Chairman of the Board of Trustees"],
        ["Al-Sayd Iraqi Club", "Exclusive Advertising Agent"],
      ],
      tone: "dark",
    },
  ],
} as const;

export function CareerChapters() {
  const { language, direction } = useLanguage();
  const chapters = content[language];

  return (
    <section className="career-chapters" dir={direction} data-language={language}>
      {chapters.map((chapter) => (
        <article className="career-chapter" dir={direction} data-language={language} data-cursor-theme={chapter.tone === "cream" ? "light" : "dark"} data-tone={chapter.tone} key={chapter.number}>
          <div className="career-chapter__media" aria-hidden="true">
            <Image src={chapter.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="career-chapter__body">
            <div className="career-chapter__meta">
              <span>{chapter.number}</span>
              <p>{chapter.meta}</p>
            </div>
            <div className="career-chapter__content">
              <h2>{chapter.title}</h2>
              <p>{chapter.body}</p>
              <div className="career-chapter__rows">
                {chapter.items.map(([name, role]) => (
                  <div className="career-chapter__row" key={`${chapter.number}-${name}-${role}`}>
                    <span>{name}</span>
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

