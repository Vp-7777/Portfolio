"use client";

import { useEffect, useState } from "react";
import { Mail, FileText, ArrowUp, Sparkles } from "lucide-react";
import bioData from "@/lib/content/bio.json";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white border-t border-slate-200 px-6 sm:px-10 lg:px-12 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Left: Branding & Tagline */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <span className="font-sans font-bold text-xl text-ink tracking-tight">
              Vishal Patel
            </span>
            <span className="font-mono text-xs text-amber-900 bg-amber-light px-2.5 py-0.5 rounded-full border border-amber-200">
              9.74 CGPA @ SRM IST
            </span>
          </div>
          <p className="text-xs text-ink-muted font-sans max-w-sm">
            Engineering scalable software architectures, production mobile applications, and high-performance AI systems.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={bioData.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:text-indigo-brand text-ink-muted transition-all cursor-pointer shadow-xs"
            title="GitHub"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href={bioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:text-indigo-brand text-ink-muted transition-all cursor-pointer shadow-xs"
            title="LinkedIn"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={`mailto:${bioData.email}`}
            className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:text-indigo-brand text-ink-muted transition-all cursor-pointer shadow-xs"
            title="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={bioData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:text-indigo-brand text-ink-muted transition-all cursor-pointer shadow-xs"
            title="Google Drive Résumé"
          >
            <FileText size={16} />
          </a>
        </div>

        {/* Right: Scroll to top & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs font-mono text-ink-muted hover:text-ink transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
          <p className="font-mono text-[11px] text-ink-faint">
            © {year} Vishal Patel. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
