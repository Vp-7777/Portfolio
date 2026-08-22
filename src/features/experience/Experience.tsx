"use client";

interface ExperienceItem {
  id: string;
  date: string;
  role: string;
  company: string;
  description: string;
  current: boolean;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "qraptor",
    date: "FEB 2026 — PRESENT",
    role: "AI Engineering Intern",
    company: "QRaptor",
    description:
      "Engineered AI-powered backend microservices and intelligent automation modules for full-stack web applications. Developed high-throughput REST APIs and scalable data processing pipelines in an Agile sprint environment.",
    current: true,
    technologies: ["Python", "FastAPI", "Machine Learning", "REST APIs", "Data Pipelines"],
  },
  {
    id: "rideabit",
    date: "JUN 2026 — PRESENT",
    role: "Software Engineering Intern",
    company: "RideAbit",
    description:
      "Building and shipping cross-platform mobile features using React Native and Expo for a live ride-sharing platform. Active in feature branching, end-to-end integration, performance tuning, and peer code reviews.",
    current: true,
    technologies: ["React Native", "Expo", "TypeScript", "JavaScript", "Mobile Dev", "Git"],
  },
  {
    id: "bny",
    date: "2026",
    role: "Participant",
    company: "BNY Spectrum Program (BNY Mellon)",
    description:
      "Enterprise FinTech, distributed agile software engineering workflows, and financial technology architecture exposure.",
    current: false,
    technologies: ["Enterprise FinTech", "Agile Software", "Cloud Systems"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#9C9280] tracking-[0.08em] uppercase block">
              EXPERIENCE
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
              Production & Internships
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
            Chronological record of commercial software engineering internships and enterprise programs.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-[rgba(27,23,16,0.18)] space-y-12 sm:space-y-16">
          {experiences.map((item) => (
            <div key={item.id} className="relative group space-y-3">
              
              {/* Timeline Status Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex items-center justify-center">
                {item.current ? (
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A9793C] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#A9793C] border-2 border-[#F6F1E7]" />
                  </span>
                ) : (
                  <span className="inline-flex rounded-full h-3 w-3 bg-[#9C9280] border-2 border-[#F6F1E7]" />
                )}
              </div>

              {/* Date Eyebrow */}
              <div className="font-mono text-xs font-bold text-[#9C9280] tracking-wider uppercase">
                {item.date}
              </div>

              {/* Role & Company Header */}
              <h3 className="font-display font-normal text-xl sm:text-2xl text-[#1B1710] group-hover:text-[#7C5A2C] transition-colors">
                {item.role} — <span className="italic">{item.company}</span>
              </h3>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-[#5C5344] leading-[1.65] max-w-3xl">
                {item.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-[#5C5344] bg-[#EEE6D4] border border-[rgba(27,23,16,0.12)] px-2.5 py-0.5 rounded-none"
                  >
                    {tech}
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
