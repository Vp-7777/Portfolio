"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Clock, Globe, MapPin } from "lucide-react";
import bioData from "@/lib/content/bio.json";

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

  return (
    <footer className="relative w-full border-t border-[rgba(27,23,16,0.18)] bg-[#EEE6D4]/60 py-12 px-6 sm:px-8">
      <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#5C5344]">
        
        {/* Left: Copyright & Title */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#1B1710]">
            © {new Date().getFullYear()} Vishal Patel.
          </span>
          <span className="text-[#9C9280]">All rights reserved.</span>
        </div>

        {/* Center: Live Real-time Chennai Coordinates & Clock */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11.5px]">
          <span className="flex items-center gap-1.5 text-[#7C5A2C] font-bold uppercase">
            <MapPin size={12} className="text-[#A9793C]" />
            <span>13.08°N 80.27°E · CHENNAI, INDIA</span>
          </span>

          <span className="text-[#A9793C]">·</span>

          <span className="flex items-center gap-1.5 text-[#1B1710] font-semibold">
            <Clock size={12} className="text-[#A9793C]" />
            <span>{time || "05:30 PM IST"}</span>
          </span>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href={bioData.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1B1710] font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href={bioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1B1710] font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={bioData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1B1710] font-bold text-[#7C5A2C] transition-colors"
          >
            Résumé ↓
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F6F1E7] hover:bg-[#EEE6D4] text-[#1B1710] border border-[rgba(27,23,16,0.15)] transition-colors cursor-pointer"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={11} className="text-[#A9793C]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
