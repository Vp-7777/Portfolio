"use client";

import { useState } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import { Section } from "@/features/ui/Section";
import bioData from "@/lib/content/bio.json";
import { Mail, FileText, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactSection() {
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <Section
      chapter="connect"
      className="relative bg-background border-t border-border-subtle py-16 md:py-24 flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-700 opacity-12 blur-[180px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] rounded-full bg-indigo-700 opacity-10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-16 relative">

        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-purple-300 tracking-wide border border-purple-500/30 rounded-full px-3.5 py-1 bg-purple-500/10 uppercase">
            Get In Touch
          </div>
          <h2
            className="font-display font-extrabold uppercase tracking-tight leading-none"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            START A{" "}
            <span
              className="italic font-light"
              style={{
                background: "linear-gradient(135deg, #c084fc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CONVERSATION
            </span>
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-md font-sans">
            Whether it is an engineering opportunity, system architecture discussion,
            or model calibration proposal, the inbox is monitored.
          </p>
        </div>

        {/* Big Interactive Email Link & Glassmorphic Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Email & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="py-6 border-t border-b border-border-subtle/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              <span className="font-mono text-[10px] text-muted tracking-widest uppercase block mb-2">
                DIRECT INBOX ACCESS
              </span>
              <a
                href={`mailto:${bioData.email}`}
                onMouseEnter={() => handleMouseEnter("SEND // MAIL")}
                onMouseLeave={handleMouseLeave}
                className="group block font-display font-bold text-foreground tracking-tight break-all cursor-pointer select-none transition-all duration-500 text-2xl md:text-3xl text-white hover:text-cyan-300"
              >
                {bioData.email}
              </a>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            </div>

            {/* Anchors Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  href: bioData.linkedin,
                  label: "LINK // LINKEDIN",
                  text: "LINKEDIN",
                  icon: (
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  href: bioData.github,
                  label: "LINK // GITHUB",
                  text: "GITHUB",
                  icon: (
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  ),
                },
                {
                  href: `mailto:${bioData.email}`,
                  label: "SEND // EMAIL",
                  text: "EMAIL",
                  icon: <Mail size={16} className="text-accent" />,
                },
                {
                  href: "#",
                  label: "DOWNLOAD // RESUME",
                  text: "RESUME",
                  icon: <FileText size={16} className="text-accent" />,
                },
              ].map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                  className="group flex items-center gap-2.5 p-3.5 rounded-xl border border-border-subtle/50 bg-surface-1/40 backdrop-blur-sm hover:border-purple-600/50 hover:bg-surface-2/50 transition-all duration-300 cursor-pointer font-mono text-xs text-muted hover:text-foreground uppercase tracking-widest"
                >
                  {link.icon}
                  <span>{link.text}</span>
                  <span className="ml-auto text-muted/40 group-hover:text-cyan-400 transition-colors duration-300 text-[10px]">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Glassmorphic Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-border-subtle/60 bg-surface-1/40 backdrop-blur-xl space-y-6 relative"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
            >
              <div className="flex items-center justify-between border-b border-border-subtle/50 pb-4 font-mono text-[10px] text-accent tracking-widest uppercase">
                <span>[ FORM // TRANSMISSION_TERMINAL ]</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="space-y-2">
                  <label className="text-muted/80 uppercase tracking-widest block text-[10px]">
                    01 // SENDER NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-border-subtle text-foreground focus:outline-none focus:border-cyan-400/80 transition-colors duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-muted/80 uppercase tracking-widest block text-[10px]">
                    02 // SENDER EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-border-subtle text-foreground focus:outline-none focus:border-cyan-400/80 transition-colors duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-muted/80 uppercase tracking-widest block text-[10px]">
                    03 // TRANSMISSION MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-border-subtle text-foreground focus:outline-none focus:border-cyan-400/80 transition-colors duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30">
                  <CheckCircle2 size={14} />
                  <span>TRANSMISSION RECEIVED // SUCCESSFUL</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs p-3 rounded-lg bg-rose-950/40 border border-rose-500/30">
                  <AlertCircle size={14} />
                  <span>{errorMessage || "Transmission error. Please try again."}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                onMouseEnter={() => handleMouseEnter("SUBMIT // TRANSMISSION")}
                onMouseLeave={handleMouseLeave}
                className="w-full py-3.5 rounded-xl font-mono text-xs tracking-widest uppercase text-white font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] disabled:opacity-50"
                style={{
                  background: "linear-gradient(135deg, #9333ea, #22d3ee)",
                  boxShadow: "0 4px 20px rgba(147,51,234,0.35)",
                }}
              >
                <Send size={14} />
                {status === "sending" ? "TRANSMITTING..." : "SEND TRANSMISSION"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </Section>
  );
}
