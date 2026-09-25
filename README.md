# ❖ ADITYA PATURKAR — SHINOBI PROFILE

> **Cold. Minimal. Disciplined. Cinematic. Intelligent. Premium.**
>
> A SENKRO-inspired samurai-game GitHub profile landing page, built as a full-screen AAA-character-select cinematic hero over a Solo Leveling artwork backdrop. Built with Vite + React + TypeScript.

---

<p align="center">
  <sub>HERO ARTWORK · Solo Leveling · Sang Jin-Woo · 忍・心</sub>
</p>

---

## 🎨 Art Direction

| Axis | Palette |
|---|---|
| **Mood** | Samurai character profile × Dark Japanese cinematic UI × Modern software engineer portfolio × Premium game character HUD |
| **Background** | `solo-leveling-background.png` — original artwork, preserved as the visual centerpiece. No redraw, no crop, no heavy alteration. |
| **Color** | Charcoal black · Gunmetal · Off-white · Muted blue · Subtle cyan highlights |
| **Avoid** | Purple gaming gradients · Generic cyberpunk · Huge glowing buttons · Cartoonish UI · Excessive borders · Flashy neon · Bouncing elements · Streamer overlays |

### Layered Cinematic Effect Stack

```
┌─────────────────────────────────────────────────────────────────────┐
│  8. hero__scanlines   ──  faint CRT film grain (mix-blend: multiply)│
│  7. hero__frame       ──  thin L-brackets at 4 corners              │
│  6. UI LAYER          ──  name / HUD / socials / stats (z=6)        │
│  5. hero__embers      ──  22 quiet blue embers rising               │
│  4. hero__mist a/b    ──  2 parallax blue-gray clouds               │
│  3. hero__blueglow    ──  3 radial gradients (screen blend)        │
│  2. hero__vignette    ──  dark radial + top/bottom linear (multiply)│
│  1. hero__bg-image    ──  cover, center, 3px blur, -0.3 brightness  │
└─────────────────────────────────────────────────────────────────────┘
```

The background layer is blurred and dimmed; the character himself stays clearly visible. A radial blue halo sits *behind* the name so the typography looks **submerged into the artwork** — not floating on top.

---

## 🧱 Feature Breakdown

### 1. Hero Background
- File: `portfolio-site/public/solo-leveling-background.png`
- `background-size: cover` · `background-position: center`
- Background layer blur **3px** (not the UI layer)
- Dark cinematic vignette + radial gradients
- Subtle blue-gray atmospheric glow via `mix-blend-mode: screen`

### 2. Name — Main Focal Point
```
                    忍 ・ 心
          ADITYA
         PATURKAR
   •  DATA • AI • MACHINE LEARNING • ENGINEERING  •
```
- **Font:** Cinzel (sharp display serif) with Noto Serif JP kanji fallback
- Metallic gradient fill `#ffffff → #e7ebf2 → #c4ccd8 → #8b93a1`
- 0.4px blue edge stroke + drop-shadow embed
- Wide letter-spacing (0.32em / 0.42em on last name)
- Radial blue halo underlayer
- Sequenced fade-in: kanji → name → subtitle

### 3. Profile HUD (Sekiro-inspired)
```
┌─ ❖  PROFILE  ❖ ──────────────────────────────────┐
│  NAME   —  ADITYA PATURKAR                        │
│  STATUS —  ENGINEER / BUILDER                     │
│  [RANK・ELITE]  ●  [DISCIPLINE・CODE]             │
└───────────────────────────────────────────────────┘
```
- Thin diamond dividers with chevron caps
- Glass/metal `backdrop-filter: blur(10px) saturate(1.1)`
- Muted white / gray, subtle blue accents

### 4. Social / Contact Links (RPG Menu)
```
  01   LINKEDIN    ────────────── →
  02   LEETCODE    ────────────── →
  03   GMAIL       ────────────── →
```
| Target | URL |
|---|---|
| **LinkedIn** | `https://www.linkedin.com/in/aditya-paturkar-20b06139b/` |
| **LeetCode** | `https://leetcode.com/u/Aditya_Paturkar/` |
| **Gmail** | `mailto:adityapaturkar2405@gmail.com` |

Hover behavior:
- Padded slide-in from left (8px)
- Left-to-right expanding underline
- Blue glow on index glyph + arrow
- Gradient sweep fill

### 5. GitHub Stats HUD
```
   PROFILE VIEWS        FOLLOWERS
   ────────────         ──────────
       XXXX                XXXX
```
Values are **placeholders** — no fabricated numbers. Wire real bindings in:
```ts
// portfolio-site/src/App.tsx  (lines 22-27)
const stats: GitHubStats = useMemo(
  () => ({ profileViews: 'XXXX', followers: 'XXXX' }),
  []
);
```
Drop in a `useEffect` that hits `https://api.github.com/users/AdityaPaturkar` or plug a shield/badge endpoint. The `[data-placeholder]` CSS selector italicizes XXXX so its "to-be-filled" status is visually obvious.

### 6. Status Bar
```
╭───────────────────────────────────────────────────╮
│  三   SHINOBI PROFILE ・ DISCIPLINE • BUILD • LEARN   三  │
╰───────────────────────────────────────────────────╯
```
- Chamfered/angled line edges (not straight)
- Mirrored crest glyph 三 (mirrored on right)
- No Sekiro logos or copyrighted UI elements — general samurai inspiration only

### 7. Animation (Extremely Subtle)
| Motion | Duration |
|---|---|
| Background parallax (mouse driven) | 1.8s cubic-bezier ease |
| Content parallax (opposite) | 1.8s cubic-bezier ease |
| Sequenced UI fade-in (8 steps) | 0.25s → 1.65s delays |
| Mist A drift (alternate) | 22s |
| Mist B drift (alternate) | 28s |
| Ember rise (per particle) | 7–17s |

No excessive particles. No flashy neon. No bouncing.

### 8. Responsiveness

| Breakpoint | Layout |
|---|---|
| **Desktop > 1080px** | 2-column: HUD + stats (row 1), Status bar + socials (row 2), name top-center |
| **Tablet ≤ 1080px** | Stack to single column, HUDs full-width |
| **Mobile ≤ 720px** | Background shifts to `48% 18%` to **preserve the character's face/body**. All HUDs full-width. Socials stack. Typography reflows above torso. |
| **Mobile ≤ 420px** | Compressed paddings, name 26–46px clamp |

`prefers-reduced-motion` honored — embers static, mist disabled, all transitions set to 0.01ms.

---

## ⚙️ Tech Stack

| Layer | Tool |
|---|---|
| Build | Vite 8 |
| UI | React 19 |
| Language | TypeScript 5 |
| Lint | Oxlint (`.oxlintrc.json`) |
| Fonts | Cinzel · Cormorant Garamond · JetBrains Mono · Noto Serif JP (Google Fonts) |
| Styling | Hand-written CSS (no Tailwind) — 19 KB · 4.9 KB gzipped |

Bundle size (prod):
```
dist/index.html                   1.03 kB
dist/assets/index-DyQqLvve.css   18.92 kB  (gzip: 4.88 kB)
dist/assets/index-CvDgKl6H.js   226.46 kB  (gzip: 70.19 kB)
```

---

## 📁 Project Structure

```
AdityaPaturkar/
├── portfolio-site/
│   ├── public/
│   │   ├── solo-leveling-background.png   ← HERO ARTWORK (DO NOT ALTER)
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src/
│   │   ├── App.tsx             ← All components (identity, HUD, socials, stats, status, embers)
│   │   ├── App.css             ← 784-line cinematic style system
│   │   ├── index.css           ← Resets, scrollbars, selection
│   │   ├── main.tsx
│   │   └── assets/             (vite scaffold assets, unused)
│   ├── index.html              ← Google Fonts, metadata
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   ├── .oxlintrc.json
│   └── README.md
└── README.md                   ← YOU ARE HERE
```

### Key Code References

| Concern | File / Lines |
|---|---|
| Font loading + `<title>` | [index.html](file:///k:/GITHUB%20PROFILE/AdityaPaturkar/portfolio-site/index.html#L1-L26) |
| Background layer assembly + blur/vignette | [App.css](file:///k:/GITHUB%20PROFILE/AdityaPaturkar/portfolio-site/src/App.css#L24-L123) |
| Name typography (Cinzel + submerged effect) | [App.css](file:///k:/GITHUB%20PROFILE/AdityaPaturkar/portfolio-site/src/App.css#L218-L335) |
| Profile HUD markup | [App.tsx](file:///k:/GITHUB%20PROFILE/AdityaPaturkar/portfolio-site/src/App.tsx#L146-L181) |
| Social links + hover underline | [App.css](file:///k:/GITHUB%20PROFILE/AdityaPaturkar/portfolio-site/src/App.css#L560-L668) |
| Stats HUD + placeholder binding | [App.tsx](file:///k:/GITHUB%20PROFILE/AdityaPaturkar/portfolio-site/src/App.tsx#L22-L27) |
| Sequenced fade-in timings | [App.css](file:///k:/GITHUB%20PROFILE/AdityaPaturkar/portfolio-site/src/App.css#L210-L526) (per-block `transition-delay`) |
| Mobile (preserves character face) | [App.css](file:///k:/GITHUB%20PROFILE/AdityaPaturkar/portfolio-site/src/App.css#L683-L813) |

---

## 🚀 Getting Started

```bash
cd portfolio-site
npm install
npm run dev        # → http://localhost:5173
npm run build      # → dist/
npm run preview    # preview production build
```

Requirements: **Node ≥ 18** (Vite 8).

---

## 🔧 Customization Cookbook

### Change Name / Subtitle
```tsx
// portfolio-site/src/App.tsx  — Identity section
<span className="identity__name-line">ADITYA</span>
<span className="identity__name-line identity__name-line--last">PATURKAR</span>
<p className="identity__subtitle">DATA • AI • MACHINE LEARNING • ENGINEERING</p>
```

### Bind Live GitHub Stats
```tsx
// portfolio-site/src/App.tsx — inside App(), replace the stats useMemo:
const [stats, setStats] = useState<GitHubStats>({ profileViews: '—', followers: '—' });

useEffect(() => {
  fetch('https://api.github.com/users/AdityaPaturkar')
    .then(r => r.json())
    .then(data => setStats({
      profileViews: new Intl.NumberFormat().format(/* profile views need separate API */),
      followers: new Intl.NumberFormat().format(data.followers ?? 0)
    }));
}, []);
```
(Profile views require the `gh-profile-views-counter` / `komarev` badge endpoint or a GHA counter, since GitHub's public API does not expose view counts natively.)

### Swap Hero Artwork
Replace `portfolio-site/public/solo-leveling-background.png` with any same-name image (or update the URL in [App.css](file:///k:/GITHUB%20PROFILE/AdityaPaturkar/portfolio-site/src/App.css#L32)).

### Tweak Blur / Atmosphere
```css
/* App.css — hero__bg-image */
filter: blur(3px) saturate(0.92) contrast(1.02) brightness(0.7);
```
- Want a sharper background? → `blur(1.5px)`
- Want more contrast on the character? → `brightness(0.8)`
- Want *more* blue mood? → bump `hero__blueglow` opacity from `0.85` to `1.1`

### Speed Up / Slow Down Entry
Every HUD block has a unique `transition-delay` in `App.css`. E.g. socials appear at `1.65s`; make it snappier:
```css
transition: opacity 1.2s ease 0.9s, transform 1.5s … 0.9s;
```

### Font Swap
Edit the Google Fonts `<link>` in `portfolio-site/index.html`, then update:
| Usage | CSS font-family |
|---|---|
| Name | `identity__name { font-family: 'Cinzel', … }` |
| HUD mono | `.profile-hud, .socials__link { font-family: 'JetBrains Mono', … }` |
| HUD values | `.profile-hud__value { font-family: 'Cormorant Garamond', … }` |
| Kanji | `.identity__kanji, .status-bar__crest { font-family: 'Noto Serif JP', … }` |

---

## 📬 Contact / Socials

| Channel | Link |
|---|---|
| **LinkedIn** | [in/aditya-paturkar-20b06139b](https://www.linkedin.com/in/aditya-paturkar-20b06139b/) |
| **LeetCode** | [u/Aditya_Paturkar](https://leetcode.com/u/Aditya_Paturkar/) |
| **Gmail** | [adityapaturkar2405@gmail.com](mailto:adityapaturkar2405@gmail.com) |

---

## ⚔️ Philosophy

> 忍 ・ 心 — *Shinobi kokoro* (Endurance · Heart)
>
> Discipline. Build. Learn.
> Repeat.

---

<p align="right">
  <sub>Commit <code>239e907</code> · Built with Vite · Maintained by <strong>Aditya Paturkar</strong></sub>
</p>
