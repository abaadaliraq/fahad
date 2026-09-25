import type { Metadata } from "next";
import { DarbAlTabanaPage } from "@/components/ventures/DarbAlTabanaPage";

export const metadata: Metadata = {
  title: "درب التبانة",
  description: "درب التبانة شركة أسسها فهد المدرس، ويشغل فيها منصب المؤسس والرئيس التنفيذي، وتعمل في التسويق والإعلام وتطوير الأعمال والمشاريع.",
  alternates: {
    canonical: "/ventures/darb-al-tabana",
  },
  openGraph: {
    title: "Darb Al-Tabana | فهد المدرس",
    description: "Fahad Al Modares is the Founder and CEO of Darb Al-Tabana, a company working across marketing, media and business development.",
    url: "/ventures/darb-al-tabana",
    images: [
      {
        url: "/images/ventures/details/darb.jpg",
        width: 1200,
        height: 630,
        alt: "Darb Al-Tabana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darb Al-Tabana | Fahad Al Modares",
    description: "Fahad Al Modares is the Founder and CEO of Darb Al-Tabana.",
    images: ["/images/ventures/details/darb.jpg"],
  },
};

export default function DarbPage() {
  return <DarbAlTabanaPage />;
}
