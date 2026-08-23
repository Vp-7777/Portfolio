"use client";

import { Award, Trophy, Star, Users, Briefcase } from "lucide-react";
import bioData from "@/lib/content/bio.json";
import { ScrollReveal } from "@/features/motion/ScrollReveal";

export function Achievements() {
  const distinctions = [
    {
      title: "National Hackathon Finalist (Top 20)",
      org: "QRaptors National Hackathon",
      date: "2026",
      desc: "Architected an end-to-end edge AI vision diagnostic system among 257+ competitive engineering teams across India.",
      tag: "TOP 20 NATIONWIDE",
      icon: Trophy,
    },
    {
      title: "AI Agent Hackathon Finalist",
      org: "Ashna AI Agent Hackathon",
      date: "2026",
      desc: "Engineered real-time autonomous multimodal agent systems under strict latency constraints.",
      tag: "TOP 20 FINALIST",
      icon: Award,
    },
    {
      title: "Flawless 10.0 / 10.0 GPA Distinction",
      org: "SRM IST Semester 2 Academic Excellence",
      date: "2025",
      desc: "Maintained a perfect 10.0 SGPA and 9.74 cumulative CGPA in Computer Science & AI/ML specialization.",
      tag: "FLAWLESS 10.0 GPA",
      icon: Star,
    },
    {
      title: "Hackathon Organizer & Lead Mentor",
      org: "Team SRM Hackathon",
      date: "2025 – 2026",
      desc: "Mentored 100+ student engineers across full-stack systems, computer vision, and machine learning pipelines.",
      tag: "LEADERSHIP & MENTORSHIP",
      icon: Users,
    },
  ];

  return (
    <section id="achievements" className="relative w-full py-28 sm:py-36 bg-[#08080A] text-[#ECEAE2]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Centered Display Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-[5.8rem] text-white tracking-[-0.04em] uppercase leading-none">
              RECOGNITION
            </h2>

            <p className="font-mono text-xs sm:text-[13px] text-[#A1A1AA] tracking-[0.06em] uppercase max-w-2xl mx-auto leading-relaxed">
              NATIONAL COMPETITIVE HACKATHONS, FLAWLESS ACADEMIC DISTINCTIONS, AND COMMUNITY LEADERSHIP ROLES.
            </p>
          </div>
        </ScrollReveal>

        {/* Podium Highlight Banner */}
        <ScrollReveal direction="up" delay={100}>
          <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/50 p-8 sm:p-12 transition-all shadow-2xl shadow-black/80 overflow-hidden group">
            
            {/* Ambient Gold Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Trophy Icon */}
              <div className="md:col-span-3 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#181A24] border border-[#C5A059]/30 text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Trophy size={32} />
                </div>
                <span className="font-mono text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                  NATIONAL PODIUM MERIT
                </span>
                <span className="font-mono text-[10.5px] text-[#8C887B] block">
                  Top Tier Finalist Record
                </span>
              </div>

              {/* Right Narrative */}
              <div className="md:col-span-9 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 font-mono text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    2× NATIONAL HACKATHON FINALIST
                  </span>
                  <span className="font-mono text-xs text-[#8C887B]">SRM IST · 2026</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                  Recognized for high-throughput computer vision & autonomous AI agent systems among 257+ engineering teams.
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
                  Competed at the national level developing live edge inference pipelines and scalable microservices architectures under strict evaluation benchmarks.
                </p>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* 2x2 Clean Distinction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {distinctions.map((item, idx) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={idx} direction="up" delay={120 + idx * 60}>
                <div className="h-full rounded-[28px] bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-8 space-y-5 flex flex-col justify-between transition-all duration-300 shadow-xl group">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold text-[#C5A059] uppercase tracking-wider bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                        {item.tag}
                      </span>
                      <span className="font-mono text-xs text-[#8C887B] font-bold">{item.date}</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-white">
                        <Icon size={18} className="text-[#C5A059] shrink-0" />
                        <h4 className="font-display font-bold text-lg sm:text-xl group-hover:text-[#C5A059] transition-colors leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-[#C5A059] font-medium block">
                        {item.org}
                      </span>
                    </div>

                    <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10.5px] text-[#8C887B]">
                    <span>STATUS: VERIFIED CREDENTIAL</span>
                    <span className="text-[#10B981] font-bold">● ACTIVE</span>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
