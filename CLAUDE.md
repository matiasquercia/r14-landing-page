# CLAUDE.md — AI Assistant Guide for r14-landing-page

## Project Overview

Single Page Application (SPA) landing page for **Real de Catorce**, an Argentine company specializing in logistics and food supply for public organizations and companies. The site is in **Spanish**.

**Live deployment target:** Netlify (configured in `netlify.toml`)

---

## Tech Stack

| Layer         | Technology                                    |
| ------------- | --------------------------------------------- |
| Framework     | React 18.3 + TypeScript 5.3                   |
| Build tool    | Vite 6.3                                      |
| Styling       | Tailwind CSS 4.1 (v4 syntax) + custom theme   |
| Components    | shadcn/ui (Radix UI primitives) + Material UI  |
| Animations    | motion (Framer Motion successor), tw-animate-css |
| Icons         | lucide-react, @mui/icons-material             |
| Forms         | react-hook-form                               |
| Charts        | recharts                                      |
| Toasts        | sonner                                        |

---

## Quick Commands

```bash
npm run dev       # Start dev server (port 5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run serve     # Preview on port 4173
npm run lint      # Placeholder (currently echo only)
```

There is **no test framework** configured. No Jest, Vitest, or similar.

---

## Project Structure

```
src/
├── main.tsx                        # React entry point
├── vite-env.d.ts                   # Vite type declarations
├── app/
│   ├── App.tsx                     # Root component, section refs, smooth scroll navigation
│   └── components/
│       ├── Header.tsx              # Fixed nav header (scroll-aware, mobile menu)
│       ├── Hero.tsx                # Full-screen video background hero
│       ├── ValueProposition.tsx    # Value proposition cards
│       ├── ServicesSection.tsx     # Services grid (3 cards)
│       ├── AboutSection.tsx        # Company information
│       ├── QualitySection.tsx      # Quality/process display
│       ├── ClientsSection.tsx      # Client logos/testimonials
│       ├── FAQSection.tsx          # Accordion FAQ (10 items)
│       ├── ContactSection.tsx      # Contact form
│       ├── Footer.tsx              # Footer with nav links
│       ├── SectionHeader.tsx       # Reusable section header
│       ├── Button.tsx              # Custom button (primary/secondary/outline)
│       ├── figma/
│       │   └── ImageWithFallback.tsx  # Image with error placeholder
│       └── ui/                     # 60+ shadcn/ui components (do not edit manually)
│           ├── utils.ts            # cn() class merge utility
│           ├── use-mobile.ts       # Mobile detection hook
│           └── ...                 # accordion, button, card, dialog, form, etc.
├── assets/
│   └── logo/                       # Brand logos (CMYK + RGB, multiple resolutions)
└── styles/
    ├── index.css                   # Root CSS (imports below + smooth scroll)
    ├── fonts.css                   # Montserrat font family config
    ├── tailwind.css                # Tailwind v4 config (@theme, @source)
    └── theme.css                   # CSS variables: colors, radius, dark mode
```

**Other key files:**

```
index.html          # HTML entry (Spanish lang, Google Fonts, Turnstile CAPTCHA)
vite.config.ts      # Vite + React + Tailwind plugins, @/ path alias
tsconfig.json       # Strict TS, ES2020 target, @/* → ./src/* path mapping
netlify.toml        # Build config, security headers, SPA redirects, caching
.env.example        # FTP vars (deprecated — FTP deploy script removed)
```

---

## Architecture & Navigation

The app is a single-page layout defined in `App.tsx`. Navigation works via `useRef` objects that store references to section `<div>` elements. The `Header` component receives an `onNavigate(section)` callback that scrolls to the target section with a 96px offset for the fixed header.

**Section order in App.tsx:**
1. `home` (Hero)
2. Value Proposition
3. `servicios` (Services)
4. `nosotros` (About)
5. `calidad` (Quality)
6. `clientes` (Clients)
7. `faq` (FAQ)
8. `contacto` (Contact)
9. Footer

---

## Coding Conventions

### TypeScript
- **Strict mode** enabled (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`)
- Props defined as `interface ComponentNameProps { ... }` at the top of each file
- Generic refs: `useRef<HTMLDivElement>(null)`
- Functional components only — no class components

### Naming
- **Components/files:** PascalCase (e.g., `ServicesSection.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`, `use-mobile.ts`)
- **Variables/functions:** camelCase with handler prefix (e.g., `handleScroll`, `toggleFAQ`)
- **Constants:** UPPER_SNAKE_CASE at module level (e.g., `HERO_VIDEO_URL`, `BG_IMAGE`)

### Imports
- **Path alias:** Use `@/` for imports from `src/` (e.g., `import { cn } from "@/app/components/ui/utils"`)
- **Named exports** preferred: `export function ComponentName() { ... }`
- `App.tsx` uses `export default`

### Styling
- Tailwind utility classes in JSX `className`
- Responsive prefixes: `sm:`, `md:`, `lg:`
- Conditional classes via ternary operators in template literals
- `cn()` utility from `@/app/components/ui/utils` for merging classes (clsx + tailwind-merge)
- Custom theme variables in `src/styles/theme.css`:
  - Primary: `#001358` (dark navy)
  - Secondary: `#A1C5FF` (light blue)
  - Accent: `#1C26E9` (bright blue)
  - Font: Montserrat

### Component Pattern
```tsx
import { useState } from 'react';

interface MyComponentProps {
  onNavigate: (section: string) => void;
  title?: string;
}

export function MyComponent({ onNavigate, title }: MyComponentProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => { /* ... */ };

  return <div className="p-4 md:p-8">...</div>;
}
```

---

## shadcn/ui Components (`src/app/components/ui/`)

These are **auto-generated** shadcn/ui components. Do not manually edit them unless necessary. To add new ones, follow the shadcn/ui CLI pattern. They rely on:
- Radix UI primitives
- `class-variance-authority` for variants
- `cn()` from `utils.ts`
- CSS variables from `theme.css`

---

## Tailwind CSS v4 Notes

This project uses **Tailwind CSS v4** syntax, which differs from v3:
- Configuration is in `src/styles/tailwind.css` using `@theme { }` blocks (not `tailwind.config.js`)
- Uses `@import 'tailwindcss' source(none)` + `@source` directives
- PostCSS config is empty — Tailwind runs via the Vite plugin (`@tailwindcss/vite`)

---

## Environment & Deployment

- **Node.js 18+** and **npm 9+** required
- **Netlify** is the configured deployment target (auto-builds on push)
- Build output goes to `dist/`
- SPA routing handled via Netlify `[[redirects]]` (all paths → `/index.html`)
- Security headers configured (X-Frame-Options, X-Content-Type-Options, XSS protection)
- Static assets cached for 1 year (`Cache-Control: immutable`)

---

## Things to Watch Out For

1. **No tests exist** — be extra careful with refactors; verify changes manually via `npm run build`
2. **No linter configured** — the `lint` script is a placeholder echo
3. **Spanish content** — all user-facing text is in Spanish; maintain this convention
4. **Large video asset** — `public/hero-video.mp4` is ~22.5 MB; avoid duplicating or re-adding
5. **Tailwind v4 syntax** — do not use v3-style `tailwind.config.js`; theme is in CSS `@theme` blocks
6. **Path alias** — always use `@/` for imports from `src/` (configured in both `tsconfig.json` and `vite.config.ts`)
7. **Line endings** — `.gitattributes` enforces LF; do not commit CRLF files
8. **License** — this is a private, confidential project
