"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

const chapterImages = [
  "/images/ventures/details/darb.jpg",
  "/images/ventures/details/majarra.jpg",
] as const;

const content = {
  ar: [
    {
      number: "01",
      eyebrow: "Darb Al-Tabana / درب التبانة",
      role: "Founder & CEO / المؤسس والرئيس التنفيذي",
      title: ["بناء الحضور", "من الاستراتيجية إلى التنفيذ"],
      paragraphs: [
        "درب التبانة شركة تعمل في التسويق، الإعلام، تطوير الأعمال والمشاريع، صناعة المحتوى، بناء وتطوير العلامات التجارية وتنظيم الفعاليات والمؤتمرات.",
        "أسس فهد المدرس شركة درب التبانة ويتولى منصب المؤسس والرئيس التنفيذي للشركة.",
        "تبدأ الشركة من فهم المؤسسة والسوق والجمهور، وتحديد موقع العلامة التجارية، ثم تطوير الاستراتيجية وتحويلها إلى خطوات ومشاريع قابلة للتنفيذ.",
      ],
      image: chapterImages[0],
      tone: "dark",
      fields: ["Marketing Strategy", "Brand Development", "Content & Media", "Business Development", "Events & Conferences", "Strategic Planning", "Public Relations"],
      stats: [
        ["+1M", "Reach"],
        ["60+", "Clients"],
        ["3", "Countries"],
      ],
    },
    {
      number: "02",
      eyebrow: "Al-Majarra Real Estate Marketing / المجرة للتسويق العقاري",
      role: "Founder / المؤسس",
      title: ["العقار كقرار", "مالي طويل الأمد"],
      paragraphs: [
        "المجرة شركة متخصصة في التسويق والاستشارات العقارية للمجمعات السكنية والمشاريع العقارية، مع التركيز على الأسواق والفرص في العراق، مصر ودبي.",
        "تبدأ العلاقة من فهم احتياجات العميل وأهدافه، مروراً بمقارنة المشاريع وخطط الدفع ودراسة الفرص، وتستمر بالمتابعة والدعم والاستشارة بعد إتمام الصفقة.",
      ],
      image: chapterImages[1],
      tone: "cream",
      journey: [
        ["قبل الشراء", "فهم الاحتياجات • مقارنة المشاريع • دراسة السوق"],
        ["أثناء الشراء", "التنسيق • متابعة الإجراءات • فهم تفاصيل الصفقة"],
        ["بعد البيع", "المتابعة • الاستشارة • الفرص المستقبلية"],
      ],
      marketingTitle: "التسويق والإعلام العقاري",
      marketingText: "إلى جانب العمل مع المشترين والمستثمرين، تعمل المجرة على تطوير الحضور التسويقي والإعلامي للمشاريع والمجمعات السكنية.",
      keywords: ["Strategic Marketing", "Real Estate Content", "Advertising", "Audience Strategy", "Digital Presence", "Sales Messaging"],
    },
  ],
  en: [
    {
      number: "01",
      eyebrow: "Darb Al-Tabana",
      role: "Founder & CEO",
      title: ["Building Presence", "from Strategy to Execution"],
      paragraphs: [
        "Darb Al-Tabana works across marketing, media, business and project development, content creation, brand building and event and conference organization.",
        "Fahad Al Modares is the Founder and CEO of Darb Al-Tabana.",
        "The company begins by understanding the institution, market and audience, defining the brand position, then turning strategy into executable steps and projects.",
      ],
      image: chapterImages[0],
      tone: "dark",
      fields: ["Marketing Strategy", "Brand Development", "Content & Media", "Business Development", "Events & Conferences", "Strategic Planning", "Public Relations"],
      stats: [
        ["+1M", "Reach"],
        ["60+", "Clients"],
        ["3", "Countries"],
      ],
    },
    {
      number: "02",
      eyebrow: "Al-Majarra Real Estate Marketing",
      role: "Founder",
      title: ["Real Estate as", "a Long-Term Financial Decision"],
      paragraphs: [
        "Al-Majarra specializes in real estate marketing and advisory for residential communities and property projects, focusing on markets and opportunities in Iraq, Egypt and Dubai.",
        "The relationship starts with understanding the client's needs and goals, then comparing projects, payment plans and opportunities, and continues through follow-up, support and advisory after the deal is completed.",
      ],
      image: chapterImages[1],
      tone: "cream",
      journey: [
        ["Before Purchase", "Needs • Project comparison • Market study"],
        ["During Purchase", "Coordination • Process follow-up • Deal details"],
        ["After Sale", "Follow-up • Advisory • Future opportunities"],
      ],
      marketingTitle: "Real Estate Marketing & Media",
      marketingText: "Alongside work with buyers and investors, Al-Majarra develops the marketing and media presence of projects and residential communities.",
      keywords: ["Strategic Marketing", "Real Estate Content", "Advertising", "Audience Strategy", "Digital Presence", "Sales Messaging"],
    },
  ],
} as const;

export function VentureChapters() {
  const { language, direction } = useLanguage();
  const chapters = content[language];

  return (
    <section className="venture-chapters" dir={direction} data-language={language}>
      {chapters.map((chapter, index) => (
        <article className="venture-chapter" dir={direction} data-language={language} data-cursor-theme={chapter.tone === "cream" ? "light" : "dark"} data-tone={chapter.tone} data-order={index % 2 === 0 ? "image-first" : "text-first"} key={chapter.number}>
          <div className="venture-chapter__media" aria-hidden="true">
            <Image src={chapter.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="venture-chapter__content">
            <p className="venture-chapter__number">{chapter.number}</p>
            <p className="venture-chapter__eyebrow">{chapter.eyebrow}</p>
            <p className="venture-chapter__role">{chapter.role}</p>
            <h2>{chapter.title.map((line) => <span key={line}>{line}</span>)}</h2>
            <div className="venture-chapter__paragraphs">
              {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            {"fields" in chapter ? (
              <>
                <div className="venture-chapter__fields">
                  {chapter.fields.map((field) => <span key={field}>{field}</span>)}
                </div>
                <div className="venture-chapter__stats">
                  {chapter.stats.map(([value, label]) => (
                    <div key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : null}

            {"journey" in chapter ? (
              <>
                <div className="venture-chapter__journey">
                  {chapter.journey.map(([title, text]) => (
                    <div key={title}>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="venture-chapter__subsection">
                  <h3>{chapter.marketingTitle}</h3>
                  <p>{chapter.marketingText}</p>
                  <div>
                    {chapter.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </article>
      ))}
    </section>
  );
}
