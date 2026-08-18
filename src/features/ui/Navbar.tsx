"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import { Briefcase, FolderKanban, TrendingUp, Send, FileText, ArrowUpRight, Cpu } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { cn } from "@/lib/utils";
import bioData from "@/lib/content/bio.json";

const navLinks = [
  { id: "projects",   label: "Work",       Icon: FolderKanban },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "growth",     label: "Honors",     Icon: TrendingUp },
  { id: "forward",    label: "Roadmap",    Icon: Cpu },
  { id: "connect",    label: "Contact",    Icon: Send },
];

export function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const currentChapter = useSystemStore((state) => state.currentChapter);
  const scrollProgress = useSystemStore((state) => state.scrollProgress);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const lenis = useLenis(({ velocity }) => {
    if (velocity > 1.8) setIsHidden(true);
    else if (velocity < -1.8) setIsHidden(false);
  });

  const handleScroll = (id: string) => {
    if (!lenis) return;
    const target = document.querySelector(`[data-chapter="${id}"]`);
    if (!target) return;
    lenis.scrollTo(target as HTMLElement, {
      offset: 0,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  const handleMouseEnter = (label: string) => {
    setCursorVariant("hover");
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-nav px-6 sm:px-10 py-3.5 transition-transform duration-300",
        "bg-white/85 backdrop-blur-md border-b border-slate-200 shadow-xs",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      {/* Scroll progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none bg-slate-100">
        <div
          className="h-full bg-indigo-brand transition-all duration-150"
          style={{ width: `${Math.min(Math.max(scrollProgress * 100, 0), 100)}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand Logo */}
        <button
          onClick={() => handleScroll("hero")}
          onMouseEnter={() => handleMouseEnter("Vishal Patel · Home")}
          onMouseLeave={handleMouseLeave}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-8 h-8 rounded-xl bg-indigo-brand flex items-center justify-center font-sans font-black text-xs text-white shadow-xs">
            VP
          </div>
          <div className="text-left hidden sm:block">
            <span className="font-sans font-bold text-sm text-ink tracking-tight block">
              Vishal Patel
            </span>
            <span className="font-mono text-[10px] text-indigo-brand font-semibold block -mt-0.5">
              Software & AI Systems
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 select-none bg-slate-100/80 border border-slate-200 rounded-full px-2.5 py-1">
          {navLinks.map((link) => {
            const isActive = currentChapter === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
                className={cn(
                  "px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer flex items-center gap-1.5",
                  isActive
                    ? "text-indigo-brand bg-white border border-indigo-200 shadow-xs"
                    : "text-ink-muted hover:text-ink"
                )}
              >
                <link.Icon size={13} className={isActive ? "text-indigo-brand" : "text-slate-400"} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Verified Résumé Button */}
        <a
          href={bioData.resumeUrl}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("Google Drive Résumé")}
          onMouseLeave={handleMouseLeave}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-ink hover:text-indigo-brand bg-white hover:bg-slate-50 border border-slate-300 hover:border-indigo-300 transition-all cursor-pointer shadow-xs"
        >
          <FileText size={13} className="text-indigo-brand" />
          <span>View Résumé</span>
          <ArrowUpRight size={12} className="opacity-70" />
        </a>

      </div>
    </header>
  );
}
