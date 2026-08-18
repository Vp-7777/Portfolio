"use client";

import { useState } from "react";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  Shield,
  Activity,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { ProjectSimulator } from "./ProjectSimulator";
import { ProjectDetail } from "./ProjectDetail";
import projectsData from "@/lib/content/projects.json";

export function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("autismind");
  const setActiveProject = useSystemStore((state) => state.setActiveProject);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const selectedProject =
    projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];

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
      data-chapter="projects"
      className="relative w-full min-h-screen bg-canvas py-28 sm:py-36 px-6 sm:px-10 lg:px-12 overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto relative z-base space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-white shadow-xs">
            <Layers size={13} className="text-indigo-brand" />
            <span className="font-mono text-xs font-bold text-ink-muted uppercase tracking-wider">
              Featured Software Systems
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-ink leading-tight">
            Case Studies & <br />
            <span className="text-indigo-gradient">
              Engineered Deployments
            </span>
          </h2>

          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-sans">
            Real-world systems spanning on-device medical diagnostic ML, multi-angle drone computer vision, and relational ACID-compliant marketplaces.
          </p>
        </div>

        {/* Interactive Project Switcher Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectsData.map((project, idx) => {
            const isSelected = selectedProjectId === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                onMouseEnter={() => handleMouseEnter(`Switch // ${project.name}`)}
                onMouseLeave={handleMouseLeave}
                className={`p-6 rounded-3xl text-left transition-all duration-200 relative overflow-hidden cursor-pointer border ${
                  isSelected
                    ? "bg-white border-indigo-400 shadow-md translate-y-[-2px]"
                    : "bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-indigo-brand">
                    0{idx + 1}
                  </span>
                  {isSelected && (
                    <span className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-brand bg-emerald-light border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-brand" />
                      Active Spread
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-sans font-bold text-ink mb-1">
                  {project.name}
                </h3>
                <p className="text-xs text-ink-muted font-sans line-clamp-2">
                  {project.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Project Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Narrative & Direct Action Links */}
          <div className="lg:col-span-7 space-y-6">
            <div className="studio-card p-8 sm:p-10 space-y-6 bg-white">
              
              {/* Top Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs font-semibold text-ink">
                  {selectedProject.role}
                </span>
                {selectedProject.liveUrl && (
                  <span className="px-3 py-1 rounded-xl bg-emerald-light border border-emerald-200 font-mono text-xs font-semibold text-emerald-brand flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-brand" />
                    Live Production App
                  </span>
                )}
              </div>

              {/* Title & Detailed Narrative */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-ink">
                  {selectedProject.name} — {selectedProject.tagline}
                </h3>
                <p className="text-ink-secondary text-sm sm:text-base leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {/* Challenge & Solution Bento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-indigo-950 font-mono font-bold uppercase tracking-wider block">
                    Engineering Challenge
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-indigo-brand font-mono font-bold uppercase tracking-wider block">
                    Architectural Solution
                  </span>
                  <p className="text-ink-secondary leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-medium text-ink-muted uppercase tracking-wider block">
                  Core Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-slate-100">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => handleMouseEnter(`Launch ${selectedProject.name}`)}
                    onMouseLeave={handleMouseLeave}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-indigo-brand hover:bg-indigo-hover hover:scale-[1.02] transition-all cursor-pointer shadow-sm"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => handleMouseEnter("View GitHub Repo")}
                    onMouseLeave={handleMouseLeave}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all cursor-pointer shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>Source Code</span>
                  </a>
                )}

                <button
                  onClick={() => setActiveProject(selectedProject.id)}
                  onMouseEnter={() => handleMouseEnter("Inspect Architecture Blueprint")}
                  onMouseLeave={handleMouseLeave}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-indigo-brand bg-indigo-light hover:bg-indigo-50 border border-indigo-200 transition-all cursor-pointer"
                >
                  <Layers size={14} className="text-indigo-brand" />
                  <span>Inspect Blueprint</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Technical Blueprint Simulator Component */}
          <div className="lg:col-span-5">
            <ProjectSimulator projectId={selectedProject.id} />
          </div>

        </div>

      </div>

      {/* Blueprint Detail Drawer Modal */}
      <ProjectDetail />
    </section>
  );
}
