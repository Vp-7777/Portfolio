"use client";

import { useRef } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import { ProfileCards } from "./ProfileCards";
import { useCountUp } from "@/lib/hooks/useCountUp";
import bioData from "@/lib/content/bio.json";
import {
  GraduationCap,
  Cpu,
  Award,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Trophy,
  Users,
  Compass,
  FileCheck,
} from "lucide-react";

const metrics = [
  {
    index: "01",
    title: "Academic Excellence",
    value: "9.74",
    unit: "CGPA",
    subtitle: "SRM IST (97.4%)",
    desc: "B.Tech in Computer Science Engineering (AI & ML Specialization) with a flawless 10.0/10 GPA in Semester 2 and zero active backlogs.",
    icon: GraduationCap,
    glow: "amber",
  },
  {
    index: "02",
    title: "National Hackathons",
    value: "Top 20",
    unit: "FINALIST",
    subtitle: "257+ National Teams",
    desc: "Recognized as a Top 20 Finalist in both the QRaptors National Hackathon (257+ teams) and the Ashna AI Agent Hackathon.",
    icon: Trophy,
    glow: "cyan",
  },
  {
    index: "03",
    title: "Industry Certifications",
    value: "3+",
    unit: "CREDENTIALS",
    subtitle: "ISRO, AWS & BNY",
    desc: "Certified in Geodata Processing using Python & ML (ISRO/IIRS), AWS Cloud Practitioner Essentials, and the BNY Spectrum Program.",
    icon: FileCheck,
    glow: "purple",
  },
  {
    index: "04",
    title: "Engineering Reliability",
    value: "100%",
    unit: "TYPE-SAFE",
    subtitle: "Clean Architecture",
    desc: "Strict adherence to modular system design, automated testing, and sub-50ms API execution benchmarks.",
    icon: ShieldCheck,
    glow: "emerald",
  },
];

function MetricCardItem({
  m,
  onMouseEnter,
  onMouseLeave,
}: {
  m: (typeof metrics)[0];
  onMouseEnter: (title: string) => void;
  onMouseLeave: () => void;
}) {
  const { displayValue, elementRef } = useCountUp(m.value, { end: 0 });
  const Icon = m.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onMouseEnter(m.title)}
      onMouseLeave={onMouseLeave}
      className="spotlight-card p-8 rounded-[24px] space-y-6 flex flex-col justify-between cursor-default transition-all duration-300 border border-white/10 glass-panel"
    >
      <div className="space-y-4 relative z-base">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
              m.glow === "amber" ? "bg-amber-950/80 text-amber-400 border border-amber-500/30" :
              m.glow === "cyan" ? "bg-cyan-950/80 text-cyan-400 border border-cyan-500/30" :
              m.glow === "purple" ? "bg-purple-950/80 text-purple-400 border border-purple-500/30" :
              "bg-emerald-950/80 text-emerald-400 border border-emerald-500/30"
            }`}>
              <Icon size={16} />
            </div>
            <span className="font-sans text-xs font-semibold text-white uppercase tracking-wide">
              {m.title}
            </span>
          </div>
          <span className="text-[11px] font-sans font-medium text-muted/80">
            {m.subtitle}
          </span>
        </div>

        {/* Large metric value */}
        <div className="font-display font-extrabold tracking-tight leading-none text-3xl sm:text-4xl text-white pt-1">
          <span className={
            m.glow === "amber" ? "text-amber-400" :
            m.glow === "cyan" ? "text-cyan-400" :
            m.glow === "purple" ? "text-purple-400" : "text-emerald-400"
          }>
            {displayValue}
          </span>
          <span className="text-sm font-sans font-semibold text-muted ml-2">{m.unit}</span>
        </div>
      </div>

      <p className="text-muted text-xs sm:text-sm font-sans leading-relaxed pt-2 border-t border-white/10 relative z-base">
        {m.desc}
      </p>
    </div>
  );
}

export function GrowthSection() {
  const containerRef = useRef<HTMLElement>(null);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const handleMouseEnter = (title: string) => {
    setCursorVariant("hover");
    setCursorLabel(title);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  return (
    <section
      ref={containerRef}
      data-chapter="growth"
      className="relative bg-[#05040d] bg-grid-pattern border-t border-white/10 py-20 md:py-28 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-900/15 blur-[170px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-indigo-900/15 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16 relative z-base">

        {/* Header */}
        <div className="space-y-4 max-w-2xl select-none text-left">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-purple-300 tracking-wide border border-purple-500/30 rounded-full px-4 py-1 bg-purple-500/10 uppercase">
            <TrendingUp size={14} className="text-cyan-400" />
            <span>Academic & Technical Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
            Academic & <span className="text-gradient-purple-cyan">Leadership Calibration</span>
          </h2>
          <p className="text-muted text-base md:text-lg font-sans leading-relaxed">
            Quantifiable benchmarks, prestigious certifications from ISRO and AWS, and national hackathon leadership demonstrating consistent top-tier execution.
          </p>
        </div>

        {/* 4-Card Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <MetricCardItem
              key={m.index}
              m={m}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        {/* Professional Certifications & Hackathon Honors Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
          {/* Left Column: Certifications Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2 select-none border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-amber-300 uppercase tracking-wide">
                <FileCheck size={14} className="text-amber-400" />
                <span>Professional Certifications</span>
              </div>
              <h3 className="text-2xl font-display font-bold uppercase text-white">
                Verified Credentials
              </h3>
            </div>

            <div className="space-y-3.5">
              {bioData.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1.5 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-display text-base font-bold text-white uppercase tracking-tight">
                      {cert.name}
                    </h4>
                    <span className="text-[10px] font-sans font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-md uppercase">
                      {cert.date}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-muted/90 flex items-center gap-2">
                    <span className="text-cyan-300 font-semibold">{cert.issuer}</span>
                    <span className="text-muted/40">·</span>
                    <span className="text-purple-300">{cert.type}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hackathon Honors & Leadership */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2 select-none border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-cyan-300 uppercase tracking-wide">
                <Trophy size={14} className="text-cyan-400" />
                <span>Achievements & Leadership</span>
              </div>
              <h3 className="text-2xl font-display font-bold uppercase text-white">
                Hackathons & Community
              </h3>
            </div>

            <div className="space-y-3.5">
              {bioData.achievements.map((item) => (
                <div
                  key={item.title}
                  className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1.5 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-display text-base font-bold text-white uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-sans font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-md uppercase">
                      {item.event}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-muted/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Profile section header */}
        <div className="pt-8 space-y-3 select-none border-t border-white/10">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-cyan-300 tracking-wide border border-cyan-500/30 rounded-full px-3.5 py-1 bg-cyan-500/10 uppercase">
            <Sparkles size={13} className="text-purple-400" />
            <span>Verified Profiles & Accounts</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
            Online Presence & Coding Profiles
          </h3>
        </div>

        {/* Profile Card Widgets */}
        <ProfileCards />
      </div>
    </section>
  );
}
