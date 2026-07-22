"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSystemStore } from "@/store/useSystemStore";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useChapterObserver() {
  const setCurrentChapter = useSystemStore((state) => state.setCurrentChapter);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll("[data-chapter]");
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section) => {
      const chapter = section.getAttribute("data-chapter");
      if (!chapter) return;

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 40%",
        end: "bottom 40%",
        onToggle: (self) => {
          if (self.isActive) {
            setCurrentChapter(chapter);
          }
        },
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [setCurrentChapter]);
}
