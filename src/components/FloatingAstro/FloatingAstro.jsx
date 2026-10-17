import React, { useState, useEffect, useRef, useCallback } from 'react';
import { mascotGreetings } from '../../data/portfolioData';
import { useCosmicAudio } from '../../hooks/useCosmicAudio';

/**
 * FloatingAstro Component
 * Persistent Zero-G Floating Astronaut Avatar that roams gracefully after Page 1.
 *
 * Features:
 * - Appears smoothly only after user scrolls past Page 1 (Singularity).
 * - Floats gracefully across the viewport with microgravity inertia and gentle bobbing.
 * - Draggable: user can drag Astronaut Kian anywhere on their screen.
 * - Overhead holographic speech bubble cycling greetings every 5 seconds.
 * - Interactive: Click or press Enter to trigger 360° somersault flip, thruster burst,
 *   audio chime, and advance the greeting.
 * - Minimizable / Dockable to corner if user prefers.
 */
export function FloatingAstro() {
  const [isVisible, setIsVisible] = useState(false);
  const [greetIndex, setGreetIndex] = useState(0);
  const [isBoosting, setIsBoosting] = useState(false);
  const [isPopping, setIsPopping] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isDocked, setIsDocked] = useState(false);

  // Position state for dragging and zero-g roaming
  // Defaults to bottom-right of viewport
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  const dragStartRef = useRef({ mouseX: 0, mouseY: 0, posX: 0, posY: 0 });
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const { playChime } = useCosmicAudio();

  const greetingsList = [
    "Hi! I'm Astronaut Kian! 👨‍🚀",
    "Watch out for Space Invaders above! 👾💥",
    "To the Space and Beyond! 🚀🌌",
    "Systems Operational // All Cores Online ⚡",
    "Exploring the Andromeda Galaxy... 🌌✨",
    "Welcome to My Cosmic Portfolio! ✨",
    "Need a developer? Transmit a signal below! 📡",
  ];

  // 1. Scroll-spy detection: appear after Page 1
  useEffect(() => {
    const checkScroll = () => {
      // Page 1 is approx window.innerHeight * 0.45 or scrollY > 350
      const threshold = Math.min(window.innerHeight * 0.45, 420);
      const shouldShow = window.scrollY > threshold;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // 2. Initial position near bottom-right on mount / resize
  useEffect(() => {
    const setInitialPos = () => {
      if (!hasMoved) {
        const defaultX = Math.max(20, window.innerWidth - 180);
        const defaultY = Math.max(120, window.innerHeight - 240);
        setPosition({ x: defaultX, y: defaultY });
      }
    };

    setInitialPos();
    window.addEventListener('resize', setInitialPos);
    return () => window.removeEventListener('resize', setInitialPos);
  }, [hasMoved]);

  // 3. Periodic greeting cycle every 5 seconds
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

  useEffect(() => {
    if (!isVisible) return;

    const startTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!document.hidden && !isDragging) {
          advanceGreeting(false);
        }
      }, 5000);
    };

    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVisible, isDragging, advanceGreeting]);

  // 4. Click / Tap interaction handler
  const handleAstroClick = (e) => {
    e.stopPropagation();
    // Only trigger if not a drag action
    if (!isDragging) {
      advanceGreeting(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      advanceGreeting(true);
    }
  };

  // 5. Drag handling (Pointer events for mouse & touch)
  const handlePointerDown = (e) => {
    if (e.target.closest('.astro-dock-btn')) return;
    setIsDragging(true);
    setHasMoved(true);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      posX: position.x,
      posY: position.y,
    };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.mouseX;
    const deltaY = e.clientY - dragStartRef.current.mouseY;

    // Keep within viewport bounds
    const maxX = window.innerWidth - 130;
    const maxY = window.innerHeight - 150;
    const newX = Math.max(10, Math.min(maxX, dragStartRef.current.posX + deltaX));
    const newY = Math.max(70, Math.min(maxY, dragStartRef.current.posY + deltaY));

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e) => {
    if (isDragging) {
      setIsDragging(false);
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    }
  };

  // Dock / Undock toggle
  const toggleDock = (e) => {
    e.stopPropagation();
    setIsDocked((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      id="floating-astronaut-companion"
      className={`floating-astronaut-companion fixed z-40 transition-opacity duration-700 select-none ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } ${isDragging ? 'is-dragging' : ''} ${isBoosting ? 'wander-boost' : ''} ${
        isDocked ? 'is-docked' : 'zero-g-float'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="region"
      aria-label="Floating Astronaut Companion Kian"
    >
      {/* Overhead Holographic Speech Bubble */}
      {!isDocked && (
        <div
          id="floating-speech-bubble"
          className={`floating-speech-bubble ${isPopping ? 'bubble-pop' : ''}`}
          aria-live="polite"
        >
          <span className="bubble-beacon" aria-hidden="true" />
          <span className="bubble-text">{greetingsList[greetIndex]}</span>
          {/* Dock / Minimize toggle button */}
          <button
            type="button"
            className="astro-dock-btn"
            onClick={toggleDock}
            title="Dock Astronaut to corner"
            aria-label="Dock Astronaut to corner"
          >
            ✕
          </button>
        </div>
      )}

      {/* Docked pill trigger if docked */}
      {isDocked && (
        <button
          type="button"
          className="docked-astro-pill"
          onClick={toggleDock}
          title="Resume Zero-G Roaming"
          aria-label="Resume Zero-G Roaming"
        >
          <span className="pulse-dot" /> 👨‍🚀 ASTRONAUT KIAN [RESTORE]
        </button>
      )}

      {/* Interactive Avatar Container */}
      <div
        className="floating-astro-body cursor-grab active:cursor-grabbing"
        onClick={handleAstroClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Astronaut Kian - Click to somersault, Drag to reposition"
        title="Click to flip & talk • Drag to reposition in zero gravity!"
      >
        <svg
          className="floating-astro-svg w-[110px] h-[110px] sm:w-[130px] sm:h-[130px]"
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

          {/* Zero-G Tether Lifeline Trail (Cyan dotted trail from user screenshot) */}
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
            ry={isBoosting || isDragging ? '12' : '7'}
            fill="url(#flThrusterGrad)"
            className="w-thruster-jet"
          />
          <ellipse
            cx="59"
            cy="56"
            rx="3.5"
            ry={isBoosting || isDragging ? '12' : '7'}
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
    </div>
  );
}

export default FloatingAstro;
