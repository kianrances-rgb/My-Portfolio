import React, { useState, useEffect, useRef, useCallback } from 'react';
import { mascotGreetings } from '../../data/portfolioData';
import { useCosmicAudio } from '../../hooks/useCosmicAudio';

/**
 * WanderingAstro Component
 * Interactive wandering / zero-g flying mascot astronaut (scaled-up replica of
 * the mini astronaut cursor).
 *
 * Features:
 * - Multi-stage zero-g flight loop across the subspace console.
 * - Pitch dives, banking climbs, and dynamic ion thruster plume burns.
 * - Animated 3D gradients, specular visor glint, and pulsing antenna beacon.
 * - Overhead holographic speech bubble cycling greetings every 5 seconds.
 * - Click / keyboard (Enter/Space) interaction triggering a 360° somersault roll
 *   boost, instant speech bubble advance, and celestial Web Audio chime.
 */
export function WanderingAstro() {
  const [greetIndex, setGreetIndex] = useState(0);
  const [isBoosting, setIsBoosting] = useState(false);
  const [isPopping, setIsPopping] = useState(false);
  const { playChime } = useCosmicAudio();
  const timerRef = useRef(null);

  const greetingsList = mascotGreetings && mascotGreetings.length > 0
    ? mascotGreetings
    : [
        "Hi! I'm Astronaut Kian! 👨‍🚀",
        "To the Space and Beyond! 🚀🌌",
        "Systems Operational // All Cores Online ⚡",
        "Exploring the Event Horizon... 🕳️",
        "Welcome to My Cosmic Portfolio! ✨",
      ];

  const advanceGreeting = useCallback((interactive = false) => {
    setIsPopping(true);
    setTimeout(() => setIsPopping(false), 550);
    setGreetIndex((prev) => (prev + 1) % greetingsList.length);

    if (interactive) {
      setIsBoosting(true);
      if (typeof playChime === 'function') {
        playChime();
      } else if (window.cosmicAudio?.playCometChime) {
        window.cosmicAudio.playCometChime();
      }
      setTimeout(() => {
        setIsBoosting(false);
      }, 1200);
    }
  }, [greetingsList.length, playChime]);

  // Periodic greeting cycle every 5 seconds
  useEffect(() => {
    const startTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!document.hidden) {
          advanceGreeting(false);
        }
      }, 5000);
    };

    startTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advanceGreeting]);

  // Click / Keyboard interaction handler
  const handleInteract = (e) => {
    if (e) {
      e.stopPropagation();
    }
    advanceGreeting(true);

    // Reset periodic timer so greetings don't double-switch immediately
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!document.hidden) {
        advanceGreeting(false);
      }
    }, 5000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleInteract(e);
    }
  };

  return (
    <div
      id="subspace-wandering-astronaut"
      className={`subspace-wandering-astronaut ${isBoosting ? 'wander-boost' : ''}`}
      role="button"
      tabIndex={0}
      aria-label="Wandering Astronaut Kian - Click or press Enter to interact"
      title="Click or press Enter to greet Astronaut Kian!"
      onClick={handleInteract}
      onKeyDown={handleKeyDown}
    >
      {/* Overhead Holographic Speech Bubble */}
      <div
        id="astronaut-speech-bubble"
        className={`astronaut-speech-bubble ${isPopping ? 'bubble-pop' : ''}`}
        aria-live="polite"
      >
        <span className="bubble-beacon" aria-hidden="true" />
        <span id="bubble-status-text" className="bubble-text">
          {greetingsList[greetIndex]}
        </span>
      </div>

      {/* Articulated Flight & Attitude Container (dive pitch, banking, roll somersault) */}
      <div id="astronaut-flight-body" className="astronaut-flight-body">
        <svg
          className="wandering-astro-svg"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Visor Gold Plasma Gradient */}
            <linearGradient id="wVisorGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff5aa" />
              <stop offset="25%" stopColor="#ffd700" />
              <stop offset="55%" stopColor="#ff9900" />
              <stop offset="85%" stopColor="#7a3e00" />
              <stop offset="100%" stopColor="#1d1135" />
            </linearGradient>

            {/* Helmet 3D Spherical Radial Gradient */}
            <radialGradient id="wHelmet3dGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f0f5fc" />
              <stop offset="85%" stopColor="#c5d5ea" />
              <stop offset="100%" stopColor="#8ba2c4" />
            </radialGradient>

            {/* Torso 3D Volume Gradient */}
            <linearGradient id="wTorso3dGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4e2f5" />
              <stop offset="35%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#edf3fc" />
              <stop offset="100%" stopColor="#b8cde8" />
            </linearGradient>

            {/* Metallic Oxygen Cylinder Gradient */}
            <linearGradient id="wTank3dGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#465472" />
              <stop offset="40%" stopColor="#a8bddb" />
              <stop offset="70%" stopColor="#657b9f" />
              <stop offset="100%" stopColor="#2d374d" />
            </linearGradient>

            {/* Life Support Backpack 3D Depth Gradient */}
            <linearGradient id="wBackpack3dGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2b3350" />
              <stop offset="50%" stopColor="#1e2238" />
              <stop offset="100%" stopColor="#111526" />
            </linearGradient>

            {/* Space Suit Limbs Gradient */}
            <linearGradient id="wLegs3dGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c7daf0" />
              <stop offset="45%" stopColor="#f2f7fd" />
              <stop offset="100%" stopColor="#a8c1e2" />
            </linearGradient>

            {/* Ion Jetpack Thruster Gradient */}
            <linearGradient id="wThrusterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#5de6ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#5de6ff" stopOpacity="0" />
            </linearGradient>

            {/* Glowing Beacon Blur Filter */}
            <filter id="wBeaconGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Zero-G Tether Lifeline */}
          <path
            d="M 18 42 C 6 48, -4 38, -12 45"
            fill="none"
            stroke="#5de6ff"
            strokeWidth="2"
            strokeDasharray="3 2"
            opacity="0.75"
            className="w-tether"
          />

          {/* Thruster Ion Jets beneath oxygen cylinders */}
          <ellipse cx="21" cy="56" rx="3.5" ry="7" fill="url(#wThrusterGrad)" className="w-thruster-jet" />
          <ellipse cx="59" cy="56" rx="3.5" ry="7" fill="url(#wThrusterGrad)" className="w-thruster-jet" />

          {/* High-Velocity Ejected Ion Sparks */}
          <g className="w-thruster-sparks">
            <circle cx="21" cy="65" r="1.5" fill="#5de6ff" className="w-thruster-spark w-spark-1" />
            <circle cx="21" cy="72" r="1.1" fill="#00ffff" className="w-thruster-spark w-spark-2" />
            <circle cx="59" cy="65" r="1.5" fill="#5de6ff" className="w-thruster-spark w-spark-3" />
            <circle cx="59" cy="72" r="1.1" fill="#00ffff" className="w-thruster-spark w-spark-4" />
          </g>

          {/* Backpack / Life Support Unit */}
          <rect
            x="23"
            y="27"
            width="34"
            height="30"
            rx="7"
            fill="url(#wBackpack3dGrad)"
            stroke="#7e8fb8"
            strokeWidth="2"
          />
          <circle cx="30" cy="34" r="3" fill="#00ffff" className="w-led-cyan" />
          <circle cx="50" cy="34" r="3" fill="#ffaa00" className="w-led-gold" />
          <line x1="28" y1="48" x2="52" y2="48" stroke="#445070" strokeWidth="2.5" />

          {/* Dual Oxygen Cylinders */}
          <rect
            x="18"
            y="31"
            width="6"
            height="22"
            rx="3"
            fill="url(#wTank3dGrad)"
            stroke="#4a597a"
            strokeWidth="1.2"
          />
          <rect
            x="56"
            y="31"
            width="6"
            height="22"
            rx="3"
            fill="url(#wTank3dGrad)"
            stroke="#4a597a"
            strokeWidth="1.2"
          />

          {/* Space Suit Legs */}
          <rect
            x="27"
            y="55"
            width="10"
            height="17"
            rx="5"
            fill="url(#wLegs3dGrad)"
            stroke="#465472"
            strokeWidth="1.8"
          />
          <rect
            x="43"
            y="55"
            width="10"
            height="17"
            rx="5"
            fill="url(#wLegs3dGrad)"
            stroke="#465472"
            strokeWidth="1.8"
          />

          {/* Pressurized Boots */}
          <rect
            x="25"
            y="67"
            width="12"
            height="6.5"
            rx="3"
            fill="#20293d"
            stroke="#465472"
            strokeWidth="1.2"
          />
          <rect
            x="43"
            y="67"
            width="12"
            height="6.5"
            rx="3"
            fill="#20293d"
            stroke="#465472"
            strokeWidth="1.2"
          />

          {/* Space Suit Torso */}
          <rect
            x="26"
            y="29"
            width="28"
            height="29"
            rx="8.5"
            fill="url(#wTorso3dGrad)"
            stroke="#4a597a"
            strokeWidth="1.8"
          />

          {/* Chest Computer Pack */}
          <rect
            x="32"
            y="36"
            width="16"
            height="12"
            rx="3.5"
            fill="#182030"
            stroke="#334260"
            strokeWidth="1"
          />
          <circle cx="36" cy="42" r="2" fill="#00ffaa" className="w-led-green" />
          <circle cx="44" cy="42" r="2" fill="#ff3366" className="w-led-red" />

          {/* Left Arm (Zero-g relaxed drift) */}
          <path
            d="M 26 34 L 14 46 L 18 50 L 28 39 Z"
            fill="url(#wLegs3dGrad)"
            stroke="#4a597a"
            strokeWidth="1.4"
          />
          <circle cx="15" cy="48" r="3.8" fill="#20293d" />

          {/* Right Arm (Waving friendly greeting in microgravity) */}
          <g className="w-waving-arm">
            <path
              d="M 54 34 L 66 24 L 70 28 L 56 39 Z"
              fill="url(#wLegs3dGrad)"
              stroke="#4a597a"
              strokeWidth="1.4"
            />
            <circle cx="68" cy="25" r="4.2" fill="#20293d" />
            <path d="M 68 22 L 73 18 L 75 22 L 71 25" fill="#20293d" />
          </g>

          {/* Astronaut Helmet Sphere */}
          <circle
            cx="40"
            cy="22"
            r="16.5"
            fill="url(#wHelmet3dGrad)"
            stroke="#4a597a"
            strokeWidth="2.5"
          />

          {/* Gold Visor Shield */}
          <ellipse
            cx="40"
            cy="22"
            rx="12"
            ry="9.5"
            fill="url(#wVisorGoldGrad)"
            stroke="#c48b26"
            strokeWidth="1.5"
          />

          {/* Specular Visor Reflection Glint */}
          <ellipse
            cx="36.5"
            cy="18.5"
            rx="5.5"
            ry="3"
            fill="rgba(255, 255, 255, 0.85)"
            transform="rotate(-15 36.5 18.5)"
          />

          {/* Helmet Comm Antenna & Glowing Red Beacon */}
          <line
            x1="52"
            y1="14"
            x2="59"
            y2="6"
            stroke="#7e8fb8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="60.5"
            cy="5"
            r="3"
            fill="#ff0055"
            filter="url(#wBeaconGlow)"
            className="w-beacon"
          />
        </svg>
      </div>
    </div>
  );
}

export default WanderingAstro;
