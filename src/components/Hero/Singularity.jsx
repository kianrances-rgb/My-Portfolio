import React from 'react';
import { BlackHole } from './BlackHole';
import { DisintegratingTitle } from './DisintegratingTitle';

/**
 * Singularity Hero Section Component (Page 1)
 * Features:
 * - Real-time relativistic WebGL Black Hole viewport
 * - Top mission telemetry badge
 * - Pure white disintegrating "KIAN RANCES CAGADAS" title with dust pulling
 *   into the center of the black hole
 */
export function Singularity() {
  return (
    <section
      id="intro"
      className="hero-section relative min-h-screen w-full flex flex-col items-center justify-end overflow-hidden pt-20 pb-8 px-4 select-none"
      aria-label="Introductory Singularity"
    >
      {/* 1. Center Viewport: Houses the WebGL/Canvas 2D Raymarching Black Hole */}
      <BlackHole />

      {/* 2. Lower Middle of Page 1: Pure White Disintegrating Title with Upward Gravitational Siphon */}
      <DisintegratingTitle />
    </section>
  );
}

export default Singularity;
