"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { View } from "@react-three/drei";
import {
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  Zap,
  Activity,
  Cpu,
  ShieldCheck,
  MapPin,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { HeroScene } from "./HeroScene";
import bioData from "@/lib/content/bio.json";

const techStackList = [
  { name: "PyTorch", category: "AI / ML" },
  { name: "FastAPI", category: "Backend" },
  { name: "Python", category: "Core" },
  { name: "Transformers", category: "AI / ML" },
  { name: "Next.js 16", category: "Full-Stack" },
  { name: "React 19", category: "Frontend" },
  { name: "ONNX Runtime", category: "Edge AI" },
  { name: "LangChain & LangGraph", category: "Agentic AI" },
  { name: "Docker", category: "DevOps" },
  { name: "PostgreSQL & Vector DBs", category: "Data" },
  { name: "Three.js & WebGL", category: "3D Graphics" },
  { name: "TypeScript", category: "Core" },
];

const marqueeItems = [...techStackList, ...techStackList, ...techStackList];

export function Hero() {
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const setHasConstructed = useSystemStore((state) => state.setHasConstructed);
  const hasConstructed = useSystemStore((state) => state.hasConstructed);

  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanTelemetry, setScanTelemetry] = useState({
    fps: 60,
    latency: "12.4ms",
    accuracy: "99.4%",
    activeNodes: 128,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      if (!hasConstructed) {
        setTimeout(() => setHasConstructed(true), 1200);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [hasConstructed, setHasConstructed]);

  const triggerNeuralScan = () => {
    setIsScanning(true);
    const randomLatency = (10 + Math.random() * 5).toFixed(1) + "ms";
    const randomAccuracy = (99.1 + Math.random() * 0.7).toFixed(1) + "%";
    const randomNodes = Math.floor(120 + Math.random() * 20);

    setScanTelemetry({
      fps: Math.floor(58 + Math.random() * 4),
      latency: randomLatency,
      accuracy: randomAccuracy,
      activeNodes: randomNodes,
    });

    setTimeout(() => setIsScanning(false), 800);
  };

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
      className="relative w-full min-h-screen bg-[#05040d] bg-grid-pattern overflow-hidden flex flex-col justify-between pt-24 pb-4"
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* 3D WebGL Background Canvas (Constellation & Aurora Shader) */}
      <div className="absolute inset-0 z-canvas pointer-events-none opacity-75">
        <View className="w-full h-full">
          <HeroScene />
        </View>
      </div>

      {/* Ambient Lighting Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -top-[15%] left-[10%] w-[650px] h-[650px] rounded-full bg-purple-600/15 blur-[170px]" />
        <div className="absolute top-[35%] right-[5%] w-[600px] h-[600px] rounded-full bg-cyan-600/15 blur-[160px]" />
        <div className="absolute bottom-[5%] left-[30%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      {/* Main Asymmetric Hero Content Container */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 my-auto relative z-base select-none py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ─── LEFT COLUMN: Title & Authority ─── */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-sans text-xs font-semibold text-emerald-300 tracking-wide">
                Available for AI & Machine Learning Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-display font-extrabold tracking-tight leading-[1.05] text-white">
                Engineering <br className="hidden sm:inline" />
                <span className="text-gradient-purple-cyan">
                  Autonomous AI
                </span>{" "}
                <br className="hidden sm:inline" />
                & Robust Systems.
              </h1>

              <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal pt-1">
                Hi, I&apos;m <span className="text-white font-semibold">{bioData.name}</span> — an AI & Machine Learning Engineer specializing in deep learning inference pipelines, intelligent agentic workflows, and high-performance full-stack architectures.
              </p>
            </div>

            {/* Academic & Competency Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface-1 border border-border-subtle/80 font-sans text-xs font-semibold text-amber-300">
                <GraduationCap size={14} className="text-amber-400" />
                <span>CGPA 9.70 · SRM IST</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface-1 border border-border-subtle/80 font-sans text-xs font-semibold text-cyan-300">
                <Cpu size={14} className="text-cyan-400" />
                <span>10+ Production AI Models</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface-1 border border-border-subtle/80 font-sans text-xs font-semibold text-purple-300">
                <MapPin size={14} className="text-purple-400" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => scrollToSection("projects")}
                onMouseEnter={() => handleMouseEnter("Explore Projects")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white cursor-pointer transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-purple-600/30"
                style={{
                  background: "linear-gradient(135deg, #9333ea, #6366f1, #22d3ee)",
                }}
              >
                <span>Explore AI Systems</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`mailto:${bioData.email}`}
                onMouseEnter={() => handleMouseEnter("Contact Vishal")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-border-subtle hover:border-cyan-400/60 bg-surface-1/70 backdrop-blur-md hover:bg-surface-2 transition-all duration-300 cursor-pointer"
              >
                <Mail size={15} className="text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              <a
                href="#"
                onMouseEnter={() => handleMouseEnter("Download Resume")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted hover:text-white border border-border-subtle/60 bg-surface-1/40 hover:bg-surface-1 transition-all duration-300 cursor-pointer"
              >
                <Download size={14} className="text-purple-400" />
                <span>Resume</span>
              </a>
            </div>

          </div>

          {/* ─── RIGHT COLUMN: Interactive AI Holographic Neural Card ─── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Neon Halo Glow */}
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-purple-600 via-cyan-400 to-indigo-600 opacity-30 blur-2xl pointer-events-none animate-pulse" />

              {/* Glassmorphic AI HUD Container */}
              <div className="glass-panel p-6 sm:p-7 rounded-[30px] relative space-y-5 border border-white/10">
                
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-sans text-xs">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider">
                    <Zap size={14} className="animate-bounce" />
                    <span>Neural Core v4.2</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>STATE: OPTIMIZED</span>
                  </div>
                </div>

                {/* Profile Photo & Neural Frame */}
                <div className="relative flex items-center justify-center py-2">
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-purple-500 via-cyan-400 to-indigo-500 shadow-[0_0_35px_rgba(147,51,234,0.35)] group">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-background bg-surface-2">
                      <Image
                        src="/profile.png"
                        alt="Vishal Patel"
                        fill
                        priority
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Subtly animated scanning line */}
                      {isScanning && (
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-purple-500/0 animate-pulse pointer-events-none" />
                      )}
                    </div>
                  </div>

                  {/* Orbiting Tech Floating Badges */}
                  <div className="absolute -left-2 top-4 px-3 py-1 rounded-lg bg-surface-2/90 border border-purple-500/40 text-[11px] font-sans font-bold text-purple-300 shadow-md backdrop-blur-md">
                    PyTorch 2.0
                  </div>
                  <div className="absolute -right-2 bottom-8 px-3 py-1 rounded-lg bg-surface-2/90 border border-cyan-500/40 text-[11px] font-sans font-bold text-cyan-300 shadow-md backdrop-blur-md">
                    FastAPI · ONNX
                  </div>
                </div>

                {/* Live Real-Time Telemetry Readout */}
                <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-surface-2/80 border border-white/5 font-sans text-center">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-muted uppercase font-medium block">Latency</span>
                    <span className="text-cyan-400 font-bold text-xs">{scanTelemetry.latency}</span>
                  </div>
                  <div className="space-y-0.5 border-x border-white/10">
                    <span className="text-[10px] text-muted uppercase font-medium block">Accuracy</span>
                    <span className="text-emerald-400 font-bold text-xs">{scanTelemetry.accuracy}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-muted uppercase font-medium block">Nodes</span>
                    <span className="text-purple-300 font-bold text-xs">{scanTelemetry.activeNodes} Active</span>
                  </div>
                </div>

                {/* Interactive Scan Action Button */}
                <button
                  onClick={triggerNeuralScan}
                  className="w-full py-2.5 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider text-white border border-purple-500/40 bg-purple-950/40 hover:bg-purple-900/50 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Activity size={14} className={isScanning ? "animate-spin text-cyan-400" : "text-purple-400"} />
                  <span>{isScanning ? "Evaluating Synaptic Weights..." : "Trigger Live Neural Benchmark"}</span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Categorized Tech Stack Marquee ─── */}
      <div className="w-full flex flex-col relative z-base mt-auto">
        <div className="w-full overflow-hidden border-t border-border-subtle/50 bg-surface-1/40 backdrop-blur-md py-3.5 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#05040d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#05040d] to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeItems.map((tech, idx) => (
              <span
                key={idx}
                className="font-sans text-xs font-medium text-muted/80 tracking-wider uppercase mx-6 inline-flex items-center gap-2.5 select-none hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                <span className="text-white font-semibold">{tech.name}</span>
                <span className="text-[10px] text-purple-400/80 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/20">
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
