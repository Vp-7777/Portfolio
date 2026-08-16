"use client";

import { useEffect, useState } from "react";
import { Search, X, FolderKanban, Briefcase, Award, Mail, FileText, ArrowRight, CornerDownLeft, Sparkles } from "lucide-react";
import bioData from "@/lib/content/bio.json";

interface PaletteItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Actions";
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose(); // toggle if already handled or let parent handle
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(`[data-chapter="${id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(bioData.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1500);
  };

  const items: PaletteItem[] = [
    {
      id: "hero",
      title: "Home / Neural Command Hub",
      category: "Navigation",
      icon: <Sparkles size={14} className="text-cyan-400" />,
      action: () => scrollTo("hero"),
    },
    {
      id: "projects",
      title: "Featured Engineered Systems",
      category: "Navigation",
      icon: <FolderKanban size={14} className="text-purple-400" />,
      action: () => scrollTo("projects"),
    },
    {
      id: "autismind",
      title: "AutisMind-AI (Live Vercel App)",
      category: "Projects",
      icon: <span className="w-2 h-2 rounded-full bg-emerald-400" />,
      action: () => {
        window.open("https://autis-mind-ai.vercel.app/", "_blank");
        onClose();
      },
    },
    {
      id: "prithviq",
      title: "PrithviQ (GitHub Repo)",
      category: "Projects",
      icon: <span className="w-2 h-2 rounded-full bg-cyan-400" />,
      action: () => {
        window.open("https://github.com/Vp-7777/PrithviQ", "_blank");
        onClose();
      },
    },
    {
      id: "campuswap",
      title: "CampuSwap (GitHub Repo)",
      category: "Projects",
      icon: <span className="w-2 h-2 rounded-full bg-indigo-400" />,
      action: () => {
        window.open("https://github.com/Vp-7777/CampuSwap", "_blank");
        onClose();
      },
    },
    {
      id: "experience",
      title: "Industry Experience (RideAbit & QRaptor)",
      category: "Navigation",
      icon: <Briefcase size={14} className="text-cyan-400" />,
      action: () => scrollTo("experience"),
    },
    {
      id: "growth",
      title: "Academic Milestones & Certifications (ISRO/AWS)",
      category: "Navigation",
      icon: <Award size={14} className="text-amber-400" />,
      action: () => scrollTo("growth"),
    },
    {
      id: "resume",
      title: "Open Resume (Official Google Drive)",
      category: "Actions",
      icon: <FileText size={14} className="text-cyan-400" />,
      action: () => {
        window.open(bioData.resumeUrl, "_blank");
        onClose();
      },
    },
    {
      id: "copy-email",
      title: copied ? "Email Copied to Clipboard!" : `Copy Email (${bioData.email})`,
      category: "Actions",
      icon: <Mail size={14} className="text-emerald-400" />,
      action: copyEmail,
    },
  ];

  const filtered = items.filter((i) =>
    i.title.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-nav flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#07080d]/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl overflow-hidden font-sans">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#0b0e1a]">
          <Search size={16} className="text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search (projects, resume, credentials)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-xs sm:text-sm placeholder:text-muted/50 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-muted hover:text-white hover:bg-surface-2 transition-colors cursor-pointer"
          >
            <X size={15} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1 bg-[#080a14]">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-xs text-muted">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-2 hover:border-cyan-500/30 border border-transparent transition-all duration-150 text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono text-muted/60 bg-surface-1 px-2 py-0.5 rounded border border-white/5">
                  {item.category}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Keyboard shortcut footer hint */}
        <div className="px-4 py-2 bg-[#090c17] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-muted/60">
          <span>Press ESC to close</span>
          <span className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded bg-surface-2 border border-white/10">⌘K</span>
            <span>or</span>
            <span className="px-1.5 py-0.5 rounded bg-surface-2 border border-white/10">Ctrl+K</span>
          </span>
        </div>

      </div>
    </div>
  );
}
