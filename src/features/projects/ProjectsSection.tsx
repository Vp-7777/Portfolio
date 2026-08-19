"use client";

import { useState } from "react";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Cpu,
  Activity,
  Database,
  Code2,
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { ProjectDetail } from "./ProjectDetail";
import projectsData from "@/lib/content/projects.json";

function GitHubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("autismind");
  const setActiveProject = useSystemStore((state) => state.setActiveProject);

  return (
    <section
      data-chapter="projects"
      className="relative w-full py-28 px-6 sm:px-10 lg:px-12 bg-[#090d16] bg-dark-grid"
    >
      {/* Background Radial Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-xs">
            <Sparkles size={13} className="text-indigo-400" />
            <span className="font-sans text-xs font-bold text-slate-200 uppercase tracking-wider">
              Featured Software Systems
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white">
            Case Studies & <br className="hidden sm:inline" />
            <span className="text-brand-gradient">Engineered Deployments</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Real-world production systems spanning on-device medical diagnostic ML, multi-angle drone computer vision, and relational ACID-compliant marketplaces.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {projectsData.map((project, idx) => {
            const isActive = activeTab === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`p-5 rounded-3xl text-left transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-[#111827] border-indigo-500/50 shadow-xl shadow-indigo-600/15"
                    : "bg-[#111827]/60 border-white/10 hover:border-white/20 hover:bg-[#111827]/90"
                }`}
              >
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <span className="text-indigo-400 font-bold">0{idx + 1}</span>
                  {isActive && (
                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[10px] font-semibold">
                      Active Spread
                    </span>
                  )}
                </div>
                <h3 className="font-sans font-bold text-base text-white">
                  {project.name}
                </h3>
                <p className="font-sans text-xs text-slate-400 mt-1 line-clamp-1">
                  {project.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Project Bento Spread */}
        {projectsData.map((project) => {
          if (project.id !== activeTab) return null;

          return (
            <div
              key={project.id}
              className="bento-card p-7 sm:p-10 lg:p-12 space-y-10 border border-white/15"
            >
              {/* Top Card Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-wider">
                      {project.role}
                    </span>
                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-semibold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Production App
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-white">
                    {project.name} — {project.tagline}
                  </h3>
                </div>

                {/* Top Action Suite */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-md shadow-indigo-600/30 hover:scale-105 transition-all cursor-pointer"
                    >
                      <ExternalLink size={13} />
                      <span>Launch Live App</span>
                      <ArrowUpRight size={12} className="opacity-70" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-sans font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 transition-all cursor-pointer"
                  >
                    <GitHubIcon className="w-3.5 h-3.5 text-slate-200" />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => setActiveProject(project.id)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-sans font-semibold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 transition-all cursor-pointer hover:scale-105"
                  >
                    <Layers size={13} />
                    <span>Inspect Blueprint</span>
                  </button>
                </div>
              </div>

              {/* Description & Narrative */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl font-sans">
                {project.description}
              </p>

              {/* Challenge vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#090d16]/90 border border-white/10 space-y-2">
                  <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Engineering Challenge
                  </span>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {project.narrative.problem}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#090d16]/90 border border-indigo-500/30 space-y-2">
                  <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    Architectural Solution
                  </span>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {project.narrative.architecture}
                  </p>
                </div>
              </div>

              {/* Live Spec & Metric Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-slate-400 text-[11px] block">Verified Latency</span>
                  <span className="text-emerald-400 font-bold text-base">
                    {project.id === "autismind" ? "14.2 ms (Local Edge CPU)" : project.id === "prithviq" ? "120 FPS (Drone Ingestion)" : "2.1 ms (Postgres ACID)"}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-slate-400 text-[11px] block">Core Impact Metric</span>
                  <span className="text-indigo-400 font-bold text-base">
                    {project.narrative.metrics}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-slate-400 text-[11px] block">Execution Environment</span>
                  <span className="text-white font-bold text-base">
                    {project.id === "autismind" ? "100% On-Device ONNX" : project.id === "prithviq" ? "UN SDG 12/14 Aligned" : "Strict ACID Isolation"}
                  </span>
                </div>
              </div>

              {/* Technology Chips */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                  Core Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl font-mono text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-indigo-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          );
        })}

      </div>

      {/* Slide-Over Blueprint Modal Drawer */}
      <ProjectDetail />
    </section>
  );
}
