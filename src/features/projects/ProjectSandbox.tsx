"use client";

import { useState } from "react";
import { Activity, Cpu, Database, Play, ShieldCheck, Sparkles, Zap } from "lucide-react";

interface BenchmarkTab {
  id: "autismind" | "prithviq" | "campuswap";
  name: string;
  category: string;
  metricLabel: string;
  metricValue: string;
  subValue: string;
  description: string;
  privacyBadge: string;
  icon: typeof Activity;
  pipelineStep: string;
}

const benchmarkTabs: BenchmarkTab[] = [
  {
    id: "autismind",
    name: "AutisMind-AI",
    category: "Edge Diagnostic ML",
    metricLabel: "Inference Latency",
    metricValue: "14.2 ms",
    subValue: "92.4% AUC Score",
    description: "Compiles Quantized MobileNetV3 + Vision Transformer to local ONNX runtime threads with zero server-side telemetry.",
    privacyBadge: "100% LOCAL ON-DEVICE PRIVACY",
    icon: Activity,
    pipelineStep: "ONNX Runtime INT8 Layer 24/24 Evaluation",
  },
  {
    id: "prithviq",
    name: "PrithviQ Vision",
    category: "Drone Spatial Tiling",
    metricLabel: "Frame Ingestion",
    metricValue: "120 FPS",
    subValue: "96.8% Precision mAP",
    description: "FastAPI aerial frame tiling segmentation pipeline for rapid plastic waste hotspot classification and density mapping.",
    privacyBadge: "UN SDG 12 & 14 ALIGNED",
    icon: Cpu,
    pipelineStep: "Aerial Frame Tiling & Tensor Heatmap Dispatch",
  },
  {
    id: "campuswap",
    name: "CampuSwap Engine",
    category: "Relational Database",
    metricLabel: "Query Latency",
    metricValue: "2.1 ms",
    subValue: "Strict ACID Transactions",
    description: "Optimized connection pool with PostgreSQL relational schemas supporting concurrent student marketplace trades.",
    privacyBadge: "JWT AUTHENTICATED",
    icon: Database,
    pipelineStep: "Connection Pool Index Scan & ACID Write",
  },
];

export function ProjectSandbox() {
  const [activeTab, setActiveTab] = useState<"autismind" | "prithviq" | "campuswap">("autismind");
  const [testing, setTesting] = useState(false);
  const [latencyOffset, setLatencyOffset] = useState(0);

  const runTest = () => {
    setTesting(true);
    setTimeout(() => {
      setTesting(false);
      setLatencyOffset(Number(((Math.random() - 0.5) * 0.8).toFixed(1)));
    }, 450);
  };

  const current = benchmarkTabs.find((t) => t.id === activeTab) || benchmarkTabs[0];
  const Icon = current.icon;

  return (
    <div className="frosted-card p-7 sm:p-9 rounded-none space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(27,23,16,0.12)] pb-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A9793C] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#1B1710] tracking-wider uppercase">
              LIVE SYSTEM BENCHMARK & LATENCY INSPECTOR
            </span>
          </div>
          <span className="font-sans text-xs text-[#5C5344] block">
            Simulate real-time on-device neural compilation, aerial frame segmentation, and query execution.
          </span>
        </div>

        <button
          onClick={runTest}
          disabled={testing}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B1710] hover:bg-[#7C5A2C] text-[#F6F1E7] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-[#1B1710]/10 disabled:opacity-50"
        >
          <Play size={12} className="fill-[#A9793C] text-[#A9793C]" />
          <span>{testing ? "Testing Pipeline..." : "Run Test ↗"}</span>
        </button>
      </div>

      {/* Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {benchmarkTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const TabIcon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 text-left border transition-all cursor-pointer flex items-center justify-between ${
                isActive
                  ? "bg-[#F6F1E7] border-[#A9793C] shadow-xs"
                  : "bg-[#EEE6D4]/40 border-[rgba(27,23,16,0.1)] hover:bg-[#EEE6D4] text-[#5C5344]"
              }`}
            >
              <div className="flex items-center gap-3">
                <TabIcon size={16} className={isActive ? "text-[#7C5A2C]" : "text-[#9C9280]"} />
                <div>
                  <span className={`font-sans text-xs sm:text-sm font-bold block ${isActive ? "text-[#1B1710]" : "text-[#5C5344]"}`}>
                    {tab.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#9C9280] block">
                    {tab.category}
                  </span>
                </div>
              </div>
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#7C5A2C]" />}
            </button>
          );
        })}
      </div>

      {/* Benchmark Screen */}
      <div className="p-6 bg-[#F6F1E7] border border-[rgba(27,23,16,0.15)] space-y-4">
        
        {/* Spec Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(27,23,16,0.1)] pb-3">
          <div className="flex items-center gap-2">
            <Icon size={16} className="text-[#A9793C]" />
            <span className="font-display font-medium text-base sm:text-lg text-[#1B1710]">
              {current.name} Pipeline Telemetry
            </span>
          </div>
          <span className="font-mono text-[10px] font-bold text-[#7C5A2C] bg-[#EEE6D4] px-2.5 py-1 border border-[rgba(27,23,16,0.12)]">
            {current.privacyBadge}
          </span>
        </div>

        {/* Live Active Pipeline Stage */}
        <div className="p-3 bg-[#EEE6D4]/50 border border-[rgba(27,23,16,0.1)] flex items-center justify-between text-xs font-mono">
          <span className="text-[#5C5344] flex items-center gap-2">
            <Zap size={13} className="text-[#A9793C]" />
            <span>ACTIVE STAGE: {current.pipelineStep}</span>
          </span>
          <span className="text-[#10b981] font-bold">
            {testing ? "EXECUTING..." : "OPTIMAL 100%"}
          </span>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 bg-[#EEE6D4]/60 border border-[rgba(27,23,16,0.1)]">
            <span className="font-mono text-[10px] text-[#9C9280] uppercase tracking-wider block">
              {current.metricLabel}
            </span>
            <span className="font-mono text-sm sm:text-base font-bold text-[#1B1710] block pt-0.5">
              {testing ? "Measuring..." : `${(parseFloat(current.metricValue) + latencyOffset).toFixed(1)} ${current.metricValue.includes("FPS") ? "FPS" : "ms"}`}
            </span>
          </div>

          <div className="p-3.5 bg-[#EEE6D4]/60 border border-[rgba(27,23,16,0.1)]">
            <span className="font-mono text-[10px] text-[#9C9280] uppercase tracking-wider block">
              Accuracy & Integrity
            </span>
            <span className="font-mono text-sm sm:text-base font-bold text-[#7C5A2C] block pt-0.5">
              {current.subValue}
            </span>
          </div>

          <div className="p-3.5 bg-[#EEE6D4]/60 border border-[rgba(27,23,16,0.1)]">
            <span className="font-mono text-[10px] text-[#9C9280] uppercase tracking-wider block">
              Execution Status
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#1B1710] block pt-0.5">
              Production Verified
            </span>
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm text-[#5C5344] leading-relaxed pt-1">
          {current.description}
        </p>
      </div>

    </div>
  );
}
