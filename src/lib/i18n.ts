export type Language = "ar" | "en";

export const translations = {
  ar: {
    name: "فهد المدرس",
    topbarName: "Fahad Al Modares",
    eyebrow: "فهد المدرس",
    headline: ["رائد أعمال", "وناقل للمعرفة"],
    supporting: "ريادة الأعمال • تطوير الأعمال • التسويق • العلاقات • العقارات",
    cta: "استكشف المسيرة",
    ctaArrow: "←",
    menu: "القائمة",
    nav: [
      { label: "الرئيسية", href: "/" },
      { label: "المسيرة", href: "/journey" },
      { label: "المشاريع", href: "/ventures" },
      { label: "الرؤية والخبرة", href: "/#vision" },
      { label: "الأدوار الحالية", href: "/#current-roles" },
      { label: "تواصل", href: "/#contact" },
    ],
    journey: {
      label: "المسيرة المهنية",
      title: ["من العمل المصرفي", "إلى بناء المشاريع"],
      intro:
        "مسيرة متعددة القطاعات جمعت بين الإدارة، التسويق، العلاقات، تطوير الأعمال وريادة المشاريع.",
      cta: "استكشف المسيرة كاملة",
      ctaArrow: "←",
      cards: [
        {
          number: "01",
          title: "البداية المصرفية",
          description:
            "محطات إدارية وتسويقية أسست خبرة فهد في الإدارة، العلاقات العامة وبناء الحضور المؤسسي.",
          keywords: ["Banking", "Administration", "PR & Marketing"],
          image: "/images/journey/journey-01.jpg",
          tone: "teal",
        },
        {
          number: "02",
          title: "الانتقال إلى ريادة الأعمال",
          description:
            "خبرة تحولت إلى مشاريع وشركات تعمل في التسويق، تطوير الأعمال، الإعلام وبناء العلامات التجارية.",
          keywords: ["Entrepreneurship", "Business Development", "Brand Strategy"],
          image: "/images/journey/journey-02.jpg",
          tone: "red",
        },
        {
          number: "03",
          title: "المشاريع والأثر",
          description:
            "تطوير مشاريع وشراكات في مجالات الأعمال، العقارات، المجتمعات الريادية ونقل المعرفة والخبرة.",
          keywords: ["Real Estate", "Partnerships", "Communities", "Knowledge"],
          image: "/images/journey/journey-03.jpg",
          tone: "charcoal",
        },
      ],
    },
    ventures: {
      label: "الشركات والمشاريع",
      detail: "01 / VENTURES",
      footer: "BAGHDAD - IRAQ",
      eyebrow: "فهد المدرس",
      title: ["مشاريع تُبنى", "حول الفرص والأفكار"],
      description:
        "أسّس فهد وطوّر مشاريع تعمل في مجالات التسويق، تطوير الأعمال، الإعلام والعقارات، مستفيداً من خبرة متعددة القطاعات وشبكة علاقات واسعة لبناء فرص وشراكات قابلة للنمو.",
      names: ["Darb Al-Tabana", "Al-Majarra Real Estate Marketing"],
      cta: "استكشف الشركات والمشاريع",
      ctaArrow: "←",
      backgroundImage: "/images/ventures/venturesbg.jpg",
      cardImage: "/images/ventures/ventures-card.jpg",
    },
    footer: {
      name: "فهد المدرس",
      intro: "رائد أعمال وناقل للمعرفة، يعمل على بناء مشاريع وعلاقات تمتد بين التسويق وتطوير الأعمال والعقارات.",
      navigationLabel: "روابط الفوتر",
      contactTitle: "تواصل",
      socialTitle: "مواقع التواصل",
      phone: "07800098989",
      phoneHref: "+9647800098989",
      email: "hello@fahadmodares.com",
      location: "BAGHDAD - IRAQ",
      copyright: "©2026 فهد المدرس. جميع الحقوق محفوظة.",
      columns: [
        {
          title: "روابط سريعة",
          links: [
            { label: "الرئيسية", href: "/" },
            { label: "المسيرة", href: "/journey" },
            { label: "المشاريع", href: "/ventures" },
            { label: "تواصل", href: "/#contact" },
          ],
        },
        {
          title: "الموقع",
          links: [
            { label: "الشركات والمشاريع", href: "/ventures" },
            { label: "المسيرة المهنية", href: "/journey" },
            { label: "شروط الاستخدام", href: "/terms" },
            { label: "سياسة الخصوصية", href: "/privacy" },
          ],
        },
      ],
      contactGroups: [
        {
          title: "واتساب",
          links: [
            { label: "واتساب شخصي", href: "https://wa.me/9647800098989" },
            { label: "درب التبانة", href: "https://wa.me/9647700001735" },
            { label: "المجرة", href: "https://wa.me/9647804088880" },
          ],
        },
        {
          title: "إنستغرام",
          links: [
            { label: "إنستغرام شخصي", href: "https://www.instagram.com/fahad.almodares?stkn=ejM1bnJkOHFiNGMw" },
            { label: "إنستغرام أعمال", href: "https://www.instagram.com/fahad.almodaress?stkn=MXV5dDRocDA1bzhscg==" },
            { label: "درب التبانة", href: "https://www.instagram.com/darb.al.tabana?stkn=MWw1cjJycnNmZ25r" },
            { label: "الشفق", href: "https://www.instagram.com/al.shafaq_organization?stkn=Z3o5OGM3dGU5ZG5l" },
            { label: "Startup Grind Baghdad", href: "https://www.instagram.com/sgbaghdad?stkn=aXNmZnl1OGxqejEy" },
            { label: "مجتمع نادي الصيد", href: "https://www.instagram.com/hunting.club.arts?stkn=YWM1cGR0NGh3MmY=" },
          ],
        },
        {
          title: "فيسبوك",
          links: [
            { label: "فيسبوك شخصي", href: "https://www.facebook.com/share/1Dq1zowGnb/?mibextid=wwXIfr" },
            { label: "صفحة فيسبوك", href: "https://www.facebook.com/share/14qLyK4HVDX/?mibextid=wwXIfr" },
          ],
        },
        {
          title: "أخرى",
          links: [
            { label: "إكس / تويتر", href: "https://x.com/Almodaresfahad" },
            { label: "LinkedIn: Fahad almodares" },
          ],
        },
      ],
      social: [
        { label: "Email", href: "mailto:hello@fahadmodares.com", icon: "email" },
        { label: "Instagram", href: "https://www.instagram.com/fahad.almodares?stkn=ejM1bnJkOHFiNGMw", icon: "instagram" },
        { label: "Facebook", href: "https://www.facebook.com/share/1Dq1zowGnb/?mibextid=wwXIfr", icon: "facebook" },
        { label: "X / Twitter", href: "https://x.com/Almodaresfahad", icon: "x" },
      ],
    },
  },
  en: {
    name: "Fahad Al Modares",
    topbarName: "Fahad Al Modares",
    eyebrow: "FAHAD AL MODARES",
    headline: ["ENTREPRENEUR", "& KNOWLEDGE COMMUNICATOR"],
    supporting:
      "BUSINESS DEVELOPMENT • MARKETING • RELATIONSHIPS • REAL ESTATE",
    cta: "Explore the Journey",
    ctaArrow: "→",
    menu: "Menu",
    nav: [
      { label: "Home", href: "/" },
      { label: "Journey", href: "/journey" },
      { label: "Ventures", href: "/ventures" },
      { label: "Vision & Experience", href: "/#vision" },
      { label: "Current Roles", href: "/#current-roles" },
      { label: "Contact", href: "/#contact" },
    ],
    journey: {
      label: "Professional Journey",
      title: ["From Banking", "to Building Businesses"],
      intro:
        "A cross-sector career shaped by banking, management, marketing, business development and entrepreneurship.",
      cta: "Explore the Full Journey",
      ctaArrow: "→",
      cards: [
        {
          number: "01",
          title: "BANKING FOUNDATIONS",
          description:
            "Administrative and marketing roles that built a strong foundation in management, public relations and institutional growth.",
          keywords: ["Banking", "Administration", "PR & Marketing"],
          image: "/images/journey/journey-01.jpg",
          tone: "teal",
        },
        {
          number: "02",
          title: "ENTREPRENEURSHIP",
          description:
            "Experience transformed into companies and ventures across marketing, business development, media and brand building.",
          keywords: ["Entrepreneurship", "Business Development", "Brand Strategy"],
          image: "/images/journey/journey-02.jpg",
          tone: "red",
        },
        {
          number: "03",
          title: "VENTURES & IMPACT",
          description:
            "Building projects and partnerships across business, real estate, entrepreneurial communities and knowledge sharing.",
          keywords: ["Real Estate", "Partnerships", "Communities", "Knowledge"],
          image: "/images/journey/journey-03.jpg",
          tone: "charcoal",
        },
      ],
    },
    ventures: {
      label: "VENTURES",
      detail: "01 / VENTURES",
      footer: "BAGHDAD - IRAQ",
      eyebrow: "FAHAD AL MODARES",
      title: ["Building Ventures", "Around Ideas & Opportunities"],
      description:
        "Fahad has founded and developed ventures across marketing, business development, media and real estate, combining cross-sector experience with strategic relationships to create opportunities built for growth.",
      names: ["Darb Al-Tabana", "Al-Majarra Real Estate Marketing"],
      cta: "Explore Ventures",
      ctaArrow: "→",
      backgroundImage: "/images/ventures/venturesbg.jpg",
      cardImage: "/images/ventures/ventures-card.jpg",
    },
    footer: {
      name: "Fahad Al Modares",
      intro: "Entrepreneur and knowledge communicator building ventures and relationships across marketing, business development and real estate.",
      navigationLabel: "Footer links",
      contactTitle: "Contact",
      socialTitle: "Social media",
      phone: "07800098989",
      phoneHref: "+9647800098989",
      email: "hello@fahadmodares.com",
      location: "BAGHDAD - IRAQ",
      copyright: "©2026 Fahad Al Modares. All rights reserved.",
      columns: [
        {
          title: "Quick Links",
          links: [
            { label: "Home", href: "/" },
            { label: "Journey", href: "/journey" },
            { label: "Ventures", href: "/ventures" },
            { label: "Contact", href: "/#contact" },
          ],
        },
        {
          title: "Website",
          links: [
            { label: "Ventures", href: "/ventures" },
            { label: "Journey", href: "/journey" },
            { label: "Terms of Use", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
          ],
        },
      ],
      contactGroups: [
        {
          title: "WhatsApp",
          links: [
            { label: "Personal WhatsApp", href: "https://wa.me/9647800098989" },
            { label: "Darb Al-Tabana", href: "https://wa.me/9647700001735" },
            { label: "Al-Majarra Real Estate", href: "https://wa.me/9647804088880" },
          ],
        },
        {
          title: "Instagram",
          links: [
            { label: "Personal Instagram", href: "https://www.instagram.com/fahad.almodares?stkn=ejM1bnJkOHFiNGMw" },
            { label: "Business Instagram", href: "https://www.instagram.com/fahad.almodaress?stkn=MXV5dDRocDA1bzhscg==" },
            { label: "Darb Al-Tabana", href: "https://www.instagram.com/darb.al.tabana?stkn=MWw1cjJycnNmZ25r" },
            { label: "Al-Shafaq Organization", href: "https://www.instagram.com/al.shafaq_organization?stkn=Z3o5OGM3dGU5ZG5l" },
            { label: "Startup Grind Baghdad", href: "https://www.instagram.com/sgbaghdad?stkn=aXNmZnl1OGxqejEy" },
            { label: "Iraqi Hunting Club Youth Community", href: "https://www.instagram.com/hunting.club.arts?stkn=YWM1cGR0NGh3MmY=" },
          ],
        },
        {
          title: "Facebook",
          links: [
            { label: "Facebook — Personal", href: "https://www.facebook.com/share/1Dq1zowGnb/?mibextid=wwXIfr" },
            { label: "Facebook Page", href: "https://www.facebook.com/share/14qLyK4HVDX/?mibextid=wwXIfr" },
          ],
        },
        {
          title: "Other",
          links: [
            { label: "X / Twitter", href: "https://x.com/Almodaresfahad" },
            { label: "LinkedIn: Fahad almodares" },
          ],
        },
      ],
      social: [
        { label: "Email", href: "mailto:hello@fahadmodares.com", icon: "email" },
        { label: "Instagram", href: "https://www.instagram.com/fahad.almodares?stkn=ejM1bnJkOHFiNGMw", icon: "instagram" },
        { label: "Facebook", href: "https://www.facebook.com/share/1Dq1zowGnb/?mibextid=wwXIfr", icon: "facebook" },
        { label: "X / Twitter", href: "https://x.com/Almodaresfahad", icon: "x" },
      ],
    },
  },
} as const;



