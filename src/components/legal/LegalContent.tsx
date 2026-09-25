"use client";

import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Topbar } from "@/components/layout/Topbar";
import { useLanguage } from "@/components/providers/LanguageProvider";

type LegalKind = "privacy" | "terms";

const content = {
  privacy: {
    ar: {
      label: "سياسة الخصوصية",
      title: "الخصوصية",
      intro: "نحترم خصوصيتك. توضح هذه الصفحة بشكل مختصر كيف يتعامل الموقع مع المعلومات أثناء استخدامك له.",
      sections: [
        ["المعلومات", "لا يجمع هذا الموقع معلومات شخصية حساسة بشكل مباشر. قد يتم استخدام بيانات تقنية أساسية لتحسين تجربة التصفح وأداء الموقع."],
        ["الروابط الخارجية", "قد يحتوي الموقع على روابط إلى منصات خارجية مثل Instagram. استخدامك لهذه المنصات يخضع لسياسات الخصوصية الخاصة بها."],
        ["التواصل", "عند التواصل عبر البريد أو الروابط الخارجية، يتم استخدام المعلومات فقط للرد على الاستفسار أو متابعة فرصة تعاون."],
      ],
      back: "العودة للرئيسية",
    },
    en: {
      label: "Privacy Policy",
      title: "Privacy",
      intro: "We respect your privacy. This page briefly explains how the website handles information while you browse it.",
      sections: [
        ["Information", "This website does not directly collect sensitive personal information. Basic technical data may be used to improve browsing experience and site performance."],
        ["External links", "The website may link to external platforms such as Instagram. Your use of those platforms is governed by their own privacy policies."],
        ["Contact", "When you contact through email or external links, the information is used only to respond to the inquiry or follow up on a collaboration opportunity."],
      ],
      back: "Back to home",
    },
  },
  terms: {
    ar: {
      label: "شروط الاستخدام",
      title: "شروط الاستخدام",
      intro: "باستخدامك لهذا الموقع، فإنك توافق على هذه الشروط المختصرة الخاصة بالموقع الرسمي لفهد المدرس.",
      sections: [
        ["المحتوى", "المحتوى المنشور للتعريف بفهد المدرس، خبراته، مشاريعه وروابطه الرسمية. لا يجوز إعادة استخدامه بطريقة مضللة أو من دون إذن مناسب."],
        ["الدقة والتحديث", "نحرص على إبقاء المعلومات واضحة ومحدثة، لكن بعض التفاصيل قد تتغير مع الوقت، خصوصاً روابط المشاريع أو قنوات التواصل."],
        ["الاستخدام", "يرجى استخدام الموقع بطريقة قانونية ومحترمة، وعدم محاولة تعطيل الموقع أو إساءة استخدام الروابط والمحتوى."],
      ],
      back: "العودة للرئيسية",
    },
    en: {
      label: "Terms of Use",
      title: "Terms of Use",
      intro: "By using this website, you agree to these short terms for the official website of Fahad Al Modares.",
      sections: [
        ["Content", "The content introduces Fahad Al Modares, his experience, ventures and official links. It may not be reused in a misleading way or without appropriate permission."],
        ["Accuracy and updates", "We aim to keep the information clear and current, but some details may change over time, especially venture links or contact channels."],
        ["Use", "Please use the website legally and respectfully, and do not attempt to disrupt the site or misuse its links and content."],
      ],
      back: "Back to home",
    },
  },
} as const;

export function LegalContent({ kind }: { kind: LegalKind }) {
  const { language, direction } = useLanguage();
  const page = content[kind][language];

  return (
    <>
      <Topbar />
      <main className="legal-page" dir={direction} data-language={language}>
        <article className="legal-page__inner">
          <p className="legal-page__label">{page.label}</p>
          <h1>{page.title}</h1>
          <p className="legal-page__intro">{page.intro}</p>
          <div className="legal-page__sections">
            {page.sections.map(([title, text]) => (
              <section className="legal-page__section" key={title}>
                <h2>{title}</h2>
                <p>{text}</p>
              </section>
            ))}
          </div>
          <Link className="legal-page__link" href="/">{page.back}</Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
