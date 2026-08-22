"use client";

import { Activity, ArrowRight, Cpu, Database, Server, ShieldCheck, Zap } from "lucide-react";

interface ArchitectureDiagramProps {
  projectId: string;
}

export function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  if (projectId === "autismind") {
    return (
      <div className="p-6 border border-[rgba(27,23,16,0.18)] bg-[#EEE6D4]/50 space-y-4 font-mono text-xs select-none relative overflow-hidden">
        <div className="flex items-center justify-between text-[10px] text-[#5C5344] tracking-wider uppercase border-b border-[rgba(27,23,16,0.12)] pb-2">
          <span className="flex items-center gap-1.5 font-bold text-[#1B1710]">
            <Zap size={11} className="text-[#A9793C]" />
            DATA FLOW // ON-DEVICE ONNX ENGINE
          </span>
          <span className="text-[#7C5A2C] font-bold bg-[#EEE6D4] px-2 py-0.5 border border-[rgba(27,23,16,0.12)]">
            100% LOCAL PRIVACY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative z-10">
          <div className="p-4 bg-[#F6F1E7] border border-[rgba(27,23,16,0.15)] space-y-1.5 flex flex-col items-center">
            <div className="w-8 h-8 bg-[#EEE6D4] border border-[rgba(27,23,16,0.15)] flex items-center justify-center text-[#A9793C]">
              <Activity size={16} />
            </div>
            <span className="font-bold text-[#1B1710] text-xs">CLIENT DEVICE</span>
            <span className="text-[10px] text-[#5C5344]">Behavioral Video & Audio Inputs</span>
            <span className="text-[9px] text-[#7C5A2C] font-mono">Pre-processed Locally</span>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center text-[#A9793C] space-y-1">
            <span className="text-[9px] font-mono text-[#9C9280] uppercase tracking-widest">In-Memory Stream</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A9793C] animate-ping" />
              <ArrowRight size={16} />
            </div>
          </div>

          <div className="p-4 bg-[#F6F1E7] border border-[#A9793C]/40 space-y-1.5 flex flex-col items-center">
            <div className="w-8 h-8 bg-[#EEE6D4] border border-[rgba(27,23,16,0.15)] flex items-center justify-center text-[#7C5A2C]">
              <Cpu size={16} />
            </div>
            <span className="font-bold text-[#1B1710] text-xs">LOCAL ONNX THREAD</span>
            <span className="text-[10px] text-[#5C5344]">Quantized MobileNetV3 + ViT</span>
            <span className="text-[9px] text-[#7C5A2C] font-mono font-bold">&lt;14.2ms Inference Time</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "prithviq") {
    return (
      <div className="p-6 border border-[rgba(27,23,16,0.18)] bg-[#EEE6D4]/50 space-y-4 font-mono text-xs select-none relative overflow-hidden">
        <div className="flex items-center justify-between text-[10px] text-[#5C5344] tracking-wider uppercase border-b border-[rgba(27,23,16,0.12)] pb-2">
          <span className="flex items-center gap-1.5 font-bold text-[#1B1710]">
            <Zap size={11} className="text-[#A9793C]" />
            PIPELINE // SPATIAL DRONE TILING STREAM
          </span>
          <span className="text-[#7C5A2C] font-bold bg-[#EEE6D4] px-2 py-0.5 border border-[rgba(27,23,16,0.12)]">
            120 FPS STREAM
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative z-10">
          <div className="p-4 bg-[#F6F1E7] border border-[rgba(27,23,16,0.15)] space-y-1.5 flex flex-col items-center">
            <div className="w-8 h-8 bg-[#EEE6D4] border border-[rgba(27,23,16,0.15)] flex items-center justify-center text-[#A9793C]">
              <Server size={16} />
            </div>
            <span className="font-bold text-[#1B1710] text-xs">FASTAPI INGESTION</span>
            <span className="text-[10px] text-[#5C5344]">Multi-Angle Aerial Feeds</span>
            <span className="text-[9px] text-[#7C5A2C] font-mono">Real-time Tiling Mask</span>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center text-[#A9793C] space-y-1">
            <span className="text-[9px] font-mono text-[#9C9280] uppercase tracking-widest">Segmentation Bus</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A9793C] animate-ping" />
              <ArrowRight size={16} />
            </div>
          </div>

          <div className="p-4 bg-[#F6F1E7] border border-[#A9793C]/40 space-y-1.5 flex flex-col items-center">
            <div className="w-8 h-8 bg-[#EEE6D4] border border-[rgba(27,23,16,0.15)] flex items-center justify-center text-[#7C5A2C]">
              <Database size={16} />
            </div>
            <span className="font-bold text-[#1B1710] text-xs">SPATIAL DASHBOARD</span>
            <span className="text-[10px] text-[#5C5344]">NGO Waste Hotspot Analytics</span>
            <span className="text-[9px] text-[#7C5A2C] font-mono font-bold">96.8% Precision mAP</span>
          </div>
        </div>
      </div>
    );
  }

  // CampuSwap
  return (
    <div className="p-6 border border-[rgba(27,23,16,0.18)] bg-[#EEE6D4]/50 space-y-4 font-mono text-xs select-none relative overflow-hidden">
      <div className="flex items-center justify-between text-[10px] text-[#5C5344] tracking-wider uppercase border-b border-[rgba(27,23,16,0.12)] pb-2">
        <span className="flex items-center gap-1.5 font-bold text-[#1B1710]">
          <Zap size={11} className="text-[#A9793C]" />
          FRAMEWORK // POSTGRESQL ACID SCHEMAS
        </span>
        <span className="text-[#7C5A2C] font-bold bg-[#EEE6D4] px-2 py-0.5 border border-[rgba(27,23,16,0.12)]">
          ACID COMPLIANT
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative z-10">
        <div className="p-4 bg-[#F6F1E7] border border-[rgba(27,23,16,0.15)] space-y-1.5 flex flex-col items-center">
          <div className="w-8 h-8 bg-[#EEE6D4] border border-[rgba(27,23,16,0.15)] flex items-center justify-center text-[#A9793C]">
            <ShieldCheck size={16} />
          </div>
          <span className="font-bold text-[#1B1710] text-xs">REACT CLIENT</span>
          <span className="text-[10px] text-[#5C5344]">JWT Authenticated State</span>
          <span className="text-[9px] text-[#7C5A2C] font-mono">Sub-3ms Query Dispatch</span>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center text-[#A9793C] space-y-1">
          <span className="text-[9px] font-mono text-[#9C9280] uppercase tracking-widest">Connection Pool</span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A9793C] animate-ping" />
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="p-4 bg-[#F6F1E7] border border-[#A9793C]/40 space-y-1.5 flex flex-col items-center">
          <div className="w-8 h-8 bg-[#EEE6D4] border border-[rgba(27,23,16,0.15)] flex items-center justify-center text-[#7C5A2C]">
            <Database size={16} />
          </div>
          <span className="font-bold text-[#1B1710] text-xs">POSTGRESQL RELATIONAL</span>
          <span className="text-[10px] text-[#5C5344]">ACID Transaction Log</span>
          <span className="text-[9px] text-[#7C5A2C] font-mono font-bold">2.1ms Latency Target</span>
        </div>
      </div>
    </div>
  );
}
