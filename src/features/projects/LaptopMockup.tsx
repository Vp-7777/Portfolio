"use client";

import Image from "next/image";
import { Activity, Cpu, Database, Sparkles } from "lucide-react";

interface LaptopMockupProps {
  projectId: string;
  projectName: string;
  imageSrc?: string;
  accentColor?: string;
}

export function LaptopMockup({
  projectId,
  projectName,
  imageSrc,
  accentColor = "#C5A059",
}: LaptopMockupProps) {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none group">
      
      {/* Ambient Glow behind Laptop */}
      <div
        className="absolute inset-0 rounded-2xl blur-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-35 pointer-events-none"
        style={{ background: accentColor }}
      />

      {/* Laptop Screen Body (Bezel) */}
      <div className="relative bg-[#0F0F12] rounded-t-2xl p-2.5 sm:p-3 border border-[#2B2B36] shadow-2xl shadow-black/90">
        
        {/* Top Web Camera & Sensor */}
        <div className="flex items-center justify-center pb-1.5 gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#202028] ring-1 ring-white/10" />
        </div>

        {/* Inner Screen Display (16:10 Ratio) */}
        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#0A0A0E] border border-white/5">
          
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={projectName}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            /* High-Fidelity UI Interface Placeholder */
            <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-5 bg-gradient-to-br from-[#12131A] via-[#0D0E14] to-[#08090C] text-[#ECEAE2]">
              
              {/* Browser / App Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                </div>

                <div className="px-3 py-0.5 bg-black/60 border border-white/10 rounded-full font-mono text-[9px] text-[#A8A396]">
                  https://{projectId}.dev/live
                </div>

                <span className="font-mono text-[9px] text-[#10B981] font-bold">
                  LIVE 100%
                </span>
              </div>

              {/* Center UI Content Prototype based on Project Type */}
              {projectId === "autismind" && (
                <div className="space-y-2.5 py-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#C5A059] uppercase font-bold">
                      Neural Diagnostics Dashboard
                    </span>
                    <span className="font-mono text-[9px] text-[#10B981]">
                      &lt; 14.2ms ONNX INT8
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-md space-y-1">
                      <span className="text-[9px] text-[#8C887B] block font-mono">MobileNetV3 Score</span>
                      <span className="text-sm font-bold text-white block">92.4% AUC</span>
                      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="bg-[#C5A059] h-full w-[92%]" />
                      </div>
                    </div>

                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-md space-y-1">
                      <span className="text-[9px] text-[#8C887B] block font-mono">ViT Attention</span>
                      <span className="text-sm font-bold text-[#10B981] block">0.98 Conf</span>
                      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="bg-[#10B981] h-full w-[98%]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {projectId === "prithviq" && (
                <div className="space-y-2.5 py-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#10B981] uppercase font-bold">
                      Aerial Drone Vision Core
                    </span>
                    <span className="font-mono text-[9px] text-[#C5A059]">
                      120 FPS Stream
                    </span>
                  </div>

                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-md space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-white font-semibold">Plastic Density Mapping</span>
                      <span className="text-[#10B981] font-mono">UN SDG 12/14</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[9px]">
                      <div className="p-1 bg-black/40 rounded">Tiled: 4K</div>
                      <div className="p-1 bg-black/40 rounded">mAP: 96.8%</div>
                      <div className="p-1 bg-black/40 rounded">Async Q: 0ms</div>
                    </div>
                  </div>
                </div>
              )}

              {projectId === "campuswap" && (
                <div className="space-y-2.5 py-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#3B82F6] uppercase font-bold">
                      Campus Marketplace Pool
                    </span>
                    <span className="font-mono text-[9px] text-[#10B981]">
                      PostgreSQL 2.1ms
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-md space-y-1">
                      <span className="text-[9px] text-[#8C887B] block font-mono">ACID Transactions</span>
                      <span className="text-xs font-bold text-white block">Strict Isolation</span>
                    </div>
                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-md space-y-1">
                      <span className="text-[9px] text-[#8C887B] block font-mono">Active Student Pool</span>
                      <span className="text-xs font-bold text-[#3B82F6] block">JWT Authenticated</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Telemetry Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[9px] font-mono text-[#8C887B]">
                <span>CORE: PRODUCTION READY</span>
                <span className="text-white font-semibold">{projectName}</span>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Laptop Base (Hinge & Keyboard Deck Lip) */}
      <div className="relative mx-auto w-[108%] -left-[4%] h-3 sm:h-3.5 bg-gradient-to-b from-[#2A2A33] via-[#1C1C24] to-[#121218] rounded-b-xl border-t border-white/20 shadow-xl flex items-center justify-center">
        {/* Notch Opening Indent */}
        <div className="w-16 sm:w-20 h-1 bg-[#101015] rounded-b-md" />
      </div>

    </div>
  );
}
