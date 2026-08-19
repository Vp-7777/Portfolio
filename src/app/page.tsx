import { Hero } from "@/features/hero/Hero";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { ExperienceSection } from "@/features/experience/ExperienceSection";
import { GrowthSection } from "@/features/growth/GrowthSection";
import { OutlookSection } from "@/features/forward/OutlookSection";
import { ContactSection } from "@/features/connect/ContactSection";
import { Footer } from "@/features/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#090d16]">
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <GrowthSection />
      <OutlookSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
