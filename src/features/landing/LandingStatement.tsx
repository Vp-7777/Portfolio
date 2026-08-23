"use client";

import { Cpu, Layers, Sparkles, Star, Terminal } from "lucide-react";

/**
 * ============================================================================
 * LANDING STATEMENT COMPONENT
 * ============================================================================
 * Controlled by GSAP ScrollTrigger timeline in LandingExperience.tsx via
 * the statementContainerRef prop.
 * ============================================================================
 */
interface LandingStatementProps {
  statementContainerRef?: React.RefObject<HTMLDivElement | null>;
}

export function LandingStatement({ statementContainerRef }: LandingStatementProps) {
  return (
    <div
      ref={statementContainerRef}
      className="w-full max-w-[1360px] mx-auto px-6 sm:px-12 pt-32 sm:pt-36 lg:pt-40 pb-12 z-20 select-none opacity-0 pointer-events-none will-change-transform flex flex-col justify-center min-h-[100dvh]"
    >
      {/* 01: Grand Statement Headline with Generous Top Nav Clearance */}
      <div className="space-y-3.5 max-w-4xl pb-5 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10.5px] text-[#C5A059] font-bold tracking-widest uppercase">
          <Sparkles size={11} />
          <span>ENGINEERING THESIS & PHILOSOPHY</span>
        </div>

        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2.8rem] leading-[1.2] tracking-[-0.03em] text-white">
          I build software that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#E6CA85] to-[#C5A059] italic font-medium">
            solves real problems
          </span>{" "}
          through on-device intelligence and robust systems.
        </h2>
      </div>

      {/* 02: 2-Column Bento Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5 items-stretch">
        
        {/* Left Bento (7 cols): The Manifesto Card */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="h-full rounded-[26px] bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-6 sm:p-7 space-y-4 flex flex-col justify-between shadow-2xl shadow-black/80 transition-all">
            
            <div className="space-y-3.5">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-[11px] text-[#8C887B]">
                <span className="font-bold text-[#C5A059] uppercase tracking-wider">
                  01 // MANIFESTO
                </span>
                <span>SRM IST · CHENNAI</span>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#ECEAE2] leading-relaxed">
                Currently pursuing Computer Science & Engineering (AI & ML) at <strong className="text-white font-semibold">SRM Institute of Science and Technology</strong> with a <span className="text-[#C5A059] font-bold">9.74 CGPA</span> and a <span className="text-[#10B981] font-bold">10.0 Sem 2 GPA</span>.
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Split between two commercial engineering internships — developing React Native mobile features at <strong className="text-white font-semibold">RideAbit</strong> and scalable backend AI microservices at <strong className="text-white font-semibold">QRaptor</strong>. Focused on edge computer vision, quantized on-device neural compilation, and high-concurrency systems.
              </p>
            </div>

            {/* Verified Distinction Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2.5 border-t border-white/10 font-mono text-[10.5px]">
              <div className="px-3 py-1 bg-[#181A24] border border-white/10 rounded-full text-white flex items-center gap-1.5 shadow-md">
                <Star size={11} className="text-[#C5A059] fill-[#C5A059]" />
                <span>Flawless 10.0 Sem 2 GPA</span>
              </div>

              <div className="px-3 py-1 bg-[#181A24] border border-white/10 rounded-full text-white flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span>Two-Time National Finalist</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Bento (5 cols): Visual Production Capabilities */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="h-full rounded-[26px] bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-5 sm:p-6 space-y-3.5 flex flex-col justify-between shadow-2xl shadow-black/80 transition-all">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-[11px] text-[#8C887B]">
              <span className="font-bold text-[#C5A059] uppercase tracking-wider">
                02 // PRODUCTION CAPABILITIES
              </span>
              <span>CORE STACK</span>
            </div>

            <div className="space-y-2.5">
              
              {/* Capability 1: AI & Edge Vision */}
              <div className="p-3 rounded-xl bg-[#181A24] border border-white/10 hover:border-white/20 transition-colors space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-white flex items-center gap-1.5">
                    <Cpu size={12} className="text-[#C5A059]" />
                    <span>ON-DEVICE AI & VISION</span>
                  </span>
                  <span className="font-mono text-[9.5px] text-[#10B981] font-bold">Sub-15ms Latency</span>
                </div>
                <p className="font-mono text-[10.5px] text-[#A1A1AA]">
                  PyTorch · ONNX Runtime · MobileNetV3 · FastAPI
                </p>
              </div>

              {/* Capability 2: Mobile & Frontend Systems */}
              <div className="p-3 rounded-xl bg-[#181A24] border border-white/10 hover:border-white/20 transition-colors space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-white flex items-center gap-1.5">
                    <Layers size={12} className="text-[#C5A059]" />
                    <span>MOBILE & CLIENT ARCHITECTURE</span>
                  </span>
                  <span className="font-mono text-[9.5px] text-[#10B981] font-bold">60 FPS Native UI</span>
                </div>
                <p className="font-mono text-[10.5px] text-[#A1A1AA]">
                  React Native · Expo · Next.js · TypeScript
                </p>
              </div>

              {/* Capability 3: Distributed Backend & Storage */}
              <div className="p-3 rounded-xl bg-[#181A24] border border-white/10 hover:border-white/20 transition-colors space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-white flex items-center gap-1.5">
                    <Terminal size={12} className="text-[#C5A059]" />
                    <span>BACKEND & DATA ENGINES</span>
                  </span>
                  <span className="font-mono text-[9.5px] text-[#C5A059] font-bold">ACID Compliant</span>
                </div>
                <p className="font-mono text-[10.5px] text-[#A1A1AA]">
                  PostgreSQL · Node.js · Express · REST APIs · AWS
                </p>
              </div>

            </div>

            {/* Bottom Telemetry Note */}
            <div className="pt-0.5 text-center">
              <span className="font-mono text-[9.5px] text-[#8C887B] tracking-wider uppercase">
                ACTIVE IN PRODUCTION CODEBASES
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
