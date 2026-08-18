"use client";

import { Award, GraduationCap, Trophy, ShieldCheck, Cpu, Flame, CheckCircle2 } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import bioData from "@/lib/content/bio.json";

export function GrowthSection() {
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
      data-chapter="growth"
      className="relative w-full min-h-screen bg-canvas py-28 sm:py-36 px-6 sm:px-10 lg:px-12 overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto relative z-base space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-light shadow-xs">
            <Trophy size={13} className="text-amber-brand" />
            <span className="font-mono text-xs font-bold text-amber-900 uppercase tracking-wider">
              Academic Excellence & Honors
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-ink leading-tight">
            Scholastic Caliber & <br />
            <span className="text-indigo-gradient">
              Verified Credentials
            </span>
          </h2>

          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-sans">
            Rigorous foundations in computer science paired with verified technical credentials from research institutes and national hackathon podium finishes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: SRM IST Academic Standing (Large 7-col) */}
          <div
            onMouseEnter={() => handleMouseEnter("Academic Standing")}
            onMouseLeave={handleMouseLeave}
            className="md:col-span-7 studio-card p-8 sm:p-10 space-y-7 flex flex-col justify-between bg-white"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-light text-amber-brand border border-amber-200">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs font-mono text-ink-muted uppercase tracking-wider block">
                    Bachelor of Technology (Expected May 2028)
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-ink">
                    SRM Institute of Science & Technology
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-ink-secondary font-sans leading-relaxed">
                Specializing in <span className="text-ink font-semibold">Artificial Intelligence & Machine Learning</span> with coursework across Data Structures & Algorithms, Neural Networks, Database Internals, Operating Systems, and Discrete Mathematics.
              </p>
            </div>

            {/* GPA Highlights Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-amber-200 space-y-1.5">
                <span className="text-[11px] font-mono text-ink-muted uppercase tracking-wider block">
                  Cumulative GPA
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-sans font-extrabold text-amber-900">
                    9.74
                  </span>
                  <span className="text-xs text-ink-muted font-mono">/ 10.0 (97.4%)</span>
                </div>
                <span className="text-xs text-emerald-brand font-semibold block">
                  ★ Top Tier Academic Rank
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-emerald-200 space-y-1.5">
                <span className="text-[11px] font-mono text-ink-muted uppercase tracking-wider block">
                  Semester 2 GPA
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-sans font-extrabold text-emerald-900">
                    10.0
                  </span>
                  <span className="text-xs text-ink-muted font-mono">/ 10.0 Flawless Score</span>
                </div>
                <span className="text-xs text-emerald-brand font-semibold block">
                  ★ Perfect 10.0 GPA
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Certifications (5-col) */}
          <div
            onMouseEnter={() => handleMouseEnter("Certifications")}
            onMouseLeave={handleMouseLeave}
            className="md:col-span-5 studio-card p-8 space-y-6 flex flex-col justify-between bg-white"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-light text-indigo-brand border border-indigo-200">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-xl font-sans font-bold text-ink">
                  Industry Certifications
                </h3>
              </div>

              <div className="space-y-3 font-sans text-xs">
                {bioData.certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-ink block">
                        {cert.name}
                      </span>
                      <span className="text-[10px] font-mono text-indigo-brand bg-indigo-light px-2.5 py-0.5 rounded-full border border-indigo-200">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-ink-secondary text-[11px]">
                      {cert.issuer} · <span className="text-indigo-950 font-semibold">{cert.type}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-indigo-200 font-mono text-[11px] text-indigo-brand flex items-center gap-2">
              <Cpu size={15} className="text-indigo-brand shrink-0" />
              <span>ISRO IIRS Geospatial ML & AWS Cloud Verified</span>
            </div>
          </div>

          {/* Card 3: Hackathon Podiums & Honors (Full Width 12-col) */}
          <div
            onMouseEnter={() => handleMouseEnter("Hackathons & Mentorship")}
            onMouseLeave={handleMouseLeave}
            className="md:col-span-12 studio-card p-8 sm:p-10 space-y-6 bg-white"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-light text-indigo-brand border border-indigo-200">
                  <Flame size={22} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-ink">
                    Hackathon Podiums & Technical Mentorship
                  </h3>
                  <span className="text-xs text-ink-muted font-sans">
                    Rapid prototyping, autonomous agent design, and engineering leadership.
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans text-xs">
              {bioData.achievements.slice(0, 4).map((ach, idx) => (
                <div
                  key={ach.title}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-2 h-2 rounded-full bg-indigo-brand" />
                    <span className="font-mono text-[10px] text-ink-muted">#0{idx + 1}</span>
                  </div>
                  <h4 className="font-bold text-sm text-ink">
                    {ach.title}
                  </h4>
                  <p className="text-indigo-brand font-semibold text-[11px]">
                    {ach.event}
                  </p>
                  <p className="text-ink-secondary text-[11px] leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
