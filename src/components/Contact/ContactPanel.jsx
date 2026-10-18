import React from 'react';
import { contact } from '../../data/portfolioData';
import { ChannelCard } from './ChannelCard';
import { MessageForm } from './MessageForm';

/**
 * ContactPanel Component
 * Direct communication channels and interactive message composer terminal.
 */
export function ContactPanel() {
  const channels = contact?.channels || [];

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* 1. Atmospheric subtle backdrop gradient */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(0,255,204,0.05),transparent_70%)]"
        aria-hidden="true"
      />

      {/* 2. Panel Container */}
      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Section Header with Macro-Whitespace */}
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 ring-1 ring-white/5 text-[11px] font-mono tracking-[0.2em] text-white/70 mb-6 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)]" />
            <span>DIRECT CONNECT</span>
            <span className="text-white/20">/</span>
            <span className="text-white/50">SUBSPACE LINK</span>
          </div>

          <h2
            id="contact-heading"
            className="font-grotesk text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            CONTACT
          </h2>

          <p className="font-outfit text-base sm:text-lg font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
            Transmit your communication directly across the cosmic spectrum. Connect instantly via any terminal below.
          </p>
        </header>

        {/* 3-Column Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {channels.map((ch) => (
            <ChannelCard key={ch.type} channel={ch} />
          ))}
        </div>

        {/* Subspace Transmission Console Wrapper */}
        <div className="relative max-w-4xl mx-auto w-full">
          <MessageForm />
        </div>
      </div>
    </section>
  );
}

export default ContactPanel;
