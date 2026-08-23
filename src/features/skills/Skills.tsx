"use client";

import { useState } from "react";
import { Code2, Cpu, Database, Globe, Layers, Server, Sparkles, Terminal, Wrench } from "lucide-react";
import { ScrollReveal } from "@/features/motion/ScrollReveal";
import { MobileDeviceMockup } from "./MobileDeviceMockup";
import { ServerTerminalMockup } from "./ServerTerminalMockup";

interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    id: "frontend",
    name: "Frontend & Mobile",
    skills: ["React Native", "React.js", "Next.js", "Expo CLI", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    name: "Backend & Microservices",
    skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT Auth", "Python Backend"],
  },
  {
    id: "ai",
    name: "AI & Computer Vision",
    skills: ["PyTorch", "Computer Vision", "ONNX Runtime", "Generative AI", "MobileNetV3", "Vision Transformers"],
  },
  {
    id: "database",
    name: "Database & Architecture",
    skills: ["PostgreSQL", "MySQL", "Supabase", "ACID Transactions", "Relational Schemas"],
  },
  {
    id: "cloud",
    name: "Cloud & Dev Tools",
    skills: ["Docker", "AWS Cloud", "Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
];

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredCategories =
    selectedFilter === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedFilter);

  return (
    <section id="skills" className="relative w-full py-28 sm:py-36 bg-[#08080A] text-[#ECEAE2]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-20">
        
        {/* Exact Reference Centered Massive Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-[5.8rem] text-white tracking-[-0.04em] uppercase leading-none">
              CAPABILITIES
            </h2>

            <p className="font-mono text-xs sm:text-[13px] text-[#A1A1AA] tracking-[0.06em] uppercase max-w-2xl mx-auto leading-relaxed">
              FROM LOCAL ON-DEVICE NEURAL RUNTIMES TO NATIVE MOBILE APPLICATIONS AND SCALABLE CLOUD-SCALE MICROSERVICES.
            </p>
          </div>
        </ScrollReveal>

        {/* Creative Dual Interactive Hardware Showcase */}
        <ScrollReveal direction="up" delay={150}>
          <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#12131A]/95 border border-[#222430] p-8 sm:p-12 lg:p-14 shadow-2xl shadow-black/80">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column (5 cols): Interactive Smartphone Frame (Mobile & Frontend) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
                <div className="text-center space-y-1">
                  <span className="font-mono text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                    ON-DEVICE CLIENT HARDWARE
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Native Mobile & Web UI
                  </h3>
                </div>

                <MobileDeviceMockup />
              </div>

              {/* Right Column (7 cols): Interactive Server Terminal Blade (AI & Backend) */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                <div className="text-left space-y-1">
                  <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-wider block">
                    SERVER RUNTIME & INFERENCE ENGINE
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    FastAPI, ONNX INT8 & PyTorch
                  </h3>
                </div>

                <ServerTerminalMockup />
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* Filterable Categorized Stack Bento Grid */}
        <div className="space-y-8">
          
          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
            {[
              { id: "all", label: "All Stack" },
              { id: "languages", label: "Languages" },
              { id: "frontend", label: "Mobile & UI" },
              { id: "backend", label: "Backend" },
              { id: "ai", label: "AI & Vision" },
              { id: "database", label: "Database" },
              { id: "cloud", label: "Cloud & DevOps" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? "bg-white text-black font-bold border-white shadow-lg"
                    : "bg-[#161720] text-[#A1A1AA] border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat, idx) => (
              <ScrollReveal key={cat.id} direction="up" delay={idx * 70}>
                <div className="rounded-2xl bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-6 space-y-4 group transition-all duration-300 h-full flex flex-col justify-between">
                  
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-[#C5A059] transition-colors">
                      {cat.name}
                    </h4>
                    <span className="font-mono text-[10px] text-[#C5A059] font-bold bg-[#1A1815] px-2.5 py-0.5 rounded-full border border-[#C5A059]/30">
                      {cat.skills.length} Tools
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-xs font-medium text-[#A1A1AA] bg-[#161720] hover:bg-[#20222E] hover:text-white border border-white/10 px-3 py-1.5 rounded-lg transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
