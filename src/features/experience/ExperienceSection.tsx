"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu, Smartphone } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import experienceData from "@/lib/content/experience.json";

export function ExperienceSection() {
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
      className="relative w-full min-h-screen bg-canvas py-28 sm:py-36 px-6 sm:px-10 lg:px-12 overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto relative z-base space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-white shadow-xs">
            <Briefcase size={13} className="text-indigo-brand" />
            <span className="font-mono text-xs font-bold text-ink-muted uppercase tracking-wider">
              Career & Internships
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-ink leading-tight">
            Industry Experience & <br />
            <span className="text-indigo-gradient">
              Production Engineering
            </span>
          </h2>

          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-sans">
            Delivering production mobile architectures, robust backend microservices, and AI-driven automation within high-velocity engineering teams.
          </p>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((role, idx) => {
            const isRideAbit = role.company === "RideAbit";
            return (
              <div
                key={role.company}
                onMouseEnter={() => handleMouseEnter(`Role // ${role.company}`)}
                onMouseLeave={handleMouseLeave}
                className="studio-card p-8 sm:p-10 space-y-7 flex flex-col justify-between bg-white"
              >
                <div className="space-y-6">
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${isRideAbit ? "bg-indigo-light text-indigo-brand border border-indigo-200" : "bg-sky-light text-sky-brand border border-sky-200"}`}>
                        {isRideAbit ? <Smartphone size={20} /> : <Cpu size={20} />}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-ink-muted block uppercase tracking-wider">
                          {role.type}
                        </span>
                        <h3 className="text-2xl font-sans font-bold text-ink">
                          {role.company}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-ink bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl">
                      <Calendar size={12} className="text-indigo-brand" />
                      <span>{role.period}</span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <div className="flex items-center justify-between">
                    <span className="text-base font-sans font-bold text-indigo-brand">
                      {role.role}
                    </span>
                    <span className="font-mono text-xs text-ink-muted flex items-center gap-1">
                      <MapPin size={12} className="text-indigo-brand" />
                      {role.location}
                    </span>
                  </div>

                  {/* Core Deliverables */}
                  <ul className="space-y-3.5 font-sans text-xs sm:text-sm text-ink-secondary">
                    {role.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 leading-relaxed">
                        <CheckCircle2 size={16} className="text-emerald-brand shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics & Tech Stack */}
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-1.5">
                    <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider block">
                      Production Deliverable
                    </span>
                    <span className="text-indigo-950 font-bold block text-sm">
                      {role.metrics.metric1}
                    </span>
                    <span className="text-ink-secondary text-xs block">
                      {role.metrics.metric2}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 font-mono text-xs bg-slate-100 border border-slate-200 rounded-xl text-ink hover:border-slate-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
