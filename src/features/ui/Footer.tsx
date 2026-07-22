"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, GitFork, AtSign, Terminal, MapPin, Clock, Zap } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";

const socialLinks = [
  {
    href: "mailto:vishal17305@gmail.com",
    icon: <Mail size={14} />,
    label: "Email",
    cursor: "SEND // MAIL",
    external: false,
  },
  {
    href: "https://linkedin.com/in/vishalp7777",
    icon: <AtSign size={14} />,
    label: "LinkedIn",
    cursor: "LINK // LINKEDIN",
    external: true,
  },
  {
    href: "https://github.com/Vp-7777",
    icon: <GitFork size={14} />,
    label: "GitHub",
    cursor: "LINK // GITHUB",
    external: true,
  },
];

export function Footer() {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  useEffect(() => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "steps(1)",
      repeat: -1,
      duration: 0.8,
    });
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
    <footer className="w-full bg-[#030209] border-t border-border-subtle/50 py-20 px-8 md:px-14 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 pb-12 border-b border-border-subtle/40">

          {/* Terminal block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-6">
              <Terminal size={12} className="text-accent" />
              <span>SYSTEM STATUS</span>
            </div>

            <div className="font-mono text-sm tracking-wide text-muted space-y-2">
              <p>
                <span className="text-accent">root@vp-systems:~#</span>{" "}
                <span className="text-muted/60">system_status --verbose</span>
              </p>
              <div className="pl-4 space-y-1.5 pt-1">
                <div className="flex items-center gap-3">
                  <Zap size={11} className="text-emerald-400" />
                  <span className="text-muted/70">STATUS:</span>
                  <span className="text-emerald-400">ONLINE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={11} className="text-accent/70" />
                  <span className="text-muted/70">UPTIME:</span>
                  <span className="text-foreground/80">99.9%</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={11} className="text-accent/70" />
                  <span className="text-muted/70">LOCATION:</span>
                  <span className="text-foreground/80">CHENNAI, INDIA</span>
                </div>
              </div>
              <p className="pt-3 text-foreground/90">
                Awaiting input
                <span
                  ref={cursorRef}
                  className="inline-block w-[7px] h-[14px] bg-accent ml-1.5 align-middle rounded-[1px]"
                />
              </p>
            </div>
          </div>

          {/* Links grid */}
          <div className="space-y-6">
            <div className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase">
              CONNECT // SYSTEMS
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel="noreferrer"
                  onMouseEnter={() => handleMouseEnter(link.cursor)}
                  onMouseLeave={handleMouseLeave}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-border-subtle/60 bg-surface-1/50 backdrop-blur-sm font-mono text-xs text-muted tracking-widest uppercase hover:border-accent/50 hover:text-foreground hover:bg-surface-2/50 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-accent group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 font-mono text-[10px] text-muted/50 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Vishal Patel — All Systems Functional.</p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent/50" />
            <span>Built with Next.js · GSAP · Three.js</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
