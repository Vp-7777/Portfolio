"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Zap,
  Activity,
  Cpu,
  MapPin,
  GraduationCap,
  Award,
  FileText,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
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
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = (label: string) => {
    setCursorVariant("hover");
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(`[data-chapter="${id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      data-chapter="hero"
      className="relative w-full min-h-screen bg-canvas bg-light-grid overflow-hidden flex flex-col justify-between pt-28 pb-8"
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Subtle Ambient Radial Lighting (Light Mode) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-indigo-100/60 blur-[140px]" />
        <div className="absolute top-[25%] right-[10%] w-[550px] h-[550px] rounded-full bg-sky-100/60 blur-[140px]" />
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 my-auto relative z-base select-none py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ─── LEFT COLUMN: Headlines, Narrative & Action Controls ─── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-white shadow-xs">
                <Sparkles size={13} className="text-indigo-brand" />
                <span className="font-sans text-xs font-bold text-indigo-950 uppercase tracking-wider">
                  Software & AI Systems Engineer
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-light shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-brand" />
                </span>
                <span className="font-sans text-xs font-semibold text-emerald-800">
                  Interning @ RideAbit & QRaptor
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-sans font-extrabold tracking-tight leading-[1.08] text-ink">
                Engineering <br className="hidden sm:inline" />
                <span className="text-brand-gradient">
                  Scalable Software
                </span>{" "}
                <br className="hidden sm:inline" />
                & Intelligent AI Systems.
              </h1>

              <p className="text-ink-secondary text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal">
                Hello, I&apos;m <span className="text-ink font-bold">{bioData.name}</span> — studying Computer Science (AI & ML) at <span className="text-ink font-semibold">SRM IST</span> with a <span className="text-amber-brand font-bold">9.74 CGPA</span>. Passionate about building production React Native mobile apps, high-throughput FastAPI backends, and on-device machine learning models.
              </p>
            </div>

            {/* Academic Credential Badges */}
            <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs">
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-amber-200 text-amber-900 font-semibold shadow-xs">
                <GraduationCap size={15} className="text-amber-brand" />
                <span>9.74 CGPA · SRM IST</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-emerald-200 text-emerald-900 font-semibold shadow-xs">
                <Award size={15} className="text-emerald-brand" />
                <span>Sem 2: 10/10 Perfect GPA</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-ink font-semibold shadow-xs">
                <Cpu size={15} className="text-indigo-brand" />
                <span>ISRO & AWS Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-ink-muted font-medium shadow-xs">
                <MapPin size={14} className="text-indigo-brand" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollToSection("projects")}
                onMouseEnter={() => handleMouseEnter("Explore Projects")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-indigo-brand hover:bg-indigo-hover hover:shadow-md transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>Explore Engineered Work</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={bioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => handleMouseEnter("View Verified Résumé")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <FileText size={15} className="text-indigo-brand" />
                <span>View Résumé</span>
                <ArrowUpRight size={13} className="opacity-70" />
              </a>

              <a
                href={`mailto:${bioData.email}`}
                onMouseEnter={() => handleMouseEnter("Direct Email")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-sans text-xs sm:text-sm font-medium uppercase tracking-wider text-ink-secondary hover:text-ink border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-200 cursor-pointer"
              >
                <Mail size={15} />
                <span>Contact</span>
              </a>
            </div>

            {/* Interactive Systems Architecture Sandbox */}
            <div className="pt-2">
              <HeroTerminal />
            </div>

          </div>

          {/* ─── RIGHT COLUMN: Clean Profile Showcase ─── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Studio Profile Card */}
              <div className="studio-card p-7 sm:p-8 relative space-y-6 bg-white">
                
                {/* Top Card Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-indigo-brand font-bold uppercase tracking-wider">
                    <Zap size={14} />
                    <span>Verified Profile</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-brand font-bold text-[11px] bg-emerald-light px-2.5 py-0.5 rounded-md border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-brand" />
                    <span>CGPA: 9.74 / 10</span>
                  </div>
                </div>

                {/* Profile Photo Frame */}
                <div className="relative flex items-center justify-center py-2">
                  <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl p-2 bg-gradient-to-br from-indigo-100 to-sky-100 border border-slate-200 shadow-md group">
                    <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-white">
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
                  <div className="absolute -left-2 top-4 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-[11px] font-mono font-bold text-ink shadow-sm">
                    PyTorch · Deep Learning
                  </div>
                  <div className="absolute -right-2 bottom-6 px-3 py-1.5 rounded-xl bg-white border border-indigo-200 text-[11px] font-mono font-bold text-indigo-brand shadow-sm">
                    React Native · Mobile
                  </div>
                </div>

                {/* Academic Focus */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 font-sans text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] text-ink-muted uppercase font-mono block">Specialization</span>
                    <span className="text-ink font-bold text-xs block">AI & Machine Learning</span>
                  </div>
                  <div className="space-y-1 border-l border-slate-200 pl-3">
                    <span className="text-[10px] text-ink-muted uppercase font-mono block">Institution</span>
                    <span className="text-amber-900 font-bold text-xs block">SRM IST (9.74 CGPA)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Categorized Tech Stack Marquee ─── */}
      <div className="w-full flex flex-col relative z-base mt-auto">
        <div className="w-full overflow-hidden border-y border-slate-200 bg-white py-3.5 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee-smooth">
            {marqueeItems.map((tech, idx) => (
              <span
                key={idx}
                className="font-mono text-xs font-medium text-ink-muted tracking-wider uppercase mx-6 inline-flex items-center gap-2.5 select-none hover:text-ink transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-brand" />
                <span className="text-ink font-semibold">{tech.name}</span>
                <span className="text-[10px] text-indigo-brand bg-indigo-light px-2 py-0.5 rounded-full border border-indigo-200">
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
