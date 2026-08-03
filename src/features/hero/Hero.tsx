"use client";

import { useEffect, useState } from "react";
import { View } from "@react-three/drei";
import {
  MapPin,
  Wifi,
  Cpu,
  GraduationCap,
  GitFork,
  AtSign,
  ArrowDown,
  ChevronRight,
  Sparkles,
  Activity,
  Layers,
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { HeroScene } from "./HeroScene";
import { BentoTile } from "@/features/ui/BentoTile";
import { useCountUp } from "@/lib/hooks/useCountUp";
import bioData from "@/lib/content/bio.json";

const techItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "FastAPI",
  "PyTorch",
  "Node.js",
  "GSAP",
  "Three.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Zustand",
  "Docker",
  "Vector DBs",
  "LangChain",
  "ONNX Runtime",
];

const marqueeList = [...techItems, ...techItems, ...techItems];

export function Hero() {
  const setHasConstructed = useSystemStore((state) => state.setHasConstructed);
  const hasConstructed = useSystemStore((state) => state.hasConstructed);

  const [mounted, setMounted] = useState(false);

  const { displayValue: cgpaValue, elementRef: cgpaRef } = useCountUp("9.70", {
    end: 9.7,
    decimals: 2,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      if (!hasConstructed) {
        setTimeout(() => setHasConstructed(true), 1400);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [hasConstructed, setHasConstructed]);

  return (
    <section
      data-chapter="hero"
      className="relative w-full min-h-screen bg-[#020108] overflow-hidden flex flex-col pt-20 pb-6"
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* 3D WebGL Background (Particle + Aurora dual layer) */}
      <div className="absolute inset-0 z-canvas pointer-events-none opacity-80">
        <View className="w-full h-full">
          <HeroScene />
        </View>
      </div>

      {/* Background ambient light blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-purple-900/20 blur-[180px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-900/20 blur-[160px]" />
      </div>

      {/* ─── Top Telemetry Bar ─── */}
      <div className="flex justify-between items-center text-xs text-muted font-sans font-medium px-6 md:px-14 pb-4 relative z-base select-none">
        <div className="flex items-center gap-2">
          <MapPin size={13} className="text-cyan-400" />
          <span className="text-foreground/90">{bioData.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Wifi size={12} className="text-emerald-400" />
          <span className="text-emerald-400 font-semibold tracking-wide">Available for Work</span>
        </div>
      </div>

      {/* ─── Bento Grid Section ─── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-14 py-2 relative z-base select-none grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* TILE 1: Main Title & Tagline (Large Tile - 8 cols) */}
        <BentoTile
          glowColor="purple"
          cursorLabel="Vishal Patel"
          className="md:col-span-8 flex flex-col justify-between space-y-6 min-h-[310px]"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-purple-300 tracking-wide border border-purple-500/30 rounded-full px-3.5 py-1 bg-purple-500/10">
              <Sparkles size={13} className="text-cyan-400" />
              <span>AI & Machine Learning Systems Engineer</span>
            </div>

            <h1
              className="font-display font-extrabold tracking-tight uppercase leading-[0.9] pt-1"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #c084fc 40%, #22d3ee 80%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {bioData.name}
            </h1>

            <p className="text-muted text-sm md:text-base max-w-xl leading-relaxed font-sans font-normal">
              {bioData.tagline}
            </p>
          </div>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`mailto:${bioData.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider text-white cursor-pointer transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #9333ea, #6366f1)",
                boxShadow: "0 4px 20px rgba(147,51,234,0.4)",
              }}
            >
              <ChevronRight size={14} />
              Get In Touch
            </a>
            <a
              href={bioData.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-sans text-xs font-medium tracking-wider text-muted border border-border-subtle hover:border-purple-500/50 hover:text-white bg-surface-1/60 backdrop-blur-sm cursor-pointer transition-all duration-300 uppercase"
            >
              <GitFork size={13} />
              GitHub
            </a>
            <a
              href={bioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-sans text-xs font-medium tracking-wider text-muted border border-border-subtle hover:border-purple-500/50 hover:text-white bg-surface-1/60 backdrop-blur-sm cursor-pointer transition-all duration-300 uppercase"
            >
              <AtSign size={13} />
              LinkedIn
            </a>
          </div>
        </BentoTile>

        {/* TILE 2: Academic Calibration Tile (4 cols) */}
        <BentoTile
          glowColor="amber"
          cursorLabel="CGPA 9.70"
          className="md:col-span-4 flex flex-col justify-between space-y-4 min-h-[310px]"
        >
          <div className="flex justify-between items-center border-b border-border-subtle/60 pb-3 font-sans text-xs font-semibold text-muted tracking-wider uppercase">
            <span className="flex items-center gap-1.5 text-amber-400">
              <GraduationCap size={14} />
              Academic Performance
            </span>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          </div>

          <div ref={cgpaRef} className="space-y-1 my-auto">
            <span className="font-sans text-xs text-muted font-medium uppercase tracking-wider block">
              Cumulative GPA
            </span>
            <div className="font-display font-extrabold text-5xl md:text-6xl text-amber-400 tracking-tight">
              {cgpaValue}
            </div>
            <p className="text-xs text-muted font-sans leading-relaxed pt-1 font-normal">
              Computer Science & Engineering specialization in Artificial Intelligence & Machine Learning.
            </p>
          </div>

          <div className="font-sans text-[11px] text-muted/70 tracking-wider uppercase pt-2 border-t border-border-subtle/50 flex justify-between font-medium">
            <span>Location: Chennai</span>
            <span>Status: Active</span>
          </div>
        </BentoTile>

        {/* TILE 3: Core Tech Stack Grid (4 cols) */}
        <BentoTile
          glowColor="cyan"
          cursorLabel="Core Technologies"
          className="md:col-span-4 flex flex-col justify-between space-y-4"
        >
          <div className="flex items-center justify-between border-b border-border-subtle/60 pb-3 font-sans text-xs font-semibold text-muted tracking-wider uppercase">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Cpu size={14} />
              Core Technologies
            </span>
            <span className="text-cyan-400">16 Tools</span>
          </div>

          <div className="grid grid-cols-2 gap-2 font-sans text-xs text-muted/90 py-1">
            {techItems.slice(0, 8).map((tech) => (
              <div
                key={tech}
                className="px-3 py-2 rounded-lg bg-surface-2/60 border border-border-subtle/60 text-xs font-medium flex items-center gap-2 hover:border-cyan-500/40 hover:text-white transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                {tech}
              </div>
            ))}
          </div>

          <div className="font-sans text-[11px] text-muted/70 tracking-wider uppercase pt-2 border-t border-border-subtle/50 font-medium">
            Production & Research Ready
          </div>
        </BentoTile>

        {/* TILE 4: Live Systems Status & Focus (4 cols) */}
        <BentoTile
          glowColor="purple"
          cursorLabel="System Metrics"
          className="md:col-span-4 flex flex-col justify-between space-y-4"
        >
          <div className="flex items-center justify-between border-b border-border-subtle/60 pb-3 font-sans text-xs font-semibold text-muted tracking-wider uppercase">
            <span className="flex items-center gap-1.5 text-purple-400">
              <Activity size={14} />
              System Metrics
            </span>
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
          </div>

          <div className="space-y-2.5 font-sans text-xs">
            <div className="flex justify-between items-center p-2.5 rounded-lg bg-surface-2/50 border border-border-subtle/40">
              <span className="text-muted text-xs font-medium">Models Tested</span>
              <span className="text-white font-bold">10+ Systems</span>
            </div>
            <div className="flex justify-between items-center p-2.5 rounded-lg bg-surface-2/50 border border-border-subtle/40">
              <span className="text-muted text-xs font-medium">Public Repos</span>
              <span className="text-cyan-400 font-bold">12+ Repositories</span>
            </div>
            <div className="flex justify-between items-center p-2.5 rounded-lg bg-surface-2/50 border border-border-subtle/40">
              <span className="text-muted text-xs font-medium">Latency Target</span>
              <span className="text-emerald-400 font-bold">&lt; 50ms Inference</span>
            </div>
          </div>

          <div className="font-sans text-[11px] text-muted/70 tracking-wider uppercase pt-2 border-t border-border-subtle/50 font-medium">
            Continuous Optimization
          </div>
        </BentoTile>

        {/* TILE 5: Featured Projects Highlight (4 cols) */}
        <BentoTile
          glowColor="cyan"
          cursorLabel="Featured Projects"
          className="md:col-span-4 flex flex-col justify-between space-y-4"
        >
          <div className="flex items-center justify-between border-b border-border-subtle/60 pb-3 font-sans text-xs font-semibold text-muted tracking-wider uppercase">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Layers size={14} />
              Featured Projects
            </span>
            <span className="text-xs text-cyan-400 font-bold">03 Deployed</span>
          </div>

          <div className="space-y-2.5 font-sans text-xs">
            <div className="p-2.5 rounded-lg bg-surface-2/60 border border-border-subtle/50 space-y-1">
              <div className="flex justify-between text-white font-bold">
                <span>AutisMind AI</span>
                <span className="text-[10px] text-purple-300 font-medium uppercase">Healthcare AI</span>
              </div>
              <p className="text-xs font-sans text-muted leading-tight font-normal">
                Offline-capable developmental monitoring inference pipeline.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-surface-2/60 border border-border-subtle/50 space-y-1">
              <div className="flex justify-between text-white font-bold">
                <span>TeraSight / PrithviQ</span>
                <span className="text-[10px] text-cyan-300 font-medium uppercase">Spatial AI</span>
              </div>
              <p className="text-xs font-sans text-muted leading-tight font-normal">
                Satellite environmental intelligence tile rendering engine.
              </p>
            </div>
          </div>

          <div className="font-sans text-[11px] text-muted/70 tracking-wider uppercase pt-2 border-t border-border-subtle/50 font-medium">
            Explore Details Below
          </div>
        </BentoTile>
      </div>

      {/* ─── Scroll Cue ─── */}
      <div className="flex items-center justify-center pt-3 pb-1 relative z-base select-none">
        <div className="flex flex-col items-center gap-1.5 text-muted/60 font-sans text-xs font-medium tracking-wide animate-bounce">
          <ArrowDown size={14} />
          <span>Scroll to Explore</span>
        </div>
      </div>

      {/* ─── Infinite Technology Marquee ─── */}
      <div className="w-full flex flex-col relative z-base mt-auto">
        <div className="w-full overflow-hidden border-t border-b border-border-subtle/50 bg-surface-1/30 backdrop-blur-sm py-3 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020108] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020108] to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeList.map((item, idx) => (
              <span
                key={idx}
                className="font-sans text-xs font-medium text-muted/70 tracking-wider uppercase mx-8 inline-flex items-center gap-3 select-none"
              >
                <span className="text-cyan-400/80 text-[7px]">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
