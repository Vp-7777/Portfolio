import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

interface HeroAnimationElements {
  container: HTMLElement;
  lines: HTMLElement[];
  title: HTMLElement;
  subtitle: HTMLElement;
  stats: HTMLElement[];
  scrollIndicator: HTMLElement;
}

export function createHeroTimeline(
  elements: HeroAnimationElements,
  onComplete: () => void
) {
  const tl = gsap.timeline({
    onComplete,
    defaults: { ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
  });

  // 1. Initial State resets
  gsap.set(elements.container, { opacity: 1 });
  gsap.set(elements.lines, { scaleX: 0, transformOrigin: "left center" });
  gsap.set(elements.title, { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" });
  gsap.set(elements.subtitle, { opacity: 0, y: 15 });
  gsap.set(elements.stats, { opacity: 0 });
  gsap.set(elements.scrollIndicator, { opacity: 0, y: 10 });

  // 2. Draw border hair-lines (precision manufacturing metaphor)
  tl.to(elements.lines, {
    scaleX: 1,
    duration: 1.4,
    stagger: 0.15,
    ease: "power3.inOut"
  }, 0.2);

  // 3. Assemble Title (clip-path slide down)
  tl.to(elements.title, {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1.6,
    ease: "power4.out"
  }, "-=0.8");

  // 4. Fade/Slide in the editorial Subtitle
  tl.to(elements.subtitle, {
    opacity: 1,
    y: 0,
    duration: 1.2,
  }, "-=1.0");

  // 5. Type and fade in stats (monospaced telemetry)
  elements.stats.forEach((stat, idx) => {
    const textContent = stat.getAttribute("data-text") || "";
    tl.to(stat, {
      opacity: 1,
      duration: 0.8,
      text: {
        value: textContent,
        speed: 1.5
      },
      ease: "none"
    }, `-=${0.6 - idx * 0.15}`);
  });

  // 6. Reveal scroll anchor
  tl.to(elements.scrollIndicator, {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, "-=0.4");

  return tl;
}
