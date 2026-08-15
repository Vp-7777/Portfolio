"use client";

import { Activity, Cpu, Layers, CheckCircle2, ShieldCheck, Zap, Server, BarChart3, ArrowRight } from "lucide-react";

interface SimulatorProps {
  projectId: string;
}

export function ProjectSimulator({ projectId }: SimulatorProps) {
  // 1. AutisMind AI Technical Blueprint
  if (projectId === "autismind") {
    return (
      <div className="p-6 rounded-[22px] bg-surface-1/90 border border-purple-500/25 space-y-6 select-none my-3 shadow-lg">
        
        {/* Header Telemetry Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-sans">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
            <Activity size={15} className="text-cyan-400" />
            <span>Edge AI Diagnostic Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-0.5 rounded-full uppercase">
              100% On-Device Inference
            </span>
          </div>
        </div>

        {/* Visual Pipeline Data Flowchart */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
          <div className="p-4 rounded-xl bg-surface-2/70 border border-white/5 space-y-1 relative">
            <div className="flex items-center gap-2 text-purple-300 font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>1. Behavioral Waveform</span>
            </div>
            <p className="text-[11px] text-muted/80 leading-relaxed">
              Standardized questionnaire & video tracking signal ingestion.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-2/70 border border-white/5 space-y-1 relative">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>2. Quantized MobileNetV3</span>
            </div>
            <p className="text-[11px] text-muted/80 leading-relaxed">
              ONNX Runtime compiled for deterministic client-side execution.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-2/70 border border-white/5 space-y-1 relative">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>3. Sub-15ms Output</span>
            </div>
            <p className="text-[11px] text-muted/80 leading-relaxed">
              Clinical trend prediction with zero remote data leakage.
            </p>
          </div>
        </div>

        {/* Measured System Benchmarks */}
        <div className="p-4 rounded-xl bg-[#080718] border border-purple-500/20 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center">
              <Zap size={18} className="text-cyan-400" />
            </div>
            <div>
              <span className="text-muted text-[10px] uppercase font-medium block">Measured Latency</span>
              <span className="text-emerald-400 font-bold text-sm">14.2 ms (Local Edge CPU)</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-medium">
            <div>
              <span className="block text-[10px] text-muted/70 uppercase">Local RAM Footprint</span>
              <span className="text-cyan-300 font-bold">4.2 MB Compressed</span>
            </div>
            <div>
              <span className="block text-[10px] text-muted/70 uppercase">Prediction Accuracy</span>
              <span className="text-amber-300 font-bold">92.4% Diagnostic AUC</span>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // 2. TeraSight / PrithviQ Technical Blueprint
  if (projectId === "terasight") {
    return (
      <div className="p-6 rounded-[22px] bg-surface-1/90 border border-cyan-500/25 space-y-6 select-none my-3 shadow-lg">
        
        {/* Header Telemetry Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-sans">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
            <Cpu size={15} className="text-purple-400" />
            <span>High-Throughput Geospatial Tiling Engine</span>
          </div>
          <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-0.5 rounded-full uppercase">
            Multi-Spectral GPU Pipeline
          </span>
        </div>

        {/* Visual Pipeline Data Flowchart */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
          <div className="p-4 rounded-xl bg-surface-2/70 border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>1. Multi-Band Ingestion</span>
            </div>
            <p className="text-[11px] text-muted/80 leading-relaxed">
              Sentinel & Landsat multispectral band streams (NDVI, Thermal, RGB).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-2/70 border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-purple-300 font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>2. Fast Parallel Tiler</span>
            </div>
            <p className="text-[11px] text-muted/80 leading-relaxed">
              FastAPI + PyTorch matrix compute for tile partitioning.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-2/70 border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>3. Sub-200ms Render</span>
            </div>
            <p className="text-[11px] text-muted/80 leading-relaxed">
              Real-time actionable environmental intelligence map tiles.
            </p>
          </div>
        </div>

        {/* Measured System Benchmarks */}
        <div className="p-4 rounded-xl bg-[#040816] border border-cyan-500/20 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center">
              <Server size={18} className="text-cyan-400" />
            </div>
            <div>
              <span className="text-muted text-[10px] uppercase font-medium block">Spatial Render Latency</span>
              <span className="text-emerald-400 font-bold text-sm">&lt; 200ms Dynamic Tile Load</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-medium">
            <div>
              <span className="block text-[10px] text-muted/70 uppercase">Supported Spectra</span>
              <span className="text-cyan-300 font-bold">NDVI · Thermal · RGB</span>
            </div>
            <div>
              <span className="block text-[10px] text-muted/70 uppercase">Tile Compression</span>
              <span className="text-amber-300 font-bold">Lossless WebP GeoTIFF</span>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // 3. CampuSwap Technical Blueprint
  return (
    <div className="p-6 rounded-[22px] bg-surface-1/90 border border-indigo-500/25 space-y-6 select-none my-3 shadow-lg">
      
      {/* Header Telemetry Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-sans">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
          <Layers size={15} className="text-cyan-400" />
          <span>Real-Time P2P Campus Exchange Engine</span>
        </div>
        <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-0.5 rounded-full uppercase">
          SRM IST Campus Verified
        </span>
      </div>

      {/* Visual Pipeline Data Flowchart */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
        <div className="p-4 rounded-xl bg-surface-2/70 border border-white/5 space-y-1">
          <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>1. Domain Verification</span>
          </div>
          <p className="text-[11px] text-muted/80 leading-relaxed">
            Institutional authentication ensuring verified student community trust.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-surface-2/70 border border-white/5 space-y-1">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
            <Zap size={14} className="text-cyan-400" />
            <span>2. WebSocket Matching</span>
          </div>
          <p className="text-[11px] text-muted/80 leading-relaxed">
            Sub-15ms live inventory sync and campus location georouting.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-surface-2/70 border border-white/5 space-y-1">
          <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
            <CheckCircle2 size={14} className="text-purple-400" />
            <span>3. Zero-Fee Handoff</span>
          </div>
          <p className="text-[11px] text-muted/80 leading-relaxed">
            Direct peer exchange eliminating commercial marketplace overhead.
          </p>
        </div>
      </div>

      {/* Measured System Benchmarks */}
      <div className="p-4 rounded-xl bg-[#080718] border border-indigo-500/20 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center">
            <Zap size={18} className="text-cyan-400" />
          </div>
          <div>
            <span className="text-muted text-[10px] uppercase font-medium block">Socket Latency</span>
            <span className="text-emerald-400 font-bold text-sm">&lt; 15ms Broadcast Sync</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[11px] font-medium">
          <div>
            <span className="block text-[10px] text-muted/70 uppercase">Platform Fee</span>
            <span className="text-cyan-300 font-bold">0% (Student Non-Profit)</span>
          </div>
          <div>
            <span className="block text-[10px] text-muted/70 uppercase">Uptime Target</span>
            <span className="text-amber-300 font-bold">99.9% High Availability</span>
          </div>
        </div>
      </div>

    </div>
  );
}
