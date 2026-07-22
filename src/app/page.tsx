import { Hero } from "@/features/hero/Hero";
import { PhilosophySection } from "@/features/philosophy/PhilosophySection";
import { ExperienceSection } from "@/features/experience/ExperienceSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { GrowthSection } from "@/features/growth/GrowthSection";
import { OutlookSection } from "@/features/forward/OutlookSection";
import { ContactSection } from "@/features/connect/ContactSection";
import { Footer } from "@/features/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Hero />
      <PhilosophySection />
      <ExperienceSection />
      <ProjectsSection />
      <GrowthSection />
      <OutlookSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
