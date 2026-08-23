"use client";

import { ArrowUpRight, Code2, ExternalLink, Link2 } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { ProjectDetail } from "./ProjectDetail";
import { LaptopMockup } from "./LaptopMockup";
import { ScrollReveal } from "@/features/motion/ScrollReveal";

interface ProjectEntry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  live: boolean;
  accentColor: string;
  imageSrc?: string;
}

const projects: ProjectEntry[] = [
  {
    id: "autismind",
    name: "AutisMind-AI",
    tagline: "Edge Diagnostic Machine Learning Platform",
    description:
      "A full-stack diagnostic AI platform pairing an interactive assessment interface with local quantized neural networks (MobileNetV3 + Vision Transformer) over real-time REST APIs.",
    tags: ["REACT", "FASTAPI", "PYTHON", "COMPUTER VISION", "ONNX RUNTIME"],
    githubUrl: "https://github.com/Vp-7777",
    liveUrl: "https://autis-mind-ai.vercel.app/",
    live: true,
    accentColor: "#C5A059",
  },
  {
    id: "prithviq",
    name: "PrithviQ",
    tagline: "Aerial Drone Computer Vision & Geospatial Analytics",
    description:
      "A computer-vision surveillance pipeline trained on drone and smartphone aerial feeds to detect, classify, and quantify plastic waste densities to coordinate municipal cleanups (aligned with UN SDG 12 & 14).",
    tags: ["PYTHON", "PYTORCH", "FASTAPI", "GEO-ANALYTICS", "COMPUTER VISION"],
    githubUrl: "https://github.com/Vp-7777/PrithviQ",
    liveUrl: "https://github.com/Vp-7777/PrithviQ",
    live: false,
    accentColor: "#10B981",
  },
  {
    id: "campuswap",
    name: "CampuSwap",
    tagline: "P2P University Marketplace & Relational Engine",
    description:
      "A full-stack campus marketplace platform for university students to list, browse, and trade items securely, with authenticated JWT sessions and transaction workflows on a PostgreSQL backend.",
    tags: ["REACT.JS", "NODE.JS", "POSTGRESQL", "REST APIS", "JWT AUTH"],
    githubUrl: "https://github.com/Vp-7777/CampuSwap",
    liveUrl: "https://github.com/Vp-7777/CampuSwap",
    live: false,
    accentColor: "#3B82F6",
  },
];

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function Projects() {
  const setActiveProject = useSystemStore((state) => state.setActiveProject);

  return (
    <section id="work" className="relative w-full py-28 sm:py-36 bg-[#08080A] text-[#ECEAE2]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-20">
        
        {/* Exact Reference Centered Massive Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-[5.8rem] text-white tracking-[-0.04em] uppercase leading-none">
              MYPROJECTS
            </h2>

            <p className="font-mono text-xs sm:text-[13px] text-[#A1A1AA] tracking-[0.06em] uppercase max-w-2xl mx-auto leading-relaxed">
              FROM QUANTIZED EDGE ONNX NEURAL NETWORKS TO REAL-TIME COMPUTER VISION PIPELINES — EVERY SYSTEM HERE SOLVES A REAL-WORLD PROBLEM WITH STYLE AND SPEED.
            </p>
          </div>
        </ScrollReveal>

        {/* Reference-Styled Rounded Dark Project Cards */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 140}>
              <div
                onClick={() => setActiveProject(project.id)}
                className="relative rounded-[32px] sm:rounded-[36px] bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-8 sm:p-12 lg:p-14 group cursor-pointer transition-all duration-500 shadow-2xl shadow-black/80 overflow-hidden"
              >
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  
                  {/* Left Column (5.5 cols): Action Buttons, Title, Description, Tech Stack */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    {/* Floating Circular Action Buttons (GitHub + Live) */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full bg-white hover:bg-[#ECEAE2] text-[#0A0A0A] flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-black/60"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-5 h-5 text-[#0A0A0A]" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-12 h-12 rounded-full bg-white hover:bg-[#ECEAE2] text-[#0A0A0A] flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-black/60"
                          title="Live Deployment"
                        >
                          <Link2 size={20} className="text-[#0A0A0A]" />
                        </a>
                      )}

                      {/* Blueprint Trigger */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveProject(project.id);
                        }}
                        className="ml-auto px-4 py-2 bg-[#1C1D26] hover:bg-[#282A38] text-[#C5A059] border border-[#2E3040] rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Blueprint</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </div>

                    {/* Project Title */}
                    <div className="space-y-1.5 pt-2">
                      <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white group-hover:text-[#C5A059] transition-colors leading-[1.1]">
                        {project.name}
                      </h3>
                      <span className="font-mono text-xs text-[#C5A059] font-semibold tracking-wider uppercase block">
                        {project.tagline}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-[1.75] max-w-lg">
                      {project.description}
                    </p>

                    {/* Bold Tech Stack Tags */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-white/10 font-mono text-xs sm:text-[13px] font-bold text-[#ECEAE2] tracking-wider uppercase">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="hover:text-[#C5A059] transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Right Column (6.5 cols): Realistic Laptop Device Screen Frame */}
                  <div className="lg:col-span-6 flex justify-center lg:justify-end">
                    <LaptopMockup
                      projectId={project.id}
                      projectName={project.name}
                      imageSrc={project.imageSrc}
                      accentColor={project.accentColor}
                    />
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Slide-over Architecture Blueprint Drawer */}
      <ProjectDetail />
    </section>
  );
}
