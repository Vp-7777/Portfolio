"use client";

import { useState } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import { cn } from "@/lib/utils";
import experienceData from "@/lib/content/experience.json";
import { Briefcase, Building, Calendar, CheckCircle2, MapPin, Sparkles, Zap } from "lucide-react";

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const handleMouseEnter = (label: string) => {
    setCursorVariant("hover");
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  return (
    <section
      data-chapter="experience"
      className="relative bg-[#07080d] bg-grid-pattern border-t border-white/10 py-20 md:py-28 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[180px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-cyan-600/10 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-14 relative z-base">

        {/* Section Header */}
        <div className="space-y-4 max-w-2xl select-none text-left">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-purple-300 tracking-wide border border-purple-500/30 rounded-full px-4 py-1 bg-purple-500/10 uppercase">
            <Briefcase size={14} className="text-cyan-400" />
            <span>Career & Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
            Developer <span className="text-gradient-purple-cyan">Journey</span>
          </h2>
          <p className="text-muted text-base md:text-lg font-sans leading-relaxed">
            Collaborating with fast-paced engineering teams to architect production-ready AI services, automated inference pipelines, and scalable web interfaces.
          </p>
        </div>

        {/* Dynamic Timeline Switcher & Experience Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Role Selector Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            {experienceData.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.company}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => handleMouseEnter(item.company)}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-1.5 relative overflow-hidden",
                    isActive
                      ? "glass-panel border-purple-500/50 shadow-lg shadow-purple-900/25 bg-surface-2"
                      : "bg-surface-1/50 border-white/5 hover:border-white/20 hover:bg-surface-1 text-muted"
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-cyan-400">
                      0{idx + 1} · {item.company}
                    </span>
                    <span className="text-[11px] font-sans font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2.5 py-0.5 rounded-full">
                      {item.period}
                    </span>
                  </div>

                  <h3 className={cn("font-display text-lg font-bold uppercase", isActive ? "text-white" : "text-muted/80")}>
                    {item.role}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-muted/70 pt-0.5">
                    <MapPin size={12} className="text-purple-400" />
                    <span>{item.location}</span>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded-r" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Role Detailed Dossier */}
          <div className="lg:col-span-8">
            {experienceData.map((item, idx) => {
              const isActive = activeIndex === idx;
              if (!isActive) return null;

              return (
                <div
                  key={item.company}
                  className="glass-panel p-8 sm:p-10 rounded-[28px] space-y-7 border border-white/10 relative"
                >
                  {/* Role Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-cyan-400 font-sans text-xs font-bold uppercase tracking-wide">
                        <Building size={14} />
                        <span>{item.company}</span>
                        <span className="text-muted/40">·</span>
                        <span className="text-muted/80">{item.location}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tight">
                        {item.role}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-2 border border-purple-500/30 text-purple-300 font-sans text-xs font-bold uppercase">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Detailed Accomplishments */}
                  <div className="space-y-3 font-sans text-base text-muted/90 leading-relaxed">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                        <p>{detail}</p>
                      </div>
                    ))}
                  </div>

                  {/* Quantified Impact Benchmark Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 font-sans text-xs">
                    <div className="p-4 rounded-xl bg-surface-2/80 border border-amber-500/30 space-y-1">
                      <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] block">
                        Impact Benchmark 01
                      </span>
                      <p className="text-amber-300 font-bold text-sm leading-snug">
                        {item.metrics.metric1}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-2/80 border border-cyan-500/30 space-y-1">
                      <span className="text-cyan-400 font-bold uppercase tracking-wider text-[11px] block">
                        Impact Benchmark 02
                      </span>
                      <p className="text-cyan-300 font-bold text-sm leading-snug">
                        {item.metrics.metric2}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs font-sans font-semibold text-muted/60 uppercase tracking-wider mr-2">
                      Technologies:
                    </span>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 font-sans text-xs font-medium border border-white/10 bg-surface-2/90 text-muted/90 uppercase rounded-xl hover:border-cyan-400/50 hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
