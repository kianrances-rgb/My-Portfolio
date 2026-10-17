import React from 'react';
import { contact } from '../../data/portfolioData';
import { ChannelCard } from './ChannelCard';
import { WanderingAstro } from './WanderingAstro';
import { MessageForm } from './MessageForm';

/**
 * ContactPanel Component
 * Sector 03 // Subspace Transceiver: Direct Contact & Subspace Message Console
 * Features:
 * - Ambient atmospheric backdrop glow
 * - 3-column grid of direct communication channels (Email, GitHub, Facebook)
 * - Interactive Wandering Astronaut Mascot (360° somersaults, speech greetings, sound effects)
 * - Subspace Transmission Console Message Composer with direct Gmail dispatch
 */
export function ContactPanel() {
  const channels = contact?.channels || [];

  return (
    <section
      id="contact"
      className="cosmic-panel contact-panel relative min-h-screen w-full py-24 px-4 sm:px-8 lg:px-16 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Atmosphere backdrop glow */}
      <div
        className="panel-atmosphere contact-backdrop absolute inset-0 pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Panel Content Container */}
      <div className="panel-container relative max-w-7xl mx-auto w-full z-[2]">
        {/* Section Header */}
        <header className="panel-header text-center mb-16 relative">
          <div className="panel-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0f23]/80 border border-cyan-500/30 text-xs tracking-[0.16em] mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,204,0.15)]">
            <span className="sector-code font-mono text-cyan-400 font-semibold">
              SECTOR 03 // SUBSPACE TRANSCEIVER
            </span>
            <span className="badge-accent text-slate-400 font-medium">
              DIRECT CONTACT
            </span>
          </div>

          <h2
            id="contact-heading"
            className="panel-title font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.16em] uppercase text-white mb-3 text-shadow-[0_4px_18px_rgba(0,0,0,0.9)] drop-shadow-[0_0_25px_rgba(93,230,255,0.25)]"
          >
            SUBSPACE TRANSMISSION // CONTACT
          </h2>

          <p className="panel-subtitle font-body text-base sm:text-lg font-medium tracking-[0.03em] text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Transmit your message directly across the cosmic spectrum. Click any terminal below to connect immediately.
          </p>
        </header>

        {/* 3-Column Contact Channels Grid (Email, GitHub, Facebook) */}
        <div className="contact-channels-grid">
          {channels.map((ch) => (
            <ChannelCard key={ch.num || ch.type} channel={ch} />
          ))}
        </div>

        {/* Subspace Transmission Console Wrapper with Wandering Astronaut Mascot */}
        <div className="transmission-console-wrapper relative">
          <WanderingAstro />
          <MessageForm />
        </div>
      </div>
    </section>
  );
}

export default ContactPanel;
