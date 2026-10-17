import React from 'react';

/**
 * SkillPill Component
 * Sleek cyber skill pill displaying technical skill name and proficiency level badge.
 * Features neon glowing border and smooth hover micro-interactions.
 *
 * @param {Object} props
 * @param {string} props.name - Skill label (e.g., 'React.js & React Hooks')
 * @param {string} [props.level='INTERMEDIATE'] - Proficiency tier (default: 'INTERMEDIATE')
 */
export function SkillPill({ name, level = 'INTERMEDIATE' }) {
  return (
    <div className="skill-pill group flex items-center justify-between gap-2 px-3 py-2 rounded bg-[#0e122a]/75 border border-[#8cb4ff]/15 hover:border-cyan-400/50 hover:bg-[#191e41]/85 hover:shadow-[0_0_12px_rgba(0,255,204,0.25)] hover:scale-[1.02] transition-all duration-200 cursor-default">
      <span className="skill-name font-primary font-semibold text-sm tracking-wide text-[#f4f8ff] group-hover:text-cyan-300 transition-colors">
        {name}
      </span>
      <span className="skill-level font-mono text-[0.66rem] font-bold tracking-widest text-[#5de6ff] uppercase px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_8px_rgba(0,255,204,0.3)] transition-all flex-shrink-0">
        {level}
      </span>
    </div>
  );
}

export default SkillPill;
