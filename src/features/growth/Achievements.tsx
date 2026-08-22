"use client";

interface AchievementItem {
  title: string;
  organization: string;
  period: string;
  type: string;
}

const achievements: AchievementItem[] = [
  {
    title: "Top 20 Finalist (257+ Teams)",
    organization: "QRaptors National Hackathon",
    period: "2026",
    type: "National Hackathon",
  },
  {
    title: "Top 20 Finalist",
    organization: "Ashna AI Agent Hackathon",
    period: "2026",
    type: "AI Hackathon",
  },
  {
    title: "Organizer & Mentor",
    organization: "Team SRM Hackathon",
    period: "Aug 2025 – Apr 2026",
    type: "Leadership & Mentorship",
  },
  {
    title: "Student Member",
    organization: "Indian Society for Technical Education (ISTE)",
    period: "Sep 2025 – Present",
    type: "Professional Body",
  },
  {
    title: "Perfect 10.0 / 10.0 GPA Distinction",
    organization: "SRM IST Semester 2 Academic Excellence",
    period: "2025",
    type: "Academic Honor",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
              RECOGNITION
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
              Achievements & Leadership
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
            National competitive hackathons, academic merit distinctions, and community leadership roles.
          </p>
        </div>

        {/* 2-Column Typographic List */}
        <div className="divide-y divide-[rgba(27,23,16,0.15)] border-y border-[rgba(27,23,16,0.15)]">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline hover:bg-[#EEE6D4]/40 px-3 sm:px-4 transition-colors"
            >
              {/* Left Column (6 cols): Title */}
              <div className="md:col-span-6 font-display font-medium text-base sm:text-lg text-[#1B1710]">
                {item.title}
              </div>

              {/* Middle Column (3.5 cols): Organization */}
              <div className="md:col-span-4 font-sans text-sm font-medium text-[#5C5344]">
                {item.organization}
              </div>

              {/* Right Column (2.5 cols): Date */}
              <div className="md:col-span-2 md:text-right font-mono text-xs font-semibold text-[#7C5A2C]">
                {item.period}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
