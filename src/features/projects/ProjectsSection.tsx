"use client";

import { useRef } from "react";
import { View } from "@react-three/drei";
import { useSystemStore } from "@/store/useSystemStore";
import { ProjectsScene } from "./ProjectsScene";
import { Button } from "@/features/ui/Button";
import { ProjectDetail } from "./ProjectDetail";
import { BentoTile } from "@/features/ui/BentoTile";
import { ProjectSimulator } from "./ProjectSimulator";
import projectsData from "@/lib/content/projects.json";

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const setActiveProject = useSystemStore((state) => state.setActiveProject);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const fadeRef = useRef({ val: 0 });

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
      className="relative w-full bg-background text-foreground border-t border-border-subtle py-16 md:py-24 overflow-hidden"
    >
      {/* 3D Background Ported Viewport */}
      <div className="absolute inset-0 z-base pointer-events-none flex items-center justify-center opacity-20 mix-blend-screen">
        <div className="absolute w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw]">
          <View className="w-full h-full">
            <ProjectsScene fadeRef={fadeRef} />
          </View>
        </div>
      </div>

      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full bg-purple-700 opacity-10 blur-[180px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-cyan-700 opacity-10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-14 relative z-hover space-y-12">

        {/* Section Header */}
        <div className="space-y-4 max-w-2xl select-none">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-purple-300 tracking-wide border border-purple-500/30 rounded-full px-3.5 py-1 bg-purple-500/10 uppercase">
            Featured Projects
          </div>
          <h2
            className="font-display font-extrabold uppercase tracking-tight leading-none"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ENGINEERED{" "}
            <span
              className="italic font-light"
              style={{
                background: "linear-gradient(135deg, #c084fc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SYSTEMS
            </span>
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-md font-sans">
            Production-ready applications and machine learning engines built with explicit privacy,
            low latency, and systemic architecture in mind.
          </p>
        </div>

        {/* Projects Showcase Cards Vertical Layout */}
        <div className="space-y-8">
          {projectsData.map((project, i) => (
            <BentoTile
              key={project.id}
              glowColor={i % 2 === 0 ? "purple" : "cyan"}
              cursorLabel={`EXPLORE // ${project.id.toUpperCase()}`}
              className="spotlight-card p-8 md:p-12 rounded-2xl space-y-6 w-full relative group cursor-default"
            >
              {/* Ghost background index number */}
              <div className="absolute right-8 top-4 font-display font-black text-8xl md:text-9xl text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
                0{i + 1}
              </div>

              {/* Project Title & Role */}
              <div className="space-y-2 relative z-base">
                <div className="font-mono text-[10px] text-muted tracking-widest uppercase flex items-center gap-2">
                  <span className="text-cyan-400">PROJECT 0{i + 1}</span>
                  <span className="text-muted/40">//</span>
                  <span>{project.role}</span>
                </div>
                <h3
                  className="font-display font-extrabold uppercase tracking-tight leading-none"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                    background: "linear-gradient(135deg, #ffffff 0%, #c084fc 60%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {project.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted text-base md:text-lg font-sans leading-relaxed max-w-3xl relative z-base">
                {project.description}
              </p>

              {/* Interactive Simulator */}
              <ProjectSimulator projectId={project.id} />

              {/* Metrics Badge & Tech Tags Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border-subtle/50 relative z-base">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-2/80 border border-amber-500/30 text-amber-300 font-sans text-xs font-bold uppercase">
                  <span>Key Metric:</span>
                  <span className="text-white">{project.narrative.metrics}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-sans font-medium text-muted px-3 py-1.5 border border-border-subtle/60 bg-surface-2/60 uppercase rounded-lg hover:border-cyan-400/50 hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 relative z-base">
                <Button
                  onClick={() => setActiveProject(project.id)}
                  onMouseEnter={() => handleMouseEnter(`OPEN // ${project.id.toUpperCase()}`)}
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer"
                >
                  Explore System Architecture
                </Button>
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
