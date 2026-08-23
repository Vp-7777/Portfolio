"use client";

import { CheckCircle2, MapPin, Sparkles, Smartphone, Server, ShieldCheck } from "lucide-react";
import experienceData from "@/lib/content/experience.json";
import { ScrollReveal } from "@/features/motion/ScrollReveal";

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                COMMERCIAL RECORD
              </span>
              <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
                Production & Internships
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
              Commercial software engineering internships, production mobile releases, and enterprise software programs.
            </p>
          </div>
        </ScrollReveal>

        {/* Chronological Frosted Glass Company Cards Container */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 150}>
              <div className="frosted-card p-7 sm:p-9 rounded-none space-y-6 relative group overflow-hidden">
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(27,23,16,0.1)] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A9793C] animate-pulse" />
                    <span className="font-mono text-xs font-bold text-[#7C5A2C] uppercase tracking-wider flex items-center gap-1.5">
                      {exp.type.includes("Mobile") ? <Smartphone size={13} /> : <Server size={13} />}
                      <span>{exp.type}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-[#5C5344]">
                    <span className="flex items-center gap-1 text-[#1B1710] font-semibold">
                      <MapPin size={12} className="text-[#A9793C]" />
                      <span>{exp.location}</span>
                    </span>
                    <span className="text-[#A9793C]">·</span>
                    <span className="font-bold text-[#1B1710] bg-[#EEE6D4] px-2.5 py-0.5 border border-[rgba(27,23,16,0.1)]">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Role & Company Header */}
                <div className="space-y-1">
                  <h3 className="font-display font-normal text-2xl sm:text-3xl text-[#1B1710] group-hover:text-[#7C5A2C] transition-colors">
                    {exp.role} — <span className="italic font-normal">{exp.company}</span>
                  </h3>
                </div>

                {/* Deliverables Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                  {exp.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C5344] font-sans leading-relaxed">
                      <CheckCircle2 size={15} className="text-[#A9793C] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Production Deliverable Highlight & Tech Chips */}
                <div className="pt-4 border-t border-[rgba(27,23,16,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Deliverable Box */}
                  <div className="p-3 bg-[#EEE6D4]/50 border border-[rgba(27,23,16,0.1)] space-y-0.5">
                    <span className="font-mono text-[9.5px] text-[#9C9280] uppercase tracking-wider block">
                      PRODUCTION IMPACT
                    </span>
                    <span className="font-sans text-xs font-bold text-[#1B1710] block">
                      {exp.metrics.metric1}
                    </span>
                  </div>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] font-medium text-[#5C5344] bg-[#EEE6D4]/80 px-2.5 py-1 border border-[rgba(27,23,16,0.1)] hover:border-[#A9793C] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
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
