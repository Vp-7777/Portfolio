"use client";

import { useState } from "react";
import bioData from "@/lib/content/bio.json";

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
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[rgba(27,23,16,0.15)] pb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
              CONTACT
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1B1710] tracking-tight">
              Get in Touch
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5C5344] max-w-md">
            Open to full-stack and AI engineering roles. Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#A9793C] tracking-[0.08em] uppercase block">
                DIRECT CHANNELS
              </span>
              <p className="font-sans text-sm text-[#5C5344] leading-relaxed">
                Feel free to email directly or connect on professional networks. Responding to engineering inquiries within 24 hours.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-between p-4 border border-[rgba(27,23,16,0.22)] bg-[#EEE6D4]/60">
                <a
                  href={`mailto:${bioData.email}`}
                  className="text-[#1B1710] hover:text-[#7C5A2C] transition-colors truncate font-semibold"
                >
                  ✉ {bioData.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="text-[11px] text-[#7C5A2C] hover:text-[#1B1710] font-bold uppercase tracking-wider cursor-pointer ml-2 px-2 py-1 bg-[#F6F1E7] border border-[rgba(27,23,16,0.12)]"
                >
                  {copied ? "COPIED ✓" : "COPY"}
                </button>
              </div>

              <div className="p-4 border border-[rgba(27,23,16,0.22)] bg-[#EEE6D4]/60">
                <a
                  href="tel:+917043624030"
                  className="text-[#1B1710] hover:text-[#7C5A2C] transition-colors font-semibold block"
                >
                  ☎ +91-7043624030
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={bioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 border border-[rgba(27,23,16,0.22)] bg-[#EEE6D4]/60 hover:bg-[#EEE6D4] text-center text-[#1B1710] hover:text-[#7C5A2C] transition-colors font-bold uppercase text-xs"
                >
                  LinkedIn ↗
                </a>

                <a
                  href={bioData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 border border-[rgba(27,23,16,0.22)] bg-[#EEE6D4]/60 hover:bg-[#EEE6D4] text-center text-[#1B1710] hover:text-[#7C5A2C] transition-colors font-bold uppercase text-xs"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Message Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 font-sans">
                  <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#5C5344] block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Turing"
                    className="w-full px-4 py-3 rounded-none bg-[#EEE6D4]/50 border border-[rgba(27,23,16,0.25)] text-[#1B1710] placeholder-[#7A7160] font-sans text-sm focus:outline-none focus:border-[#A9793C] focus:bg-[#F6F1E7] transition-all"
                  />
                </div>

                <div className="space-y-1.5 font-sans">
                  <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#5C5344] block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-none bg-[#EEE6D4]/50 border border-[rgba(27,23,16,0.25)] text-[#1B1710] placeholder-[#7A7160] font-sans text-sm focus:outline-none focus:border-[#A9793C] focus:bg-[#F6F1E7] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5 font-sans">
                <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#5C5344] block">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your role or project proposal..."
                  className="w-full px-4 py-3 rounded-none bg-[#EEE6D4]/50 border border-[rgba(27,23,16,0.25)] text-[#1B1710] placeholder-[#7A7160] font-sans text-sm focus:outline-none focus:border-[#A9793C] focus:bg-[#F6F1E7] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1B1710] hover:bg-[#7C5A2C] text-[#F6F1E7] font-mono text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer shadow-xs disabled:opacity-50"
              >
                {status === "sending"
                  ? "Transmitting..."
                  : status === "sent"
                  ? "Message Sent Successfully ✓"
                  : "[ Send Proposal ↗ ]"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
