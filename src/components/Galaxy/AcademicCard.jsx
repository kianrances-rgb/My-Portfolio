import React from 'react';
/**
 * AcademicCard Component
 * Displays an educational attainment milestone across the cosmic spiral timeline.
 * Features an orbital marker with glowing core, glassmorphic HUD body,
 * campus archive imagery with targeting brackets, key academic highlights with glowing diamond bullets,
 * and holographic tag pills.
 *
 * @param {Object} props
 * @param {Object} props.milestone - Milestone data object from portfolioData.js
 */
export function AcademicCard({ milestone }) {
  if (!milestone) return null;

  const {
    epoch = 'EPOCH',
    degreeBadge = 'DEGREE',
    timeRange = '',
    institution = '',
    department = '',
    image = null,
    summary = '',
    highlights = [],
    tags = [],
  } = milestone;

  return (
    <article className="timeline-orbit-card relative flex flex-col h-full group">
      {/* 1. Integrated Header Orbital Marker */}
      <div className="orbit-marker flex items-center gap-2.5 mb-3 pl-1 z-[3]">
        <span
          className="orbit-ring relative w-[18px] h-[18px] rounded-full border-2 border-cyan-400 bg-[#03040c] shadow-[0_0_10px_rgba(93,230,255,0.5)] flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <span className="orbit-core w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
        </span>
        <span className="orbit-epoch font-mono text-xs font-bold tracking-[0.16em] text-cyan-400">
          {epoch}
        </span>
      </div>

      {/* 2. Glassmorphic Card Body */}
      <div className="card-glass-body relative flex-1 flex flex-col p-6 sm:p-8 rounded-xl backdrop-blur-md bg-white/[0.04] border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_45px_rgba(40,70,160,0.3)] hover:-translate-y-1">
        {/* Top Meta: Degree badge & Time Range */}
        <div className="card-top-meta flex items-center justify-between mb-3.5 gap-2 flex-wrap">
          <span className="degree-badge font-display text-[0.78rem] font-bold tracking-[0.16em] text-amber-300 uppercase px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 shadow-[0_0_12px_rgba(255,204,68,0.15)]">
            {degreeBadge}
          </span>
          <span className="time-range font-mono text-xs text-slate-400 tracking-[0.08em]">
            {timeRange}
          </span>
        </div>

        {/* Institution Name */}
        <h3 className="institution-title font-display text-xl sm:text-2xl font-extrabold tracking-wide text-white mb-1.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {institution}
        </h3>

        {/* Department Subtitle */}
        <h4 className="department-sub font-primary text-sm sm:text-base font-semibold text-cyan-400 tracking-wider uppercase mb-4">
          {department}
        </h4>

        {/* Campus Facility Image (if present) with Sci-Fi HUD Reticle Frame */}
        {image && (
          <div className="campus-hud-frame relative overflow-hidden rounded-lg mb-5 border border-cyan-500/30 bg-black/50 group/img shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            {/* Sci-Fi Target Corners */}
            <span className="hud-corner-tl absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 z-10 pointer-events-none" />
            <span className="hud-corner-tr absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 z-10 pointer-events-none" />
            <span className="hud-corner-bl absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 z-10 pointer-events-none" />
            <span className="hud-corner-br absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 z-10 pointer-events-none" />

            {/* Tactical Telemetry Badge */}
            <div className="absolute top-2 right-2.5 z-10 pointer-events-none px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-cyan-500/40 text-[10px] font-mono text-cyan-300 tracking-widest uppercase">
              CAMPUS SECTOR // ARCHIVE
            </div>

            {/* Campus Image with Zoom and Brightness Transition */}
            <img
              src={image}
              alt={`${institution} campus visual`}
              className="w-full h-44 sm:h-48 object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700 ease-out group-hover/img:scale-105 group-hover/img:brightness-100"
              loading="lazy"
            />

            {/* Ambient Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/85 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Institution Summary Description */}
        <p className="institution-summary font-body text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-normal tracking-[0.02em]">
          {summary}
        </p>

        {/* Highlights List with Glowing Diamond Bullets */}
        {highlights && highlights.length > 0 && (
          <div className="academic-highlights flex flex-col gap-3 mb-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="highlight-item flex items-start gap-3 text-sm sm:text-base text-slate-200 leading-relaxed font-body"
              >
                <span
                  className="hl-icon text-cyan-400 text-sm mt-0.5 shrink-0 select-none drop-shadow-[0_0_8px_rgba(0,255,204,0.7)]"
                  aria-hidden="true"
                >
                  ✦
                </span>
                <div className="hl-content">
                  <strong className="text-white font-semibold">{item.title}:</strong>{' '}
                  <span className="text-slate-300">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Course Tag Pills with Hover Glow */}
        {tags && tags.length > 0 && (
          <div className="course-tags flex flex-wrap gap-2 mt-auto pt-4 border-t border-cyan-500/15">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="ctag font-mono text-[0.76rem] px-3 py-1 rounded bg-[#8cb4ff]/10 border border-[#8cb4ff]/25 text-slate-300 uppercase tracking-[0.08em] transition-all duration-200 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_12px_rgba(0,255,204,0.35)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default AcademicCard;
