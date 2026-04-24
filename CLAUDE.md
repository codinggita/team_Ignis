# IGNIS JWAALA — Project Memory

## Project Identity
**IGNIS JWAALA** is a cinematic, fire-themed, gamified arena web platform.
Users feel like they are inside a system, not browsing a website.

**Tech stack:** React + Vite, React Router v6, plain CSS (custom properties)
**Design system:** See `frontend-design` skill and `ignis-theme` skill
**Phase:** Phase 1 (UI-first). 3D sun model is Phase 2 — do not add it yet.

---

## Active Skills

| Skill | `/command` | When to use |
|-------|-----------|-------------|
| `frontend-design` | `/frontend-design` | Any UI code — always load this first |
| `ignis-theme` | `/ignis-theme` | Generating/updating the global CSS token file |
| `ignis-component` | `/ignis-component [name]` | Building a single reusable component |
| `ignis-page` | `/ignis-page [name]` | Scaffolding a complete page |
| `three-integration` | `/three-integration` | Phase 2 only — 3D fire sun model |
| `excalidraw-diagram` | `/excalidraw-diagram` | Architecture and flow diagrams |
| `skill-builder` | `/skill-builder` | Creating or auditing skills |

---

## Design Rules (Always Apply)

1. **Background:** Always `#0B0B0B` or `#111111` — never white or light
2. **Accent:** Orange (`#FF6A00`) and Red (`#FF3C3C`) — accent only, not dominant fill
3. **Fonts:** Rajdhani (headings) + Space Grotesk (body) — never Inter/Roboto/Arial
4. **Arena naming:** Section labels follow game system language (IGNIS PRESENTS, BATTLE STATION, etc.)
5. **3D ready:** Hero sections must have `ignis-3d-section` class + `#ignis-sun-mount` div placeholder
6. **CSS variables:** Always use `--ignis-*` tokens, never hardcode colors or sizes
7. **Hover states:** All interactive elements must have glow/transition feedback

---

## Project Structure (Target)

```
src/
  components/
    layout/
      IgnisLayout.jsx
      IgnisNav.jsx
    ui/               ← reusable ignis components
      PollCard/
      FactionBadge/
      EventTile/
      StatusBadge/
      ...
    3d/               ← Phase 2 only
      IgnisSun.jsx
  pages/
    Home.jsx
    Events.jsx
    PollBattle.jsx
    Factions.jsx
    Chat.jsx
    Profile.jsx
    Create.jsx
    Leaderboard.jsx
  styles/
    ignis.css         ← global tokens (never edit manually, use ignis-theme skill)
  App.jsx
  main.jsx
```

---

## What Is NOT in this Project
- ❌ Video-to-scroll animation (removed — using 3D model instead)
- ❌ GSAP scroll-driven frame playback
- ❌ Light mode / white backgrounds
- ❌ Glassmorphism cards as primary containers (used sparingly, with dark bg)

---

## Phase Tracker

- [ ] Phase 1: Complete UI (all pages, components, routing)
- [ ] Phase 2: 3D fire sun integration (Three.js, `/three-integration` skill)
- [ ] Phase 3: Functionality (polls, chat, auth, real-time)
