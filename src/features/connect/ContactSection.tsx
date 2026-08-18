"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, FileText, MessageSquare, ArrowUpRight } from "lucide-react";
import { useSystemStore } from "@/store/useSystemStore";
import bioData from "@/lib/content/bio.json";

const presetSubjects = [
  "SDE / AI Internship Role",
  "Full-Stack Collaboration",
  "Research & Machine Learning",
  "General Inquiry",
];

export function ContactSection() {
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: presetSubjects[0], message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(bioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseEnter = (label: string) => {
    setCursorVariant("hover");
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ name: "", email: "", subject: presetSubjects[0], message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      data-chapter="connect"
      className="relative w-full min-h-screen bg-canvas py-28 sm:py-36 px-6 sm:px-10 lg:px-12 overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto relative z-base space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-white shadow-xs">
            <MessageSquare size={13} className="text-indigo-brand" />
            <span className="font-mono text-xs font-bold text-ink-muted uppercase tracking-wider">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-ink leading-tight">
            Let&apos;s Build the Future <br />
            <span className="text-indigo-gradient">
              Together.
            </span>
          </h2>

          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-sans">
            Open for software engineering internships, AI/ML research opportunities, and high-impact product engineering collaborations.
          </p>
        </div>

        {/* Contact Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="studio-card p-7 space-y-3 bg-white">
              <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block">
                Primary Direct Channel
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${bioData.email}`}
                  onMouseEnter={() => handleMouseEnter("Direct Email")}
                  onMouseLeave={handleMouseLeave}
                  className="font-sans text-base sm:text-lg font-bold text-ink hover:text-indigo-brand transition-colors truncate"
                >
                  {bioData.email}
                </a>
                <button
                  onClick={copyEmail}
                  onMouseEnter={() => handleMouseEnter("Copy Email")}
                  onMouseLeave={handleMouseLeave}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 text-indigo-brand hover:bg-indigo-light transition-colors cursor-pointer shrink-0"
                  title="Copy email address"
                >
                  {copied ? <Check size={16} className="text-emerald-brand" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={bioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => handleMouseEnter("Google Drive Résumé")}
                onMouseLeave={handleMouseLeave}
                className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all space-y-2 group cursor-pointer shadow-xs"
              >
                <FileText size={22} className="text-indigo-brand" />
                <span className="font-sans font-bold text-sm text-ink block">
                  Résumé ↗
                </span>
                <span className="font-mono text-[10px] text-ink-muted block">
                  Google Drive PDF
                </span>
              </a>

              <a
                href={bioData.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => handleMouseEnter("LinkedIn Profile")}
                onMouseLeave={handleMouseLeave}
                className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all space-y-2 group cursor-pointer shadow-xs"
              >
                <svg className="w-5 h-5 text-indigo-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="font-sans font-bold text-sm text-ink block">
                  LinkedIn ↗
                </span>
                <span className="font-mono text-[10px] text-ink-muted block">
                  Network
                </span>
              </a>

              <a
                href={bioData.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => handleMouseEnter("GitHub Profile")}
                onMouseLeave={handleMouseLeave}
                className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all space-y-2 group cursor-pointer shadow-xs"
              >
                <svg className="w-5 h-5 text-indigo-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="font-sans font-bold text-sm text-ink block">
                  GitHub ↗
                </span>
                <span className="font-mono text-[10px] text-ink-muted block">
                  Explore Repos
                </span>
              </a>
            </div>

            {/* Response SLA Box */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 font-sans text-xs space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-brand font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-brand" />
                </span>
                <span>Fast Response SLA</span>
              </div>
              <p className="text-ink-secondary leading-relaxed">
                Responding to all verified engineering inquiries and internship opportunities within 24 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="studio-card p-8 sm:p-10 space-y-6 bg-white">
              
              <h3 className="text-xl font-sans font-bold text-ink border-b border-slate-100 pb-4">
                Send Direct Message
              </h3>

              {/* Subject Presets */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-ink-muted uppercase tracking-wider block">
                  Select Topic
                </label>
                <div className="flex flex-wrap gap-2">
                  {presetSubjects.map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: sub })}
                      className={`px-3.5 py-2 rounded-xl font-sans text-xs font-semibold transition-all cursor-pointer ${
                        formData.subject === sub
                          ? "bg-indigo-brand text-white shadow-xs"
                          : "bg-slate-50 border border-slate-200 text-ink-secondary hover:text-ink hover:bg-slate-100"
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-ink-muted uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white focus:outline-none text-ink text-sm placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-ink-muted uppercase tracking-wider block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white focus:outline-none text-ink text-sm placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-ink-muted uppercase tracking-wider block">
                    Message Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role, project, or collaboration proposal..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white focus:outline-none text-ink text-sm placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  onMouseEnter={() => handleMouseEnter("Submit Message")}
                  onMouseLeave={handleMouseLeave}
                  className="w-full py-4 rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-indigo-brand hover:bg-indigo-hover transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={15} />
                  <span>{status === "sending" ? "Transmitting..." : "Send Message"}</span>
                </button>

                {status === "success" && (
                  <div className="p-3 rounded-2xl bg-emerald-light border border-emerald-200 text-emerald-800 text-xs font-semibold text-center">
                    ✓ Message received! I will get back to you within 24 hours.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold text-center">
                    ✕ Something went wrong. Please email directly at {bioData.email}.
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
