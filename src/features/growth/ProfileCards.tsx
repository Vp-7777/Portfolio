"use client";

import { useSystemStore } from "@/store/useSystemStore";
import bioData from "@/lib/content/bio.json";

const profiles = [
  {
    name: "LinkedIn",
    label: "CONNECT // NETWORK",
    id: "vishalp7777",
    url: bioData.linkedin,
    metric: "PROFESSIONAL",
    svg: (
      <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    label: "COMMIT // CALIBRATE",
    id: "Vp-7777",
    url: bioData.github,
    metric: "CODE REPOSITORIES",
    svg: (
      <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    label: "COMPETE // ALGORITHMS",
    id: "Vp-7777",
    url: "https://leetcode.com/Vp-7777", // fallback based on standard formats
    metric: "PROBLEM SOLVED",
    svg: (
      <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
  },
  {
    name: "HackerRank",
    label: "CODE // VERIFIED",
    id: "vishal17305",
    url: "https://hackerrank.com/vishal17305",
    metric: "SQL & ML CERTIFIED",
    svg: (
      <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" />
        <path d="M6 21a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v12a3 3 0 0 0 3 3z" />
      </svg>
    ),
  },
];

export function ProfileCards() {
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10 border-t border-border-subtle/40">
      {profiles.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noreferrer"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => handleMouseEnter(`GOTO // ${p.name.toUpperCase()}`)}
          onMouseLeave={handleMouseLeave}
          className="spotlight-card group p-6 rounded-xl space-y-8 flex flex-col justify-between hover:border-purple-700/50 transition-all duration-300 cursor-pointer block"
          style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
        >
          {/* Header icon and info */}
          <div className="flex justify-between items-start relative z-base">
            <div className="space-y-1">
              <h4 className="font-display text-xl text-foreground font-bold uppercase tracking-tight">
                {p.name}
              </h4>
              <span className="font-mono text-[9px] text-muted tracking-wider block uppercase">
                {p.label}
              </span>
            </div>
            {p.svg}
          </div>

          {/* Footer stats details */}
          <div className="flex justify-between items-end pt-4 border-t border-border-subtle/40 relative z-base font-mono text-[10px] text-muted uppercase">
            <span>ID // {p.id}</span>
            <span className="text-accent">{p.metric}</span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/50 transition-all duration-500 rounded-b-xl" />
        </a>
      ))}
    </div>
  );
}
