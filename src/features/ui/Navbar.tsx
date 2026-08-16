"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import {
  Zap,
  Briefcase,
  FolderKanban,
  TrendingUp,
  Telescope,
  Send,
  Download,
  Search,
  Command,
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { cn } from "@/lib/utils";
import bioData from "@/lib/content/bio.json";
import { CommandPalette } from "./CommandPalette";

const navLinks = [
  { id: "hero",       label: "Home",       Icon: Zap },
  { id: "projects",   label: "AI Systems", Icon: FolderKanban },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "growth",     label: "Milestones", Icon: TrendingUp },
  { id: "forward",    label: "Vision",     Icon: Telescope },
  { id: "connect",    label: "Contact",    Icon: Send },
];

export function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const currentChapter = useSystemStore((state) => state.currentChapter);
  const scrollProgress = useSystemStore((state) => state.scrollProgress);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const lenis = useLenis(({ velocity }) => {
    if (velocity > 1.5) setIsHidden(true);
    else if (velocity < -1.5) setIsHidden(false);
  });

  const handleScroll = (id: string) => {
    if (!lenis) return;
    const target = document.querySelector(`[data-chapter="${id}"]`);
    if (!target) return;
    lenis.scrollTo(target as HTMLElement, {
      offset: 0,
      duration: 1.4,
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
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-nav px-6 sm:px-10 py-3.5 transition-transform duration-500 ease-precision",
          "bg-[#07080d]/80 backdrop-blur-2xl border-b border-white/10",
          isHidden ? "-translate-y-full" : "translate-y-0"
        )}
        style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
      >
        {/* Scroll Progress Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-surface-2 overflow-hidden pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 transition-all duration-150"
            style={{ width: `${Math.min(Math.max(scrollProgress * 100, 0), 100)}%` }}
          />
        </div>
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Branding */}
          <div
            onClick={() => handleScroll("hero")}
            onMouseEnter={() => handleMouseEnter("Home")}
            onMouseLeave={handleMouseLeave}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md"
              style={{
                background: "linear-gradient(135deg, #0284c7, #9333ea)",
              }}
            >
              <Zap size={14} className="text-white" />
            </div>
            <span className="font-sans font-extrabold text-sm tracking-wide uppercase text-white group-hover:text-cyan-300 transition-colors duration-300">
              Vishal <span className="text-cyan-400">Patel</span>
            </span>
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-1 select-none">
            {navLinks.map((link) => {
              const isActive = currentChapter === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    "relative flex items-center gap-2 px-3.5 py-2 rounded-lg font-sans text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer focus:outline-none",
                    isActive
                      ? "text-cyan-300 bg-cyan-400/10 font-semibold"
                      : "text-muted hover:text-white hover:bg-surface-1/60"
                  )}
                >
                  <link.Icon
                    size={13}
                    className={cn(
                      "transition-colors duration-300",
                      isActive ? "text-cyan-400" : "text-muted/60"
                    )}
                  />
                  <span className="hidden lg:inline">{link.label}</span>

                  {/* Active dot indicator */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Cmd+K & Download Resume */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={() => setIsPaletteOpen(true)}
              onMouseEnter={() => handleMouseEnter("Command Menu (⌘K)")}
              onMouseLeave={handleMouseLeave}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-surface-1/70 hover:border-cyan-500/40 text-muted hover:text-white transition-all text-xs font-mono cursor-pointer"
              title="Open Command Palette (⌘K / Ctrl+K)"
            >
              <Search size={12} className="text-cyan-400" />
              <span className="text-[11px]">Search</span>
              <kbd className="text-[9px] px-1.5 py-0.5 rounded bg-surface-2 border border-white/10 text-muted/70">
                ⌘K
              </kbd>
            </button>

            <a
              href={bioData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleMouseEnter("View Resume on Google Drive")}
              onMouseLeave={handleMouseLeave}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider text-cyan-300 border border-cyan-500/30 bg-cyan-950/40 hover:bg-cyan-900/50 hover:border-cyan-400/60 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Download size={13} className="text-cyan-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile: icon row + search */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="p-2 rounded-lg text-cyan-400 bg-cyan-400/10 focus:outline-none cursor-pointer"
              title="Search"
            >
              <Search size={14} />
            </button>
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentChapter === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    className={cn(
                      "p-2 rounded-lg transition-all duration-300 cursor-pointer focus:outline-none",
                      isActive ? "text-cyan-400 bg-cyan-400/10" : "text-muted/60 hover:text-white"
                    )}
                  >
                    <link.Icon size={13} />
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Global Command Palette Modal */}
      <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />
    </>
  );
}
