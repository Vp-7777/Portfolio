"use client";

import { useRef } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import { ProjectDetail } from "./ProjectDetail";
import { BentoTile } from "@/features/ui/BentoTile";
import projectsData from "@/lib/content/projects.json";
import { Cpu, ArrowUpRight, ShieldCheck, Zap, Layers, CheckCircle2, Globe } from "lucide-react";

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
            <span>Featured Technical Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
            Engineered <span className="text-gradient-purple-cyan">Systems</span>
          </h2>
          <p className="text-muted text-base md:text-lg font-sans leading-relaxed">
            Real-world systems, machine learning architectures, and scalable software platforms engineered with focus on performance, data privacy, and clean system design.
          </p>
        </div>

        {/* Vertical Bento Showcase List */}
        <div className="flex flex-col gap-10">
          {projectsData.map((project, i) => (
            <BentoTile
              key={project.id}
              glowColor={i % 2 === 0 ? "purple" : "cyan"}
              cursorLabel={`EXPLORE // ${project.id.toUpperCase()}`}
              className="glass-panel p-8 sm:p-10 md:p-12 rounded-[28px] space-y-7 w-full relative group cursor-default"
            >
              {/* Ghost background index number */}
              <div className="absolute right-8 top-4 font-display font-black text-8xl md:text-9xl text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
                0{i + 1}
              </div>

              {/* Project Header Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 relative z-base border-b border-white/10 pb-5">
                <div className="space-y-1">
                  <div className="font-sans text-xs font-semibold text-cyan-400 tracking-wide uppercase flex items-center gap-2">
                    <span>Project 0{i + 1}</span>
                    <span className="text-muted/40">·</span>
                    <span className="text-purple-300">{project.role}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold uppercase tracking-tight text-white pt-1">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-semibold text-cyan-300">
                    {project.tagline}
                  </p>
                </div>

                {/* Direct Action Link Pills (Live Demo / GitHub) */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => handleMouseEnter("Live Demo")}
                      onMouseLeave={handleMouseLeave}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-sans text-xs font-bold uppercase hover:bg-emerald-900/80 transition-colors"
                    >
                      <Globe size={13} className="text-emerald-400" />
                      <span>Live App</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => handleMouseEnter("GitHub Repo")}
                      onMouseLeave={handleMouseLeave}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-950/70 border border-purple-500/40 text-purple-300 font-sans text-xs font-bold uppercase hover:bg-purple-900/80 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>GitHub</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Tagline / Overview */}
              <p className="text-white font-medium text-base sm:text-lg font-sans leading-relaxed max-w-3xl relative z-base">
                {project.description}
              </p>

              {/* Two-Column Engineering Dossier (Challenge vs Architecture Solution) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-base font-sans text-xs">
                
                {/* The Engineering Challenge */}
                <div className="p-5 rounded-2xl bg-surface-2/70 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-purple-300 font-bold uppercase tracking-wide">
                    <ShieldCheck size={15} className="text-purple-400" />
                    <span>The Engineering Challenge</span>
                  </div>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* The Architecture Solution */}
                <div className="p-5 rounded-2xl bg-surface-2/70 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold uppercase tracking-wide">
                    <CheckCircle2 size={15} className="text-cyan-400" />
                    <span>The Architectural Solution</span>
                  </div>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>

              </div>

              {/* Tech Stack Chips & Action CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10 relative z-base">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-sans font-medium text-muted/90 px-3.5 py-1.5 border border-white/10 bg-surface-2/90 uppercase rounded-xl hover:border-cyan-400/50 hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProject(project.id)}
                  onMouseEnter={() => handleMouseEnter(`View ${project.name} Architecture`)}
                  onMouseLeave={handleMouseLeave}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-white border border-purple-500/40 bg-purple-950/40 hover:bg-purple-900/60 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <span>System Architecture Details</span>
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
