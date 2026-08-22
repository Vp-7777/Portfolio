"use client";

import { useEffect } from "react";
import { CheckCircle2, Code2, ExternalLink, X, Zap } from "lucide-react";
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
      {/* Backdrop */}
      <div
        onClick={() => setActiveProject(null)}
        className="absolute inset-0 bg-[#1B1710]/50 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Slide-over Drawer */}
      <div className="relative w-full max-w-2xl h-full bg-[#F6F1E7] border-l border-[rgba(27,23,16,0.2)] p-6 sm:p-10 overflow-y-auto z-10 shadow-2xl space-y-8 animate-in slide-in-from-right duration-300">
        
        {/* Top Header & Close Button */}
        <div className="flex items-center justify-between border-b border-[rgba(27,23,16,0.15)] pb-5">
          <div className="space-y-0.5">
            <span className="font-mono text-xs font-bold text-[#A9793C] uppercase tracking-wider block">
              ARCHITECTURE SPEC & BLUEPRINT
            </span>
            <span className="font-mono text-xs text-[#9C9280]">
              ID: {project.id.toUpperCase()}
            </span>
          </div>

          <button
            onClick={() => setActiveProject(null)}
            className="p-2 border border-[rgba(27,23,16,0.15)] hover:border-[#A9793C] bg-[#EEE6D4] text-[#1B1710] hover:text-[#7C5A2C] transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Project Title & Tagline */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-[#EEE6D4] text-[#7C5A2C] border border-[rgba(27,23,16,0.12)]">
              {project.role}
            </span>
          </div>

          <h2 className="font-display italic font-normal text-3xl sm:text-4xl text-[#1B1710] leading-tight">
            {project.name}
          </h2>

          <p className="font-sans text-base text-[#5C5344] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Live / Code Action Links */}
        <div className="flex flex-wrap gap-3 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-[#1B1710] hover:bg-[#7C5A2C] text-[#F6F1E7] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Launch Live App</span>
              <ExternalLink size={13} className="text-[#A9793C]" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-[#EEE6D4] hover:bg-[#F6F1E7] text-[#1B1710] border border-[rgba(27,23,16,0.2)] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Code2 size={13} className="text-[#7C5A2C]" />
              <span>Source Repository</span>
            </a>
          )}
        </div>

        {/* Architecture Data Flow Diagram */}
        <div className="space-y-3 pt-4 border-t border-[rgba(27,23,16,0.15)]">
          <span className="font-mono text-xs font-bold text-[#9C9280] uppercase tracking-wider block">
            System Data Flow Diagram
          </span>
          <ArchitectureDiagram projectId={project.id} />
        </div>

        {/* Challenges & Solutions */}
        <div className="space-y-4 pt-4 border-t border-[rgba(27,23,16,0.15)]">
          <span className="font-mono text-xs font-bold text-[#9C9280] uppercase tracking-wider block">
            Engineering Decisions
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#EEE6D4]/50 border border-[rgba(27,23,16,0.15)] space-y-2">
              <span className="font-mono text-xs font-bold text-[#6E2A34] uppercase tracking-wider flex items-center gap-1.5">
                <Zap size={12} />
                Core Bottleneck
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#5C5344] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 bg-[#EEE6D4]/50 border border-[rgba(27,23,16,0.15)] space-y-2">
              <span className="font-mono text-xs font-bold text-[#7C5A2C] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 size={12} />
                Architectural Solution
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#5C5344] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-3 pt-4 border-t border-[rgba(27,23,16,0.15)]">
          <span className="font-mono text-xs font-bold text-[#9C9280] uppercase tracking-wider block">
            Complete Stack & Dependencies
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-[#5C5344] bg-[#EEE6D4] border border-[rgba(27,23,16,0.12)] px-3 py-1"
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
