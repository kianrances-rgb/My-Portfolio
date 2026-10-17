import React, { useState, useEffect } from 'react';

/**
 * TelemetryHud Component
 * Displays real-time gravitational shear, distance to event horizon,
 * and spaghettification status. Supports both reactive props and global
 * custom event updates ('cosmic-telemetry-update') as well as preserving DOM IDs
 * for direct physics engine binding.
 *
 * @param {number} [props.shearRatio=0] - Gravitational shear ratio (0.0 to 1.0)
 * @param {string} [props.distanceText='SAFE ORBIT'] - Distance to event horizon
 * @param {string} [props.statusText='DORMANT'] - Spaghettification status state
 * @param {string} [props.className=''] - Additional container classes
 */
export function TelemetryHud({
  shearRatio: propShear = 0,
  distanceText: propDistance = 'SAFE ORBIT',
  statusText: propStatus = 'DORMANT',
  className = '',
}) {
  const [internalShear, setInternalShear] = useState(propShear);
  const [internalDistance, setInternalDistance] = useState(propDistance);
  const [internalStatus, setInternalStatus] = useState(propStatus);

  // Sync internal state when props change
  useEffect(() => {
    setInternalShear(propShear);
  }, [propShear]);

  useEffect(() => {
    setInternalDistance(propDistance);
  }, [propDistance]);

  useEffect(() => {
    setInternalStatus(propStatus);
  }, [propStatus]);

  // Listen for global custom event updates from cursor or physics engine
  useEffect(() => {
    const handleTelemetryEvent = (e) => {
      if (!e.detail) return;
      if (typeof e.detail.shearRatio === 'number') {
        setInternalShear(e.detail.shearRatio);
      }
      if (typeof e.detail.distanceText === 'string') {
        setInternalDistance(e.detail.distanceText);
      }
      if (typeof e.detail.statusText === 'string') {
        setInternalStatus(e.detail.statusText);
      }
    };

    window.addEventListener('cosmic-telemetry-update', handleTelemetryEvent);
    return () => {
      window.removeEventListener('cosmic-telemetry-update', handleTelemetryEvent);
    };
  }, []);

  const clampedShear = Math.min(1, Math.max(0, internalShear));
  const shearPercentage = (clampedShear * 100).toFixed(2);

  // Determine dynamic styling based on spaghettification status
  const normalizedStatus = (internalStatus || '').toUpperCase();
  let statusColorClass = 'text-[#00ffcc]'; // DORMANT / SAFE (cyan/emerald)
  let isAlertActive = false;

  if (
    normalizedStatus.includes('SIPHON') ||
    normalizedStatus.includes('CRITICAL') ||
    normalizedStatus.includes('BREACH') ||
    normalizedStatus.includes('COLLAPSE') ||
    normalizedStatus.includes('INGESTED') ||
    normalizedStatus.includes('DISAPPEARED')
  ) {
    statusColorClass = 'text-[#ff3355] tel-status active animate-pulse'; // Siphoning/Critical (red/magenta)
    isAlertActive = true;
  } else if (
    normalizedStatus.includes('STRETCH') ||
    normalizedStatus.includes('APPROACHING') ||
    normalizedStatus.includes('SPAGHETTIFY') ||
    clampedShear > 0.15
  ) {
    statusColorClass = 'text-[#ffaa00]'; // Tidal stretch (yellow/amber)
  }

  return (
    <div
      id="gravitational-telemetry"
      className={`gravitational-telemetry flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#060916]/85 border border-[rgba(140,180,255,0.18)] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)] ${className}`}
      aria-live="polite"
      role="region"
      aria-label="Gravitational Singularity Telemetry"
    >
      {/* 1. Gravitational Shear */}
      <div className="telemetry-item flex items-center gap-2 text-xs tracking-wider">
        <span className="tel-label text-cosmic-dim uppercase font-medium">
          GRAVITATIONAL SHEAR:
        </span>
        <span
          id="tel-shear"
          className="tel-value text-cosmic-cyan font-mono font-bold"
        >
          {shearPercentage}%
        </span>
        <div
          className="tel-bar w-14 sm:w-16 h-1.5 bg-[#141a33] rounded-full overflow-hidden border border-[rgba(140,180,255,0.15)]"
          aria-hidden="true"
        >
          <div
            id="tel-shear-fill"
            className="tel-fill h-full transition-[width] duration-150 ease-out"
            style={{
              width: `${shearPercentage}%`,
              background: 'linear-gradient(90deg, #00ffaa, #ffaa00, #ff3355)',
            }}
          />
        </div>
      </div>

      {/* 2. Event Horizon Distance */}
      <div className="telemetry-item flex items-center gap-2 text-xs tracking-wider border-l border-[rgba(140,180,255,0.14)] pl-4 sm:pl-6">
        <span className="tel-label text-cosmic-dim uppercase font-medium">
          EVENT HORIZON DISTANCE:
        </span>
        <span
          id="tel-distance"
          className="tel-value text-[#5de6ff] font-mono font-bold"
        >
          {internalDistance}
        </span>
      </div>

      {/* 3. Spaghettification Status */}
      <div className="telemetry-item flex items-center gap-2 text-xs tracking-wider border-l border-[rgba(140,180,255,0.14)] pl-4 sm:pl-6">
        <span className="tel-label text-cosmic-dim uppercase font-medium">
          SPAGHETTIFICATION:
        </span>
        <span
          id="tel-status"
          className={`tel-value font-mono font-bold transition-colors duration-200 ${statusColorClass} ${
            isAlertActive ? 'drop-shadow-[0_0_8px_#ff3355]' : 'drop-shadow-[0_0_6px_rgba(0,255,204,0.4)]'
          }`}
        >
          {internalStatus}
        </span>
      </div>
    </div>
  );
}

export default TelemetryHud;
