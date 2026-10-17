/**
 * ============================================================================
 * KIAN RANCES CAGADAS // MINI ASTRONAUT CURSOR & SPAGHETTIFICATION ENGINE
 * Features:
 *  - Interactive Mini Astronaut in Microgravity
 *  - Inertial Physics, Thruster Jet Ignition & Floating Tether Dynamics
 *  - Gravitational Singularity Proximity & Tidal Shear Computation
 *  - Spaghettification Effect: Radial Elongation & Transverse Compression
 *  - Matter Siphon Stream: Ionized Matter Ripped into Black Hole Event Horizon
 *  - Live Gravitational Telemetry HUD Integration
 *  - Autonomous "Test Spaghettification" Dive Simulator
 * ============================================================================
 */

(function () {
    'use strict';

    const cursorEl = document.getElementById('astronaut-cursor');
    const siphonCanvas = document.getElementById('siphon-canvas');
    if (!cursorEl || !siphonCanvas) return;

    const siphonCtx = siphonCanvas.getContext('2d');
    const astroWrapper = cursorEl.querySelector('.astronaut-wrapper');
    const visorGlint = document.getElementById('astro-visor-glint');

    // Telemetry HUD Elements
    const telShear = document.getElementById('tel-shear');
    const telShearFill = document.getElementById('tel-shear-fill');
    const telDistance = document.getElementById('tel-distance');
    const telStatus = document.getElementById('tel-status');
    const testBtn = document.getElementById('spaghetti-demo-btn');

    // Cursor Coordinates: Spawn in safe orbit initially, not stuck inside the singularity!
    let hasUserMoved = false;
    let mouse = { x: window.innerWidth * 0.22, y: window.innerHeight * 0.32 };
    let pos = { x: window.innerWidth * 0.22, y: window.innerHeight * 0.32 };
    let vel = { x: 0, y: 0 };
    let lastMouse = { x: mouse.x, y: mouse.y };
    let isMoving = false;
    let moveTimeout = null;
    let isAutoDiving = false;
    let diveProgress = 0;
    let idleAngle = 0;

    // 3D Perspective Rotation & Momentum Tracking
    let currentPitch = 0; // rotateX (forward/backward pitch)
    let currentRoll = 0;  // rotateY (lateral banking/roll)
    let currentYaw = 0;   // rotateZ (heading yaw)
    let hasDisappearedIntoCenter = false;

    // Siphon Matter Particles
    const siphonParticles = [];
    const MAX_SIPHON_PARTICLES = 120;

    // Siphon Particle Class
    class SiphonParticle {
        constructor(startX, startY, bhX, bhY) {
            this.x = startX;
            this.y = startY;
            this.bhX = bhX;
            this.bhY = bhY;
            
            // Initial tangent & inward velocity
            const angleToCenter = Math.atan2(bhY - startY, bhX - startX);
            const tangentAngle = angleToCenter + (Math.PI / 2) * (Math.random() > 0.5 ? 1 : -1);
            const speed = 0.5 + Math.random() * 1.1;

            this.vx = Math.cos(angleToCenter) * speed + Math.cos(tangentAngle) * (Math.random() * 0.5);
            this.vy = Math.sin(angleToCenter) * speed + Math.sin(tangentAngle) * (Math.random() * 0.5);
            
            this.life = 1.0;
            this.decay = 0.005 + Math.random() * 0.008;
            this.size = 1.5 + Math.random() * 2.5;
            
            // High-energy relativistic hues: Gold, Orange, Cyan, White
            const colors = [
                'rgba(255, 230, 100, ',
                'rgba(255, 120, 40, ',
                'rgba(93, 230, 255, ',
                'rgba(255, 60, 90, ',
                'rgba(255, 255, 255, '
            ];
            this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            // Gravitational pull toward black hole singularity
            const dx = this.bhX - this.x;
            const dy = this.bhY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 15) {
                this.life = 0; // Siphoned into singularity!
                return;
            }

            // Inward gravitational acceleration ~ 1 / dist (very slow, graceful drift)
            const gravForce = Math.min(5.0, 95.0 / Math.max(dist, 10.0));
            this.vx += (dx / dist) * gravForce * 0.04;
            this.vy += (dy / dist) * gravForce * 0.04;

            // Spiral swirl damping
            this.vx *= 0.985;
            this.vy *= 0.985;

            this.x += this.vx;
            this.y += this.vy;
            this.life -= this.decay;
        }

        draw(ctx) {
            if (this.life <= 0) return;
            ctx.fillStyle = `${this.colorBase}${this.life})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2);
            ctx.fill();

            // Siphon glow
            ctx.shadowColor = 'rgba(255, 140, 40, 0.8)';
            ctx.shadowBlur = 8;
        }
    }

    // Resize Siphon Canvas
    function resizeCanvas() {
        siphonCanvas.width = window.innerWidth;
        siphonCanvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track Mouse Coordinates
    window.addEventListener('mousemove', function (e) {
        hasUserMoved = true;
        if (isAutoDiving) return;
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        // Thruster flame active while cursor moves
        cursorEl.classList.add('moving');
        isMoving = true;
        clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => {
            cursorEl.classList.remove('moving');
            isMoving = false;
        }, 150);
    }, { passive: true });

    // Interactive element hover detection
    function setupHoverEffects() {
        document.querySelectorAll('a, button, input, textarea, [role="tab"]').forEach(el => {
            el.addEventListener('mouseenter', () => cursorEl.classList.add('hovering'), { passive: true });
            el.addEventListener('mouseleave', () => cursorEl.classList.remove('hovering'), { passive: true });
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupHoverEffects);
    } else {
        setupHoverEffects();
    }

    // Autonomous Spaghettification Dive Simulation
    function triggerSpaghettiDive() {
        if (isAutoDiving) return;
        isAutoDiving = true;
        hasUserMoved = true;
        diveProgress = 0;

        // Force astronaut visible on touch / mobile devices during test dive
        cursorEl.classList.add('force-visible');
        cursorEl.classList.add('moving');

        const metrics = window.BlackHoleEngine.getMetrics();
        const startX = pos.x;
        const startY = pos.y;
        const targetX = metrics.x;
        const targetY = metrics.y;

        const startTime = performance.now();
        const duration = 2800; // 2.8 seconds dive

        function diveStep(now) {
            const elapsed = now - startTime;
            diveProgress = Math.min(elapsed / duration, 1.0);

            // Ease in quad towards singularity
            const t = diveProgress;
            const easeT = t * t;

            mouse.x = startX + (targetX - startX) * easeT;
            mouse.y = startY + (targetY - startY) * easeT;

            if (diveProgress < 1.0) {
                requestAnimationFrame(diveStep);
            } else {
                // Crossing event horizon!
                setTimeout(() => {
                    // Quantum teleportation rebound
                    mouse.x = targetX + (Math.random() > 0.5 ? 260 : -260);
                    mouse.y = targetY - 220;
                    isAutoDiving = false;
                    // Maintain visibility in safe orbit momentarily before mobile gentle fade
                    setTimeout(() => {
                        cursorEl.classList.remove('force-visible');
                        cursorEl.classList.remove('moving');
                    }, 3500);
                }, 750);
            }
        }

        requestAnimationFrame(diveStep);
    }

    if (testBtn) {
        testBtn.addEventListener('click', triggerSpaghettiDive);
    }

    // Touch Drag Interaction in Hero Singularity Section
    const heroSection = document.getElementById('intro');
    if (heroSection) {
        let touchFadeTimeout = null;

        heroSection.addEventListener('touchstart', function (e) {
            if (isAutoDiving) return;
            const touch = e.touches[0];
            if (!touch) return;
            hasUserMoved = true;
            cursorEl.classList.add('force-visible');
            cursorEl.classList.add('moving');
            mouse.x = touch.clientX;
            mouse.y = touch.clientY;
            clearTimeout(touchFadeTimeout);
        }, { passive: true });

        heroSection.addEventListener('touchmove', function (e) {
            if (isAutoDiving) return;
            const touch = e.touches[0];
            if (!touch) return;
            mouse.x = touch.clientX;
            mouse.y = touch.clientY;
            cursorEl.classList.add('moving');
        }, { passive: true });

        heroSection.addEventListener('touchend', function () {
            cursorEl.classList.remove('moving');
            clearTimeout(touchFadeTimeout);
            touchFadeTimeout = setTimeout(() => {
                if (!isAutoDiving) {
                    cursorEl.classList.remove('force-visible');
                }
            }, 3000);
        }, { passive: true });
    }

    // Viewport Intersection Observation for Siphon Particles
    let isIntroVisible = true;
    if ('IntersectionObserver' in window && heroSection) {
        const introObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isIntroVisible = entry.isIntersecting;
            });
        }, { threshold: 0.05 });
        introObserver.observe(heroSection);
    }

    // Main Cursor & Spaghettification Physics Loop
    function updatePhysics() {
        // Idle microgravity orbit before user has moved their mouse
        if (!hasUserMoved && !isAutoDiving) {
            idleAngle += 0.015;
            mouse.x = (window.innerWidth * 0.22) + Math.cos(idleAngle) * 35;
            mouse.y = (window.innerHeight * 0.32) + Math.sin(idleAngle * 0.8) * 20;
        }

        // Smooth Cursor Lerp (Microgravity Inertia)
        const lerpFactor = isAutoDiving ? 0.35 : 0.22;
        vel.x = (mouse.x - pos.x) * lerpFactor;
        vel.y = (mouse.y - pos.y) * lerpFactor;
        pos.x += vel.x;
        pos.y += vel.y;

        // 3D Physics Momentum & Microgravity Floating Dynamics
        const targetPitch = Math.max(-28, Math.min(28, -vel.y * 2.5));
        const targetRoll = Math.max(-28, Math.min(28, vel.x * 2.5));
        const targetYaw = Math.max(-24, Math.min(24, vel.x * 1.8));

        const wobbleX = Math.sin(Date.now() * 0.0018) * 3;
        const wobbleY = Math.cos(Date.now() * 0.0022) * 3;

        currentPitch += (targetPitch + wobbleX - currentPitch) * 0.14;
        currentRoll += (targetRoll + wobbleY - currentRoll) * 0.14;
        currentYaw += (targetYaw - currentYaw) * 0.14;

        // Position cursor on screen
        cursorEl.style.left = `${pos.x}px`;
        cursorEl.style.top = `${pos.y}px`;

        // Black Hole Metrics in Viewport
        const bh = window.BlackHoleEngine ? window.BlackHoleEngine.getMetrics() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            radius: 80,
            tidalRadius: 360
        };

        const dx = bh.x - pos.x;
        const dy = bh.y - pos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Dynamic 3D Visor Glint Reflection (reflects accretion disk & ambient light)
        if (visorGlint) {
            const normX = dx / (dist || 1);
            const normY = dy / (dist || 1);
            const glintX = Math.max(25, Math.min(37, 32 - normX * 4.2 - currentRoll * 0.08));
            const glintY = Math.max(12, Math.min(21, 17 - normY * 3.2 - currentPitch * 0.08));
            visorGlint.setAttribute('cx', glintX.toFixed(2));
            visorGlint.setAttribute('cy', glintY.toFixed(2));
            visorGlint.setAttribute('transform', `rotate(-15 ${glintX.toFixed(2)} ${glintY.toFixed(2)})`);
        }

        // Clear Siphon Canvas
        siphonCtx.clearRect(0, 0, siphonCanvas.width, siphonCanvas.height);
        siphonCtx.shadowBlur = 0;

        // SPAGHETTIFICATION PHYSICS COMPUTATION:
        if (dist < bh.tidalRadius && dist > 5) {
            // Proximity Ratio [0.0 = edge of tidal radius, 1.0 = singularity]
            const proximity = Math.max(0, 1.0 - (dist / bh.tidalRadius));
            const shearForce = Math.pow(proximity, 1.4); // Non-linear tidal gradient

            // Tangent & Radial Angle pointing toward the Singularity
            const angleToSingularity = Math.atan2(dy, dx);
            // Default astronaut orientation is vertical; rotate to align with singularity
            const alignAngle = angleToSingularity + Math.PI / 2;

            // Spaghettification Stretch & Compress (Conservation of Volume)
            // Length stretches radially toward black hole, width narrows gracefully
            const stretchY = 1.0 + shearForce * 3.6;
            const squeezeX = Math.max(0.35, 1.0 / (1.0 + shearForce * 1.6));

            // Gravitational suction pulls astronaut slightly inward (slow and gentle)
            const suction = Math.pow(proximity, 2.2) * 0.75;
            pos.x += (dx / dist) * suction;
            pos.y += (dy / dist) * suction;

            // DISAPPEAR EFFECT AS CURSOR APPROACHES & ENTERS CENTER OF BLACK HOLE:
            const disappearThreshold = bh.radius * 0.95; // Radius where singular fade & collapse begins
            const centerSingularity = bh.radius * 0.35;   // Core boundary where cursor completely disappears

            let disappearProgress = 0;
            if (dist < disappearThreshold) {
                disappearProgress = Math.max(0, Math.min(1.0, 1.0 - (dist - centerSingularity) / (disappearThreshold - centerSingularity)));
            }

            // Extreme 3D collapse scale into singularity point
            const collapseX = Math.max(0.005, squeezeX * (1.0 - disappearProgress * 0.98));
            const collapseY = stretchY * (1.0 + disappearProgress * 1.8);

            // Apply 3D Spaghettified Transformation to Astronaut
            cursorEl.classList.add('spaghettified');
            astroWrapper.style.transform = `perspective(800px) rotate(${alignAngle}rad) rotateX(${currentPitch * 0.4}deg) rotateY(${currentRoll * 0.4}deg) scale(${collapseX.toFixed(3)}, ${collapseY.toFixed(3)})`;

            // Disappear Opacity Calculation
            if (dist <= centerSingularity) {
                // Completely disappeared inside the center of the black hole
                cursorEl.style.opacity = '0';
                cursorEl.classList.add('swallowed');

                // Trigger Quantum Hawking Radiation Flare Burst on crossing
                if (!hasDisappearedIntoCenter) {
                    hasDisappearedIntoCenter = true;
                    const flare = document.getElementById('hawking-radiation-flash');
                    if (flare) {
                        flare.classList.remove('flare');
                        void flare.offsetWidth; // Force CSS reflow
                        flare.classList.add('flare');
                        setTimeout(() => flare.classList.remove('flare'), 650);
                    }

                    // Relativistic matter flash into event horizon
                    for (let i = 0; i < 24; i++) {
                        if (siphonParticles.length < MAX_SIPHON_PARTICLES) {
                            siphonParticles.push(new SiphonParticle(pos.x, pos.y, bh.x, bh.y));
                        }
                    }
                }
            } else if (dist < disappearThreshold) {
                // Smooth progressive disappearance as it gets closer to center
                const smoothOpacity = Math.max(0, 1.0 - Math.pow(disappearProgress, 1.35));
                cursorEl.style.opacity = smoothOpacity.toFixed(3);
                cursorEl.classList.remove('swallowed');
                hasDisappearedIntoCenter = false;
            } else {
                cursorEl.style.opacity = '1';
                cursorEl.classList.remove('swallowed');
                hasDisappearedIntoCenter = false;
            }

            // Siphon Matter Generation (Ionized plasma ripped into event horizon)
            if (isIntroVisible && shearForce > 0.08 && dist > centerSingularity) {
                const spawnCount = Math.floor(shearForce * 4) + 1;
                for (let i = 0; i < spawnCount; i++) {
                    if (siphonParticles.length < MAX_SIPHON_PARTICLES) {
                        siphonParticles.push(new SiphonParticle(pos.x, pos.y, bh.x, bh.y));
                    }
                }

                // Web Audio Synthesizer Pitch Modulation Hook
                if (window.CosmicAudio && window.CosmicAudio.setGravitationalPitch) {
                    window.CosmicAudio.setGravitationalPitch(shearForce);
                }
            }

            // Update Telemetry HUD
            if (telShear && telDistance && telStatus) {
                const shearPct = (shearForce * 100).toFixed(1);
                telShear.textContent = `${shearPct}%`;
                if (telShearFill) telShearFill.style.width = `${shearPct}%`;
                
                const kmDist = Math.round(dist * 12.5);
                if (dist <= centerSingularity) {
                    telDistance.textContent = 'SINGULARITY CORE (0 KM)';
                    telStatus.textContent = 'DISAPPEARED // INGESTED';
                    telStatus.classList.add('active');
                } else if (dist < bh.radius * 0.95) {
                    telDistance.textContent = `CRITICAL (${kmDist} KM)`;
                    telStatus.textContent = 'EVENT HORIZON COLLAPSE';
                    telStatus.classList.add('active');
                } else {
                    telDistance.textContent = `${kmDist} KM`;
                    telStatus.textContent = shearForce > 0.5 ? 'EXTREME TIDAL SIPHON' : 'SPAGHETTIFYING';
                    telStatus.classList.add('active');
                }
            }

        } else {
            // Normal 3D Microgravity Flight Dynamics (Pitch, Roll, Yaw)
            cursorEl.classList.remove('spaghettified');
            cursorEl.classList.remove('swallowed');
            cursorEl.style.opacity = '1';
            hasDisappearedIntoCenter = false;

            astroWrapper.style.transform = `perspective(800px) rotateX(${currentPitch.toFixed(2)}deg) rotateY(${currentRoll.toFixed(2)}deg) rotateZ(${currentYaw.toFixed(2)}deg) scale(1, 1)`;

            // Reset Audio Gravitational Pitch
            if (window.CosmicAudio && window.CosmicAudio.setGravitationalPitch) {
                window.CosmicAudio.setGravitationalPitch(0);
            }

            // Reset Telemetry HUD
            if (telShear && telDistance && telStatus) {
                telShear.textContent = '0.00%';
                if (telShearFill) telShearFill.style.width = '0%';
                telDistance.textContent = 'SAFE ORBIT';
                telStatus.textContent = 'DORMANT';
                telStatus.classList.remove('active');
            }
        }

        // Update and Render Siphon Particles
        for (let i = siphonParticles.length - 1; i >= 0; i--) {
            const p = siphonParticles[i];
            p.update();
            p.draw(siphonCtx);
            if (p.life <= 0) {
                siphonParticles.splice(i, 1);
            }
        }

        requestAnimationFrame(updatePhysics);
    }

    // Start Cursor Physics Loop
    requestAnimationFrame(updatePhysics);

})();
