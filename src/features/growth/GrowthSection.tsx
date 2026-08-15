"use client";

import { useRef } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import { ProfileCards } from "./ProfileCards";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { GraduationCap, Cpu, GitFork, Award, TrendingUp, Sparkles } from "lucide-react";

const metrics = [
  {
    index: "01",
    title: "Academic Excellence",
    value: "9.70",
    unit: "CGPA",
    subtitle: "SRM IST Chennai",
    desc: "B.Tech in Computer Science & Engineering with specialized curriculum focus in Artificial Intelligence and Machine Learning models.",
    icon: GraduationCap,
    glow: "amber",
  },
  {
    index: "02",
    title: "AI & ML Models",
    value: "10+",
    unit: "SYSTEMS",
    subtitle: "Production Ready",
    desc: "Engineered and benchmarked architectures ranging from offline medical vision engines to high-throughput satellite rendering pipelines.",
    icon: Cpu,
    glow: "cyan",
  },
  {
    index: "03",
    title: "Open Source Code",
    value: "12+",
    unit: "REPOSITORIES",
    subtitle: "Public on GitHub",
    desc: "Active public repositories featuring full-stack applications, deep learning inference notebooks, and custom developer tooling.",
    icon: GitFork,
    glow: "purple",
  },
  {
    index: "04",
    title: "Engineering Reliability",
    value: "100%",
    unit: "TYPE-SAFE",
    subtitle: "Clean Architecture",
    desc: "Strict adherence to modular system design, automated testing, and sub-millisecond API execution benchmarks.",
    icon: Award,
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
            <span>Growth & Calibration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
            Academic & <span className="text-gradient-purple-cyan">Technical Milestones</span>
          </h2>
          <p className="text-muted text-base md:text-lg font-sans leading-relaxed">
            Quantifiable benchmarks and academic rigor demonstrating consistent continuous technical calibration across algorithms, systems, and open-source contributions.
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
