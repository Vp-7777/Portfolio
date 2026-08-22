"use client";

import bioData from "@/lib/content/bio.json";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[rgba(27,23,16,0.15)] bg-[#EEE6D4]/50 py-12 px-6 sm:px-8 relative z-10 text-[#5C5344] font-sans text-xs">
      <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="font-mono text-xs text-[#1B1710]">
          © {new Date().getFullYear()} Vishal Patel. All rights reserved.
        </div>

        {/* Center: Coordinates */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#9C9280] tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A9793C]" />
          <span>13.08°N 80.27°E · CHENNAI, INDIA</span>
        </div>

        {/* Right: Links & Back to Top */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href={bioData.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1B1710] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={bioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1B1710] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={bioData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1B1710] text-[#7C5A2C] font-bold transition-colors"
          >
            Résumé ↓
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-[#1B1710] transition-colors cursor-pointer text-[#9C9280]"
          >
            Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
