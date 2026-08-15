"use client";

import { useRef } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import { Button } from "@/features/ui/Button";
import { ProjectDetail } from "./ProjectDetail";
import { BentoTile } from "@/features/ui/BentoTile";
import { ProjectSimulator } from "./ProjectSimulator";
import projectsData from "@/lib/content/projects.json";
import { Sparkles, Layers, ArrowUpRight, Cpu } from "lucide-react";

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const setActiveProject = useSystemStore((state) => state.setActiveProject);
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
      ref={containerRef}
      data-chapter="projects"
      className="relative bg-[#05040d] bg-grid-pattern border-t border-white/10 py-20 md:py-28 overflow-hidden"
    >
      {/* Ambient background light blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-purple-900/15 blur-[180px]" />
        <div className="absolute bottom-[15%] right-[5%] w-[550px] h-[550px] rounded-full bg-cyan-900/15 blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-base space-y-16">

        {/* Section Header */}
        <div className="space-y-4 max-w-2xl select-none text-left">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-purple-300 tracking-wide border border-purple-500/30 rounded-full px-4 py-1 bg-purple-500/10 uppercase">
            <Cpu size={14} className="text-cyan-400" />
            <span>AI & Systems Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
            Featured <span className="text-gradient-purple-cyan">Engineered Systems</span>
          </h2>
          <p className="text-muted text-base md:text-lg font-sans leading-relaxed">
            Production-grade machine learning models and scalable software platforms engineered with explicit focus on sub-millisecond latency, data privacy, and clean architecture.
          </p>
        </div>

        {/* Vertical Bento Showcase List */}
        <div className="flex flex-col gap-10">
          {projectsData.map((project, i) => (
            <BentoTile
              key={project.id}
              glowColor={i % 2 === 0 ? "purple" : "cyan"}
              cursorLabel={`EXPLORE // ${project.id.toUpperCase()}`}
              className="glass-panel p-8 md:p-12 rounded-[28px] space-y-7 w-full relative group cursor-default"
            >
              {/* Ghost background index number */}
              <div className="absolute right-8 top-4 font-display font-black text-8xl md:text-9xl text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
                0{i + 1}
              </div>

              {/* Project Header Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 relative z-base border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <div className="font-sans text-xs font-semibold text-cyan-400 tracking-wide uppercase flex items-center gap-2">
                    <span>Project 0{i + 1}</span>
                    <span className="text-muted/40">·</span>
                    <span className="text-purple-300">{project.role}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold uppercase tracking-tight text-white pt-1">
                    {project.name}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-2 border border-amber-500/30 text-amber-300 font-sans text-xs font-bold uppercase">
                  <span>Impact:</span>
                  <span className="text-white">{project.narrative.metrics}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted text-base md:text-lg font-sans leading-relaxed max-w-3xl relative z-base">
                {project.description}
              </p>

              {/* High-Fidelity Interactive Project Simulator */}
              <div className="relative z-base">
                <ProjectSimulator projectId={project.id} />
              </div>

              {/* Tech Stack Chips & Action CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10 relative z-base">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-sans font-medium text-muted/90 px-3.5 py-1.5 border border-white/10 bg-surface-2/70 uppercase rounded-xl hover:border-cyan-400/50 hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProject(project.id)}
                  onMouseEnter={() => handleMouseEnter(`View ${project.name}`)}
                  onMouseLeave={handleMouseLeave}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-white border border-purple-500/40 bg-purple-950/40 hover:bg-purple-900/60 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight size={15} className="text-cyan-400" />
                </button>
              </div>
            </BentoTile>
          ))}
        </div>
      </div>

      {/* Slide-out detail drawer overlay */}
      <ProjectDetail />
    </section>
  );
}
