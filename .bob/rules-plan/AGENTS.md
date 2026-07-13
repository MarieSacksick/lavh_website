# Project Architecture Rules (Non-Obvious Only)

- **Year is a hardcoded constant** (`const year = 2025`) in `app/page.tsx`. There is no routing, URL parameter, or config value that drives which year is active — changing the active year requires a code edit and rebuild.
- **Programme components are not data-driven** — each `Programme<YEAR>.tsx` is a fully static JSX tree with hardcoded dates, venue names, Google Maps links, and PDF paths. Any templating approach would require refactoring the entire pattern.
- **`ComedienDialog` is rendered at the page level** (`app/page.tsx`), not inside `Programme`. Clicking a name in `Programme` calls `onComedienClick` which lifts state up to the page — the dialog is a sibling of the programme, not a child.
- **Static export constraint**: `output: 'export'` in `next.config.ts` means any planned feature must work without a server. This rules out: API routes, server actions, middleware, ISR, and Next.js image optimisation.
- **No shared state management** — state is local `useState` lifted to the nearest common ancestor. Do not introduce external state libraries; they are unnecessary for this scope.
- **Deployment target is Strato via SFTP** — the `out/` folder produced by `npm run build` is uploaded directly. There is no CI/CD pipeline.
