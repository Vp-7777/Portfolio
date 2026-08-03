"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSystemStore } from "@/store/useSystemStore";
import { Section } from "@/features/ui/Section";
import { ProfileCards } from "./ProfileCards";
import { useCountUp } from "@/lib/hooks/useCountUp";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const metrics = [
  {
    index: "01",
    title: "Academic Score",
    value: "9.70",
    unit: "CGPA",
    desc: "Computer Science Engineering with specialized focus in Artificial Intelligence and Machine Learning models.",
  },
  {
    index: "02",
    title: "AI & ML Models",
    value: "10+",
    unit: "SYSTEMS",
    desc: "Engineered and sandbox tested models ranging from offline prediction engines to distributed computer vision pipelines.",
  },
  {
    index: "03",
    title: "Open Source Code",
    value: "12+",
    unit: "PUBLIC REPOS",
    desc: "Maintained active repositories featuring full-stack applications, ML notebooks, and custom system tools.",
  },
  {
    index: "04",
    title: "Code Quality",
    value: "100%",
    unit: "REFACTOR RATE",
    desc: "Iterative design philosophy ensuring algorithms and layouts are continuously benchmarked and calibrated.",
  },
];

function MetricCardItem({
  m,
  onMouseEnter,
  onMouseLeave,
}: {
  m: (typeof metrics)[0];
  onMouseEnter: (title: string) => void;
  onMouseLeave: () => void;
}) {
  const { displayValue, elementRef } = useCountUp(m.value, { end: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onMouseEnter(m.title)}
      onMouseLeave={onMouseLeave}
      className="metric-card spotlight-card group p-7 rounded-xl space-y-8 flex flex-col justify-between cursor-default transition-all duration-300 hover:border-amber-500/50"
      style={{
        boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
      }}
    >
      <div className="space-y-4 relative z-base">
        <span className="font-sans text-xs font-semibold text-purple-300 block tracking-wide uppercase">
          0{m.index} · {m.title}
        </span>

        {/* Large metric value with amber gradient */}
        <div
          className="font-display font-extrabold tracking-tight leading-none text-amber-400"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {displayValue}
          <span className="text-base font-sans font-semibold text-cyan-400 ml-2">{m.unit}</span>
        </div>
      </div>

      <p className="text-muted text-xs md:text-sm font-sans leading-relaxed pt-4 border-t border-border-subtle/45 relative z-base group-hover:text-foreground/80 transition-colors duration-300">
        {m.desc}
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 transition-all duration-500 rounded-b-xl" />
    </div>
  );
}

export function GrowthSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const reducedMotion = useSystemStore((state) => state.reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    if (!containerRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".metric-card");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 72%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const handleMouseEnter = (title: string) => {
    setCursorVariant("hover");
    setCursorLabel(title);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  return (
    <Section
      ref={containerRef}
      chapter="growth"
      className="relative bg-background border-t border-border-subtle py-16 md:py-24 overflow-hidden"
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-700 opacity-10 blur-[160px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-indigo-700 opacity-10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative">

        {/* Header */}
        <div className="space-y-4 max-w-2xl select-none">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-purple-300 tracking-wide border border-purple-500/30 rounded-full px-3.5 py-1 bg-purple-500/10 uppercase">
            Growth & Momentum
          </div>
          <h2
            className="font-display font-extrabold uppercase tracking-tight leading-[0.9]"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            EVOLVING &{" "}
            <span
              className="italic font-light"
              style={{
                background: "linear-gradient(135deg, #c084fc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              GROWING
            </span>
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-md font-sans">
            Metrics and key milestones demonstrating continuous technical development
            and expansion across algorithms and systems.
          </p>
        </div>

        {/* Metrics Grid with animated numbers */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {metrics.map((m) => (
            <MetricCardItem
              key={m.index}
              m={m}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        {/* Profile section header */}
        <div className="pt-4 space-y-2 select-none border-t border-border-subtle/50">
          <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-cyan-300 tracking-wide border border-cyan-500/30 rounded-full px-3.5 py-1 bg-cyan-500/10 uppercase mb-2">
            Verified Links & Accounts
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-foreground">
            ONLINE PRESENCE & PROFILES
          </h3>
        </div>

        {/* Profile Card Widgets */}
        <ProfileCards />
      </div>
    </Section>
  );
}
