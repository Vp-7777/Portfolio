"use client";

import { useEffect, useState } from "react";
import { Mail, GitFork, AtSign, MapPin, Clock, Zap } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";

const socialLinks = [
  {
    href: "mailto:vishal17305@gmail.com",
    icon: <Mail size={14} />,
    label: "Email",
    cursor: "Email",
    external: false,
  },
  {
    href: "https://linkedin.com/in/vishalp7777",
    icon: <AtSign size={14} />,
    label: "LinkedIn",
    cursor: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/Vp-7777",
    icon: <GitFork size={14} />,
    label: "GitHub",
    cursor: "GitHub",
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

  return (
    <footer className="w-full bg-[#020108] border-t border-border-subtle/50 py-20 px-8 md:px-14 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 pb-12 border-b border-border-subtle/40">

          {/* Brand & Status Widget */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-sans text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-4">
              <Zap size={14} className="text-cyan-400" />
              <span>Vishal Patel</span>
            </div>

            <div className="font-sans text-xs text-muted space-y-2.5">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-muted/80 uppercase font-medium">Status:</span>
                <span className="text-emerald-400 font-bold">Online & Available</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={13} className="text-cyan-400" />
                <span className="text-muted/80 uppercase font-medium">Local Time:</span>
                <span className="text-cyan-300 font-semibold">{istTime || "Fetching..."}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={13} className="text-amber-400" />
                <span className="text-muted/80 uppercase font-medium">Location:</span>
                <span className="text-amber-300 font-semibold">Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Links grid */}
          <div className="space-y-4">
            <div className="font-sans text-xs font-semibold text-purple-300 tracking-wider uppercase">
              Connect & Networks
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel="noreferrer"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-border-subtle/60 bg-surface-1/50 backdrop-blur-sm font-sans text-xs font-medium text-muted uppercase tracking-wider hover:border-cyan-400/50 hover:text-white hover:bg-surface-2/50 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 font-sans text-xs font-medium text-muted/60 tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Vishal Patel — All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Built with Next.js & Three.js</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
