import React, { useState, useEffect, useCallback } from 'react';
import { StarfieldCanvas, MoonCanvas } from './components/Background';
import { FloatingAstro } from './components/FloatingAstro';
import { Header } from './components/Navigation';
import { Singularity } from './components/Hero';
import { SpaceInvadersBanner } from './components/Arcade';
import { GalaxyPanel } from './components/Galaxy';
import { SupernovaPanel } from './components/Supernova';
import { ContactPanel } from './components/Contact';
import { Footer } from './components/Footer';
import { navItems } from './data/portfolioData';

/**
 * App Component
 * Root cosmic orchestrator:
 * - Mounts fullscreen volumetric starfield background and matter siphon canvases
 * - Mounts interactive 3D Mini Astronaut cursor
 * - Manages scroll-spy state and telemetry synchronization
 * - Renders accessible skip-to-content link
 * - Houses celestial panels: Singularity (Hero), Galaxy (Education), Supernova (Skills), Contact
 * - Sci-Fi telemetry footer
 */
export function App() {
  const [activeSection, setActiveSection] = useState('intro');

  // Smooth scroll-spy tracking active section based on viewport offset
  useEffect(() => {
    const handleScroll = () => {
      // 35% viewport threshold ensures pleasant transition feel
      const triggerY = window.innerHeight * 0.35;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on initial render
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = useCallback((sectionId) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = sectionId;
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030308] text-[#f4f8ff] overflow-x-hidden selection:bg-[#00ffcc]/30 selection:text-[#00ffcc]">
      {/* 1. Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="skip-to-content sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#030308] focus:text-[#00ffcc] focus:border focus:border-[#00ffcc] focus:rounded-md focus:shadow-[0_0_20px_rgba(0,255,204,0.6)] focus:font-['Orbitron'] focus:text-xs focus:font-bold focus:tracking-wider"
      >
        SKIP TO CONTENT [ACCESS SINGULARITY]
      </a>

      {/* 2. Fullscreen Volumetric Starfield Canvas Background */}
      <StarfieldCanvas />

      {/* 2.5. Photorealistic 3D Interactive Moon Background (Active after Page 1) */}
      <MoonCanvas />

      {/* 3. Floating Astronaut Avatar Companion (Roams smoothly along perimeter) */}
      <FloatingAstro />

      {/* 4. Fixed Cosmic Telemetry Navigation Bar */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 6. Main Content Viewports */}
      <main id="main-content" className="relative z-10 focus:outline-none" tabIndex={-1}>
        {/* Sector 00: Singularity (Hero, Relativistic Black Hole, Telemetry HUD) */}
        <Singularity />

        {/* Space Invaders Retro Arcade Game Banner after 1st Page */}
        <SpaceInvadersBanner />

        {/* Sector 01: Galaxy (Spiral Arm, Andromeda M31, Academic Milestones) */}
        <GalaxyPanel />

        {/* Sector 02: Supernova (Stellar Detonation, Neutron Star, Skills Clusters) */}
        <SupernovaPanel />

        {/* Sector 03: Contact (Subspace Transceiver, Mascot, Gmail Composer) */}
        <ContactPanel />
      </main>

      {/* 7. Sci-Fi Grid Telemetry Footer */}
      <Footer />
    </div>
  );
}

export default App;
