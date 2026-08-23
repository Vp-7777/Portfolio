"use client";

import { useState } from "react";
import { Cpu, Database, Play, Server, ShieldCheck, Terminal, Zap } from "lucide-react";

export function ServerTerminalMockup() {
  const [activeTab, setActiveTab] = useState<"ai" | "backend" | "db">("ai");

  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none group">
      
      {/* Ambient Server Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#10B981]/15 via-[#C5A059]/20 to-[#8B5CF6]/15 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

      {/* Terminal Window Frame */}
      <div className="relative rounded-2xl bg-[#0E0F14] border border-[#262838] shadow-2xl shadow-black/90 overflow-hidden text-[#ECEAE2]">
        
        {/* Top Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161720] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
          </div>

          <div className="font-mono text-[11px] text-[#A1A1AA] flex items-center gap-1.5">
            <Terminal size={12} className="text-[#C5A059]" />
            <span>vishal@srm-ai-server: ~ /stack</span>
          </div>

          <span className="font-mono text-[9px] text-[#10B981] font-bold bg-[#10B981]/10 px-2 py-0.5 rounded-full border border-[#10B981]/30">
            ONLINE
          </span>
        </div>

        {/* Server Sub-Tabs */}
        <div className="flex border-b border-white/10 bg-[#12131A] font-mono text-xs">
          <button
            onClick={() => setActiveTab("ai")}
            className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-2 transition-all cursor-pointer border-r border-white/5 ${
              activeTab === "ai"
                ? "bg-[#1A1815] text-[#C5A059] border-b-2 border-b-[#C5A059] font-bold"
                : "text-[#8C887B] hover:text-white"
            }`}
          >
            <Cpu size={13} />
            <span>AI & Vision</span>
          </button>

          <button
            onClick={() => setActiveTab("backend")}
            className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-2 transition-all cursor-pointer border-r border-white/5 ${
              activeTab === "backend"
                ? "bg-[#1A1815] text-[#C5A059] border-b-2 border-b-[#C5A059] font-bold"
                : "text-[#8C887B] hover:text-white"
            }`}
          >
            <Server size={13} />
            <span>FastAPI & Backend</span>
          </button>

          <button
            onClick={() => setActiveTab("db")}
            className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "db"
                ? "bg-[#1A1815] text-[#C5A059] border-b-2 border-b-[#C5A059] font-bold"
                : "text-[#8C887B] hover:text-white"
            }`}
          >
            <Database size={13} />
            <span>DB & Cloud</span>
          </button>
        </div>

        {/* Console Execution Display */}
        <div className="p-5 font-mono text-xs space-y-4">
          
          {activeTab === "ai" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="text-[#A1A1AA]">
                <span className="text-[#10B981] font-bold">$</span> python -m onnxruntime.infer --model vit-mobilenet
              </div>

              <div className="p-3 bg-black/50 border border-white/10 rounded-xl space-y-2 text-[11px]">
                <div className="flex items-center justify-between text-[#C5A059] font-bold">
                  <span>ONNX Quantized INT8 Engine</span>
                  <span className="text-[#10B981]">&lt; 14.2ms</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[#A1A1AA] pt-1">
                  <div className="bg-white/5 p-2 rounded">PyTorch CUDA Tensor: 100%</div>
                  <div className="bg-white/5 p-2 rounded">Precision mAP: 96.8%</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 text-[10px] text-[#A1A1AA]">
                {["PyTorch", "ONNX Runtime", "Computer Vision", "MobileNetV3", "Vision Transformers", "Generative AI"].map((tool) => (
                  <span key={tool} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "backend" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="text-[#A1A1AA]">
                <span className="text-[#10B981] font-bold">$</span> uvicorn main:app --host 0.0.0.0 --port 8000 --reload
              </div>

              <div className="p-3 bg-black/50 border border-white/10 rounded-xl space-y-2 text-[11px]">
                <div className="flex items-center justify-between text-[#C5A059] font-bold">
                  <span>FastAPI Async Event Loop</span>
                  <span className="text-[#10B981]">120 FPS Stream</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[#A1A1AA] pt-1">
                  <div className="bg-white/5 p-2 rounded">Microservice: QRaptor AI</div>
                  <div className="bg-white/5 p-2 rounded">JWT Auth Sessions: Active</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 text-[10px] text-[#A1A1AA]">
                {["FastAPI", "Python", "Node.js", "Express.js", "REST APIs", "JWT Auth"].map((tool) => (
                  <span key={tool} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "db" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="text-[#A1A1AA]">
                <span className="text-[#10B981] font-bold">$</span> docker run -d -p 5432:5432 postgres:16-alpine
              </div>

              <div className="p-3 bg-black/50 border border-white/10 rounded-xl space-y-2 text-[11px]">
                <div className="flex items-center justify-between text-[#C5A059] font-bold">
                  <span>PostgreSQL ACID Engine</span>
                  <span className="text-[#10B981]">2.1ms Latency</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[#A1A1AA] pt-1">
                  <div className="bg-white/5 p-2 rounded">Docker Container: Up</div>
                  <div className="bg-white/5 p-2 rounded">AWS Cloud: Certified</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 text-[10px] text-[#A1A1AA]">
                {["PostgreSQL", "MySQL", "Docker", "AWS Cloud", "Git / GitHub", "Vercel"].map((tool) => (
                  <span key={tool} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
