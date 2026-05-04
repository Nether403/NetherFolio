# Nether101.nl — Personal Portfolio

## Overview
Stripped-down personal portfolio + blog for Martin vanDeursen (Nether101). Built on Next.js 16 + React 19 + Tailwind CSS v4. The original template scaffolding has been removed; the site now ships only: site header (nav, theme toggle, mobile menu, GitHub link), hero (cover + profile header), social links, projects, GitHub contributions widget, tech stack, and blog (homepage section + `/blog` routes).

## Project Architecture
- **Framework**: Next.js 16 with Turbopack
- **Package Manager**: pnpm (only `pnpm-lock.yaml` is the source of truth)
- **Styling**: Tailwind CSS v4
- **UI Primitives**: Radix UI + custom components
- **Content**: MDX for blog posts (`src/features/blog`)
- **Persistent UI prefs**: simple `useConfig` hook backed by `localStorage` (no Jotai)
- **Tech-stack icons**: `cdn.simpleicons.org` (allow-listed in `next.config.ts`)
- **Logo**: user-supplied `public/MvD.png` & `public/MvDark.png`, rendered through `src/components/mvd-mark.tsx` and `src/components/mvd-wordmark.tsx`

## Removed from Template
- About / Overview / Brand showcase sections
- Awards, Experiences, Certifications data + components
- Cover-grid + LogoResizeAnimation
- Footer (`site-footer.tsx`)
- Command palette (`command-menu.tsx`, `ui/command.tsx`) and Cmd+K plumbing
- Brand context menu
- Component registry (`src/config/registry.ts`, `public/r/*.json`)
- OG image generation routes (`src/app/og/**`) — falls back to `USER.ogImage = /MvD.png`
- All template-author URLs and references; the wrapper components were renamed `mvd-mark` / `mvd-wordmark`
- Template README / development docs / AGENTS guide / FUNDING config (replaced with this file as the only project doc)
- Unused deps: `@hookform/resolvers`, `cmdk`, `jotai`, `react-hook-form`, `react-wheel-picker`, `zod`

## Development Setup (Replit)
- Port: 5000 (frontend)
- Host: 0.0.0.0 (configured for Replit proxy)
- Development server: `pnpm dev`
- Build command: `pnpm build`
- Start command: `pnpm start`

## Deployment Configuration
- **Target**: Autoscale (stateless website)
- **Build**: `pnpm build`
- **Run**: `pnpm start`

## Recent Changes
- 2026-05-02: Stripped portfolio to frontpage + blog (Task #3). Removed About / Overview / Brand showcase, Awards / Experiences / Certifications, footer, command palette, brand context menu, registry assets, the entire `/og` route group, and all template-author docs (README, DEVELOPMENT, AGENTS, FUNDING). Renamed mark / wordmark components to `mvd-mark` / `mvd-wordmark` (logo PNGs preserved). Replaced every external template-asset URL (tech-stack icons → simpleicons CDN, manifest icons → local files, click sound → no-op). Reimplemented `useConfig` on `localStorage` so Jotai could be uninstalled. Regenerated `pnpm-lock.yaml`; deleted orphan `package-lock.json`. `pnpm build` green.
- 2025-09-29: Imported from GitHub and configured for Replit environment.

## User Preferences
- Uses pnpm as package manager (must be maintained)
- Prefers Turbopack for faster builds
- Stack: Next.js 16, React 19, Tailwind v4
- Custom MvD logo files (`public/MvD.png`, `public/MvDark.png`) must remain untouched
