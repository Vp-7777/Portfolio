"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ExternalLink, FileText, Sparkles, Star, Zap } from "lucide-react";
import bioData from "@/lib/content/bio.json";

const thesisWords = [
  { text: "Teaching", italic: false },
  { text: "software", italic: false },
  { text: "to", italic: false },
  { text: "see,", italic: false },
  { text: "sort", italic: false },
  { text: "&", italic: false },
  { text: "screen", italic: true },
  { text: "the", italic: false },
  { text: "real", italic: false },
  { text: "world.", italic: false },
];

const techPills = [
  { name: "React Native", role: "RideAbit Mobile" },
  { name: "FastAPI", role: "QRaptor Backend" },
  { name: "Python ML", role: "Diagnostic AI" },
  { name: "PostgreSQL", role: "ACID Schemas" },
  { name: "ONNX Runtime", role: "Sub-15ms Edge" },
  { name: "AWS Cloud", role: "Practitioner" },
];

const marqueeItems = [
  "JAVA",
  "PYTHON",
  "REACT NATIVE",
  "NODE.JS",
  "POSTGRESQL",
  "COMPUTER VISION",
  "PYTORCH",
  "FASTAPI",
  "EXPO",
  "AWS CLOUD",
  "TYPESCRIPT",
  "DOCKER",
  "C++",
  "REST APIS",
  "ONNX RUNTIME",
];

const continuousMarquee = [...marqueeItems, ...marqueeItems, ...marqueeItems];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const magneticButtonRef = useRef<HTMLButtonElement>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Magnetic button physics
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = magneticButtonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMagneticOffset({ x: x * 0.28, y: y * 0.28 });
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full pt-36 sm:pt-44 pb-0 overflow-hidden flex flex-col justify-between"
    >
      {/* Luxury Ambient Editorial Lighting (Clean soft radial warmth bloom, zero background noise) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-gradient-to-b from-[#EEE6D4]/80 via-[#EEE6D4]/30 to-transparent blur-[130px] opacity-75" />
        <div className="absolute top-28 left-8 text-[#A9793C]/35 font-mono text-xs select-none hidden lg:block">
          +
        </div>
        <div className="absolute top-28 right-8 text-[#A9793C]/35 font-mono text-xs select-none hidden lg:block">
          +
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 w-full space-y-12 relative z-10">
        
        {/* Floating Glassmorphic Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* 01: Mono Functional Eyebrow */}
          <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px] text-[#7C5A2C] font-semibold tracking-[0.08em] uppercase select-none">
            <span className="w-2 h-2 rounded-full bg-[#A9793C]" />
            <span>VISHAL PATEL — SOFTWARE & AI SYSTEMS ENGINEER · CHENNAI, IN</span>
          </div>

          {/* Floating Live Status Pills */}
          <div className="flex items-center gap-2.5">
            <div className="animate-float-1 frosted-pill px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-mono font-bold text-[#1B1710]">
              <Star size={13} className="text-[#A9793C] fill-[#A9793C]" />
              <span>9.74 CGPA (SRM IST)</span>
            </div>

            <div className="animate-float-2 frosted-pill px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-mono font-bold text-[#1B1710]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>RideAbit & QRaptor Intern</span>
            </div>
          </div>

        </div>

        {/* 02: Oversized Fraunces Thesis Statement (Word-by-Word Staggered Reveal) */}
        <h1 className="font-display font-light text-[2.6rem] sm:text-[4.2rem] md:text-[5.4rem] lg:text-[6.4rem] leading-[1.02] tracking-[-0.03em] text-[#1B1710] max-w-5xl">
          {thesisWords.map((item, idx) => (
            <span
              key={idx}
              className={`inline-block mr-[0.25em] transition-all duration-700 ease-out ${
                item.italic
                  ? "italic font-normal text-[#7C5A2C] underline decoration-[#A9793C]/40 underline-offset-8"
                  : "font-light text-[#1B1710]"
              }`}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${idx * 45}ms`,
              }}
            >
              {item.text}
            </span>
          ))}
        </h1>

        {/* 03: Hairline Rule */}
        <div className="w-full border-t border-[rgba(27,23,16,0.18)]" />

        {/* 04: Asymmetric Meta Row with Glassmorphic Elements */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-14 sm:pb-20">
          
          {/* Left Column (7 cols): Supporting Narrative Bio & Tech Pills */}
          <div className="md:col-span-7 space-y-6">
            <p className="font-sans text-base sm:text-lg text-[#5C5344] leading-[1.75] max-w-xl">
              Full-stack & AI systems engineer studying Computer Science at{" "}
              <strong className="font-semibold text-[#1B1710]">SRM IST (9.74 CGPA · 10.0 Sem 2 GPA)</strong>. Currently building cross-platform React Native features at{" "}
              <strong className="font-semibold text-[#1B1710]">RideAbit</strong> and scalable AI microservices at{" "}
              <strong className="font-semibold text-[#1B1710]">QRaptor</strong>. Two-time national hackathon finalist.
            </p>

            {/* Interactive Frosted Tech Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {techPills.map((pill) => (
                <div
                  key={pill.name}
                  className="frosted-pill px-3 py-1 rounded-lg font-mono text-xs text-[#5C5344] flex items-center gap-1.5 cursor-default group"
                >
                  <span className="font-semibold text-[#1B1710]">{pill.name}</span>
                  <span className="text-[#9C9280] text-[10px]">({pill.role})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): CTAs */}
          <div className="md:col-span-5 flex flex-wrap items-center md:justify-end gap-4 pt-1">
            
            {/* Magnetic Filled Button with Specular Gold Accents */}
            <button
              ref={magneticButtonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => scrollToSection("work")}
              className="px-7 py-3.5 bg-[#1B1710] hover:bg-[#7C5A2C] text-[#F6F1E7] font-mono text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer shadow-md shadow-[#1B1710]/10 flex items-center gap-2 group relative overflow-hidden"
              style={{
                transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`,
                transition: magneticOffset.x === 0 ? "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease" : "background-color 0.2s ease",
              }}
            >
              <span>[ VIEW SELECTED WORK ]</span>
              <span className="text-[#A9793C] group-hover:translate-x-0.5 transition-transform">↗</span>
            </button>

            {/* Google Drive Résumé Link */}
            <a
              href={bioData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="frosted-pill px-5 py-3 rounded-none font-mono text-xs font-bold text-[#1B1710] hover:text-[#7C5A2C] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FileText size={14} className="text-[#A9793C]" />
              <span>Résumé (PDF)</span>
              <ExternalLink size={11} className="text-[#9C9280]" />
            </a>

            {/* Underlined Contact Link */}
            <button
              onClick={() => scrollToSection("contact")}
              className="font-sans text-sm font-semibold text-[#5C5344] hover:text-[#1B1710] underline decoration-[#A9793C] underline-offset-4 transition-colors cursor-pointer"
            >
              Get in touch ↗
            </button>

          </div>

        </div>

      </div>

      {/* 05: Hairline-Bordered Colophon Tech Stack Marquee Strip */}
      <div className="w-full border-y border-[rgba(27,23,16,0.18)] bg-[#EEE6D4]/70 py-3.5 overflow-hidden select-none relative z-10">
        <div className="flex whitespace-nowrap animate-marquee-editorial font-mono text-[11.5px] text-[#5C5344] tracking-[0.14em] uppercase">
          {continuousMarquee.map((tech, idx) => (
            <span key={idx} className="mx-6 flex items-center gap-3">
              <span className="text-[#1B1710] font-semibold">{tech}</span>
              <span className="text-[#A9793C] opacity-70">✦</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
