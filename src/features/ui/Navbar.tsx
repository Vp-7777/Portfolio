"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import {
  Zap,
  Brain,
  Briefcase,
  FolderKanban,
  TrendingUp,
  Telescope,
  Send,
} from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import { cn } from "@/lib/utils";

const navLinks = [
  { id: "hero",       label: "Home",       index: "00", Icon: Zap },
  { id: "philosophy", label: "Philosophy", index: "01", Icon: Brain },
  { id: "experience", label: "Experience", index: "02", Icon: Briefcase },
  { id: "projects",   label: "Projects",   index: "03", Icon: FolderKanban },
  { id: "growth",     label: "Growth",     index: "04", Icon: TrendingUp },
  { id: "forward",    label: "Outlook",    index: "05", Icon: Telescope },
  { id: "connect",    label: "Connect",    index: "06", Icon: Send },
];

export function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const currentChapter = useSystemStore((state) => state.currentChapter);
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
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-nav px-8 py-4 transition-transform duration-500 ease-precision",
        "bg-background/30 backdrop-blur-xl border-b border-purple-900/25",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
      style={{ boxShadow: "0 1px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(168,85,247,0.04)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Branding */}
        <div
          onClick={() => handleScroll("hero")}
          onMouseEnter={() => handleMouseEnter("GOTO // START")}
          onMouseLeave={handleMouseLeave}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #a855f7, #6366f1)",
              boxShadow: "0 0 14px rgba(168,85,247,0.4)",
            }}
          >
            <Zap size={14} className="text-white" />
          </div>
          <span className="font-mono text-xs tracking-widest uppercase text-foreground/80 group-hover:text-foreground transition-colors duration-300">
            Vishal <span className="text-accent">{"// "}</span>Systems
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
                onMouseEnter={() => handleMouseEnter(`GOTO // ${link.label.toUpperCase()}`)}
                onMouseLeave={handleMouseLeave}
                className={cn(
                  "relative flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono text-[11px] tracking-widest uppercase transition-all duration-300 cursor-pointer focus:outline-none",
                  isActive
                    ? "text-accent bg-accent/8"
                    : "text-muted/70 hover:text-foreground hover:bg-surface-1/60"
                )}
              >
                <link.Icon
                  size={10}
                  className={cn(
                    "transition-colors duration-300",
                    isActive ? "text-accent" : "text-muted/50"
                  )}
                />
                <span className="hidden lg:inline">{link.label}</span>
                <span className="lg:hidden">{link.index}</span>

                {/* Active dot indicator */}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile: just icon row */}
        <nav className="flex md:hidden items-center gap-1">
          {navLinks.map((link) => {
            const isActive = currentChapter === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={cn(
                  "p-2 rounded-lg transition-all duration-300 cursor-pointer focus:outline-none",
                  isActive ? "text-accent bg-accent/10" : "text-muted/60 hover:text-foreground"
                )}
              >
                <link.Icon size={13} />
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
