import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Modern Space Interceptor Combat Arcade
 * Replaces legacy 8-bit blocky sprites with a modern 60FPS sci-fi space dogfight:
 * - High-tech aerodynamic delta-wing player starfighter with glowing ion thrusters & energy shield
 * - Vector-rendered enemies: Crimson Interceptor Drones, Heavy Plasma Cruisers, Drifting Quantum Asteroids & Dreadnought Bosses
 * - Modern FX: Hyperspace warp streaks, bloom laser bolts, particle shockwaves, floating score popups, and screen shake
 * - Power-up drops: Triple Spread Shot, Quantum Homing Micro-Missiles, Shield Boost
 * - Dual Flight Modes: Autonomous Smart AI Dogfight (watch effortlessly) OR Instant Manual Flight (Mouse / Touch / WASD / Space)
 * - Modern Web Audio synthesizer: punchy sub-bass explosions, energetic plasma zaps, and shield recharge chimes
 */

class ModernArcadeAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      this.ctx = new AudioContextClass();
    }
  }

  playLaser(isOverdrive = false) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx || this.ctx.state === 'suspended') return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = isOverdrive ? 'sawtooth' : 'sine';
      osc.frequency.setValueAtTime(isOverdrive ? 1100 : 860, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.1);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.11);
    } catch {
      // Audio guard
    }
  }

  playExplosion(isHeavy = false) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx || this.ctx.state === 'suspended') return;
    try {
      const now = this.ctx.currentTime;
      const duration = isHeavy ? 0.35 : 0.2;
      const bufferSize = Math.floor(this.ctx.sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(isHeavy ? 600 : 450, now);
      filter.frequency.exponentialRampToValueAtTime(40, now + duration);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(isHeavy ? 0.22 : 0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
    } catch {
      // Audio guard
    }
  }

  playPowerup() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx || this.ctx.state === 'suspended') return;
    try {
      const now = this.ctx.currentTime;
      [587.33, 739.99, 880.0, 1174.66].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = now + idx * 0.05;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.19);
      });
    } catch {
      // Audio guard
    }
  }
}

const modernAudio = new ModernArcadeAudio();

export function SpaceInvadersBanner() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // HUD state
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(12500);
  const [shield, setShield] = useState(100);
  const [wave, setWave] = useState(1);
  const [isAutoPilot, setIsAutoPilot] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [overdriveActive, setOverdriveActive] = useState(false);
  const [tacticalStatus, setTacticalStatus] = useState('ORBITAL DOGFIGHT ACTIVE // SECTOR 0.5');

  // Mutable game simulation ref
  const gameRef = useRef({
    width: 800,
    height: 420,
    scale: 1,
    player: {
      x: 400,
      y: 350,
      vx: 0,
      targetX: 400,
      targetY: 350,
      width: 36,
      height: 38,
      speed: 360,
      shield: 100,
      maxShield: 100,
      isHit: false,
      hitTimer: 0,
      overdriveTimer: 0,
      weaponType: 'dual', // 'dual', 'triple', 'missiles'
      thrusterFlicker: 0,
    },
    keys: { left: false, right: false, up: false, down: false, shoot: false },
    mouse: { x: 400, y: 350, isDown: false },
    stars: [],
    bullets: [],
    enemyBullets: [],
    enemies: [],
    asteroids: [],
    particles: [],
    shockwaves: [],
    powerups: [],
    floatingTexts: [],
    screenShake: 0,
    score: 0,
    highScore: 12500,
    wave: 1,
    isAutoPilot: true,
    autoShootTimer: 0,
    autoEvadeTimer: 0,
    lastTime: performance.now(),
    waveSpawnTimer: 0,
  });

  // Toggle audio
  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    modernAudio.enabled = next;
    if (next) modernAudio.init();
  };

  // Toggle auto-pilot
  const toggleAutoPilot = () => {
    const next = !isAutoPilot;
    setIsAutoPilot(next);
    gameRef.current.isAutoPilot = next;
    setTacticalStatus(next ? 'AI DOGFIGHT AUTO-PILOT ENGAGED' : 'PILOT MANUAL FLIGHT OVERRIDE');
    if (!next) {
      modernAudio.init();
    }
  };

  // Reset or spawn new wave
  const spawnWave = useCallback((waveNum = 1) => {
    const g = gameRef.current;
    g.wave = waveNum;
    g.enemies = [];
    g.enemyBullets = [];
    g.waveSpawnTimer = 0;

    const isBossWave = waveNum % 3 === 0;

    if (isBossWave) {
      // Spawn Heavy Dreadnought Boss
      g.enemies.push({
        type: 'boss',
        x: g.width / 2,
        y: 80,
        vx: 70,
        vy: 0,
        width: 110,
        height: 64,
        hp: 35 + waveNum * 12,
        maxHp: 35 + waveNum * 12,
        score: 1500,
        shootTimer: 0.6,
        color: '#ff2a85',
        shieldAngle: 0,
      });
      setTacticalStatus(`CRITICAL ALERT: DREADNOUGHT CLASS MOTHERSHIP ENCOUNTERED // WAVE ${waveNum}`);
    } else {
      // Spawn Squadron of modern fighters
      const count = Math.min(14, 6 + waveNum * 2);
      for (let i = 0; i < count; i++) {
        const type = i % 3 === 0 ? 'cruiser' : 'interceptor';
        g.enemies.push({
          type,
          x: 70 + (i % 7) * 95,
          y: 50 + Math.floor(i / 7) * 60,
          baseX: 70 + (i % 7) * 95,
          vx: (Math.random() > 0.5 ? 1 : -1) * (45 + waveNum * 10),
          width: type === 'cruiser' ? 44 : 32,
          height: type === 'cruiser' ? 36 : 28,
          hp: type === 'cruiser' ? 4 : 2,
          maxHp: type === 'cruiser' ? 4 : 2,
          score: type === 'cruiser' ? 250 : 120,
          shootTimer: 1.0 + Math.random() * 2.0,
          color: type === 'cruiser' ? '#ffaa00' : '#ff3366',
          phase: Math.random() * Math.PI * 2,
        });
      }
      setTacticalStatus(`SECTOR DEFENSE: WAVE ${waveNum} HOSTILES ENGAGED`);
    }

    // Spawn 2-3 drifting quantum asteroids
    if (g.asteroids.length < 3) {
      for (let a = 0; a < 2; a++) {
        g.asteroids.push({
          x: Math.random() * g.width,
          y: -40 - a * 80,
          vx: (Math.random() - 0.5) * 40,
          vy: 35 + Math.random() * 30,
          radius: 18 + Math.random() * 14,
          rot: 0,
          rotSpeed: (Math.random() - 0.5) * 1.5,
          hp: 3,
        });
      }
    }

    setWave(waveNum);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load High Score
    try {
      const saved = localStorage.getItem('space_arcade_modern_hi');
      if (saved) {
        const val = parseInt(saved, 10);
        if (!isNaN(val)) {
          setHighScore(val);
          gameRef.current.highScore = val;
        }
      }
    } catch {
      // Guard
    }

    // Generate Background Hyperspace Warp Stars
    const g = gameRef.current;
    g.stars = [];
    for (let i = 0; i < 90; i++) {
      g.stars.push({
        x: Math.random() * g.width,
        y: Math.random() * g.height,
        speed: 80 + Math.random() * 260,
        length: 2 + Math.random() * 8,
        alpha: 0.3 + Math.random() * 0.7,
      });
    }

    spawnWave(1);

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = 800 * dpr;
      canvas.height = 420 * dpr;
      gameRef.current.scale = dpr;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Keyboard handlers
    const handleKeyDown = (e) => {
      if (['ArrowLeft', 'KeyA'].includes(e.code)) g.keys.left = true;
      if (['ArrowRight', 'KeyD'].includes(e.code)) g.keys.right = true;
      if (['ArrowUp', 'KeyW'].includes(e.code)) g.keys.up = true;
      if (['ArrowDown', 'KeyS'].includes(e.code)) g.keys.down = true;
      if (e.code === 'Space') {
        e.preventDefault();
        g.keys.shoot = true;
      }
      // If user presses any control key, automatically engage manual mode!
      if (g.isAutoPilot && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyA', 'KeyD', 'KeyW', 'KeyS', 'Space'].includes(e.code)) {
        setIsAutoPilot(false);
        g.isAutoPilot = false;
        setTacticalStatus('PILOT MANUAL FLIGHT OVERRIDE');
        modernAudio.init();
      }
    };

    const handleKeyUp = (e) => {
      if (['ArrowLeft', 'KeyA'].includes(e.code)) g.keys.left = false;
      if (['ArrowRight', 'KeyD'].includes(e.code)) g.keys.right = false;
      if (['ArrowUp', 'KeyW'].includes(e.code)) g.keys.up = false;
      if (['ArrowDown', 'KeyS'].includes(e.code)) g.keys.down = false;
      if (e.code === 'Space') g.keys.shoot = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Mouse / Touch handlers on canvas
    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = 800 / rect.width;
      const scaleY = 420 / rect.height;
      g.mouse.x = (e.clientX - rect.left) * scaleX;
      g.mouse.y = (e.clientY - rect.top) * scaleY;
    };

    const handlePointerDown = (e) => {
      handlePointerMove(e);
      g.mouse.isDown = true;
      if (g.isAutoPilot) {
        setIsAutoPilot(false);
        g.isAutoPilot = false;
        setTacticalStatus('PILOT MANUAL FLIGHT OVERRIDE');
        modernAudio.init();
      }
    };

    const handlePointerUp = () => {
      g.mouse.isDown = false;
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    // Helpers: Visual FX
    const spawnExplosionFX = (x, y, color = '#00ffcc', isLarge = false) => {
      const count = isLarge ? 32 : 18;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (isLarge ? 80 : 50) + Math.random() * (isLarge ? 240 : 160);
        g.particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0.35 + Math.random() * 0.45,
          maxLife: 0.5,
          size: 1.5 + Math.random() * (isLarge ? 4 : 2.5),
          color,
        });
      }

      // Add Expanding Shockwave Ring
      g.shockwaves.push({
        x,
        y,
        radius: 4,
        maxRadius: isLarge ? 70 : 40,
        alpha: 0.9,
        color,
      });

      if (isLarge) {
        g.screenShake = 6;
      }
    };

    const addFloatingText = (text, x, y, color = '#00ffcc') => {
      g.floatingTexts.push({
        text,
        x,
        y,
        alpha: 1.0,
        life: 0.8,
        color,
      });
    };

    let animId = null;
    let lastTime = performance.now();

    // Main 60FPS Game Loop
    const loop = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.08);
      lastTime = currentTime;

      ctx.save();
      ctx.scale(g.scale, g.scale);

      // Screen Shake
      if (g.screenShake > 0) {
        const shakeX = (Math.random() - 0.5) * g.screenShake;
        const shakeY = (Math.random() - 0.5) * g.screenShake;
        ctx.translate(shakeX, shakeY);
        g.screenShake = Math.max(0, g.screenShake - dt * 15);
      }

      // 1. Dark Void Backdrop & Hyperspace Speed Streaks
      ctx.fillStyle = '#030510';
      ctx.fillRect(0, 0, g.width, g.height);

      // Starfield Speed Streaks
      ctx.strokeStyle = '#5de6ff';
      ctx.lineWidth = 1.2;
      g.stars.forEach((s) => {
        s.y += s.speed * dt;
        if (s.y > g.height) {
          s.y = 0;
          s.x = Math.random() * g.width;
        }
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x, s.y + s.length);
        ctx.stroke();
      });
      ctx.globalAlpha = 1.0;

      // 2. Player Controls & Autonomous AI Flight
      const p = g.player;
      p.thrusterFlicker = (p.thrusterFlicker + dt * 12) % (Math.PI * 2);

      if (g.isAutoPilot) {
        // AI Autonomous Dogfight Pilot:
        // Finds closest enemy threat or powerup and maneuvers seamlessly
        const liveEnemies = g.enemies.filter((e) => e.hp > 0);
        let targetX = 400;
        let targetY = 345;

        if (g.powerups.length > 0) {
          // Priority: grab power-up
          targetX = g.powerups[0].x;
          targetY = g.powerups[0].y;
        } else if (liveEnemies.length > 0) {
          // Sort by nearest Y then nearest X
          liveEnemies.sort((a, b) => b.y - a.y || Math.abs(a.x - p.x) - Math.abs(b.x - p.x));
          targetX = liveEnemies[0].x;
        }

        // Dodge incoming projectiles
        const incoming = g.enemyBullets.find((b) => Math.abs(b.x - p.x) < 45 && b.y > 220);
        if (incoming) {
          targetX += incoming.x > p.x ? -65 : 65;
        }

        p.x += (targetX - p.x) * Math.min(1.0, 5.0 * dt);
        p.y += (targetY - p.y) * Math.min(1.0, 3.5 * dt);

        // Auto-Fire
        g.autoShootTimer += dt;
        const shootInterval = p.overdriveTimer > 0 ? 0.12 : 0.22;
        if (g.autoShootTimer >= shootInterval) {
          g.autoShootTimer = 0;
          firePlayerWeapon();
        }
      } else {
        // Manual Flight Mode
        if (g.mouse.isDown) {
          p.x += (g.mouse.x - p.x) * Math.min(1.0, 8.0 * dt);
          p.y += (g.mouse.y - p.y) * Math.min(1.0, 8.0 * dt);
          g.autoShootTimer += dt;
          if (g.autoShootTimer >= (p.overdriveTimer > 0 ? 0.12 : 0.2)) {
            g.autoShootTimer = 0;
            firePlayerWeapon();
          }
        } else {
          if (g.keys.left) p.x -= p.speed * dt;
          if (g.keys.right) p.x += p.speed * dt;
          if (g.keys.up) p.y -= p.speed * dt;
          if (g.keys.down) p.y += p.speed * dt;

          if (g.keys.shoot) {
            g.autoShootTimer += dt;
            if (g.autoShootTimer >= (p.overdriveTimer > 0 ? 0.12 : 0.2)) {
              g.autoShootTimer = 0;
              firePlayerWeapon();
            }
          }
        }
      }

      // Clamp Player Inside Viewport
      p.x = Math.max(30, Math.min(g.width - 30, p.x));
      p.y = Math.max(160, Math.min(g.height - 35, p.y));

      // Overdrive & Shield Regeneration Timers
      if (p.overdriveTimer > 0) {
        p.overdriveTimer -= dt;
        if (p.overdriveTimer <= 0) {
          p.weaponType = 'dual';
          setOverdriveActive(false);
        }
      }

      // Passive Shield Recharge
      if (p.shield < p.maxShield) {
        p.shield = Math.min(p.maxShield, p.shield + dt * 4);
        setShield(Math.round(p.shield));
      }

      if (p.isHit) {
        p.hitTimer -= dt;
        if (p.hitTimer <= 0) p.isHit = false;
      }

      // Weapon Fire Function
      function firePlayerWeapon() {
        if (p.weaponType === 'triple' || p.overdriveTimer > 0) {
          // Triple Spread Plasma
          g.bullets.push({ x: p.x, y: p.y - 18, vx: 0, vy: -520, color: '#00ffcc', size: 3 });
          g.bullets.push({ x: p.x - 12, y: p.y - 12, vx: -120, vy: -500, color: '#ffaa00', size: 2.8 });
          g.bullets.push({ x: p.x + 12, y: p.y - 12, vx: 120, vy: -500, color: '#ffaa00', size: 2.8 });
          modernAudio.playLaser(true);
        } else {
          // Twin Dual Lasers
          g.bullets.push({ x: p.x - 10, y: p.y - 16, vx: 0, vy: -540, color: '#00ffcc', size: 2.8 });
          g.bullets.push({ x: p.x + 10, y: p.y - 16, vx: 0, vy: -540, color: '#00ffcc', size: 2.8 });
          modernAudio.playLaser(false);
        }
      }

      // 3. Render Modern Aerodynamic Player Starfighter
      ctx.save();
      ctx.translate(p.x, p.y);

      // Subtle dynamic banking tilt
      const bankAngle = (p.vx || (g.mouse.x - p.x)) * 0.001;
      ctx.rotate(Math.max(-0.25, Math.min(0.25, bankAngle)));

      // Ion Thruster Plasma Flames
      const thrusterLen = 14 + Math.sin(p.thrusterFlicker) * 5;
      const thrusterGrad = ctx.createLinearGradient(0, 16, 0, 16 + thrusterLen);
      thrusterGrad.addColorStop(0.0, '#ffffff');
      thrusterGrad.addColorStop(0.3, '#00ffcc');
      thrusterGrad.addColorStop(1.0, 'transparent');

      ctx.fillStyle = thrusterGrad;
      ctx.beginPath();
      ctx.moveTo(-7, 16);
      ctx.lineTo(0, 16 + thrusterLen);
      ctx.lineTo(7, 16);
      ctx.closePath();
      ctx.fill();

      // Starfighter Sleek Delta-Wing Hull
      ctx.fillStyle = p.isHit ? '#ffffff' : '#0a1024';
      ctx.strokeStyle = p.overdriveTimer > 0 ? '#ffaa00' : '#00ffcc';
      ctx.lineWidth = 2.0;
      ctx.shadowColor = p.overdriveTimer > 0 ? '#ffaa00' : '#00ffcc';
      ctx.shadowBlur = 10;

      ctx.beginPath();
      ctx.moveTo(0, -18);        // Cockpit nose
      ctx.lineTo(16, 12);        // Right wingtip
      ctx.lineTo(10, 15);        // Right inner wing
      ctx.lineTo(5, 12);         // Right engine
      ctx.lineTo(0, 14);         // Center rear
      ctx.lineTo(-5, 12);        // Left engine
      ctx.lineTo(-10, 15);       // Left inner wing
      ctx.lineTo(-16, 12);       // Left wingtip
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Canopy Glass Cockpit
      ctx.fillStyle = '#5de6ff';
      ctx.beginPath();
      ctx.ellipse(0, -4, 3.5, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Glowing Energy Forcefield Shield
      if (p.shield > 0) {
        const shieldAlpha = Math.max(0.12, (p.shield / p.maxShield) * (p.isHit ? 0.8 : 0.28));
        ctx.strokeStyle = `rgba(0, 255, 204, ${shieldAlpha})`;
        ctx.fillStyle = `rgba(0, 255, 204, ${shieldAlpha * 0.25})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.ellipse(0, 0, 26, 26, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      ctx.restore();

      // 4. Update & Render Player Lasers
      for (let i = g.bullets.length - 1; i >= 0; i--) {
        const b = g.bullets[i];
        b.x += b.vx * dt;
        b.y += b.vy * dt;

        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 8;
        ctx.fillRect(b.x - b.size / 2, b.y, b.size, 12);
        ctx.shadowBlur = 0;

        // Collision with Enemies
        let hit = false;
        for (let j = 0; j < g.enemies.length; j++) {
          const e = g.enemies[j];
          if (
            e.hp > 0 &&
            b.x >= e.x - e.width / 2 &&
            b.x <= e.x + e.width / 2 &&
            b.y >= e.y - e.height / 2 &&
            b.y <= e.y + e.height / 2
          ) {
            e.hp -= 1;
            hit = true;
            spawnExplosionFX(b.x, b.y, e.color, false);

            if (e.hp <= 0) {
              // Enemy Destroyed!
              g.score += e.score;
              setScore(g.score);
              if (g.score > g.highScore) {
                g.highScore = g.score;
                setHighScore(g.highScore);
                try {
                  localStorage.setItem('space_arcade_modern_hi', g.highScore.toString());
                } catch {
                  // Guard
                }
              }

              spawnExplosionFX(e.x, e.y, e.color, e.type === 'boss');
              modernAudio.playExplosion(e.type === 'boss');
              addFloatingText(`+${e.score}`, e.x, e.y - 10, e.color);

              // Chance to drop power-up orb
              if (Math.random() < 0.28 || e.type === 'boss') {
                g.powerups.push({
                  x: e.x,
                  y: e.y,
                  vy: 65,
                  type: 'overdrive',
                  rot: 0,
                });
              }
            }
            break;
          }
        }

        // Collision with Asteroids
        if (!hit) {
          for (let k = 0; k < g.asteroids.length; k++) {
            const ast = g.asteroids[k];
            const dist = Math.hypot(b.x - ast.x, b.y - ast.y);
            if (dist < ast.radius) {
              ast.hp -= 1;
              hit = true;
              spawnExplosionFX(b.x, b.y, '#5de6ff', false);
              if (ast.hp <= 0) {
                g.score += 80;
                setScore(g.score);
                addFloatingText('+80', ast.x, ast.y, '#5de6ff');
                spawnExplosionFX(ast.x, ast.y, '#5de6ff', false);
                g.asteroids.splice(k, 1);
              }
              break;
            }
          }
        }

        if (hit || b.y < -20) {
          g.bullets.splice(i, 1);
        }
      }

      // 5. Update & Render Enemies
      const activeEnemies = g.enemies.filter((e) => e.hp > 0);
      if (activeEnemies.length === 0) {
        g.waveSpawnTimer += dt;
        if (g.waveSpawnTimer > 1.2) {
          spawnWave(g.wave + 1);
          modernAudio.playPowerup();
        }
      }

      activeEnemies.forEach((e) => {
        // Movement Logic
        if (e.type === 'boss') {
          e.x += e.vx * dt;
          if (e.x > g.width - 90 || e.x < 90) e.vx *= -1;
          e.shieldAngle += dt * 1.8;

          // Boss Rapid Pulse Barrage
          e.shootTimer -= dt;
          if (e.shootTimer <= 0) {
            e.shootTimer = 0.55;
            g.enemyBullets.push({ x: e.x - 30, y: e.y + 25, vx: -40, vy: 240, color: '#ff2a85' });
            g.enemyBullets.push({ x: e.x + 30, y: e.y + 25, vx: 40, vy: 240, color: '#ff2a85' });
            g.enemyBullets.push({ x: e.x, y: e.y + 35, vx: 0, vy: 260, color: '#ffaa00' });
          }

          // Draw Boss Mothership
          ctx.save();
          ctx.translate(e.x, e.y);
          ctx.strokeStyle = '#ff2a85';
          ctx.fillStyle = '#100518';
          ctx.lineWidth = 2.5;
          ctx.shadowColor = '#ff2a85';
          ctx.shadowBlur = 15;

          ctx.beginPath();
          ctx.moveTo(0, 32);
          ctx.lineTo(55, 0);
          ctx.lineTo(40, -25);
          ctx.lineTo(-40, -25);
          ctx.lineTo(-55, 0);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Glowing Core
          ctx.fillStyle = '#ffaa00';
          ctx.beginPath();
          ctx.arc(0, 0, 14, 0, Math.PI * 2);
          ctx.fill();

          // Rotating Shield Arc
          ctx.strokeStyle = 'rgba(0, 255, 204, 0.7)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(0, 0, 42, e.shieldAngle, e.shieldAngle + Math.PI * 0.8);
          ctx.stroke();
          ctx.restore();
        } else {
          // Standard Interceptors & Cruisers
          e.x += e.vx * dt;
          if (e.x > g.width - 45 || e.x < 45) {
            e.vx *= -1;
            e.y += 8;
          }

          // Random Laser Firing
          e.shootTimer -= dt;
          if (e.shootTimer <= 0) {
            e.shootTimer = 1.8 + Math.random() * 2.5;
            g.enemyBullets.push({
              x: e.x,
              y: e.y + 16,
              vx: (Math.random() - 0.5) * 40,
              vy: 220 + g.wave * 15,
              color: e.color,
            });
          }

          // Draw Enemy Fighter
          ctx.save();
          ctx.translate(e.x, e.y);
          ctx.fillStyle = '#14081c';
          ctx.strokeStyle = e.color;
          ctx.lineWidth = 1.8;
          ctx.shadowColor = e.color;
          ctx.shadowBlur = 8;

          ctx.beginPath();
          ctx.moveTo(0, 14);
          ctx.lineTo(e.width / 2, -10);
          ctx.lineTo(0, -5);
          ctx.lineTo(-e.width / 2, -10);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0;
          ctx.restore();
        }
      });

      // 6. Update & Render Asteroids
      for (let a = g.asteroids.length - 1; a >= 0; a--) {
        const ast = g.asteroids[a];
        ast.x += ast.vx * dt;
        ast.y += ast.vy * dt;
        ast.rot += ast.rotSpeed * dt;

        ctx.save();
        ctx.translate(ast.x, ast.y);
        ctx.rotate(ast.rot);
        ctx.fillStyle = '#0a1426';
        ctx.strokeStyle = 'rgba(93, 230, 255, 0.6)';
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        const sides = 6;
        for (let s = 0; s < sides; s++) {
          const angle = (s / sides) * Math.PI * 2;
          const r = ast.radius * (0.8 + ((s % 2) * 0.3));
          const px = Math.cos(angle) * r;
          const py = Math.sin(angle) * r;
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        if (ast.y > g.height + 40) {
          g.asteroids.splice(a, 1);
        }
      }

      // 7. Update & Render Enemy Plasma Bullets
      for (let i = g.enemyBullets.length - 1; i >= 0; i--) {
        const eb = g.enemyBullets[i];
        eb.x += eb.vx * dt;
        eb.y += eb.vy * dt;

        ctx.fillStyle = eb.color;
        ctx.shadowColor = eb.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(eb.x, eb.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Player Collision Detection
        const dist = Math.hypot(eb.x - p.x, eb.y - p.y);
        if (dist < 26) {
          p.shield = Math.max(0, p.shield - 18);
          p.isHit = true;
          p.hitTimer = 0.25;
          setShield(Math.round(p.shield));
          spawnExplosionFX(eb.x, eb.y, '#00ffcc', false);
          modernAudio.playExplosion(false);
          g.enemyBullets.splice(i, 1);

          if (p.shield <= 0) {
            setTacticalStatus('CRITICAL HULL WARNING // EMERGENCY RECHARGE ACTIVE');
          }
          continue;
        }

        if (eb.y > g.height + 10) {
          g.enemyBullets.splice(i, 1);
        }
      }

      // 8. Update & Render Power-ups
      for (let i = g.powerups.length - 1; i >= 0; i--) {
        const pw = g.powerups[i];
        pw.y += pw.vy * dt;
        pw.rot += dt * 3;

        ctx.save();
        ctx.translate(pw.x, pw.y);
        ctx.rotate(pw.rot);
        ctx.strokeStyle = '#ffd700';
        ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
        ctx.lineWidth = 2;
        ctx.shadowColor = '#ffd700';
        ctx.shadowBlur = 12;
        ctx.strokeRect(-9, -9, 18, 18);
        ctx.fillRect(-9, -9, 18, 18);
        ctx.shadowBlur = 0;
        ctx.restore();

        // Player Pickup
        if (Math.hypot(pw.x - p.x, pw.y - p.y) < 32) {
          p.overdriveTimer = 8.0;
          p.weaponType = 'triple';
          p.shield = Math.min(p.maxShield, p.shield + 25);
          setShield(Math.round(p.shield));
          setOverdriveActive(true);
          modernAudio.playPowerup();
          addFloatingText('OVERDRIVE ENGAGED!', p.x, p.y - 30, '#ffd700');
          g.powerups.splice(i, 1);
        } else if (pw.y > g.height + 20) {
          g.powerups.splice(i, 1);
        }
      }

      // 9. Update & Render Shockwaves
      for (let i = g.shockwaves.length - 1; i >= 0; i--) {
        const sw = g.shockwaves[i];
        sw.radius += (sw.maxRadius - sw.radius) * Math.min(1.0, 9.0 * dt);
        sw.alpha -= dt * 1.8;
        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius - 2) {
          g.shockwaves.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = sw.color;
        ctx.globalAlpha = sw.alpha;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }

      // 10. Update & Render Particles
      for (let i = g.particles.length - 1; i >= 0; i--) {
        const pt = g.particles[i];
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;
        pt.life -= dt;
        if (pt.life <= 0) {
          g.particles.splice(i, 1);
          continue;
        }
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = Math.max(0, pt.life / pt.maxLife);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // 11. Floating Texts
      for (let i = g.floatingTexts.length - 1; i >= 0; i--) {
        const ft = g.floatingTexts[i];
        ft.y -= dt * 35;
        ft.life -= dt;
        if (ft.life <= 0) {
          g.floatingTexts.splice(i, 1);
          continue;
        }
        ctx.fillStyle = ft.color;
        ctx.globalAlpha = Math.max(0, ft.life / 0.8);
        ctx.font = 'bold 13px Orbitron, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(ft.text, ft.x, ft.y);
        ctx.globalAlpha = 1.0;
      }

      ctx.restore();
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [spawnWave]);

  return (
    <section
      id="arcade"
      ref={containerRef}
      className="modern-space-arcade relative w-full py-12 px-4 sm:px-6 lg:px-8 border-y border-[rgba(0,255,204,0.18)] bg-[#030510]/90 backdrop-blur-xl select-none"
      aria-label="Orbital Defense Modern Space Arcade Game"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Top Header Console Bar */}
        <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ffcc] animate-pulse shadow-[0_0_10px_#00ffcc]" />
            <h2 className="font-['Orbitron'] font-bold text-sm sm:text-base tracking-[0.2em] uppercase text-white flex items-center gap-2">
              ORBITAL INTERCEPTOR COMBAT
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#00ffcc]/10 border border-[#00ffcc]/30 text-[#00ffcc]">
                MODERN ARCADE
              </span>
            </h2>
          </div>

          {/* Interactive Controls & Audio Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleAutoPilot}
              className={`px-3 py-1.5 rounded text-xs font-['Oxanium'] font-semibold tracking-wider transition-all border ${
                isAutoPilot
                  ? 'bg-[#00ffcc]/15 border-[#00ffcc]/50 text-[#00ffcc] hover:bg-[#00ffcc]/25 shadow-[0_0_12px_rgba(0,255,204,0.3)]'
                  : 'bg-[#ff2a85]/15 border-[#ff2a85]/50 text-[#ff2a85] hover:bg-[#ff2a85]/25 shadow-[0_0_12px_rgba(255,42,133,0.3)]'
              }`}
              title="Toggle between AI Auto-Pilot and Manual Flight Controls"
            >
              {isAutoPilot ? '🤖 AI AUTO-PILOT [ACTIVE]' : '🎮 MANUAL FLIGHT [ACTIVE]'}
            </button>

            <button
              type="button"
              onClick={toggleSound}
              className="px-2.5 py-1.5 rounded bg-white/5 border border-white/20 text-xs font-['Share_Tech_Mono'] text-white/80 hover:text-white hover:border-[#00ffcc] transition-all"
              title="Toggle Game Sound FX"
              aria-label="Toggle Game Sound"
            >
              {soundOn ? '🔊 AUDIO ON' : '🔇 AUDIO OFF'}
            </button>
          </div>
        </div>

        {/* Tactical Telemetry Ribbon */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 px-2 font-['Share_Tech_Mono'] text-xs text-white/80">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10">
            <span className="text-white/40">SHIELDS:</span>
            <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00ffcc] to-[#5de6ff] transition-all duration-300"
                style={{ width: `${shield}%` }}
              />
            </div>
            <span className="text-[#00ffcc] font-bold">{shield}%</span>
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 rounded bg-white/5 border border-white/10">
            <span className="text-white/40">SCORE:</span>
            <span className="text-white font-bold">{score.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 rounded bg-white/5 border border-white/10">
            <span className="text-white/40">HIGH SCORE:</span>
            <span className="text-[#ffaa00] font-bold">{highScore.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 rounded bg-white/5 border border-white/10">
            <span className="text-white/40">WAVE:</span>
            <span className="text-[#ff2a85] font-bold">SECTOR {wave}</span>
          </div>
        </div>

        {/* 60FPS High-Tech Canvas Container */}
        <div className="relative w-full aspect-[800/420] max-h-[460px] rounded-xl overflow-hidden border border-[#00ffcc]/25 shadow-[0_0_35px_rgba(0,255,204,0.15)] bg-[#030510]">
          <canvas
            ref={canvasRef}
            className="w-full h-full block cursor-crosshair touch-none"
            aria-label="Interactive 60FPS Space Dogfight Game"
          />

          {/* Overdrive Notification Ribbon */}
          {overdriveActive && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#ffaa00]/20 border border-[#ffaa00] text-[#ffaa00] font-['Orbitron'] text-xs font-bold tracking-widest animate-pulse shadow-[0_0_20px_#ffaa00]">
              ⚡ TRIPLE OVERDRIVE WEAPONS ACTIVE ⚡
            </div>
          )}

          {/* Status Subtitle Overlay */}
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between pointer-events-none text-[11px] font-['Share_Tech_Mono'] text-white/50">
            <span>{tacticalStatus}</span>
            <span className="hidden sm:inline">CONTROLS: DRAG / WASD / ARROWS • SPACE TO FIRE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpaceInvadersBanner;
