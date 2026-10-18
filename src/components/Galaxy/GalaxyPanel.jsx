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
      className="cosmic-panel galaxy-panel relative min-h-screen w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 overflow-hidden"
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
        <header className="panel-header text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] tracking-[0.25em] uppercase font-semibold text-[#00ffcc] mb-6 shadow-[0_0_20px_rgba(0,255,204,0.15)]">
            <span>ACADEMIC FOUNDATIONS</span>
          </div>

          <h2
            id="galaxy-heading"
            className="panel-title font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-white mb-4 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]"
          >
            EDUCATION
          </h2>

          <p className="panel-subtitle font-['Outfit'] text-base sm:text-lg font-light tracking-wide text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Formations in digital systems architecture, computational logic, and software engineering.
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
