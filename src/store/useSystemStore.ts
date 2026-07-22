import { create } from 'zustand';

export type CursorVariant = 'default' | 'hover' | 'magnetic' | 'drag' | 'hidden';

interface SystemState {
  hasConstructed: boolean;
  setHasConstructed: (val: boolean) => void;
  scrollProgress: number;
  setScrollProgress: (val: number) => void;
  currentChapter: string;
  setCurrentChapter: (val: string) => void;
  reducedMotion: boolean;
  setReducedMotion: (val: boolean) => void;
  
  // Custom Cursor System
  cursorVariant: CursorVariant;
  setCursorVariant: (val: CursorVariant) => void;
  cursorLabel: string | null;
  setCursorLabel: (val: string | null) => void;

  // Active Project Selection
  activeProject: string | null;
  setActiveProject: (val: string | null) => void;
}

export const useSystemStore = create<SystemState>((set) => ({
  hasConstructed: false,
  setHasConstructed: (val) => set({ hasConstructed: val }),
  scrollProgress: 0,
  setScrollProgress: (val) => set({ scrollProgress: val }),
  currentChapter: 'hero',
  setCurrentChapter: (val) => set({ currentChapter: val }),
  reducedMotion: false,
  setReducedMotion: (val) => set({ reducedMotion: val }),

  // Initial cursor properties
  cursorVariant: 'default',
  setCursorVariant: (val) => set({ cursorVariant: val }),
  cursorLabel: null,
  setCursorLabel: (val) => set({ cursorLabel: val }),

  // Initial project selection properties
  activeProject: null,
  setActiveProject: (val) => set({ activeProject: val }),
}));
