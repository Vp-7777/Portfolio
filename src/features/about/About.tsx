"use client";

import Image from "next/image";
import bioData from "@/lib/content/bio.json";

export function About() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
              ABOUT
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
              Background & Pedigree
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
            Computer science undergraduate specializing in AI systems, mobile engineering, and on-device machine learning architectures.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (~35% / 4.5 cols): Profile Photo with Corner-Detection Frame */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative detection-frame group cursor-pointer inline-block w-full max-w-md">
              
              {/* Corner Bracket Elements */}
              <div className="corner-bl" />
              <div className="corner-br" />

              {/* Photo Box */}
              <div className="relative aspect-square w-full rounded-none overflow-hidden border border-[rgba(27,23,16,0.22)] bg-[#EEE6D4] shadow-xs">
                <Image
                  src="/profile.png"
                  alt="Vishal Patel"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 ease-out"
                />
              </div>

            </div>

            {/* Photo Mono Caption */}
            <div className="flex items-center justify-between font-mono text-[11.5px] text-[#5C5344] uppercase tracking-wider pt-2 border-t border-[rgba(27,23,16,0.18)]">
              <span className="font-semibold text-[#1B1710]">FIG 01. VISHAL PATEL</span>
              <span className="text-[#7C5A2C] font-bold">13.08°N 80.27°E</span>
            </div>
          </div>

          {/* Right Column (~65% / 7.5 cols): Narrative Bio, Education & Certifications */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Bio Prose */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#5C5344] leading-[1.75]">
              <p>
                Vishal is a computer science engineering student at{" "}
                <strong className="font-semibold text-[#1B1710]">
                  SRM Institute of Science and Technology
                </strong>{" "}
                (AI & ML specialization, <strong className="font-semibold text-[#7C5A2C]">CGPA 9.74 / 10.0 · 10.0 Sem 2 GPA</strong>), currently split between two engineering internships — building React Native features for a live ride-sharing platform at{" "}
                <strong className="font-semibold text-[#1B1710]">RideAbit</strong>, and engineering scalable AI-powered backend microservices at{" "}
                <strong className="font-semibold text-[#1B1710]">QRaptor</strong>.
              </p>

              <p>
                He is drawn to software that interprets the real world: screening for developmental patterns through on-device computer vision, and detecting plastic waste from drone and smartphone telemetry. Two-time national hackathon finalist for it.
              </p>
            </div>

            {/* Education Block */}
            <div className="space-y-3 pt-6 border-t border-[rgba(27,23,16,0.18)]">
              <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                ACADEMIC RECORD
              </span>

              <div className="p-5 bg-[#EEE6D4]/60 border border-[rgba(27,23,16,0.15)] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="font-display font-medium text-lg sm:text-xl text-[#1B1710]">
                    {bioData.degree}
                  </h4>
                  <span className="font-mono text-xs font-bold text-[#7C5A2C] bg-[#F6F1E7] px-2.5 py-1 border border-[rgba(27,23,16,0.12)]">
                    CGPA 9.74 / 10.0 (97.4%)
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-[#5C5344]">
                  <span className="font-semibold text-[#1B1710]">{bioData.institution}</span>
                  <span className="text-[#A9793C]">·</span>
                  <span>Expected {bioData.expectedGraduation}</span>
                  <span className="text-[#A9793C]">·</span>
                  <span className="text-[#7C5A2C]">Semester 2: 10.0 / 10.0</span>
                </div>
              </div>
            </div>

            {/* Certifications Block */}
            <div className="space-y-4 pt-6 border-t border-[rgba(27,23,16,0.18)]">
              <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                CERTIFICATIONS & ACCREDITATIONS
              </span>

              <div className="divide-y divide-[rgba(27,23,16,0.15)] border-y border-[rgba(27,23,16,0.15)]">
                {bioData.certifications.map((cert, idx) => (
                  <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 hover:bg-[#EEE6D4]/30 px-2 transition-colors">
                    <span className="font-sans font-semibold text-sm sm:text-base text-[#1B1710]">
                      {cert.name}
                    </span>
                    <span className="font-mono text-xs font-medium text-[#5C5344] shrink-0">
                      {cert.issuer} <span className="text-[#A9793C]">·</span> {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
