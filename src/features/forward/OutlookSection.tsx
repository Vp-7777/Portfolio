"use client";

import { Bot, Cpu, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";

const focusAreas = [
  {
    index: "01",
    field: "AGENTIC AI & AUTONOMOUS ORCHESTRATION",
    tech: "LangGraph · Vector Memory · Tool Loops",
    desc: "Architecting self-correcting agent loops with verifiable guardrails, persistent memory structures, and autonomous multi-agent consensus protocols.",
    icon: Bot,
  },
  {
    index: "02",
    field: "EDGE DEEP LEARNING & ON-DEVICE COMPILATION",
    tech: "ONNX Runtime · INT8 Quantization · WebAssembly",
    desc: "Compiling neural networks to execute on local consumer hardware (mobile CPUs, WebGPU, and embedded microcontrollers) with sub-15ms inference guarantees.",
    icon: Cpu,
  },
  {
    index: "03",
    field: "DISTRIBUTED GEOSPATIAL & COMPUTER VISION",
    tech: "PyTorch · Tiling Pipelines · Real-Time Segmentation",
    desc: "Scaling high-throughput visual pipelines for satellite imagery and drone telemetry to deliver actionable environmental and climate analytics.",
    icon: Globe,
  },
];

export function OutlookSection() {
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const handleMouseEnter = (label: string) => {
    setCursorVariant("hover");
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  return (
    <section
      data-chapter="forward"
      className="relative w-full min-h-screen bg-canvas py-28 sm:py-36 px-6 sm:px-10 lg:px-12 overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto relative z-base space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-white shadow-xs">
            <Sparkles size={13} className="text-indigo-brand" />
            <span className="font-mono text-xs font-bold text-ink-muted uppercase tracking-wider">
              Research Horizons
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-ink leading-tight">
            Architecting for Tomorrow&apos;s <br />
            <span className="text-indigo-gradient">
              Intelligent Paradigms
            </span>
          </h2>

          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-sans">
            Sandboxing and testing architectures designed to exploit the next leap in hardware, context windows, and autonomous software engineering.
          </p>
        </div>

        {/* 3 Research Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.index}
                onMouseEnter={() => handleMouseEnter(`Research // ${area.index}`)}
                onMouseLeave={handleMouseLeave}
                className="studio-card p-8 sm:p-10 space-y-6 flex flex-col justify-between group bg-white"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-indigo-light border border-indigo-200 text-indigo-brand group-hover:scale-105 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="font-mono text-sm font-bold text-ink-faint">
                      {area.index}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-sans font-bold text-ink group-hover:text-indigo-brand transition-colors">
                      {area.field}
                    </h3>
                    <span className="font-mono text-xs text-indigo-brand bg-indigo-light px-3 py-1 rounded-full border border-indigo-200 block w-fit">
                      {area.tech}
                    </span>
                  </div>

                  <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                    {area.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-indigo-brand font-semibold uppercase">
                  <span>Active Investigation</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
