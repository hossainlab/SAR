# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"The R Viz Journey" is an interactive learning platform for mastering R data visualization (ggplot2, ggpubr, tidyplots). Built with React 19 + TypeScript + Vite. Originally created via Google AI Studio.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start dev server on port 3000
- `npm run build` — production build
- `npm run preview` — preview production build

## Environment

Requires a `GEMINI_API_KEY` set in `.env.local`. Vite exposes it as `process.env.API_KEY` and `process.env.GEMINI_API_KEY` (see `vite.config.ts` define block).

## Architecture

**Routing**: HashRouter with two pages — `/` (HomePage) and `/journey` (JourneyPage), both defined inline in `App.tsx`.

**AI Services** (in `services/`):
- `vizService.ts` — Takes R code strings, sends them to Gemini (`gemini-2.5-flash-image`) to generate plot images. Returns base64 data URIs. This does NOT execute R — it uses AI image generation to simulate R plot output.
- `geminiService.ts` — Powers the "VizBot" AI tutor chat via `gemini-3-flash-preview`. Maintains conversation history.

**Components**:
- `Layout.tsx` — App shell with sticky header, footer, and mobile bottom nav
- `ModuleCard.tsx` — Card UI for course modules
- `CodeBlock.tsx` — Syntax-highlighted R code display (uses PrismJS)
- `AITutor.tsx` — Chat interface for VizBot (currently not routed, but importable)

**Data Model**: Course modules are defined in `constants.tsx` as `COURSE_MODULES` array. The `Module` type is in `types.ts`. All module content (descriptions, R code examples) lives in constants.

**Styling**: Tailwind CSS via CDN (loaded in `index.html`), no local Tailwind config. Uses utility classes throughout.

## Key Patterns

- No test framework is configured
- No linter is configured
- The `@` path alias maps to the project root
- Google GenAI SDK (`@google/genai`) is instantiated per-call in services (no singleton)
