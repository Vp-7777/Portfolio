"use client";

import {
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Trophy,
  ExternalLink,
  Users,
} from "lucide-react";
import bioData from "@/lib/content/bio.json";

export function GrowthSection() {
  return (
    <section
      data-chapter="growth"
      className="relative w-full py-28 px-6 sm:px-10 lg:px-12 bg-[#090d16] bg-dark-grid"
    >
      {/* Background Radial Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-amber-600/10 blur-[150px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-xs">
            <Sparkles size={13} className="text-amber-400" />
            <span className="font-sans text-xs font-bold text-slate-200 uppercase tracking-wider">
              Academic Excellence & Honors
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white">
            Scholastic Caliber & <br className="hidden sm:inline" />
            <span className="text-brand-gradient">Verified Credentials</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Rigorous foundations in computer science paired with verified technical credentials from research institutes and national hackathon podium finishes.
          </p>
        </div>

        {/* Bento Grid 1: Academic Monolith & Industry Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SRM Academic Monolith (7 Cols) */}
          <div className="lg:col-span-7 bento-card p-8 sm:p-10 space-y-8 border border-white/15 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Institution Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  <GraduationCap size={15} />
                  <span>Bachelor of Technology (Expected May 2028)</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white">
                  SRM Institute of Science & Technology
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  Specializing in <span className="text-white font-semibold">Artificial Intelligence & Machine Learning</span> with core coursework across Data Structures & Algorithms, Neural Networks, Database Internals, Operating Systems, and Discrete Mathematics.
                </p>
              </div>

              {/* GPA Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                    Cumulative CGPA
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
                    9.74 <span className="text-sm text-amber-400 font-normal font-mono">/ 10.0 (97.4%)</span>
                  </div>
                  <span className="text-[11px] text-amber-300 font-medium block">
                    ★ Top Tier Academic Rank
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                    Semester 2 GPA
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
                    10.0 <span className="text-sm text-emerald-400 font-normal font-mono">/ 10.0 Flawless Score</span>
                  </div>
                  <span className="text-[11px] text-emerald-300 font-medium block">
                    ★ Perfect 10.0 GPA Distinction
                  </span>
                </div>
              </div>

            </div>

            {/* Coursework Ribbon */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {["Data Structures", "Neural Networks", "FastAPI & Python", "PostgreSQL ACID", "React Native", "Operating Systems"].map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1 rounded-lg font-mono text-[11px] bg-white/5 border border-white/10 text-slate-300"
                >
                  {course}
                </span>
              ))}
            </div>

          </div>

          {/* Industry Certifications (5 Cols) */}
          <div className="lg:col-span-5 bento-card p-8 sm:p-10 space-y-6 border border-white/15 flex flex-col justify-between">
            <div className="space-y-5">
              
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider border-b border-white/10 pb-4">
                <ShieldCheck size={15} />
                <span>Verified Industry Certifications</span>
              </div>

              <div className="space-y-4 font-sans text-xs">
                {bioData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#090d16]/90 border border-white/10 space-y-1.5 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-white text-sm leading-snug">
                        {cert.name}
                      </span>
                      <span className="font-mono text-[10px] text-indigo-400 bg-indigo-500/15 px-2 py-0.5 rounded-md shrink-0 ml-2">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs">
                      {cert.issuer} · <span className="text-slate-300 font-semibold">{cert.type}</span>
                    </p>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span>ISRO (IIRS Geospatial ML) & AWS Cloud Verified</span>
            </div>

          </div>

        </div>

        {/* Bento Grid 2: Hackathon Podiums & Mentorship */}
        <div className="bento-card p-8 sm:p-10 space-y-6 border border-white/15">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider border-b border-white/10 pb-4">
            <Trophy size={15} />
            <span>Hackathon Podiums & Technical Mentorship</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
            {bioData.achievements.map((ach, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#090d16]/90 border border-white/10 space-y-2 hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-emerald-400 font-bold uppercase">Podium Finish</span>
                    <span className="text-slate-500">#{idx + 1}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    {ach.title}
                  </h4>
                  <p className="text-indigo-400 text-xs font-semibold">
                    {ach.event}
                  </p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed pt-2 border-t border-white/5">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
