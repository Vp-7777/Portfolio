"use client";

import { Activity, ArrowRight, Cpu, Database, Server, ShieldCheck } from "lucide-react";

interface ArchitectureDiagramProps {
  projectId: string;
}

export function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  if (projectId === "autismind") {
    return (
      <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 font-mono text-xs select-none">
        <div className="flex items-center justify-between text-[10px] text-ink-muted tracking-wider uppercase border-b border-slate-200 pb-2">
          <span>DATA FLOW // LOCAL PRIVACY ENGINE</span>
          <span className="text-emerald-brand font-bold">100% ON-DEVICE PRIVACY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 flex flex-col items-center">
            <Activity size={16} className="text-indigo-brand" />
            <span className="font-bold text-ink text-[11px]">CLIENT DEVICE</span>
            <span className="text-[9px] text-ink-muted">Behavioral Inputs</span>
          </div>

          <div className="hidden md:flex items-center justify-center text-indigo-brand">
            <ArrowRight size={16} />
          </div>

          <div className="p-3 rounded-xl bg-indigo-light border border-indigo-200 space-y-1 flex flex-col items-center">
            <Cpu size={16} className="text-indigo-brand" />
            <span className="font-bold text-indigo-950 text-[11px]">LOCAL ONNX THREAD</span>
            <span className="text-[9px] text-ink-muted">Quantized Inference (&lt;15ms)</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "prithviq") {
    return (
      <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 font-mono text-xs select-none">
        <div className="flex items-center justify-between text-[10px] text-ink-muted tracking-wider uppercase border-b border-slate-200 pb-2">
          <span>PIPELINE // SPATIAL DRONE TILING ENGINE</span>
          <span className="text-sky-brand font-bold">120 FPS PROCESSING</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 flex flex-col items-center">
            <Server size={16} className="text-sky-brand" />
            <span className="font-bold text-ink text-[11px]">FASTAPI INGESTION</span>
            <span className="text-[9px] text-ink-muted">PyTorch Tiling Pipeline</span>
          </div>

          <div className="hidden md:flex items-center justify-center text-sky-brand">
            <ArrowRight size={16} />
          </div>

          <div className="p-3 rounded-xl bg-sky-light border border-sky-200 space-y-1 flex flex-col items-center">
            <Database size={16} className="text-emerald-brand" />
            <span className="font-bold text-sky-950 text-[11px]">SPATIAL DASHBOARD</span>
            <span className="text-[9px] text-ink-muted">NGO Waste Hotspot Map</span>
          </div>
        </div>
      </div>
    );
  }

  // CampuSwap
  return (
    <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 font-mono text-xs select-none">
      <div className="flex items-center justify-between text-[10px] text-ink-muted tracking-wider uppercase border-b border-slate-200 pb-2">
        <span>FRAMEWORK // REST API & POSTGRESQL ACID</span>
        <span className="text-emerald-brand font-bold">ACID COMPLIANT</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 flex flex-col items-center">
          <ShieldCheck size={16} className="text-indigo-brand" />
          <span className="font-bold text-ink text-[11px]">REACT CLIENT</span>
          <span className="text-[9px] text-ink-muted">JWT Authenticated State</span>
        </div>

        <div className="hidden md:flex items-center justify-center text-indigo-brand">
          <ArrowRight size={16} />
        </div>

        <div className="p-3 rounded-xl bg-indigo-light border border-indigo-200 space-y-1 flex flex-col items-center">
          <Database size={16} className="text-indigo-brand" />
          <span className="font-bold text-indigo-950 text-[11px]">POSTGRESQL RELATIONAL</span>
          <span className="text-[9px] text-ink-muted">ACID Transaction Log</span>
        </div>
      </div>
    </div>
  );
}
