<p align="center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 675"
    width="100%"
    style="max-width: 1200px; border-radius: 6px; display: block; margin: 0 auto; box-shadow: 0 25px 80px rgba(0,0,0,0.75);"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="sekiro-grade" x="-5%" y="-5%" width="110%" height="110%">
        <feColorMatrix
          type="matrix"
          values="
            0.86 0.05 0.05 0 0.06
            0.05 0.86 0.05 0 0.06
            0.05 0.05 0.86 0 0.06
            0    0    0    0.72 0
          "
        />
        <feComponentTransfer>
          <feFuncR type="linear" slope="1.08" intercept="-0.03"/>
          <feFuncG type="linear" slope="1.08" intercept="-0.03"/>
          <feFuncB type="linear" slope="1.08" intercept="-0.03"/>
        </feComponentTransfer>
      </filter>

      <linearGradient id="glass-dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#0c0d10" stop-opacity="0.22"/>
        <stop offset="50%"  stop-color="#14161b" stop-opacity="0.40"/>
        <stop offset="100%" stop-color="#0a0b0d" stop-opacity="0.58"/>
      </linearGradient>

      <radialGradient id="glass-vignette" cx="50%" cy="50%" r="70%">
        <stop offset="38%" stop-color="#000000" stop-opacity="0"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.55"/>
      </radialGradient>

      <linearGradient id="sekiro-steel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stop-color="#eceef1"/>
        <stop offset="32%" stop-color="#a7adb6"/>
        <stop offset="60%" stop-color="#5a6478"/>
        <stop offset="100%" stop-color="#2c3447"/>
      </linearGradient>

      <filter id="engrave-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
        <feOffset in="blur" dx="0" dy="6" result="shadow"/>
        <feColorMatrix in="shadow" type="matrix"
          values="0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0.85 0" result="shadow-opacity"/>
        <feMerge>
          <feMergeNode in="shadow-opacity"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <rect x="0" y="0" width="1200" height="675" fill="#0c0d10"/>

    <image
      href="./background%20profile.png"
      x="0" y="0" width="1200" height="675"
      preserveAspectRatio="xMidYMid slice"
      filter="url(#sekiro-grade)"
    />

    <rect x="0" y="0" width="1200" height="675" fill="url(#glass-dark)"/>
    <rect x="0" y="0" width="1200" height="675" fill="url(#glass-vignette)"/>

    <text
      x="600" y="360"
      text-anchor="middle"
      dominant-baseline="middle"
      font-family="'Bebas Neue', 'Impact', 'Arial Black', sans-serif"
      font-weight="900"
      font-size="156"
      letter-spacing="8"
      fill="url(#sekiro-steel)"
      filter="url(#engrave-shadow)"
      style="font-stretch: condensed;"
    >
      ADITYA PATURKAR
    </text>
  </svg>
</p>
