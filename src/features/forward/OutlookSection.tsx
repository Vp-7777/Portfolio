"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, Cpu, Globe } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { Section } from "@/features/ui/Section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const focusAreas = [
  {
    index: "01",
    field: "AGENTIC SYSTEM ORCHESTRATION",
    tech: "LangGraph, LangChain, Vector Databases",
    desc: "Designing secure, tool-enabled AI agents capable of autonomous execution, planning, and multi-turn collaboration under strict guardrails.",
    Icon: Bot,
  },
  {
    index: "02",
    field: "EDGE INFERENCE & COMPILATION",
    tech: "ONNX Runtime, Quantization, WebAssembly",
    desc: "Compiling and deploying deep learning models locally inside client browsers and low-power IoT architectures, bypassing remote API points of failure.",
    Icon: Cpu,
  },
  {
    index: "03",
    field: "DISTRIBUTED SPATIAL COMPUTING",
    tech: "PyTorch, FastAPI, GPU Ingestion Pipelines",
    desc: "Optimizing high-throughput geo-spatial and visual datasets using custom multi-threaded loaders to deliver real-time visual maps.",
    Icon: Globe,
  },
];

export function OutlookSection() {
  const containerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const reducedMotion = useSystemStore((state) => state.reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    if (!containerRef.current || !listRef.current) return;

    const items = listRef.current.querySelectorAll(".outlook-item");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const handleMouseEnter = (field: string) => {
    setCursorVariant("hover");
    setCursorLabel(`EXPLORE // ${field}`);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  return (
    <Section
      ref={containerRef}
      chapter="forward"
      className="relative bg-[#05040d] bg-grid-pattern border-t border-white/10 py-20 md:py-28 overflow-hidden"
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-900/15 blur-[180px]" />
        <div className="absolute bottom-[5%] left-[10%] w-[450px] h-[450px] rounded-full bg-cyan-900/15 blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-28 relative">

        {/* Left Side: Ambition Statement */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-purple-300 tracking-wide border border-purple-500/30 rounded-full px-3.5 py-1 bg-purple-500/10 uppercase">
            Future Vision
          </div>
          <h2
            className="font-display font-extrabold uppercase tracking-tight leading-none"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            LOOKING{" "}
            <br />
            <span
              className="italic font-light"
              style={{
                background: "linear-gradient(135deg, #c084fc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              FORWARD
            </span>
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-sm font-sans">
            Instead of building for today&apos;s frameworks, we design architectures ready for
            tomorrow&apos;s parameter scale. Here are the core fields currently being researched and sandboxed.
          </p>
        </div>

        {/* Right Side: Focus Areas */}
        <div ref={listRef} className="lg:col-span-7 space-y-10">
          {focusAreas.map((area, idx) => (
            <div
              key={area.index}
              onMouseEnter={() => handleMouseEnter(area.field)}
              onMouseLeave={handleMouseLeave}
              className="outlook-item group relative pl-10 md:pl-14 pb-10 border-b border-border-subtle/40 flex flex-col space-y-3 cursor-default"
              style={{ opacity: reducedMotion ? 1 : undefined }}
            >
              {/* Animated dot */}
              <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full border border-border-subtle bg-surface-2 group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-400" />
              {/* Vertical connector line */}
              {idx < focusAreas.length - 1 && (
                <div className="absolute left-[4px] top-6 w-[1px] h-[calc(100%+1.5rem)] bg-gradient-to-b from-border-subtle/50 to-transparent" />
              )}

              <span
                className="font-sans text-sm font-bold uppercase tracking-wider flex items-center gap-2"
                style={{
                  background: "linear-gradient(90deg, #c084fc, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <area.Icon size={14} style={{ color: "#c084fc", minWidth: 14 }} />
                0{idx + 1} · {area.field}
              </span>

              <span className="font-sans text-xs text-muted/80 tracking-wide font-medium uppercase block">
                Research Field: {area.tech}
              </span>

              <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-sans max-w-xl group-hover:text-foreground transition-colors duration-300">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
