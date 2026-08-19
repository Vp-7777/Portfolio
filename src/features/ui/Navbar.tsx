"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, FileText, Sparkles } from "lucide-react";
import bioData from "@/lib/content/bio.json";

const navItems = [
  { id: "hero", label: "Overview" },
  { id: "projects", label: "Selected Systems" },
  { id: "experience", label: "Experience" },
  { id: "growth", label: "Academic Caliber" },
  { id: "forward", label: "Research" },
  { id: "contact", label: "Connect" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => document.querySelector(`[data-chapter="${item.id}"]`));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const target = document.querySelector(`[data-chapter="${id}"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Monogram */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 p-2 rounded-2xl bg-[#111827]/90 backdrop-blur-xl border border-white/10 shadow-lg hover:border-indigo-500/50 hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer group"
          aria-label="Vishal Patel Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-md group-hover:scale-105 transition-transform">
            VP
          </div>
          <div className="hidden sm:flex flex-col text-left pr-2">
            <span className="text-xs font-bold text-white tracking-tight leading-none">
              Vishal Patel
            </span>
            <span className="text-[10px] font-mono text-indigo-400 leading-none mt-1">
              9.74 CGPA · SRM IST
            </span>
          </div>
        </button>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#111827]/85 backdrop-blur-xl border border-white/10 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-300 cursor-pointer relative ${
                  isActive
                    ? "text-white bg-indigo-600 shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Suite */}
        <div className="flex items-center gap-2.5">
          
          {/* Availability Status */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-sans text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              Available
            </span>
          </div>

          {/* Direct Verified Google Drive Résumé Button */}
          <a
            href={bioData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 border border-indigo-400/30 shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <FileText size={13} />
            <span>Résumé</span>
            <ArrowUpRight size={12} className="opacity-80" />
          </a>

        </div>

      </div>
    </header>
  );
}
