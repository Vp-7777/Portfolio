"use client";

import { useState } from "react";
import { Activity, Cpu, Layers, RefreshCw, CheckCircle2, ShieldCheck, Zap, Server, BarChart3 } from "lucide-react";

interface SimulatorProps {
  projectId: string;
}

export function ProjectSimulator({ projectId }: SimulatorProps) {
  // AutisMind AI State
  const [ageMonths, setAgeMonths] = useState<number>(36);
  const [behaviorScore, setBehaviorScore] = useState<number>(4);
  const [isInferring, setIsInferring] = useState<boolean>(false);

  // TeraSight State
  const [activeBand, setActiveBand] = useState<"NDVI" | "RGB" | "THERMAL">("NDVI");
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const runAutisMindInference = () => {
    setIsInferring(true);
    setTimeout(() => setIsInferring(false), 250);
  };

  const runTeraSightScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 350);
  };

  // 1. AutisMind AI Interactive Showcase
  if (projectId === "autismind") {
    const riskLevel = behaviorScore >= 7 ? "High Focus" : behaviorScore >= 4 ? "Moderate Focus" : "Low Risk";
    const riskColor = behaviorScore >= 7 ? "text-amber-400" : behaviorScore >= 4 ? "text-cyan-400" : "text-emerald-400";
    const confidencePct = (88 + (behaviorScore * 1.1)).toFixed(1);

    return (
      <div className="p-5 sm:p-6 rounded-2xl bg-surface-1/90 border border-purple-500/25 space-y-5 select-none my-3 shadow-inner">
        {/* Header telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 font-sans">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
            <Activity size={15} className="text-cyan-400 animate-pulse" />
            <span>Interactive Diagnostic Inference Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-0.5 rounded-full uppercase">
              100% Offline Model
            </span>
          </div>
        </div>

        {/* Live Interactive Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans text-xs">
          <div className="space-y-2 p-3.5 rounded-xl bg-surface-2/60 border border-white/5">
            <div className="flex justify-between text-muted">
              <span className="font-medium">Child Observation Age:</span>
              <span className="text-white font-bold">{ageMonths} Months</span>
            </div>
            <input
              type="range"
              min="12"
              max="72"
              value={ageMonths}
              onChange={(e) => {
                setAgeMonths(Number(e.target.value));
                runAutisMindInference();
              }}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-surface-2 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-muted/60">
              <span>12m</span>
              <span>36m</span>
              <span>72m</span>
            </div>
          </div>

          <div className="space-y-2 p-3.5 rounded-xl bg-surface-2/60 border border-white/5">
            <div className="flex justify-between text-muted">
              <span className="font-medium">Behavioral Variance Index:</span>
              <span className="text-white font-bold">{behaviorScore} / 10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={behaviorScore}
              onChange={(e) => {
                setBehaviorScore(Number(e.target.value));
                runAutisMindInference();
              }}
              className="w-full accent-purple-400 cursor-pointer h-1.5 bg-surface-2 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-muted/60">
              <span>Mild</span>
              <span>Moderate</span>
              <span>Elevated</span>
            </div>
          </div>
        </div>

        {/* Real-Time Neural Prediction Output */}
        <div className="p-4 rounded-xl bg-[#090817] border border-purple-500/20 flex flex-wrap items-center justify-between gap-4 font-sans">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center shadow-md">
              <Zap size={20} className="text-cyan-400" />
            </div>
            <div>
              <span className="text-muted text-[10px] block uppercase font-medium">Model Output Classification</span>
              <span className={`font-bold text-sm sm:text-base uppercase ${riskColor}`}>
                {isInferring ? "Computing Weights..." : `${riskLevel} (${confidencePct}% Confidence)`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-medium">
            <div>
              <span className="block text-[10px] text-muted/70 uppercase">Inference Time</span>
              <span className="text-emerald-400 font-bold">14.2 ms (ONNX)</span>
            </div>
            <div>
              <span className="block text-[10px] text-muted/70 uppercase">Local Memory</span>
              <span className="text-cyan-300 font-bold">4.2 MB RAM</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. TeraSight / PrithviQ Interactive Showcase
  if (projectId === "terasight") {
    return (
      <div className="p-5 sm:p-6 rounded-2xl bg-surface-1/90 border border-cyan-500/25 space-y-5 select-none my-3 shadow-inner">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 font-sans">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
            <Cpu size={15} className="text-purple-400" />
            <span>Multi-Spectral Satellite Tile Engine</span>
          </div>
          <button
            onClick={runTeraSightScan}
            className="flex items-center gap-1.5 text-[10px] font-sans font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full uppercase hover:bg-cyan-900/60 transition-colors cursor-pointer"
          >
            <RefreshCw size={11} className={isScanning ? "animate-spin" : ""} />
            <span>{isScanning ? "Rendering GPU Tiles..." : "Trigger Re-scan"}</span>
          </button>
        </div>

        {/* Spectral Band Switcher */}
        <div className="flex gap-2 font-sans text-xs font-semibold">
          {(["NDVI", "RGB", "THERMAL"] as const).map((band) => (
            <button
              key={band}
              onClick={() => {
                setActiveBand(band);
                runTeraSightScan();
              }}
              className={`px-4 py-1.5 rounded-xl border uppercase tracking-wider transition-all cursor-pointer ${
                activeBand === band
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  : "bg-surface-2 border-white/5 text-muted hover:text-white"
              }`}
            >
              {band} Spectrum
            </button>
          ))}
        </div>

        {/* Simulated Satellite Tile Matrix */}
        <div className="relative p-4 rounded-xl bg-[#040714] border border-cyan-500/20 grid grid-cols-6 gap-2 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className={`h-9 rounded-lg flex flex-col items-center justify-center text-[9px] font-sans font-bold transition-all duration-300 ${
                activeBand === "NDVI"
                  ? i % 3 === 0
                    ? "bg-emerald-900/70 text-emerald-300 border border-emerald-500/40"
                    : "bg-cyan-950/60 text-cyan-400 border border-cyan-500/10"
                  : activeBand === "THERMAL"
                  ? i % 2 === 0
                    ? "bg-amber-950/70 text-amber-300 border border-amber-500/40"
                    : "bg-purple-950/60 text-purple-300 border border-purple-500/10"
                  : "bg-surface-2/80 text-muted/90 border border-white/5"
              }`}
            >
              <span>T-{i + 101}</span>
              <span className="text-[7px] opacity-70">
                {activeBand === "NDVI" ? "0.78" : activeBand === "THERMAL" ? "32°C" : "4K"}
              </span>
            </div>
          ))}
        </div>

        {/* Performance metrics */}
        <div className="flex flex-wrap justify-between items-center font-sans text-xs text-muted font-medium pt-1">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <CheckCircle2 size={14} />
            Sub-200ms Spatial GPU Tile Rendering Active
          </span>
          <span className="text-cyan-300 font-bold">100% Tile Matrix Verified</span>
        </div>
      </div>
    );
  }

  // 3. CampuSwap Interactive Showcase
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-surface-1/90 border border-indigo-500/25 space-y-5 select-none my-3 shadow-inner">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 font-sans">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
          <Layers size={15} className="text-cyan-400" />
          <span>Real-time Student Exchange Architecture</span>
        </div>
        <span className="text-[11px] font-sans font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-0.5 rounded-full uppercase">
          SRM IST Network
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs text-center">
        <div className="p-3.5 rounded-xl bg-surface-2/70 border border-white/5 space-y-1.5">
          <ShieldCheck size={18} className="mx-auto text-emerald-400" />
          <span className="font-bold text-white block">1. Auth Verification</span>
          <span className="text-[11px] text-muted block">SRM Student Domain Auth</span>
        </div>
        <div className="p-3.5 rounded-xl bg-surface-2/70 border border-white/5 space-y-1.5">
          <Zap size={18} className="mx-auto text-cyan-400" />
          <span className="font-bold text-white block">2. Real-Time Socket</span>
          <span className="text-[11px] text-muted block">&lt;15ms P2P Item Match</span>
        </div>
        <div className="p-3.5 rounded-xl bg-surface-2/70 border border-white/5 space-y-1.5">
          <CheckCircle2 size={18} className="mx-auto text-purple-400" />
          <span className="font-bold text-white block">3. Zero-Fee Transfer</span>
          <span className="text-[11px] text-muted block">Direct Student Handoff</span>
        </div>
      </div>
    </div>
  );
}
