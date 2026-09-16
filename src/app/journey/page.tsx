import { Topbar } from "@/components/layout/Topbar";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { Footer } from "@/components/sections/Footer";
import { CareerChapters } from "@/components/journey/CareerChapters";
import { JourneyHero } from "@/components/journey/JourneyHero";
import { JourneyIntro } from "@/components/journey/JourneyIntro";

export default function JourneyPage() {
  return (
    <LanguageProvider>
      <main className="journey-detail-page">
        <Topbar />
        <JourneyHero />
        <JourneyIntro />
        <CareerChapters />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
