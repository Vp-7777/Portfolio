"use client";

import { useEffect, useState } from "react";
import bioData from "@/lib/content/bio.json";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F6F1E7]/90 backdrop-blur-md border-b border-[rgba(27,23,16,0.18)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Left: Name Typography */}
        <button
          onClick={scrollToTop}
          className="font-display font-semibold text-lg sm:text-xl text-[#1B1710] tracking-tight hover:text-[#A9793C] transition-colors cursor-pointer"
        >
          Vishal Patel
        </button>

        {/* Center: Geographic Coordinates (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-[#7C5A2C] font-semibold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A9793C]" />
          <span>13.08°N 80.27°E · CHENNAI</span>
        </div>

        {/* Right: Editorial Links */}
        <nav className="hidden sm:flex items-center gap-6 md:gap-8 font-sans text-[13.5px] font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="nav-link cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          {/* Résumé Action Link */}
          <a
            href={bioData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs font-bold text-[#7C5A2C] hover:text-[#1B1710] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Résumé</span>
            <span className="text-[13px]">↓</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="sm:hidden font-mono text-xs text-[#1B1710] p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "CLOSE [×]" : "MENU [—]"}
        </button>

      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F6F1E7] border-b border-[rgba(27,23,16,0.18)] px-6 py-6 space-y-4 font-sans text-base">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left py-1 text-[#1B1710] font-medium"
            >
              {link.label}
            </button>
          ))}
          <a
            href={bioData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-left py-2 font-mono text-xs font-bold text-[#7C5A2C]"
          >
            Résumé ↓ (Google Drive PDF)
          </a>
        </div>
      )}
    </header>
  );
}
