# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Project

Static website for the *Littérature à Voix Haute* festival. Next.js 15 with `output: 'export'` — this is a **fully static build** deployed via SFTP to Strato. No server-side features (API routes, SSR, image optimisation) are available.

## Commands

| Task | Command |
|------|---------|
| Dev server (Turbopack) | `npm run dev` |
| Static build → `out/` | `npm run build` |
| Lint | `npm run lint` |

**No test suite** — there are no tests in this project.

## Key Architecture Patterns

### Adding a new festival year
1. Create `app/components/Programme/Programme<YEAR>.tsx` (copy previous year as template).
2. Register it in [`app/components/Programme/index.ts`](app/components/Programme/index.ts) `getProgrammeComponent()` switch — there is no auto-discovery.
3. Add performer entries in [`app/data/comediens.ts`](app/data/comediens.ts) with `years_present: [<YEAR>]`.
4. Add partner/sponsor entries in [`app/data/partenaires.ts`](app/data/partenaires.ts) with `years_present: [<YEAR>]`.
5. Update `const year = 2025` in [`app/page.tsx`](app/page.tsx) to the new year.

### Per-year performer photos
`Comedien.imageSrc` is an index-signature map (`{ default: string; [year: string]: string | undefined }`). Provide a year-specific key (e.g. `'2025': '/comediens/Name_25.jpg'`) alongside `default`; components fall back to `default` when the key is absent.

### `Comedien.description` is raw HTML
The field is rendered via `dangerouslySetInnerHTML` in `ComedienDialog`. Use `<p>` and `<i>` tags directly inside template literals; no Markdown.

### Image optimisation is disabled
`next.config.ts` sets `images: { unoptimized: true }` because the static export target doesn't support Next.js image optimisation. Optimise images manually before adding them to `public/`.

### Programme PDF links
PDFs are served from `public/programme/<YYYY-MM-DD>.pdf`. The `getPdfUrl()` helper in each `Programme<YEAR>.tsx` maps French date strings to filenames — update it when adding dates.

## CSS / Styling

- Global CSS variables (colours, header heights, fonts) live in [`app/globals.css`](app/globals.css). Primary: `#9d2844`, secondary/blue: `#00498b`.
- Each component has a co-located `*.module.css` file — use CSS Modules exclusively, never inline styles except for one-off overrides.
- Two breakpoints: mobile `< 768px`, desktop `≥ 768px`.
- Fonts: `EB_Garamond` (body, via CSS var `--font-eb-garamond`) and `Crimson_Text` (`--font-crimson`), both loaded via `next/font/google` in the root layout.

## Code Style (`.prettierrc`)

Single quotes, 2-space indent, semicolons, `trailingComma: "es5"`, `printWidth: 100`, `arrowParens: "avoid"`.

## TypeScript

`strict: true`. Path alias `@/*` maps to the project root (use `@/app/...` for absolute imports inside components). All types are declared in `app/types/`.

## `'use client'` Directive

Only add it when a component needs React state or browser APIs. Most page components that use state are already marked; server components (`Header`, `Footer`, layout, data files) have no directive.
