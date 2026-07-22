"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSystemStore } from "@/store/useSystemStore";
import { Section } from "@/features/ui/Section";
import { ProfileCards } from "./ProfileCards";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const metrics = [
  {
    index: "01",
    title: "ACADEMIC CALIBRATION",
    value: "9.70",
    unit: "CGPA",
    desc: "Computer Science Engineering with specialized focus in Artificial Intelligence and Machine Learning models.",
    color: "from-purple-500 to-violet-600",
  },
  {
    index: "02",
    title: "MODEL ORCHESTRATION",
    value: "10+",
    unit: "SYSTEMS",
    desc: "Engineered and sandbox tested models ranging from offline prediction engines to distributed computer vision pipelines.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    index: "03",
    title: "CODE OWNERSHIP",
    value: "12+",
    unit: "PUBLIC REPOS",
    desc: "Maintained active repositories featuring full-stack applications, ML notebooks, and custom system tools.",
    color: "from-violet-500 to-purple-600",
  },
  {
    index: "04",
    title: "CONTINUOUS FEEDBACK",
    value: "100%",
    unit: "REFACTOR RATE",
    desc: "Iterative design philosophy ensuring algorithms and layouts are continuously benchmarked and calibrated.",
    color: "from-fuchsia-500 to-pink-600",
  },
];

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseEnter = (title: string) => {
    setCursorVariant("hover");
    setCursorLabel(`BENCHMARK // ${title}`);
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
    setCursorLabel(null);
  };

  return (
    <Section
      ref={containerRef}
      chapter="growth"
      className="relative bg-background border-t border-border-subtle py-28 md:py-36 overflow-hidden"
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-700 opacity-10 blur-[160px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-indigo-700 opacity-10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative">

        {/* Header */}
        <div className="space-y-5 max-w-2xl select-none">
          <div className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase">
            [ CH.05 // MOMENTUM & GROWTH ]
          </div>
          <h2
            className="font-display font-extrabold uppercase tracking-tight leading-[0.9]"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              background: "linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CONTINUOUSLY{" "}
            <span
              className="italic font-light"
              style={{
                background: "linear-gradient(135deg, #c084fc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              RE-CALIBRATING
            </span>
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-md font-sans">
            Engineering is not a stationary state; it is a trajectory. Metrics and benchmarks
            demonstrating the continuous development and expansion of system parameters.
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {metrics.map((m) => (
            <div
              key={m.index}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(m.title)}
              onMouseLeave={handleMouseLeave}
              className="metric-card spotlight-card group p-7 rounded-xl space-y-8 flex flex-col justify-between cursor-default transition-all duration-300 hover:border-purple-700/50"
              style={{
                opacity: reducedMotion ? 1 : undefined,
                boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div className="space-y-4 relative z-base">
                <span className="font-mono text-[10px] text-muted/70 block tracking-widest uppercase">
                  PARAM.{m.index} {"//"} {m.title}
                </span>

                {/* Large metric value with gradient */}
                <div
                  className="font-display font-extrabold tracking-tight leading-none"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    background: `linear-gradient(135deg, #ffffff, #c084fc)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {m.value}
                  <span className="text-base font-mono font-normal text-accent ml-2">{m.unit}</span>
                </div>
              </div>

              <p className="text-muted text-xs md:text-sm font-sans leading-relaxed pt-4 border-t border-border-subtle/45 relative z-base group-hover:text-foreground/80 transition-colors duration-300">
                {m.desc}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/50 transition-all duration-500 rounded-b-xl" />
            </div>
          ))}
        </div>

        {/* Profile section header */}
        <div className="pt-4 space-y-2 select-none border-t border-border-subtle/50">
          <div className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase">
            [ PARAMETERS // VERIFIED PROFILE INDEX ]
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-foreground">
            INTELLIGENT PROFILE TELEMETRY
          </h3>
        </div>

        {/* Profile Card Widgets */}
        <ProfileCards />
      </div>
    </Section>
  );
}
