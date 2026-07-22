# Accessibility & Reduced-Motion Contract

This contract defines how the portfolio degrades gracefully for users who require accessibility features or prefer reduced motion.

## 1. Reduced Motion (`prefers-reduced-motion`)
When a user has `prefers-reduced-motion` enabled at the OS level:
- **GSAP Animations**: All decorative scroll-triggered animations (fade-ins, transforms) will resolve instantly or use a minimal cross-fade.
- **Three.js/WebGL**: The `<GlobalCanvas>` will render a static, pre-rendered frame or pause all camera/object rotations. Particle systems will be disabled.
- **Lenis Smooth Scroll**: Lenis will be bypassed entirely to rely on native browser scrolling, preventing scroll hijacking for sensitive users.

*Implementation detail*: We will use a custom hook `useReducedMotion()` (via framer-motion or a custom matchMedia listener) and pass this into our system Zustand store (`state.reducedMotion`).

## 2. Screen Readers
- **Semantic HTML**: The DOM structure must remain logical and semantic despite complex absolute positioning for visual effects. 
- **Hidden Text**: Interactive 3D elements that provide navigation must have a visually hidden, focusable HTML equivalent.
- **Aria Labels**: All non-text visual storytelling elements must have descriptive `aria-label` or `aria-description` tags.

## 3. Keyboard Navigation
- The site must be fully traversable using only the `Tab` key.
- Focus rings will be styled explicitly using Tailwind's `focus-visible` utility, ensuring they are visible when keyboard navigating but hidden during mouse interaction.
