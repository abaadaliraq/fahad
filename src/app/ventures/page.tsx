import type { Metadata } from "next";
import { Topbar } from "@/components/layout/Topbar";
import { Footer } from "@/components/sections/Footer";
import { VentureChapters } from "@/components/ventures/VentureChapters";
import { VenturesHero } from "@/components/ventures/VenturesHero";
import { VenturesIntro } from "@/components/ventures/VenturesIntro";
import { VenturesOtherWork } from "@/components/ventures/VenturesOtherWork";

export const metadata: Metadata = {
  title: "الشركات والمشاريع",
  description:
    "تعرف على شركات ومشاريع فهد المدرس في التسويق، تطوير الأعمال، العقارات، بناء العلامات التجارية والشراكات.",
  alternates: {
    canonical: "/ventures",
  },
  openGraph: {
    title: "الشركات والمشاريع | فهد المدرس",
    description:
      "تعرف على شركات ومشاريع فهد المدرس في التسويق، تطوير الأعمال، العقارات، بناء العلامات التجارية والشراكات.",
    url: "/ventures",
    images: [
      {
        url: "/images/ventures/venturesbg.jpg",
        width: 1200,
        height: 630,
        alt: "الشركات والمشاريع لفهد المدرس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الشركات والمشاريع | فهد المدرس",
    description:
      "تعرف على شركات ومشاريع فهد المدرس في التسويق، تطوير الأعمال، العقارات، بناء العلامات التجارية والشراكات.",
    images: ["/images/ventures/venturesbg.jpg"],
  },
};

export default function VenturesPage() {
  return (
    <main className="ventures-detail-page">
      <Topbar />
      <VenturesHero />
      <VenturesIntro />
      <VentureChapters />
      <VenturesOtherWork />
      <Footer />
    </main>
  );
}