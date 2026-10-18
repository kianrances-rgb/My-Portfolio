import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useCosmicAudio } from '../../hooks/useCosmicAudio';

/**
 * FloatingAstro Component
 * Autonomous Zero-G Roaming Astronaut Tour Guide.
 * 
 * Features:
 * 1. Autonomous Random Roaming:
 *    - Roams dynamically across viewport margins in zero gravity using smooth velocity steering.
 *    - Tilts realistically with movement vectors, bursts thruster ion jets when accelerating.
 *    - Microgravity sinusoidal bobbing when cruising/lingering.
 *    - Fully draggable: user can drag Astronaut Kian anywhere; resumes autonomous roaming when released.
 * 2. Intelligent Portfolio Tour Guide:
 *    - Dynamically detects the exact sector the user is currently viewing:
 *      • Sector 00: Singularity (Relativistic Black Hole & Disintegrating Name)
 *      • Sector 0.5: Orbital Defense (Modern Space Dogfight Interceptor Arcade)
 *      • Sector 01: Galaxy (Academic Formations & Andromeda Simulation)
 *      • Sector 02: Supernova (Technical Skills & Neutron Star)
 *      • Sector 03: Contact (Subspace Transceiver & Direct Channels)
 *      • Footer (Mission Brief & Sector Coordinates)
 *    - Holographic speech bubble pops with celestial chime and updates with lively explanations.
 *    - Interactive: Click or press Enter for a 360° somersault flip, thruster flare, and extra developer insights!
 *    - Minimizable / dockable to corner if desired.
 */

// Sector Explanations & Contextual Insights
const SECTOR_GUIDES = {
  intro: {
    sector: 'SECTOR 00 // SINGULARITY',
    icon: '🕳️',
    messages: [
      "You're at Sector 00: Singularity! Driven by a real-time relativistic WebGL black hole engine.",
      "Look below: Kian's name is in pure white, with its upper edge disintegrating into stardust!",
      "The powdery white dust is physically pulled into the black hole's singularity core.",
    ],
  },
  arcade: {
    sector: 'SECTOR 0.5 // LUNAR ORBIT DEFENSE',
    icon: '🚀',
    messages: [
      "Entering Lunar Orbit Defense! Notice the 3D Moon and orbiting asteroids glowing right behind the dogfight!",
      "Click or tap the game to take manual flight controls, or press Space to fire lasers without scrolling!",
      "Collect yellow overdrive power-up orbs to unleash triple spread plasma weapons!",
    ],
  },
  galaxy: {
    sector: 'SECTOR 01 // LUNAR ORBIT & GALAXY',
    icon: '🌙',
    messages: [
      "Entering Lunar Orbit! Look to the right: a photorealistic 3D Moon with real-time crater depth!",
      "Click or touch and drag directly on the 3D Moon to spin it in zero-g with realistic momentum!",
      "Notice the asteroid rocks tumbling in gravitational orbit around the lunar surface.",
      "Explore Kian's academic foundation across ICCT Colleges and DAEHAN ICT Strand in the orbital cards.",
    ],
  },
  supernova: {
    sector: 'SECTOR 02 // SUPERNOVA',
    icon: '⚡',
    messages: [
      "You're inside Sector 02: Supernova! Notice how the 3D Moon shifts angle under solar radiation.",
      "You can click and drag the 3D Moon at any time to inspect its day/night terminator crater shadows!",
      "Here are Kian's technical skills forged across Languages, Frontend, Backend, and Systems.",
      "Use the interactive filter bar above to filter by your preferred technical energy cluster!",
    ],
  },
  contact: {
    sector: 'SECTOR 03 // CONTACT',
    icon: '📡',
    messages: [
      "Arrived at Sector 03: Subspace Contact! Ready to build or collaborate? Transmit a signal!",
      "Click 'TRANSMIT VIA EMAIL' or use the Gmail console to dispatch directly to Kian.",
      "You can also explore his GitHub repositories or connect directly on social channels!",
    ],
  },
  footer: {
    sector: 'SOL-3 // MISSION COMPLETE',
    icon: '✨',
    messages: [
      "Mission Complete! You've traversed all sectors of Kian Rances Cagadas's cosmic portfolio.",
      "Human-crafted computational excellence in the vast cosmic expanse. Have an interstellar day! 🚀",
    ],
  },
};

export function FloatingAstro() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState('intro');
  const [msgIndex, setMsgIndex] = useState(0);
  const [isBoosting, setIsBoosting] = useState(false);
  const [isPopping, setIsPopping] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isDocked, setIsDocked] = useState(false);

  // Astronaut live coordinates & physics
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState(0);
  const [isThrusting, setIsThrusting] = useState(false);

  const physicsRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    targetX: 0,
    targetY: 0,
    currentSide: 'RIGHT', // 'RIGHT' or 'LEFT'
    verticalRunCount: 0,
    waypointQueue: [],
    roamTimer: 0,
    pauseTimer: 0,
    userHasDragged: false,
    dragStart: { mouseX: 0, mouseY: 0, startX: 0, startY: 0 },
    lastScrollY: 0,
  });

  const containerRef = useRef(null);
  const { playChime } = useCosmicAudio();

  // 1. Initial Position (Comfortable perimeter margin on mount)
  useEffect(() => {
    const initPos = () => {
      const defaultX = Math.max(20, window.innerWidth - 145);
      const defaultY = Math.max(120, window.innerHeight - 240);
      physicsRef.current.x = defaultX;
      physicsRef.current.y = defaultY;
      physicsRef.current.targetX = defaultX;
      physicsRef.current.targetY = defaultY;
      physicsRef.current.currentSide = 'RIGHT';
      setPos({ x: defaultX, y: defaultY });
    };

    initPos();
    window.addEventListener('resize', initPos);
    return () => window.removeEventListener('resize', initPos);
  }, []);

  // 2. Portfolio Section Detector
  useEffect(() => {
    const detectSection = () => {
      const sections = [
        { id: 'footer', el: document.querySelector('footer') || document.getElementById('footer') },
        { id: 'contact', el: document.getElementById('contact') },
        { id: 'supernova', el: document.getElementById('supernova') },
        { id: 'galaxy', el: document.getElementById('galaxy') },
        { id: 'arcade', el: document.getElementById('arcade') },
        { id: 'intro', el: document.getElementById('intro') },
      ];

      const viewMidY = window.innerHeight * 0.42;

      for (const sec of sections) {
        if (sec.el) {
          const rect = sec.el.getBoundingClientRect();
          if (rect.top <= viewMidY && rect.bottom >= 100) {
            if (sec.id !== currentSection) {
              setCurrentSection(sec.id);
              setMsgIndex(0);
              setIsPopping(true);
              setTimeout(() => setIsPopping(false), 550);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', detectSection, { passive: true });
    detectSection();
    return () => window.removeEventListener('scroll', detectSection);
  }, [currentSection]);

  // 3. Periodic Message Cycle within the current section
  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden && !isDragging) {
        setMsgIndex((prev) => {
          const guide = SECTOR_GUIDES[currentSection] || SECTOR_GUIDES.intro;
          return (prev + 1) % guide.messages.length;
        });
        setIsPopping(true);
        setTimeout(() => setIsPopping(false), 500);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSection, isDragging]);

  // 4. Autonomous Zero-G Perimeter Roaming Engine (Strictly Sides + Up/Down)
  useEffect(() => {
    let animId = null;
    let lastTime = performance.now();

    // Helper: Pick a new waypoint restricted strictly to the side gutters, cruising up/down
    const pickNewWaypoint = () => {
      const p = physicsRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // A. Process queued perimeter corner waypoints if transitioning across sides
      if (p.waypointQueue && p.waypointQueue.length > 0) {
        const nextWp = p.waypointQueue.shift();
        p.targetX = nextWp.x;
        p.targetY = nextWp.y;
        p.roamTimer = nextWp.duration || 3.5;
        return;
      }

      p.verticalRunCount = (p.verticalRunCount || 0) + 1;

      // B. After 3-4 vertical runs on one side, execute a safe perimeter transition to opposite side
      const shouldSwitchSide = p.verticalRunCount >= 4;

      if (shouldSwitchSide) {
        p.verticalRunCount = 0;
        const targetSide = p.currentSide === 'RIGHT' ? 'LEFT' : 'RIGHT';
        p.currentSide = targetSide;

        // Choose between TOP perimeter corridor (y ~ 85) or BOTTOM perimeter corridor (y ~ h - 110)
        const useTopPerimeter = p.y < h * 0.48;

        if (targetSide === 'LEFT') {
          // Transit from RIGHT to LEFT along top or bottom extreme edge
          if (useTopPerimeter) {
            p.waypointQueue = [
              { x: 55, y: 85, duration: 3.5 }, // Top-Left corner
              { x: 45 + Math.random() * 25, y: 160 + Math.random() * 120, duration: 6.0 }, // Left side upper corridor
            ];
            p.targetX = w - 100;
            p.targetY = 85;
            p.roamTimer = 3.0;
          } else {
            p.waypointQueue = [
              { x: 55, y: h - 110, duration: 3.5 }, // Bottom-Left corner
              { x: 45 + Math.random() * 25, y: h - 260 - Math.random() * 120, duration: 6.0 }, // Left side lower corridor
            ];
            p.targetX = w - 100;
            p.targetY = h - 110;
            p.roamTimer = 3.0;
          }
        } else {
          // Transit from LEFT to RIGHT along top or bottom extreme edge
          if (useTopPerimeter) {
            p.waypointQueue = [
              { x: w - 100, y: 85, duration: 3.5 }, // Top-Right corner
              { x: w - 120 - Math.random() * 25, y: 160 + Math.random() * 120, duration: 6.0 }, // Right side upper corridor
            ];
            p.targetX = 55;
            p.targetY = 85;
            p.roamTimer = 3.0;
          } else {
            p.waypointQueue = [
              { x: w - 100, y: h - 110, duration: 3.5 }, // Bottom-Right corner
              { x: w - 120 - Math.random() * 25, y: h - 260 - Math.random() * 120, duration: 6.0 }, // Right side lower corridor
            ];
            p.targetX = 55;
            p.targetY = h - 110;
            p.roamTimer = 3.0;
          }
        }
        return;
      }

      // C. Normal vertical travel up and down along the current side
      if (p.currentSide === 'LEFT') {
        p.targetX = 35 + Math.random() * 35; // x in [35, 70]
        if (p.y < h * 0.45) {
          // Cruise DOWNwards along left side
          p.targetY = Math.min(h - 140, h * 0.55 + Math.random() * (h * 0.30));
        } else {
          // Cruise UPwards along left side
          p.targetY = Math.max(110, 110 + Math.random() * (h * 0.32));
        }
      } else {
        // Right side
        p.targetX = Math.max(20, w - 145 + Math.random() * 50); // x in [w - 145, w - 95]
        if (p.y < h * 0.45) {
          // Cruise DOWNwards along right side
          p.targetY = Math.min(h - 140, h * 0.55 + Math.random() * (h * 0.30));
        } else {
          // Cruise UPwards along right side
          p.targetY = Math.max(110, 110 + Math.random() * (h * 0.32));
        }
      }

      p.roamTimer = 5.5 + Math.random() * 4.5; // Stay/travel for 5.5 to 10 seconds
    };

    pickNewWaypoint();

    const updatePhysics = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.08);
      lastTime = time;

      const p = physicsRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (!isDragging && !isDocked) {
        p.roamTimer -= dt;
        if (p.roamTimer <= 0) {
          pickNewWaypoint();
        }

        // Active Repulsion Barrier: Strictly prevent entering central content zone
        const midLeft = Math.max(90, w * 0.12);
        const midRight = Math.min(w - 150, w * 0.88);
        const topPerimeterY = 105;
        const bottomPerimeterY = h - 125;

        // If inside central forbidden zone (and not safely in top or bottom margin)
        if (p.y > topPerimeterY && p.y < bottomPerimeterY && p.x > midLeft && p.x < midRight) {
          if (p.x < w / 2) {
            p.vx -= 150 * dt; // Repel towards left side
            p.currentSide = 'LEFT';
            p.targetX = 45;
          } else {
            p.vx += 150 * dt; // Repel towards right side
            p.currentSide = 'RIGHT';
            p.targetX = w - 120;
          }
        }

        // Vector to target waypoint
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 18) {
          // Accelerate gently towards waypoint
          const moveSpeed = Math.min(55, dist * 0.7);
          const targetVx = (dx / dist) * moveSpeed;
          const targetVy = (dy / dist) * moveSpeed;

          p.vx += (targetVx - p.vx) * Math.min(1.0, 1.8 * dt);
          p.vy += (targetVy - p.vy) * Math.min(1.0, 1.8 * dt);

          p.x += p.vx * dt;
          p.y += p.vy * dt;

          setIsThrusting(Math.hypot(p.vx, p.vy) > 16);
          // Banking tilt proportional to horizontal velocity
          setTilt(Math.max(-18, Math.min(18, (p.vx / 45) * 14)));
        } else {
          // Zero-G idle floating bob
          p.vx *= 0.94;
          p.vy *= 0.94;
          const idleX = Math.sin(time * 0.0012) * 0.35;
          const idleY = Math.cos(time * 0.0016) * 0.45;
          p.x += idleX;
          p.y += idleY;
          setIsThrusting(false);
          setTilt(Math.sin(time * 0.0014) * 4);
        }

        // Clamp inside screen bounds
        p.x = Math.max(15, Math.min(w - 120, p.x));
        p.y = Math.max(80, Math.min(h - 145, p.y));

        setPos({ x: Math.round(p.x), y: Math.round(p.y) });
      }

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, isDocked]);

  // 5. Interactive Click & Talk
  const handleAstroClick = (e) => {
    e.stopPropagation();
    if (isDragging) return;

    setIsBoosting(true);
    if (typeof playChime === 'function') playChime();

    // Advance message immediately
    const guide = SECTOR_GUIDES[currentSection] || SECTOR_GUIDES.intro;
    setMsgIndex((prev) => (prev + 1) % guide.messages.length);
    setIsPopping(true);

    setTimeout(() => {
      setIsBoosting(false);
      setIsPopping(false);
    }, 1100);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleAstroClick(e);
    }
  };

  // 6. User Drag Handling (Pointer Events)
  const handlePointerDown = (e) => {
    if (e.target.closest('.astro-dock-btn')) return;
    setIsDragging(true);
    const p = physicsRef.current;
    p.userHasDragged = true;
    p.dragStart = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      startX: p.x,
      startY: p.y,
    };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const p = physicsRef.current;
    const deltaX = e.clientX - p.dragStart.mouseX;
    const deltaY = e.clientY - p.dragStart.mouseY;

    p.x = Math.max(15, Math.min(window.innerWidth - 120, p.dragStart.startX + deltaX));
    p.y = Math.max(80, Math.min(window.innerHeight - 150, p.dragStart.startY + deltaY));
    p.targetX = p.x;
    p.targetY = p.y;
    setPos({ x: p.x, y: p.y });
  };

  const handlePointerUp = (e) => {
    if (isDragging) {
      setIsDragging(false);
      e.currentTarget.releasePointerCapture?.(e.pointerId);

      const p = physicsRef.current;
      const w = window.innerWidth;
      // If user released in the middle, steer smoothly toward nearest side
      if (p.x < w / 2) {
        p.currentSide = 'LEFT';
        p.targetX = 45;
      } else {
        p.currentSide = 'RIGHT';
        p.targetX = w - 120;
      }
      p.targetY = p.y;
      p.waypointQueue = [];
      p.roamTimer = 4.0;
    }
  };

  const toggleDock = (e) => {
    e.stopPropagation();
    setIsDocked((prev) => !prev);
  };

  const activeGuide = SECTOR_GUIDES[currentSection] || SECTOR_GUIDES.intro;
  const currentMsg = activeGuide.messages[msgIndex % activeGuide.messages.length];
  const isRightSide = pos.x > (typeof window !== 'undefined' ? window.innerWidth / 2 : 500);

  return (
    <aside
      ref={containerRef}
      id="floating-astronaut-companion"
      className={`floating-astronaut-companion fixed z-40 transition-opacity duration-700 select-none ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } ${isDragging ? 'is-dragging' : ''} ${isBoosting ? 'wander-boost' : ''}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      aria-label="Astronaut Kian Cosmic Tour Guide"
    >
      {/* Overhead Holographic Tour Guide Speech Bubble */}
      {!isDocked && (
        <div
          id="floating-speech-bubble"
          className={`floating-speech-bubble max-w-[290px] sm:max-w-[340px] flex-col !items-start ${
            isRightSide ? 'bubble-align-right' : 'bubble-align-left'
          } ${isPopping ? 'bubble-pop' : ''}`}
          aria-live="polite"
        >
          {/* Sector Badge Tag */}
          <div className="flex items-center justify-between w-full pb-1 border-b border-white/10 text-[10px] tracking-widest text-[#00ffcc] font-['Orbitron'] font-bold">
            <span className="flex items-center gap-1.5">
              <span>{activeGuide.icon}</span>
              <span>{activeGuide.sector}</span>
            </span>
            <button
              type="button"
              className="astro-dock-btn !m-0 !w-4 !h-4"
              onClick={toggleDock}
              title="Dock Astronaut to corner"
              aria-label="Dock Astronaut to corner"
            >
              ✕
            </button>
          </div>

          {/* Contextual Tour Explanation */}
          <p className="bubble-text text-left font-['Share_Tech_Mono'] text-xs text-white/95 leading-relaxed pt-1 whitespace-normal">
            {currentMsg}
          </p>
        </div>
      )}

      {/* Docked pill trigger if user minimized */}
      {isDocked && (
        <button
          type="button"
          className="docked-astro-pill"
          onClick={toggleDock}
          title="Resume Zero-G Portfolio Tour"
          aria-label="Resume Zero-G Tour"
        >
          <span className="pulse-dot" /> 👨‍🚀 ASTRONAUT KIAN [TOUR ACTIVE]
        </button>
      )}

      {/* Interactive Avatar Container with Dynamic Tilt & Banking */}
      <div
        className="floating-astro-body cursor-grab active:cursor-grabbing transition-transform duration-200"
        style={{ transform: `rotate(${tilt}deg)` }}
        onClick={handleAstroClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Astronaut Kian - Click to talk & flip, drag to move"
        title="Click to talk & flip • Drag to reposition in zero-g!"
      >
        <svg
          className="floating-astro-svg w-[95px] h-[95px] sm:w-[115px] sm:h-[115px]"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Visor Gold Plasma Gradient */}
            <linearGradient id="flVisorGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff5aa" />
              <stop offset="25%" stopColor="#ffd700" />
              <stop offset="55%" stopColor="#ff9900" />
              <stop offset="85%" stopColor="#7a3e00" />
              <stop offset="100%" stopColor="#1d1135" />
            </linearGradient>

            {/* Helmet 3D Spherical Radial Gradient */}
            <radialGradient id="flHelmet3dGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f0f5fc" />
              <stop offset="85%" stopColor="#c5d5ea" />
              <stop offset="100%" stopColor="#8ba2c4" />
            </radialGradient>

            {/* Torso 3D Volume Gradient */}
            <linearGradient id="flTorso3dGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4e2f5" />
              <stop offset="35%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#edf3fc" />
              <stop offset="100%" stopColor="#b8cde8" />
            </linearGradient>

            {/* Metallic Oxygen Cylinder Gradient */}
            <linearGradient id="flTank3dGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#465472" />
              <stop offset="40%" stopColor="#a8bddb" />
              <stop offset="70%" stopColor="#657b9f" />
              <stop offset="100%" stopColor="#2d374d" />
            </linearGradient>

            {/* Life Support Backpack 3D Depth Gradient */}
            <linearGradient id="flBackpack3dGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2b3350" />
              <stop offset="50%" stopColor="#1e2238" />
              <stop offset="100%" stopColor="#111526" />
            </linearGradient>

            {/* Space Suit Limbs Gradient */}
            <linearGradient id="flLegs3dGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c7daf0" />
              <stop offset="45%" stopColor="#f2f7fd" />
              <stop offset="100%" stopColor="#a8c1e2" />
            </linearGradient>

            {/* Ion Jetpack Thruster Gradient */}
            <linearGradient id="flThrusterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#5de6ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#5de6ff" stopOpacity="0" />
            </linearGradient>

            {/* Glowing Beacon Blur Filter */}
            <filter id="flBeaconGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Zero-G Tether Lifeline Trail */}
          <path
            d="M 18 42 C 6 48, -4 38, -12 45"
            fill="none"
            stroke="#5de6ff"
            strokeWidth="2.5"
            strokeDasharray="3 3"
            opacity="0.85"
            className="w-tether"
          />

          {/* Thruster Ion Jets beneath oxygen cylinders */}
          <ellipse
            cx="21"
            cy="56"
            rx="3.5"
            ry={isBoosting || isDragging || isThrusting ? '13' : '6'}
            fill="url(#flThrusterGrad)"
            className="w-thruster-jet"
          />
          <ellipse
            cx="59"
            cy="56"
            rx="3.5"
            ry={isBoosting || isDragging || isThrusting ? '13' : '6'}
            fill="url(#flThrusterGrad)"
            className="w-thruster-jet"
          />

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
            fill="url(#flBackpack3dGrad)"
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
            fill="url(#flTank3dGrad)"
            stroke="#4a597a"
            strokeWidth="1.2"
          />
          <rect
            x="56"
            y="31"
            width="6"
            height="22"
            rx="3"
            fill="url(#flTank3dGrad)"
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
            fill="url(#flLegs3dGrad)"
            stroke="#465472"
            strokeWidth="1.8"
          />
          <rect
            x="43"
            y="55"
            width="10"
            height="17"
            rx="5"
            fill="url(#flLegs3dGrad)"
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
            fill="url(#flTorso3dGrad)"
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
            fill="url(#flLegs3dGrad)"
            stroke="#4a597a"
            strokeWidth="1.4"
          />
          <circle cx="15" cy="48" r="3.8" fill="#20293d" />

          {/* Right Arm (Waving friendly greeting in microgravity) */}
          <g className="w-waving-arm">
            <path
              d="M 54 34 L 66 24 L 70 28 L 56 39 Z"
              fill="url(#flLegs3dGrad)"
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
            fill="url(#flHelmet3dGrad)"
            stroke="#4a597a"
            strokeWidth="2.5"
          />

          {/* Gold Visor Shield */}
          <ellipse
            cx="40"
            cy="22"
            rx="12"
            ry="9.5"
            fill="url(#flVisorGoldGrad)"
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
            filter="url(#flBeaconGlow)"
            className="w-beacon"
          />
        </svg>
      </div>
    </aside>
  );
}

export default FloatingAstro;
