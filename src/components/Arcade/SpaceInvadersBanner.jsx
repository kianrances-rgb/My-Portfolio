import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Pixel Sprites for Classic Space Invaders
 * 1 = drawn pixel, 0 = transparent
 */
const SPRITES = {
  squid: {
    width: 8,
    height: 8,
    color: '#ff2a85', // Neon Magenta
    score: 30,
    frames: [
      [
        0,0,0,1,1,0,0,0,
        0,0,1,1,1,1,0,0,
        0,1,1,1,1,1,1,0,
        1,1,0,1,1,0,1,1,
        1,1,1,1,1,1,1,1,
        0,0,1,0,0,1,0,0,
        0,1,0,1,1,0,1,0,
        1,0,1,0,0,1,0,1,
      ],
      [
        0,0,0,1,1,0,0,0,
        0,0,1,1,1,1,0,0,
        0,1,1,1,1,1,1,0,
        1,1,0,1,1,0,1,1,
        1,1,1,1,1,1,1,1,
        0,1,0,1,1,0,1,0,
        1,0,0,0,0,0,0,1,
        0,1,0,0,0,0,1,0,
      ],
    ],
  },
  crab: {
    width: 11,
    height: 8,
    color: '#00ffcc', // Cyber Cyan
    score: 20,
    frames: [
      [
        0,0,1,0,0,0,0,0,1,0,0,
        0,0,0,1,0,0,0,1,0,0,0,
        0,0,1,1,1,1,1,1,1,0,0,
        0,1,1,0,1,1,1,0,1,1,0,
        1,1,1,1,1,1,1,1,1,1,1,
        1,0,1,1,1,1,1,1,1,0,1,
        1,0,1,0,0,0,0,0,1,0,1,
        0,0,0,1,1,0,1,1,0,0,0,
      ],
      [
        0,0,1,0,0,0,0,0,1,0,0,
        1,0,0,1,0,0,0,1,0,0,1,
        1,0,1,1,1,1,1,1,1,0,1,
        1,1,1,0,1,1,1,0,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,
        0,1,1,1,1,1,1,1,1,1,0,
        0,0,1,0,0,0,0,0,1,0,0,
        0,1,0,0,0,0,0,0,0,1,0,
      ],
    ],
  },
  octopus: {
    width: 12,
    height: 8,
    color: '#ffaa00', // Plasma Gold
    score: 10,
    frames: [
      [
        0,0,0,0,1,1,1,1,0,0,0,0,
        0,1,1,1,1,1,1,1,1,1,1,0,
        1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,0,0,1,1,0,0,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,
        0,0,0,1,1,0,0,1,1,0,0,0,
        0,0,1,1,0,1,1,0,1,1,0,0,
        1,1,0,0,0,0,0,0,0,0,1,1,
      ],
      [
        0,0,0,0,1,1,1,1,0,0,0,0,
        0,1,1,1,1,1,1,1,1,1,1,0,
        1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,0,0,1,1,0,0,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,
        0,0,1,1,0,0,0,0,1,1,0,0,
        0,1,1,0,1,1,1,1,0,1,1,0,
        0,0,0,1,0,0,0,0,1,0,0,0,
      ],
    ],
  },
  ufo: {
    width: 16,
    height: 7,
    color: '#ff3344', // Crimson Alert
    score: 200,
    frames: [
      [
        0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,
        0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,
        0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
        0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,
        0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,
      ],
    ],
  },
  player: {
    width: 13,
    height: 8,
    color: '#00ffcc', // Cyber Cyan
    frames: [
      [
        0,0,0,0,0,0,1,0,0,0,0,0,0,
        0,0,0,0,0,1,1,1,0,0,0,0,0,
        0,0,0,0,0,1,1,1,0,0,0,0,0,
        0,1,1,1,1,1,1,1,1,1,1,1,0,
        1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,0,0,1,1,1,0,0,1,1,1,
        1,1,0,0,0,0,1,0,0,0,0,1,1,
      ],
    ],
  },
};

/**
 * Procedural Web Audio 8-bit sound synthesizer
 */
class ArcadeAudio {
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

  playShoot() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx || this.ctx.state === 'suspended') return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.12);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.13);
    } catch (e) {}
  }

  playExplosion() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx || this.ctx.state === 'suspended') return;
    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.18;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(100, now + 0.18);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
    } catch (e) {}
  }

  playUfo() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx || this.ctx.state === 'suspended') return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.linearRampToValueAtTime(800, now + 0.1);
      osc.frequency.linearRampToValueAtTime(400, now + 0.2);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.21);
    } catch (e) {}
  }

  playWaveClear() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx || this.ctx.state === 'suspended') return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + idx * 0.08;
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.05, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.19);
      });
    } catch (e) {}
  }
}

const audio = new ArcadeAudio();

/**
 * SpaceInvadersBanner Component
 * Sits right after Page 1 (#intro / Singularity) and before Page 2 (#galaxy / Andromeda).
 * High-performance 60fps canvas mini-arcade game and ambient banner.
 */
export function SpaceInvadersBanner() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // React state for HUD
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(9990);
  const [lives, setLives] = useState(3);
  const [wave, setWave] = useState(1);
  const [isAutoPilot, setIsAutoPilot] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [bannerStatus, setBannerStatus] = useState('ORBITAL DEFENSE ACTIVE');

  // Mutable game refs for 60fps animation loop without re-renders
  const gameRef = useRef({
    width: 640,
    height: 340,
    scale: 1,
    player: { x: 300, y: 305, width: 26, height: 16, speed: 280, isHit: false, hitTimer: 0 },
    keys: { left: false, right: false, shoot: false },
    bullets: [],
    alienBullets: [],
    particles: [],
    aliens: [],
    bunkers: [],
    ufo: null,
    ufoTimer: 10,
    direction: 1,
    stepTimer: 0,
    stepInterval: 0.65,
    animFrame: 0,
    score: 0,
    highScore: 9990,
    lives: 3,
    wave: 1,
    isAutoPilot: true,
    autoShootTimer: 0,
    autoTargetX: 300,
    lastTime: performance.now(),
    isPaused: false,
    gameOver: false,
    waveClear: false,
  });

  // Toggle sound
  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    audio.enabled = next;
    if (next) audio.init();
  };

  // Toggle auto-pilot
  const toggleAutoPilot = () => {
    const next = !isAutoPilot;
    setIsAutoPilot(next);
    gameRef.current.isAutoPilot = next;
    setBannerStatus(next ? 'AI AUTO-PILOT ENGAGED' : 'PILOT MANUAL CONTROL');
    if (!next) {
      audio.init();
    }
  };

  // Initialize Wave / Aliens Grid
  const initWave = useCallback((waveNum = 1) => {
    const g = gameRef.current;
    g.wave = waveNum;
    g.aliens = [];
    g.bullets = [];
    g.alienBullets = [];
    g.particles = [];
    g.ufo = null;
    g.ufoTimer = 12 + Math.random() * 8;
    g.direction = 1;
    g.stepInterval = Math.max(0.2, 0.65 - (waveNum - 1) * 0.08);

    const rows = [
      { type: 'squid', count: 8 },
      { type: 'crab', count: 8 },
      { type: 'crab', count: 8 },
      { type: 'octopus', count: 8 },
    ];

    const startX = 70;
    const startY = 55;
    const spacingX = 60;
    const spacingY = 32;

    rows.forEach((row, rIdx) => {
      const spriteInfo = SPRITES[row.type];
      for (let c = 0; c < row.count; c++) {
        g.aliens.push({
          type: row.type,
          x: startX + c * spacingX,
          y: startY + rIdx * spacingY,
          width: spriteInfo.width * 2.2,
          height: spriteInfo.height * 2.2,
          score: spriteInfo.score,
          color: spriteInfo.color,
          alive: true,
        });
      }
    });

    // Generate Bunkers (4 destructible bunkers)
    g.bunkers = [];
    const bunkerCount = 4;
    const bSpacing = (g.width - 80) / bunkerCount;
    for (let b = 0; b < bunkerCount; b++) {
      const bx = 55 + b * bSpacing;
      const by = 250;
      // 4x3 matrix of blocks
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 5; c++) {
          if (r === 2 && (c === 2)) continue; // archway notch
          g.bunkers.push({
            x: bx + c * 8,
            y: by + r * 7,
            width: 8,
            height: 7,
            hp: 3,
          });
        }
      }
    }

    setWave(waveNum);
  }, []);

  // Full Game Reset
  const resetGame = useCallback(() => {
    const g = gameRef.current;
    g.score = 0;
    g.lives = 3;
    g.gameOver = false;
    g.waveClear = false;
    setScore(0);
    setLives(3);
    initWave(1);
    setBannerStatus('DEFENSE PROTOCOL RESET');
  }, [initWave]);

  // Main Canvas Setup & Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load High Score from localStorage
    try {
      const savedHigh = localStorage.getItem('space_invaders_hi');
      if (savedHigh) {
        const val = parseInt(savedHigh, 10);
        if (!isNaN(val)) {
          setHighScore(val);
          gameRef.current.highScore = val;
        }
      }
    } catch (e) {}

    initWave(1);

    // Responsive Canvas Resizing with internal 640x340 resolution
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = 640 * dpr;
      canvas.height = 340 * dpr;
      gameRef.current.scale = dpr;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Helper: Draw Sprite
    const drawSprite = (sprite, frameIdx, x, y, pixelSize, overrideColor = null) => {
      const frame = sprite.frames[frameIdx % sprite.frames.length];
      const color = overrideColor || sprite.color;
      ctx.fillStyle = color;
      for (let py = 0; py < sprite.height; py++) {
        for (let px = 0; px < sprite.width; px++) {
          if (frame[py * sprite.width + px]) {
            ctx.fillRect(x + px * pixelSize, y + py * pixelSize, pixelSize, pixelSize);
          }
        }
      }
    };

    // Helper: Spawn Particle Burst
    const spawnParticles = (x, y, color, count = 12) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 40 + Math.random() * 140;
        gameRef.current.particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0.35 + Math.random() * 0.3,
          maxLife: 0.5,
          size: 1.5 + Math.random() * 2.5,
          color,
        });
      }
    };

    let animId = null;
    let lastTime = performance.now();

    // 60FPS Game Loop
    const loop = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const g = gameRef.current;

      ctx.save();
      ctx.scale(g.scale, g.scale);

      // 1. Clear Screen with dark void fade & starry backdrop
      ctx.fillStyle = '#030308';
      ctx.fillRect(0, 0, g.width, g.height);

      // Subtle CRT Scanline overlay
      ctx.fillStyle = 'rgba(0, 255, 204, 0.015)';
      for (let y = 0; y < g.height; y += 4) {
        ctx.fillRect(0, y, g.width, 1.5);
      }

      // 2. UFO Logic (Random bonus mothership flying across)
      g.ufoTimer -= dt;
      if (g.ufoTimer <= 0 && !g.ufo) {
        const fromLeft = Math.random() > 0.5;
        g.ufo = {
          x: fromLeft ? -40 : g.width + 10,
          y: 26,
          vx: fromLeft ? 110 : -110,
          width: SPRITES.ufo.width * 2,
          height: SPRITES.ufo.height * 2,
          alive: true,
        };
        audio.playUfo();
        g.ufoTimer = 16 + Math.random() * 12;
      }

      if (g.ufo && g.ufo.alive) {
        g.ufo.x += g.ufo.vx * dt;
        drawSprite(SPRITES.ufo, 0, g.ufo.x, g.ufo.y, 2, '#ff3366');
        if (g.ufo.x < -60 || g.ufo.x > g.width + 60) {
          g.ufo = null;
        }
      }

      // 3. Player Movement & AI Auto-Pilot
      if (g.isAutoPilot) {
        // AI Tracking: find nearest active alien to target
        const livingAliens = g.aliens.filter((a) => a.alive);
        if (livingAliens.length > 0) {
          // Sort by lowest Y, then closest X
          livingAliens.sort((a, b) => b.y - a.y || Math.abs(a.x - g.player.x) - Math.abs(b.x - g.player.x));
          const target = livingAliens[0];
          g.autoTargetX = target.x + target.width / 2 - g.player.width / 2;

          // Dodge incoming alien bullets
          const dangerBullet = g.alienBullets.find(
            (b) => Math.abs(b.x - (g.player.x + g.player.width / 2)) < 30 && b.y > 200
          );
          if (dangerBullet) {
            g.autoTargetX += dangerBullet.x > g.player.x ? -55 : 55;
          }

          // Smoothly slide player towards target
          const diff = g.autoTargetX - g.player.x;
          if (Math.abs(diff) > 5) {
            g.player.x += Math.sign(diff) * g.player.speed * 0.85 * dt;
          }

          // Auto-Fire
          g.autoShootTimer += dt;
          if (g.autoShootTimer > 0.32) {
            g.autoShootTimer = 0;
            if (g.bullets.length < 2) {
              g.bullets.push({
                x: g.player.x + g.player.width / 2 - 1,
                y: g.player.y - 4,
                vy: -420,
              });
              audio.playShoot();
            }
          }
        }
      } else {
        // Player Manual Keyboard controls
        if (g.keys.left) g.player.x -= g.player.speed * dt;
        if (g.keys.right) g.player.x += g.player.speed * dt;
      }

      // Clamp Player inside screen
      g.player.x = Math.max(16, Math.min(g.width - g.player.width - 16, g.player.x));

      // Draw Player Cannon Ship
      if (!g.player.isHit || Math.floor(currentTime / 80) % 2 === 0) {
        drawSprite(SPRITES.player, 0, g.player.x, g.player.y, 2, '#00ffcc');

        // Engine thruster flame glow underneath player ship
        ctx.fillStyle = 'rgba(0, 255, 204, 0.7)';
        ctx.fillRect(g.player.x + 10, g.player.y + 16, 6, 4 + Math.sin(currentTime * 0.03) * 2);
      }

      if (g.player.isHit) {
        g.player.hitTimer -= dt;
        if (g.player.hitTimer <= 0) {
          g.player.isHit = false;
        }
      }

      // 4. Update & Draw Player Bullets
      for (let i = g.bullets.length - 1; i >= 0; i--) {
        const b = g.bullets[i];
        b.y += b.vy * dt;

        // Draw laser beam
        ctx.fillStyle = '#00ffff';
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 8;
        ctx.fillRect(b.x - 1, b.y, 3, 10);
        ctx.shadowBlur = 0;

        // Check Bunker collision
        let hitBunker = false;
        for (let j = g.bunkers.length - 1; j >= 0; j--) {
          const bk = g.bunkers[j];
          if (b.x >= bk.x && b.x <= bk.x + bk.width && b.y >= bk.y && b.y <= bk.y + bk.height) {
            bk.hp -= 1;
            spawnParticles(b.x, b.y, '#00ffcc', 4);
            if (bk.hp <= 0) g.bunkers.splice(j, 1);
            hitBunker = true;
            break;
          }
        }

        if (hitBunker) {
          g.bullets.splice(i, 1);
          continue;
        }

        // Check UFO collision
        if (g.ufo && g.ufo.alive) {
          if (
            b.x >= g.ufo.x &&
            b.x <= g.ufo.x + g.ufo.width &&
            b.y >= g.ufo.y &&
            b.y <= g.ufo.y + g.ufo.height
          ) {
            g.ufo.alive = false;
            g.score += g.ufo.score || 200;
            spawnParticles(g.ufo.x + g.ufo.width / 2, g.ufo.y + g.ufo.height / 2, '#ff3366', 24);
            audio.playExplosion();
            g.bullets.splice(i, 1);
            setScore(g.score);
            continue;
          }
        }

        // Check Alien collision
        let hitAlien = false;
        for (let j = 0; j < g.aliens.length; j++) {
          const a = g.aliens[j];
          if (a.alive && b.x >= a.x && b.x <= a.x + a.width && b.y >= a.y && b.y <= a.y + a.height) {
            a.alive = false;
            hitAlien = true;
            g.score += a.score;
            if (g.score > g.highScore) {
              g.highScore = g.score;
              setHighScore(g.highScore);
              try {
                localStorage.setItem('space_invaders_hi', g.highScore.toString());
              } catch (e) {}
            }
            setScore(g.score);
            spawnParticles(a.x + a.width / 2, a.y + a.height / 2, a.color, 14);
            audio.playExplosion();
            break;
          }
        }

        if (hitAlien || b.y < 10) {
          g.bullets.splice(i, 1);
        }
      }

      // 5. Update & Draw Bunkers
      g.bunkers.forEach((bk) => {
        const alpha = bk.hp === 3 ? 0.95 : bk.hp === 2 ? 0.65 : 0.35;
        ctx.fillStyle = `rgba(0, 255, 204, ${alpha})`;
        ctx.fillRect(bk.x, bk.y, bk.width - 1, bk.height - 1);
      });

      // 6. Update Aliens Marching & Stepping
      const livingAliens = g.aliens.filter((a) => a.alive);
      if (livingAliens.length === 0) {
        // Wave Cleared!
        audio.playWaveClear();
        initWave(g.wave + 1);
        setBannerStatus(`WAVE ${g.wave} COMPLETED // ACCESSING ORBIT`);
      } else {
        // Adjust speed proportional to surviving aliens
        const speedMultiplier = 1 + (g.aliens.length - livingAliens.length) / g.aliens.length * 2.8;
        const currentInterval = g.stepInterval / speedMultiplier;

        g.stepTimer += dt;
        if (g.stepTimer >= currentInterval) {
          g.stepTimer = 0;
          g.animFrame = (g.animFrame + 1) % 2;

          let hitWall = false;
          livingAliens.forEach((a) => {
            if (
              (g.direction === 1 && a.x + a.width > g.width - 24) ||
              (g.direction === -1 && a.x < 24)
            ) {
              hitWall = true;
            }
          });

          if (hitWall) {
            g.direction *= -1;
            livingAliens.forEach((a) => {
              a.y += 12;
              // If aliens reach bunker / player line
              if (a.y + a.height >= g.player.y) {
                g.gameOver = true;
                setBannerStatus('SINGULARITY BREACH // GAME OVER');
              }
            });
          } else {
            livingAliens.forEach((a) => {
              a.x += g.direction * 11;
            });
          }

          // Random alien shoots back
          if (Math.random() < 0.65 && g.alienBullets.length < 3) {
            const shooter = livingAliens[Math.floor(Math.random() * livingAliens.length)];
            g.alienBullets.push({
              x: shooter.x + shooter.width / 2,
              y: shooter.y + shooter.height,
              vy: 190 + g.wave * 15,
            });
          }
        }

        // Draw Living Aliens
        livingAliens.forEach((a) => {
          const spriteInfo = SPRITES[a.type];
          drawSprite(spriteInfo, g.animFrame, a.x, a.y, 2.2);
        });
      }

      // 7. Update & Draw Alien Bullets
      for (let i = g.alienBullets.length - 1; i >= 0; i--) {
        const ab = g.alienBullets[i];
        ab.y += ab.vy * dt;

        // Plasma zig-zag bomb
        ctx.fillStyle = '#ff3366';
        ctx.shadowColor = '#ff3366';
        ctx.shadowBlur = 6;
        ctx.fillRect(ab.x - 1, ab.y, 3, 7);
        ctx.shadowBlur = 0;

        // Check Bunker collision
        let hitBunker = false;
        for (let j = g.bunkers.length - 1; j >= 0; j--) {
          const bk = g.bunkers[j];
          if (ab.x >= bk.x && ab.x <= bk.x + bk.width && ab.y >= bk.y && ab.y <= bk.y + bk.height) {
            bk.hp -= 1;
            spawnParticles(ab.x, ab.y, '#ff3366', 4);
            if (bk.hp <= 0) g.bunkers.splice(j, 1);
            hitBunker = true;
            break;
          }
        }

        if (hitBunker) {
          g.alienBullets.splice(i, 1);
          continue;
        }

        // Check Player collision
        if (
          !g.player.isHit &&
          ab.x >= g.player.x &&
          ab.x <= g.player.x + g.player.width &&
          ab.y >= g.player.y &&
          ab.y <= g.player.y + g.player.height
        ) {
          g.player.isHit = true;
          g.player.hitTimer = 1.4;
          g.lives -= 1;
          setLives(g.lives);
          spawnParticles(g.player.x + g.player.width / 2, g.player.y + g.player.height / 2, '#00ffff', 25);
          audio.playExplosion();
          g.alienBullets.splice(i, 1);

          if (g.lives <= 0) {
            g.gameOver = true;
            setBannerStatus('DEFENSE CANNON DESTROYED // GAME OVER');
          }
          continue;
        }

        if (ab.y > g.height - 10) {
          g.alienBullets.splice(i, 1);
        }
      }

      // 8. Update & Draw Particles
      for (let i = g.particles.length - 1; i >= 0; i--) {
        const p = g.particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;
        if (p.life <= 0) {
          g.particles.splice(i, 1);
          continue;
        }
        const alpha = p.life / p.maxLife;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.globalAlpha = 1.0;
      }

      // 9. Retro Bottom Ground Grid Line
      ctx.strokeStyle = 'rgba(0, 255, 204, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(10, 328);
      ctx.lineTo(g.width - 10, 328);
      ctx.stroke();

      ctx.restore();
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    // Keyboard Event Handlers
    const handleKeyDown = (e) => {
      const g = gameRef.current;
      if (['ArrowLeft', 'ArrowRight', ' ', 'ArrowUp', 'KeyA', 'KeyD'].includes(e.code)) {
        // Prevent page scroll when interacting with game keys
        if (document.activeElement === canvas || canvas.contains(document.activeElement)) {
          e.preventDefault();
        }
      }

      // Any player input disables auto-pilot and gives direct control
      if (['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD', ' ', 'ArrowUp'].includes(e.code)) {
        if (g.isAutoPilot) {
          g.isAutoPilot = false;
          setIsAutoPilot(false);
          setBannerStatus('PILOT MANUAL CONTROL ENGAGED');
          audio.init();
        }
      }

      if (e.code === 'ArrowLeft' || e.code === 'KeyA') g.keys.left = true;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') g.keys.right = true;
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        if (g.bullets.length < 2 && !g.gameOver) {
          g.bullets.push({
            x: g.player.x + g.player.width / 2 - 1,
            y: g.player.y - 4,
            vy: -420,
          });
          audio.playShoot();
        }
      }
    };

    const handleKeyUp = (e) => {
      const g = gameRef.current;
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') g.keys.left = false;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') g.keys.right = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [initWave]);

  // Touch & Mouse Button Controllers for Mobile
  const handleTouchLeftDown = (e) => {
    e.preventDefault();
    if (isAutoPilot) {
      setIsAutoPilot(false);
      gameRef.current.isAutoPilot = false;
    }
    gameRef.current.keys.left = true;
  };
  const handleTouchLeftUp = () => {
    gameRef.current.keys.left = false;
  };

  const handleTouchRightDown = (e) => {
    e.preventDefault();
    if (isAutoPilot) {
      setIsAutoPilot(false);
      gameRef.current.isAutoPilot = false;
    }
    gameRef.current.keys.right = true;
  };
  const handleTouchRightUp = () => {
    gameRef.current.keys.right = false;
  };

  const handleTouchShoot = (e) => {
    e.preventDefault();
    if (isAutoPilot) {
      setIsAutoPilot(false);
      gameRef.current.isAutoPilot = false;
    }
    audio.init();
    const g = gameRef.current;
    if (g.bullets.length < 2 && !g.gameOver) {
      g.bullets.push({
        x: g.player.x + g.player.width / 2 - 1,
        y: g.player.y - 4,
        vy: -420,
      });
      audio.playShoot();
    }
  };

  const handleScrollToGalaxy = () => {
    const el = document.getElementById('galaxy');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="arcade"
      ref={containerRef}
      className="space-invaders-banner relative w-full py-12 px-4 sm:px-8 lg:px-16 overflow-hidden border-y border-cyan-500/20 bg-[#030308]/95 z-20"
      aria-label="Orbital Defense Space Invaders Arcade"
    >
      {/* Ambient background glow matching cosmic theme */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,204,0.08)_0%,_rgba(138,43,226,0.05)_50%,_transparent_75%)]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Banner Cyber Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00ffcc]" />
            <div>
              <div className="text-xs font-mono tracking-[0.2em] text-cyan-400 font-semibold uppercase">
                SECTOR 00.5 // ORBITAL DEFENSE MATRIX
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-['Orbitron'] tracking-[0.14em] text-white flex items-center gap-2">
                SPACE INVADERS <span className="text-cyan-400">ARCADE</span>
              </h3>
            </div>
          </div>

          {/* Quick Arcade Controls & Telemetry */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* Auto-Pilot / Manual Control Pill */}
            <button
              type="button"
              onClick={toggleAutoPilot}
              className={`px-3 py-1.5 rounded-md font-mono text-xs font-semibold tracking-wider transition-all border ${
                isAutoPilot
                  ? 'bg-cyan-500/15 border-cyan-400/50 text-cyan-300 shadow-[0_0_12px_rgba(0,255,204,0.3)]'
                  : 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
              }`}
              title="Toggle between Auto-Pilot Demo and Manual Play"
            >
              {isAutoPilot ? '🤖 AUTO-PILOT' : '🎮 MANUAL CONTROL'}
            </button>

            {/* Audio Toggle Button */}
            <button
              type="button"
              onClick={toggleSound}
              className={`px-3 py-1.5 rounded-md font-mono text-xs font-semibold tracking-wider transition-all border ${
                soundOn
                  ? 'bg-[#00ffcc]/10 border-cyan-500/30 text-cyan-300'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}
              title="Toggle 8-bit arcade sound effects"
            >
              {soundOn ? '🔊 8-BIT AUDIO' : '🔇 MUTED'}
            </button>

            {/* Reset Mission Button */}
            <button
              type="button"
              onClick={resetGame}
              className="px-3 py-1.5 rounded-md font-mono text-xs font-semibold tracking-wider bg-white/5 hover:bg-white/10 border border-white/20 text-slate-300 hover:text-white transition-all"
              title="Reset current mission"
            >
              ↺ RESET
            </button>
          </div>
        </div>

        {/* Arcade Cabinet Frame */}
        <div className="relative rounded-xl border border-cyan-500/30 bg-[#060814]/90 backdrop-blur-md shadow-[0_0_35px_rgba(0,255,204,0.15)] overflow-hidden">
          {/* Top Arcade Telemetry HUD */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#030510] border-b border-cyan-500/20 text-xs font-mono tracking-widest text-slate-300 select-none">
            <div className="flex items-center gap-4">
              <span>
                SCORE <span className="text-[#ffaa00] font-bold">{String(score).padStart(5, '0')}</span>
              </span>
              <span>
                HI-SCORE <span className="text-[#00ffcc] font-bold">{String(highScore).padStart(5, '0')}</span>
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-cyan-400/80 text-[11px]">
              <span>STATUS:</span>
              <span className="text-white">{bannerStatus}</span>
            </div>

            <div className="flex items-center gap-4">
              <span>
                WAVE <span className="text-cyan-400 font-bold">{String(wave).padStart(2, '0')}</span>
              </span>
              <div className="flex items-center gap-1">
                <span className="text-slate-400">LIVES:</span>
                <span className="text-cyan-400">
                  {Array.from({ length: Math.max(0, lives) }).map((_, i) => (
                    <span key={i} className="inline-block mr-1">▲</span>
                  ))}
                  {lives <= 0 && <span className="text-red-400 font-bold">0</span>}
                </span>
              </div>
            </div>
          </div>

          {/* Canvas Viewport */}
          <div className="relative w-full aspect-[640/340] max-h-[440px] bg-[#030308]">
            <canvas
              ref={canvasRef}
              className="w-full h-full block cursor-crosshair select-none"
              tabIndex={0}
              aria-label="Space Invaders interactive arcade screen"
            />

            {/* Corner Sci-Fi Tech Brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
          </div>

          {/* Bottom Controls Bar & Mobile Touch Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#030510] border-t border-cyan-500/20 text-xs font-mono text-slate-400">
            {/* Keyboard Hint */}
            <div className="hidden md:flex items-center gap-2">
              <span className="text-cyan-400 font-semibold">[CONTROLS]:</span>
              <span>[← / →] or [A / D] to Move</span>
              <span>•</span>
              <span>[SPACE] to Fire</span>
            </div>

            {/* On-Screen Mobile Touch Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <button
                type="button"
                onPointerDown={handleTouchLeftDown}
                onPointerUp={handleTouchLeftUp}
                onPointerCancel={handleTouchLeftUp}
                className="px-4 py-2 rounded-lg bg-white/10 active:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 font-bold text-sm tracking-wider touch-none"
                aria-label="Move Left"
              >
                ◀ LEFT
              </button>

              <button
                type="button"
                onPointerDown={handleTouchShoot}
                className="px-6 py-2 rounded-lg bg-cyan-500/25 active:bg-cyan-500/50 border border-cyan-400 text-white font-bold text-sm tracking-wider shadow-[0_0_15px_rgba(0,255,204,0.4)] touch-none"
                aria-label="Fire Lasers"
              >
                ⚡ FIRE
              </button>

              <button
                type="button"
                onPointerDown={handleTouchRightDown}
                onPointerUp={handleTouchRightUp}
                onPointerCancel={handleTouchRightUp}
                className="px-4 py-2 rounded-lg bg-white/10 active:bg-cyan-500/30 border border-cyan-500/30 text-cyan-300 font-bold text-sm tracking-wider touch-none"
                aria-label="Move Right"
              >
                RIGHT ▶
              </button>
            </div>

            {/* Descent Prompt to Galaxy Panel */}
            <button
              type="button"
              onClick={handleScrollToGalaxy}
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 font-bold tracking-wider hover:underline"
            >
              CONTINUE TO GALAXY <span>↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpaceInvadersBanner;
