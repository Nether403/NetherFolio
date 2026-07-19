# portfolio.101dev.xyz — Development Portfolio

## Overview
Minimal personal **development** portfolio + blog for Martin vanDeursen (Nether403). Built on Next.js 16 + React 19 + Tailwind CSS v4. Sister portfolios: Research (`portfolio.twpf.online`), Design (`portfolio.the1o1.one`), hub (`portal.101dev.xyz`).

## Project Architecture
- **Framework**: Next.js 16 with Turbopack
- **Package Manager**: pnpm (only `pnpm-lock.yaml` is the source of truth)
- **Styling**: Tailwind CSS v4
- **UI Primitives**: Radix UI + custom components
- **Content**: MDX for blog posts (`src/features/blog`)
- **Persistent UI prefs**: simple `useConfig` hook backed by `localStorage`
- **Tech-stack icons**: `cdn.simpleicons.org` (allow-listed in `next.config.ts`)
- **Logo**: `public/MvD.png` & `public/MvDark.png`, via `mvd-mark` / `mvd-wordmark`
- **AIO**: `/llms.txt` machine-readable identity + project summary

## Development Setup
- Port: 5000 (frontend)
- Host: 0.0.0.0
- Development server: `pnpm dev`
- Build command: `pnpm build`
- Start command: `pnpm start`

## Deployment Configuration
- **Canonical URL**: https://portfolio.101dev.xyz
- **Build**: `pnpm build`
- **Run**: `pnpm start`

## Recent Changes
- 2026-07-19: Dev portfolio refresh — removed research/design duplicates and dead links; added Dutch Data Labs, RepoGuardian, TWPF, G_5.2, Metal Marines Reborn; corrected contact/identity; SEO/AIO/GEO pass (`llms.txt`, JSON-LD, robots, sitemap). Visual redesign deferred to a separate branch.
