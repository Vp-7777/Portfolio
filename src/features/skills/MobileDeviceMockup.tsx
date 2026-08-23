"use client";

import { useState } from "react";
import { Battery, CheckCircle2, ChevronRight, Layers, Smartphone, Sparkles, Wifi, Zap } from "lucide-react";

export function MobileDeviceMockup() {
  const [activeTab, setActiveTab] = useState<"ui" | "mobile" | "native">("mobile");

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[340px] mx-auto select-none group">
      
      {/* Ambient Phone Glow */}
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-tr from-[#3B82F6]/20 via-[#C5A059]/25 to-[#10B981]/20 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

      {/* Phone Outer Chassis (Bezel) */}
      <div className="relative rounded-[46px] p-3 bg-gradient-to-b from-[#2C2D35] via-[#1A1B22] to-[#0E0F14] border-2 border-[#3D3F4D] shadow-2xl shadow-black/90">
        
        {/* Dynamic Island Pill Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-[#1A1A22] ring-1 ring-white/20" />
        </div>

        {/* Screen Display (OLED 19.5:9 Ratio) */}
        <div className="relative aspect-[9/19] w-full rounded-[36px] overflow-hidden bg-[#0A0B10] border border-white/10 flex flex-col justify-between p-4 pt-8 text-[#ECEAE2]">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1AA] pt-1">
            <span className="font-semibold text-white">09:41</span>
            <div className="flex items-center gap-1.5">
              <Wifi size={11} className="text-white" />
              <Battery size={13} className="text-white" />
            </div>
          </div>

          {/* App Header */}
          <div className="space-y-1 pt-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-[#C5A059] font-bold tracking-wider uppercase">
                MOBILE APPS // EXPO & REACT NATIVE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            </div>
            <h4 className="font-display font-bold text-lg text-white">
              RideAbit SDE App
            </h4>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="flex rounded-lg bg-white/5 p-1 border border-white/10 font-mono text-[9px]">
            <button
              onClick={() => setActiveTab("mobile")}
              className={`flex-1 py-1 rounded transition-all cursor-pointer ${
                activeTab === "mobile" ? "bg-[#C5A059] text-black font-bold" : "text-[#A1A1AA] hover:text-white"
              }`}
            >
              React Native
            </button>
            <button
              onClick={() => setActiveTab("ui")}
              className={`flex-1 py-1 rounded transition-all cursor-pointer ${
                activeTab === "ui" ? "bg-[#C5A059] text-black font-bold" : "text-[#A1A1AA] hover:text-white"
              }`}
            >
              Next.js & UI
            </button>
            <button
              onClick={() => setActiveTab("native")}
              className={`flex-1 py-1 rounded transition-all cursor-pointer ${
                activeTab === "native" ? "bg-[#C5A059] text-black font-bold" : "text-[#A1A1AA] hover:text-white"
              }`}
            >
              Expo CLI
            </button>
          </div>

          {/* Dynamic Mobile UI Card Preview */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-bold text-white">
                {activeTab === "mobile" && "Native Cross-Platform"}
                {activeTab === "ui" && "Tailwind CSS & Framer"}
                {activeTab === "native" && "Expo Push & Device Sensors"}
              </span>
              <span className="font-mono text-[9px] text-[#10B981] font-bold">
                60 FPS
              </span>
            </div>

            <div className="space-y-1.5 font-mono text-[10px] text-[#A1A1AA]">
              {activeTab === "mobile" && (
                <>
                  <div className="flex items-center justify-between bg-black/40 p-1.5 rounded">
                    <span>Component Tree</span>
                    <span className="text-white font-bold">100% Shared</span>
                  </div>
                  <div className="flex items-center justify-between bg-black/40 p-1.5 rounded">
                    <span>Gesture Handler</span>
                    <span className="text-[#C5A059] font-bold">Sub-4ms</span>
                  </div>
                </>
              )}

              {activeTab === "ui" && (
                <>
                  <div className="flex items-center justify-between bg-black/40 p-1.5 rounded">
                    <span>Fluid Layout</span>
                    <span className="text-white font-bold">Responsive</span>
                  </div>
                  <div className="flex items-center justify-between bg-black/40 p-1.5 rounded">
                    <span>Theme Engine</span>
                    <span className="text-[#C5A059] font-bold">Dark Obsidian</span>
                  </div>
                </>
              )}

              {activeTab === "native" && (
                <>
                  <div className="flex items-center justify-between bg-black/40 p-1.5 rounded">
                    <span>EAS Build Pipeline</span>
                    <span className="text-white font-bold">Automated</span>
                  </div>
                  <div className="flex items-center justify-between bg-black/40 p-1.5 rounded">
                    <span>Haptics & Camera</span>
                    <span className="text-[#10B981] font-bold">Active</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Quick Skill Tags Inside Device */}
          <div className="flex flex-wrap gap-1 font-mono text-[8.5px] text-[#8C887B]">
            <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">TypeScript</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">React 19</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">Tailwind v4</span>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="w-28 h-1 bg-white/30 rounded-full mx-auto" />

        </div>

      </div>

    </div>
  );
}
