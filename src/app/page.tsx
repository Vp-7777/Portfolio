import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Experience } from "@/features/experience/Experience";
import { Projects } from "@/features/projects/Projects";
import { Skills } from "@/features/skills/Skills";
import { Achievements } from "@/features/growth/Achievements";
import { Contact } from "@/features/connect/Contact";
import { Footer } from "@/features/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F6F1E7]">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
