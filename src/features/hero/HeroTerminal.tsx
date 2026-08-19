"use client";

import { useState } from "react";
import { Activity, Cpu, Database, Play, ShieldCheck, Zap, ArrowRight, CheckCircle2, Sliders } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";

interface SpecTab {
  id: "autismind" | "prithviq" | "campuswap";
  name: string;
  category: string;
  icon: typeof Cpu;
}

const tabs: SpecTab[] = [
  { id: "autismind", name: "AutisMind-AI", category: "Edge Diagnostic ML", icon: Activity },
  { id: "prithviq", name: "PrithviQ Vision", category: "Geospatial Tiling", icon: Cpu },
  { id: "campuswap", name: "CampuSwap", category: "PostgreSQL Engine", icon: Database },
];

export function HeroTerminal() {
  const [activeTab, setActiveTab] = useState<"autismind" | "prithviq" | "campuswap">("autismind");
  const [isRunning, setIsRunning] = useState(false);
  const [confidence, setConfidence] = useState(92.4);
  const [latency, setLatency] = useState(14.2);
  const setActiveProject = useSystemStore((state) => state.setActiveProject);

  const simulateExecution = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setLatency(Number((13.8 + Math.random() * 0.8).toFixed(1)));
      setConfidence(Number((92.1 + Math.random() * 0.7).toFixed(1)));
    }, 450);
  };

  return (
    <div className="w-full bento-card p-6 sm:p-7 relative overflow-hidden space-y-5">
      
      {/* Top Spec Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="font-mono text-xs text-slate-200 font-bold uppercase tracking-wider">
            Live Architecture Spec & Benchmark Sandbox
          </span>
        </div>

        <button
          onClick={simulateExecution}
          disabled={isRunning}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold text-indigo-300 bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 transition-all cursor-pointer disabled:opacity-50 hover:scale-105"
        >
          <Play size={11} className="fill-indigo-400 text-indigo-400" />
          <span>{isRunning ? "Running Sandbox..." : "Simulate Live Inference"}</span>
        </button>
      </div>

      {/* Tab Switcher */}
      <div className="grid grid-cols-3 gap-2.5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? "bg-indigo-600/25 text-white border border-indigo-500/50 shadow-md shadow-indigo-600/20"
                  : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1.5">
                <Icon size={16} className={isActive ? "text-indigo-400" : "text-slate-400"} />
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
              </div>
              <div>
                <span className={`text-xs font-sans font-bold block truncate ${isActive ? "text-white" : "text-slate-300"}`}>
                  {tab.name}
                </span>
                <span className={`text-[10px] block truncate font-mono ${isActive ? "text-indigo-300" : "text-slate-500"}`}>
                  {tab.category}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Benchmark Display Screen */}
      <div className="p-4 rounded-2xl bg-[#090d16]/90 border border-white/10 space-y-3 font-mono text-xs">
        {activeTab === "autismind" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-slate-300 font-bold">MODEL: Quantized MobileNetV3 + Vision Transformer</span>
              <span className="text-emerald-400 font-bold bg-emerald-500/15 px-2.5 py-0.5 rounded-md border border-emerald-500/30">READY (ONNX)</span>
            </div>
            
            {/* Live Visualizer Bar */}
            <div className="space-y-1.5 py-1">
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>ONNX Runtime Local Thread Activation</span>
                <span className="text-emerald-400 font-bold">{isRunning ? "Processing Layer 18/24..." : "Optimal State (INT8)"}</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-all duration-500 ${isRunning ? "w-full animate-pulse" : "w-[92%]"}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Inference Delay</span>
                <span className="text-emerald-400 font-bold text-xs">{isRunning ? "Testing..." : `${latency} ms`}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Diagnostic AUC</span>
                <span className="text-indigo-400 font-bold text-xs">{confidence}%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Privacy Target</span>
                <span className="text-slate-200 font-bold text-xs">100% On-Device</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-sans">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                <span>Full-stack REST API with zero remote data leakage.</span>
              </div>
              <button
                onClick={() => setActiveProject("autismind")}
                className="text-indigo-400 font-bold hover:underline cursor-pointer text-[11px] flex items-center gap-0.5"
              >
                <span>Blueprint</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        )}

        {activeTab === "prithviq" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-slate-300 font-bold">PIPELINE: Aerial Geo-Spatial Tiling & Density Mask</span>
              <span className="text-sky-400 font-bold bg-sky-500/15 px-2.5 py-0.5 rounded-md border border-sky-500/30">UN SDG 12/14</span>
            </div>

            {/* Live Visualizer Bar */}
            <div className="space-y-1.5 py-1">
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Multi-Angle Frame Segmentation Rate</span>
                <span className="text-sky-400 font-bold">{isRunning ? "Tiling Frames..." : "120 FPS Real-time Stream"}</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 transition-all duration-500 ${isRunning ? "w-full animate-pulse" : "w-[96%]"}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Throughput</span>
                <span className="text-sky-400 font-bold text-xs">{isRunning ? "Ingesting..." : "120 FPS"}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Precision mAP</span>
                <span className="text-emerald-400 font-bold text-xs">96.8%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Deployment</span>
                <span className="text-slate-200 font-bold text-xs">Drone & Mobile</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-sans">
              <div className="flex items-center gap-1.5">
                <Zap size={14} className="text-amber-400 shrink-0" />
                <span>Multi-angle drone feed ingestion with NGO analytics.</span>
              </div>
              <button
                onClick={() => setActiveProject("prithviq")}
                className="text-indigo-400 font-bold hover:underline cursor-pointer text-[11px] flex items-center gap-0.5"
              >
                <span>Blueprint</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        )}

        {activeTab === "campuswap" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-slate-300 font-bold">DATABASE: PostgreSQL ACID Relational Schemas</span>
              <span className="text-emerald-400 font-bold bg-emerald-500/15 px-2.5 py-0.5 rounded-md border border-emerald-500/30">JWT AUTH</span>
            </div>

            {/* Live Visualizer Bar */}
            <div className="space-y-1.5 py-1">
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Concurrent Transaction Pool Load</span>
                <span className="text-emerald-400 font-bold">{isRunning ? "Dispatching Queries..." : "2.1ms Query Latency"}</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-400 transition-all duration-500 ${isRunning ? "w-full animate-pulse" : "w-[98%]"}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Query Delay</span>
                <span className="text-emerald-400 font-bold text-xs">{isRunning ? "Querying..." : "2.1 ms"}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Transaction Model</span>
                <span className="text-indigo-400 font-bold text-xs">Strict ACID</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block">Stack</span>
                <span className="text-slate-200 font-bold text-xs">Node / Express</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-sans">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                <span>Peer-to-peer authenticated campus resource exchange.</span>
              </div>
              <button
                onClick={() => setActiveProject("campuswap")}
                className="text-indigo-400 font-bold hover:underline cursor-pointer text-[11px] flex items-center gap-0.5"
              >
                <span>Blueprint</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
