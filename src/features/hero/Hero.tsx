"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Zap,
  MapPin,
  GraduationCap,
  Award,
  FileText,
  Sparkles,
  ArrowUpRight,
  Cpu,
} from "lucide-react";
import { HeroTerminal } from "./HeroTerminal";
import bioData from "@/lib/content/bio.json";

const techStackList = [
  { name: "Python", category: "AI & ML" },
  { name: "React Native", category: "Mobile Apps" },
  { name: "FastAPI", category: "Backend" },
  { name: "React.js", category: "Frontend" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Expo", category: "Cross-Platform" },
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Languages" },
  { name: "Computer Vision", category: "AI Systems" },
  { name: "AWS Cloud", category: "Cloud & Arch" },
  { name: "Docker & Vercel", category: "DevOps" },
];

const marqueeItems = [...techStackList, ...techStackList];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(`[data-chapter="${id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      data-chapter="hero"
      className="relative w-full min-h-screen bg-[#090d16] bg-dark-grid overflow-hidden flex flex-col justify-between pt-28 pb-8"
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Aurora Lighting Atmospheric Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -top-[10%] left-[15%] w-[700px] h-[700px] rounded-full bg-indigo-600/15 blur-[160px]" />
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-600/12 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[140px]" />
      </div>

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 my-auto relative z-10 select-none py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ─── LEFT COLUMN: Headlines, Narrative & Action Controls ─── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-xs">
                <Sparkles size={13} className="text-indigo-400" />
                <span className="font-sans text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Software & AI Systems Engineer
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-sans text-xs font-semibold text-emerald-400">
                  Interning @ RideAbit & QRaptor
                </span>
              </div>
            </div>

            {/* Display Headline */}
            <div className="space-y-3.5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-sans font-extrabold tracking-[-0.035em] leading-[1.06] text-white">
                Engineering <br className="hidden sm:inline" />
                <span className="text-brand-gradient">
                  Scalable Software
                </span>{" "}
                <br className="hidden sm:inline" />
                & High-Performance AI.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal">
                Hey, I&apos;m <span className="text-white font-bold">{bioData.name}</span> — studying Computer Science (AI & ML) at <span className="text-white font-semibold">SRM IST</span> with a <span className="text-amber-400 font-bold">9.74 CGPA</span>. Building production React Native mobile apps, high-throughput FastAPI backends, and on-device machine learning models.
              </p>
            </div>

            {/* Academic Credential Badges */}
            <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs">
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold shadow-xs">
                <GraduationCap size={15} className="text-amber-400" />
                <span>9.74 CGPA · SRM IST</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold shadow-xs">
                <Award size={15} className="text-emerald-400" />
                <span>Sem 2: 10/10 Perfect GPA</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold shadow-xs">
                <Cpu size={15} className="text-indigo-400" />
                <span>ISRO & AWS Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium shadow-xs">
                <MapPin size={14} className="text-indigo-400" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Action Buttons Suite */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Engineered Work</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={bioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.02]"
              >
                <FileText size={15} className="text-indigo-400" />
                <span>View Résumé</span>
                <ArrowUpRight size={13} className="opacity-70" />
              </a>

              <a
                href={`mailto:${bioData.email}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-sans text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-400 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                <Mail size={15} />
                <span>Contact</span>
              </a>
            </div>

            {/* Interactive Systems Spec Sandbox */}
            <div className="pt-2">
              <HeroTerminal />
            </div>

          </div>

          {/* ─── RIGHT COLUMN: Studio Profile Card ─── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Studio Bento Profile Card */}
              <div className="bento-card p-7 sm:p-8 relative space-y-6">
                
                {/* Top Card Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-wider">
                    <Zap size={14} />
                    <span>Verified Engineer</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] bg-emerald-500/15 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>CGPA: 9.74 / 10</span>
                  </div>
                </div>

                {/* Profile Photo Frame */}
                <div className="relative flex items-center justify-center py-2">
                  <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl p-2 bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-emerald-500/20 border border-white/15 shadow-2xl group">
                    <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#111827]">
                      <Image
                        src="/profile.png"
                        alt="Vishal Patel"
                        fill
                        priority
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute -left-2 top-4 px-3 py-1.5 rounded-xl bg-[#111827]/90 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold text-slate-200 shadow-lg">
                    PyTorch · Deep Learning
                  </div>
                  <div className="absolute -right-2 bottom-6 px-3 py-1.5 rounded-xl bg-[#111827]/90 backdrop-blur-md border border-indigo-500/40 text-[11px] font-mono font-bold text-indigo-400 shadow-lg">
                    React Native · Mobile
                  </div>
                </div>

                {/* Academic Focus */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#090d16]/90 border border-white/10 font-sans text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Specialization</span>
                    <span className="text-white font-bold text-xs block">AI & Machine Learning</span>
                  </div>
                  <div className="space-y-1 border-l border-white/10 pl-3">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Institution</span>
                    <span className="text-amber-400 font-bold text-xs block">SRM IST (9.74 CGPA)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Categorized Tech Stack Marquee ─── */}
      <div className="w-full flex flex-col relative z-10 mt-auto">
        <div className="w-full overflow-hidden border-y border-white/10 bg-[#090d16]/80 backdrop-blur-md py-3.5 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090d16] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090d16] to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee-smooth">
            {marqueeItems.map((tech, idx) => (
              <span
                key={idx}
                className="font-mono text-xs font-medium text-slate-400 tracking-wider uppercase mx-6 inline-flex items-center gap-2.5 select-none hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-slate-200 font-semibold">{tech.name}</span>
                <span className="text-[10px] text-indigo-300 bg-indigo-500/15 px-2 py-0.5 rounded-full border border-indigo-500/30">
                  {tech.category}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
