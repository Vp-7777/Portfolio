"use client";

import { useEffect, useState } from "react";
import {
  Command,
  FileText,
  Mail,
  Search,
  Sparkles,
  X,
  ExternalLink,
  Code2,
  Cpu,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import bioData from "@/lib/content/bio.json";

function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const target = document.querySelector(`[data-chapter="${id}"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const actions = [
    {
      id: "resume",
      title: "View Verified Résumé (Google Drive)",
      category: "Documents",
      icon: FileText,
      action: () => window.open(bioData.resumeUrl, "_blank"),
    },
    {
      id: "autismind",
      title: "Launch AutisMind-AI (Live Vercel)",
      category: "Deployments",
      icon: ExternalLink,
      action: () => window.open("https://autis-mind-ai.vercel.app/", "_blank"),
    },
    {
      id: "github-prithviq",
      title: "Inspect PrithviQ Vision Codebase",
      category: "Repositories",
      icon: Code2,
      action: () => window.open("https://github.com/Vp-7777/PrithviQ", "_blank"),
    },
    {
      id: "sec-hero",
      title: "Jump to Overview & Credentials",
      category: "Navigation",
      icon: Sparkles,
      action: () => scrollToSection("hero"),
    },
    {
      id: "sec-projects",
      title: "Jump to Selected Systems Bento",
      category: "Navigation",
      icon: Cpu,
      action: () => scrollToSection("projects"),
    },
    {
      id: "sec-exp",
      title: "Jump to Industry Experience",
      category: "Navigation",
      icon: Briefcase,
      action: () => scrollToSection("experience"),
    },
    {
      id: "sec-growth",
      title: "Jump to Academic Caliber (9.74 CGPA)",
      category: "Navigation",
      icon: GraduationCap,
      action: () => scrollToSection("growth"),
    },
    {
      id: "sec-contact",
      title: "Jump to Contact & Inquiries",
      category: "Navigation",
      icon: Mail,
      action: () => scrollToSection("contact"),
    },
    {
      id: "github",
      title: "Open GitHub Profile (@Vp-7777)",
      category: "Social",
      icon: GitHubIcon,
      action: () => window.open(bioData.github, "_blank"),
    },
    {
      id: "linkedin",
      title: "Open LinkedIn Profile",
      category: "Social",
      icon: LinkedInIcon,
      action: () => window.open(bioData.linkedin, "_blank"),
    },
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating ⌘K Trigger Button (Bottom Right) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#111827]/90 backdrop-blur-xl border border-white/15 text-slate-300 hover:text-white shadow-2xl hover:scale-110 hover:border-indigo-500/50 hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer group flex items-center gap-2"
        title="Open Command Palette (⌘K / Ctrl+K)"
      >
        <Command size={16} className="text-indigo-400 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-mono text-[11px] font-bold text-slate-300 pr-1">
          ⌘K
        </span>
      </button>

      {/* Palette Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 overflow-hidden">
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Palette Box */}
          <div className="relative w-full max-w-xl bg-[#111827] border border-white/20 rounded-3xl shadow-2xl overflow-hidden z-10 space-y-4 p-4 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#090d16] border border-white/10">
              <Search size={16} className="text-indigo-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-white font-sans text-sm placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:text-white"
              >
                <X size={14} />
              </button>
            </div>

            {/* Actions List */}
            <div className="max-h-80 overflow-y-auto space-y-1 pr-1 font-sans text-xs">
              {filtered.length === 0 ? (
                <div className="p-6 text-center text-slate-500 font-mono text-xs">
                  No matching actions found.
                </div>
              ) : (
                filtered.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-colors cursor-pointer text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/40">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium text-slate-200 group-hover:text-white">
                          {item.title}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-indigo-400 bg-indigo-500/15 px-2 py-0.5 rounded-md">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Palette Footer */}
            <div className="flex items-center justify-between px-3 pt-2 border-t border-white/10 text-[10px] font-mono text-slate-500">
              <span>Navigation & Shortcuts</span>
              <span>ESC to close · ↵ to select</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
