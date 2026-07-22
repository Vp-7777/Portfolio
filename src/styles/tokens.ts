export const tokens = {
  colors: {
    background: '#0a0a0a',
    foreground: '#ededed',
    accent: '#d4af37', // A premium gold/honey accent
    muted: '#888888',
    border: '#222222',
  },
  typography: {
    fonts: {
      sans: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
      display: 'var(--font-display)', // We can add a custom premium font later
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  motion: {
    durations: {
      fast: 0.3,
      base: 0.6,
      slow: 1.2,
      hero: 2.0,
    },
    easings: {
      default: [0.16, 1, 0.3, 1], // Custom bezier for GSAP/framer (Expo-like out)
      smooth: [0.25, 0.1, 0.25, 1],
      bounce: [0.34, 1.56, 0.64, 1],
    }
  },
  spacing: {
    section: '8rem',
    container: '4rem',
  },
  zIndices: {
    base: 1,
    canvas: -1,
    nav: 50,
    cursor: 100,
    transition: 999,
  }
} as const;
