"use client";

import { useEffect } from "react";
import { CheckCircle2, Code2, ExternalLink, ShieldCheck, X, Zap } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import projectsData from "@/lib/content/projects.json";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function ProjectDetail() {
  const activeProject = useSystemStore((state) => state.activeProject);
  const setActiveProject = useSystemStore((state) => state.setActiveProject);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };

    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject, setActiveProject]);

  if (!activeProject) return null;

  const project = projectsData.find((p) => p.id === activeProject);
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Dark Ambient Backdrop */}
      <div
        onClick={() => setActiveProject(null)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Slide-over Blueprint Drawer */}
      <div className="relative w-full max-w-2xl h-full bg-[#0B0B0E] border-l border-[#222430] p-6 sm:p-10 overflow-y-auto z-10 shadow-2xl space-y-8 animate-in slide-in-from-right duration-300 text-[#ECEAE2]">
        
        {/* Top Header & Close Button */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-[#C5A059] tracking-wider uppercase block">
              SYSTEM BLUEPRINT SPEC
            </span>
            <span className="font-mono text-xs text-[#8C887B]">
              IDENTIFIER: {project.id.toUpperCase()} // PRODUCTION
            </span>
          </div>

          <button
            onClick={() => setActiveProject(null)}
            className="p-2.5 rounded-full border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Project Title & Narrative */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-semibold px-3 py-1 bg-[#1A1815] text-[#C5A059] border border-[#C5A059]/30 rounded-full">
              {project.role}
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            {project.name}
          </h2>

          <p className="font-sans text-base text-[#A1A1AA] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Live App & Repo Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-white hover:bg-[#ECEAE2] text-black rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-black/50 cursor-pointer"
            >
              <span>Launch Live App</span>
              <ExternalLink size={14} className="text-black" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#161720] hover:bg-[#20222E] text-white border border-white/10 hover:border-white/30 rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Code2 size={14} className="text-[#C5A059]" />
              <span>Source Repository</span>
            </a>
          )}
        </div>

        {/* Architecture Data Flow Diagram */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <span className="font-mono text-xs font-bold text-[#8C887B] uppercase tracking-wider block">
            System Data Flow Diagram
          </span>
          <ArchitectureDiagram projectId={project.id} />
        </div>

        {/* Engineering Decisions & Bottlenecks */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <span className="font-mono text-xs font-bold text-[#8C887B] uppercase tracking-wider block">
            Engineering Decisions & Bottlenecks
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#141215] border border-red-500/20 space-y-2">
              <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <Zap size={13} />
                Core Bottleneck
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121614] border border-emerald-500/20 space-y-2">
              <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 size={13} />
                Architectural Solution
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <span className="font-mono text-xs font-bold text-[#8C887B] uppercase tracking-wider block">
            Complete Stack & Dependencies
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs font-bold text-[#A1A1AA] bg-[#161720] border border-white/10 px-3.5 py-1.5 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
