"use client";

import { useState } from "react";
import { Terminal, Play, CheckCircle2, Cpu, ShieldCheck, Sparkles, CornerDownLeft } from "lucide-react";
import bioData from "@/lib/content/bio.json";

interface CommandResult {
  command: string;
  output: string | React.ReactNode;
  time: string;
}

export function HeroTerminal() {
  const [activeCommand, setActiveCommand] = useState<string>("run_model('AutisMind')");
  const [inputVal, setInputVal] = useState<string>("");
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [history, setHistory] = useState<CommandResult[]>([
    {
      command: "run_model('AutisMind')",
      output: (
        <div className="space-y-1 text-[11px] font-mono">
          <div className="text-emerald-400">✓ Model Loaded: MobileNetV3 Quantized (ONNX Runtime)</div>
          <div className="text-muted">· Execution Target: Local Client Thread (100% Offline)</div>
          <div className="text-cyan-300">· Latency Benchmark: 14.2 ms | Memory: 4.2 MB RAM</div>
          <div className="text-amber-300">· Status: Operational @ https://autis-mind-ai.vercel.app/</div>
        </div>
      ),
      time: "21:04:12",
    },
  ]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;
    setIsExecuting(true);

    setTimeout(() => {
      let outputNode: React.ReactNode;
      const lower = trimmed.toLowerCase();

      if (lower.includes("autismind") || lower.includes("model")) {
        outputNode = (
          <div className="space-y-1 text-[11px] font-mono">
            <div className="text-emerald-400">✓ Model Loaded: MobileNetV3 Quantized (ONNX Runtime)</div>
            <div className="text-muted">· Execution Target: Local Client Thread (100% Offline)</div>
            <div className="text-cyan-300">· Latency Benchmark: 14.2 ms | Memory: 4.2 MB RAM</div>
            <div className="text-amber-300">· Status: Live @ https://autis-mind-ai.vercel.app/</div>
          </div>
        );
      } else if (lower.includes("credential") || lower.includes("education") || lower.includes("cgpa")) {
        outputNode = (
          <div className="space-y-1 text-[11px] font-mono">
            <div className="text-amber-300">🎓 Degree: B.Tech CSE (AI & ML Specialization) @ SRM IST</div>
            <div className="text-emerald-400">🏆 CGPA: 9.74 / 10 (97.4%) · Semester 2: 10.0 / 10 Perfect GPA</div>
            <div className="text-cyan-300">📜 Certifications: ISRO/IIRS (Geodata ML), AWS Cloud Practitioner, BNY Spectrum</div>
          </div>
        );
      } else if (lower.includes("resume") || lower.includes("cv")) {
        window.open(bioData.resumeUrl, "_blank");
        outputNode = (
          <div className="text-[11px] font-mono text-cyan-300">
            ✓ Official Google Drive Resume opened in a new tab.
          </div>
        );
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire")) {
        const el = document.querySelector('[data-chapter="connect"]');
        if (el) el.scrollIntoView({ behavior: "smooth" });
        outputNode = (
          <div className="text-[11px] font-mono text-purple-300">
            ✓ Navigating to contact portal · Email: {bioData.email}
          </div>
        );
      } else if (lower.includes("clear")) {
        setHistory([]);
        setIsExecuting(false);
        return;
      } else {
        outputNode = (
          <div className="text-[11px] font-mono text-rose-400">
            Command not recognized. Try: run_model(&apos;AutisMind&apos;), inspect_credentials(), open_resume(), or contact_vishal()
          </div>
        );
      }

      setHistory((prev) => [
        ...prev.slice(-2),
        {
          command: trimmed,
          output: outputNode,
          time: new Date().toLocaleTimeString("en-US", { hour12: false }),
        },
      ]);
      setIsExecuting(false);
      setInputVal("");
    }, 200);
  };

  const handlePresetClick = (cmd: string) => {
    setActiveCommand(cmd);
    executeCommand(cmd);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    }
  };

  return (
    <div className="rounded-2xl glass-panel border border-cyan-500/20 shadow-2xl overflow-hidden font-mono text-xs select-none">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0d17] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] text-muted/80 ml-2 flex items-center gap-1.5 font-semibold">
            <Terminal size={12} className="text-cyan-400" />
            <span>vishal@neural-hub:~</span>
          </span>
        </div>

        <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md uppercase font-bold">
          Interactive AI Sandbox
        </span>
      </div>

      {/* Preset Action Chips */}
      <div className="px-4 py-2 bg-[#0d101d]/60 border-b border-white/5 flex flex-wrap gap-1.5">
        {[
          { label: "run_model('AutisMind')", cmd: "run_model('AutisMind')" },
          { label: "inspect_credentials()", cmd: "inspect_credentials()" },
          { label: "open_resume()", cmd: "open_resume()" },
          { label: "contact_vishal()", cmd: "contact_vishal()" },
        ].map((p) => (
          <button
            key={p.cmd}
            onClick={() => handlePresetClick(p.cmd)}
            className="text-[10px] px-2.5 py-1 rounded-md bg-surface-2 border border-white/10 text-muted hover:text-cyan-300 hover:border-cyan-400/40 transition-colors cursor-pointer"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Terminal Output Log Area */}
      <div className="p-4 space-y-3 max-h-48 overflow-y-auto bg-[#070913]/90">
        {history.map((h, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-muted/70 text-[10px]">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="text-white font-semibold">{h.command}</span>
              <span className="ml-auto opacity-50">{h.time}</span>
            </div>
            <div className="pl-3">{h.output}</div>
          </div>
        ))}

        {isExecuting && (
          <div className="text-cyan-400 text-[11px] animate-pulse">
            Computing neural tensor weights...
          </div>
        )}
      </div>

      {/* Terminal Input Line */}
      <div className="px-4 py-2.5 bg-[#0a0d17] border-t border-white/10 flex items-center gap-2">
        <span className="text-cyan-400 font-bold">&gt;</span>
        <input
          type="text"
          placeholder="Type command (e.g. inspect_credentials) or click presets above..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-white text-xs font-mono placeholder:text-muted/40 focus:outline-none"
        />
        <button
          onClick={() => executeCommand(inputVal)}
          className="p-1 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900 transition-colors cursor-pointer"
          title="Run command"
        >
          <CornerDownLeft size={12} />
        </button>
      </div>
    </div>
  );
}
