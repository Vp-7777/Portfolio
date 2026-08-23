"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Clock, Globe, MapPin } from "lucide-react";
import bioData from "@/lib/content/bio.json";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
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

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#060608] pt-20 pb-12 px-6 sm:px-12 text-[#ECEAE2] overflow-hidden select-none">
      
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto space-y-16 relative z-10">
        
        {/* Top Deck: Navigation Links & Social Media */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/10 pb-12">
          
          {/* Left: Quick Section Anchor Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "work", label: "Projects" },
              { id: "skills", label: "Capabilities" },
              { id: "achievements", label: "Recognition" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right: Social Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={bioData.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-[#12131A] hover:bg-[#1C1D26] border border-white/10 text-white font-mono text-xs flex items-center gap-2 transition-all hover:scale-105"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>GitHub</span>
            </a>

            <a
              href={bioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-[#12131A] hover:bg-[#1C1D26] border border-white/10 text-white font-mono text-xs flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>LinkedIn</span>
            </a>

            <a
              href={bioData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-md shadow-black/50"
            >
              Résumé ↗
            </a>
          </div>

        </div>

        {/* Center: Massive Watermark Display Signature */}
        <div className="text-center py-6 border-b border-white/10">
          <h2
            onClick={scrollToTop}
            className="font-display font-black text-[12vw] sm:text-[10vw] leading-none tracking-[-0.04em] text-white/10 hover:text-white/25 transition-colors cursor-pointer select-none"
            title="Click to scroll to top"
          >
            VISHAL PATEL
          </h2>
        </div>

        {/* Bottom Meta Row: Coordinates, Clock & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#8C887B]">
          
          {/* Copyright */}
          <div>
            <span className="text-white font-semibold">© {new Date().getFullYear()} Vishal Patel.</span>{" "}
            <span>All rights reserved.</span>
          </div>

          {/* Coordinates & Real-Time IST Clock */}
          <div className="flex items-center gap-3 text-[11.5px]">
            <span className="flex items-center gap-1.5 text-[#C5A059] font-bold uppercase">
              <MapPin size={13} className="text-[#C5A059]" />
              <span>13.08°N 80.27°E · CHENNAI</span>
            </span>

            <span>·</span>

            <span className="flex items-center gap-1.5 text-white font-semibold">
              <Clock size={13} className="text-[#10B981]" />
              <span>{time || "05:30 PM IST"}</span>
            </span>
          </div>

          {/* Back to Top Pill */}
          <button
            onClick={scrollToTop}
            className="px-5 py-2 rounded-full bg-[#12131A] hover:bg-white hover:text-black border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>

        </div>

      </div>
    </footer>
  );
}
