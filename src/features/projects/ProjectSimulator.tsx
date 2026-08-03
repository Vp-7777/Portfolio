"use client";

import { useState } from "react";
import { Activity, Cpu, Layers, RefreshCw, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface SimulatorProps {
  projectId: string;
}

export function ProjectSimulator({ projectId }: SimulatorProps) {
  // AutisMind AI state
  const [ageMonths, setAgeMonths] = useState<number>(36);
  const [scoreVal, setScoreVal] = useState<number>(4);
  const [isInferring, setIsInferring] = useState<boolean>(false);

  // TeraSight state
  const [activeBand, setActiveBand] = useState<"NDVI" | "RGB" | "THERMAL">("NDVI");
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const runAutisMindInference = () => {
    setIsInferring(true);
    setTimeout(() => setIsInferring(false), 300);
  };

  const runTeraSightScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 400);
  };

  if (projectId === "autismind") {
    const riskLevel = scoreVal > 6 ? "High Monitor" : scoreVal > 3 ? "Moderate Focus" : "Low Risk";
    const riskColor = scoreVal > 6 ? "text-amber-400" : scoreVal > 3 ? "text-cyan-400" : "text-emerald-400";

    return (
      <div className="p-5 rounded-2xl bg-surface-2/60 border border-purple-500/30 space-y-5 select-none my-4">
        <div className="flex justify-between items-center border-b border-border-subtle/50 pb-3">
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-purple-300">
            <Activity size={15} className="text-cyan-400 animate-pulse" />
            <span>Interactive Inference Simulator</span>
          </div>
          <span className="text-[10px] font-sans font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase">
            100% Offline Model
          </span>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans text-xs">
          <div className="space-y-2">
            <div className="flex justify-between text-muted">
              <span>Observation Age:</span>
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
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-muted">
              <span>Behavioral Variance Index:</span>
              <span className="text-white font-bold">{scoreVal} / 10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={scoreVal}
              onChange={(e) => {
                setScoreVal(Number(e.target.value));
                runAutisMindInference();
              }}
              className="w-full accent-purple-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Real-time Telemetry Result */}
        <div className="p-4 rounded-xl bg-surface-1/80 border border-border-subtle/60 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-950/80 border border-purple-500/40 flex items-center justify-center">
              <Zap size={18} className="text-cyan-400" />
            </div>
            <div>
              <span className="text-muted text-[10px] block uppercase font-medium">Predicted Risk Classification</span>
              <span className={`font-bold text-sm uppercase ${riskColor}`}>
                {isInferring ? "Computing..." : riskLevel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 font-sans text-[11px] text-muted font-medium">
            <div>
              <span className="block text-[10px] text-muted/70 uppercase">Inference Latency</span>
              <span className="text-emerald-400 font-bold">14.2 ms</span>
            </div>
            <div>
              <span className="block text-[10px] text-muted/70 uppercase">Memory Footprint</span>
              <span className="text-cyan-400 font-bold">4.2 MB</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "terasight") {
    return (
      <div className="p-5 rounded-2xl bg-surface-2/60 border border-cyan-500/30 space-y-5 select-none my-4">
        <div className="flex justify-between items-center border-b border-border-subtle/50 pb-3">
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-cyan-300">
            <Cpu size={15} className="text-purple-400" />
            <span>Satellite Tile Scanner Simulator</span>
          </div>
          <button
            onClick={runTeraSightScan}
            className="flex items-center gap-1.5 text-[10px] font-sans font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full uppercase hover:bg-cyan-900/60 transition-colors cursor-pointer"
          >
            <RefreshCw size={11} className={isScanning ? "animate-spin" : ""} />
            <span>Trigger Tile Re-scan</span>
          </button>
        </div>

        {/* Spectral Band Selector */}
        <div className="flex gap-2 font-sans text-xs font-semibold">
          {(["NDVI", "RGB", "THERMAL"] as const).map((band) => (
            <button
              key={band}
              onClick={() => {
                setActiveBand(band);
                runTeraSightScan();
              }}
              className={`px-4 py-1.5 rounded-lg border uppercase tracking-wider transition-all cursor-pointer ${
                activeBand === band
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold"
                  : "bg-surface-1 border-border-subtle/60 text-muted hover:text-white"
              }`}
            >
              {band} Spectrum
            </button>
          ))}
        </div>

        {/* Tile Matrix Grid Simulation */}
        <div className="relative p-4 rounded-xl bg-[#030612] border border-cyan-500/20 grid grid-cols-6 gap-2 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className={`h-8 rounded flex items-center justify-center text-[9px] font-sans font-bold transition-all duration-300 ${
                activeBand === "NDVI"
                  ? i % 3 === 0 ? "bg-emerald-900/60 text-emerald-300 border border-emerald-500/30" : "bg-cyan-950/50 text-cyan-400"
                  : activeBand === "THERMAL"
                  ? i % 2 === 0 ? "bg-amber-950/60 text-amber-300 border border-amber-500/30" : "bg-purple-950/50 text-purple-300"
                  : "bg-surface-2 text-muted/80"
              }`}
            >
              T-{i + 101}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center font-sans text-[11px] text-muted font-medium pt-1">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 size={13} />
            Sub-200ms Spatial Tile Rendering Active
          </span>
          <span className="text-cyan-300 font-bold">100% Tile Coverage</span>
        </div>
      </div>
    );
  }

  // CampusSwap default simulator
  return (
    <div className="p-5 rounded-2xl bg-surface-2/60 border border-indigo-500/30 space-y-4 select-none my-4">
      <div className="flex justify-between items-center border-b border-border-subtle/50 pb-3">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-indigo-300">
          <Layers size={15} className="text-cyan-400" />
          <span>Peer-to-Peer Campus Verification Flow</span>
        </div>
        <span className="text-[10px] font-sans font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full uppercase">
          SRM Institute Verified
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 font-sans text-xs text-center">
        <div className="p-3 rounded-xl bg-surface-1 border border-border-subtle/60 space-y-1">
          <ShieldCheck size={16} className="mx-auto text-emerald-400" />
          <span className="font-bold text-white block">1. Auth Check</span>
          <span className="text-[10px] text-muted block">Institutional Email</span>
        </div>
        <div className="p-3 rounded-xl bg-surface-1 border border-border-subtle/60 space-y-1">
          <Zap size={16} className="mx-auto text-cyan-400" />
          <span className="font-bold text-white block">2. Instant Match</span>
          <span className="text-[10px] text-muted block">Real-time Socket</span>
        </div>
        <div className="p-3 rounded-xl bg-surface-1 border border-border-subtle/60 space-y-1">
          <CheckCircle2 size={16} className="mx-auto text-purple-400" />
          <span className="font-bold text-white block">3. Secure Exchange</span>
          <span className="text-[10px] text-muted block">Zero Marketplace Fee</span>
        </div>
      </div>
    </div>
  );
}
