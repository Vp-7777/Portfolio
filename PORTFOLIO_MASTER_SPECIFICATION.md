# 📜 VISHAL PATEL — EDITORIAL INDEX PORTFOLIO SPECIFICATION (v2.0)
**Design Concept:** "Editorial Index" (Warm Bone Paper · Espresso Ink · Fraunces Serif · Film Grain · Magnetic Motion)  
**Standard:** Awwwards Site-of-the-Day / High-End Design Engineer Editorial Benchmark  
**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Lenis Smooth Scroll + Custom Cursor + Staggered Motion

---

## 1. CREATIVE DIRECTION & PHILOSOPHY

The site is framed as a **magazine "index"** of Vishal Patel's work rather than a generic SaaS-style landing page or a dark void of text:
1. **Oversized Serif Thesis Statement**: The sentence is the hero (*"Teaching software to see, sort & screen the real world."* with *"screen"* in gold italic Fraunces).
2. **Tactile Surface (Film Grain)**: A fixed full-viewport SVG `feTurbulence` noise overlay over warm bone paper (`#F6F1E7`) gives the tangible texture of print craft.
3. **Numbered Editorial Index Rows**: Projects are presented as full-width numbered editorial index rows separated by hairline brass rules instead of repetitive boxed cards.
4. **Deliberate Craft Motion**:
   - Custom pointer ring + dot cursor with smooth expansion on links.
   - Magnetic primary action button.
   - Word-by-word staggered reveal on the hero thesis.
   - Hairline-bordered continuous mono marquee colophon ticker.
   - Subtle corner-detection bracket frame hover on the About photo.

---

## 2. DESIGN TOKENS

### 2.1 Color Palette
| Token | Hex / Value | Usage |
|---|---|---|
| `--color-paper` | `#F6F1E7` | Page canvas (warm bone / ecru) |
| `--color-paper-deep` | `#EEE6D4` | Alternate section backgrounds & skill pill backgrounds |
| `--color-ink` | `#1B1710` | Primary headlines, names, high-contrast text (warm espresso near-black) |
| `--color-ink-soft` | `#5C5344` | Body copy, secondary text |
| `--color-mist` | `#9C9280` | Captions, index numbers, muted labels |
| `--color-gold` | `#A9793C` | Rules, tags, hover states (restrained brass / gold foil) |
| `--color-gold-deep` | `#7C5A2C` | Pressed states, italic thesis highlight |
| `--color-oxblood` | `#6E2A34` | Rare deliberate highlight / active status dot |
| `--color-line` | `rgba(27, 23, 16, 0.15)` | Hairline rules between editorial rows and sections |

### 2.2 Typography System
| Role | Family | Weights | Usage |
|---|---|---|---|
| **Display** | `Fraunces` | 340 roman, 420 italic, 600 bold | Hero thesis, project titles, section titles |
| **Body** | `Instrument Sans` | 400, 500 | Narrative paragraphs, clean editorial copy |
| **Mono** | `Space Mono` | 400, 700 | Eyebrows, tags, index numbers, coordinates, marquee |

### 2.3 Type Scale & Hierarchy
- **Hero Thesis (H1)**: `clamp(2.4rem, 6.6vw, 6.2rem)` · Weight 340 roman / 420 italic · Line height `1.02`
- **Section Titles (H2)**: `clamp(1.6rem, 3vw, 2.2rem)` · Weight 480 · Line height `1.15`
- **Project Titles (H3)**: `clamp(1.4rem, 2.6vw, 2.1rem)` · Weight 420 italic · Line height `1.2`
- **Body**: `15.5px – 17px` · Weight 400 · Line height `1.65`
- **Mono Eyebrows/Labels**: `11px – 13px` · Tracking `0.06em – 0.08em` uppercase · Line height `1.4`

---

## 3. COMPONENT-BY-COMPONENT SPECIFICATIONS

### 3.1 Global Shell, Grain & Custom Cursor
- **Grain Overlay**: Fixed full-viewport SVG `feTurbulence` (type: fractalNoise, baseFrequency: 0.8, numOctaves: 4, stitchTiles: stitch) at ~5% opacity with `mix-blend-mode: multiply`.
- **Custom Cursor**: Desktop fine pointer custom ring + dot that smoothly tracks the cursor and expands on hover over links, buttons, and editorial rows.

### 3.2 Navigation (`Nav.tsx`)
- **Left**: `Vishal Patel` in Fraunces 600 (scroll-to-top).
- **Center/Coordinates**: `13.08°N 80.27°E · CHENNAI` in Space Mono 11px.
- **Right Links**: `About`, `Experience`, `Work`, `Skills`, `Contact` in Instrument Sans 13px with animated gold underline on hover, plus `Résumé ↓` in gold-deep.
- **Surface**: Sits directly on paper grain; gains hairline bottom rule (`rgba(27,23,16,0.15)`) on scroll.

### 3.3 Hero Section (`Hero.tsx`)
- **Mono Eyebrow**: `VISHAL PATEL — SOFTWARE ENGINEER — CHENNAI, IN`.
- **Hero Thesis**:
  > *"Teaching software to see, sort & screen the real world."*  
  *(set in oversized Fraunces roman with **screen** in gold italic Fraunces).*
- **Asymmetric Meta Row**:
  - *Left Col*: Narrative bio — Full-stack & AI engineer currently building at RideAbit and QRaptor. CGPA 9.74/10 — SRM IST. Two-time hackathon finalist.
  - *Right Col*: Magnetic primary button `[ VIEW SELECTED WORK ]` in filled ink + underlined link `Get in touch`.
- **Marquee Colophon Ticker**: Hairline-bordered continuous scrolling mono strip of tech stack: `JAVA · PYTHON · REACT NATIVE · NODE.JS · POSTGRESQL · COMPUTER VISION · PYTORCH · FASTAPI · EXPO · AWS · TYPESCRIPT`.

### 3.4 About Section (`About.tsx`)
- **Two-Column Editorial Split**:
  - *Left (~35%)*: Square profile photo with 1px line border and the signature amber corner-bracket **detection-frame** hover effect.
  - *Right (~65%)*: Bio copy highlighting real-world software, SRM IST (AI & ML specialization, 9.74 CGPA, 10.0 Sem 2 GPA), RideAbit & QRaptor internships, followed by structured Education and Certification lists with mono dates.

### 3.5 Experience Section (`Experience.tsx`)
- **Chronological Editorial Timeline**:
  - Left vertical rule with status dots (amber for active roles, teal/gold for previous).
  - `FEB 2026 — PRESENT`: AI Engineering Intern — **QRaptor** (AI-powered modules for full-stack web apps, scalable backend services, REST APIs, data pipelines).
  - `JUN 2026 — PRESENT`: Software Engineering Intern — **RideAbit** (React Native mobile features for production ride-sharing platform, Agile team, code review).
  - `2026`: BNY Spectrum Program — Participant (FinTech & enterprise software exposure).

### 3.6 Selected Work Index (`Projects.tsx`)
- **Numbered Editorial Index Rows**: Full-width rows separated by hairline rules.
  - **`01 AutisMind-AI`** — *"A full-stack AI platform for early autism screening, pairing an interactive assessment interface with computer-vision and generative-AI prediction modules over a real-time REST API."* · `PYTHON · COMPUTER VISION · GENERATIVE AI` · `[Live demo ↗]` (`https://autis-mind-ai.vercel.app/`).
  - **`02 PrithviQ`** — *"A computer-vision system that detects, classifies, and quantifies plastic waste from smartphone and drone imagery, feeding a dashboard NGOs and government agencies use to plan cleanup operations — built around UN SDG 12 and 14."* · `PYTHON · MACHINE LEARNING · COMPUTER VISION` · `[GitHub ↗]` (`https://github.com/Vp-7777/PrithviQ`).
  - **`03 CampuSwap`** — *"A full-stack campus marketplace for students to list, browse, and trade items securely, with its own auth, listings, and transaction flow on a PostgreSQL backend."* · `REACT · NODE.JS · POSTGRESQL` · `[GitHub ↗]` (`https://github.com/Vp-7777/CampuSwap`).
- **Hover Interaction**: Entire row is clickable; title shifts to gold-deep, arrow glyph slides 4px.

### 3.7 Skills Section (`Skills.tsx`)
- Grouped mono pill tags (paper-deep bg, 1px line border, ink-soft text, gold-deep hover):
  - **LANGUAGES**: Java, Python, C++, JavaScript, TypeScript, C
  - **FRONTEND**: React Native, React.js, HTML5, CSS3, Bootstrap
  - **BACKEND**: Node.js, Express.js, REST APIs, FastAPI
  - **DATABASE**: PostgreSQL, MySQL, Supabase
  - **TOOLS**: Git, GitHub, Vercel, Figma, VS Code, Docker

### 3.8 Achievements & Leadership (`Achievements.tsx`)
- Clean 2-column typographic list:
  - Top 20 Finalist, 257+ teams — QRaptors National Hackathon
  - Top 20 Finalist — Ashna AI Agent Hackathon
  - Organizer & mentor — Team SRM Hackathon (Aug 2025 – Apr 2026)
  - Student member — Indian Society for Technical Education (ISTE)
  - Perfect 10/10 CGPA — Second Semester Academic Excellence

### 3.9 Contact Section & Footer (`Contact.tsx` & `Footer.tsx`)
- **Direct Contacts**: Tappable `vishal17305@gmail.com`, `+91-7043624030`, LinkedIn, GitHub.
- **Inquiry Form**: Minimal elegant form (Name, Email, Message, Submit).
- **Footer**: Slim one-row bar with `© 2026 Vishal Patel`, coordinates `13.08°N 80.27°E · CHENNAI`, socials, and smooth back-to-top.

---

## 4. PHASE-BY-PHASE EXECUTION SCHEDULE

- **Phase 1**: Design System Tokens (`globals.css`), Film-Grain Overlay, Custom Cursor & Editorial Navigation (`Nav.tsx`).
- **Phase 2**: Hero Thesis Section with word-by-word reveal, magnetic button & Tech Marquee strip (`Hero.tsx`).
- **Phase 3**: Numbered Editorial Index "Selected Work" Rows (`Projects.tsx`).
- **Phase 4**: About section with Detection-Frame photo hover, Education & Certifications (`About.tsx`).
- **Phase 5**: Experience Timeline & Skills Grid (`Experience.tsx` & `Skills.tsx`).
- **Phase 6**: Achievements List, Contact Channel & Footer (`Achievements.tsx`, `Contact.tsx`, `Footer.tsx`).
- **Phase 7**: Full Next.js Turbopack build validation and end-to-end audit.
