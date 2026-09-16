import { Topbar } from "@/components/layout/Topbar";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { Footer } from "@/components/sections/Footer";
import { VentureChapters } from "@/components/ventures/VentureChapters";
import { VenturesHero } from "@/components/ventures/VenturesHero";
import { VenturesIntro } from "@/components/ventures/VenturesIntro";
import { VenturesOtherWork } from "@/components/ventures/VenturesOtherWork";

export default function VenturesPage() {
  return (
    <LanguageProvider>
      <main className="ventures-detail-page">
        <Topbar />
        <VenturesHero />
        <VenturesIntro />
        <VentureChapters />
        <VenturesOtherWork />
        <Footer />
      </main>
    </LanguageProvider>
  );
}