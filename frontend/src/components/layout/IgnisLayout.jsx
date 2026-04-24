import React, { useState, useEffect } from 'react'
import './IgnisLayout.css'

const navLinks = [
  { label: 'Events', href: '#events' },
  { label: 'Battles', href: '#battles' },
  { label: 'Factions', href: '#factions' },
  { label: 'Forge', href: '#forge' },
  { label: 'Arena', href: '#arena' },
]

const IgnisLayout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="ignis-app">
      {/* ── Navigation ── */}
      <header className={`ignis-nav ${scrolled ? 'ignis-nav--scrolled' : ''}`}>
        <div className="ignis-nav__inner">
          <a href="/" className="ignis-nav__logo">
            <span className="ignis-nav__logo-icon">🔥</span>
            <span className="ignis-fire-text ignis-nav__logo-brand">IGNIS</span>
            <span className="ignis-nav__logo-sub">JWAALA</span>
          </a>

          <nav className={`ignis-nav__links ${mobileOpen ? 'ignis-nav__links--open' : ''}`}>
            {navLinks.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="ignis-nav__link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="ignis-btn-primary ignis-nav__cta">
            Enter Arena ⚡
          </button>

          <button
            className="ignis-nav__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`ignis-nav__hamburger-line ${mobileOpen ? 'open' : ''}`} />
            <span className={`ignis-nav__hamburger-line ${mobileOpen ? 'open' : ''}`} />
            <span className={`ignis-nav__hamburger-line ${mobileOpen ? 'open' : ''}`} />
          </button>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main>{children}</main>

      {/* ── Footer ── */}
      <footer className="ignis-footer">
        <div className="ignis-container">
          <div className="ignis-footer__inner">
            <div className="ignis-footer__brand">
              <span className="ignis-fire-text ignis-footer__logo">IGNIS JWAALA</span>
              <span className="ignis-mono">// ARENA SYSTEM V1.0</span>
            </div>
            <div className="ignis-footer__links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default IgnisLayout
