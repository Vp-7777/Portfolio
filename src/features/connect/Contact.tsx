"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Mail, MessageSquare, Phone, Send, Sparkles } from "lucide-react";
import bioData from "@/lib/content/bio.json";
import { ScrollReveal } from "@/features/motion/ScrollReveal";

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
    <section id="contact" className="relative w-full py-24 sm:py-32">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                INITIATE CONTACT
              </span>
              <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
                Get in Touch
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
              Open to software engineering and AI systems roles. Reach out directly or transmit a proposal below.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column (5 cols): Direct Communication Deck */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" delay={100}>
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                  DIRECT CHANNELS
                </span>
                <p className="font-sans text-sm text-[#5C5344] leading-relaxed">
                  Feel free to email directly or connect on professional networks. Responding to engineering inquiries within 24 hours.
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-3 pt-2">
                
                {/* Email Card with 1-Click Copy */}
                <div className="frosted-card p-4 rounded-none flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-none bg-[#EEE6D4] border border-[rgba(27,23,16,0.1)] flex items-center justify-center text-[#A9793C] shrink-0">
                      <Mail size={14} />
                    </div>
                    <a
                      href={`mailto:${bioData.email}`}
                      className="font-mono text-xs sm:text-sm text-[#1B1710] hover:text-[#7C5A2C] font-semibold transition-colors truncate"
                    >
                      {bioData.email}
                    </a>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="font-mono text-[10.5px] font-bold text-[#7C5A2C] hover:text-[#1B1710] bg-[#EEE6D4] hover:bg-[#F6F1E7] border border-[rgba(27,23,16,0.12)] px-3 py-1.5 uppercase flex items-center gap-1 cursor-pointer shrink-0 transition-colors"
                  >
                    {copied ? <Check size={11} className="text-[#10b981]" /> : <Copy size={11} />}
                    <span>{copied ? "COPIED" : "COPY"}</span>
                  </button>
                </div>

                {/* Phone Card */}
                <div className="frosted-card p-4 rounded-none flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#EEE6D4] border border-[rgba(27,23,16,0.1)] flex items-center justify-center text-[#A9793C] shrink-0">
                    <Phone size={14} />
                  </div>
                  <a
                    href="tel:+917043624030"
                    className="font-mono text-xs sm:text-sm text-[#1B1710] hover:text-[#7C5A2C] font-semibold transition-colors"
                  >
                    +91-7043624030
                  </a>
                </div>

                {/* Social Channels */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={bioData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="frosted-card p-3.5 rounded-none text-center font-mono text-xs font-bold text-[#1B1710] hover:text-[#7C5A2C] uppercase flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink size={11} className="text-[#A9793C]" />
                  </a>

                  <a
                    href={bioData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="frosted-card p-3.5 rounded-none text-center font-mono text-xs font-bold text-[#1B1710] hover:text-[#7C5A2C] uppercase flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>GitHub</span>
                    <ExternalLink size={11} className="text-[#A9793C]" />
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Frosted Glass Message Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={150}>
              <form onSubmit={handleSubmit} className="frosted-card p-8 sm:p-9 rounded-none space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#5C5344] block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Turing"
                      className="w-full px-4 py-3 bg-[#F6F1E7]/90 border border-[rgba(27,23,16,0.2)] text-[#1B1710] placeholder-[#9C9280] font-sans text-sm focus:outline-none focus:border-[#A9793C] transition-all rounded-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#5C5344] block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 bg-[#F6F1E7]/90 border border-[rgba(27,23,16,0.2)] text-[#1B1710] placeholder-[#9C9280] font-sans text-sm focus:outline-none focus:border-[#A9793C] transition-all rounded-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#5C5344] block">
                    Message & Role Scope
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your engineering role, project scope, or interview schedule..."
                    className="w-full px-4 py-3 bg-[#F6F1E7]/90 border border-[rgba(27,23,16,0.2)] text-[#1B1710] placeholder-[#9C9280] font-sans text-sm focus:outline-none focus:border-[#A9793C] transition-all resize-none rounded-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1B1710] hover:bg-[#7C5A2C] text-[#F6F1E7] font-mono text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer shadow-md shadow-[#1B1710]/10 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={12} className="text-[#A9793C]" />
                  <span>
                    {status === "sending"
                      ? "TRANSMITTING..."
                      : status === "sent"
                      ? "MESSAGE TRANSMITTED ✓"
                      : "[ SEND PROPOSAL ↗ ]"}
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
