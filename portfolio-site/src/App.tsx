import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

interface GitHubStats {
  profileViews: string;
  followers: string;
}

interface SocialLink {
  label: string;
  url: string;
  external?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    label: 'LINKEDIN',
    url: 'https://www.linkedin.com/in/aditya-paturkar-20b06139b/',
    external: true,
  },
  {
    label: 'LEETCODE',
    url: 'https://leetcode.com/u/Aditya_Paturkar/',
    external: true,
  },
  {
    label: 'GMAIL',
    url: 'mailto:adityapaturkar2405@gmail.com',
    external: false,
  },
];

function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const stats: GitHubStats = useMemo(
    () => ({
      profileViews: 'XXXX',
      followers: 'XXXX',
    }),
    []
  );

  const emberCount = 22;

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => {
      clearTimeout(t);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const bgTransform = useMemo(() => {
    const tx = mouse.x * 14;
    const ty = mouse.y * 14;
    return `translate3d(${tx}px, ${ty}px, 0) scale(1.04)`;
  }, [mouse]);

  const fgTransform = useMemo(() => {
    const tx = mouse.x * -6;
    const ty = mouse.y * -6;
    return `translate3d(${tx}px, ${ty}px, 0)`;
  }, [mouse]);

  return (
    <div className={`page ${mounted ? 'is-mounted' : ''}`}>
      <section ref={heroRef} className="hero">
        <div
          className="hero__bg"
          style={{ transform: bgTransform }}
          aria-hidden="true"
        >
          <div className="hero__bg-image" />
          <div className="hero__blur" />
          <div className="hero__vignette" />
          <div className="hero__blueglow" />
          <div className="hero__grain" />
        </div>

        <div
          className="hero__mist hero__mist--a"
          aria-hidden="true"
          style={{ transform: `translate3d(${mouse.x * 20}px, ${mouse.y * -10}px, 0)` }}
        />
        <div
          className="hero__mist hero__mist--b"
          aria-hidden="true"
          style={{ transform: `translate3d(${mouse.x * -24}px, ${mouse.y * 16}px, 0)` }}
        />

        <ul className="hero__embers" aria-hidden="true">
          {Array.from({ length: emberCount }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 8;
            const duration = 7 + Math.random() * 10;
            const size = 1 + Math.random() * 2.2;
            const opacity = 0.18 + Math.random() * 0.32;
            return (
              <li
                key={i}
                className="hero__ember"
                style={
                  {
                    left: `${left}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity,
                  } as React.CSSProperties
                }
              />
            );
          })}
        </ul>

        <div className="hero__frame" aria-hidden="true">
          <span className="hero__frame-corner hero__frame-corner--tl" />
          <span className="hero__frame-corner hero__frame-corner--tr" />
          <span className="hero__frame-corner hero__frame-corner--bl" />
          <span className="hero__frame-corner hero__frame-corner--br" />
        </div>

        <div className="hero__content" style={{ transform: fgTransform }}>
          <header className="identity">
            <div className="identity__kanji" aria-hidden="true">
              <span>忍</span>
              <span className="identity__divider">・</span>
              <span>心</span>
            </div>

            <h1 className="identity__name">
              <span className="identity__name-line">ADITYA</span>
              <span className="identity__name-line identity__name-line--last">
                PATURKAR
              </span>
            </h1>

            <p className="identity__subtitle">
              <span className="identity__bullet" />
              DATA&nbsp;&nbsp;•&nbsp;&nbsp;AI&nbsp;&nbsp;•&nbsp;&nbsp;MACHINE
              LEARNING&nbsp;&nbsp;•&nbsp;&nbsp;ENGINEERING
              <span className="identity__bullet identity__bullet--right" />
            </p>
          </header>

          <div className="hero__bottom">
            <div className="profile-hud">
              <div className="profile-hud__top">
                <span className="profile-hud__glyph" aria-hidden="true">
                  ❖
                </span>
                <span className="profile-hud__label">PROFILE</span>
                <span className="profile-hud__glyph profile-hud__glyph--right" aria-hidden="true">
                  ❖
                </span>
              </div>
              <div className="profile-hud__divider" />
              <div className="profile-hud__row">
                <span className="profile-hud__key">NAME</span>
                <span className="profile-hud__sep">—</span>
                <span className="profile-hud__value">ADITYA PATURKAR</span>
              </div>
              <div className="profile-hud__divider profile-hud__divider--thin" />
              <div className="profile-hud__row">
                <span className="profile-hud__key">STATUS</span>
                <span className="profile-hud__sep">—</span>
                <span className="profile-hud__value profile-hud__value--accent">
                  ENGINEER / BUILDER
                </span>
              </div>
              <div className="profile-hud__divider" />
              <div className="profile-hud__bottom">
                <span className="profile-hud__tag">RANK・ELITE</span>
                <span className="profile-hud__tag profile-hud__tag--dot" />
                <span className="profile-hud__tag">DISCIPLINE・CODE</span>
              </div>
            </div>

            <aside className="stats-hud">
              <div className="stats-hud__card">
                <div className="stats-hud__label">PROFILE VIEWS</div>
                <div className="stats-hud__divider" />
                <div className="stats-hud__value" data-placeholder="true">
                  {stats.profileViews}
                </div>
              </div>
              <div className="stats-hud__card">
                <div className="stats-hud__label">FOLLOWERS</div>
                <div className="stats-hud__divider" />
                <div className="stats-hud__value" data-placeholder="true">
                  {stats.followers}
                </div>
              </div>
            </aside>
          </div>

          <div className="hero__row">
            <div className="status-bar">
              <div className="status-bar__line status-bar__line--top" />
              <div className="status-bar__inner">
                <span className="status-bar__crest" aria-hidden="true">
                  三
                </span>
                <div className="status-bar__text">
                  <span className="status-bar__title">SHINOBI PROFILE</span>
                  <span className="status-bar__sep">・</span>
                  <span className="status-bar__motto">
                    DISCIPLINE&nbsp;&nbsp;•&nbsp;&nbsp;BUILD&nbsp;&nbsp;•&nbsp;&nbsp;LEARN
                  </span>
                </div>
                <span className="status-bar__crest status-bar__crest--right" aria-hidden="true">
                  三
                </span>
              </div>
              <div className="status-bar__line status-bar__line--bottom" />
            </div>

            <nav className="socials" aria-label="Contact and Social">
              <ul className="socials__list">
                {socialLinks.map((link, idx) => (
                  <li className="socials__item" key={link.label}>
                    <a
                      href={link.url}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="socials__link"
                      style={
                        { '--social-index': idx } as React.CSSProperties
                      }
                    >
                      <span className="socials__index" aria-hidden="true">
                        0{idx + 1}
                      </span>
                      <span className="socials__label">{link.label}</span>
                      <span className="socials__dash" aria-hidden="true">
                        ──────────
                      </span>
                      <span
                        className="socials__arrow"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="hero__scanlines" aria-hidden="true" />
      </section>
    </div>
  );
}

export default App;
