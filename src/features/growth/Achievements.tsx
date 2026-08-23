"use client";

import { Award, Medal, ShieldCheck, Sparkles, Star, Trophy, Users } from "lucide-react";
import { ScrollReveal } from "@/features/motion/ScrollReveal";

interface AchievementItem {
  title: string;
  organization: string;
  period: string;
  type: string;
  badge: string;
  icon: typeof Trophy;
}

const achievements: AchievementItem[] = [
  {
    title: "Top 20 Finalist (257+ Teams)",
    organization: "QRaptors National Hackathon",
    period: "2026",
    type: "National Level Hackathon",
    badge: "NATIONAL PODIUM",
    icon: Trophy,
  },
  {
    title: "Top 20 Finalist",
    organization: "Ashna AI Agent Hackathon",
    period: "2026",
    type: "Generative AI Hackathon",
    badge: "TOP 20 FINALIST",
    icon: Medal,
  },
  {
    title: "Organizer & Mentor",
    organization: "Team SRM Hackathon",
    period: "Aug 2025 – Apr 2026",
    type: "Leadership & Community",
    badge: "LEADERSHIP",
    icon: Users,
  },
  {
    title: "Student Member",
    organization: "Indian Society for Technical Education (ISTE)",
    period: "Sep 2025 – Present",
    type: "Professional Engineering Body",
    badge: "PROFESSIONAL BODY",
    icon: ShieldCheck,
  },
  {
    title: "Perfect 10.0 / 10.0 GPA Distinction",
    organization: "SRM IST Semester 2 Academic Excellence",
    period: "2025",
    type: "Academic Distinction",
    badge: "FLAWLESS 10.0 GPA",
    icon: Star,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                HONORS & MERIT
              </span>
              <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
                Recognition & Leadership
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
              National competitive hackathons, academic merit distinctions, and community leadership roles.
            </p>
          </div>
        </ScrollReveal>

        {/* Glassmorphic Recognition Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="frosted-card p-6 rounded-none space-y-4 flex flex-col justify-between group hover:border-[#A9793C] transition-all h-full">
                  <div className="space-y-3">
                    {/* Top Badge & Date */}
                    <div className="flex items-center justify-between border-b border-[rgba(27,23,16,0.1)] pb-3">
                      <span className="font-mono text-[10px] font-bold text-[#7C5A2C] bg-[#EEE6D4] px-2.5 py-0.5 border border-[rgba(27,23,16,0.1)]">
                        {item.badge}
                      </span>
                      <span className="font-mono text-xs font-semibold text-[#5C5344]">
                        {item.period}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="space-y-1 pt-1">
                      <div className="w-8 h-8 rounded-none bg-[#EEE6D4] border border-[rgba(27,23,16,0.12)] flex items-center justify-center text-[#A9793C] mb-2 group-hover:scale-105 transition-transform">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-display font-medium text-lg text-[#1B1710] group-hover:text-[#7C5A2C] transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Organization & Type */}
                  <div className="pt-3 border-t border-[rgba(27,23,16,0.08)] space-y-0.5">
                    <span className="font-sans text-xs sm:text-sm font-semibold text-[#1B1710] block">
                      {item.organization}
                    </span>
                    <span className="font-mono text-[10.5px] text-[#9C9280] block">
                      {item.type}
                    </span>
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
