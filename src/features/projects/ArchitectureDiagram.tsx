"use client";

import { Activity, ArrowRight, Cpu, Database, Server, ShieldCheck } from "lucide-react";

interface ArchitectureDiagramProps {
  projectId: string;
}

export function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  if (projectId === "autismind") {
    return (
      <div className="p-6 rounded-xl border border-purple-500/30 bg-surface-2/60 space-y-4 font-mono text-xs select-none">
        <div className="flex items-center justify-between text-[10px] text-accent tracking-widest uppercase border-b border-border-subtle/60 pb-2">
          <span>DATA_FLOW // LOCAL PRIVACY ENGINE</span>
          <span className="text-emerald-400">HIPAA PRIVACY OK</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-lg bg-surface-1 border border-border-subtle space-y-1 flex flex-col items-center">
            <Activity size={16} className="text-cyan-400" />
            <span className="font-bold text-white text-[11px]">CLIENT DEVICE</span>
            <span className="text-[9px] text-muted">Behavioral Inputs</span>
          </div>

          <div className="hidden md:flex items-center justify-center text-purple-400">
            <ArrowRight size={16} className="animate-pulse" />
          </div>

          <div className="p-3 rounded-lg bg-purple-950/40 border border-purple-500/50 space-y-1 flex flex-col items-center">
            <Cpu size={16} className="text-amber-400" />
            <span className="font-bold text-amber-300 text-[11px]">LOCAL WORKER THREAD</span>
            <span className="text-[9px] text-muted">Quantized Matrix (&lt;50ms)</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "terasight") {
    return (
      <div className="p-6 rounded-xl border border-cyan-500/30 bg-surface-2/60 space-y-4 font-mono text-xs select-none">
        <div className="flex items-center justify-between text-[10px] text-cyan-400 tracking-widest uppercase border-b border-border-subtle/60 pb-2">
          <span>PIPELINE // SPATIAL IMAGE TILING ENGINE</span>
          <span className="text-cyan-400">SUB-200MS TILE LOAD</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-lg bg-surface-1 border border-border-subtle space-y-1 flex flex-col items-center">
            <Server size={16} className="text-cyan-400" />
            <span className="font-bold text-white text-[11px]">FASTAPI INGESTION</span>
            <span className="text-[9px] text-muted">PyTorch Tiling Workers</span>
          </div>

          <div className="hidden md:flex items-center justify-center text-cyan-400">
            <ArrowRight size={16} className="animate-pulse" />
          </div>

          <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/50 space-y-1 flex flex-col items-center">
            <Database size={16} className="text-emerald-400" />
            <span className="font-bold text-cyan-300 text-[11px]">R3F MAP OVERLAY</span>
            <span className="text-[9px] text-muted">Lazy Viewport Coordinates</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for CampuSwap or others
  return (
    <div className="p-6 rounded-xl border border-indigo-500/30 bg-surface-2/60 space-y-4 font-mono text-xs select-none">
      <div className="flex items-center justify-between text-[10px] text-indigo-400 tracking-widest uppercase border-b border-border-subtle/60 pb-2">
        <span>FRAMEWORK // REAL-TIME WEBSOCKET CLUSTER</span>
        <span className="text-emerald-400">&lt; 15MS LATENCY</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-lg bg-surface-1 border border-border-subtle space-y-1 flex flex-col items-center">
          <ShieldCheck size={16} className="text-purple-400" />
          <span className="font-bold text-white text-[11px]">NEXT.JS CLIENT</span>
          <span className="text-[9px] text-muted">Optimistic UI State</span>
        </div>

        <div className="hidden md:flex items-center justify-center text-indigo-400">
          <ArrowRight size={16} className="animate-pulse" />
        </div>

        <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/50 space-y-1 flex flex-col items-center">
          <Server size={16} className="text-amber-400" />
          <span className="font-bold text-indigo-300 text-[11px]">SOCKET.IO CLUSTER</span>
          <span className="text-[9px] text-muted">In-Memory Cache Layer</span>
        </div>
      </div>
    </div>
  );
}
