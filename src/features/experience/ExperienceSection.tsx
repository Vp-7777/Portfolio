"use client";

import {
  Calendar,
  CheckCircle2,
  MapPin,
  Sparkles,
  Smartphone,
  Server,
} from "lucide-react";
import experienceData from "@/lib/content/experience.json";

export function ExperienceSection() {
  return (
    <section
      data-chapter="experience"
      className="relative w-full py-28 px-6 sm:px-10 lg:px-12 bg-[#090d16] bg-dark-grid"
    >
      {/* Background Radial Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[30%] right-[15%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-xs">
            <Sparkles size={13} className="text-indigo-400" />
            <span className="font-sans text-xs font-bold text-slate-200 uppercase tracking-wider">
              Career & Internships
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white">
            Industry Experience & <br className="hidden sm:inline" />
            <span className="text-brand-gradient">Production Engineering</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Delivering production mobile architectures, robust backend microservices, and AI-driven automation within high-velocity engineering teams.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="bento-card p-8 sm:p-10 space-y-7 border border-white/15 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Card Top Category & Date */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 text-xs font-mono">
                  <span className="text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-2">
                    {exp.type.includes("Mobile") ? <Smartphone size={14} /> : <Server size={14} />}
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar size={13} className="text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role & Company Header */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      <MapPin size={11} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="font-sans text-sm font-semibold text-indigo-300">
                    {exp.role}
                  </p>
                </div>

                {/* Deliverables Bullet Points */}
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Production Deliverable Highlight & Tech Chips */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-[#090d16]/90 border border-white/10 space-y-1">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                    Production Deliverable
                  </span>
                  <span className="font-sans text-xs font-bold text-white block">
                    {exp.metrics.metric1}
                  </span>
                  <span className="font-sans text-[11px] text-slate-400 block">
                    {exp.metrics.metric2}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg font-mono text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
