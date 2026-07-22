"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import { useSystemStore } from "@/store/useSystemStore";
import { ProjectsScene } from "./ProjectsScene";
import { Button } from "@/features/ui/Button";
import { ProjectDetail } from "./ProjectDetail";
import projectsData from "@/lib/content/projects.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const setActiveProject = useSystemStore((state) => state.setActiveProject);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const reducedMotion = useSystemStore((state) => state.reducedMotion);

  const fadeRef = useRef({ val: 0 });

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const scrollAmount = trackRef.current!.scrollWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollAmount}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.to(fadeRef.current, {
        val: projectsData.length - 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollAmount}`,
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

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
      className="relative w-full bg-background overflow-hidden text-foreground border-t border-border-subtle"
    >
      {/* 3D Background Ported Viewport */}
      <div className="absolute inset-0 z-base pointer-events-none flex items-center justify-center opacity-25 mix-blend-screen">
        <div className="absolute w-[70vw] h-[70vw] md:w-[48vw] md:h-[48vw]">
          <View className="w-full h-full">
            <ProjectsScene fadeRef={fadeRef} />
          </View>
        </div>
      </div>

      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full bg-purple-700 opacity-10 blur-[180px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-indigo-700 opacity-10 blur-[150px]" />
      </div>

      {/* Pinned horizontal scroller track */}
      <div
        ref={trackRef}
        className={`relative z-hover flex h-screen items-center ${
          reducedMotion ? "flex-col h-auto px-6 py-24 space-y-32 w-full" : ""
        }`}
        style={{ width: reducedMotion ? "100%" : `${projectsData.length * 100}vw` }}
      >
        {projectsData.map((project, i) => (
          <div
            key={project.id}
            className={`h-full flex flex-col justify-center px-6 md:px-24 flex-shrink-0 ${
              reducedMotion ? "w-full h-auto" : "w-screen"
            }`}
          >
            {/* Project header above card */}
            <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-4 select-none">
              [ CH.04 // PRODUCTS ] <span className="text-accent ml-4">◆ PROJECT {String(i + 1).padStart(2, "0")} OF {projectsData.length}</span>
            </div>

            {/* Spotlight blueprint card */}
            <div
              onMouseMove={handleMouseMove}
              className="spotlight-card p-8 md:p-12 rounded-2xl space-y-7 max-w-4xl w-full relative group cursor-default transition-all duration-300 hover:border-purple-700/50"
              style={{
                boxShadow: "0 8px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(168,85,247,0.05)",
              }}
            >
              {/* Card top highlight */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent rounded" />

              {/* Project title */}
              <h2
                className="font-display font-extrabold uppercase tracking-tight leading-none relative z-base"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                  background: "linear-gradient(135deg, #ffffff 0%, #c084fc 55%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {project.name}
              </h2>

              <p className="text-muted text-base md:text-lg font-sans leading-relaxed max-w-2xl relative z-base">
                {project.description}
              </p>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 relative z-base">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono text-muted/80 px-3 py-1.5 border border-border-subtle/60 bg-surface-2/60 uppercase rounded-lg hover:border-purple-600/50 hover:text-foreground transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
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

              {/* Bottom ambient glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/40 transition-all duration-500 rounded-b-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Slide-out detail drawer overlay */}
      <ProjectDetail />
    </section>
  );
}
