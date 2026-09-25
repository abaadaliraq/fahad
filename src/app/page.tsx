import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Ventures } from "@/components/sections/Ventures";
import { VisionExperience } from "@/components/sections/VisionExperience";
import { CurrentRoles } from "@/components/sections/CurrentRoles";
import { Contact } from "@/components/sections/Contact";

const siteUrl = "https://www.fahadalmodares.com";

const siteGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#fahad`,
      name: "Fahad Al Modares",
      alternateName: ["فهد المدرس", "Fahad Almodares"],
      url: `${siteUrl}/`,
      image: `${siteUrl}/images/fahadhero.jpg`,
      jobTitle: ["Entrepreneur", "Business Developer", "Knowledge Communicator"],
      description:
        "Official website of Fahad Al Modares, an Iraqi entrepreneur with experience in business development, marketing, public relations, real estate, brand development and strategic partnerships.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Baghdad",
        addressCountry: "IQ",
      },
      knowsAbout: [
        "Business development in Iraq",
        "Marketing in Iraq",
        "Public relations",
        "Real estate marketing",
        "Brand development",
        "Strategic partnerships",
        "Entrepreneurship in Baghdad",
      ],
      worksFor: {
        "@id": `${siteUrl}/#darb-al-tabana`,
      },
      memberOf: [
        {
          "@type": "Organization",
          name: "Startup Grind Baghdad",
        },
        {
          "@type": "Organization",
          name: "Al-Shafaq Humanitarian Assistance Organization",
        },
      ],
      sameAs: ["https://www.instagram.com/fahad.almodares/"],
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#darb-al-tabana`,
      name: "Darb Al-Tabana",
      alternateName: "درب التبانة",
      url: `${siteUrl}/ventures/darb-al-tabana`,
      founder: {
        "@id": `${siteUrl}/#fahad`,
      },
      sameAs: ["https://www.instagram.com/darb.al.tabana/"],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraphJsonLd) }}
      />
      <Hero />
      <Journey />
      <Ventures />
      <VisionExperience />
      <CurrentRoles />
      <Contact />
      <Footer />
    </>
  );
}