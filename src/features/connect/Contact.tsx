"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, ExternalLink, Mail, MessageSquare, Phone, Send, Sparkles } from "lucide-react";
import bioData from "@/lib/content/bio.json";
import { ScrollReveal } from "@/features/motion/ScrollReveal";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
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
    <section id="contact" className="relative w-full py-28 sm:py-36 bg-[#08080A] text-[#ECEAE2]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-20">
        
        {/* Exact Reference Centered Massive Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-[5.8rem] text-white tracking-[-0.04em] uppercase leading-none">
              GET IN TOUCH
            </h2>

            <p className="font-mono text-xs sm:text-[13px] text-[#A1A1AA] tracking-[0.06em] uppercase max-w-2xl mx-auto leading-relaxed">
              OPEN TO HIGH-IMPACT SOFTWARE ENGINEERING AND ON-DEVICE AI ROLES. TRANSMIT A PROPOSAL OR REACH OUT DIRECTLY.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Direct Communication Deck & Status Beacon */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" delay={100}>
              
              {/* Availability Beacon Card */}
              <div className="rounded-[28px] bg-[#12131A]/95 border border-[#222430] p-7 space-y-3 shadow-xl shadow-black/60">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
                  <span className="font-mono text-xs font-bold text-[#10b981] uppercase tracking-wider">
                    CURRENT AVAILABILITY: ACTIVE
                  </span>
                </div>
                <p className="font-sans text-sm text-[#A1A1AA] leading-relaxed">
                  Open for full-time software engineering roles and production internships starting immediately. Responding within 24 hours.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-3 pt-1">
                
                {/* 1-Click Email Copy Card */}
                <div className="rounded-2xl bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-4.5 flex items-center justify-between gap-3 transition-all duration-300 shadow-lg">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-[#181A24] border border-white/10 flex items-center justify-center text-[#C5A059] shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-[#8C887B] uppercase block">Direct Email</span>
                      <a
                        href={`mailto:${bioData.email}`}
                        className="font-mono text-xs sm:text-sm text-white hover:text-[#C5A059] font-bold transition-colors truncate block"
                      >
                        {bioData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="font-mono text-[11px] font-bold text-white hover:text-black bg-white/10 hover:bg-white px-3.5 py-1.5 rounded-full uppercase flex items-center gap-1.5 cursor-pointer shrink-0 transition-all shadow-sm"
                  >
                    {copied ? <Check size={12} className="text-[#10b981]" /> : <Copy size={12} />}
                    <span>{copied ? "COPIED" : "COPY"}</span>
                  </button>
                </div>

                {/* Direct Phone Card */}
                <div className="rounded-2xl bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-4.5 flex items-center gap-3.5 transition-all duration-300 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-[#181A24] border border-white/10 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[#8C887B] uppercase block">Direct Phone</span>
                    <a
                      href="tel:+917043624030"
                      className="font-mono text-xs sm:text-sm text-white hover:text-[#C5A059] font-bold transition-colors"
                    >
                      +91-7043624030
                    </a>
                  </div>
                </div>

                {/* Social Quick Links */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={bioData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-4 text-center font-mono text-xs font-bold text-white hover:text-[#C5A059] uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink size={12} className="text-[#C5A059]" />
                  </a>

                  <a
                    href={bioData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-[#12131A]/95 border border-[#222430] hover:border-[#C5A059]/40 p-4 text-center font-mono text-xs font-bold text-white hover:text-[#C5A059] uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <span>GitHub</span>
                    <GithubIcon className="w-4 h-4 text-[#C5A059]" />
                  </a>
                </div>

              </div>

            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Rounded Dark Obsidian Message Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={150}>
              <form
                onSubmit={handleSubmit}
                className="rounded-[32px] sm:rounded-[36px] bg-[#12131A]/95 border border-[#222430] p-8 sm:p-12 space-y-6 shadow-2xl shadow-black/80"
              >
                <div className="space-y-1 border-b border-white/10 pb-4">
                  <span className="font-mono text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                    TRANSMIT AN ENGINEERING PROPOSAL
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Send a Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Turing"
                      className="w-full px-4 py-3.5 bg-[#181A24] border border-white/10 rounded-xl text-white placeholder-[#736E62] font-sans text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 bg-[#181A24] border border-white/10 rounded-xl text-white placeholder-[#736E62] font-sans text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block">
                    Project / Role Scope
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your engineering role, project scope, or schedule..."
                    className="w-full px-4 py-3.5 bg-[#181A24] border border-white/10 rounded-xl text-white placeholder-[#736E62] font-sans text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#ECEAE2] text-black font-mono text-xs uppercase font-bold tracking-wider rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-black/50 flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-105"
                >
                  <Send size={13} className="text-black" />
                  <span>
                    {status === "sending"
                      ? "TRANSMITTING..."
                      : status === "sent"
                      ? "PROPOSAL TRANSMITTED ✓"
                      : "TRANSMIT PROPOSAL ↗"}
                  </span>
                </button>
              </form>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
