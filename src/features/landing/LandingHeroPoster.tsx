"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface LandingHeroPosterProps {
  posterRef?: React.RefObject<HTMLDivElement | null>;
  titleLine1Ref?: React.RefObject<HTMLHeadingElement | null>;
  titleLine2Ref?: React.RefObject<HTMLHeadingElement | null>;
  portraitRef?: React.RefObject<HTMLDivElement | null>;
  metaRef?: React.RefObject<HTMLDivElement | null>;
}

export function LandingHeroPoster({
  posterRef,
  titleLine1Ref,
  titleLine2Ref,
  portraitRef,
  metaRef,
}: LandingHeroPosterProps) {
  const [mounted, setMounted] = useState(false);
  const [cardOffset, setCardOffset] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / 2);
    const y = (clientY - (top + height / 2)) / (height / 2);

    setCardOffset({
      x: x * 10,
      y: y * 8,
      rotateX: -y * 5,
      rotateY: x * 5,
    });
  };

  const handleMouseLeave = () => {
    setCardOffset({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={posterRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[100dvh] max-h-[100dvh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12 px-6 sm:px-12 z-10 select-none overflow-hidden max-w-[1380px] mx-auto will-change-transform"
    >
      {/* Top Spacer */}
      <div className="h-2 sm:h-6 shrink-0" />

      {/* 02: Center Hero Composition — Exact Reference Headline & Matte Avatar Card */}
      <div className="relative my-auto flex flex-col items-center justify-center text-center">
        
        {/* Massive Headline in Reference Cream-White (#ECE7DF) */}
        <div className="space-y-0 leading-none relative z-0">
          <h1
            ref={titleLine1Ref}
            className="font-display font-black text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.84] tracking-[-0.03em] text-[#ECE7DF] will-change-transform drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] pb-1"
          >
            Vishal
          </h1>

          <h1
            ref={titleLine2Ref}
            className="font-display font-black text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.84] tracking-[-0.03em] text-[#ECE7DF] will-change-transform drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
          >
            Patel
          </h1>
        </div>

        {/* Outer Avatar Container (Controlled by GSAP Scroll) */}
        <div
          ref={portraitRef}
          className="absolute -bottom-6 sm:-bottom-8 w-[140px] sm:w-[190px] md:w-[220px] aspect-square z-20 will-change-transform"
        >
          {/* Inner Matte Avatar Card (Matches Reference Screenshot Style) */}
          <div
            className="w-full h-full rounded-[26px] sm:rounded-[30px] overflow-hidden bg-[#585B5E] border border-white/20 shadow-2xl shadow-black/95 group cursor-pointer"
            style={{
              transform: `translate3d(${cardOffset.x}px, ${cardOffset.y}px, 0) rotateX(${cardOffset.rotateX}deg) rotateY(${cardOffset.rotateY}deg)`,
              transition: cardOffset.x === 0 ? "transform 0.5s ease-out" : "none",
            }}
          >
            <Image
              src="/avatar.png"
              alt="Vishal Patel Avatar"
              fill
              priority
              sizes="(max-width: 768px) 190px, 220px"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>

      </div>

      {/* 03: Editorial Baseline Text matching Reference Screenshot */}
      <div
        ref={metaRef}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end justify-between shrink-0 text-sm sm:text-[15px] font-sans will-change-transform"
      >
        {/* Left Baseline Editorial Copy */}
        <p className="md:col-span-6 text-[#A1A1AA] leading-relaxed max-w-md">
          I currently work as a Software Engineering Intern at{" "}
          <button
            onClick={() => scrollTo("experience")}
            className="text-white font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors cursor-pointer"
          >
            RideAbit
          </button>{" "}
          &{" "}
          <button
            onClick={() => scrollTo("experience")}
            className="text-white font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors cursor-pointer"
          >
            QRaptor
          </button>
          , currently available for work.
        </p>

        {/* Right Baseline Editorial Copy */}
        <p className="md:col-span-6 md:text-right text-[#A1A1AA] leading-relaxed max-w-md md:ml-auto">
          Focused on on-device AI architectures and robust systems, studying at{" "}
          <strong className="text-white font-semibold">SRM IST</strong>, working from{" "}
          <span className="text-white font-semibold">Chennai, India</span>.
        </p>
      </div>

    </div>
  );
}
