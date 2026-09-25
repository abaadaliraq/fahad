import type { Metadata } from "next";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/sections/Footer";
import { CareerChapters } from "@/components/journey/CareerChapters";
import { JourneyHero } from "@/components/journey/JourneyHero";
import { JourneyIntro } from "@/components/journey/JourneyIntro";

export const metadata: Metadata = {
  title: "المسيرة المهنية",
  description:
    "تعرف على المسيرة المهنية لفهد المدرس، من القطاع المصرفي والعلاقات العامة والتسويق إلى ريادة الأعمال وتطوير المشاريع والشراكات.",
  alternates: {
    canonical: "/journey",
  },
  openGraph: {
    title: "المسيرة المهنية | فهد المدرس",
    description:
      "تعرف على المسيرة المهنية لفهد المدرس، من القطاع المصرفي والعلاقات العامة والتسويق إلى ريادة الأعمال وتطوير المشاريع والشراكات.",
    url: "/journey",
    images: [
      {
        url: "/images/journey/details/banking.jpg",
        width: 1200,
        height: 630,
        alt: "المسيرة المهنية لفهد المدرس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "المسيرة المهنية | فهد المدرس",
    description:
      "تعرف على المسيرة المهنية لفهد المدرس، من القطاع المصرفي والعلاقات العامة والتسويق إلى ريادة الأعمال وتطوير المشاريع والشراكات.",
    images: ["/images/journey/details/banking.jpg"],
  },
};

export default function JourneyPage() {
  return (
    <main className="journey-detail-page">
      <Topbar />
      <JourneyHero />
      <JourneyIntro />
      <CareerChapters />
      <Footer />
    </main>
  );
}