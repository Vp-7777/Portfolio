"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { View } from "@react-three/drei";
import {
  MapPin,
  Wifi,
  GitFork,
  AtSign,
  Mail,
  ArrowDown,
  ChevronRight,
  Download,
  Sparkles,
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { HeroScene } from "./HeroScene";
import bioData from "@/lib/content/bio.json";

const techItems = [
  "PyTorch",
  "React 19",
  "Next.js 16",
  "Python",
  "FastAPI",
  "Three.js",
  "TypeScript",
  "GSAP",
  "PostgreSQL",
  "Docker",
  "Vector DBs",
  "LangChain",
  "Tailwind CSS",
  "Zustand",
  "ONNX Runtime",
];

const marqueeList = [...techItems, ...techItems, ...techItems];

export function Hero() {
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const setHasConstructed = useSystemStore((state) => state.setHasConstructed);
  const hasConstructed = useSystemStore((state) => state.hasConstructed);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      if (!hasConstructed) {
        setTimeout(() => setHasConstructed(true), 1400);
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
      className="relative w-full min-h-screen bg-[#020108] overflow-hidden flex flex-col justify-between pt-24 pb-8"
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* 3D WebGL Background Canvas (Neural Graph + Particle Starfield + Aurora Mesh) */}
      <div className="absolute inset-0 z-canvas pointer-events-none opacity-80">
        <View className="w-full h-full">
          <HeroScene />
        </View>
      </div>

      {/* Background ambient glowing blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-[180px]" />
        <div className="absolute top-[30%] right-[15%] w-[500px] h-[500px] rounded-full bg-cyan-900/20 blur-[160px]" />
      </div>

      {/* ─── Floating Social Sidebar (Left Side) ─── */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-hover flex-col gap-5 items-center">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-border-subtle" />

        <a
          href="https://github.com/Vp-7777"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("GitHub")}
          onMouseLeave={handleMouseLeave}
          className="p-3 rounded-full border border-border-subtle/60 bg-surface-1/50 backdrop-blur-md text-muted hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-surface-2 transition-all duration-300 group cursor-pointer"
        >
          <GitFork size={16} className="group-hover:scale-110 transition-transform" />
        </a>

        <a
          href="https://linkedin.com/in/vishalp7777"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("LinkedIn")}
          onMouseLeave={handleMouseLeave}
          className="p-3 rounded-full border border-border-subtle/60 bg-surface-1/50 backdrop-blur-md text-muted hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-surface-2 transition-all duration-300 group cursor-pointer"
        >
          <AtSign size={16} className="group-hover:scale-110 transition-transform" />
        </a>

        <a
          href="mailto:vishal17305@gmail.com"
          onMouseEnter={() => handleMouseEnter("Email")}
          onMouseLeave={handleMouseLeave}
          className="p-3 rounded-full border border-border-subtle/60 bg-surface-1/50 backdrop-blur-md text-muted hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-surface-2 transition-all duration-300 group cursor-pointer"
        >
          <Mail size={16} className="group-hover:scale-110 transition-transform" />
        </a>

        <div className="w-[1px] h-16 bg-gradient-to-t from-transparent to-border-subtle" />
      </div>

      {/* ─── Main Hero Content ─── */}
      <div className="max-w-6xl mx-auto w-full px-6 md:px-14 flex flex-col items-center text-center space-y-8 relative z-base select-none my-auto">
        
        {/* Profile Image Arch Container (Inspired by Reference Screenshot) */}
        <div className="relative group">
          {/* Orbital glowing ring tag */}
          <div className="absolute -top-3 -right-6 z-20 hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/40 bg-emerald-950/60 backdrop-blur-md text-[10px] font-sans font-semibold text-emerald-300 uppercase tracking-wider shadow-[0_0_15px_rgba(52,211,153,0.25)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Work · Chennai</span>
          </div>

          {/* Decorative coil ring gradient around arch */}
          <div className="absolute -inset-2.5 rounded-[90px] bg-gradient-to-tr from-purple-600 via-cyan-400 to-indigo-600 opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

          {/* Stylized Profile Arch Frame */}
          <div className="relative w-44 h-56 md:w-56 md:h-72 rounded-t-[110px] rounded-b-[40px] overflow-hidden border-2 border-white/20 bg-surface-1/60 backdrop-blur-xl shadow-[0_10px_50px_rgba(147,51,234,0.3)] transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
              src="/profile.png"
              alt="Vishal Patel"
              fill
              priority
              className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Ambient vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020108] via-transparent to-transparent opacity-60" />
          </div>
        </div>

        {/* Hero Typography */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-sans text-xs font-semibold tracking-wide uppercase">
            <Sparkles size={13} className="text-cyan-400" />
            <span>AI & Machine Learning Systems Engineer</span>
          </div>

          <h1
            className="font-display font-extrabold tracking-tight uppercase leading-[0.9]"
            style={{
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              background:
                "linear-gradient(135deg, #ffffff 0%, #c084fc 40%, #22d3ee 85%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {bioData.name}
          </h1>

          <p className="text-muted text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-sans font-normal">
            Engineering repeatable, reliable systems that bridge AI decision pipelines
            and high-performance visual software experiences.
          </p>
        </div>

        {/* Action Button Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <a
            href={`mailto:${bioData.email}`}
            onMouseEnter={() => handleMouseEnter("Contact Me")}
            onMouseLeave={handleMouseLeave}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-white cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #9333ea, #22d3ee)",
              boxShadow: "0 6px 25px rgba(147,51,234,0.45)",
            }}
          >
            <ChevronRight size={15} />
            Get In Touch
          </a>

          <a
            href="#"
            onMouseEnter={() => handleMouseEnter("Download Resume")}
            onMouseLeave={handleMouseLeave}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-wider text-white border border-border-subtle/80 bg-surface-1/60 backdrop-blur-md hover:border-cyan-400/50 hover:bg-surface-2 transition-all duration-300 cursor-pointer"
          >
            <Download size={14} className="text-cyan-400" />
            Download Resume
          </a>
        </div>

      </div>

      {/* ─── Scroll Cue ─── */}
      <div className="flex flex-col items-center justify-center gap-1.5 text-muted/60 font-sans text-xs font-medium tracking-wide animate-bounce relative z-base select-none py-2">
        <ArrowDown size={14} />
        <span>Scroll to Explore</span>
      </div>

      {/* ─── Bottom Brand & Tech Marquee ─── */}
      <div className="w-full flex flex-col relative z-base mt-auto">
        <div className="w-full overflow-hidden border-t border-b border-border-subtle/50 bg-surface-1/30 backdrop-blur-sm py-3.5 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020108] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020108] to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeList.map((item, idx) => (
              <span
                key={idx}
                className="font-sans text-xs font-semibold text-muted/70 tracking-widest uppercase mx-8 inline-flex items-center gap-3 select-none"
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
