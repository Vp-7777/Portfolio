"use client";

import { Activity, ArrowRight, Cpu, Database, Server, ShieldCheck, Zap } from "lucide-react";

interface ArchitectureDiagramProps {
  projectId: string;
}

export function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  if (projectId === "autismind") {
    return (
      <div className="p-6 rounded-2xl border border-white/10 bg-[#090d16] space-y-4 font-mono text-xs select-none relative overflow-hidden">
        {/* Animated Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent pointer-events-none" />

        <div className="flex items-center justify-between text-[10px] text-slate-400 tracking-wider uppercase border-b border-white/10 pb-2 relative z-10">
          <span className="flex items-center gap-1.5">
            <Zap size={11} className="text-amber-400" />
            DATA FLOW // ON-DEVICE QUANTIZED ENGINE
          </span>
          <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">
            100% LOCAL PRIVACY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative z-10">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 flex flex-col items-center hover:border-indigo-500/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Activity size={16} />
            </div>
            <span className="font-bold text-white text-xs">CLIENT DEVICE</span>
            <span className="text-[10px] text-slate-400">Multimodal Behavioral Inputs</span>
            <span className="text-[9px] text-emerald-400 font-mono">Capture & Pre-process</span>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center text-indigo-400 space-y-1">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">In-Memory Stream</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
              <ArrowRight size={16} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 space-y-1.5 flex flex-col items-center hover:border-indigo-400 transition-colors shadow-lg shadow-indigo-500/10">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Cpu size={16} />
            </div>
            <span className="font-bold text-white text-xs">LOCAL ONNX THREAD</span>
            <span className="text-[10px] text-slate-300">Quantized MobileNetV3 + ViT</span>
            <span className="text-[9px] text-emerald-400 font-mono">&lt;14.2ms Inference Time</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "prithviq") {
    return (
      <div className="p-6 rounded-2xl border border-white/10 bg-[#090d16] space-y-4 font-mono text-xs select-none relative overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none" />

        <div className="flex items-center justify-between text-[10px] text-slate-400 tracking-wider uppercase border-b border-white/10 pb-2 relative z-10">
          <span className="flex items-center gap-1.5">
            <Zap size={11} className="text-cyan-400" />
            PIPELINE // SPATIAL DRONE TILING STREAM
          </span>
          <span className="text-sky-400 font-bold bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/25">
            120 FPS PROCESSING
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative z-10">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 flex flex-col items-center hover:border-sky-500/40 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Server size={16} />
            </div>
            <span className="font-bold text-white text-xs">FASTAPI INGESTION</span>
            <span className="text-[10px] text-slate-400">Multi-Angle Aerial Feeds</span>
            <span className="text-[9px] text-sky-400 font-mono">Real-time Tiling Mask</span>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center text-sky-400 space-y-1">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Segmentation Bus</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
              <ArrowRight size={16} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 space-y-1.5 flex flex-col items-center hover:border-sky-400 transition-colors shadow-lg shadow-sky-500/10">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Database size={16} />
            </div>
            <span className="font-bold text-white text-xs">SPATIAL DASHBOARD</span>
            <span className="text-[10px] text-slate-300">NGO Waste Hotspot Analytics</span>
            <span className="text-[9px] text-emerald-400 font-mono">96.8% Precision mAP</span>
          </div>
        </div>
      </div>
    );
  }

  // CampuSwap
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-[#090d16] space-y-4 font-mono text-xs select-none relative overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent pointer-events-none" />

      <div className="flex items-center justify-between text-[10px] text-slate-400 tracking-wider uppercase border-b border-white/10 pb-2 relative z-10">
        <span className="flex items-center gap-1.5">
          <Zap size={11} className="text-purple-400" />
          FRAMEWORK // REST API & POSTGRESQL ACID
        </span>
        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">
          ACID COMPLIANT
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative z-10">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 flex flex-col items-center hover:border-indigo-500/40 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <ShieldCheck size={16} />
          </div>
          <span className="font-bold text-white text-xs">REACT CLIENT</span>
          <span className="text-[10px] text-slate-400">JWT Authenticated State</span>
          <span className="text-[9px] text-indigo-300 font-mono">Sub-3ms Query Dispatch</span>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center text-indigo-400 space-y-1">
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Connection Pool</span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 space-y-1.5 flex flex-col items-center hover:border-indigo-400 transition-colors shadow-lg shadow-indigo-500/10">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Database size={16} />
          </div>
          <span className="font-bold text-white text-xs">POSTGRESQL RELATIONAL</span>
          <span className="text-[10px] text-slate-300">ACID Transaction Log</span>
          <span className="text-[9px] text-emerald-400 font-mono">2.1ms Latency Target</span>
        </div>
      </div>
    </div>
  );
}
