import React, { useEffect, useRef } from 'react';

/**
 * AstroCursor Component
 * Interactive 3D Mini Astronaut cursor with microgravity flight dynamics,
 * inertial velocity pitch/roll/yaw banking, dynamic 3D visor specular glint reflection,
 * gravitational tidal shear proximity computation, spaghettification radial stretching/compression,
 * relativistic matter siphon particle emission, and autonomous black hole dive simulation.
 */
export function AstroCursor() {
  const cursorRef = useRef(null);
  const wrapperRef = useRef(null);
  const glintRef = useRef(null);

  useEffect(() => {
    const cursorEl = cursorRef.current;
    const astroWrapper = wrapperRef.current;
    const visorGlint = glintRef.current;
    if (!cursorEl || !astroWrapper) return;

    // Mobile / Touch Coarse Pointer Detection
    const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    let isHiddenOnMobile = isCoarse;

    // Initial safe orbit coordinates
    let hasUserMoved = false;
    const mouse = { x: window.innerWidth * 0.22, y: window.innerHeight * 0.32 };
    const pos = { x: window.innerWidth * 0.22, y: window.innerHeight * 0.32 };
    const vel = { x: 0, y: 0 };
    let moveTimeout = null;
    let isAutoDiving = false;
    let idleAngle = 0;

    // 3D Perspective Rotation & Momentum Tracking
    let currentPitch = 0; // rotateX (forward/backward pitch)
    let currentRoll = 0;  // rotateY (lateral banking/roll)
    let currentYaw = 0;   // rotateZ (heading yaw)
    let hasDisappearedIntoCenter = false;

    let animId = null;
    let diveRafId = null;
    let touchFadeTimeout = null;

    // Mouse Movement Handler
    const handleMouseMove = (e) => {
      hasUserMoved = true;
      if (isAutoDiving) return;

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      cursorEl.classList.add('moving');
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        cursorEl.classList.remove('moving');
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Interactive element hover detection
    const handleMouseEnter = () => cursorEl.classList.add('hovering');
    const handleMouseLeave = () => cursorEl.classList.remove('hovering');

    const attachHoverListeners = () => {
      const interactiveEls = document.querySelectorAll(
        'a, button, input, textarea, select, [role="tab"], [role="button"], [data-cursor-hover]'
      );
      interactiveEls.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
        el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      });
      return interactiveEls;
    };

    let interactiveElements = attachHoverListeners();

    // Re-bind hover listeners if DOM updates
    const domObserver = new MutationObserver(() => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      interactiveElements = attachHoverListeners();
    });

    domObserver.observe(document.body, { childList: true, subtree: true });

    // Autonomous Spaghettification Dive Simulation
    const triggerSpaghettiDive = () => {
      if (isAutoDiving) return;
      isAutoDiving = true;
      hasUserMoved = true;

      cursorEl.classList.add('force-visible');
      cursorEl.classList.add('moving');

      const bh = window.BlackHoleEngine?.getMetrics
        ? window.BlackHoleEngine.getMetrics()
        : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            radius: 80,
            tidalRadius: 360,
          };

      const startX = pos.x;
      const startY = pos.y;
      const targetX = bh.x;
      const targetY = bh.y;

      const startTime = performance.now();
      const duration = 2800; // 2.8 second dive into singularity

      const diveStep = (now) => {
        const elapsed = now - startTime;
        const diveProgress = Math.min(elapsed / duration, 1.0);

        // Ease-in quad towards singularity core
        const easeT = diveProgress * diveProgress;
        mouse.x = startX + (targetX - startX) * easeT;
        mouse.y = startY + (targetY - startY) * easeT;

        if (diveProgress < 1.0) {
          diveRafId = requestAnimationFrame(diveStep);
        } else {
          // Crossing event horizon!
          setTimeout(() => {
            // Quantum teleportation rebound to safe orbit
            mouse.x = targetX + (Math.random() > 0.5 ? 260 : -260);
            mouse.y = targetY - 220;
            isAutoDiving = false;

            setTimeout(() => {
              cursorEl.classList.remove('force-visible');
              cursorEl.classList.remove('moving');
            }, 3500);
          }, 750);
        }
      };

      diveRafId = requestAnimationFrame(diveStep);
    };

    window.addEventListener('trigger-spaghetti-demo', triggerSpaghettiDive);

    const testBtn = document.getElementById('spaghetti-demo-btn');
    if (testBtn) {
      testBtn.addEventListener('click', triggerSpaghettiDive);
    }

    // Touch Drag Interaction in Hero Singularity Section
    const heroSection = document.getElementById('intro');
    const handleTouchStart = (e) => {
      if (isAutoDiving) return;
      const touch = e.touches[0];
      if (!touch) return;
      hasUserMoved = true;
      cursorEl.classList.add('force-visible');
      cursorEl.classList.add('moving');
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
      clearTimeout(touchFadeTimeout);
    };

    const handleTouchMove = (e) => {
      if (isAutoDiving) return;
      const touch = e.touches[0];
      if (!touch) return;
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
      cursorEl.classList.add('moving');
    };

    const handleTouchEnd = () => {
      cursorEl.classList.remove('moving');
      clearTimeout(touchFadeTimeout);
      touchFadeTimeout = setTimeout(() => {
        if (!isAutoDiving) {
          cursorEl.classList.remove('force-visible');
        }
      }, 3000);
    };

    if (heroSection) {
      heroSection.addEventListener('touchstart', handleTouchStart, { passive: true });
      heroSection.addEventListener('touchmove', handleTouchMove, { passive: true });
      heroSection.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // Viewport Visibility for Hero Singularity
    let isIntroVisible = true;
    let introObserver = null;
    if ('IntersectionObserver' in window && heroSection) {
      introObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isIntroVisible = entry.isIntersecting;
          });
        },
        { threshold: 0.05 }
      );
      introObserver.observe(heroSection);
    }

    // Direct Telemetry DOM Elements cache
    const telShear = document.getElementById('tel-shear');
    const telShearFill = document.getElementById('tel-shear-fill');
    const telDistance = document.getElementById('tel-distance');
    const telStatus = document.getElementById('tel-status');

    // Main Cursor & Spaghettification Physics Loop
    const updatePhysics = () => {
      // Microgravity idle drift before initial mouse movement
      if (!hasUserMoved && !isAutoDiving) {
        idleAngle += 0.015;
        mouse.x = window.innerWidth * 0.22 + Math.cos(idleAngle) * 35;
        mouse.y = window.innerHeight * 0.32 + Math.sin(idleAngle * 0.8) * 20;
      }

      // Smooth Cursor Lerp (Microgravity Inertia)
      const lerpFactor = isAutoDiving ? 0.35 : 0.12;
      vel.x = (mouse.x - pos.x) * lerpFactor;
      vel.y = (mouse.y - pos.y) * lerpFactor;
      pos.x += vel.x;
      pos.y += vel.y;

      // 3D Physics Momentum & Microgravity Floating Dynamics
      const targetPitch = Math.max(-28, Math.min(28, -vel.y * 2.5));
      const targetRoll = Math.max(-28, Math.min(28, vel.x * 2.5));
      const targetYaw = Math.max(-24, Math.min(24, vel.x * 1.8));

      const now = Date.now();
      const wobbleX = Math.sin(now * 0.0018) * 3;
      const wobbleY = Math.cos(now * 0.0022) * 3;

      currentPitch += (targetPitch + wobbleX - currentPitch) * 0.14;
      currentRoll += (targetRoll + wobbleY - currentRoll) * 0.14;
      currentYaw += (targetYaw - currentYaw) * 0.14;

      // Position cursor on screen
      cursorEl.style.left = `${pos.x}px`;
      cursorEl.style.top = `${pos.y}px`;

      // Read Black Hole Metrics in Viewport
      const bh = window.BlackHoleEngine?.getMetrics
        ? window.BlackHoleEngine.getMetrics()
        : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            radius: 80,
            tidalRadius: 360,
          };

      const dx = bh.x - pos.x;
      const dy = bh.y - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Dynamic 3D Visor Glint Reflection
      if (visorGlint) {
        const normX = dx / (dist || 1);
        const normY = dy / (dist || 1);
        const glintX = Math.max(25, Math.min(37, 32 - normX * 4.2 - currentRoll * 0.08));
        const glintY = Math.max(12, Math.min(21, 17 - normY * 3.2 - currentPitch * 0.08));
        visorGlint.setAttribute('cx', glintX.toFixed(2));
        visorGlint.setAttribute('cy', glintY.toFixed(2));
        visorGlint.setAttribute('transform', `rotate(-15 ${glintX.toFixed(2)} ${glintY.toFixed(2)})`);
      }

      // SPAGHETTIFICATION PHYSICS COMPUTATION
      if (dist < bh.tidalRadius && dist > 5) {
        // Proximity Ratio [0.0 = edge of tidal radius, 1.0 = singularity]
        const proximity = Math.max(0, 1.0 - dist / bh.tidalRadius);
        const shearForce = Math.pow(proximity, 1.4); // Non-linear tidal gradient

        // Radial angle pointing toward singularity
        const angleToSingularity = Math.atan2(dy, dx);
        const alignAngle = angleToSingularity + Math.PI / 2;

        // Spaghettification Stretch & Compress (Radial elongation & transverse compression)
        const stretchY = 1.0 + shearForce * 3.6;
        const squeezeX = Math.max(0.35, 1.0 / (1.0 + shearForce * 1.6));

        // Gravitational suction pulls astronaut slightly inward
        const suction = Math.pow(proximity, 2.2) * 0.75;
        pos.x += (dx / dist) * suction;
        pos.y += (dy / dist) * suction;

        // Collapse into singularity boundary
        const disappearThreshold = bh.radius * 0.95;
        const centerSingularity = bh.radius * 0.35;

        let disappearProgress = 0;
        if (dist < disappearThreshold) {
          disappearProgress = Math.max(
            0,
            Math.min(1.0, 1.0 - (dist - centerSingularity) / (disappearThreshold - centerSingularity))
          );
        }

        const collapseX = Math.max(0.005, squeezeX * (1.0 - disappearProgress * 0.98));
        const collapseY = stretchY * (1.0 + disappearProgress * 1.8);

        // Apply 3D Spaghettified Transformation to Astronaut
        cursorEl.classList.add('spaghettified');
        astroWrapper.style.transform = `perspective(800px) rotate(${alignAngle}rad) rotateX(${(
          currentPitch * 0.4
        ).toFixed(2)}deg) rotateY(${(currentRoll * 0.4).toFixed(2)}deg) scale(${collapseX.toFixed(
          3
        )}, ${collapseY.toFixed(3)})`;

        // Event Horizon Crossing & Disappearance
        if (dist <= centerSingularity) {
          cursorEl.style.opacity = '0';
          cursorEl.classList.add('swallowed');

          if (!hasDisappearedIntoCenter) {
            hasDisappearedIntoCenter = true;

            // Trigger Hawking Radiation Flash
            if (window.BlackHoleEngine?.triggerHawkingFlash) {
              window.BlackHoleEngine.triggerHawkingFlash();
            }
            const flare = document.getElementById('hawking-radiation-flash');
            if (flare) {
              flare.classList.remove('flare');
              void flare.offsetWidth; // Force reflow
              flare.classList.add('flare');
              setTimeout(() => flare.classList.remove('flare'), 650);
            }
            window.dispatchEvent(new CustomEvent('trigger-hawking-flash'));

            // Burst of relativistic matter particles
            if (window.emitSiphonParticle) {
              for (let i = 0; i < 24; i++) {
                window.emitSiphonParticle(pos.x, pos.y, bh.x, bh.y);
              }
            }
          }
        } else if (dist < disappearThreshold) {
          const smoothOpacity = Math.max(0, 1.0 - Math.pow(disappearProgress, 1.35));
          cursorEl.style.opacity = smoothOpacity.toFixed(3);
          cursorEl.classList.remove('swallowed');
          hasDisappearedIntoCenter = false;
        } else {
          cursorEl.style.opacity = '1';
          cursorEl.classList.remove('swallowed');
          hasDisappearedIntoCenter = false;
        }

        // Relativistic Matter Siphon Stream Generation
        if (isIntroVisible && shearForce > 0.08 && dist > centerSingularity && window.emitSiphonParticle) {
          const spawnCount = Math.floor(shearForce * 4) + 1;
          for (let i = 0; i < spawnCount; i++) {
            window.emitSiphonParticle(pos.x, pos.y, bh.x, bh.y);
          }
        }

        // Modulate Audio Pitch / Gravitational Shear Hook
        if (window.setCosmicAudioShear) {
          window.setCosmicAudioShear(shearForce);
        } else if (window.CosmicAudio?.setGravitationalPitch) {
          window.CosmicAudio.setGravitationalPitch(shearForce);
        }
        window.dispatchEvent(
          new CustomEvent('cosmic-audio-shear', { detail: { shear: shearForce } })
        );

        // Update Telemetry HUD
        const kmDist = Math.round(dist * 12.5);
        let distText = `${kmDist} KM`;
        let statText = shearForce > 0.5 ? 'EXTREME TIDAL SIPHON' : 'SPAGHETTIFYING';

        if (dist <= centerSingularity) {
          distText = 'SINGULARITY CORE (0 KM)';
          statText = 'DISAPPEARED // INGESTED';
        } else if (dist < bh.radius * 0.95) {
          distText = `CRITICAL (${kmDist} KM)`;
          statText = 'EVENT HORIZON COLLAPSE';
        }

        const shearPct = (shearForce * 100).toFixed(1);
        if (telShear) telShear.textContent = `${shearPct}%`;
        if (telShearFill) telShearFill.style.width = `${shearPct}%`;
        if (telDistance) telDistance.textContent = distText;
        if (telStatus) {
          telStatus.textContent = statText;
          telStatus.classList.add('active');
        }

        window.dispatchEvent(
          new CustomEvent('cosmic-telemetry-update', {
            detail: {
              shearRatio: shearForce,
              distanceText: distText,
              statusText: statText,
            },
          })
        );
      } else {
        // Normal 3D Microgravity Flight Dynamics
        cursorEl.classList.remove('spaghettified');
        cursorEl.classList.remove('swallowed');
        cursorEl.style.opacity = '1';
        hasDisappearedIntoCenter = false;

        astroWrapper.style.transform = `perspective(800px) rotateX(${currentPitch.toFixed(
          2
        )}deg) rotateY(${currentRoll.toFixed(2)}deg) rotateZ(${currentYaw.toFixed(2)}deg) scale(1, 1)`;

        // Reset Audio Gravitational Shear
        if (window.setCosmicAudioShear) {
          window.setCosmicAudioShear(0);
        } else if (window.CosmicAudio?.setGravitationalPitch) {
          window.CosmicAudio.setGravitationalPitch(0);
        }
        window.dispatchEvent(new CustomEvent('cosmic-audio-shear', { detail: { shear: 0 } }));

        // Reset Telemetry HUD
        if (telShear) telShear.textContent = '0.00%';
        if (telShearFill) telShearFill.style.width = '0%';
        if (telDistance) telDistance.textContent = 'SAFE ORBIT';
        if (telStatus) {
          telStatus.textContent = 'DORMANT';
          telStatus.classList.remove('active');
        }

        window.dispatchEvent(
          new CustomEvent('cosmic-telemetry-update', {
            detail: {
              shearRatio: 0,
              distanceText: 'SAFE ORBIT',
              statusText: 'DORMANT',
            },
          })
        );
      }

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);

    return () => {
      cancelAnimationFrame(animId);
      if (diveRafId) cancelAnimationFrame(diveRafId);
      clearTimeout(moveTimeout);
      clearTimeout(touchFadeTimeout);

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('trigger-spaghetti-demo', triggerSpaghettiDive);
      if (testBtn) testBtn.removeEventListener('click', triggerSpaghettiDive);

      if (heroSection) {
        heroSection.removeEventListener('touchstart', handleTouchStart);
        heroSection.removeEventListener('touchmove', handleTouchMove);
        heroSection.removeEventListener('touchend', handleTouchEnd);
      }

      if (introObserver) introObserver.disconnect();
      domObserver.disconnect();

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      id="astronaut-cursor"
      ref={cursorRef}
      className="astronaut-cursor fixed pointer-events-none z-50 transition-opacity"
      aria-hidden="true"
    >
      <div ref={wrapperRef} className="astronaut-wrapper">
        {/* Floating Tether Line */}
        <svg className="astro-tether" viewBox="0 0 40 80" fill="none" aria-hidden="true">
          <path
            d="M20 75 Q10 45 22 25 T20 0"
            stroke="rgba(180, 215, 255, 0.45)"
            strokeWidth="1.8"
            strokeDasharray="3 3"
          />
        </svg>

        {/* Jetpack Thruster Flame Effect */}
        <div className="thruster-flame" aria-hidden="true" />

        {/* Mini Astronaut Vector with 3D Shading */}
        <svg
          className="astro-body"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Backpack / Life Support Unit (3D Depth) */}
          <rect
            x="18"
            y="20"
            width="28"
            height="26"
            rx="6"
            fill="url(#backpack3dGrad)"
            stroke="#7e8fb8"
            strokeWidth="1.8"
          />
          <circle cx="24" cy="26" r="2.5" fill="#00ffff" />
          <circle cx="40" cy="26" r="2.5" fill="#ffaa00" />
          <line x1="22" y1="38" x2="42" y2="38" stroke="#445070" strokeWidth="2" />

          {/* Oxygen Tanks (3D Metallic Cylinder Shading) */}
          <rect
            x="15"
            y="24"
            width="5"
            height="18"
            rx="2.5"
            fill="url(#tank3dGrad)"
            stroke="#4a597a"
            strokeWidth="1"
          />
          <rect
            x="44"
            y="24"
            width="5"
            height="18"
            rx="2.5"
            fill="url(#tank3dGrad)"
            stroke="#4a597a"
            strokeWidth="1"
          />

          {/* Space Suit Legs (3D Shaded) */}
          <rect
            x="22"
            y="44"
            width="8"
            height="14"
            rx="4"
            fill="url(#legs3dGrad)"
            stroke="#465472"
            strokeWidth="1.5"
          />
          <rect
            x="34"
            y="44"
            width="8"
            height="14"
            rx="4"
            fill="url(#legs3dGrad)"
            stroke="#465472"
            strokeWidth="1.5"
          />
          {/* Boots */}
          <rect
            x="20"
            y="54"
            width="10"
            height="5"
            rx="2.5"
            fill="#20293d"
            stroke="#465472"
            strokeWidth="1"
          />
          <rect
            x="34"
            y="54"
            width="10"
            height="5"
            rx="2.5"
            fill="#20293d"
            stroke="#465472"
            strokeWidth="1"
          />

          {/* Space Suit Torso (3D Chest Volume) */}
          <rect
            x="21"
            y="22"
            width="22"
            height="24"
            rx="7"
            fill="url(#torso3dGrad)"
            stroke="#4a597a"
            strokeWidth="1.5"
          />
          <rect x="26" y="28" width="12" height="10" rx="3" fill="#182030" />
          <circle cx="29" cy="33" r="1.5" fill="#00ffaa" />
          <circle cx="35" cy="33" r="1.5" fill="#ff3366" />

          {/* Space Suit Arms */}
          <path
            d="M21 26 L12 36 L15 39 L22 30 Z"
            fill="url(#legs3dGrad)"
            stroke="#4a597a"
            strokeWidth="1.2"
          />
          <circle cx="13" cy="38" r="3" fill="#20293d" />
          <path
            d="M43 26 L52 36 L49 39 L42 30 Z"
            fill="url(#legs3dGrad)"
            stroke="#4a597a"
            strokeWidth="1.2"
          />
          <circle cx="51" cy="38" r="3" fill="#20293d" />

          {/* Astronaut Helmet (3D Spherical Volume) */}
          <circle cx="32" cy="17" r="13" fill="url(#helmet3dGrad)" stroke="#4a597a" strokeWidth="2" />

          {/* Gold Visor with Galactic Mirror Reflection */}
          <ellipse
            id="astro-visor-shell"
            cx="32"
            cy="17"
            rx="9.5"
            ry="7.5"
            fill="url(#visorGoldGrad)"
            stroke="#c48b26"
            strokeWidth="1.2"
          />

          {/* Dynamic 3D Visor Specular Reflection Glint */}
          <ellipse
            ref={glintRef}
            id="astro-visor-glint"
            cx="29"
            cy="14.5"
            rx="4.5"
            ry="2.5"
            fill="rgba(255, 255, 255, 0.85)"
            transform="rotate(-15 29 14.5)"
          />

          {/* Helmet Comm Antenna */}
          <line x1="42" y1="11" x2="47" y2="5" stroke="#7e8fb8" strokeWidth="2" />
          <circle cx="48" cy="4" r="2" fill="#ff0055" />

          {/* 3D Gradients */}
          <defs>
            <linearGradient id="visorGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff099" />
              <stop offset="25%" stopColor="#ffd700" />
              <stop offset="55%" stopColor="#ff9900" />
              <stop offset="85%" stopColor="#6b3a00" />
              <stop offset="100%" stopColor="#190e2e" />
            </linearGradient>

            <radialGradient id="helmet3dGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f0f5fc" />
              <stop offset="85%" stopColor="#c5d5ea" />
              <stop offset="100%" stopColor="#8ba2c4" />
            </radialGradient>

            <linearGradient id="torso3dGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4e2f5" />
              <stop offset="35%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#edf3fc" />
              <stop offset="100%" stopColor="#b8cde8" />
            </linearGradient>

            <linearGradient id="tank3dGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#465472" />
              <stop offset="40%" stopColor="#a8bddb" />
              <stop offset="70%" stopColor="#657b9f" />
              <stop offset="100%" stopColor="#2d374d" />
            </linearGradient>

            <linearGradient id="backpack3dGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2b3350" />
              <stop offset="50%" stopColor="#1e2238" />
              <stop offset="100%" stopColor="#111526" />
            </linearGradient>

            <linearGradient id="legs3dGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c7daf0" />
              <stop offset="45%" stopColor="#f2f7fd" />
              <stop offset="100%" stopColor="#a8c1e2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Dynamic Siphon Particle Stream Anchor */}
      <div id="spaghetti-tail" className="spaghetti-tail" aria-hidden="true" />
    </div>
  );
}

export default AstroCursor;
