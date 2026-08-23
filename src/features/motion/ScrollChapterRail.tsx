"use client";

import { useEffect, useState } from "react";

interface SectionMarker {
  id: string;
  num: string;
  name: string;
}

const sections: SectionMarker[] = [
  { id: "hero", num: "01", name: "Overview" },
  { id: "about", num: "02", name: "Pedigree" },
  { id: "experience", num: "03", name: "Commercial" },
  { id: "work", num: "04", name: "Systems" },
  { id: "skills", num: "05", name: "Capabilities" },
  { id: "achievements", num: "06", name: "Recognition" },
  { id: "contact", num: "07", name: "Contact" },
];

export function ScrollChapterRail() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll percent
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollPercent(Math.min(Math.max(progress, 0), 100));

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Scroll Chapters"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-end gap-3 select-none pointer-events-auto"
    >
      {/* Mini Progress Track */}
      <div className="w-[1.5px] h-32 bg-[rgba(27,23,16,0.12)] relative rounded-full overflow-hidden mb-2">
        <div
          className="w-full bg-[#A9793C] transition-all duration-150 rounded-full"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>

      {/* Chapter Nodes */}
      <div className="flex flex-col gap-2 font-mono text-[10px]">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;

          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`flex items-center gap-2 group cursor-pointer transition-all duration-300 ${
                isActive ? "text-[#1B1710] font-bold" : "text-[#9C9280] hover:text-[#5C5344]"
              }`}
            >
              <span
                className={`transition-all duration-300 ${
                  isActive ? "opacity-100 translate-x-0 text-[#7C5A2C]" : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                {sec.name}
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#A9793C] scale-125 ring-4 ring-[#A9793C]/20"
                    : "bg-[rgba(27,23,16,0.2)] group-hover:bg-[#A9793C]"
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
}
