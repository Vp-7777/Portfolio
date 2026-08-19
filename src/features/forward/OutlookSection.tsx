"use client";

import { ArrowUpRight, Cpu, Globe, Layers, Sparkles } from "lucide-react";

const outlooks = [
  {
    id: "01",
    title: "Agentic AI & Autonomous Orchestration",
    tagline: "LangGraph · Vector Memory · Tool Loops",
    description:
      "Architecting self-correcting agent loops with verifiable guardrails, persistent memory structures, and autonomous multi-agent consensus protocols.",
    icon: Layers,
    accent: "text-indigo-400",
    borderHover: "hover:border-indigo-500/50",
  },
  {
    id: "02",
    title: "Edge Deep Learning & On-Device Compilation",
    tagline: "ONNX Runtime · INT8 Quantization · WebAssembly",
    description:
      "Compiling neural networks to execute on local consumer hardware (mobile CPUs, WebGPU, and embedded microcontrollers) with sub-15ms inference guarantees.",
    icon: Cpu,
    accent: "text-cyan-400",
    borderHover: "hover:border-cyan-500/50",
  },
  {
    id: "03",
    title: "Distributed Geospatial & Computer Vision",
    tagline: "PyTorch · Tiling Pipelines · Real-Time Segmentation",
    description:
      "Scaling high-throughput visual pipelines for satellite imagery and drone telemetry to deliver actionable environmental and climate analytics.",
    icon: Globe,
    accent: "text-emerald-400",
    borderHover: "hover:border-emerald-500/50",
  },
];

export function OutlookSection() {
  return (
    <section
      data-chapter="forward"
      className="relative w-full py-28 px-6 sm:px-10 lg:px-12 bg-[#090d16] bg-dark-grid"
    >
      {/* Background Radial Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-xs">
            <Sparkles size={13} className="text-indigo-400" />
            <span className="font-sans text-xs font-bold text-slate-200 uppercase tracking-wider">
              Research Horizons
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white">
            Architecting for Tomorrow&apos;s <br className="hidden sm:inline" />
            <span className="text-brand-gradient">Intelligent Paradigms</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Sandboxing and testing architectures designed to exploit the next leap in hardware, context windows, and autonomous software engineering.
          </p>
        </div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outlooks.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`bento-card p-8 space-y-6 border border-white/15 ${item.borderHover} transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs text-slate-500">
                    <span className="flex items-center gap-2 text-white font-bold">
                      <Icon size={16} className={item.accent} />
                    </span>
                    <span className="font-bold text-slate-400">{item.id}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white font-sans leading-snug">
                      {item.title}
                    </h3>
                    <p className={`font-mono text-xs ${item.accent} font-semibold`}>
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Investigation
                  </span>
                  <ArrowUpRight size={13} className="text-slate-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
