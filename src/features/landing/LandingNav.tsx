"use client";

import { useState } from "react";
import bioData from "@/lib/content/bio.json";

interface FloatingPillItem {
  id: string;
  label: string;
  tooltip: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

export function LandingNav() {
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent, tooltip: string) => {
    setHoveredTooltip(tooltip);
    setTooltipPos({ x: e.clientX, y: e.clientY + 24 });
  };

  const handleMouseLeave = () => {
    setHoveredTooltip(null);
  };

  const navItems: FloatingPillItem[] = [
    {
      id: "experience",
      label: "RideAbit & QRaptor",
      tooltip: "Mobile SDE & AI Microservices 🚀",
      onClick: () => scrollTo("experience"),
    },
    {
      id: "pedigree",
      label: "SRM IST",
      tooltip: "9.74 CGPA · Flawless 10.0 Sem 2 🎓",
      onClick: () => scrollTo("about"),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      tooltip: "Let's connect professionally ↗",
      href: bioData.linkedin,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      tooltip: "Explore open-source repos ⚡",
      href: bioData.github,
      external: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 sm:py-8 bg-transparent select-none">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-12 flex items-center justify-between">
        
        {/* Top-Left: [ BOOK A CALL ] Button */}
        <button
          onClick={() => scrollTo("contact")}
          onMouseEnter={(e) => handleMouseMove(e, "Schedule a quick chat 📅")}
          onMouseMove={(e) => handleMouseMove(e, "Schedule a quick chat 📅")}
          onMouseLeave={handleMouseLeave}
          className="px-5 py-2.5 rounded-lg border border-white/80 hover:border-white hover:bg-white hover:text-black text-white font-mono text-xs font-bold uppercase tracking-wider cursor-pointer shadow-lg shadow-black/60 transition-all duration-200"
        >
          BOOK A CALL
        </button>

        {/* Top-Right: Direct Editorial Links */}
        <nav className="flex items-center gap-6 sm:gap-8 font-sans text-sm font-medium text-[#ECEAE2]">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="py-1 cursor-pointer"
              onMouseEnter={(e) => handleMouseMove(e, item.tooltip)}
              onMouseMove={(e) => handleMouseMove(e, item.tooltip)}
              onMouseLeave={handleMouseLeave}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  onClick={item.onClick}
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </nav>

      </div>

      {/* Exact Reference Cursor-Following Floating Tooltip Card */}
      {hoveredTooltip && (
        <div
          className="fixed pointer-events-none z-[9999] px-3.5 py-1.5 bg-white text-black text-xs font-semibold rounded-lg shadow-2xl shadow-black/90 whitespace-nowrap will-change-transform animate-in fade-in zoom-in-95 duration-100"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            transform: "translateX(-50%)",
          }}
        >
          {hoveredTooltip}
        </div>
      )}
    </header>
  );
}
