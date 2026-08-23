"use client";

import { useState } from "react";
import { CheckCircle2, Cpu, ExternalLink, MapPin, Server, Smartphone, Sparkles, Zap } from "lucide-react";
import { ScrollReveal } from "@/features/motion/ScrollReveal";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  metrics: {
    badge: string;
    value: string;
    subtext: string;
  };
  wireframe: "mobile" | "backend";
}

const experiences: ExperienceItem[] = [
  {
    id: "rideabit",
    role: "Software Engineering Intern",
    company: "RideAbit",
    type: "Mobile Engineering & Platform",
    location: "Remote",
    period: "Jun 2026 – Present (3 mos)",
    summary: "Architecting cross-platform mobile ride-sharing features with optimized state caching and fluid native navigation.",
    highlights: [
      "Engineered full lifecycle React Native & Expo CLI mobile features deployed to production.",
      "Optimized gesture handlers and responsive layouts achieving smooth 60 FPS client rendering.",
      "Collaborated in Agile sprints using Git/GitHub feature branching and collaborative code reviews.",
    ],
    technologies: ["React Native", "Expo CLI", "TypeScript", "JavaScript", "Mobile App Dev", "Git & GitHub"],
    metrics: {
      badge: "PRODUCTION RELEASE",
      value: "60 FPS Native UI",
      subtext: "Cross-Platform Ride-Sharing",
    },
    wireframe: "mobile",
  },
  {
    id: "qraptor",
    role: "AI Engineering Intern",
    company: "QRaptor",
    type: "AI Backend & Microservices",
    location: "Remote",
    period: "Jan 2026 – May 2026 (5 mos)",
    summary: "Built scalable asynchronous REST APIs and machine learning model evaluation pipelines with strict isolation.",
    highlights: [
      "Engineered high-concurrency FastAPI microservices handling real-time AI inference requests.",
      "Integrated secure JWT authentication and optimized PostgreSQL database connection pooling.",
      "Conducted automated unit testing, endpoint benchmarking, and cloud API deployment pipelines.",
    ],
    technologies: ["Python", "FastAPI", "REST APIs", "Machine Learning", "JWT Auth", "PostgreSQL"],
    metrics: {
      badge: "HIGH THROUGHPUT",
      value: "Sub-15ms Latency",
      subtext: "FastAPI AI Microservices",
    },
    wireframe: "backend",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-28 sm:py-36 bg-[#08080A] text-[#ECEAE2]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-20">
        
        {/* Exact Reference Centered Massive Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-[5.8rem] text-white tracking-[-0.04em] uppercase leading-none">
              EXPERIENCE
            </h2>

            <p className="font-mono text-xs sm:text-[13px] text-[#A1A1AA] tracking-[0.06em] uppercase max-w-2xl mx-auto leading-relaxed">
              COMMERCIAL SOFTWARE ENGINEERING INTERNSHIPS, PRODUCTION MOBILE RELEASES, AND AI MICROSERVICES ARCHITECTURE.
            </p>
          </div>
        </ScrollReveal>

        {/* Reference-Styled Visual Architecture Company Cards */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={exp.id} direction="up" delay={idx * 150}>
              <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-8 sm:p-12 lg:p-14 group transition-all duration-500 shadow-2xl shadow-black/80 overflow-hidden">
                
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="font-mono text-xs font-bold text-[#C5A059] uppercase tracking-wider flex items-center gap-2">
                      {exp.wireframe === "mobile" ? <Smartphone size={14} /> : <Server size={14} />}
                      <span>{exp.type}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-[#A1A1AA]">
                    <span className="flex items-center gap-1.5 text-white font-semibold">
                      <MapPin size={13} className="text-[#C5A059]" />
                      <span>{exp.location}</span>
                    </span>
                    <span className="text-[#C5A059]">·</span>
                    <span className="font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Main 2-Column Content: Left Narrative + Right Interactive Wireframe */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-8">
                  
                  {/* Left Column (7 cols): Role, Company, Summary, Highlights & Tech */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    <div className="space-y-1.5">
                      <h3 className="font-display font-bold text-3xl sm:text-4xl text-white group-hover:text-[#C5A059] transition-colors leading-tight">
                        {exp.role} — <span className="text-[#C5A059] font-medium">{exp.company}</span>
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                        {exp.summary}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-3 pt-1">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3 text-sm text-[#ECEAE2] font-sans leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#C5A059] shrink-0 mt-1" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs font-bold text-[#A1A1AA] bg-[#181A24] px-3.5 py-1.5 rounded-lg border border-white/10 hover:border-[#C5A059] hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Right Column (5 cols): Interactive Visual Telemetry Wireframe Window */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-[#0E0F14] border border-[#262838] p-6 space-y-5 shadow-2xl shadow-black/90">
                      
                      {/* Window Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] text-[#A1A1AA]">
                        <span className="flex items-center gap-1.5 font-bold text-white uppercase">
                          <Zap size={12} className="text-[#C5A059]" />
                          <span>{exp.metrics.badge}</span>
                        </span>
                        <span className="text-[#10B981] font-bold bg-[#10B981]/10 px-2.5 py-0.5 rounded-full">
                          ACTIVE
                        </span>
                      </div>

                      {/* Main Metric Spotlight */}
                      <div className="p-4 rounded-xl bg-[#161720] border border-white/10 space-y-1">
                        <span className="font-mono text-[10px] text-[#8C887B] uppercase tracking-wider block">
                          Performance Metric
                        </span>
                        <span className="font-display font-bold text-2xl text-white block">
                          {exp.metrics.value}
                        </span>
                        <span className="font-mono text-xs text-[#C5A059] block">
                          {exp.metrics.subtext}
                        </span>
                      </div>

                      {/* Visual System Pipeline Snapshot */}
                      {exp.wireframe === "mobile" ? (
                        <div className="space-y-2 font-mono text-xs">
                          <div className="p-3 bg-black/40 rounded-xl border border-white/5 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-white font-bold">Expo Native Bridge</span>
                              <span className="text-[#10B981]">Synchronized</span>
                            </div>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#C5A059] h-full w-[94%]" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                            <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-center">
                              <span className="text-[#8C887B] block">State Caching</span>
                              <span className="text-white font-bold">Optimized</span>
                            </div>
                            <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-center">
                              <span className="text-[#8C887B] block">Component Tree</span>
                              <span className="text-white font-bold">100% Shared</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2 font-mono text-xs">
                          <div className="p-3 bg-black/40 rounded-xl border border-white/5 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-white font-bold">FastAPI Async Loop</span>
                              <span className="text-[#10B981]">120 FPS Throughput</span>
                            </div>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#10B981] h-full w-[98%]" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                            <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-center">
                              <span className="text-[#8C887B] block">JWT Auth Sessions</span>
                              <span className="text-white font-bold">Isolated</span>
                            </div>
                            <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-center">
                              <span className="text-[#8C887B] block">PostgreSQL Pool</span>
                              <span className="text-white font-bold">2.1ms Latency</span>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
