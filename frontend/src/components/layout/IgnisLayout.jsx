import React, { useState, useEffect } from 'react'
import './IgnisLayout.css'

const IgnisLayout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="ignis-app">
      <header className={`ignis-nav ${scrolled ? 'ignis-nav--scrolled' : ''}`}>
        <div className="ignis-nav__inner">
          <a href="/" className="ignis-nav__logo">
            <span className="ignis-nav__logo-icon">🔥</span>
            <span className="ignis-fire-text" style={{ fontWeight: 800, fontSize: '1.3rem', fontFamily: 'var(--font-display)' }}>IGNIS</span>
            <span style={{ fontWeight: 600, fontSize: '1.3rem', fontFamily: 'var(--font-display)', color: 'var(--ignis-white)', marginLeft: '6px' }}>JWAALA</span>
          </a>
          <nav className="ignis-nav__links">
            {['EVENTS', 'BATTLES', 'FACTIONS', 'FORGE', 'ARENA'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="ignis-nav__link">{l}</a>
            ))}
          </nav>
          <button className="ignis-btn-primary" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>
            ENTER ARENA ⚡
          </button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="ignis-footer">
        <div className="ignis-container ignis-footer__inner">
          <div>
            <span className="ignis-fire-text" style={{ fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-display)' }}>IGNIS JWAALA</span>
            <span className="ignis-mono" style={{ marginLeft: '12px', fontSize: '0.7rem' }}>// ARENA SYSTEM V1.0</span>
          </div>
          <div className="ignis-footer__links">
            <a href="#" className="ignis-link ignis-mono" style={{ fontSize: '0.8rem' }}>Privacy</a>
            <a href="#" className="ignis-link ignis-mono" style={{ fontSize: '0.8rem' }}>Terms</a>
            <a href="#" className="ignis-link ignis-mono" style={{ fontSize: '0.8rem' }}>GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default IgnisLayout
