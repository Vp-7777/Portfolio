"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { useSystemStore } from "@/store/useSystemStore";
import { X } from "lucide-react";
import projectsData from "@/lib/content/projects.json";
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
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(
        drawerRef.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.6, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
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
      duration: 0.5,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      onComplete: () => setActiveProject(null),
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.4,
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
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        style={{ opacity: reducedMotion ? 1 : undefined }}
      />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="relative w-full max-w-2xl bg-surface-1 border-l border-border-subtle h-full shadow-2xl z-base p-8 md:p-12 overflow-y-auto flex flex-col justify-between"
        style={{ transform: reducedMotion ? "translateX(0)" : undefined }}
      >
        <div className="space-y-8">
          
          {/* Top telemetry and close */}
          <div className="flex justify-between items-center font-mono text-[10px] text-muted tracking-widest uppercase">
            <span>PROJECT ID // {project.id.toUpperCase()}</span>
            <button 
              onClick={handleClose}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              className="flex items-center gap-2 hover:text-accent focus:outline-none cursor-pointer"
            >
              [ CLOSE ] <X size={12} className="inline" />
            </button>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h3 className="font-display text-4xl md:text-5xl uppercase font-normal tracking-tight">
              {project.name}
            </h3>
            <p className="font-mono text-xs text-accent uppercase tracking-widest">
              ROLE // {project.role}
            </p>
          </div>

          {/* Details sections */}
          <div className="space-y-6 pt-6 border-t border-border-subtle/50 font-sans text-sm md:text-base leading-relaxed text-muted">
            
            <div className="space-y-2">
              <span className="font-mono text-xs text-foreground uppercase tracking-widest block">
                01 // THE CHALLENGE
              </span>
              <p className="text-foreground">{project.challenge}</p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-foreground uppercase tracking-widest block">
                02 // THE ARCHITECTURE
              </span>
              <p>{project.narrative.problem}</p>
              <div className="bg-surface-2 border border-border-subtle p-4 font-mono text-xs text-accent rounded-sm uppercase tracking-wide my-4">
                {project.narrative.architecture}
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-foreground uppercase tracking-widest block">
                03 // ENGINEERING DECISIONS
              </span>
              <p>{project.narrative.decisions}</p>
            </div>

          </div>

        </div>

        {/* Footer Metrics Panel */}
        <div className="pt-8 mt-8 border-t border-border-subtle/50 flex justify-between items-end">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-muted tracking-widest block uppercase">
              STATUS: CALIBRATED
            </span>
            <div className="font-mono text-lg font-bold text-accent uppercase">
              {project.narrative.metrics}
            </div>
          </div>
          <div className="flex gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 font-mono text-[9px] border border-border-subtle text-muted uppercase rounded-sm"
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
