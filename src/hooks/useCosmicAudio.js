import { useState, useEffect, useCallback } from 'react';

// Singleton procedural Web Audio state across the application
let audioCtx = null;
let masterGain = null;
let droneOsc1 = null;
let droneOsc2 = null;
let droneFilter = null;
let droneGain = null;
let gravOsc = null;
let gravGain = null;
let gravFilter = null;
let isAudioActive = false;
const subscribers = new Set();

function notifySubscribers() {
  subscribers.forEach((callback) => {
    try {
      callback(isAudioActive);
    } catch (e) {
      console.error('Audio subscriber error:', e);
    }
  });
}

function initAudio() {
  if (audioCtx) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  audioCtx = new AudioContextClass();

  // Master Volume Gain
  masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
  masterGain.connect(audioCtx.destination);

  // 1. Ambient Cosmic Drone (Deep Space Binaural Hum)
  droneOsc1 = audioCtx.createOscillator();
  droneOsc1.type = 'sine';
  droneOsc1.frequency.setValueAtTime(55.0, audioCtx.currentTime); // A1 note (55 Hz)

  droneOsc2 = audioCtx.createOscillator();
  droneOsc2.type = 'triangle';
  droneOsc2.frequency.setValueAtTime(55.75, audioCtx.currentTime); // 0.75 Hz binaural beat

  droneFilter = audioCtx.createBiquadFilter();
  droneFilter.type = 'lowpass';
  droneFilter.frequency.setValueAtTime(140, audioCtx.currentTime);

  droneGain = audioCtx.createGain();
  droneGain.gain.setValueAtTime(0.6, audioCtx.currentTime);

  droneOsc1.connect(droneFilter);
  droneOsc2.connect(droneFilter);
  droneFilter.connect(droneGain);
  droneGain.connect(masterGain);

  droneOsc1.start();
  droneOsc2.start();

  // 2. Gravitational Singularity Shear Synth (Spaghettification Hum)
  gravOsc = audioCtx.createOscillator();
  gravOsc.type = 'sawtooth';
  gravOsc.frequency.setValueAtTime(45, audioCtx.currentTime);

  gravFilter = audioCtx.createBiquadFilter();
  gravFilter.type = 'lowpass';
  gravFilter.frequency.setValueAtTime(80, audioCtx.currentTime);
  gravFilter.Q.setValueAtTime(4, audioCtx.currentTime);

  gravGain = audioCtx.createGain();
  gravGain.gain.setValueAtTime(0.0, audioCtx.currentTime);

  gravOsc.connect(gravFilter);
  gravFilter.connect(gravGain);
  gravGain.connect(masterGain);

  gravOsc.start();

  isAudioActive = true;
  notifySubscribers();
}

/**
 * useCosmicAudio
 * Custom React hook for procedural Web Audio cosmic soundscapes.
 * Provides ambient binaural drone, gravitational shear synthesis, and celestial chimes.
 */
export function useCosmicAudio() {
  const [isPlaying, setIsPlaying] = useState(isAudioActive);

  useEffect(() => {
    subscribers.add(setIsPlaying);
    setIsPlaying(isAudioActive);

    // Auto-resume preference on first user gesture if previously enabled
    try {
      if (localStorage.getItem('cosmic_audio_active') === 'true' && !audioCtx) {
        const unlockAudio = () => {
          if (localStorage.getItem('cosmic_audio_active') === 'true' && !isAudioActive) {
            initAudio();
            if (audioCtx && audioCtx.state === 'suspended') {
              audioCtx.resume();
            }
          }
          window.removeEventListener('pointerdown', unlockAudio);
          window.removeEventListener('keydown', unlockAudio);
        };
        window.addEventListener('pointerdown', unlockAudio, { once: true });
        window.addEventListener('keydown', unlockAudio, { once: true });
      }
    } catch (e) {
      // LocalStorage access guard
    }

    return () => {
      subscribers.delete(setIsPlaying);
    };
  }, []);

  const toggleAudio = useCallback(() => {
    if (!audioCtx) {
      initAudio();
      try {
        localStorage.setItem('cosmic_audio_active', 'true');
      } catch (e) {}
      return true;
    }

    if (audioCtx.state === 'suspended' || !isAudioActive) {
      audioCtx.resume().then(() => {
        if (!masterGain) return;
        const now = audioCtx.currentTime;
        masterGain.gain.cancelScheduledValues(now);
        masterGain.gain.setValueAtTime(0.001, now);
        masterGain.gain.linearRampToValueAtTime(0.08, now + 0.12);
      });
      isAudioActive = true;
      notifySubscribers();
      try {
        localStorage.setItem('cosmic_audio_active', 'true');
      } catch (e) {}
      return true;
    } else {
      const now = audioCtx.currentTime;
      if (masterGain) {
        masterGain.gain.cancelScheduledValues(now);
        masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.12);
      }
      setTimeout(() => {
        if (!isAudioActive && audioCtx && audioCtx.state !== 'closed') {
          audioCtx.suspend();
        }
      }, 130);
      isAudioActive = false;
      notifySubscribers();
      try {
        localStorage.setItem('cosmic_audio_active', 'false');
      } catch (e) {}
      return false;
    }
  }, []);

  const setGravitationalShear = useCallback((ratio) => {
    if (!audioCtx || !isAudioActive || !gravGain || !gravOsc || !gravFilter) return;
    if (audioCtx.state === 'suspended') return;

    const clampedRatio = Math.max(0, Math.min(1, ratio));
    const now = audioCtx.currentTime;
    const targetGain = Math.min(0.7, clampedRatio * 0.85);
    const targetFreq = 45 + clampedRatio * 80;
    const targetCutoff = 80 + clampedRatio * 450;

    gravGain.gain.setTargetAtTime(targetGain, now, 0.05);
    gravOsc.frequency.setTargetAtTime(targetFreq, now, 0.05);
    gravFilter.frequency.setTargetAtTime(targetCutoff, now, 0.05);
  }, []);

  const playChime = useCallback(() => {
    if (!audioCtx || !isAudioActive || !masterGain) return;
    if (audioCtx.state === 'suspended') return;

    try {
      const now = audioCtx.currentTime;
      const chimeOsc = audioCtx.createOscillator();
      const chimeGain = audioCtx.createGain();

      chimeOsc.type = 'sine';
      chimeOsc.frequency.setValueAtTime(880, now); // A5
      chimeOsc.frequency.exponentialRampToValueAtTime(1760, now + 0.35); // A6 celestial glissando

      chimeGain.gain.setValueAtTime(0.06, now);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(masterGain);

      chimeOsc.start(now);
      chimeOsc.stop(now + 0.85);
    } catch (e) {
      console.error('Failed to play celestial chime:', e);
    }
  }, []);

  return {
    isPlaying,
    toggleAudio,
    setGravitationalShear,
    playChime,
  };
}

export function setCosmicAudioShearGlobal(ratio) {
  if (!audioCtx || !isAudioActive || !gravGain || !gravOsc || !gravFilter) return;
  if (audioCtx.state === 'suspended') return;

  const clampedRatio = Math.max(0, Math.min(1, ratio));
  const now = audioCtx.currentTime;
  const targetGain = Math.min(0.7, clampedRatio * 0.85);
  const targetFreq = 45 + clampedRatio * 80;
  const targetCutoff = 80 + clampedRatio * 450;

  gravGain.gain.setTargetAtTime(targetGain, now, 0.05);
  gravOsc.frequency.setTargetAtTime(targetFreq, now, 0.05);
  gravFilter.frequency.setTargetAtTime(targetCutoff, now, 0.05);
}

if (typeof window !== 'undefined') {
  window.setCosmicAudioShear = setCosmicAudioShearGlobal;
  window.CosmicAudio = window.CosmicAudio || {};
  window.CosmicAudio.setGravitationalPitch = setCosmicAudioShearGlobal;
  window.addEventListener('cosmic-audio-shear', (e) => {
    if (e.detail && typeof e.detail.shear === 'number') {
      setCosmicAudioShearGlobal(e.detail.shear);
    }
  });
}

export default useCosmicAudio;

