import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Ventures } from "@/components/sections/Ventures";
import { VisionExperience } from "@/components/sections/VisionExperience";
import { CurrentRoles } from "@/components/sections/CurrentRoles";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <LanguageProvider>
      <Hero />
      <Journey />
      <Ventures />
      <VisionExperience />
      <CurrentRoles />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}
