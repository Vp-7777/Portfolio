"use client";

import { useState, useRef } from "react";
import { View } from "@react-three/drei";
import { useSystemStore } from "@/store/useSystemStore";
import { Section } from "@/features/ui/Section";
import { ExperienceScene } from "./ExperienceScene";
import experienceData from "@/lib/content/experience.json";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const reducedMotion = useSystemStore((state) => state.reducedMotion);

  const handleMouseEnter = (label: string) => {
    setCursorVariant("hover");
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Section
      ref={containerRef}
      chapter="experience"
      className="relative w-full bg-background border-t border-border-subtle py-16 md:py-24 overflow-hidden"
    >
      {/* Backing WebGL Canvas Viewport */}
      <div className="absolute inset-0 z-base pointer-events-none opacity-35">
        <View className="w-full h-full">
          <ExperienceScene activeIndex={activeIndex} />
        </View>
      </div>

      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-violet-700 opacity-8 blur-[160px]" />
        <div className="absolute bottom-[10%] left-[0%] w-[350px] h-[350px] rounded-full bg-indigo-700 opacity-10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-0 space-y-14 relative z-hover">

        {/* Header */}
        <div className="space-y-4 max-w-2xl select-none">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-purple-300 tracking-wide border border-purple-500/30 rounded-full px-3.5 py-1 bg-purple-500/10 uppercase">
            Career Journey
          </div>
          <h2
            className="font-display font-extrabold uppercase tracking-tight leading-none"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            DEVELOPER{" "}
            <span
              className="italic font-light"
              style={{
                background: "linear-gradient(135deg, #c084fc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              JOURNEY
            </span>
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-md font-sans">
            Collaborating with cross-functional engineering teams inside production-grade environments.
          </p>
        </div>

        {/* Dynamic Selector Timeline switcher */}
        <div className="flex flex-col md:flex-row gap-3 p-2 max-w-3xl relative rounded-xl border border-border-subtle/60 bg-surface-1/40 backdrop-blur-md select-none"
          style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
        >
          {/* Top highlight line */}
          <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent rounded" />

          {experienceData.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.company}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => handleMouseEnter(item.company)}
                onMouseLeave={handleMouseLeave}
                className={cn(
                  "flex-1 py-3 px-6 font-sans text-xs font-semibold uppercase tracking-wider rounded-lg border transition-all duration-300 cursor-pointer focus:outline-none",
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-purple-500 shadow-lg shadow-purple-900/40 font-bold"
                    : "bg-transparent text-muted border-transparent hover:text-white hover:bg-surface-2/40 hover:border-border-subtle/50"
                )}
              >
                0{idx + 1} · {item.company}
              </button>
            );
          })}
        </div>

        {/* Experience Cards Layout */}
        <div className="relative min-h-[450px] max-w-4xl">
          {experienceData.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={item.company}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => handleMouseEnter(`VIEW // ${item.company.toUpperCase()}`)}
                onMouseLeave={handleMouseLeave}
                className={cn(
                  "spotlight-card absolute top-0 left-0 w-full p-8 md:p-12 rounded-xl space-y-8 flex flex-col justify-between transition-all duration-500 ease-precision",
                  isActive
                    ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                    : "opacity-0 translate-y-6 pointer-events-none scale-[0.98]"
                )}
                style={{
                  zIndex: isActive ? 2 : 1,
                  display: reducedMotion && !isActive ? "none" : "flex",
                  boxShadow: isActive ? "0 8px 60px rgba(168,85,247,0.1)" : "none",
                }}
              >
                {/* Ambient top border line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

                {/* Meta details */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border-subtle/50 pb-6 relative z-base select-none">
                  <div className="space-y-1.5">
                    <h3 className="font-display text-3xl md:text-4xl text-foreground font-bold uppercase tracking-tight">
                      {item.role}
                    </h3>
                    <p className="font-mono text-xs text-accent tracking-widest uppercase">
                      {item.company} <span className="text-muted">{"//"}</span> {item.location}
                    </p>
                  </div>
                  <div className="font-mono text-xs text-muted tracking-widest uppercase bg-surface-2/80 px-4 py-2 border border-border-subtle rounded-lg whitespace-nowrap">
                    {item.period}
                  </div>
                </div>

                {/* Details */}
                <div className="relative z-base text-base md:text-lg text-muted leading-relaxed font-sans max-w-3xl">
                  {item.details.join(" ")}
                </div>

                {/* Grid performance telemetry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border-subtle/50 font-mono text-xs text-muted relative z-base">
                  <div className="space-y-1.5 p-3 rounded-lg bg-surface-2/60 border border-border-subtle/40">
                    <span className="text-amber-400 text-[10px] tracking-widest uppercase">BENCHMARK.01 //</span>
                    <p className="text-amber-300 font-bold tracking-wide">{item.metrics.metric1}</p>
                  </div>
                  <div className="space-y-1.5 p-3 rounded-lg bg-surface-2/60 border border-border-subtle/40">
                    <span className="text-cyan-400 text-[10px] tracking-widest uppercase">BENCHMARK.02 //</span>
                    <p className="text-cyan-300 font-bold tracking-wide">{item.metrics.metric2}</p>
                  </div>
                </div>

                {/* Technology badge chips */}
                <div className="flex flex-wrap gap-2 pt-2 relative z-base">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 font-mono text-[9px] border border-border-subtle/70 bg-surface-2/70 text-muted uppercase rounded-lg hover:border-cyan-400/40 hover:text-white transition-colors duration-200"
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
    </Section>
  );
}
