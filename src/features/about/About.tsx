"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, GraduationCap, MapPin, Sparkles } from "lucide-react";
import bioData from "@/lib/content/bio.json";
import { ScrollReveal } from "@/features/motion/ScrollReveal";

export function About() {
  const [photoOffset, setPhotoOffset] = useState({ x: 0, y: 0 });

  const handlePhotoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setPhotoOffset({ x: x * 8, y: y * 6 });
  };

  const handlePhotoMouseLeave = () => {
    setPhotoOffset({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="relative w-full py-28 sm:py-36 bg-[#08080A] text-[#ECEAE2]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-20">
        
        {/* Exact Reference Centered Massive Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-[5.8rem] text-white tracking-[-0.04em] uppercase leading-none">
              ABOUT ME
            </h2>

            <p className="font-mono text-xs sm:text-[13px] text-[#A1A1AA] tracking-[0.06em] uppercase max-w-2xl mx-auto leading-relaxed">
              COMPUTER SCIENCE UNDERGRADUATE SPECIALIZING IN ON-DEVICE AI SYSTEMS, MOBILE ENGINEERING, AND PRODUCTION ARCHITECTURES.
            </p>
          </div>
        </ScrollReveal>

        {/* Reference-Styled Rounded Dark Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Rounded Portrait Frame with Parallax & Meta Badge */}
          <div className="lg:col-span-5 space-y-5 sticky top-28">
            <ScrollReveal direction="left" delay={100}>
              <div
                onMouseMove={handlePhotoMouseMove}
                onMouseLeave={handlePhotoMouseLeave}
                className="relative rounded-[32px] sm:rounded-[36px] bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-4 sm:p-5 shadow-2xl shadow-black/80 overflow-hidden group cursor-pointer transition-all duration-300"
                style={{
                  transform: `perspective(1000px) rotateY(${photoOffset.x * 0.4}deg) rotateX(${-photoOffset.y * 0.4}deg)`,
                  transition: photoOffset.x === 0 ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                }}
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#181A24] border border-white/10">
                  <Image
                    src="/profile.png"
                    alt="Vishal Patel"
                    fill
                    priority
                    sizes="(max-width: 768px) 340px, 480px"
                    className="object-cover object-top filter grayscale contrast-[1.12] brightness-[0.95] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out"
                  />

                  {/* Real-time Status Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full font-mono text-[10px] text-white tracking-wider uppercase flex items-center gap-2 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                    <span>SRM IST · MAY &apos;28</span>
                  </div>

                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/85 backdrop-blur-md rounded-full font-mono text-[10px] text-[#C5A059] font-bold tracking-wider uppercase border border-[#C5A059]/40">
                    SDE & AI INTERN
                  </div>
                </div>

                {/* Photo Caption Bar */}
                <div className="flex items-center justify-between font-mono text-xs text-[#A1A1AA] pt-4 px-2">
                  <span className="font-bold text-white">VISHAL PATEL</span>
                  <span className="text-[#C5A059] font-bold flex items-center gap-1.5">
                    <MapPin size={12} />
                    <span>13.08°N 80.27°E · CHENNAI</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Narrative & Academic Monolith */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Editorial Bio Narrative */}
            <ScrollReveal direction="right" delay={120}>
              <div className="rounded-[32px] bg-[#12131A]/95 border border-[#222430] p-8 sm:p-10 space-y-5 shadow-2xl shadow-black/80">
                <div className="flex items-center gap-2 font-mono text-xs text-[#C5A059] font-bold uppercase tracking-wider">
                  <Sparkles size={14} />
                  <span>CANDIDATE PROFILE</span>
                </div>

                <p className="font-sans text-base sm:text-lg text-[#ECEAE2] leading-[1.8]">
                  Vishal is a computer science engineering undergraduate at <strong className="text-white font-semibold">SRM Institute of Science and Technology</strong> (AI & ML specialization, <span className="text-[#C5A059] font-bold">9.74 / 10.0 CGPA</span> · <span className="text-[#10B981] font-bold">10.0 Sem 2 GPA</span>), currently split between two commercial engineering internships — developing React Native mobile features at <strong className="text-white font-semibold">RideAbit</strong>, and architecting scalable backend AI microservices at <strong className="text-white font-semibold">QRaptor</strong>.
                </p>

                <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-[1.75]">
                  He specializes in on-device computer vision and low-latency systems — engineering edge neural networks for developmental screening, drone geospatial surveillance, and high-concurrency relational platforms. Two-time national hackathon finalist.
                </p>
              </div>
            </ScrollReveal>

            {/* Academic Monolith Dashboard Card */}
            <ScrollReveal direction="up" delay={180}>
              <div className="rounded-[32px] bg-[#12131A]/95 border border-[#222430] p-8 sm:p-10 space-y-6 shadow-2xl shadow-black/80">
                
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <span className="font-mono text-xs font-bold text-[#C5A059] tracking-wider uppercase flex items-center gap-2">
                    <GraduationCap size={16} />
                    <span>SRM IST ACADEMIC RECORD</span>
                  </span>
                  <span className="font-mono text-xs text-white font-bold bg-[#C5A059]/20 px-3.5 py-1 rounded-full border border-[#C5A059]/40">
                    FLAWLESS SEM 2: 10.0 / 10.0
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  
                  {/* Metric Gauge (5 cols) */}
                  <div className="sm:col-span-5 p-4 rounded-2xl bg-[#181A24] border border-white/10 flex items-center gap-4">
                    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-[#262838]"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-[#C5A059]"
                          strokeDasharray="97.4, 100"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="absolute font-mono text-xs font-bold text-white">
                        97.4%
                      </span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#8C887B] uppercase block">CUMULATIVE CGPA</span>
                      <span className="font-display font-bold text-lg text-white block">9.74 / 10.0</span>
                    </div>
                  </div>

                  {/* Degree Narrative (7 cols) */}
                  <div className="sm:col-span-7 space-y-1">
                    <h4 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                      {bioData.degree}
                    </h4>
                    <p className="font-mono text-xs text-[#A1A1AA] font-semibold">{bioData.institution}</p>
                    <p className="font-mono text-[11px] text-[#8C887B]">Expected Graduation: {bioData.expectedGraduation}</p>
                  </div>

                </div>

                {/* Coursework Tags */}
                <div className="pt-2 flex flex-wrap gap-2 border-t border-white/10">
                  {["Data Structures", "Neural Networks", "FastAPI & Python", "PostgreSQL ACID", "React Native", "Operating Systems"].map((course) => (
                    <span
                      key={course}
                      className="font-mono text-xs font-medium text-[#A1A1AA] bg-[#181A24] px-3 py-1 rounded-lg border border-white/5"
                    >
                      {course}
                    </span>
                  ))}
                </div>

              </div>
            </ScrollReveal>

            {/* Verified Certifications Grid */}
            <ScrollReveal direction="up" delay={220}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {bioData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-5 space-y-3 flex flex-col justify-between transition-colors shadow-lg group cursor-default"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[#C5A059]">
                        <Award size={16} />
                        <span className="font-mono text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 rounded-full">{cert.date}</span>
                      </div>
                      <h5 className="font-sans font-bold text-xs sm:text-sm text-white group-hover:text-[#C5A059] transition-colors leading-snug">
                        {cert.name}
                      </h5>
                    </div>

                    <span className="font-mono text-[10.5px] text-[#8C887B] block pt-2 border-t border-white/10">
                      {cert.issuer}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
