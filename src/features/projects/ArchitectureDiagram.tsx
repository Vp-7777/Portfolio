"use client";

import { Activity, ArrowRight, CheckCircle2, Cpu, Database, Server, ShieldCheck, Sparkles, Zap } from "lucide-react";

interface ArchitectureDiagramProps {
  projectId: string;
}

export function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  if (projectId === "autismind") {
    return (
      <div className="p-6 rounded-2xl border border-[#262838] bg-[#0E0F14] space-y-5 font-mono text-xs select-none relative overflow-hidden shadow-xl">
        {/* Spec Header */}
        <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] tracking-wider uppercase border-b border-white/10 pb-3">
          <span className="flex items-center gap-2 font-bold text-white">
            <Zap size={13} className="text-[#C5A059]" />
            DATA PIPELINE // ON-DEVICE ONNX ENGINE
          </span>
          <span className="text-[#10B981] font-bold bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/30">
            100% LOCAL PRIVACY
          </span>
        </div>

        {/* 3-Stage Pipeline Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative z-10">
          
          {/* Node 1: Client Ingestion */}
          <div className="p-4 rounded-xl bg-[#161720] border border-white/10 space-y-2 flex flex-col items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-[#20222E] border border-white/10 flex items-center justify-center text-[#C5A059]">
              <Activity size={18} />
            </div>
            <div>
              <span className="font-bold text-white text-xs block">BROWSER CLIENT</span>
              <span className="text-[10px] text-[#8C887B] block">Facial & Audio Stream</span>
            </div>
            <span className="text-[9.5px] text-[#C5A059] font-mono bg-[#20222E] px-2 py-0.5 rounded">
              Zero Server Upload
            </span>
          </div>

          {/* Node 2: Quantized Runtime */}
          <div className="p-4 rounded-xl bg-[#1A1815] border border-[#C5A059]/40 space-y-2 flex flex-col items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-[#262420] border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
              <Cpu size={18} />
            </div>
            <div>
              <span className="font-bold text-white text-xs block">ONNX INT8 RUNTIME</span>
              <span className="text-[10px] text-[#8C887B] block">MobileNetV3 + ViT</span>
            </div>
            <span className="text-[9.5px] text-[#10B981] font-mono font-bold bg-[#10B981]/10 px-2 py-0.5 rounded">
              &lt; 14.2ms Edge Latency
            </span>
          </div>

          {/* Node 3: Clinical Diagnostic Dashboard */}
          <div className="p-4 rounded-xl bg-[#161720] border border-white/10 space-y-2 flex flex-col items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-[#20222E] border border-white/10 flex items-center justify-center text-[#C5A059]">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span className="font-bold text-white text-xs block">CLINICAL REPORT</span>
              <span className="text-[10px] text-[#8C887B] block">Attention Heatmaps</span>
            </div>
            <span className="text-[9.5px] text-[#C5A059] font-mono bg-[#20222E] px-2 py-0.5 rounded">
              92.4% AUC Score
            </span>
          </div>

        </div>
      </div>
    );
  }

  if (projectId === "prithviq") {
    return (
      <div className="p-6 rounded-2xl border border-[#262838] bg-[#0E0F14] space-y-5 font-mono text-xs select-none relative overflow-hidden shadow-xl">
        {/* Spec Header */}
        <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] tracking-wider uppercase border-b border-white/10 pb-3">
          <span className="flex items-center gap-2 font-bold text-white">
            <Zap size={13} className="text-[#10B981]" />
            PIPELINE // SPATIAL DRONE TILING STREAM
          </span>
          <span className="text-[#10B981] font-bold bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/30">
            120 FPS REAL-TIME
          </span>
        </div>

        {/* 3-Stage Pipeline Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative z-10">
          
          <div className="p-4 rounded-xl bg-[#161720] border border-white/10 space-y-2 flex flex-col items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-[#20222E] border border-white/10 flex items-center justify-center text-[#10B981]">
              <Server size={18} />
            </div>
            <div>
              <span className="font-bold text-white text-xs block">DRONE TELEMETRY</span>
              <span className="text-[10px] text-[#8C887B] block">4K High-Res Feeds</span>
            </div>
            <span className="text-[9.5px] text-[#10B981] font-mono bg-[#20222E] px-2 py-0.5 rounded">
              Frame Tiling Bus
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#131E18] border border-[#10B981]/40 space-y-2 flex flex-col items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-[#182820] border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
              <Cpu size={18} />
            </div>
            <div>
              <span className="font-bold text-white text-xs block">FASTAPI VISION CORE</span>
              <span className="text-[10px] text-[#8C887B] block">Spatial Segmentation</span>
            </div>
            <span className="text-[9.5px] text-[#10B981] font-mono font-bold bg-[#10B981]/10 px-2 py-0.5 rounded">
              96.8% Precision mAP
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#161720] border border-white/10 space-y-2 flex flex-col items-center justify-between">
            <div className="w-9 h-9 rounded-lg bg-[#20222E] border border-white/10 flex items-center justify-center text-[#10B981]">
              <Database size={18} />
            </div>
            <div>
              <span className="font-bold text-white text-xs block">MUNICIPAL HEATMAP</span>
              <span className="text-[10px] text-[#8C887B] block">Cleanup Coordinates</span>
            </div>
            <span className="text-[9.5px] text-[#10B981] font-mono bg-[#20222E] px-2 py-0.5 rounded">
              UN SDG 12 & 14
            </span>
          </div>

        </div>
      </div>
    );
  }

  // CampuSwap
  return (
    <div className="p-6 rounded-2xl border border-[#262838] bg-[#0E0F14] space-y-5 font-mono text-xs select-none relative overflow-hidden shadow-xl">
      {/* Spec Header */}
      <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] tracking-wider uppercase border-b border-white/10 pb-3">
        <span className="flex items-center gap-2 font-bold text-white">
          <Zap size={13} className="text-[#3B82F6]" />
          RELATIONAL ENGINE // POSTGRESQL ACID PIPELINE
        </span>
        <span className="text-[#3B82F6] font-bold bg-[#3B82F6]/10 px-2.5 py-0.5 rounded-full border border-[#3B82F6]/30">
          STRICT ACID POOL
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative z-10">
        
        <div className="p-4 rounded-xl bg-[#161720] border border-white/10 space-y-2 flex flex-col items-center justify-between">
          <div className="w-9 h-9 rounded-lg bg-[#20222E] border border-white/10 flex items-center justify-center text-[#3B82F6]">
            <ShieldCheck size={18} />
          </div>
          <div>
            <span className="font-bold text-white text-xs block">REACT CLIENT</span>
            <span className="text-[10px] text-[#8C887B] block">JWT Authenticated State</span>
          </div>
          <span className="text-[9.5px] text-[#3B82F6] font-mono bg-[#20222E] px-2 py-0.5 rounded">
            Optimistic UI Updates
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#131826] border border-[#3B82F6]/40 space-y-2 flex flex-col items-center justify-between">
          <div className="w-9 h-9 rounded-lg bg-[#182033] border border-[#3B82F6]/40 flex items-center justify-center text-[#3B82F6]">
            <Server size={18} />
          </div>
          <div>
            <span className="font-bold text-white text-xs block">EXPRESS API CORE</span>
            <span className="text-[10px] text-[#8C887B] block">Connection Pooling</span>
          </div>
          <span className="text-[9.5px] text-[#3B82F6] font-mono font-bold bg-[#3B82F6]/10 px-2 py-0.5 rounded">
            Sub-3ms Dispatch
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#161720] border border-white/10 space-y-2 flex flex-col items-center justify-between">
          <div className="w-9 h-9 rounded-lg bg-[#20222E] border border-white/10 flex items-center justify-center text-[#3B82F6]">
            <Database size={18} />
          </div>
          <div>
            <span className="font-bold text-white text-xs block">POSTGRESQL ACID</span>
            <span className="text-[10px] text-[#8C887B] block">Relational Trade Schema</span>
          </div>
          <span className="text-[9.5px] text-[#10B981] font-mono bg-[#20222E] px-2 py-0.5 rounded">
            2.1ms Query Latency
          </span>
        </div>

      </div>
    </div>
  );
}
