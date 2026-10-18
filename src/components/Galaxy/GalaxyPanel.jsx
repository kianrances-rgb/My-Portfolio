import React from 'react';
import { AcademicCard } from './AcademicCard';
import { education } from '../../data/portfolioData';

/**
 * GalaxyPanel Component
 * Sector 01 // Spiral Arm: Educational Attainment & Academic Formations
 * Across the Cosmic Spiral.
 * Contains the revolving Andromeda Galaxy (M31) simulation background,
 * atmospheric cosmic backdrop, section header, and academic orbit cards.
 */
export function GalaxyPanel() {
  return (
    <section
      id="galaxy"
      className="cosmic-panel galaxy-panel relative min-h-screen w-full py-24 px-4 sm:px-8 lg:px-16 overflow-hidden"
      aria-labelledby="galaxy-heading"
    >
      {/* 1. Atmospheric backdrop glow */}
      <div
        className="panel-atmosphere galaxy-backdrop absolute inset-0 pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* 2. Panel Content Container */}
      <div className="panel-container relative max-w-7xl mx-auto w-full z-[2]">
        {/* Section Header */}
        <header className="panel-header text-center mb-16 relative">
          <div className="panel-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0f23]/80 border border-cyan-500/30 text-xs tracking-[0.16em] mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,204,0.15)]">
            <span className="sector-code font-mono text-cyan-400 font-semibold">
              SECTOR 01 // SPIRAL ARM
            </span>
            <span className="badge-accent text-slate-400 font-medium">
              ACADEMIC JOURNEY
            </span>
          </div>

          <h2
            id="galaxy-heading"
            className="panel-title font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.16em] uppercase text-white mb-3 text-shadow-[0_4px_18px_rgba(0,0,0,0.9)] drop-shadow-[0_0_25px_rgba(93,230,255,0.25)]"
          >
            THE “GALAXY” PANEL
          </h2>

          <p className="panel-subtitle font-body text-base sm:text-lg font-medium tracking-[0.03em] text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Educational Attainment &amp; Academic Formations Across the Cosmic Spiral
          </p>
        </header>

        {/* Timeline Orbit Cards Grid */}
        <div className="galaxy-timeline grid grid-cols-1 lg:grid-cols-2 gap-8 relative max-w-6xl mx-auto w-full">
          {education.map((milestone, idx) => (
            <AcademicCard
              key={milestone.epoch || idx}
              milestone={milestone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalaxyPanel;
