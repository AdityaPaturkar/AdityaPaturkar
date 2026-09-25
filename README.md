<div align="center">

<svg width="100%" viewBox="0 0 1600 820" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="border-radius: 18px; box-shadow: 0 30px 120px rgba(0, 80, 180, 0.18), 0 10px 60px rgba(0,0,0,0.7);">
  <defs>
    <!-- ────────────────────────────────────────────────
         MASKS — text-shaped alpha cutouts for the image
         ──────────────────────────────────────────────── -->
    <mask id="textMaskADITYA" maskUnits="userSpaceOnUse">
      <rect width="1600" height="820" fill="#000"/>
      <text x="800" y="338" text-anchor="middle"
            font-family="'Segoe UI Black', 'Arial Black', 'Helvetica Neue', sans-serif"
            font-size="168" font-weight="900" letter-spacing="10"
            fill="#fff"/>
      <text x="800" y="482" text-anchor="middle"
            font-family="'Segoe UI Black', 'Arial Black', 'Helvetica Neue', sans-serif"
            font-size="168" font-weight="900" letter-spacing="10"
            fill="#fff"/>
    </mask>

    <!-- Subtle offset mask variant — creates the "depth / second edge" illusion -->
    <mask id="textMaskADITYA_Offset" maskUnits="userSpaceOnUse">
      <rect width="1600" height="820" fill="#000"/>
      <text x="803" y="342" text-anchor="middle"
            font-family="'Segoe UI Black', 'Arial Black', 'Helvetica Neue', sans-serif"
            font-size="168" font-weight="900" letter-spacing="10"
            fill="#fff"/>
      <text x="803" y="486" text-anchor="middle"
            font-family="'Segoe UI Black', 'Arial Black', 'Helvetica Neue', sans-serif"
            font-size="168" font-weight="900" letter-spacing="10"
            fill="#fff"/>
    </mask>

    <!-- ────────────────────────────────────────────────
         FILTERS
         ──────────────────────────────────────────────── -->
    <filter id="heavyBlur" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="42"/>
    </filter>

    <filter id="midBlur" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="16"/>
    </filter>

    <filter id="innerBevel">
      <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="b"/>
      <feOffset dx="-0.6" dy="-1.2" in="b" result="bo"/>
      <feComposite in="bo" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="hi"/>
      <feColorMatrix in="hi" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0"/>
    </filter>

    <filter id="filmGrain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" seed="7"/>
      <feColorMatrix type="matrix"
        values="0 0 0 0 0.85
                0 0 0 0 0.92
                0 0 0 0 1.00
                0 0 0 0.18 0"/>
    </filter>

    <filter id="blueAtmosphere" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="11" result="t"/>
      <feColorMatrix in="t" type="matrix"
        values="0 0 0 0 0.00
                0 0 0 0 0.35
                0 0 0 0 0.90
                0 0 0 0.22 0" result="atm"/>
      <feGaussianBlur in="atm" stdDeviation="12"/>
    </filter>

    <!-- ────────────────────────────────────────────────
         GRADIENTS
         ──────────────────────────────────────────────── -->
    <radialGradient id="vignette" cx="50%" cy="45%" r="75%">
      <stop offset="40%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="82%" stop-color="#000000" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.92"/>
    </radialGradient>

    <radialGradient id="cinematicDarken" cx="50%" cy="35%" r="85%">
      <stop offset="0%" stop-color="#030610" stop-opacity="0.10"/>
      <stop offset="55%" stop-color="#030610" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.85"/>
    </radialGradient>

    <radialGradient id="atmosphericGlow" cx="50%" cy="42%" r="50%">
      <stop offset="0%" stop-color="#1a4fff" stop-opacity="0.16"/>
      <stop offset="40%" stop-color="#4328ff" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="scanlineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="48%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.045"/>
      <stop offset="52%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>

    <clipPath id="roundedFrame">
      <rect x="0" y="0" width="1600" height="820" rx="22"/>
    </clipPath>
  </defs>

  <g clip-path="url(#roundedFrame)">

    <!-- ════════════════════════════════════════════
         LAYER 1 — ORIGINAL BACKGROUND  ( HEAVILY BLURRED )
         Everything except the letters lives in this blur.
         ════════════════════════════════════════════ -->
    <image href="solo-leveling-background.png"
           x="0" y="0" width="1600" height="820"
           preserveAspectRatio="xMidYMid slice"
           filter="url(#heavyBlur)">
      <animate attributeName="opacity"
               from="0.15" to="1"
               begin="0s" dur="2.4s"
               calcMode="spline" keySplines="0.22 1 0.36 1"
               fill="freeze"/>
    </image>

    <!-- ════════════════════════════════════════════
         LAYER 2 — CINEMATIC DARKNESS + VIGNETTE
         ════════════════════════════════════════════ -->
    <rect x="0" y="0" width="1600" height="820" fill="url(#cinematicDarken)">
      <animate attributeName="opacity" from="1.4" to="1" begin="0s" dur="2.8s" fill="freeze"/>
    </rect>

    <rect x="0" y="0" width="1600" height="820" fill="url(#vignette)"/>

    <!-- ════════════════════════════════════════════
         LAYER 3 — SUBTLE BLUE / PURPLE ATMOSPHERIC GLOW
         ════════════════════════════════════════════ -->
    <rect x="0" y="0" width="1600" height="820" fill="url(#atmosphericGlow)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="7s" repeatCount="indefinite"/>
    </rect>

    <!-- Animated atmospheric noise drift (very slow, GPU-friendly) -->
    <rect x="-60" y="-60" width="1720" height="940" filter="url(#blueAtmosphere)" opacity="0.45" mix-blend-mode="screen">
      <animateTransform attributeName="transform" type="translate"
                        values="0,0 ; 24,-16 ; 0,0"
                        dur="22s" repeatCount="indefinite"
                        calcMode="spline" keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"/>
    </rect>

    <!-- ════════════════════════════════════════════
         LAYER 4 — THE CORE ILLUSION
         The SHARP background image passes ONLY through the text mask.
         Everywhere else the mask is black → nothing shows.
         The result: letters look carved / submerged INTO the background.
         ════════════════════════════════════════════ -->

    <!-- Offset pass first — darker, shifted. Creates the "shadow depth" behind the letters. -->
    <g mask="url(#textMaskADITYA_Offset)" opacity="0">
      <image href="solo-leveling-background.png"
             x="0" y="0" width="1600" height="820"
             preserveAspectRatio="xMidYMid slice"
             filter="url(#midBlur)"
             style="mix-blend-mode: multiply;"/>
      <rect x="0" y="0" width="1600" height="820" fill="#000" opacity="0.35"/>
      <animate attributeName="opacity" from="0" to="0.9" begin="0.45s" dur="2.1s" fill="freeze"/>
    </g>

    <!-- Main pass — SHARP image through the letters. This is the "reveal". -->
    <g mask="url(#textMaskADITYA)" opacity="0">
      <image href="solo-leveling-background.png"
             x="0" y="0" width="1600" height="820"
             preserveAspectRatio="xMidYMid slice"/>
      <!-- Inner micro-highlight: adds a glass-like translucent top surface -->
      <rect x="0" y="0" width="1600" height="820" fill="#ffffff" opacity="0.045"/>
      <!-- Inner cool-blue light transmission → cinematic, not neon -->
      <rect x="0" y="0" width="1600" height="820" fill="#6faaff" opacity="0.035" mix-blend-mode="screen"/>
      <animate attributeName="opacity" from="0" to="1" begin="0.25s" dur="2.4s"
               calcMode="spline" keySplines="0.22 1 0.36 1" fill="freeze"/>
    </g>

    <!-- ════════════════════════════════════════════
         LAYER 5 — TYPOGRAPHIC EDGE / BEVEL
         A hairline bright rim around each letter.
         Makes the silhouette emerge from the blur.
         ════════════════════════════════════════════ -->
    <g opacity="0" filter="url(#innerBevel)">
      <text x="800" y="338" text-anchor="middle"
            font-family="'Segoe UI Black', 'Arial Black', 'Helvetica Neue', sans-serif"
            font-size="168" font-weight="900" letter-spacing="10"
            fill="none" stroke="#ffffff" stroke-width="0.7"/>
      <text x="800" y="482" text-anchor="middle"
            font-family="'Segoe UI Black', 'Arial Black', 'Helvetica Neue', sans-serif"
            font-size="168" font-weight="900" letter-spacing="10"
            fill="none" stroke="#ffffff" stroke-width="0.7"/>
      <animate attributeName="opacity" from="0" to="1" begin="1.0s" dur="2.2s" fill="freeze"/>
    </g>

    <!-- Ultra-thin opposite shadow edge for "embossed" depth -->
    <g opacity="0">
      <text x="801" y="340" text-anchor="middle"
            font-family="'Segoe UI Black', 'Arial Black', 'Helvetica Neue', sans-serif"
            font-size="168" font-weight="900" letter-spacing="10"
            fill="none" stroke="#000000" stroke-width="0.8" opacity="0.45"/>
      <text x="801" y="484" text-anchor="middle"
            font-family="'Segoe UI Black', 'Arial Black', 'Helvetica Neue', sans-serif"
            font-size="168" font-weight="900" letter-spacing="10"
            fill="none" stroke="#000000" stroke-width="0.8" opacity="0.45"/>
      <animate attributeName="opacity" from="0" to="1" begin="0.9s" dur="2s" fill="freeze"/>
    </g>

    <!-- ════════════════════════════════════════════
         LAYER 6 — FILM GRAIN / NOISE
         ════════════════════════════════════════════ -->
    <rect x="0" y="0" width="1600" height="820" filter="url(#filmGrain)" opacity="0.22" mix-blend-mode="overlay"/>

    <!-- ════════════════════════════════════════════
         LAYER 7 — SLOW CINEMATIC LIGHT SWEEP
         A diagonal highlight band slides across once after reveal.
         ════════════════════════════════════════════ -->
    <g opacity="0" style="mix-blend-mode: screen;">
      <rect x="-400" y="0" width="900" height="820" fill="url(#scanlineGrad)" transform="skewX(-18)">
        <animate attributeName="x" values="-1200;2000" begin="2.6s" dur="2.4s"
                 calcMode="spline" keySplines="0.22 1 0.36 1" fill="freeze"/>
      </rect>
      <animate attributeName="opacity" values="0;1;0" begin="2.6s" dur="2.4s" fill="freeze"/>
    </g>

    <!-- ════════════════════════════════════════════
         LAYER 8 — FLOATING PARTICLES
         Individually drifting blue/silver micro-points.
         ════════════════════════════════════════════ -->
    <g opacity="0">
      <animate attributeName="opacity" from="0" to="1" begin="1.6s" dur="1.6s" fill="freeze"/>

      <g fill="#cfe6ff">
        <circle cx="220" cy="170" r="1.3" opacity="0.85">
          <animate attributeName="cy" values="170;140;170" dur="9s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="220;238;220" dur="13s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.85;0.25;0.85" dur="7s" repeatCount="indefinite"/>
        </circle>
        <circle cx="380" cy="650" r="1.0" opacity="0.75">
          <animate attributeName="cy" values="650;620;650" dur="8s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="380;360;380" dur="11s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.75;0.2;0.75" dur="6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="540" cy="120" r="1.5" opacity="0.9">
          <animate attributeName="cy" values="120;150;120" dur="10s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="540;518;540" dur="14s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="700" cy="700" r="1.2" opacity="0.7">
          <animate attributeName="cy" values="700;672;700" dur="8.5s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="700;722;700" dur="12s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="6.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="900" cy="90" r="1.1" opacity="0.8">
          <animate attributeName="cy" values="90;120;90" dur="9.5s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="900;880;900" dur="13s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0.22;0.8" dur="7.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="1080" cy="680" r="1.4" opacity="0.9">
          <animate attributeName="cy" values="680;708;680" dur="7.5s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="1080;1056;1080" dur="11.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.9;0.28;0.9" dur="6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="1260" cy="150" r="1.0" opacity="0.7">
          <animate attributeName="cy" values="150;178;150" dur="8s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="1260;1286;1260" dur="10.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="5.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="1410" cy="600" r="1.3" opacity="0.85">
          <animate attributeName="cy" values="600;572;600" dur="10.5s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="1410;1432;1410" dur="14.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.85;0.25;0.85" dur="8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="140" cy="520" r="0.9" opacity="0.7">
          <animate attributeName="cy" values="520;494;520" dur="7s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="140;158;140" dur="9s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="1470" cy="320" r="1.2" opacity="0.8">
          <animate attributeName="cy" values="320;296;320" dur="9s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="1470;1448;1470" dur="12s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0.22;0.8" dur="6.8s" repeatCount="indefinite"/>
        </circle>
      </g>

      <g fill="#7ab5ff">
        <circle cx="310" cy="410" r="0.7" opacity="0.6">
          <animate attributeName="cy" values="410;434;410" dur="6.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0.15;0.6" dur="4.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="1200" cy="430" r="0.7" opacity="0.55">
          <animate attributeName="cy" values="430;406;430" dur="7.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.55;0.15;0.55" dur="5s" repeatCount="indefinite"/>
        </circle>
      </g>
    </g>

    <!-- ─────────────────────────────────────────────
         FRAME CORNER TICKS  ( subtle SYSTEM UI accents )
         ───────────────────────────────────────────── -->
    <g opacity="0.55" stroke="#5ba8ff" stroke-width="1.2" fill="none">
      <path d="M46 86 L46 50 L82 50"/>
      <path d="M1554 86 L1554 50 L1518 50"/>
      <path d="M46 734 L46 770 L82 770"/>
      <path d="M1554 734 L1554 770 L1518 770"/>
      <circle cx="46" cy="50" r="2" fill="#5ba8ff"/>
      <circle cx="1554" cy="50" r="2" fill="#5ba8ff"/>
      <circle cx="46" cy="770" r="2" fill="#5ba8ff"/>
      <circle cx="1554" cy="770" r="2" fill="#5ba8ff"/>
    </g>

  </g>
</svg>

</div>

<br>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=transparent&color=0088ff&height=42&section=header&text=DATA%20SCIENTIST%20%E2%80%A2%20AI%2FML%20ENGINEER%20%E2%80%A2%20DATA%20ANALYST%20%E2%80%A2%20BUSINESS%20ANALYST&fontSize=17&fontColor=94b4d4&fontAlign=50&fontAlignY=58&animation=twinkling" alt="Identity" width="100%">

</div>

<br>

<div align="center">

<img src="https://komarev.com/ghpvc/?username=AdityaPaturkar&style=flat-square&color=0e75b6&label=%F0%9F%91%81%EF%B8%8F%20PROFILE%20VIEWS&abbreviated=true" alt="Profile Views" height="32" style="border-radius: 8px; box-shadow: 0 0 24px rgba(0, 130, 255, 0.3);">

<br><br>

<a href="https://github.com/AdityaPaturkar" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-111217?style=for-the-badge&logo=github&logoColor=f5f5f5&labelColor=07080b&color=15171d" alt="GitHub" height="40" style="border-radius: 10px; margin: 0 7px; box-shadow: 0 4px 20px rgba(30, 30, 40, 0.45);">
</a>

<a href="https://www.linkedin.com/in/aditya-paturkar-20b06139b/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-091a2e?style=for-the-badge&logo=linkedin&logoColor=d6e8ff&labelColor=050d18&color=0a3466" alt="LinkedIn" height="40" style="border-radius: 10px; margin: 0 7px; box-shadow: 0 4px 20px rgba(0, 60, 140, 0.35);">
</a>

<a href="mailto:adityapaturkar2405@gmail.com" target="_blank">
  <img src="https://img.shields.io/badge/Email-220b08?style=for-the-badge&logo=gmail&logoColor=ffd8d1&labelColor=120504&color=45150f" alt="Email" height="40" style="border-radius: 10px; margin: 0 7px; box-shadow: 0 4px 20px rgba(120, 30, 15, 0.30);">
</a>

</div>

<br><br>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0088ff&height=80&section=footer&reversal=true&textBg=false&fontColor=000000" width="100%" alt="" style="opacity: 0.45;">

</div>
