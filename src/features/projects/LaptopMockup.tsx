"use client";

import Image from "next/image";
import { Lock } from "lucide-react";

interface LaptopMockupProps {
  projectId: string;
  projectName: string;
  imageSrc?: string;
  accentColor?: string;
  liveUrl?: string;
}

export function LaptopMockup({
  projectId,
  projectName,
  imageSrc,
  accentColor = "#C5A059",
  liveUrl,
}: LaptopMockupProps) {
  const displayUrl = liveUrl || `https://${projectId}.dev`;

  return (
    <div className="relative w-full max-w-[580px] mx-auto select-none group flex flex-col items-center">

      {/* Ambient Glow behind Laptop */}
      <div
        className="absolute -inset-4 rounded-3xl blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none"
        style={{ background: accentColor }}
      />

      {/* 01: Official Apple Display Lid (Slightly narrower than base) */}
      <div className="relative w-[95%] bg-[#08080B] rounded-t-[14px] p-2 sm:p-2.5 border border-[#23242E] border-b-0 shadow-2xl shadow-black/95 z-10">

        {/* Apple Display Notch */}
        <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-3 sm:h-3.5 bg-[#08080B] rounded-b-[6px] z-30 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#161720] ring-1 ring-white/10" />
        </div>

        {/* Inner Screen Display (16:10 Ratio) */}
        <div className="relative aspect-[16/10] w-full rounded-t-[8px] overflow-hidden bg-[#0A0A0E] border border-white/5 flex flex-col shadow-inner">

          {/* macOS Safari Browser Chrome Header */}
          <div className="relative z-20 flex items-center justify-between px-3 py-1.5 bg-[#12131A]/95 backdrop-blur-md border-b border-white/10 shrink-0">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>

            {/* Smart URL Bar */}
            <div className="flex items-center gap-1.5 px-3 py-0.5 bg-[#181A24] border border-white/10 rounded-full font-mono text-[9px] text-[#A1A1AA] max-w-[220px] truncate shadow-inner">
              <Lock size={9} className="text-[#10B981] shrink-0" />
              <span className="truncate">{displayUrl.replace("https://", "")}</span>
            </div>

            {/* Status Pill */}
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[8.5px] text-[#10B981] font-bold">
                PROD
              </span>
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="relative flex-1 w-full h-full overflow-hidden bg-white">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={projectName}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 480px, 580px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            ) : (
              /* Fallback High-Fidelity UI Interface */
              <div className="relative w-full h-full flex flex-col justify-between p-4 bg-gradient-to-br from-[#12131A] via-[#0D0E14] to-[#08090C] text-[#ECEAE2]">
                <div className="space-y-2 py-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#C5A059] uppercase font-bold">
                      SYSTEM INTERFACE
                    </span>
                    <span className="font-mono text-[9px] text-[#10B981]">
                      ACTIVE PIPELINE
                    </span>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/10 rounded-md space-y-1">
                    <span className="text-[9px] text-[#8C887B] block font-mono">Status: Deployed</span>
                    <span className="text-xs font-bold text-white block">{projectName}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between font-mono text-[8.5px] text-[#8C887B] pt-2 border-t border-white/10">
                  <span>CORE: PRODUCTION READY</span>
                  <span className="text-[#C5A059]">100% OPERATIONAL</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* 02: Exact Official Apple MacBook Pro Bottom Chassis (Wider Base) */}
      <div className="relative w-full z-20">

        {/* Main Space-Black Aluminum Chassis Bar */}
        <div className="relative w-full h-4 sm:h-5 rounded-b-[8px] bg-gradient-to-b from-[#282932] via-[#16171E] to-[#0A0B0E] border-t border-[#3E4050] shadow-[0_12px_28px_rgba(0,0,0,0.9)] flex items-start justify-center">

          {/* Subtle Top Metallic Highlight Rim */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Precision Center Display Opening Thumb Notch */}
          <div className="relative w-16 sm:w-20 h-1.5 sm:h-2 bg-[#08080B] rounded-b-[4px] border-b border-white/15 shadow-inner" />

          {/* Left Bottom Rubber Foot */}
          <div className="absolute bottom-0.5 left-4 sm:left-6 w-5 sm:w-6 h-1 rounded-full bg-[#050507] border border-white/10 shadow-sm" />

          {/* Right Bottom Rubber Foot */}
          <div className="absolute bottom-0.5 right-4 sm:right-6 w-5 sm:w-6 h-1 rounded-full bg-[#050507] border border-white/10 shadow-sm" />
        </div>

        {/* Ground Reflection Drop Shadow */}
        <div className="w-[90%] mx-auto h-2.5 bg-black/80 blur-md rounded-full mt-0.5" />
      </div>

    </div>
  );
}
