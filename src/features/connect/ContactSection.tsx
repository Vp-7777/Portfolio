"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  FileText,
  Mail,
  Send,
  Sparkles,
  ArrowUpRight,
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

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("SDE / AI Internship Role");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(bioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 600);
  };

  return (
    <section
      data-chapter="contact"
      className="relative w-full py-28 px-6 sm:px-10 lg:px-12 bg-[#090d16] bg-dark-grid"
    >
      {/* Background Radial Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-600/12 blur-[160px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-xs">
            <Sparkles size={13} className="text-indigo-400" />
            <span className="font-sans text-xs font-bold text-slate-200 uppercase tracking-wider">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white">
            Let&apos;s Build the Future <br className="hidden sm:inline" />
            <span className="text-brand-gradient">Together.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Open for software engineering internships, AI/ML research opportunities, and high-impact product engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Channels & Verified Résumé */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Direct Channel Card */}
            <div className="bento-card p-7 space-y-5 border border-white/15">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                Primary Direct Channel
              </span>
              
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#090d16]/90 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Mail size={15} />
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">
                    {bioData.email}
                  </span>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Fast Response Guarantee */}
              <div className="flex items-center gap-2 font-sans text-xs text-emerald-400 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Responding to all engineering inquiries within 24 hours.</span>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={bioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="bento-card p-4 rounded-2xl border border-white/10 hover:border-indigo-500/40 text-center space-y-2 group transition-all"
              >
                <FileText size={18} className="mx-auto text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-white block">Résumé</span>
                <span className="text-[10px] font-mono text-slate-400 block">Google Drive</span>
              </a>

              <a
                href={bioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bento-card p-4 rounded-2xl border border-white/10 hover:border-sky-500/40 text-center space-y-2 group transition-all"
              >
                <LinkedInIcon className="mx-auto text-sky-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-white block">LinkedIn</span>
                <span className="text-[10px] font-mono text-slate-400 block">Network</span>
              </a>

              <a
                href={bioData.github}
                target="_blank"
                rel="noreferrer"
                className="bento-card p-4 rounded-2xl border border-white/10 hover:border-emerald-500/40 text-center space-y-2 group transition-all"
              >
                <GitHubIcon className="mx-auto text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-white block">GitHub</span>
                <span className="text-[10px] font-mono text-slate-400 block">Repositories</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bento-card p-8 sm:p-10 border border-white/15 space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-sans text-xl font-bold text-white">
                  Send Direct Message
                </h3>
                <p className="font-sans text-xs text-slate-400">
                  Select a topic and submit your project or role proposal.
                </p>
              </div>

              {/* Topic Selector Chips */}
              <div className="space-y-2">
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                  Select Topic
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SDE / AI Internship Role",
                    "Full-Stack Collaboration",
                    "Research & Machine Learning",
                    "General Inquiry",
                  ].map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3 py-1.5 rounded-xl font-sans text-xs font-semibold transition-all cursor-pointer border ${
                        selectedTopic === topic
                          ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                          : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase font-mono text-[10px]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Turing"
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16]/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase font-mono text-[10px]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16]/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 font-sans text-xs">
                  <label className="text-slate-300 font-semibold uppercase font-mono text-[10px]">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={`Describe your opportunity or project proposal...`}
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16]/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send size={13} />
                  <span>
                    {status === "sending"
                      ? "Transmitting..."
                      : status === "sent"
                      ? "Message Transmitted Successfully ✓"
                      : "Send Direct Message"}
                  </span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
