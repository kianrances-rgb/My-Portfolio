/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-cyan': '#00ffcc',
        'void-black': '#030308',
        'cosmic-gold': '#ffaa00',
        'pulsar-purple': '#8a2be2',
        cosmic: {
          cyan: '#00ffcc',
          void: '#030308',
          gold: '#ffaa00',
          purple: '#8a2be2',
          deep: '#060714',
          surface: '#0b0e24',
          elevated: '#111538',
          border: 'rgba(140, 180, 255, 0.16)',
          white: '#f4f8ff',
          muted: '#9ab0d6',
          dim: '#5c6e94',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        oxanium: ['Oxanium', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        tech: ['"Share Tech Mono"', 'monospace'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
