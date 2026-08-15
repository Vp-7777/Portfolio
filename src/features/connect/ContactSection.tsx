"use client";

import { useState } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import { Section } from "@/features/ui/Section";
import bioData from "@/lib/content/bio.json";
import { Mail, FileText, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare } from "lucide-react";

export function ContactSection() {
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleMouseEnter = (label: string) => {
    setCursorVariant("hover");
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(bioData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <Section
      chapter="connect"
      className="relative bg-[#05040d] bg-grid-pattern border-t border-white/10 py-20 md:py-28 flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[550px] h-[550px] rounded-full bg-purple-700/15 blur-[180px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-700/15 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-base">

        {/* Section Header */}
        <div className="space-y-4 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-purple-300 tracking-wide border border-purple-500/30 rounded-full px-4 py-1 bg-purple-500/10 uppercase">
            <MessageSquare size={14} className="text-cyan-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
            Start A <span className="text-gradient-purple-cyan">Conversation</span>
          </h2>
          <p className="text-muted text-base md:text-lg font-sans leading-relaxed">
            Whether you have an engineering role opening, an AI system collaboration, or want to discuss machine learning architectures — let&apos;s connect!
          </p>
        </div>

        {/* Direct Email Link & Glassmorphic Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Email & Social Links */}
          <div className="lg:col-span-5 space-y-8">

            {/* Direct Email Copy Box */}
            <div className="p-7 rounded-[24px] glass-panel space-y-3 relative border border-white/10">
              <span className="font-sans text-xs font-semibold text-purple-300 uppercase tracking-wider block">
                Direct Email Access
              </span>
              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${bioData.email}`}
                  onMouseEnter={() => handleMouseEnter("Send Email")}
                  onMouseLeave={handleMouseLeave}
                  className="font-display font-bold text-white text-xl sm:text-2xl hover:text-cyan-300 transition-colors break-all"
                >
                  {bioData.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl border border-white/10 bg-surface-2 text-muted hover:text-white hover:border-cyan-400/50 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
              <p className="text-xs text-muted/70 font-sans">
                Click to open your mail client or use the copy button.
              </p>
            </div>

            {/* Quick Link Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {[
                {
                  href: bioData.linkedin,
                  text: "LinkedIn",
                  icon: (
                    <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  href: bioData.github,
                  text: "GitHub",
                  icon: (
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  ),
                },
                {
                  href: `mailto:${bioData.email}`,
                  text: "Email",
                  icon: <Mail size={16} className="text-amber-400" />,
                },
                {
                  href: "#",
                  text: "Resume",
                  icon: <FileText size={16} className="text-emerald-400" />,
                },
              ].map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  onMouseEnter={() => handleMouseEnter(link.text)}
                  onMouseLeave={handleMouseLeave}
                  className="glass-panel p-4 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer flex items-center justify-between font-sans text-xs font-semibold text-white uppercase tracking-wider"
                >
                  <div className="flex items-center gap-2.5">
                    {link.icon}
                    <span>{link.text}</span>
                  </div>
                  <span className="text-muted/40 text-xs">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Glassmorphic Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-[28px] glass-panel border border-white/10 space-y-6 relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 font-sans text-xs font-semibold text-cyan-400 uppercase">
                <span>Send a Direct Message</span>
                <span className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Avg Response Time: &lt; 2 Hours
                </span>
              </div>

              {/* Quick Topic Presets */}
              <div className="space-y-2 select-none">
                <span className="text-muted/90 uppercase font-sans font-semibold text-xs block">
                  Quick Message Templates:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, message: "Hi Vishal, I'd like to discuss a machine learning engineering opportunity with you!" })}
                    className="px-3.5 py-1.5 rounded-xl border border-purple-500/30 bg-purple-500/10 font-sans text-xs text-purple-300 hover:bg-purple-500/20 transition-colors cursor-pointer font-medium"
                  >
                    💼 Hire for AI Role
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, message: "Hi Vishal, I want to consult on AI & Machine Learning system architecture." })}
                    className="px-3.5 py-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 font-sans text-xs text-cyan-300 hover:bg-cyan-500/20 transition-colors cursor-pointer font-medium"
                  >
                    🤖 AI Architecture
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, message: "Hi Vishal, just reaching out to connect!" })}
                    className="px-3.5 py-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 font-sans text-xs text-amber-300 hover:bg-amber-500/20 transition-colors cursor-pointer font-medium"
                  >
                    ⚡ Quick Connect
                  </button>
                </div>
              </div>

              <div className="space-y-4 font-sans text-xs">
                <div className="space-y-2">
                  <label className="text-muted/90 font-semibold uppercase tracking-wider block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-2 border border-white/10 text-white placeholder:text-muted/50 focus:outline-none focus:border-cyan-400/80 transition-colors duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-muted/90 font-semibold uppercase tracking-wider block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-2 border border-white/10 text-white placeholder:text-muted/50 focus:outline-none focus:border-cyan-400/80 transition-colors duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-muted/90 font-semibold uppercase tracking-wider block">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-2 border border-white/10 text-white placeholder:text-muted/50 focus:outline-none focus:border-cyan-400/80 transition-colors duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 font-sans text-xs p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40">
                  <CheckCircle2 size={16} />
                  <span className="font-semibold">Message sent successfully! I will respond promptly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-rose-400 font-sans text-xs p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40">
                  <AlertCircle size={16} />
                  <span className="font-semibold">{errorMessage || "Transmission error. Please try again."}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                onMouseEnter={() => handleMouseEnter("Submit Message")}
                onMouseLeave={handleMouseLeave}
                className="w-full py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-purple-600/30"
                style={{
                  background: "linear-gradient(135deg, #9333ea, #6366f1, #22d3ee)",
                }}
              >
                <Send size={15} />
                <span>{status === "sending" ? "Sending Message..." : "Send Message"}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </Section>
  );
}
