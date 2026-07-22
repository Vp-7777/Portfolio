"use client";

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSystemStore } from "@/store/useSystemStore";
import { Section } from "@/features/ui/Section";
import { TextReveal } from "@/features/ui/TextReveal";

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const setCurrentChapter = useSystemStore((state) => state.setCurrentChapter);

  useEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => setCurrentChapter('contact'), // We'll group about/contact
      onEnterBack: () => setCurrentChapter('contact'),
    });
  }, [setCurrentChapter]);

  return (
    <Section ref={containerRef} className="min-h-screen flex flex-col justify-center border-t border-border bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-12">
          The Architect // 9.70 CGPA
        </p>
        
        <TextReveal className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
          High-performing Computer Science Engineer specializing in AI & Machine Learning.
        </TextReveal>
        
        <div className="mt-12 max-w-3xl">
          <TextReveal className="text-xl md:text-2xl text-muted leading-relaxed">
            Passionate about writing clean, efficient, and maintainable code. I solve complex engineering problems using strong computer science fundamentals, bridging the gap between intelligent AI systems and robust, scalable full-stack applications.
          </TextReveal>
        </div>
      </div>
    </Section>
  );
}
