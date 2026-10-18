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
    <article className="timeline-orbit-card relative flex flex-col h-full group p-2 sm:p-2.5 rounded-[2.25rem] bg-white/[0.03] border border-white/10 ring-1 ring-white/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-cyan-400/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.8),0_0_30px_rgba(0,255,204,0.12)]">
      {/* Double-Bezel Inner Core */}
      <div className="card-glass-body relative flex-1 flex flex-col p-7 sm:p-9 rounded-[calc(2.25rem-0.625rem)] bg-[#070a18]/95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
        {/* Top Meta: Degree badge & Time Range */}
        <div className="card-top-meta flex items-center justify-between mb-4 gap-2 flex-wrap">
          <span className="degree-badge font-['Outfit'] text-xs font-bold tracking-[0.2em] text-[#ffaa00] uppercase px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 shadow-[0_0_12px_rgba(255,170,0,0.15)]">
            {degreeBadge}
          </span>
          <span className="time-range font-['Share_Tech_Mono'] text-xs text-slate-400 tracking-wider">
            {timeRange}
          </span>
        </div>

        {/* Institution Name */}
        <h3 className="institution-title font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {institution}
        </h3>

        {/* Department Subtitle */}
        <h4 className="department-sub font-['Outfit'] text-sm sm:text-base font-semibold text-[#00ffcc] tracking-wider uppercase mb-5">
          {department}
        </h4>

        {/* Campus Facility Image with Precision Sci-Fi Reticle Frame */}
        {image && (
          <div className="campus-hud-frame relative overflow-hidden rounded-xl mb-6 border border-white/10 bg-black/50 group/img shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
            {/* Target Reticle Corners */}
            <span className="hud-corner-tl absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-10 pointer-events-none" />
            <span className="hud-corner-tr absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 z-10 pointer-events-none" />
            <span className="hud-corner-bl absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 z-10 pointer-events-none" />
            <span className="hud-corner-br absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 z-10 pointer-events-none" />

            {/* Tactical Telemetry Badge */}
            <div className="absolute top-2.5 right-3 z-10 pointer-events-none px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300 tracking-widest uppercase">
              CAMPUS ARCHIVE
            </div>

            {/* Campus Image with Cinematic Scale & Film Grain Transition */}
            <img
              src={image}
              alt={`${institution} campus visual`}
              className="w-full h-48 sm:h-56 object-cover object-center filter brightness-90 contrast-110 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/img:scale-105 group-hover/img:brightness-100"
              loading="lazy"
            />

            {/* Ambient Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/90 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Institution Summary Description */}
        <p className="institution-summary font-['Outfit'] text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal tracking-wide">
          {summary}
        </p>

        {/* Highlights List with Precision Minimalist Indicators (No Diamond Bullets) */}
        {highlights && highlights.length > 0 && (
          <div className="academic-highlights flex flex-col gap-3.5 mb-8">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="highlight-item flex items-start gap-3.5 text-sm sm:text-base text-slate-200 leading-relaxed font-['Outfit']"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] mt-2 shrink-0 shadow-[0_0_8px_#00ffcc]"
                  aria-hidden="true"
                />
                <div className="hl-content">
                  <strong className="text-white font-semibold">{item.title}:</strong>{' '}
                  <span className="text-slate-300 font-light">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Course Tag Pills with Hairline Glass Aesthetic */}
        {tags && tags.length > 0 && (
          <div className="course-tags flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="ctag font-['Share_Tech_Mono'] text-xs px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 uppercase tracking-wider transition-all duration-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,255,204,0.25)]"
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
