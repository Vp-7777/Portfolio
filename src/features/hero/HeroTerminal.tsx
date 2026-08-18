"use client";

import { useState } from "react";
import { Sparkles, Activity, Cpu, Database, Play, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";

interface ArtifactTab {
  id: "autismind" | "prithviq" | "campuswap";
  name: string;
  category: string;
  tagline: string;
  icon: typeof Cpu;
}

const tabs: ArtifactTab[] = [
  { id: "autismind", name: "AutisMind-AI", category: "Edge Diagnostic ML", tagline: "ONNX MobileNetV3 · Sub-15ms Latency", icon: Activity },
  { id: "prithviq", name: "PrithviQ Vision", category: "Geospatial Analytics", tagline: "Aerial Drone Tiling · UN SDG 12/14", icon: Cpu },
  { id: "campuswap", name: "CampuSwap", category: "Relational P2P Engine", tagline: "PostgreSQL ACID · Scalable REST", icon: Database },
];

export function HeroTerminal() {
  const [activeTab, setActiveTab] = useState<"autismind" | "prithviq" | "campuswap">("autismind");
  const [isRunning, setIsRunning] = useState(false);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const setActiveProject = useSystemStore((state) => state.setActiveProject);

  const simulateExecution = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 500);
  };

  return (
    <div className="w-full studio-card p-6 sm:p-7 relative overflow-hidden space-y-5 bg-white border border-slate-200">
      
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <span className="font-mono text-xs text-ink-muted font-bold uppercase tracking-wider pl-2 flex items-center gap-1.5">
            <Sparkles size={13} className="text-indigo-brand" />
            Interactive Systems Architecture
          </span>
        </div>

        <button
          onClick={simulateExecution}
          disabled={isRunning}
          onMouseEnter={() => {
            setCursorVariant("hover");
            setCursorLabel("Test Pipeline");
          }}
          onMouseLeave={() => {
            setCursorVariant("default");
            setCursorLabel(null);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold text-indigo-brand bg-indigo-light hover:bg-indigo-50 border border-indigo-200 transition-all cursor-pointer disabled:opacity-50"
        >
          <Play size={12} className="fill-indigo-brand text-indigo-brand" />
          <span>{isRunning ? "Running Benchmark..." : "Run Live Simulation"}</span>
        </button>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-3 gap-2.5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? "bg-indigo-light/70 border border-indigo-300 shadow-sm"
                  : "bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/70"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <Icon size={16} className={isActive ? "text-indigo-brand" : "text-ink-muted"} />
                {isActive && <span className="w-2 h-2 rounded-full bg-indigo-brand" />}
              </div>
              <div>
                <span className={`text-xs font-sans font-bold block truncate ${isActive ? "text-indigo-950" : "text-ink"}`}>
                  {tab.name}
                </span>
                <span className="text-[10px] text-ink-muted block truncate font-mono">
                  {tab.category}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Live Pipeline State Screen */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs">
        {activeTab === "autismind" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-ink font-bold">MODEL: Quantized MobileNetV3 + Vision Transformer</span>
              <span className="text-emerald-brand font-bold bg-emerald-light px-2 py-0.5 rounded-md border border-emerald-200">READY (ONNX)</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-ink-muted block">Inference Delay</span>
                <span className="text-emerald-brand font-bold text-xs">{isRunning ? "Testing..." : "14.2 ms"}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-ink-muted block">Diagnostic AUC</span>
                <span className="text-indigo-brand font-bold text-xs">92.4%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-ink-muted block">Privacy Standard</span>
                <span className="text-ink font-bold text-xs">100% On-Device</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-ink-muted pt-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-brand shrink-0" />
                <span>Full-stack REST API with real-time screening workflows.</span>
              </div>
              <button
                onClick={() => setActiveProject("autismind")}
                className="text-indigo-brand font-bold hover:underline cursor-pointer text-[10px] uppercase"
              >
                Inspect Blueprint →
              </button>
            </div>
          </div>
        )}

        {activeTab === "prithviq" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-ink font-bold">PIPELINE: Aerial Geo-Spatial Tiling & Density Mask</span>
              <span className="text-sky-brand font-bold bg-sky-light px-2 py-0.5 rounded-md border border-sky-200">UN SDG 12/14</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-ink-muted block">Throughput</span>
                <span className="text-sky-brand font-bold text-xs">{isRunning ? "Ingesting..." : "120 FPS"}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-ink-muted block">Precision mAP</span>
                <span className="text-emerald-brand font-bold text-xs">96.8%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-ink-muted block">Target</span>
                <span className="text-ink font-bold text-xs">Drone & Mobile</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-ink-muted pt-1">
              <div className="flex items-center gap-1.5">
                <Zap size={14} className="text-amber-brand shrink-0" />
                <span>Multi-angle drone feed ingestion with automated NGO analytics dashboards.</span>
              </div>
              <button
                onClick={() => setActiveProject("prithviq")}
                className="text-indigo-brand font-bold hover:underline cursor-pointer text-[10px] uppercase"
              >
                Inspect Blueprint →
              </button>
            </div>
          </div>
        )}

        {activeTab === "campuswap" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-ink font-bold">DATABASE: PostgreSQL ACID Relational Schemas</span>
              <span className="text-emerald-brand font-bold bg-emerald-light px-2 py-0.5 rounded-md border border-emerald-200">JWT AUTH</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-ink-muted block">Query Latency</span>
                <span className="text-emerald-brand font-bold text-xs">{isRunning ? "Querying..." : "2.1 ms"}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-ink-muted block">Integrity</span>
                <span className="text-indigo-brand font-bold text-xs">Strict ACID</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-ink-muted block">Stack</span>
                <span className="text-ink font-bold text-xs">Node / Express</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-ink-muted pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-brand shrink-0" />
                <span>Peer-to-peer student marketplace with authenticated resource exchange.</span>
              </div>
              <button
                onClick={() => setActiveProject("campuswap")}
                className="text-indigo-brand font-bold hover:underline cursor-pointer text-[10px] uppercase"
              >
                Inspect Blueprint →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
