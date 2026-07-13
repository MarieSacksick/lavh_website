# Project Coding Rules (Non-Obvious Only)

- **Adding a year requires 5 manual steps** — create `Programme<YEAR>.tsx`, register it in `getProgrammeComponent()` switch, add data entries in `comediens.ts` and `partenaires.ts`, and bump `const year` in `page.tsx`. None of these are linked automatically.
- **`Comedien.imageSrc` year keys are strings**, not numbers (e.g. `'2025'`), even though `years_present` is `number[]`. Always use string literals for year-keyed photo lookups.
- **`Comedien.description` is raw HTML** — use `<p>` and `<i>` tags in template literals. Do NOT use Markdown or escape HTML entities manually (curly-quote entities like `&ldquo;` are fine).
- **No image optimisation** — `images.unoptimized: true` in `next.config.ts`. Always manually compress/resize images before putting them in `public/`.
- **PDF files for programme days** go in `public/programme/<YYYY-MM-DD>.pdf`; update `getPdfUrl()` date-map in the relevant `Programme<YEAR>.tsx` to expose them.
- **`'use client'`** is required on any component using `useState`, `useEffect`, or browser APIs. Layout, Footer, Header, and data files are server components — do not add the directive there unless necessary.
- **CSS Modules only** — every component has a co-located `*.module.css`. Use `styles.className` references. Avoid additional inline style objects except for single-value overrides that don't justify a new class.
- **`@/*` alias resolves to the project root**, so component imports should be `@/app/types/...`, `@/app/data/...`, etc.
- The `tsconfig.json` `include` array contains `app/components/DropDownMenu` explicitly — do not remove it.
