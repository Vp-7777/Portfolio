"use client";

import { useEffect, useState } from "react";
import { Mail, GitFork, AtSign, MapPin, Clock, Zap, ArrowUp } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";

const socialLinks = [
  {
    href: "mailto:vishal17305@gmail.com",
    icon: <Mail size={14} />,
    label: "Email",
    external: false,
  },
  {
    href: "https://linkedin.com/in/vishalp7777",
    icon: <AtSign size={14} />,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/Vp-7777",
    icon: <GitFork size={14} />,
    label: "GitHub",
    external: true,
  },
];

export function Footer() {
  const [istTime, setIstTime] = useState<string>("");
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setIstTime(now.toLocaleTimeString("en-US", options) + " IST");
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (label: string) => {
    setCursorVariant("hover");
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#07080d] border-t border-white/10 py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/10">

          {/* Brand & Status Widget */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-sans text-sm font-bold text-white uppercase tracking-wider">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center">
                <Zap size={13} className="text-white" />
              </div>
              <span>Vishal Patel</span>
              <span className="text-muted/40">·</span>
              <span className="text-cyan-400 font-semibold text-xs">AI & ML Engineer</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 font-sans text-xs text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-medium">Available for Opportunities</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-cyan-400" />
                <span>{istTime || "Loading time..."}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-amber-400" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Links & Scroll to top */}
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel="noreferrer"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-surface-1/70 backdrop-blur-sm font-sans text-xs font-medium text-muted hover:border-cyan-400/50 hover:text-white hover:bg-surface-2 transition-all duration-300 cursor-pointer"
              >
                <span className="text-cyan-400">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </a>
            ))}

            <button
              onClick={scrollToTop}
              onMouseEnter={() => handleMouseEnter("Back to top")}
              onMouseLeave={handleMouseLeave}
              className="p-2.5 rounded-xl border border-white/10 bg-surface-1/70 text-muted hover:text-white hover:border-purple-400/50 transition-all duration-300 cursor-pointer ml-2"
              title="Scroll back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 font-sans text-xs font-medium text-muted/70 tracking-wide">
          <p>© {new Date().getFullYear()} Vishal Patel. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Built with Next.js 16, React 19, Three.js & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
