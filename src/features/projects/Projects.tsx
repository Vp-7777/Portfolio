"use client";

import { useSystemStore } from "@/store/useSystemStore";
import { ProjectDetail } from "./ProjectDetail";
import { ProjectSandbox } from "./ProjectSandbox";

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
}

const projects: ProjectEntry[] = [
  {
    id: "autismind",
    number: "01",
    name: "AutisMind-AI",
    tagline: "Edge Diagnostic Machine Learning",
    description:
      "A full-stack AI platform for early autism screening, pairing an interactive assessment interface with computer-vision and generative-AI prediction modules over a real-time REST API.",
    tags: ["PYTHON", "COMPUTER VISION", "GENERATIVE AI", "FASTAPI", "ONNX RUNTIME"],
    linkText: "LIVE DEMO",
    url: "https://autis-mind-ai.vercel.app/",
    live: true,
  },
  {
    id: "prithviq",
    number: "02",
    name: "PrithviQ",
    tagline: "Geospatial Aerial Drone Vision",
    description:
      "A computer-vision system that detects, classifies, and quantifies plastic waste from smartphone and drone imagery, feeding a dashboard NGOs and government agencies use to plan cleanup operations — built around UN SDG 12 and 14.",
    tags: ["PYTHON", "MACHINE LEARNING", "COMPUTER VISION", "PYTORCH", "UN SDG 12 & 14"],
    linkText: "GITHUB",
    url: "https://github.com/Vp-7777/PrithviQ",
    live: false,
  },
  {
    id: "campuswap",
    number: "03",
    name: "CampuSwap",
    tagline: "P2P Relational Marketplace Engine",
    description:
      "A full-stack campus marketplace for students to list, browse, and trade items securely, with its own auth, listings, and transaction flow on a PostgreSQL backend.",
    tags: ["REACT.JS", "NODE.JS", "POSTGRESQL", "REST APIS", "JWT AUTH"],
    linkText: "GITHUB",
    url: "https://github.com/Vp-7777/CampuSwap",
    live: false,
  },
];

export function Projects() {
  const setActiveProject = useSystemStore((state) => state.setActiveProject);

  return (
    <section id="work" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
              INDEX
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
              Selected work
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
            Click any row to open the system blueprint and architectural decisions, or launch directly.
          </p>
        </div>

        {/* Numbered Editorial Index Rows */}
        <div className="divide-y divide-[rgba(27,23,16,0.18)] border-y border-[rgba(27,23,16,0.18)]">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className="editorial-row group py-10 sm:py-14 px-4 sm:px-6 cursor-pointer transition-colors duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left: Index Number (1.5 cols) */}
                <div className="lg:col-span-2 flex items-center gap-3">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#7C5A2C] group-hover:text-[#1B1710] transition-colors">
                    {project.number}
                  </span>
                  {project.live && (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-700 bg-emerald-100/80 px-2 py-0.5 border border-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>

                {/* Middle: Title, Narrative & Tags (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display italic font-normal text-2xl sm:text-3xl md:text-4xl text-[#1B1710] group-hover:text-[#7C5A2C] transition-colors leading-[1.15] py-0.5">
                      {project.name}
                    </h3>
                    <span className="font-mono text-xs font-semibold text-[#A9793C] uppercase tracking-wider block">
                      {project.tagline}
                    </span>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#5C5344] leading-[1.65] max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tag Row */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 font-mono text-[11px] text-[#5C5344]">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <span className="bg-[#EEE6D4] px-2 py-0.5 border border-[rgba(27,23,16,0.08)] group-hover:border-[rgba(27,23,16,0.18)] transition-colors">
                          {tag}
                        </span>
                        {idx < project.tags.length - 1 && <span className="text-[#9C9280]">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Actions (3.5 cols) */}
                <div className="lg:col-span-3 flex flex-wrap lg:flex-col lg:items-end justify-start gap-2.5 pt-2 lg:pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project.id);
                    }}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#1B1710] hover:text-[#7C5A2C] bg-[#EEE6D4] hover:bg-[#F6F1E7] border border-[rgba(27,23,16,0.2)] px-3.5 py-2 uppercase transition-colors cursor-pointer"
                  >
                    <span>[ BLUEPRINT ↗ ]</span>
                  </button>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#F6F1E7] bg-[#1B1710] hover:bg-[#7C5A2C] px-3.5 py-2 uppercase transition-colors cursor-pointer shadow-xs"
                  >
                    <span>{project.linkText}</span>
                    <span className="text-[#A9793C]">↗</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Benchmark & Latency Sandbox */}
        <ProjectSandbox />

      </div>

      {/* Slide-over Architecture Blueprint Drawer */}
      <ProjectDetail />
    </section>
  );
}
