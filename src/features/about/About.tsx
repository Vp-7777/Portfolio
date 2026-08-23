"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, CheckCircle2, FileCheck, GraduationCap, MapPin, Sparkles, Star } from "lucide-react";
import bioData from "@/lib/content/bio.json";
import { ScrollReveal } from "@/features/motion/ScrollReveal";
import { ScrollTextHighlight } from "@/features/motion/ScrollTextHighlight";

export function About() {
  const [photoOffset, setPhotoOffset] = useState({ x: 0, y: 0 });

  const handlePhotoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setPhotoOffset({ x: x * 6, y: y * 6 });
  };

  const handlePhotoMouseLeave = () => {
    setPhotoOffset({ x: 0, y: 0 });
  };

  const bioP1 =
    "Vishal is a computer science engineering student at SRM Institute of Science and Technology (AI & ML specialization, CGPA 9.74 / 10.0 · 10.0 Sem 2 GPA), currently split between two engineering internships — building React Native features for a live ride-sharing platform at RideAbit, and engineering scalable AI-powered backend microservices at QRaptor.";

  const bioP2 =
    "He is drawn to software that interprets the real world: screening for developmental patterns through on-device computer vision, and detecting plastic waste from drone and smartphone telemetry. Two-time national hackathon finalist for it.";

  return (
    <section id="about" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                PEDIGREE & BACKGROUND
              </span>
              <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
                Academic Caliber & Craft
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
              Computer science undergraduate specializing in AI systems, mobile engineering, and on-device machine learning architectures.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-Column Editorial & Glassmorphic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column (~35% / 4.5 cols): Parallax Photo & Vision HUD */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="left" delay={100}>
              <div
                onMouseMove={handlePhotoMouseMove}
                onMouseLeave={handlePhotoMouseLeave}
                className="frosted-card p-3 rounded-none relative group cursor-pointer overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateY(${photoOffset.x}deg) rotateX(${-photoOffset.y}deg)`,
                  transition: photoOffset.x === 0 ? "transform 0.5s ease-out" : "none",
                }}
              >
                
                {/* Corner Bracket Elements */}
                <div className="detection-frame">
                  <div className="corner-bl" />
                  <div className="corner-br" />

                  {/* Photo Box */}
                  <div className="relative aspect-square w-full rounded-none overflow-hidden border border-[rgba(27,23,16,0.15)] bg-[#EEE6D4]">
                    <Image
                      src="/profile.png"
                      alt="Vishal Patel"
                      fill
                      priority
                      className="object-cover object-top filter grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 ease-out"
                    />

                    {/* Real-time Vision HUD Overlay */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-[#1B1710]/80 backdrop-blur-xs font-mono text-[9px] text-[#F6F1E7] tracking-wider uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                      <span>CV HUD // 98.4% CONF</span>
                    </div>

                    <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#1B1710]/85 backdrop-blur-xs font-mono text-[10px] text-[#A9793C] font-bold tracking-wider uppercase">
                      SRM IST · MAY &apos;28
                    </div>
                  </div>
                </div>

              </div>

              {/* Photo Mono Caption */}
              <div className="flex items-center justify-between font-mono text-[11.5px] text-[#5C5344] uppercase tracking-wider pt-2 border-t border-[rgba(27,23,16,0.18)]">
                <span className="font-semibold text-[#1B1710]">FIG 01. VISHAL PATEL</span>
                <span className="text-[#7C5A2C] font-bold flex items-center gap-1">
                  <MapPin size={11} />
                  <span>13.08°N 80.27°E</span>
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (~65% / 7.5 cols): Narrative Scrollytelling Bio & Academic Dashboard */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Scrollytelling Word-by-Word Reveal Bio */}
            <div className="space-y-4 font-sans text-base sm:text-lg leading-[1.75]">
              <ScrollTextHighlight
                text={bioP1}
                highlightWords={["SRM", "Institute", "RideAbit", "QRaptor", "9.74", "10.0"]}
              />

              <ScrollTextHighlight
                text={bioP2}
                highlightWords={["developmental", "vision", "plastic", "hackathon"]}
              />
            </div>

            {/* Glassmorphic Academic Monolith Dashboard Card */}
            <ScrollReveal direction="up" delay={200}>
              <div className="frosted-card p-6 sm:p-7 rounded-none space-y-5">
                <div className="flex items-center justify-between border-b border-[rgba(27,23,16,0.12)] pb-3">
                  <span className="font-mono text-xs font-bold text-[#A9793C] tracking-wider uppercase flex items-center gap-2">
                    <GraduationCap size={15} />
                    <span>SRM IST ACADEMIC MONOLITH</span>
                  </span>
                  <span className="font-mono text-xs text-[#7C5A2C] font-bold bg-[#EEE6D4] px-2.5 py-0.5 border border-[rgba(27,23,16,0.1)]">
                    FLAWLESS SEM 2: 10.0 / 10.0
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  
                  {/* Metric Circular Indicator (4.5 cols) */}
                  <div className="sm:col-span-5 p-4 bg-[#EEE6D4]/50 border border-[rgba(27,23,16,0.12)] flex items-center gap-4">
                    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-[rgba(27,23,16,0.12)]"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-[#A9793C]"
                          strokeDasharray="97.4, 100"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="absolute font-mono text-xs font-bold text-[#1B1710]">
                        97.4%
                      </span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#9C9280] uppercase block">CUMULATIVE CGPA</span>
                      <span className="font-display font-medium text-lg text-[#1B1710] block">9.74 / 10.0</span>
                    </div>
                  </div>

                  {/* Degree Narrative (7.5 cols) */}
                  <div className="sm:col-span-7 space-y-1.5">
                    <h4 className="font-display font-medium text-base sm:text-lg text-[#1B1710]">
                      {bioData.degree}
                    </h4>
                    <div className="font-mono text-xs text-[#5C5344] space-y-0.5">
                      <p className="font-semibold text-[#1B1710]">{bioData.institution}</p>
                      <p className="text-[#9C9280]">Expected Graduation: {bioData.expectedGraduation}</p>
                    </div>
                  </div>

                </div>

                {/* Core Coursework Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-[rgba(27,23,16,0.08)]">
                  {["Data Structures", "Neural Networks", "FastAPI & Python", "PostgreSQL ACID", "React Native", "Operating Systems"].map((course) => (
                    <span
                      key={course}
                      className="font-mono text-[10.5px] text-[#5C5344] bg-[#EEE6D4]/70 px-2.5 py-0.5 border border-[rgba(27,23,16,0.08)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Interactive Certifications Grid */}
            <ScrollReveal direction="up" delay={300}>
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                  VERIFIED INDUSTRY ACCREDITATIONS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {bioData.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="frosted-card p-4 rounded-none space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[#A9793C]">
                          <Award size={15} />
                          <span className="font-mono text-[10px] text-[#7C5A2C] font-bold">{cert.date}</span>
                        </div>
                        <h5 className="font-sans font-semibold text-xs sm:text-sm text-[#1B1710] leading-snug">
                          {cert.name}
                        </h5>
                      </div>

                      <span className="font-mono text-[10px] text-[#5C5344] block pt-1 border-t border-[rgba(27,23,16,0.08)]">
                        {cert.issuer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
