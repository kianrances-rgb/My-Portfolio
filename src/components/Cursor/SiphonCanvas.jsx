import React, { useEffect, useRef } from 'react';

/**
 * SiphonParticle
 * Represents ionized plasma and relativistic matter particles torn from
 * the astronaut and accelerated along geodesic spiral trajectories into
 * the gravitational singularity of the black hole.
 */
class SiphonParticle {
  constructor(startX, startY, bhX, bhY) {
    this.x = startX;
    this.y = startY;
    this.bhX = bhX;
    this.bhY = bhY;

    // Initial tangent and inward velocity
    const angleToCenter = Math.atan2(bhY - startY, bhX - startX);
    const tangentAngle = angleToCenter + (Math.PI / 2) * (Math.random() > 0.5 ? 1 : -1);
    const speed = 0.5 + Math.random() * 1.1;

    this.vx = Math.cos(angleToCenter) * speed + Math.cos(tangentAngle) * (Math.random() * 0.5);
    this.vy = Math.sin(angleToCenter) * speed + Math.sin(tangentAngle) * (Math.random() * 0.5);

    this.life = 1.0;
    this.decay = 0.005 + Math.random() * 0.008;
    this.size = 1.5 + Math.random() * 2.5;

    // Relativistic glowing colors: Gold, Orange, Cyan, Magenta, White
    const colors = [
      'rgba(255, 230, 100, ',
      'rgba(255, 120, 40, ',
      'rgba(93, 230, 255, ',
      'rgba(255, 60, 90, ',
      'rgba(255, 255, 255, ',
    ];
    this.colorBase = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    const dx = this.bhX - this.x;
    const dy = this.bhY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 15) {
      this.life = 0; // Ingested into the singularity core
      return;
    }

    // Inward gravitational acceleration ~ 1 / dist
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
    const alpha = Math.max(0, this.life);
    ctx.save();
    ctx.shadowColor = 'rgba(255, 140, 40, 0.8)';
    ctx.shadowBlur = 8;
    ctx.fillStyle = `${this.colorBase}${alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.1, this.size * alpha), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

/**
 * SiphonCanvas Component
 * Fullscreen high-performance 2D canvas that renders relativistic matter siphon
 * particle streams during tidal spaghettification.
 * Handles resize, DPR scaling, and registers the global `window.emitSiphonParticle` API.
 */
export function SiphonCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles = [];
    const MAX_SIPHON_PARTICLES = 160;
    let animId = null;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Resize canvas with DPR scaling
    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Global emission API matching cursor.js
    const emitParticle = (startX, startY, bhX, bhY) => {
      if (particles.length < MAX_SIPHON_PARTICLES) {
        particles.push(new SiphonParticle(startX, startY, bhX, bhY));
      }
    };

    window.emitSiphonParticle = emitParticle;

    // Listen to custom event for decoupled emissions
    const handleEmitEvent = (e) => {
      if (!e.detail) return;
      const { startX, startY, bhX, bhY } = e.detail;
      if (typeof startX === 'number' && typeof startY === 'number') {
        const targetX = typeof bhX === 'number' ? bhX : window.innerWidth / 2;
        const targetY = typeof bhY === 'number' ? bhY : window.innerHeight / 2;
        emitParticle(startX, startY, targetX, targetY);
      }
    };

    window.addEventListener('emit-siphon-particle', handleEmitEvent);

    // Animation Render Loop
    const render = () => {
      ctx.save();
      // Clear scaled canvas viewport
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Apply DPR scaling for crisp high-density particle drawing
      ctx.scale(dpr, dpr);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('emit-siphon-particle', handleEmitEvent);
      if (window.emitSiphonParticle === emitParticle) {
        delete window.emitSiphonParticle;
      }
    };
  }, []);

  return (
    <canvas
      id="siphon-canvas"
      ref={canvasRef}
      className="siphon-canvas pointer-events-none fixed inset-0 z-40"
      aria-hidden="true"
    />
  );
}

export default SiphonCanvas;
