import React from 'react';
import { BlackHole } from './BlackHole';
import { DisintegratingTitle } from './DisintegratingTitle';
import { personal } from '../../data/portfolioData';

/**
 * Singularity Hero Section Component (Page 1)
 * Features:
 * - Real-time relativistic WebGL Black Hole viewport
 * - Top mission telemetry badge
 * - Pure white disintegrating "KIAN RANCES CAGADAS" title with dust pulling
 *   into the center of the black hole
 */
export function Singularity() {
  const missionTag = personal?.missionTag || 'MISSION BRIEF // INTERSTELLAR PORTFOLIO';
  const coordinateTag = personal?.coordinateTag || 'SOL-3 // DEV // 2026';

  return (
    <section
      id="intro"
      className="hero-section relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden pt-20 pb-8 px-4 select-none"
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

      {/* 3. Lower Middle of Page 1: Pure White Disintegrating Title with Upward Gravitational Siphon */}
      <div className="hero-footer-bar relative z-20 w-full max-w-5xl flex flex-col items-center text-center pointer-events-auto mt-auto">
        <DisintegratingTitle />
      </div>
    </section>
  );
}

export default Singularity;
