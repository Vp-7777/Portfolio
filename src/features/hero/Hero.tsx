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
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { HeroScene } from "./HeroScene";
import bioData from "@/lib/content/bio.json";

const techStackList = [
  { name: "Python", category: "Core AI & ML" },
  { name: "React Native", category: "Mobile Apps" },
  { name: "FastAPI", category: "High-Perf Backend" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "React.js", category: "Frontend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Expo", category: "Cross-Platform" },
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Type-Safe" },
  { name: "Java & C++", category: "Algorithms & OOP" },
  { name: "Computer Vision", category: "AI Systems" },
  { name: "Docker & Vercel", category: "DevOps & Cloud" },
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

    setTimeout(() => setIsScanning(false), 700);
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
      {/* 3D WebGL Background Canvas */}
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
          
          {/* ─── LEFT COLUMN: High-Impact Typography & Narrative ─── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge & Live Status */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/40 bg-purple-950/50 backdrop-blur-md shadow-[0_0_15px_rgba(147,51,234,0.2)]">
                <Sparkles size={13} className="text-cyan-400" />
                <span className="font-sans text-xs font-bold text-purple-200 uppercase tracking-wider">
                  AI Systems & Software Engineer
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-sans text-xs font-semibold text-emerald-300">
                  Open to AI & Software Roles
                </span>
              </div>
            </div>

            {/* Massive Punchy Statement Typography */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-display font-extrabold tracking-tight leading-[1.05] text-white">
                Architecting <br className="hidden sm:inline" />
                <span className="text-gradient-purple-cyan">
                  Intelligence.
                </span>{" "}
                <br className="hidden sm:inline" />
                Deploying <span className="italic font-light text-cyan-300">Scalable Systems</span>.
              </h1>

              {/* Engaging Narrative Story */}
              <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal pt-1">
                I&apos;m <span className="text-white font-bold">{bioData.name}</span> — a Computer Science Engineer specializing in <span className="text-purple-300 font-medium">Artificial Intelligence & Machine Learning</span> at SRM IST. Experienced across full-stack web architectures, React Native mobile apps, and deep learning pipelines.
              </p>
            </div>

            {/* Live Telemetry Status Bar with 9.74 CGPA & Perfect 10 Sem 2 */}
            <div className="p-3.5 rounded-2xl bg-surface-1/90 border border-white/10 flex flex-wrap items-center gap-y-2 gap-x-5 font-sans text-xs max-w-xl">
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <GraduationCap size={15} className="text-amber-400" />
                <span>9.74 CGPA (97.4%) · SRM IST</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                <Award size={14} className="text-emerald-400" />
                <span>Sem 2: 10/10 Perfect GPA</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <Cpu size={14} className="text-cyan-400" />
                <span>ISRO & AWS Certified</span>
              </div>
              <div className="flex items-center gap-1.5 text-purple-300 font-semibold">
                <MapPin size={14} className="text-purple-400" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection("projects")}
                onMouseEnter={() => handleMouseEnter("Explore Projects")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white cursor-pointer transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-purple-600/35"
                style={{
                  background: "linear-gradient(135deg, #9333ea, #6366f1, #22d3ee)",
                }}
              >
                <span>Explore Engineered Systems</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`mailto:${bioData.email}`}
                onMouseEnter={() => handleMouseEnter("Contact Vishal")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-border-subtle hover:border-cyan-400/60 bg-surface-1/70 backdrop-blur-md hover:bg-surface-2 transition-all duration-300 cursor-pointer"
              >
                <Mail size={15} className="text-cyan-400" />
                <span>Let&apos;s Connect</span>
              </a>

              <a
                href={bioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => handleMouseEnter("View Resume")}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted hover:text-white border border-border-subtle/60 bg-surface-1/40 hover:bg-surface-1 transition-all duration-300 cursor-pointer"
              >
                <Download size={14} className="text-purple-400" />
                <span>View Resume</span>
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
                    <span>Engineering Core</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>CGPA: 9.74 / 10</span>
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
                      {/* Scanning effect */}
                      {isScanning && (
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-purple-500/0 animate-pulse pointer-events-none" />
                      )}
                    </div>
                  </div>

                  {/* Floating Tech Badges */}
                  <div className="absolute -left-2 top-4 px-3 py-1 rounded-lg bg-surface-2/95 border border-purple-500/40 text-[11px] font-sans font-bold text-purple-300 shadow-md backdrop-blur-md">
                    Python · PyTorch
                  </div>
                  <div className="absolute -right-2 bottom-8 px-3 py-1 rounded-lg bg-surface-2/95 border border-cyan-500/40 text-[11px] font-sans font-bold text-cyan-300 shadow-md backdrop-blur-md">
                    React Native · Expo
                  </div>
                </div>

                {/* Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-surface-2/80 border border-white/5 font-sans text-center">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-muted uppercase font-medium block">Internships</span>
                    <span className="text-cyan-400 font-bold text-xs">RideAbit & QRaptor</span>
                  </div>
                  <div className="space-y-0.5 border-x border-white/10">
                    <span className="text-[10px] text-muted uppercase font-medium block">Hackathons</span>
                    <span className="text-emerald-400 font-bold text-xs">Top 20 Finalist</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-muted uppercase font-medium block">Education</span>
                    <span className="text-purple-300 font-bold text-xs">SRM IST (2028)</span>
                  </div>
                </div>

                {/* Interactive Scan Action Button */}
                <button
                  onClick={triggerNeuralScan}
                  className="w-full py-2.5 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider text-white border border-purple-500/40 bg-purple-950/40 hover:bg-purple-900/50 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Activity size={14} className={isScanning ? "animate-spin text-cyan-400" : "text-purple-400"} />
                  <span>{isScanning ? "Evaluating System State..." : "Trigger System Calibration"}</span>
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
