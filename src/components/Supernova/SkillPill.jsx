import React from 'react';

/**
 * SkillPill Component
 * Sleek galactic telemetry skill chip with minimalist active pulse and subtle micro-interaction.
 *
 * @param {Object} props
 * @param {string} props.name - Skill label (e.g., 'React.js & React Hooks')
 */
export function SkillPill({ name }) {
  return (
    <div className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.07] border border-white/[0.06] hover:border-purple-400/40 hover:shadow-[0_4px_20px_rgba(168,85,247,0.12)] transition-all duration-300 cursor-default">
      <div className="flex items-center gap-2.5 min-w-0">
        <span
          className="w-1.5 h-1.5 rounded-full bg-purple-400/60 group-hover:bg-cyan-300 group-hover:shadow-[0_0_8px_rgba(103,232,249,0.9)] transition-all flex-shrink-0"
          aria-hidden="true"
        />
        <span className="font-grotesk text-sm font-medium tracking-wide text-white/85 group-hover:text-white truncate transition-colors">
          {name}
        </span>
      </div>

      <div className="flex items-center gap-1 pl-2 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
        <span className="w-1 h-2 rounded-sm bg-purple-400/40 group-hover:bg-cyan-400" />
        <span className="w-1 h-2.5 rounded-sm bg-purple-400/60 group-hover:bg-cyan-400" />
        <span className="w-1 h-3 rounded-sm bg-purple-400/80 group-hover:bg-cyan-400" />
      </div>
    </div>
  );
}

export default SkillPill;
