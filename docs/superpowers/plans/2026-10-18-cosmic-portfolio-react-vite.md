# Cosmic Portfolio React + Vite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the cloned Cosmic Portfolio into a modern, modular React + Vite + Tailwind CSS web application preserving all personal info, astrophysics WebGL shaders, Canvas simulations, 3D cursor physics, and interactive features.

**Architecture:** Component-based React application bundled with Vite and styled with Tailwind CSS and custom cyber-cosmic GLSL/Canvas effects. The application modularizes the monolithic vanilla codebase into specialized React components (`Singularity`, `GalaxyPanel`, `SupernovaPanel`, `ContactPanel`, `AstroCursor`, `WanderingAstro`) with custom React hooks for Web Audio API and Starfield canvas animations, driven by a centralized data file (`portfolioData.js`).

**Tech Stack:** React 18 / 19, Vite, Tailwind CSS, WebGL 2.0 / GLSL, HTML5 Canvas 2D, Web Audio API, Lucide React, Google Fonts (`Orbitron`, `Oxanium`, `Rajdhani`, `Share Tech Mono`).

**Spec:** Architectural design approved by user to maintain the Cosmic WebGL portfolio experience while migrating to React + Vite + Tailwind CSS.

## Global Constraints

- Preserve all original portfolio information: Kian Rances Cagadas, ICCT Colleges Inc (College of Engineering and Digital Technology), DAEHAN College of Business and Technology (ICT Strand), 28 skills at Intermediate level, contact channels (Kianrances@gmail.com, GitHub @kianrances-rgb, Facebook).
- Preserve real-time WebGL 2.0 fragment shader ray-marching black hole, Andromeda galaxy logarithmic spiral simulation, and Neutron star magnetosphere simulation.
- Ensure 60fps performance by using `requestAnimationFrame` with `IntersectionObserver` to pause off-screen canvas loops.
- Use `npm.cmd` on Windows PowerShell to execute npm commands.
- Provide full responsive design across desktop, tablet, and mobile with accessible semantic structure and ARIA attributes.

## Review Focus

1. **WebGL fallback:** On devices without WebGL 2.0 or hardware acceleration, the BlackHole component must gracefully fall back to Canvas 2D rendering without crashing.
2. **Audio context policy:** Web Audio API must not attempt to auto-play before user interaction, complying with browser autoplay restrictions.
3. **Canvas resize handling:** All canvas elements (BlackHole, Andromeda, NeutronStar, Starfield, Siphon) must handle window resize and DPI/devicePixelRatio scaling without stretching or blurriness.
4. **Interactive cursor safety:** The 3D mini astronaut cursor must only attach on non-touch pointer devices and disable on mobile/touch screens to prevent layout interference.
5. **Form submission fallback:** The message composer must open Gmail composer with prefilled parameters and also offer 1-click clipboard copy of the email address.

---

### Task 1: Project Scaffolding & Dependencies Setup

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html` (Vite root HTML)

- [ ] Create `package.json` with React, React DOM, Vite, Tailwind CSS, PostCSS, Autoprefixer, Lucide React.
- [ ] Create `vite.config.js` with `@vitejs/plugin-react` and local server port 5173.
- [ ] Create `tailwind.config.js` configured with space theme colors (void black, cyan beacon, plasma gold, pulsar purple).
- [ ] Create `postcss.config.js` with Tailwind and Autoprefixer.
- [ ] Create root `index.html` with cosmic typography fonts (`Orbitron`, `Oxanium`, `Rajdhani`, `Share Tech Mono`) and `#root` mounting point.
- [ ] Run `npm.cmd install` to install all dependencies.
- [ ] Verify setup by running `npm.cmd run build` dry run or checking tool availability.

---

### Task 2: Centralized Portfolio Data & Asset Organization

**Files:**
- Create: `src/data/portfolioData.js`
- Modify: `public/assets/` (ensure images are accessible)

- [ ] Extract all personal info, academic milestones, course tags, 28 categorized technical skills, social channels, and mascot dialogue into `src/data/portfolioData.js`.
- [ ] Ensure educational campus images (`galaxy-college.jpg`, `galaxy-junior-high.jpg`, `galaxy-senior-high.jpg`) are placed in `public/assets/images/`.
- [ ] Verify data exports and schema types.

---

### Task 3: Procedural Web Audio Engine & Starfield Background

**Files:**
- Create: `src/hooks/useCosmicAudio.js`
- Create: `src/components/Background/StarfieldCanvas.jsx`
- Create: `src/index.css` (Tailwind base + cosmic animations)

- [ ] Implement `useCosmicAudio` hook with procedural binaural hum (Oscillator 1 & 2), lowpass biquad filter, and gravitational shear pitch modulation.
- [ ] Implement `StarfieldCanvas` with volumetric multi-layer depth, twinkling stars, and window resize listeners.
- [ ] Configure `src/index.css` with Tailwind directives, space theme CSS custom variables, scanlines, glow filters, and keyframe animations.

---

### Task 4: Navigation, Header, Audio Toggle & Mobile Drawer

**Files:**
- Create: `src/components/Navigation/Header.jsx`
- Create: `src/components/Navigation/MobileDrawer.jsx`
- Create: `src/components/Navigation/AudioToggle.jsx`

- [x] Build `Header` component with astronaut helmet logo SVG, passing comet animation every 5s, telemetry coordinates, and section jump links.
- [x] Implement `AudioToggle` with speaker waves, mute cross line, and audio state sync.
- [x] Build `MobileDrawer` with backdrop overlay, cosmic telemetry details, and accessible navigation drawer.

---

### Task 5: Hero Singularity, WebGL Black Hole & Telemetry HUD

**Files:**
- Create: `src/components/Hero/Singularity.jsx`
- Create: `src/components/Hero/BlackHole.jsx`
- Create: `src/components/Hero/TelemetryHud.jsx`

- [x] Implement `BlackHole` component with WebGL 2.0 GLSL fragment shader (ray-marching gravitational lensing, Einstein photon ring, Doppler beaming, accretion disk) with Canvas 2D fallback.
- [x] Implement `TelemetryHud` tracking distance to event horizon, gravitational shear percentage bar, and spaghettification status.
- [x] Implement `Singularity` hero section with mission tag, CTA buttons (`EXPLORE GALAXY PANELS`, `TRANSMIT SIGNAL`, `TEST SPAGHETTIFICATION`), and scroll indicators.


---

### Task 6: Interactive 3D Astronaut Cursor & Siphon Particle Stream

**Files:**
- Create: `src/components/Cursor/AstroCursor.jsx`
- Create: `src/components/Cursor/SiphonCanvas.jsx`

- [ ] Implement `AstroCursor` with 3D perspective rotation (`rotateX`, `rotateY`), flight momentum, golden visor glint reflection, tether line, and thruster flame.
- [ ] Implement singularity siphoning matrix: when astronaut enters tidal radius, calculate radial shear stretch and Hawking radiation burst.
- [ ] Implement `SiphonCanvas` particle stream siphoning matter toward black hole coordinates.
- [ ] Ensure cursor is hidden on touch devices or falls back gracefully.

---

### Task 7: Galaxy Panel & Andromeda Spiral Simulation

**Files:**
- Create: `src/components/Galaxy/GalaxyPanel.jsx`
- Create: `src/components/Galaxy/Andromeda.jsx`
- Create: `src/components/Galaxy/AcademicCard.jsx`

- [ ] Implement `Andromeda` canvas simulation with ~14,000 stellar bodies, logarithmic 2-arm spiral structure, Vera Rubin flat rotation curve dynamics, and companion dwarf galaxies M32 and M110.
- [ ] Build `AcademicCard` for ICCT Colleges Inc (College Level) and DAEHAN College (Senior High Level) with glowing timeline orbit markers, summaries, highlight bullets, and skill tags.
- [ ] Assemble `GalaxyPanel` with section badges, headers, and responsive dual-column grid.

---

### Task 8: Supernova Panel & Neutron Star Simulation

**Files:**
- Create: `src/components/Supernova/SupernovaPanel.jsx`
- Create: `src/components/Supernova/NeutronStar.jsx`
- Create: `src/components/Supernova/SkillPill.jsx`

- [ ] Implement `NeutronStar` canvas simulation with incandescent relativistic core, precessing particle jets, dipolar magnetosphere field lines ($r = R_0 \sin^2\theta$), and accretion plasma torus.
- [ ] Build category filter tabs (`ALL ENERGIES`, `LANGUAGES`, `FRONTEND & GRAPHICS`, `BACKEND & DATA`, `DEVOPS & SYSTEMS`).
- [ ] Render 28 intermediate skill pills categorized into cards with icon headers and hover effects.

---

### Task 9: Contact Subspace Panel, Wandering Mascot & Gmail Composer

**Files:**
- Create: `src/components/Contact/ContactPanel.jsx`
- Create: `src/components/Contact/ChannelCard.jsx`
- Create: `src/components/Contact/WanderingAstro.jsx`
- Create: `src/components/Contact/MessageForm.jsx`

- [ ] Build direct communication cards for Email (`Kianrances@gmail.com`), GitHub (`@kianrances-rgb`), and Facebook.
- [ ] Implement `WanderingAstro` scaled-up mascot with autonomous multi-stage zero-g flight loop, ion thruster plumes, overhead holographic speech bubble, and 360° click somersault.
- [ ] Implement `MessageForm` subspace transmission console with direct Gmail URL builder (`https://mail.google.com/mail/?view=cm&fs=1&to=kianrances@gmail.com`), clipboard copy with instant feedback, and HUD progress bar.

---

### Task 10: App Integration, Footer & Verification

**Files:**
- Create: `src/components/Footer/Footer.jsx`
- Create: `src/App.jsx`
- Create: `src/main.jsx`

- [ ] Assemble all sections in `src/App.jsx` with skip-to-content accessibility link and full layout flow.
- [ ] Build `Footer` with helmet badge, sector coordinates, quick links, and dynamic copyright year.
- [ ] Execute `npm.cmd run build` to verify clean build without warnings or syntax errors.
- [ ] Test the local preview server (`npm.cmd run preview` or `npm.cmd run dev`) to verify full visual and interactive fidelity.
