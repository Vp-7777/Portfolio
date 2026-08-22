"use client";

interface SkillCategory {
  category: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "LANGUAGES",
    items: ["Java", "Python", "C++", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    category: "FRONTEND",
    items: ["React Native", "React.js", "Next.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Python Backend"],
  },
  {
    category: "DATABASE",
    items: ["PostgreSQL", "MySQL", "Supabase", "ACID Transactions", "Schema Design"],
  },
  {
    category: "TOOLS & DEVOPS",
    items: ["Git", "GitHub", "Vercel", "Docker", "VS Code", "Figma", "Expo CLI"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#9C9280] tracking-[0.08em] uppercase block">
              SKILLS
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
              Technical Capabilities
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
            Verified toolkit spanning mobile engineering, distributed backend microservices, and AI pipelines.
          </p>
        </div>

        {/* Grouped Pill Tags Matrix */}
        <div className="divide-y divide-[rgba(27,23,16,0.15)] border-y border-[rgba(27,23,16,0.15)]">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Left Column: Category Label (3.5 cols) */}
              <div className="md:col-span-4">
                <span className="font-mono text-xs font-bold text-[#9C9280] tracking-[0.1em] uppercase">
                  {group.category}
                </span>
              </div>

              {/* Right Column: Pill Tags (8.5 cols) */}
              <div className="md:col-span-8 flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-[#5C5344] hover:text-[#1B1710] bg-[#EEE6D4] hover:bg-[#F6F1E7] border border-[rgba(27,23,16,0.15)] hover:border-[#A9793C] px-3.5 py-1.5 rounded-none transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
