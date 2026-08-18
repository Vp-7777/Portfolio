"use client";

import { Activity, Cpu, Layers, CheckCircle2, ShieldCheck, Zap, Server, BarChart3, ArrowRight } from "lucide-react";

interface SimulatorProps {
  projectId: string;
}

export function ProjectSimulator({ projectId }: SimulatorProps) {
  // 1. AutisMind AI Technical Blueprint
  if (projectId === "autismind") {
    return (
      <div className="p-6 rounded-[22px] bg-white border border-slate-200 space-y-6 select-none my-3 shadow-xs">
        
        {/* Header Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 font-sans">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-brand">
            <Activity size={15} />
            <span>Edge AI Diagnostic Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-emerald-brand bg-emerald-light border border-emerald-200 px-3 py-0.5 rounded-full uppercase">
              100% On-Device Inference
            </span>
          </div>
        </div>

        {/* Visual Pipeline Data Flowchart */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 text-indigo-950 font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-indigo-brand" />
              <span>1. Behavioral Waveform</span>
            </div>
            <p className="text-[11px] text-ink-secondary leading-relaxed">
              Standardized questionnaire & video tracking signal ingestion.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 text-indigo-brand font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-indigo-brand" />
              <span>2. Quantized MobileNet</span>
            </div>
            <p className="text-[11px] text-ink-secondary leading-relaxed">
              ONNX Runtime compiled for deterministic client-side execution.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 text-emerald-brand font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-brand" />
              <span>3. Sub-15ms Output</span>
            </div>
            <p className="text-[11px] text-ink-secondary leading-relaxed">
              Clinical trend prediction with zero remote data leakage.
            </p>
          </div>
        </div>

        {/* Measured System Benchmarks */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-light border border-indigo-200 flex items-center justify-center">
              <Zap size={18} className="text-indigo-brand" />
            </div>
            <div>
              <span className="text-ink-muted text-[10px] uppercase font-medium block">Measured Latency</span>
              <span className="text-emerald-brand font-bold text-sm">14.2 ms (Local Edge CPU)</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-medium">
            <div>
              <span className="block text-[10px] text-ink-muted uppercase">RAM Footprint</span>
              <span className="text-indigo-brand font-bold">4.2 MB Compressed</span>
            </div>
            <div>
              <span className="block text-[10px] text-ink-muted uppercase">Accuracy</span>
              <span className="text-amber-900 font-bold">92.4% Diagnostic AUC</span>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // 2. PrithviQ Technical Blueprint
  if (projectId === "prithviq") {
    return (
      <div className="p-6 rounded-[22px] bg-white border border-slate-200 space-y-6 select-none my-3 shadow-xs">
        
        {/* Header Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 font-sans">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-brand">
            <Cpu size={15} />
            <span>High-Throughput Geospatial Tiling Engine</span>
          </div>
          <span className="text-[11px] font-semibold text-sky-brand bg-sky-light border border-sky-200 px-3 py-0.5 rounded-full uppercase">
            Aerial Drone Vision Pipeline
          </span>
        </div>

        {/* Visual Pipeline Data Flowchart */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 text-indigo-950 font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-indigo-brand" />
              <span>1. Aerial Stream</span>
            </div>
            <p className="text-[11px] text-ink-secondary leading-relaxed">
              Drone and smartphone feeds ingested across diverse flight altitudes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 text-indigo-brand font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-indigo-brand" />
              <span>2. Parallel Tiler</span>
            </div>
            <p className="text-[11px] text-ink-secondary leading-relaxed">
              FastAPI + PyTorch spatial matrix segmentation and waste categorization.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-2 text-emerald-brand font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-brand" />
              <span>3. Spatial Dashboard</span>
            </div>
            <p className="text-[11px] text-ink-secondary leading-relaxed">
              Real-time actionable cleanup hotspot maps for NGO partners.
            </p>
          </div>
        </div>

        {/* Measured System Benchmarks */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-light border border-sky-200 flex items-center justify-center">
              <Server size={18} className="text-sky-brand" />
            </div>
            <div>
              <span className="text-ink-muted text-[10px] uppercase font-medium block">Spatial Render Latency</span>
              <span className="text-emerald-brand font-bold text-sm">&lt; 200ms Dynamic Tile Load</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-medium">
            <div>
              <span className="block text-[10px] text-ink-muted uppercase">Framework</span>
              <span className="text-indigo-brand font-bold">PyTorch + OpenCV</span>
            </div>
            <div>
              <span className="block text-[10px] text-ink-muted uppercase">UN Alignment</span>
              <span className="text-amber-900 font-bold">SDG 12 & SDG 14</span>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // 3. CampuSwap Technical Blueprint
  return (
    <div className="p-6 rounded-[22px] bg-white border border-slate-200 space-y-6 select-none my-3 shadow-xs">
      
      {/* Header Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 font-sans">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-brand">
          <Layers size={15} />
          <span>Real-Time P2P Campus Exchange Engine</span>
        </div>
        <span className="text-[11px] font-semibold text-emerald-brand bg-emerald-light border border-emerald-200 px-3 py-0.5 rounded-full uppercase">
          SRM IST Campus Verified
        </span>
      </div>

      {/* Visual Pipeline Data Flowchart */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="flex items-center gap-2 text-indigo-950 font-bold text-xs">
            <ShieldCheck size={14} className="text-emerald-brand" />
            <span>1. Auth & Verification</span>
          </div>
          <p className="text-[11px] text-ink-secondary leading-relaxed">
            Institutional authentication ensuring verified student community trust.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="flex items-center gap-2 text-indigo-brand font-bold text-xs">
            <Zap size={14} className="text-indigo-brand" />
            <span>2. REST API Layer</span>
          </div>
          <p className="text-[11px] text-ink-secondary leading-relaxed">
            Low-latency Express.js endpoints for instant inventory query matching.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="flex items-center gap-2 text-emerald-brand font-bold text-xs">
            <CheckCircle2 size={14} className="text-emerald-brand" />
            <span>3. PostgreSQL ACID</span>
          </div>
          <p className="text-[11px] text-ink-secondary leading-relaxed">
            Strict relational integrity across student users and product inventory.
          </p>
        </div>
      </div>

      {/* Measured System Benchmarks */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-light border border-indigo-200 flex items-center justify-center">
            <Zap size={18} className="text-indigo-brand" />
          </div>
          <div>
            <span className="text-ink-muted text-[10px] uppercase font-medium block">Database Query Latency</span>
            <span className="text-emerald-brand font-bold text-sm">&lt; 3.5ms Average Query</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[11px] font-medium">
          <div>
            <span className="block text-[10px] text-ink-muted uppercase">Platform Fee</span>
            <span className="text-indigo-brand font-bold">0% (Student Non-Profit)</span>
          </div>
          <div>
            <span className="block text-[10px] text-ink-muted uppercase">Data Engine</span>
            <span className="text-amber-900 font-bold">PostgreSQL Relational</span>
          </div>
        </div>
      </div>

    </div>
  );
}
