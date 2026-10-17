import React, { useEffect } from 'react';
import { BlackHole } from './BlackHole';
import { TelemetryHud } from './TelemetryHud';
import { personal } from '../../data/portfolioData';

/**
 * Singularity Hero Section Component
 * The introductory viewport featuring the real-time relativistic WebGL Black Hole,
 * top mission header banner, lower gravitational shear telemetry HUD,
 * action CTA buttons, cursor proximity guidance hint, and orbit scroll indicators.
 *
 * @param {number} [props.shearRatio] - Gravitational shear ratio (0.0 to 1.0)
 * @param {string} [props.distanceText] - Distance to event horizon text
 * @param {string} [props.statusText] - Spaghettification status text
 */
export function Singularity({ shearRatio, distanceText, statusText }) {
  const missionTag = personal?.missionTag || 'MISSION BRIEF // INTERSTELLAR PORTFOLIO';
  const coordinateTag = personal?.coordinateTag || 'SOL-3 // DEV // 2026';

  // Direct mouse proximity listener to update gravitational telemetry smoothly
  useEffect(() => {
    const handlePointerMove = (e) => {
      const bh = window.BlackHoleEngine?.getMetrics
        ? window.BlackHoleEngine.getMetrics()
        : { x: window.innerWidth / 2, y: window.innerHeight / 2, radius: 80, tidalRadius: 360 };

      const dx = bh.x - e.clientX;
      const dy = bh.y - e.clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < bh.tidalRadius) {
        const proximity = Math.max(0, 1.0 - dist / bh.tidalRadius);
        const shear = Math.min(1.0, Math.pow(proximity, 1.3));
        let dText = 'APPROACHING EVENT HORIZON';
        let sText = 'TIDAL SHEAR DETECTED';

        if (dist <= bh.radius * 0.95) {
          dText = 'SINGULARITY BREACH';
          sText = 'RELATIVISTIC SIPHONING';
        } else if (dist <= bh.radius * 1.5) {
          dText = 'CRITICAL TIDAL RADIUS';
          sText = 'GRAVITATIONAL STRETCH';
        }

        window.dispatchEvent(
          new CustomEvent('cosmic-telemetry-update', {
            detail: { shearRatio: shear, distanceText: dText, statusText: sText },
          })
        );
      } else {
        window.dispatchEvent(
          new CustomEvent('cosmic-telemetry-update', {
            detail: { shearRatio: 0, distanceText: 'SAFE ORBIT', statusText: 'DORMANT' },
          })
        );
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, []);

  const handleScrollToGalaxy = (e) => {
    e.preventDefault();
    const galaxySection = document.getElementById('galaxy');
    if (galaxySection) {
      galaxySection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'galaxy';
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'contact';
    }
  };

  const handleTestSpaghetti = () => {
    // Trigger Hawking radiation burst on BlackHole engine for instant visual payoff
    if (window.BlackHoleEngine?.triggerHawkingFlash) {
      window.BlackHoleEngine.triggerHawkingFlash();
    }
    const flare = document.getElementById('hawking-radiation-flash');
    if (flare) {
      flare.classList.remove('flare');
      void flare.offsetWidth;
      flare.classList.add('flare');
      setTimeout(() => flare.classList.remove('flare'), 650);
    }
    window.dispatchEvent(
      new CustomEvent('cosmic-telemetry-update', {
        detail: { shearRatio: 0.98, distanceText: 'SINGULARITY BREACH', statusText: 'QUANTUM BURST' },
      })
    );
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('cosmic-telemetry-update', {
          detail: { shearRatio: 0, distanceText: 'SAFE ORBIT', statusText: 'DORMANT' },
        })
      );
    }, 1400);
  };

  return (
    <section
      id="intro"
      className="hero-section relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden pt-20 pb-10 px-4 select-none"
      aria-label="Introductory Singularity"
    >
      {/* 1. Center Viewport: Houses the WebGL/Canvas 2D Raymarching Black Hole */}
      <BlackHole />

      {/* 2. Top Header Banner: Floats gracefully above the singularity */}
      <div className="hero-header-banner relative z-10 text-center flex flex-col items-center gap-2 mt-4 sm:mt-6 pointer-events-auto">
        <div className="mission-tag inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#080c1c]/80 border border-[rgba(140,190,255,0.3)] shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md text-xs tracking-widest text-[#9ab0d6]">
          <span className="pulse-beacon w-2 h-2 rounded-full bg-[#00ffaa] shadow-[0_0_8px_#00ffaa] animate-beacon-flash" />
          <span className="font-medium">{missionTag}</span>
          <span className="coordinate-tag font-mono text-[#5de6ff] pl-1.5 border-l border-[rgba(140,190,255,0.3)]">
            {coordinateTag}
          </span>
        </div>
      </div>

      {/* 3. Lower Controls & Telemetry: Floats below the Black Hole */}
      <div className="hero-footer-bar relative z-10 w-full max-w-4xl flex flex-col items-center gap-4 text-center pointer-events-auto mt-auto">
        {/* Real-time Gravitational Telemetry HUD */}
        <TelemetryHud
          shearRatio={shearRatio}
          distanceText={distanceText}
          statusText={statusText}
        />

        {/* Action Controls */}
        <div className="hero-actions flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
          {/* Primary CTA: Jump to Galaxy Panels */}
          <a
            href="#galaxy"
            onClick={handleScrollToGalaxy}
            className="cosmic-btn primary-btn group flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffcc]"
          >
            <span>EXPLORE GALAXY PANELS</span>
            <svg
              className="btn-arrow w-4 h-4 text-current transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Secondary CTA: Transmit Signal to Contact */}
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="cosmic-btn secondary-btn flex items-center justify-center px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffcc]"
          >
            <span>TRANSMIT SIGNAL</span>
          </a>

          {/* Simulation Trigger: Test Spaghettification */}
          <button
            id="spaghetti-demo-btn"
            type="button"
            onClick={handleTestSpaghetti}
            className="cosmic-btn test-btn flex items-center justify-center px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3355]"
            title="Simulate cursor being siphoned by black hole"
          >
            <span>TEST SPAGHETTIFICATION</span>
          </button>
        </div>

        {/* Cursor Proximity Guidance Hint */}
        <div className="cursor-hint flex items-center justify-center gap-2 text-xs text-[#9ab0d6] max-w-xl text-center px-4 mt-1">
          <svg
            className="hint-mouse-icon w-5 h-5 text-[#5de6ff] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <rect x="5" y="2" width="14" height="20" rx="7" />
            <line x1="12" y1="6" x2="12" y2="10" />
          </svg>
          <span>
            Move your cursor toward the warping black hole to observe relativistic gravitational shear telemetry.
          </span>
        </div>

        {/* Scroll Indicator Jumping to #galaxy */}
        <a
          href="#galaxy"
          onClick={handleScrollToGalaxy}
          className="scroll-down-indicator flex flex-col items-center gap-1 text-[#5c6e94] hover:text-[#f4f8ff] transition-colors duration-300 mt-2 z-10 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00ffcc] rounded p-1"
          aria-label="Scroll to Galaxy panel"
        >
          <span className="scroll-text text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase">
            SCROLL TO ORBIT PANELS
          </span>
          <div className="scroll-chevron-stack flex flex-col items-center gap-0.5">
            <span className="chevron chevron-1" />
            <span className="chevron chevron-2" />
            <span className="chevron chevron-3" />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Singularity;
