"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { View } from "@react-three/drei";
import {
  ArrowRight,
  Download,
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
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { HeroScene } from "./HeroScene";
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
  { name: "Java & C++", category: "Core CS" },
  { name: "Computer Vision", category: "AI Systems" },
  { name: "Docker & Vercel", category: "DevOps" },
];

const marqueeItems = [...techStackList, ...techStackList, ...techStackList];

export function Hero() {
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const setHasConstructed = useSystemStore((state) => state.setHasConstructed);
  const hasConstructed = useSystemStore((state) => state.hasConstructed);

  const [mounted, setMounted] = useState(false);
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [calibrationData, setCalibrationData] = useState({
    latency: "14.2ms",
    accuracy: "99.4%",
    nodes: 128,
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

  const triggerCalibration = () => {
    setIsCalibrating(true);
    setTimeout(() => {
      setCalibrationData({
        latency: (12 + Math.random() * 4).toFixed(1) + "ms",
        accuracy: (99.1 + Math.random() * 0.7).toFixed(1) + "%",
        nodes: Math.floor(125 + Math.random() * 15),
      });
      setIsCalibrating(false);
    }, 500);
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
      className="relative w-full min-h-screen bg-[#07080d] bg-grid-pattern overflow-hidden flex flex-col justify-between pt-24 pb-4"
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* 3D WebGL Background Canvas */}
      <div className="absolute inset-0 z-canvas pointer-events-none opacity-60">
        <View className="w-full h-full">
          <HeroScene />
        </View>
      </div>

      {/* Ambient Mesh Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -top-[10%] left-[10%] w-[650px] h-[650px] rounded-full bg-cyan-600/10 blur-[180px]" />
        <div className="absolute top-[30%] right-[5%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[180px]" />
        <div className="absolute bottom-[5%] left-[25%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[160px]" />
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 my-auto relative z-base select-none py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ─── LEFT COLUMN: Headlines, Narrative & Interactive Terminal ─── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md shadow-sm">
                <Sparkles size={13} className="text-cyan-400" />
                <span className="font-sans text-xs font-bold text-cyan-200 uppercase tracking-wider">
                  Software & AI Systems Engineer
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-sans text-xs font-semibold text-emerald-300">
                  Interning @ RideAbit & QRaptor
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-display font-extrabold tracking-tight leading-[1.08] text-white">
                Engineering <br className="hidden sm:inline" />
                <span className="text-gradient-cyan-purple">
                  Autonomous AI
                </span>{" "}
                <br className="hidden sm:inline" />
                & Scalable Software.
              </h1>

              <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal pt-0.5">
                Hey, I&apos;m <span className="text-white font-bold">{bioData.name}</span> — studying Computer Science (AI & ML) at <span className="text-white font-medium">SRM IST</span> with a <span className="text-amber-300 font-semibold">9.74 CGPA</span>. Experienced in full-stack architectures, React Native mobile apps, and deep learning vision systems.
              </p>
            </div>

            {/* Academic & Credential Badges */}
            <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-1 border border-white/10 text-amber-300 font-medium">
                <GraduationCap size={14} className="text-amber-400" />
                <span>9.74 CGPA · SRM IST</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-1 border border-white/10 text-emerald-300 font-medium">
                <Award size={14} className="text-emerald-400" />
                <span>Sem 2: 10/10 Perfect GPA</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-1 border border-white/10 text-cyan-300 font-medium">
                <Cpu size={14} className="text-cyan-400" />
                <span>ISRO & AWS Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-1 border border-white/10 text-muted font-medium">
                <MapPin size={13} className="text-purple-400" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => scrollToSection("projects")}
                onMouseEnter={() => handleMouseEnter("Explore Projects")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:scale-[1.02] transition-all duration-200 cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <span>View Engineered Systems</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={bioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => handleMouseEnter("View Resume on Google Drive")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 cursor-pointer"
              >
                <FileText size={15} className="text-cyan-400" />
                <span>View Resume</span>
                <ArrowUpRight size={13} className="opacity-70" />
              </a>

              <a
                href={`mailto:${bioData.email}`}
                onMouseEnter={() => handleMouseEnter("Send Email")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-sans text-xs sm:text-sm font-medium uppercase tracking-wider text-muted hover:text-white border border-white/10 bg-surface-1/50 hover:bg-surface-2 transition-all duration-200 cursor-pointer"
              >
                <Mail size={15} />
                <span>Contact</span>
              </a>
            </div>

            {/* Interactive Live AI Terminal Sandbox Component */}
            <div className="pt-2">
              <HeroTerminal />
            </div>

          </div>

          {/* ─── RIGHT COLUMN: Interactive Holographic Profile Card ─── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Neon Halo Glow */}
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-cyan-500 via-purple-500 to-indigo-600 opacity-25 blur-2xl pointer-events-none animate-pulse" />

              {/* Glassmorphic AI HUD Container */}
              <div className="glass-panel p-6 sm:p-7 rounded-[30px] relative space-y-5 border border-white/10">
                
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-sans text-xs">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider">
                    <Zap size={14} className="animate-bounce" />
                    <span>Engineering Core</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>CGPA: 9.74 / 10</span>
                  </div>
                </div>

                {/* Profile Photo & Frame */}
                <div className="relative flex items-center justify-center py-2">
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-indigo-500 shadow-[0_0_35px_rgba(56,189,248,0.25)] group">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-background bg-surface-2">
                      <Image
                        src="/profile.png"
                        alt="Vishal Patel"
                        fill
                        priority
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {isCalibrating && (
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-purple-500/0 animate-pulse pointer-events-none" />
                      )}
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute -left-2 top-4 px-3 py-1 rounded-lg bg-surface-2/95 border border-cyan-500/40 text-[11px] font-sans font-bold text-cyan-300 shadow-md backdrop-blur-md">
                    PyTorch · ML
                  </div>
                  <div className="absolute -right-2 bottom-8 px-3 py-1 rounded-lg bg-surface-2/95 border border-purple-500/40 text-[11px] font-sans font-bold text-purple-300 shadow-md backdrop-blur-md">
                    React Native · Expo
                  </div>
                </div>

                {/* Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-surface-2/80 border border-white/5 font-sans text-center">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-muted uppercase font-medium block">Latency</span>
                    <span className="text-cyan-400 font-bold text-xs">{calibrationData.latency}</span>
                  </div>
                  <div className="space-y-0.5 border-x border-white/10">
                    <span className="text-[10px] text-muted uppercase font-medium block">Accuracy</span>
                    <span className="text-emerald-400 font-bold text-xs">{calibrationData.accuracy}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-muted uppercase font-medium block">Active Nodes</span>
                    <span className="text-purple-300 font-bold text-xs">{calibrationData.nodes}</span>
                  </div>
                </div>

                {/* Interactive Scan Action Button */}
                <button
                  onClick={triggerCalibration}
                  className="w-full py-2.5 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider text-white border border-cyan-500/30 bg-cyan-950/40 hover:bg-cyan-900/50 hover:border-cyan-400/60 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Activity size={14} className={isCalibrating ? "animate-spin text-cyan-400" : "text-cyan-400"} />
                  <span>{isCalibrating ? "Calibrating Model Weights..." : "Trigger System Calibration"}</span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Categorized Tech Stack Marquee ─── */}
      <div className="w-full flex flex-col relative z-base mt-auto">
        <div className="w-full overflow-hidden border-t border-white/10 bg-surface-1/50 backdrop-blur-md py-3 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07080d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07080d] to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeItems.map((tech, idx) => (
              <span
                key={idx}
                className="font-sans text-xs font-medium text-muted/80 tracking-wider uppercase mx-6 inline-flex items-center gap-2.5 select-none hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                <span className="text-white font-semibold">{tech.name}</span>
                <span className="text-[10px] text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/20">
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
