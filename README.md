# STATIC — writer portfolio (Astro)

Dark broadcast-themed portfolio. Astro + Tailwind v4. Zero paid dependencies.

## Run locally
    npm install
    npm run dev
Open http://localhost:4321

## Build
    npm run build      # outputs to dist/
    npm run preview    # preview the production build

## Where things live
- `src/pages/`      one file per section (index, writer, game, book, lab, contact)
- `src/components/` Nav, Footer, Redact (the redaction-reveal element)
- `src/layouts/BaseLayout.astro`  shared shell + atmosphere overlay
- `src/styles/global.css`  design tokens (colors, fonts) + signature effects
- `public/`         your images, videos, cv.pdf (see ASSETS.md)

## Theme
All colors and fonts are in one place: the `@theme` block in `src/styles/global.css`.

## Deploy (free)
Push to GitHub, connect the repo to Cloudflare Pages / Netlify / Vercel.
Build command: `npm run build`  ·  Output directory: `dist`

## Rename the game
"STATIC" is the working title of the featured project. To rename, search the repo for STATIC.
