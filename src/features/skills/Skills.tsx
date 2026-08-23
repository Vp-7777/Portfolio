"use client";

import { Code2, Cpu, Database, Globe, Layers, Server, Sparkles, Terminal, Wrench } from "lucide-react";
import { ScrollReveal } from "@/features/motion/ScrollReveal";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    name: "Frontend & Mobile",
    skills: ["React Native", "React.js", "Next.js", "Expo CLI", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    name: "Backend & Microservices",
    skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT Auth", "Python Backend"],
  },
  {
    name: "AI, ML & Computer Vision",
    skills: ["PyTorch", "Computer Vision", "ONNX Runtime", "Generative AI", "MobileNetV3", "Vision Transformers"],
  },
  {
    name: "Database & Architecture",
    skills: ["PostgreSQL", "MySQL", "Supabase", "ACID Transactions", "Relational Schema Design"],
  },
  {
    name: "Cloud & Dev Tools",
    skills: ["Docker", "AWS Cloud", "Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
];

export function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "languages":
        return Code2;
      case "frontend & mobile":
        return Globe;
      case "backend & microservices":
        return Server;
      case "database & architecture":
        return Database;
      case "ai, ml & computer vision":
        return Cpu;
      default:
        return Wrench;
    }
  };

  return (
    <section id="skills" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                CAPABILITIES & STACK
              </span>
              <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
                Technical Capabilities
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
              Verified production engineering toolkit spanning mobile apps, scalable backend microservices, and on-device AI pipelines.
            </p>
          </div>
        </ScrollReveal>

        {/* Categorized Frosted Glass Bento Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.name);

            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                <div className="frosted-card p-6 rounded-none space-y-4 group hover:border-[#A9793C] transition-all h-full flex flex-col justify-between">
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-[rgba(27,23,16,0.1)] pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-[#EEE6D4] border border-[rgba(27,23,16,0.12)] flex items-center justify-center text-[#A9793C] group-hover:border-[#A9793C]">
                        <Icon size={14} />
                      </div>
                      <h3 className="font-display font-medium text-base text-[#1B1710]">
                        {cat.name}
                      </h3>
                    </div>

                    <span className="font-mono text-[10px] text-[#7C5A2C] font-bold bg-[#EEE6D4] px-2 py-0.5 border border-[rgba(27,23,16,0.1)]">
                      {cat.skills.length} TOOLS
                    </span>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="frosted-pill px-3 py-1 font-mono text-xs text-[#5C5344] hover:text-[#1B1710] flex items-center gap-1.5 cursor-default transition-all"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#A9793C]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
