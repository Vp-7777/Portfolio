"use client";

import { Activity, ArrowUpRight, CheckCircle2, Code2, Cpu, Database, ExternalLink, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { ProjectDetail } from "./ProjectDetail";
import { ProjectSandbox } from "./ProjectSandbox";
import { ScrollReveal } from "@/features/motion/ScrollReveal";

interface ProjectEntry {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  linkText: string;
  url: string;
  live: boolean;
  metricLabel: string;
  metricValue: string;
  metricIcon: typeof Activity;
}

const projects: ProjectEntry[] = [
  {
    id: "autismind",
    number: "01",
    name: "AutisMind-AI",
    tagline: "Edge Diagnostic Machine Learning Platform",
    description:
      "A full-stack diagnostic AI platform pairing an interactive assessment interface with local quantized neural networks (MobileNetV3 + Vision Transformer) over real-time REST APIs.",
    tags: ["PYTHON", "FASTAPI", "COMPUTER VISION", "ONNX RUNTIME", "REACT", "GENERATIVE AI"],
    linkText: "LAUNCH APP",
    url: "https://autis-mind-ai.vercel.app/",
    live: true,
    metricLabel: "Inference Delay",
    metricValue: "< 14.2 ms (Local ONNX)",
    metricIcon: Activity,
  },
  {
    id: "prithviq",
    number: "02",
    name: "PrithviQ",
    tagline: "Aerial Drone Computer Vision & Geospatial Analytics",
    description:
      "A computer-vision surveillance pipeline trained on drone and smartphone aerial feeds to detect, classify, and quantify plastic waste densities to coordinate municipal cleanups (aligned with UN SDG 12 & 14).",
    tags: ["PYTHON", "PYTORCH", "COMPUTER VISION", "FASTAPI", "GEO-ANALYTICS", "UN SDG 12/14"],
    linkText: "SOURCE CODE",
    url: "https://github.com/Vp-7777/PrithviQ",
    live: false,
    metricLabel: "Frame Throughput",
    metricValue: "120 FPS Real-time",
    metricIcon: Cpu,
  },
  {
    id: "campuswap",
    number: "03",
    name: "CampuSwap",
    tagline: "P2P University Marketplace & Relational Engine",
    description:
      "A full-stack campus marketplace platform for university students to list, browse, and trade items securely, with authenticated JWT sessions and transaction workflows on a PostgreSQL backend.",
    tags: ["REACT.JS", "NODE.JS", "POSTGRESQL", "REST APIS", "JWT AUTH", "ACID SCHEMAS"],
    linkText: "SOURCE CODE",
    url: "https://github.com/Vp-7777/CampuSwap",
    live: false,
    metricLabel: "Query Latency",
    metricValue: "2.1 ms (PostgreSQL ACID)",
    metricIcon: Database,
  },
];

export function Projects() {
  const setActiveProject = useSystemStore((state) => state.setActiveProject);

  return (
    <section id="work" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                FLAGSHIP SYSTEMS
              </span>
              <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
                Selected Work & Architecture
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
              Click any row to open the system blueprint and architectural decisions, or launch live deployments.
            </p>
          </div>
        </ScrollReveal>

        {/* Elevated Editorial Frosted Project Cards with Staggered Scroll Reveal */}
        <div className="space-y-8">
          {projects.map((project, idx) => {
            const MetricIcon = project.metricIcon;

            return (
              <ScrollReveal key={project.id} direction="up" delay={idx * 140}>
                <div
                  onClick={() => setActiveProject(project.id)}
                  className="frosted-card p-8 sm:p-10 rounded-none group cursor-pointer transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column (8 cols): Number, Title, Tagline, Description & Tags */}
                    <div className="lg:col-span-8 space-y-5">
                      
                      {/* Index & Status Badge */}
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#7C5A2C] bg-[#EEE6D4] px-2.5 py-0.5 border border-[rgba(27,23,16,0.1)]">
                          {project.number}
                        </span>
                        {project.live && (
                          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 border border-emerald-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            LIVE ON VERCEL
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1">
                        <h3 className="font-display italic font-normal text-2xl sm:text-3xl md:text-4xl text-[#1B1710] group-hover:text-[#7C5A2C] transition-colors leading-[1.15] py-0.5">
                          {project.name}
                        </h3>
                        <span className="font-mono text-xs font-semibold text-[#A9793C] uppercase tracking-wider block">
                          {project.tagline}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-sm sm:text-base text-[#5C5344] leading-[1.7] max-w-2xl">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] text-[#5C5344]">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-[#EEE6D4]/80 px-2.5 py-1 border border-[rgba(27,23,16,0.1)] group-hover:border-[#A9793C] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Right Column (4 cols): Live Metric Box & Direct Action Buttons */}
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-6 h-full pt-1">
                      
                      {/* Live Metric Box */}
                      <div className="p-4 bg-[#EEE6D4]/60 border border-[rgba(27,23,16,0.12)] space-y-1">
                        <div className="flex items-center justify-between text-[#A9793C]">
                          <span className="font-mono text-[10px] text-[#9C9280] uppercase tracking-wider">
                            {project.metricLabel}
                          </span>
                          <MetricIcon size={14} />
                        </div>
                        <span className="font-mono text-sm sm:text-base font-bold text-[#1B1710] block">
                          {project.metricValue}
                        </span>
                      </div>

                      {/* Action Deck */}
                      <div className="flex flex-col gap-2.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveProject(project.id);
                          }}
                          className="w-full py-3 px-4 bg-[#EEE6D4] hover:bg-[#F6F1E7] text-[#1B1710] border border-[rgba(27,23,16,0.2)] hover:border-[#A9793C] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                          <span>[ BLUEPRINT SPEC ]</span>
                          <ArrowUpRight size={13} className="text-[#A9793C]" />
                        </button>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full py-3 px-4 bg-[#1B1710] hover:bg-[#7C5A2C] text-[#F6F1E7] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-[#1B1710]/10"
                        >
                          {project.live ? <ExternalLink size={13} className="text-[#A9793C]" /> : <Code2 size={13} className="text-[#A9793C]" />}
                          <span>{project.linkText}</span>
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Interactive Architecture Benchmark & Latency Sandbox with Scroll Reveal */}
        <ScrollReveal direction="up" delay={250}>
          <ProjectSandbox />
        </ScrollReveal>

      </div>

      {/* Slide-over Architecture Blueprint Drawer */}
      <ProjectDetail />
    </section>
  );
}
