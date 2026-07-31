# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single static website (Astro + React islands + Tailwind), built and run with **Bun** (see `bun.lock` and `package.json`). There is no backend service or database.

### Runtime
- Bun is required (the `node` on the VM is only used incidentally). Bun is installed at `~/.bun/bin/bun`; if `bun` is not on `PATH` in a fresh shell, invoke it as `~/.bun/bin/bun` or run `source ~/.bashrc`.
- Standard commands live in `package.json` scripts — use those rather than duplicating: `bun dev`, `bun run build`, `bun run lint`, `bun run typecheck`.

### Dev server
- `bun dev` serves on `http://localhost:4321/`.
- `astro.config.mjs` sets `trailingSlash: 'always'`, so sub-pages must be requested with a trailing slash (e.g. `/store/`, not `/store`). Requesting without the slash returns a 404 with a redirect suggestion — this is expected, not a bug.

### Lint / type check
- `bun run lint` runs ESLint over `src` (TypeScript/TSX and Astro) with `--max-warnings 0`.
- `bun run typecheck` runs the Astro/TypeScript diagnostics (mirrors the CI "Type check" step).

### Build
- `bun run build` first runs `scripts/fetchproductfeed.mjs`, which fetches the live Zazzle RSS feed over the network and overwrites `src/customizations/productfeed.json`, then runs `astro build` into `dist/`. Network access to `feeds.zazzle.com` is needed for the fetch step; if offline, the existing committed `productfeed.json` is used and only the feed refresh is skipped.

### Design tokens
- Colour, fonts and panel geometry are defined once, in the `palette` object and `theme.extend` block of `tailwind.config.js`. `src/styles/global.css` republishes them as custom properties (`--color-ink`, `--font-display`, `--panel-border`, …) for hand-written CSS and inline SVG.
- Prefer the Tailwind utility (`bg-caption`, `border-ink`, `text-accent`) where a class will do; use the custom property where it won't (SVG `style` attributes, `box-shadow`, `color-mix`).
- Do not introduce new hex literals in `src`. Add the colour to the palette and reference it by name. The one exception is `src/components/SubscribeForm.css`, which is ConvertKit's own widget CSS kept verbatim.
- Type rule: Bangers (`--font-display`) letters display type — headings, narration, nav, buttons. The sans (`--font-body`) carries reading copy. Allura (`--font-script`) is reserved for the hero tagline. `h1`/`h2`/`h3` are Bangers globally; don't override them per-component.

### Third-party integrations
- The contact form (FormSpree) and subscribe form (ConvertKit) post to external endpoints configured in `src/customizations/siteproperties.json`. Filling them works locally, but successful submission depends on those external services.
