# PC Ambilight Lighting

Content-first, evidence-first knowledge base for **Ambilight / screen-sync RGB** on PC: best picks, deep reviews, comparisons, guides, and a compatibility hub.

- **Tech**: [Astro](https://astro.build) + Tailwind CSS
- **Default locale**: `en` (no URL prefix)
- **Chinese locale**: `zh` (URL prefix `/zh/`)

## What’s inside

- **Best Picks**: scenario-based recommendations with clear trade-offs
- **Reviews**: deep dives with “best for / not for”, pros/cons, and reproducible notes
- **Comparisons**: A vs B decisions by scenario (not spec-dumps)
- **Guides**: install, tuning, low-latency, troubleshooting
- **Compatibility**: structured hub (and related UX/components)
- **i18n**: path-based locales + client-side preference redirect (see below)
- **SEO**: canonical + `hreflang` alternates + Open Graph tags

Design doc (CN): see `设计.md`.

## Requirements

Astro supports **even-numbered** Node.js versions. Minimum supported versions (per Astro docs) include:

- Node `v18.20.8`
- Node `v20.3.0`
- Node `v22.0.0`

You can check your version in PowerShell:

```powershell
node -v
```

## Quick start (Windows PowerShell)

```powershell
# install dependencies (recommended with package-lock.json)
npm ci

# start dev server (defaults to http://localhost:4321)
npm run dev
```

## Scripts

| Script | What it does |
| - | - |
| `npm run dev` | Start Astro dev server |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview `dist/` locally |
| `npm run format` | Format with Prettier (Astro + Tailwind class sorting) |
| `npm run clean` | Remove `dist/`, `.astro/`, and `node_modules/` |

## Project structure

- `src/pages/`: route entries (including `/zh/**` pages)
- `src/layouts/BaseLayout.astro`: global layout + SEO + language preference script
- `src/components/`: UI components (language/theme switchers, content blocks, etc.)
- `src/i18n/`: locale config + UI copy + page head data
- `src/content/`: content collections (Markdown/JSON), validated by schema
- `public/`: static assets

## Content authoring

This site uses Astro Content Collections. Schemas live in `src/content/config.ts` (Zod).

Content is organized by **collection** and **locale**:

- `src/content/bestPicks/{en,zh}/*.md`
- `src/content/reviews/{en,zh}/*.md`
- `src/content/comparisons/{en,zh}/*.md`
- `src/content/guides/{en,zh}/*.md`
- `src/content/faq/{en,zh}.json`

If you add a file that doesn’t match the schema (missing required fields like `title`/`description`, etc.), build/dev will fail fast.

## i18n behavior (how “default language” is chosen)

This repo currently uses **path-based locales** (not Astro’s built-in `i18n` config):

- **Default locale** is `en` (see `src/i18n/config.ts`). English pages live at the root (e.g. `/reviews/`).
- **Chinese locale** is `zh`. Chinese pages are under `/zh/` (e.g. `/zh/reviews/`).

Client-side preference logic (in `src/components/language-preference.astro`):

- The language switcher writes `localStorage.preferredLocale`.
- On first visit to an English (default-locale) page:
  - If `preferredLocale` exists, it may redirect to that locale.
  - Otherwise it inspects `navigator.languages` / `navigator.language` and may redirect to `zh` if detected.
- When visiting a non-default locale, it persists that choice to `preferredLocale`.

## “.md” URL normalization (zh)

There is a dedicated redirect route at `src/pages/zh/[...path].astro` which maps:

- `/zh/<something>.md` → `/zh/<something>/`

This is mainly for absorbing legacy/bookmark URLs and keeping canonical paths clean.

## Deployment

This is a static Astro site:

```powershell
npm run build
```

Deploy the generated `dist/` to any static host.

### Cloudflare Pages (Wrangler)

If you deploy with Wrangler, use the **Pages** command (not `wrangler deploy`, which is Workers-only):

```powershell
npm run build
npm run deploy
```

Equivalent:

```powershell
npx wrangler pages deploy ./dist
```

Notes:

- Site URL is configured in `astro.config.mjs` (used for canonical/OG URL generation).

## License

See `LICENSE`.

## Credits

- Astro + Tailwind ecosystem
- Images:
  - `src/assets/moon.jpg`: NASA photo via Unsplash (`https://unsplash.com/@nasa`)
