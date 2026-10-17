import React from 'react';
import { useCosmicAudio } from '../../hooks/useCosmicAudio';

/**
 * AudioToggle Component
 * Interactive button wired up to procedural useCosmicAudio() hook.
 * Displays animated sound waves when active, or red diagonal muted line when inactive.
 * Plays celestial chime on toggle.
 */
export function AudioToggle({ className = '' }) {
  const { isPlaying, toggleAudio, playChime } = useCosmicAudio();

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const turnedOn = toggleAudio();
    if (turnedOn) {
      // Delay slightly for audio context resume then play chime
      setTimeout(() => {
        playChime();
      }, 40);
    }
  };

  return (
    <button
      type="button"
      id="audio-toggle"
      onClick={handleToggle}
      className={`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 font-mono text-xs tracking-wider select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffcc] border ${
        isPlaying
          ? 'bg-[#00ffcc]/10 border-[#00ffcc]/60 text-[#00ffcc] shadow-[0_0_15px_rgba(0,255,204,0.35)] hover:shadow-[0_0_22px_rgba(0,255,204,0.55)]'
          : 'bg-[#0f142d]/75 border-[rgba(140,180,255,0.2)] text-slate-400 hover:border-[#00ffcc]/40 hover:text-slate-200'
      } ${className}`}
      aria-label="Cosmic Audio Engine // Procedural Space Drone"
      title="Cosmic Audio Engine // Procedural Space Drone"
      aria-pressed={isPlaying}
    >
      {/* Speaker SVG Icon with animated waves or muted cross */}
      <span className="relative w-4 h-4 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 overflow-visible"
          aria-hidden="true"
        >
          {/* Speaker cone */}
          <path
            d="M11 5L6 9H2V15H6L11 19V5Z"
            fill={isPlaying ? 'currentColor' : 'none'}
            fillOpacity={isPlaying ? 0.25 : 0}
            className="transition-colors duration-300"
          />

          {/* Sound Wave 1 (inner) */}
          {isPlaying && (
            <path
              d="M15.54 8.46C16.48 9.4 17 10.66 17 12C17 13.34 16.48 14.6 15.54 15.54"
              className="stroke-[#00ffcc] animate-pulse"
            />
          )}

          {/* Sound Wave 2 (outer) */}
          {isPlaying && (
            <path
              d="M19.07 4.93C20.94 6.8 22 9.34 22 12C22 14.66 20.94 17.2 19.07 19.07"
              className="stroke-[#00ffcc] animate-pulse [animation-delay:180ms]"
            />
          )}

          {/* Red Diagonal Muted Cross Line (when inactive) */}
          {!isPlaying && (
            <line
              x1="23"
              y1="1"
              x2="1"
              y2="23"
              stroke="#ff3355"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="drop-shadow-[0_0_4px_rgba(255,51,85,0.8)]"
            />
          )}
        </svg>
      </span>

      {/* Status Text: ON (emerald/cyan neon) or OFF (zinc/red) */}
      <span
        className={`audio-status-text font-mono text-[11px] font-bold tracking-widest transition-colors duration-300 ${
          isPlaying
            ? 'text-[#00ffcc] drop-shadow-[0_0_8px_rgba(0,255,204,0.7)]'
            : 'text-zinc-400 group-hover:text-red-400/90'
        }`}
      >
        {isPlaying ? 'AUDIO: ON' : 'AUDIO: OFF'}
      </span>
    </button>
  );
}

export default AudioToggle;
