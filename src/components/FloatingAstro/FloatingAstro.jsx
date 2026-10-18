import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useCosmicAudio } from '../../hooks/useCosmicAudio';

// Sector Explanations & Contextual Insights (Zero emojis, purely aerospace telemetry)
const SECTOR_GUIDES = {
  intro: {
    sector: 'SINGULARITY',
    messages: [
      "You're at Singularity, driven by a real-time relativistic WebGL black hole engine.",
      "Notice Kian's title in pure white, with its upper edge disintegrating into cosmic stardust.",
      "The white particle dust is physically pulled into the black hole's singularity core.",
      "Drag me directly into the black hole center to test quantum gravitational disintegration!",
    ],
  },
  arcade: {
    sector: 'LUNAR ORBIT DEFENSE',
    messages: [
      "Entering Lunar Orbit Defense. The photorealistic 3D Moon and asteroid field anchor the dogfight.",
      "Interact with the viewport to take manual flight control, or press Space to fire lasers without scrolling.",
      "Collect plasma power-up orbs to deploy multi-vector spread armaments.",
    ],
  },
  galaxy: {
    sector: 'EDUCATION',
    messages: [
      "Entering the Education section. To the right is a photorealistic 3D Moon with real-time crater relief.",
      "Drag directly on the 3D Moon to spin it in zero-g with realistic physical momentum.",
      "Notice the orbital debris circling in gravitational equilibrium around the lunar surface.",
      "Explore Kian's academic foundation across ICCT Colleges and DAEHAN ICT Strand in the orbital cards.",
    ],
  },
  supernova: {
    sector: 'SKILLS',
    messages: [
      "Inside the Skills section. The 3D Moon dynamically shifts angle under solar radiation.",
      "Drag the 3D Moon at any time to inspect its day/night terminator crater shadows.",
      "Here are Kian's technical skills forged across Languages, Frontend, Backend, and Systems.",
      "Use the segmented filter bar above to isolate technical clusters.",
    ],
  },
  contact: {
    sector: 'CONTACT',
    messages: [
      "Arrived at Contact. Ready to build or collaborate? Transmit a signal.",
      "Select any communication terminal or use the direct composer to dispatch an email to Kian.",
      "You can also explore his GitHub repositories or connect directly on social channels.",
    ],
  },
  footer: {
    sector: 'MISSION COMPLETE',
    messages: [
      "Mission Complete. You have traversed Kian Rances Cagadas's cosmic portfolio.",
      "Human-crafted computational excellence in the vast cosmic expanse.",
    ],
  },
};

/**
 * FloatingAstro Component
 * Refined Aerospace Zero-G Companion with Event Horizon Disintegration Engine.
 * 
 * Features:
 * 1. Black Hole Disintegration & Quantum Rebound:
 *    - Dragging the avatar into the center of the black hole causes gravitational spaghettification,
 *      accelerating spiral inward collapse, emitting matter siphon particle streams, and triggering
 *      a Hawking Radiation burst flash on the event horizon.
 *    - Following quantum tunneling, the avatar re-materializes at the bottom-right of the website
 *      with an expanding quantum warp aperture ring, chromatic flash, and harmonic chime.
 * 2. High-Fidelity Aerospace EVA Suit & Twin-Nozzle Vector Jetpack:
 *    - Dual-nozzle gimbal ion thrusters with supersonic Mach diamonds & dynamic plasma plume.
 *    - Lateral RCS (Reaction Control System) cold-gas steering micro-jets firing during banking maneuvers.
 *    - High-pressure cryogenic propellant cylinders with chrome specular reflections.
 *    - Golden visor with dual-layer relativistic curve sheen & horizon reflection glint.
 *    - Telemetry console with pulsing emerald & cyan OLED status nodes.
 * 3. Unpredictable Random Perimeter Roaming:
 *    - Free, organic zero-g drifting across all outer perimeter zones (Left, Right, Top, Bottom, Corners).
 *    - Strict Middle Repulsion Barrier: Dynamically prevents entering or blocking the central reading area.
 */
export function FloatingAstro() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState('intro');
  const [msgIndex, setMsgIndex] = useState(0);
  const [isBoosting, setIsBoosting] = useState(false);
  const [isPopping, setIsPopping] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isDocked, setIsDocked] = useState(false);

  // Disintegration & Respawn Lifecycle States:
  // 'idle' -> 'collapsing' (spiraling into singularity) -> 'swallowed' (hidden in singularity)
  //        -> 'tunneling' (moving to bottom-right) -> 'respawning' (aperture bloom) -> 'idle'
  const [disintegrateStage, setDisintegrateStage] = useState('idle');
  const isDisintegratingRef = useRef(false);

  // Astronaut live coordinates & physics
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState(0);
  const [isThrusting, setIsThrusting] = useState(false);
  const [rcsFire, setRcsFire] = useState({ left: false, right: false });

  const physicsRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    targetX: 0,
    targetY: 0,
    currentZone: 'RIGHT', // 'LEFT', 'RIGHT', 'TOP', 'BOTTOM'
    waypointQueue: [],
    roamTimer: 0,
    thrustPulse: 0,
    userHasDragged: false,
    dragStart: { mouseX: 0, mouseY: 0, startX: 0, startY: 0 },
  });

  const containerRef = useRef(null);
  const { playChime } = useCosmicAudio();

  // Helper: Retrieve Black Hole Viewport Metrics in Screen Coordinates
  const getBlackHoleMetrics = useCallback(() => {
    const introEl = document.getElementById('intro');
    if (!introEl) return null;
    const rect = introEl.getBoundingClientRect();
    // Verify intro section is visible within viewport
    if (rect.bottom < 60 || rect.top > window.innerHeight - 60) return null;

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = window.BlackHoleEngine?.radius || Math.min(rect.width, rect.height) * 0.16;
    const tidalRadius = window.BlackHoleEngine?.tidalRadius || radius * 2.8;

    return { x, y, radius, tidalRadius };
  }, []);

  // 1. Initial Position (Comfortable perimeter margin on mount)
  useEffect(() => {
    const initPos = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const defaultX = Math.max(30, w - 135);
      const defaultY = Math.max(120, h - 220);
      physicsRef.current.x = defaultX;
      physicsRef.current.y = defaultY;
      physicsRef.current.targetX = defaultX;
      physicsRef.current.targetY = defaultY;
      physicsRef.current.currentZone = 'RIGHT';
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
      if (!document.hidden && !isDragging && !isDisintegratingRef.current) {
        setMsgIndex((prev) => {
          const guide = SECTOR_GUIDES[currentSection] || SECTOR_GUIDES.intro;
          return (prev + 1) % guide.messages.length;
        });
        setIsPopping(true);
        setTimeout(() => setIsPopping(false), 500);
      }
    }, 7500);

    return () => clearInterval(interval);
  }, [currentSection, isDragging]);

  // =========================================================================
  // 4. BLACK HOLE DISINTEGRATION & BOTTOM-RIGHT RESPAWN ENGINE
  // =========================================================================
  const triggerBlackHoleDisintegration = useCallback((bhX, bhY) => {
    if (isDisintegratingRef.current) return;
    isDisintegratingRef.current = true;

    setIsDragging(false);
    setDisintegrateStage('collapsing');

    const p = physicsRef.current;
    p.targetX = bhX - 50;
    p.targetY = bhY - 50;
    p.vx = 0;
    p.vy = 0;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const bottomX = Math.max(30, w - 140);
    const bottomY = Math.max(120, h - 160);
    const destCenterX = bottomX + 50;
    const destCenterY = bottomY + 50;

    if (typeof playChime === 'function') playChime();

    // Stream disintegrated stardust directly from black hole to bottom-right respawn zone
    for (let i = 0; i < 65; i++) {
      setTimeout(() => {
        if (typeof window.emitQuantumTunnelParticle === 'function') {
          const offsetX = (Math.random() - 0.5) * 35;
          const offsetY = (Math.random() - 0.5) * 35;
          window.emitQuantumTunnelParticle(
            bhX + offsetX,
            bhY + offsetY,
            destCenterX,
            destCenterY
          );
        }
      }, i * 15);
    }

    // Telemetry notification: Singularity Breach
    window.dispatchEvent(
      new CustomEvent('cosmic-telemetry-update', {
        detail: {
          shearRatio: 1.0,
          distanceText: 'SINGULARITY CORE',
          statusText: 'SPAGHETTIFYING CORE',
        },
      })
    );

    // Stage 2: Event Horizon Swallow & Hawking Flash (at 450ms)
    setTimeout(() => {
      setDisintegrateStage('swallowed');
      window.dispatchEvent(new CustomEvent('trigger-hawking-flash'));

      window.dispatchEvent(
        new CustomEvent('cosmic-telemetry-update', {
          detail: {
            shearRatio: 1.0,
            distanceText: 'EVENT HORIZON',
            statusText: 'QUANTUM DISINTEGRATION COMPLETE',
          },
        })
      );
    }, 450);

    // Stage 3: Quantum Tunneling positioning at Bottom-Right of Website (at 1000ms)
    setTimeout(() => {
      p.x = bottomX;
      p.y = bottomY;
      p.targetX = bottomX;
      p.targetY = bottomY;
      p.vx = 0;
      p.vy = 0;
      p.currentZone = 'BOTTOM';
      setPos({ x: bottomX, y: bottomY });
      setDisintegrateStage('tunneling');
    }, 1000);

    // Stage 4: Re-materialization & Respawn as Stardust Converges in Bottom-Right (at 1450ms)
    setTimeout(() => {
      setDisintegrateStage('respawning');
      if (typeof playChime === 'function') playChime();

      // Announcement in telemetry HUD
      window.dispatchEvent(
        new CustomEvent('cosmic-telemetry-update', {
          detail: {
            shearRatio: 0.0,
            distanceText: 'SAFE ORBIT',
            statusText: 'QUANTUM REBOUND COMPLETE',
          },
        })
      );

      setIsPopping(true);
      setTimeout(() => setIsPopping(false), 1200);
    }, 1650);

    // Stage 5: Resume Autonomous Roaming from Bottom-Right (at 2550ms)
    setTimeout(() => {
      setDisintegrateStage('idle');
      isDisintegratingRef.current = false;
      p.waypointQueue = [];
      p.roamTimer = 4.0;
    }, 2550);
  }, [playChime]);

  // Listen for custom trigger-spaghetti-demo from Telemetry HUD button
  useEffect(() => {
    const handleDemoDive = () => {
      const bh = getBlackHoleMetrics();
      if (bh) {
        triggerBlackHoleDisintegration(bh.x, bh.y);
      }
    };

    window.addEventListener('trigger-spaghetti-demo', handleDemoDive);
    return () => window.removeEventListener('trigger-spaghetti-demo', handleDemoDive);
  }, [getBlackHoleMetrics, triggerBlackHoleDisintegration]);

  // 5. Autonomous Zero-G Perimeter Roaming Engine (Except the Middle Part)
  useEffect(() => {
    let animId = null;
    let lastTime = performance.now();

    const getPerimeterMetrics = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const marginSide = Math.max(30, Math.min(65, w * 0.04));
      const marginTop = 85;
      const marginBottom = Math.max(90, h - 135);
      const rightX = w - marginSide - 75;

      return {
        w,
        h,
        marginSide,
        marginTop,
        marginBottom,
        rightX,
        cTL: { x: marginSide + 10, y: marginTop },
        cTR: { x: rightX, y: marginTop },
        cBR: { x: rightX, y: marginBottom },
        cBL: { x: marginSide + 10, y: marginBottom },
      };
    };

    const pickNewWaypoint = () => {
      const p = physicsRef.current;
      const { w, h, marginSide, marginTop, marginBottom, rightX, cTL, cTR, cBR, cBL } = getPerimeterMetrics();

      if (p.waypointQueue && p.waypointQueue.length > 0) {
        const nextWp = p.waypointQueue.shift();
        p.targetX = nextWp.x;
        p.targetY = nextWp.y;
        p.roamTimer = nextWp.duration || 3.0;
        return;
      }

      const zones = ['LEFT', 'RIGHT', 'TOP', 'BOTTOM'];
      const shouldSwitchZone = Math.random() < 0.78;
      const targetZone = shouldSwitchZone
        ? zones.filter((z) => z !== p.currentZone)[Math.floor(Math.random() * (zones.length - 1))]
        : p.currentZone;

      p.currentZone = targetZone;

      const randomLeftPoint = () => ({
        x: marginSide + Math.random() * 25,
        y: marginTop + 35 + Math.random() * (marginBottom - marginTop - 70),
      });

      const randomRightPoint = () => ({
        x: rightX + Math.random() * 25,
        y: marginTop + 35 + Math.random() * (marginBottom - marginTop - 70),
      });

      const randomTopPoint = () => ({
        x: marginSide + 40 + Math.random() * (rightX - marginSide - 80),
        y: marginTop + Math.random() * 20,
      });

      const randomBottomPoint = () => ({
        x: marginSide + 40 + Math.random() * (rightX - marginSide - 80),
        y: marginBottom + Math.random() * 20,
      });

      if (targetZone === 'LEFT') {
        const dest = randomLeftPoint();
        if (p.x > w * 0.5) {
          if (p.y < h * 0.5) {
            p.waypointQueue = [cTR, { x: w * 0.5, y: marginTop }, cTL, dest];
          } else {
            p.waypointQueue = [cBR, { x: w * 0.5, y: marginBottom }, cBL, dest];
          }
          const first = p.waypointQueue.shift();
          p.targetX = first.x;
          p.targetY = first.y;
        } else {
          p.targetX = dest.x;
          p.targetY = dest.y;
        }
      } else if (targetZone === 'RIGHT') {
        const dest = randomRightPoint();
        if (p.x < w * 0.5) {
          if (p.y < h * 0.5) {
            p.waypointQueue = [cTL, { x: w * 0.5, y: marginTop }, cTR, dest];
          } else {
            p.waypointQueue = [cBL, { x: w * 0.5, y: marginBottom }, cBR, dest];
          }
          const first = p.waypointQueue.shift();
          p.targetX = first.x;
          p.targetY = first.y;
        } else {
          p.targetX = dest.x;
          p.targetY = dest.y;
        }
      } else if (targetZone === 'TOP') {
        const dest = randomTopPoint();
        if (p.y > h * 0.5) {
          if (p.x < w * 0.5) {
            p.waypointQueue = [cBL, { x: marginSide, y: h * 0.5 }, cTL, dest];
          } else {
            p.waypointQueue = [cBR, { x: rightX, y: h * 0.5 }, cTR, dest];
          }
          const first = p.waypointQueue.shift();
          p.targetX = first.x;
          p.targetY = first.y;
        } else {
          p.targetX = dest.x;
          p.targetY = dest.y;
        }
      } else {
        const dest = randomBottomPoint();
        if (p.y < h * 0.5) {
          if (p.x < w * 0.5) {
            p.waypointQueue = [cTL, { x: marginSide, y: h * 0.5 }, cBL, dest];
          } else {
            p.waypointQueue = [cTR, { x: rightX, y: h * 0.5 }, cBR, dest];
          }
          const first = p.waypointQueue.shift();
          p.targetX = first.x;
          p.targetY = first.y;
        } else {
          p.targetX = dest.x;
          p.targetY = dest.y;
        }
      }

      p.roamTimer = 4.5 + Math.random() * 4.5;
    };

    pickNewWaypoint();

    const updatePhysics = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.08);
      lastTime = time;

      const p = physicsRef.current;
      const { w, h, marginSide, marginTop, marginBottom, rightX } = getPerimeterMetrics();

      // If currently disintegrating, smoothly home into black hole target or hold position
      if (isDisintegratingRef.current) {
        if (disintegrateStage === 'collapsing') {
          p.x += (p.targetX - p.x) * Math.min(1.0, 8.0 * dt);
          p.y += (p.targetY - p.y) * Math.min(1.0, 8.0 * dt);
          setPos({ x: Math.round(p.x), y: Math.round(p.y) });
        }
        animId = requestAnimationFrame(updatePhysics);
        return;
      }

      if (!isDragging && !isDocked) {
        p.roamTimer -= dt;
        p.thrustPulse = (p.thrustPulse || 0) + dt * 10;

        if (p.roamTimer <= 0) {
          pickNewWaypoint();
        }

        // =================================================================
        // ACTIVE MIDDLE REPULSION BARRIER: STRICTLY PREVENTS ENTERING CENTER
        // =================================================================
        const midLeft = Math.max(75, w * 0.12);
        const midRight = Math.min(w - 140, w * 0.88);
        const midTop = 115;
        const midBottom = h - 140;

        if (p.x > midLeft && p.x < midRight && p.y > midTop && p.y < midBottom) {
          const distToLeft = p.x - midLeft;
          const distToRight = midRight - p.x;
          const distToTop = p.y - midTop;
          const distToBottom = midBottom - p.y;
          const minDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);

          if (minDist === distToLeft) {
            p.vx -= 240 * dt;
            p.targetX = marginSide + 10;
            p.currentZone = 'LEFT';
          } else if (minDist === distToRight) {
            p.vx += 240 * dt;
            p.targetX = rightX;
            p.currentZone = 'RIGHT';
          } else if (minDist === distToTop) {
            p.vy -= 240 * dt;
            p.targetY = marginTop;
            p.currentZone = 'TOP';
          } else {
            p.vy += 240 * dt;
            p.targetY = marginBottom;
            p.currentZone = 'BOTTOM';
          }

          p.waypointQueue = [];
          p.roamTimer = 3.0;
        }

        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 16) {
          const moveSpeed = Math.min(60, dist * 0.75);
          const targetVx = (dx / dist) * moveSpeed;
          const targetVy = (dy / dist) * moveSpeed;

          p.vx += (targetVx - p.vx) * Math.min(1.0, 2.0 * dt);
          p.vy += (targetVy - p.vy) * Math.min(1.0, 2.0 * dt);

          p.x += p.vx * dt;
          p.y += p.vy * dt;

          const currentSpeed = Math.hypot(p.vx, p.vy);
          setIsThrusting(currentSpeed > 14);

          const targetTilt = Math.max(-20, Math.min(20, (p.vx / 45) * 16));
          setTilt(targetTilt);

          setRcsFire({
            left: p.vx > 18,
            right: p.vx < -18,
          });
        } else {
          p.vx *= 0.92;
          p.vy *= 0.92;
          const idleX = Math.sin(time * 0.0012) * 0.35;
          const idleY = Math.cos(time * 0.0016) * 0.45;
          p.x += idleX;
          p.y += idleY;
          setIsThrusting(false);
          setTilt(Math.sin(time * 0.0014) * 3);
          setRcsFire({ left: false, right: false });
        }

        p.x = Math.max(15, Math.min(w - 110, p.x));
        p.y = Math.max(75, Math.min(h - 135, p.y));

        setPos({ x: Math.round(p.x), y: Math.round(p.y) });
      }

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, isDocked, disintegrateStage]);

  // 6. Interactive Click & Talk
  const handleAstroClick = (e) => {
    e.stopPropagation();
    if (isDragging || isDisintegratingRef.current) return;

    setIsBoosting(true);
    if (typeof playChime === 'function') playChime();

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

  // 7. User Drag Handling & Black Hole Event Horizon Collision Detection
  const handlePointerDown = (e) => {
    if (e.target.closest('.astro-dock-btn') || isDisintegratingRef.current) return;
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
    if (!isDragging || isDisintegratingRef.current) return;
    const p = physicsRef.current;
    const deltaX = e.clientX - p.dragStart.mouseX;
    const deltaY = e.clientY - p.dragStart.mouseY;

    p.x = Math.max(15, Math.min(window.innerWidth - 110, p.dragStart.startX + deltaX));
    p.y = Math.max(75, Math.min(window.innerHeight - 135, p.dragStart.startY + deltaY));
    p.targetX = p.x;
    p.targetY = p.y;
    setPos({ x: p.x, y: p.y });

    // Real-Time Black Hole Proximity & Middle Horizon Ingestion Detection
    const bh = getBlackHoleMetrics();
    if (bh) {
      const astroCenterX = p.x + 50;
      const astroCenterY = p.y + 50;
      const dist = Math.hypot(astroCenterX - bh.x, astroCenterY - bh.y);

      // Siphon matter stream when within gravitational tidal radius
      if (dist < bh.tidalRadius) {
        if (typeof window.emitSiphonParticle === 'function') {
          window.emitSiphonParticle(astroCenterX, astroCenterY, bh.x, bh.y);
        }

        const shearRatio = Math.max(0, Math.min(1, 1.0 - (dist - bh.radius) / (bh.tidalRadius - bh.radius)));
        window.dispatchEvent(
          new CustomEvent('cosmic-telemetry-update', {
            detail: {
              shearRatio,
              distanceText: dist < bh.radius * 1.1 ? 'EVENT HORIZON' : `${Math.round(dist)} KM`,
              statusText: dist < bh.radius ? 'SINGULARITY BREACH' : 'TIDAL STRETCH',
            },
          })
        );
      }

      // Check if user has put the avatar into the middle of the black hole
      if (dist < bh.radius * 0.95) {
        e.currentTarget.releasePointerCapture?.(e.pointerId);
        triggerBlackHoleDisintegration(bh.x, bh.y);
      }
    }
  };

  const handlePointerUp = (e) => {
    if (isDragging && !isDisintegratingRef.current) {
      setIsDragging(false);
      e.currentTarget.releasePointerCapture?.(e.pointerId);

      const p = physicsRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Check if user dropped avatar into the black hole
      const bh = getBlackHoleMetrics();
      if (bh) {
        const astroCenterX = p.x + 50;
        const astroCenterY = p.y + 50;
        const dist = Math.hypot(astroCenterX - bh.x, astroCenterY - bh.y);
        if (dist < bh.radius * 1.2) {
          triggerBlackHoleDisintegration(bh.x, bh.y);
          return;
        }
      }

      // If user released anywhere else in the central forbidden zone, steer immediately to nearest edge
      const midLeft = Math.max(75, w * 0.12);
      const midRight = Math.min(w - 140, w * 0.88);
      const midTop = 115;
      const midBottom = h - 140;

      if (p.x > midLeft && p.x < midRight && p.y > midTop && p.y < midBottom) {
        if (p.x < w / 2) {
          p.currentZone = 'LEFT';
          p.targetX = 45;
        } else {
          p.currentZone = 'RIGHT';
          p.targetX = w - 120;
        }
      } else {
        p.targetX = p.x;
      }

      p.targetY = p.y;
      p.waypointQueue = [];
      p.roamTimer = 3.5;
    }
  };

  const toggleDock = (e) => {
    e.stopPropagation();
    setIsDocked((prev) => !prev);
  };

  const activeGuide = SECTOR_GUIDES[currentSection] || SECTOR_GUIDES.intro;
  const currentMsg = activeGuide.messages[msgIndex % activeGuide.messages.length];
  const isRightSide = pos.x > (typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const isNearTop = pos.y < 165;

  // Determine stage-specific styling classes
  const isHidden = disintegrateStage === 'swallowed' || disintegrateStage === 'tunneling';
  const isCollapsing = disintegrateStage === 'collapsing';
  const isRespawning = disintegrateStage === 'respawning';

  return (
    <aside
      ref={containerRef}
      id="floating-astronaut-companion"
      className={`fixed z-40 transition-opacity duration-500 select-none ${
        isVisible && !isHidden ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${isBoosting ? 'wander-boost' : ''}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      aria-label="Astronaut Kian Cosmic Tour Companion"
    >
      {/* Quantum Aperture Warp Portal Ring at Respawn Location */}
      {isRespawning && (
        <span
          className="absolute -inset-6 rounded-full border-2 border-cyan-400 animate-ping pointer-events-none opacity-90 shadow-[0_0_35px_rgba(0,255,204,0.9)]"
          aria-hidden="true"
        />
      )}

      {/* Overhead Minimalist Aerospace Telemetry HUD Speech Capsule */}
      {!isDocked && !isCollapsing && !isHidden && (
        <div
          id="floating-speech-bubble"
          className={`absolute max-w-[280px] sm:max-w-[320px] flex flex-col items-start p-3.5 rounded-2xl bg-[#060814]/90 border border-white/10 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] ring-1 ring-white/5 transition-all duration-300 z-50 ${
            isNearTop ? 'top-[105%] mt-2' : 'bottom-[105%] mb-2'
          } ${isRightSide ? 'right-0' : 'left-0'} ${
            isPopping ? 'scale-105' : 'scale-100'
          }`}
          aria-live="polite"
        >
          {/* Top Telemetry Status Header */}
          <div className="flex items-center justify-between w-full pb-2 mb-2 border-b border-white/10 text-[10px] font-mono tracking-[0.2em] text-cyan-400 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)]" />
              <span className="text-white/80">{activeGuide.sector}</span>
            </span>
            <button
              type="button"
              className="w-4 h-4 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors text-xs cursor-pointer"
              onClick={toggleDock}
              title="Dock companion"
              aria-label="Dock companion"
            >
              ✕
            </button>
          </div>

          {/* Contextual Guidance Text */}
          <p className="text-left font-outfit text-xs text-white/90 leading-relaxed pt-0.5 whitespace-normal">
            {isRespawning
              ? 'Event horizon breached! Quantum tunneling re-materialization complete.'
              : currentMsg}
          </p>
        </div>
      )}

      {/* Docked Pill Mode if user minimized */}
      {isDocked && (
        <button
          type="button"
          className="px-3.5 py-1.5 rounded-full bg-[#060814]/90 border border-white/10 backdrop-blur-xl text-[11px] font-mono tracking-widest text-white/80 flex items-center gap-2 hover:border-cyan-400/40 hover:text-white transition-all shadow-[0_8px_25px_rgba(0,0,0,0.8)] cursor-pointer"
          onClick={toggleDock}
          title="Resume Tour"
          aria-label="Resume Tour"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)] animate-pulse" />
          <span>TOUR ACTIVE</span>
        </button>
      )}

      {/* Refined Aerospace EVA Astronaut Body & Vector Jetpack */}
      <div
        className={`floating-astro-body transition-all duration-300 ${
          isCollapsing
            ? 'scale-[0.1] rotate-[720deg] blur-[3px] brightness-[300%] opacity-20 duration-500'
            : isRespawning
            ? 'scale-100 rotate-0 blur-0 brightness-150 duration-700'
            : 'scale-100 rotate-0 blur-0 brightness-100'
        }`}
        style={{
          transform: isCollapsing
            ? 'scale(0.08) rotate(720deg)'
            : isRespawning
            ? 'scale(1.0) rotate(0deg)'
            : `rotate(${tilt}deg)`,
        }}
        onClick={handleAstroClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Astronaut Kian - Click to talk & flip, drag to reposition"
        title="Click to interact • Drag into black hole center to test disintegration!"
      >
        <svg
          className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)] drop-shadow-[0_0_15px_rgba(0,255,204,0.3)]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* 1. Visor Dual-Layer Relativistic Gold Shield Gradient */}
            <linearGradient id="astroVisorGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff8cc" />
              <stop offset="25%" stopColor="#ffc700" />
              <stop offset="60%" stopColor="#e08500" />
              <stop offset="85%" stopColor="#7a3b00" />
              <stop offset="100%" stopColor="#1a0e2e" />
            </linearGradient>

            {/* 2. Helmet Spherical Lighting Gradient */}
            <radialGradient id="astroHelmet3D" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#edf3fa" />
              <stop offset="80%" stopColor="#c2d3ea" />
              <stop offset="100%" stopColor="#7e96b8" />
            </radialGradient>

            {/* 3. Jetpack Carbon-Titanium Composite Chassis */}
            <linearGradient id="mmuChassisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#252d42" />
              <stop offset="50%" stopColor="#171c2b" />
              <stop offset="100%" stopColor="#0b0e18" />
            </linearGradient>

            {/* 4. Propellant Metallic Cryo-Tanks */}
            <linearGradient id="cryoTankGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#455470" />
              <stop offset="35%" stopColor="#9db4d4" />
              <stop offset="70%" stopColor="#5a6f91" />
              <stop offset="100%" stopColor="#222b3d" />
            </linearGradient>

            {/* 5. Titanium Nozzle Gradient */}
            <linearGradient id="nozzleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a2233" />
              <stop offset="50%" stopColor="#4e6285" />
              <stop offset="100%" stopColor="#1a2233" />
            </linearGradient>

            {/* 6. Ion Plasma Flame Outer Envelope */}
            <linearGradient id="ionFlameOuter" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#818cf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>

            {/* 7. Ion Core Electric Center Flame */}
            <linearGradient id="ionFlameCore" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#a5f3fc" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00ffcc" stopOpacity="0" />
            </linearGradient>

            {/* 8. Spacesuit Torso & Limbs */}
            <linearGradient id="suitFabricGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d5e3f5" />
              <stop offset="40%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#e2ecfa" />
              <stop offset="100%" stopColor="#adc3e0" />
            </linearGradient>

            {/* 9. Beacon Bloom Glow Filter */}
            <filter id="beaconBloom" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* LAYER 1: ZERO-G TETHER LIFELINE & PROPULSION WAKE */}
          <path
            d="M 22 55 C 8 62, -6 50, -18 60"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeDasharray="4 3"
            opacity="0.8"
          />

          {/* LAYER 2: TWIN GIMBAL ION THRUSTER JETS & SUPERSONIC MACH DIAMONDS */}
          <g className="left-engine-exhaust">
            <ellipse
              cx="26"
              cy={isBoosting || isDragging || isThrusting ? 82 : 74}
              rx={isBoosting || isDragging || isThrusting ? 5.5 : 4.0}
              ry={isBoosting || isDragging || isThrusting ? 18 : 10}
              fill="url(#ionFlameOuter)"
            />
            <ellipse
              cx="26"
              cy={isBoosting || isDragging || isThrusting ? 78 : 72}
              rx="2.2"
              ry={isBoosting || isDragging || isThrusting ? 11 : 6}
              fill="url(#ionFlameCore)"
            />
            <ellipse cx="26" cy="71" rx="1.5" ry="2" fill="#ffffff" opacity="0.9" />
          </g>

          <g className="right-engine-exhaust">
            <ellipse
              cx="74"
              cy={isBoosting || isDragging || isThrusting ? 82 : 74}
              rx={isBoosting || isDragging || isThrusting ? 5.5 : 4.0}
              ry={isBoosting || isDragging || isThrusting ? 18 : 10}
              fill="url(#ionFlameOuter)"
            />
            <ellipse
              cx="74"
              cy={isBoosting || isDragging || isThrusting ? 78 : 72}
              rx="2.2"
              ry={isBoosting || isDragging || isThrusting ? 11 : 6}
              fill="url(#ionFlameCore)"
            />
            <ellipse cx="74" cy="71" rx="1.5" ry="2" fill="#ffffff" opacity="0.9" />
          </g>

          {/* High-Velocity Ejected Ion Spark Particles */}
          <g opacity={isThrusting || isBoosting ? 1 : 0.6}>
            <circle cx="26" cy="88" r="1.5" fill="#38bdf8" className="animate-ping" />
            <circle cx="74" cy="88" r="1.5" fill="#38bdf8" className="animate-ping" />
            <circle cx="26" cy="95" r="1.1" fill="#00ffcc" />
            <circle cx="74" cy="95" r="1.1" fill="#00ffcc" />
          </g>

          {/* LAYER 3: MANNED MANEUVERING UNIT (MMU) JETPACK CHASSIS & TANKS */}
          <rect
            x="28"
            y="32"
            width="44"
            height="36"
            rx="8"
            fill="url(#mmuChassisGrad)"
            stroke="#475569"
            strokeWidth="1.8"
          />

          <line x1="36" y1="42" x2="64" y2="42" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <line x1="36" y1="47" x2="64" y2="47" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <line x1="36" y1="52" x2="64" y2="52" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

          {/* Left Tank */}
          <rect
            x="20"
            y="34"
            width="9"
            height="28"
            rx="4.5"
            fill="url(#cryoTankGrad)"
            stroke="#334155"
            strokeWidth="1.5"
          />
          <line x1="22" y1="36" x2="22" y2="58" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

          {/* Right Tank */}
          <rect
            x="71"
            y="34"
            width="9"
            height="28"
            rx="4.5"
            fill="url(#cryoTankGrad)"
            stroke="#334155"
            strokeWidth="1.5"
          />
          <line x1="73" y1="36" x2="73" y2="58" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

          {/* Bell De Laval Engine Nozzles */}
          <polygon points="23,62 29,62 31,68 21,68" fill="url(#nozzleGrad)" stroke="#64748b" strokeWidth="1" />
          <polygon points="71,62 77,62 79,68 69,68" fill="url(#nozzleGrad)" stroke="#64748b" strokeWidth="1" />

          {/* Lateral RCS Cold-Gas Steering Nozzles */}
          <circle cx="18" cy="33" r="2.5" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <circle cx="82" cy="33" r="2.5" fill="#1e293b" stroke="#64748b" strokeWidth="1" />

          {rcsFire.left && (
            <ellipse cx="14" cy="33" rx="4.5" ry="2" fill="#38bdf8" opacity="0.9" />
          )}

          {rcsFire.right && (
            <ellipse cx="86" cy="33" rx="4.5" ry="2" fill="#38bdf8" opacity="0.9" />
          )}

          {/* LAYER 4: SPACESUIT LEGS & PRESSURIZED MAGNETIC BOOTS */}
          <rect
            x="34"
            y="65"
            width="12"
            height="21"
            rx="5.5"
            fill="url(#suitFabricGrad)"
            stroke="#475569"
            strokeWidth="1.8"
          />
          <rect
            x="54"
            y="65"
            width="12"
            height="21"
            rx="5.5"
            fill="url(#suitFabricGrad)"
            stroke="#475569"
            strokeWidth="1.8"
          />

          <rect x="35" y="73" width="10" height="4" rx="1.5" fill="#334155" opacity="0.5" />
          <rect x="55" y="73" width="10" height="4" rx="1.5" fill="#334155" opacity="0.5" />

          <rect x="32" y="80" width="14" height="7.5" rx="3.5" fill="#1e293b" stroke="#475569" strokeWidth="1.2" />
          <rect x="54" y="80" width="14" height="7.5" rx="3.5" fill="#1e293b" stroke="#475569" strokeWidth="1.2" />

          {/* LAYER 5: SPACESUIT TORSO & TELEMETRY CHEST CONSOLE */}
          <rect
            x="32"
            y="35"
            width="36"
            height="35"
            rx="10"
            fill="url(#suitFabricGrad)"
            stroke="#475569"
            strokeWidth="2"
          />

          <rect
            x="40"
            y="43"
            width="20"
            height="14"
            rx="4"
            fill="#0f172a"
            stroke="#334155"
            strokeWidth="1.2"
          />
          <circle cx="45" cy="50" r="2.2" fill="#10b981" className="animate-pulse" />
          <circle cx="55" cy="50" r="2.2" fill="#00ffcc" className="animate-pulse" />

          <path d="M 36 36 L 40 50" stroke="#334155" strokeWidth="1.8" />
          <path d="M 64 36 L 60 50" stroke="#334155" strokeWidth="1.8" />

          {/* LAYER 6: ARTICULATED ARMS & PRESSURIZED GLOVES */}
          <path
            d="M 33 42 L 18 54 L 22 59 L 36 48 Z"
            fill="url(#suitFabricGrad)"
            stroke="#475569"
            strokeWidth="1.6"
          />
          <circle cx="19" cy="57" r="4.5" fill="#1e293b" />

          <g className="w-waving-arm">
            <path
              d="M 67 42 L 82 30 L 86 35 L 70 48 Z"
              fill="url(#suitFabricGrad)"
              stroke="#475569"
              strokeWidth="1.6"
            />
            <circle cx="84" cy="31" r="4.8" fill="#1e293b" />
            <path d="M 84 27 L 89 22 L 91 26 L 87 31" fill="#1e293b" />
          </g>

          {/* LAYER 7: 3D SPHERICAL HELMET & RELATIVISTIC GOLD VISOR */}
          <circle
            cx="50"
            cy="26"
            r="19"
            fill="url(#astroHelmet3D)"
            stroke="#475569"
            strokeWidth="2.5"
          />

          <ellipse
            cx="50"
            cy="26"
            rx="14"
            ry="11"
            fill="url(#astroVisorGold)"
            stroke="#b45309"
            strokeWidth="1.6"
          />

          <ellipse
            cx="46"
            cy="22"
            rx="6.5"
            ry="3.5"
            fill="rgba(255, 255, 255, 0.85)"
            transform="rotate(-15 46 22)"
          />

          <line
            x1="64"
            y1="16"
            x2="72"
            y2="7"
            stroke="#64748b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="73.5"
            cy="6"
            r="3.5"
            fill="#00ffcc"
            filter="url(#beaconBloom)"
            className="animate-pulse"
          />
        </svg>
      </div>
    </aside>
  );
}

export default FloatingAstro;
