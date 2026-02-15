# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"The R Viz Journey" is an interactive learning platform for mastering R data visualization (ggplot2, ggpubr, tidyplots). Built with React 19 + TypeScript + Vite. Originally created via Google AI Studio.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start dev server on port 3000
- `npm run build` — production build
- `npm run preview` — preview production build

## Architecture

**Routing**: HashRouter with pages — `/` (HomePage), `/journey` (JourneyPage), `/cheatsheets` (CheatsheetsPage), all defined inline in `App.tsx`.

**Components**:
- `Layout.tsx` — App shell with sticky header, footer, and mobile bottom nav
- `ModuleCard.tsx` — Card UI for course modules
- `CodeBlock.tsx` — Syntax-highlighted R code display (uses PrismJS)
- `CheatsheetCard.tsx` — Card UI for cheatsheet resources

**Data Model**: Course modules are defined in `constants.tsx` as `COURSE_MODULES` array. The `Module` type is in `types.ts`. All module content (descriptions, R code examples) lives in constants.

**Styling**: Tailwind CSS via CDN (loaded in `index.html`), no local Tailwind config. Uses utility classes throughout.

**Deployment**: Netlify via `netlify.toml`. Static site, no backend/API.

## Key Patterns

- No test framework is configured
- No linter is configured
- The `@` path alias maps to the project root
- No external API calls — fully static site
