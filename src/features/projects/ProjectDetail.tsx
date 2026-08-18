"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { useSystemStore } from "@/store/useSystemStore";
import { X, Layers } from "lucide-react";
import projectsData from "@/lib/content/projects.json";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import gsap from "gsap";

export function ProjectDetail() {
  const activeProject = useSystemStore((state) => state.activeProject);
  const setActiveProject = useSystemStore((state) => state.setActiveProject);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const reducedMotion = useSystemStore((state) => state.reducedMotion);

  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // Find the selected project from static data
  const project = projectsData.find((p) => p.id === activeProject);

  // Lock scrolling when the details panel is active
  useEffect(() => {
    if (activeProject) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      lenis?.start();
    };
  }, [activeProject, lenis]);

  // Entrance animations for the drawer
  useEffect(() => {
    if (!activeProject || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        drawerRef.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.4, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
      );
    });

    return () => ctx.revert();
  }, [activeProject, reducedMotion]);

  const handleClose = () => {
    if (reducedMotion) {
      setActiveProject(null);
      return;
    }
    
    gsap.to(drawerRef.current, {
      xPercent: 100,
      duration: 0.3,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      onComplete: () => setActiveProject(null),
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.inOut",
    });
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-nav flex justify-end overflow-hidden">
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
        style={{ opacity: reducedMotion ? 1 : undefined }}
      />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="relative w-full max-w-2xl bg-white border-l border-slate-200 h-full shadow-2xl z-base p-8 md:p-12 overflow-y-auto flex flex-col justify-between"
        style={{ transform: reducedMotion ? "translateX(0)" : undefined }}
      >
        <div className="space-y-8">
          
          {/* Top telemetry and close */}
          <div className="flex justify-between items-center font-mono text-xs text-ink-muted font-medium uppercase tracking-wider">
            <span className="text-indigo-brand font-bold flex items-center gap-1.5">
              <Layers size={14} />
              Architecture Blueprint · {project.name}
            </span>
            <button 
              onClick={handleClose}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-colors cursor-pointer text-xs text-ink"
            >
              <span>Close</span>
              <X size={14} />
            </button>
          </div>

          {/* Heading */}
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <h3 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
              {project.name}
            </h3>
            <p className="font-sans text-xs font-semibold text-indigo-brand uppercase tracking-wide">
              {project.role} · {project.tagline}
            </p>
          </div>

          {/* Details sections */}
          <div className="space-y-7 font-sans text-sm md:text-base leading-relaxed text-ink-secondary">
            
            {/* The Problem */}
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block">
                01 · The Engineering Problem
              </span>
              <p className="text-ink-secondary leading-relaxed">{project.narrative.problem}</p>
            </div>

            {/* Architecture Diagram */}
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block">
                02 · System Architecture Blueprint
              </span>
              <ArchitectureDiagram projectId={project.id} />
              <div className="bg-slate-50 border border-slate-200 p-4 font-sans text-xs text-ink rounded-2xl leading-relaxed">
                {project.narrative.architecture}
              </div>
            </div>

            {/* Engineering Decisions */}
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block">
                03 · Technical Trade-offs & Decisions
              </span>
              <p className="text-ink-secondary leading-relaxed">{project.narrative.decisions}</p>
            </div>

          </div>

        </div>

        {/* Footer Metrics Panel */}
        <div className="pt-6 mt-8 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block">
              Measured Milestone
            </span>
            <div className="font-sans text-sm font-bold text-emerald-brand uppercase">
              {project.narrative.metrics}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 font-mono text-[11px] border border-slate-200 bg-slate-50 text-ink uppercase rounded-lg"
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
