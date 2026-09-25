# ❖ SHINOBI PROFILE — portfolio-site

Vite + React + TypeScript source for the **AdityaPaturkar** cinematic SENKRO-inspired GitHub profile landing page.

## Quickstart

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/
npm run preview    # preview the prod build
```

Requires Node ≥ 18.

## What's Inside

```
src/
├── App.tsx          Identity, Profile HUD, Socials, Stats HUD, Status Bar, Embers
├── App.css          ~784 lines: cinematic style system, typography, animations, responsive
├── index.css        Global reset, scrollbar, selection
└── main.tsx
public/
└── solo-leveling-background.png   Hero artwork (DO NOT ALTER — visual centerpiece)
```

## Live Data Bindings

`src/App.tsx` line ~22 defines placeholder stats:
```ts
{ profileViews: 'XXXX', followers: 'XXXX' }
```
Replace with a `useEffect` hitting the GitHub public API + a profile-views counter badge endpoint of your choice. The UI italicizes `[data-placeholder]` values until they're real.

## Fonts (Google Fonts CDN)

- **Cinzel** — Name display
- **Cormorant Garamond** — HUD values, body
- **JetBrains Mono** — HUD keys, RPG menu labels, subtitles
- **Noto Serif JP** — Kanji (忍・心, 三)

## Responsive

Desktop 2-column → Tablet stacked → Mobile (`background-position: 48% 18%` to keep the character face clear of UI). `prefers-reduced-motion` is fully honored.

## Customization

See the root `../README.md` Customization Cookbook for recipes:
- Change name / subtitle
- Wire live GitHub stats
- Swap hero artwork
- Adjust blur / atmosphere strength
- Tune entry-animation cadence
- Swap fonts

## Lint / Typecheck

```bash
npx tsc --noEmit      # TypeScript typecheck (passes)
npm run build         # runs tsc -b then vite build (passes)
```
