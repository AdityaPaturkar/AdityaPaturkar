
<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║  ADITYA PATURKAR // LIVE CINEMATIC OVERLAY                   ║
  ║  SHADOW PROTOCOL // RENDER ENGINE v3.0                       ║
  ╚══════════════════════════════════════════════════════════════╝
-->

<!-- ══════════════════════════════════════════════════════════
     LIVE ANIMATED HERO // PNG BACKGROUND + TEXT OVERLAY
     ══════════════════════════════════════════════════════════ -->
<div align="center">
  <div style="
    position: relative;
    width: 100%;
    max-width: 1200px;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 14px;
    box-shadow:
      0 0 0 1px rgba(255, 0, 102, 0.35),
      0 0 40px rgba(255, 0, 102, 0.18),
      0 0 120px rgba(0, 212, 255, 0.08),
      inset 0 0 80px rgba(10, 10, 15, 0.8);
    background: #0a0a0f;
    isolation: isolate;
  ">

    <!-- [1] BACKGROUND PNG LAYER -->
    <img
      src="./background profile.png"
      alt="ADITYA PATURKAR // SYSTEM BACKGROUND"
      style="
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.55;
        filter: contrast(1.08) saturate(1.1) brightness(0.85);
        z-index: 0;
        animation: ap-slow-kenburns 18s ease-in-out infinite alternate,
                   ap-subtle-breathe 6s ease-in-out infinite;
      "
    />

    <!-- [2] DARK VIGNETTE GRADIENT OVERLAY -->
    <div style="
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 50% 45%, transparent 0%, transparent 35%, rgba(10,10,15,0.55) 75%, rgba(10,10,15,0.95) 100%),
        linear-gradient(180deg, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.0) 25%, rgba(10,10,15,0.0) 75%, rgba(10,10,15,0.7) 100%);
      z-index: 1;
      pointer-events: none;
    "></div>

    <!-- [3] CHROMATIC NEON GLOW WASH -->
    <div style="
      position: absolute;
      inset: 0;
      background:
        linear-gradient(120deg, rgba(255,0,102,0.10) 0%, transparent 40%, transparent 60%, rgba(0,212,255,0.10) 100%);
      mix-blend-mode: screen;
      z-index: 2;
      pointer-events: none;
      animation: ap-neon-drift 10s ease-in-out infinite alternate;
    "></div>

    <!-- [4] LIVE SCANLINES (VIDEO OVERLAY EFFECT) -->
    <div style="
      position: absolute;
      inset: 0;
      background-image: repeating-linear-gradient(
        0deg,
        rgba(255,255,255,0.04) 0px,
        rgba(255,255,255,0.04) 1px,
        transparent 1px,
        transparent 3px
      );
      mix-blend-mode: overlay;
      z-index: 3;
      pointer-events: none;
      animation: ap-scan 0.12s linear infinite;
    "></div>

    <!-- [5] CRT NOISE / FLOATING PARTICLES (LIVE-WALLPAPER) -->
    <div style="
      position: absolute;
      inset: 0;
      background-image:
        radial-gradient(circle at 20% 30%, rgba(255,0,102,0.35) 0px, transparent 2px),
        radial-gradient(circle at 78% 65%, rgba(0,212,255,0.30) 0px, transparent 2px),
        radial-gradient(circle at 45% 80%, rgba(255,215,0,0.28) 0px, transparent 2px),
        radial-gradient(circle at 62% 18%, rgba(255,0,102,0.22) 0px, transparent 2px),
        radial-gradient(circle at 12% 70%, rgba(0,212,255,0.20) 0px, transparent 2px);
      background-size: 900px 900px, 1100px 1100px, 750px 750px, 1000px 1000px, 850px 850px;
      mix-blend-mode: screen;
      z-index: 4;
      pointer-events: none;
      animation: ap-embers 14s linear infinite;
    "></div>

    <!-- [6] HORIZONTAL SCAN BAR (JITTER) -->
    <div style="
      position: absolute;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, rgba(0,212,255,0.55), rgba(255,0,102,0.55), transparent);
      box-shadow: 0 0 20px rgba(0,212,255,0.45), 0 0 40px rgba(255,0,102,0.25);
      z-index: 5;
      pointer-events: none;
      animation: ap-scanbar 4.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
    "></div>

    <!-- [7] HUD FRAME / CORNER BRACKETS -->
    <div style="
      position: absolute;
      inset: 18px;
      border: 0;
      z-index: 7;
      pointer-events: none;
    ">
      <!-- TL -->
      <div style="position:absolute; top:0; left:0; width:36px; height:36px; border-top:2px solid #ff0066; border-left:2px solid #ff0066; box-shadow:-2px -2px 10px rgba(255,0,102,0.6);"></div>
      <!-- TR -->
      <div style="position:absolute; top:0; right:0; width:36px; height:36px; border-top:2px solid #00d4ff; border-right:2px solid #00d4ff; box-shadow:2px -2px 10px rgba(0,212,255,0.6);"></div>
      <!-- BL -->
      <div style="position:absolute; bottom:0; left:0; width:36px; height:36px; border-bottom:2px solid #00d4ff; border-left:2px solid #00d4ff; box-shadow:-2px 2px 10px rgba(0,212,255,0.6);"></div>
      <!-- BR -->
      <div style="position:absolute; bottom:0; right:0; width:36px; height:36px; border-bottom:2px solid #ff0066; border-right:2px solid #ff0066; box-shadow:2px 2px 10px rgba(255,0,102,0.6);"></div>
    </div>

    <!-- [8] NAME OVERLAY // MAIN TITLE -->
    <div style="
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 10;
      pointer-events: none;
      gap: 14px;
    ">

      <!-- SUBTITLE / RANK TAG -->
      <div style="
        font-family: 'Courier New', ui-monospace, monospace;
        font-size: clamp(10px, 1.1vw, 14px);
        letter-spacing: 0.6em;
        text-indent: 0.6em;
        color: #00d4ff;
        text-shadow:
          0 0 6px rgba(0,212,255,0.9),
          0 0 18px rgba(0,212,255,0.55);
        text-transform: uppercase;
        opacity: 0.9;
        animation: ap-flicker 3.6s infinite;
      ">
        ‹ ‹ RANK · S · CLASS · HUNTER › ›
      </div>

      <!-- ===== MAIN NAME // ADITYA PATURKAR ===== -->
      <h1 style="
        margin: 0;
        padding: 0 4vw;
        font-family: 'Impact', 'Arial Black', sans-serif;
        font-weight: 900;
        font-size: clamp(38px, 9.5vw, 128px);
        line-height: 0.92;
        letter-spacing: 0.04em;
        text-align: center;
        text-transform: uppercase;
        background: linear-gradient(
          180deg,
          #ffffff 0%,
          #e0e6ff 22%,
          #ff0066 48%,
          #ffd700 58%,
          #00d4ff 78%,
          #ffffff 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        filter: drop-shadow(0 0 22px rgba(255,0,102,0.55))
                drop-shadow(0 0 44px rgba(0,212,255,0.30));
        animation: ap-name-pulse 4s ease-in-out infinite;
        user-select: none;
        position: relative;
      ">
        ADITYA&nbsp;PATURKAR
      </h1>

      <!-- UNDERLINE // EXPANDING ENERGY BAR -->
      <div style="
        width: clamp(220px, 55%, 620px);
        height: 3px;
        position: relative;
        overflow: hidden;
        background: rgba(255,255,255,0.08);
        border-radius: 2px;
      ">
        <div style="
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, #ff0066 30%, #ffd700 50%, #00d4ff 70%, transparent 100%);
          background-size: 200% 100%;
          animation: ap-energy-flow 3s linear infinite;
        "></div>
      </div>

      <!-- SUBTITLE // DESIGNATION -->
      <div style="
        font-family: 'Courier New', ui-monospace, monospace;
        font-size: clamp(9px, 1vw, 13px);
        letter-spacing: 0.5em;
        text-indent: 0.5em;
        color: rgba(224, 230, 255, 0.85);
        text-transform: uppercase;
        opacity: 0.85;
      ">
        SHADOW · SAMURAI · ARCHITECT
      </div>

    </div>

    <!-- [9] HUD HUD TICKERS (LIVE-VIDEO FEEL) -->
    <div style="
      position: absolute;
      top: 18px;
      left: 58px;
      right: 58px;
      z-index: 8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'Courier New', ui-monospace, monospace;
      font-size: 10px;
      letter-spacing: 0.2em;
      color: rgba(224,230,255,0.55);
      pointer-events: none;
    ">
      <span style="display:flex; align-items:center; gap:6px;">
        <span style="width:7px; height:7px; background:#ff0066; border-radius:50%; box-shadow:0 0 10px #ff0066; animation: ap-record 1.2s infinite;"></span>
        REC · LIVE
      </span>
      <span style="color: rgba(0,212,255,0.8);">
        SYS://ID_000-ADITYA
      </span>
      <span>
        ████████████░░░ 97%
      </span>
    </div>

    <div style="
      position: absolute;
      bottom: 18px;
      left: 58px;
      right: 58px;
      z-index: 8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'Courier New', ui-monospace, monospace;
      font-size: 10px;
      letter-spacing: 0.2em;
      color: rgba(224,230,255,0.55);
      pointer-events: none;
    ">
      <span>FRAME · 4K / 60</span>
      <span style="color:rgba(255,215,0,0.8);">
        ▸ CINEMATIC · MODE · ENGAGED ◂
      </span>
      <span style="animation:ap-flicker 2.8s infinite;">
        ◉ ONLINE
      </span>
    </div>

  </div>
</div>

<!-- ══════════════════════════════════════════════════════════
     KEYFRAME ANIMATIONS // LIVE-WALLPAPER ENGINE
     ══════════════════════════════════════════════════════════ -->
<style>
  @keyframes ap-slow-kenburns {
    0%   { transform: scale(1.00) translate(0, 0); }
    50%  { transform: scale(1.08) translate(-0.8%, -0.6%); }
    100% { transform: scale(1.04) translate(0.6%, 0.4%); }
  }
  @keyframes ap-subtle-breathe {
    0%, 100% { opacity: 0.50; }
    50%      { opacity: 0.62; }
  }
  @keyframes ap-neon-drift {
    0%   { transform: translateX(-3%); opacity: 0.8; }
    100% { transform: translateX(3%);  opacity: 1;   }
  }
  @keyframes ap-scan {
    0%   { background-position: 0 0; }
    100% { background-position: 0 6px; }
  }
  @keyframes ap-embers {
    0%   { background-position: 0 0, 0 0, 0 0, 0 0, 0 0; }
    100% { background-position: 400px -300px, -500px 450px, 300px 280px, -600px -500px, 500px 350px; }
  }
  @keyframes ap-scanbar {
    0%   { top: 4%;   opacity: 0;    }
    8%   { opacity: 1; }
    92%  { opacity: 1; }
    100% { top: 96%;  opacity: 0;    }
  }
  @keyframes ap-name-pulse {
    0%, 100% {
      filter: drop-shadow(0 0 18px rgba(255,0,102,0.50))
              drop-shadow(0 0 36px rgba(0,212,255,0.25));
      transform: translateY(0);
    }
    50% {
      filter: drop-shadow(0 0 30px rgba(255,0,102,0.80))
              drop-shadow(0 0 60px rgba(0,212,255,0.50))
              drop-shadow(0 0 90px rgba(255,215,0,0.25));
      transform: translateY(-2px);
    }
  }
  @keyframes ap-energy-flow {
    0%   { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes ap-flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
    20%, 24%, 55%                           { opacity: 0.45; }
  }
  @keyframes ap-record {
    0%, 100% { opacity: 1; transform: scale(1);   }
    50%      { opacity: 0.4; transform: scale(0.8);}
  }
</style>

<!-- ══════════════════════════════════════════════════════════
     SYSTEM METADATA STRIP
     ══════════════════════════════════════════════════════════ -->
<div align="center" style="margin-top: 18px;">

  [![CYBERPUNK](https://img.shields.io/badge/AESTHETIC-CYBERPUNK-ff0066?style=for-the-badge&logoColor=white&labelColor=0a0a0f)](.)
  [![SEKIRO](https://img.shields.io/badge/CODE-SEKIRO_STYLE-00d4ff?style=for-the-badge&logoColor=white&labelColor=0a0a0f)](.)
  [![SOLO LEVELING](https://img.shields.io/badge/VIBE-SOLO_LEVELING-ffd700?style=for-the-badge&logoColor=white&labelColor=0a0a0f)](.)

</div>

---

## ╔═══ SYSTEM IDENTIFICATION ═══╗

| ATTRIBUTE | VALUE |
|-----------|-------|
| **Designation** | `ADITYA_PATURKAR.exe` |
| **Role** | Full-Stack Architect / UI Craftsman |
| **Aesthetic Core** | Cyberpunk × Vampire × Samurai Cinematic |
| **Layout** | AAA Character HUD / Elite Command Console |
| **Philosophy** | Curiosity-driven discovery over static documentation |

---

## ╔═══ CLASS SKILL TREE ═══╗

```
  ┌─── FRONTEND COMBAT ──────────────────────────────────────────┐
  │ [███████████░░░░░░░░░] UI/UX ARCHITECTURE     ▸ MASTER       │
  │ [████████████░░░░░░░░] REACT / TARO           ▸ EXPERT       │
  │ [████████████████░░░] CINEMATIC ANIMATION     ▸ FLUENT       │
  │ [██████████████░░░░░] NEON HUD DESIGN         ▸ ADEPT        │
  └──────────────────────────────────────────────────────────────┘
  ┌─── BACKEND DEFENSE ──────────────────────────────────────────┐
  │ [██████████████░░░░░] SYSTEM ARCHITECTURE     ▸ EXPERT       │
  │ [████████████░░░░░░░] DATABASE / CACHING      ▸ ADEPT        │
  │ [███████████░░░░░░░░] API DESIGN              ▸ FLUENT       │
  │ [█████████████░░░░░░] SECURITY / AUTH         ▸ SKILLED      │
  └──────────────────────────────────────────────────────────────┘
  ┌─── SPECIAL ABILITIES ────────────────────────────────────────┐
  │ [████████████████████] CINEMATIC UI POLISH    ▸ LEGENDARY    │
  │ [███████████████░░░░] PARTICLE / EMBER FX     ▸ MASTER       │
  │ [████████████░░░░░░░] HUD / GAME-STYLE UX     ▸ EXPERT       │
  └──────────────────────────────────────────────────────────────┘
```

---

## ╔═══ ACTIVE VAULTS ═══╗

> *Knowledge hidden in the shadows — unlocked only through interaction.*

| VAULT ID | NAME | ACCESS LEVEL | LORE |
|----------|------|--------------|------|
| `VAULT-001` | **Codex of UI Sorcery** | 🔴 RESTRICTED | Cinematic interfaces, particle systems, HUD alchemy |
| `VAULT-002` | **Samurai Architecture** | 🟡 MEDIUM | Battle-tested systems, clean code katas |
| `VAULT-003` | **Neon Dreams Archive** | 🟢 OPEN | Experiments, aesthetic probes, style mutations |

---

## ╔═══ OPERATIONAL AESTHETIC ═══╗

### Palette — CHARCOAL × NEON
```
  CHARCOAL VOID    #0a0a0f    ▸ background base
  GUNMETAL STEEL   #1a1a2e    ▸ surfaces / cards
  BLOOD NEON       #ff0066    ▸ primary accent (brackets, pulse)
  CYBER BLUE       #00d4ff    ▸ secondary accent (text, scanbar)
  HUNTER GOLD      #ffd700    ▸ rank / highlights
  PHANTOM WHITE    #e0e6ff    ▸ primary text
```

### Signature Patterns
- **Ultra-minimal icon-only headers** — context-aware, no noise
- **RPG menu interactions** — slide effects, expanding underlines
- **Live wallpaper elements** — embers, scanlines, Ken Burns drift, CRT pulse
- **Character-first hierarchy** — identity + rank anchor the viewport
- **Mobile = native app** — full-screen overlays, face-preserving reflow

---

## ╔═══ MANIFESTO ═══╗

> *"A system is not a page. It is a place. You do not read it — you inhabit it."*
>
> — The Shadow Protocol

This is not a portfolio. It is a command center.

Every pixel serves a purpose. Every transition is a blade-draw. Every interaction rewards curiosity.

If you are here to find templates — leave.
If you are here to build an **experience** — welcome, hunter.

---

## ╔═══ CONNECTION PROTOCOLS ═══╗

| SIGNAL | CHANNEL | STATUS |
|--------|---------|--------|
| 📡 **Comms** | `system [at] adityapaturkar [dot] dev` | `STANDBY` |
| ⚔️ **Arena** | GitHub / Portfolio Arena | `READY` |
| 🌙 **Shadow Network** | LinkedIn / Professional Plane | `LISTENING` |

---

```
  ╔══════════════════════════════════════════════════════════════╗
  ║  END OF TRANSMISSION  //  SHADOW PROTOCOL v3.0              ║
  ║  "Arise. The night is young. And the code is unwritten."    ║
  ╚══════════════════════════════════════════════════════════════╝
```

<div align="center">
  <sub>▸ Rendered against <b>background profile.png</b> with live overlay FX ◂</sub><br/>
  <sub>▸ Last compiled: 2026 · <b>RANK S</b> maintained ◂</sub>
</div>
