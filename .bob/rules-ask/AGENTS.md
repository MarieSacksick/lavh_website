# Project Documentation Context (Non-Obvious Only)

- The site is deployed as **fully static HTML** via SFTP to Strato — there is no Node.js server, no API routes, and no dynamic rendering at runtime.
- `app/anciens_programmes/` contains one sub-folder per past year (2019–2024), each with a `page.tsx`. These are historical archive pages, not generated from data files.
- `app/components/Programme/` holds **one component per year** (`Programme2024.tsx`, `Programme2025.tsx`). The programme schedule and PDF links are hardcoded inside each file — there is no CMS or external data source.
- `app/data/comediens.ts` is sorted alphabetically by `nom` at the bottom of the file (`.sort((a, b) => a.nom.localeCompare(b.nom))`). Filtering by year is done at the call site (`filter(c => c.years_present.includes(year))`).
- There are **no tests** — `npm run lint` is the only automated quality check available.
- The two custom Google Fonts (`Crimson_Text`, `EB_Garamond`) are declared in `app/layout.tsx` and exposed as CSS variables `--font-crimson` and `--font-eb-garamond`; they are not available outside the root layout tree.
