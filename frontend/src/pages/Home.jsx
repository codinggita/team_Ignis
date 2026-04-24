import React, { useEffect, useRef, useState } from 'react'
import './Home.css'

/* ── Utility: Animated Counter ── */
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className="stat-counter">
      {count}<span className="stat-suffix">{suffix}</span>
    </span>
  )
}

/* ── Utility: Section Reveal on Scroll ── */
const RevealSection = ({ children, className = '', animation = 'fade-up', delay = 0 }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal reveal--${animation} ${visible ? 'reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero ignis-scanlines" id="hero">
        <div className="hero__glow" style={{ background: `radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, rgba(255,106,0,0.15) 0%, transparent 70%)` }} />
        <div className="ignis-container hero__content">
          <div className="hero__text">
            <span className="ignis-label ignis-animate-up delay-1">⚡ Welcome to the Arena</span>
            <h1 className="ignis-title hero__title ignis-animate-up delay-2">
              <span className="ignis-fire-text">IGNIS</span><br /><span>JWAALA</span>
            </h1>
            <p className="hero__tagline ignis-animate-up delay-3">Where Opinions Ignite. Where Voices Rule.</p>
            <div className="hero__cta ignis-animate-up delay-5">
              <button className="ignis-btn-primary">Enter Arena ⚡</button>
              <button className="ignis-btn-outline">View Factions →</button>
            </div>
            <div className="hero__stats ignis-animate-up delay-6">
              <div className="hero__stat">
                <AnimatedCounter target={30} suffix="+" />
                <span className="hero__stat-label">EMBERS</span>
              </div>
              <div className="hero__stat">
                <AnimatedCounter target={5} />
                <span className="hero__stat-label">BATTLES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Modules */}
      <section className="ignis-section modules-section" id="events">
        <div className="ignis-container">
          <RevealSection>
            <div className="section-header section-header--center">
              <span className="ignis-label">⚡ IGNIS PRESENTS</span>
              <h2 className="ignis-heading">TODAY'S ACTIVE <span className="ignis-fire-text">MODULES</span></h2>
            </div>
          </RevealSection>
          <div className="modules-grid">
            {['LIVE POLL ARENA', 'IGNITE MODE', 'TRENDING WAR'].map((title, i) => (
              <RevealSection key={i} animation="scale-in" delay={i * 0.1}>
                <div className="module-card ignis-card">
                  <h3 className="module-card__title">{title}</h3>
                  <p className="module-card__desc">Engage in the arena modules to earn Embers.</p>
                  <span className="ignis-mono">ENTER →</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
