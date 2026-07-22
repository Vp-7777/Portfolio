"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { View } from "@react-three/drei";
import {
  MapPin,
  Wifi,
  Code2,
  Cpu,
  GraduationCap,
  GitFork,
  AtSign,
  ArrowDown,
  ChevronRight,
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { HeroScene } from "./HeroScene";
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
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const setHasConstructed = useSystemStore((state) => state.setHasConstructed);
  const hasConstructed = useSystemStore((state) => state.hasConstructed);

  // Track mount so we can trigger CSS animation
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay so CSS transition runs after hydration
    const timer = setTimeout(() => {
      setMounted(true);
      // Mark system as constructed after hero animation
      if (!hasConstructed) {
        setTimeout(() => setHasConstructed(true), 1800);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [hasConstructed, setHasConstructed]);

  const handleMouseEnter = (label: string) => {
    setCursorVariant("hover");
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  return (
    <section
      data-chapter="hero"
      className="relative w-full min-h-screen bg-background overflow-hidden flex flex-col"
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* 3D WebGL Particle Starfield */}
      <div className="absolute inset-0 z-canvas pointer-events-none opacity-65">
        <View className="w-full h-full">
          <HeroScene />
        </View>
      </div>

      {/* Layered background nebula blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-purple-700 opacity-[0.18] blur-[180px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600 opacity-[0.18] blur-[160px]" />
        <div className="absolute top-[45%] left-[45%] w-[400px] h-[400px] rounded-full bg-violet-900 opacity-[0.12] blur-[130px] -translate-x-1/2" />
      </div>

      {/* ─── Top telemetry bar ─── */}
      <div className="flex justify-between items-center font-mono text-[10px] text-muted tracking-widest uppercase px-8 md:px-14 pt-28 pb-0 relative z-base">
        <div className="flex items-center gap-2">
          <MapPin size={11} className="text-accent" />
          <span><span className="text-accent">LOCATION //</span> Chennai, TN — India</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <Wifi size={10} className="text-emerald-400" />
          STATUS // ONLINE
        </div>
      </div>

      {/* ─── Main hero body ─── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center px-8 md:px-14 py-12 relative z-base">

        {/* Left: Text content */}
        <div className="lg:col-span-7 space-y-7 select-none">
          {/* Overline badge */}
          <div className="inline-flex items-center gap-2 font-mono text-[10px] text-accent tracking-[0.3em] uppercase border border-accent/25 rounded-full px-4 py-1.5 bg-accent/5">
            <Code2 size={10} className="text-accent" />
            SYSTEM // INITIALIZED — DEVELOPER PORTFOLIO
          </div>

          {/* Large gradient name */}
          <h1
            className="font-display font-extrabold tracking-tight uppercase leading-[0.88]"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #c084fc 40%, #818cf8 75%, #e2e8f0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {bioData.name}
          </h1>

          {/* Specialisation pill */}
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-accent/50" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              {bioData.specialization}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed font-sans">
            {bioData.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={`mailto:${bioData.email}`}
              onMouseEnter={() => handleMouseEnter("SEND // MAIL")}
              onMouseLeave={handleMouseLeave}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono text-xs tracking-widest uppercase text-background font-semibold cursor-pointer transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #a855f7, #6366f1)",
                boxShadow: "0 4px 24px rgba(168,85,247,0.35)",
              }}
            >
              <ChevronRight size={13} />
              Get In Touch
            </a>
            <a
              href={bioData.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleMouseEnter("LINK // GITHUB")}
              onMouseLeave={handleMouseLeave}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono text-xs tracking-widest uppercase text-muted border border-border-subtle hover:border-accent/50 hover:text-foreground bg-surface-1/60 backdrop-blur-sm cursor-pointer transition-all duration-300"
            >
              <GitFork size={13} />
              GitHub
            </a>
            <a
              href={bioData.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleMouseEnter("LINK // LINKEDIN")}
              onMouseLeave={handleMouseLeave}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono text-xs tracking-widest uppercase text-muted border border-border-subtle hover:border-accent/50 hover:text-foreground bg-surface-1/60 backdrop-blur-sm cursor-pointer transition-all duration-300"
            >
              <AtSign size={13} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Profile Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* Profile photo card */}
          <div
            onMouseEnter={() => handleMouseEnter("PROFILE // VISHAL PATEL")}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl overflow-hidden border border-purple-900/40 bg-surface-1/50 backdrop-blur-xl group cursor-default"
            style={{
              boxShadow: "0 8px 60px rgba(168,85,247,0.12), 0 0 0 1px rgba(168,85,247,0.06)",
            }}
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent z-10" />

            {/* Profile image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/profile.png"
                alt="Vishal Patel — AI & ML Engineer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-surface-1 via-surface-1/60 to-transparent" />
            </div>

            {/* Name overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <p className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                {bioData.name}
              </p>
              <p className="font-mono text-[10px] text-accent tracking-widest uppercase mt-1">
                AI & ML Systems Engineer // Chennai
              </p>
            </div>
          </div>

          {/* Telemetry stats card */}
          <div
            onMouseEnter={() => handleMouseEnter("TELEMETRY // CALIBRATED")}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-xl border border-purple-900/40 bg-surface-1/50 backdrop-blur-xl p-5 space-y-3 font-mono text-[11px] tracking-widest text-muted hover:border-accent/50 transition-all duration-500 cursor-default"
            style={{
              boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent rounded-t-xl" />

            <div className="flex justify-between items-center pb-2.5 border-b border-border-subtle/60">
              <span className="text-accent flex items-center gap-2">
                <Cpu size={10} className="text-accent" />
                SYSTEM_METRICS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-muted/70">
                  <GraduationCap size={10} className="text-accent/70" />
                  CGPA:
                </span>
                <span className="text-foreground">{bioData.cgpa} / 10.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-muted/70">
                  <Code2 size={10} className="text-accent/70" />
                  CORE:
                </span>
                <span className="text-foreground">AI & MACHINE LEARNING</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-muted/70">
                  <Cpu size={10} className="text-accent/70" />
                  FOCUS:
                </span>
                <span className="text-foreground">SYSTEMS DESIGN</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-muted/70">
                  <MapPin size={10} className="text-accent/70" />
                  BASE:
                </span>
                <span className="text-foreground">CHENNAI, INDIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Scroll cue ─── */}
      <div className="flex items-center justify-center py-4 relative z-base select-none">
        <div className="flex flex-col items-center gap-1.5 text-muted/40 font-mono text-[9px] tracking-widest uppercase animate-bounce">
          <ArrowDown size={13} />
          SCROLL TO EXPLORE
        </div>
      </div>

      {/* ─── Infinite scrolling technology marquee ─── */}
      <div className="w-full flex flex-col relative z-base">
        <div className="w-full overflow-hidden border-t border-b border-border-subtle/50 bg-surface-1/25 backdrop-blur-sm py-3.5 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeList.map((item, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] text-muted/60 tracking-widest uppercase mx-8 inline-flex items-center gap-3 select-none"
              >
                <span className="text-accent/60 text-[7px]">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
