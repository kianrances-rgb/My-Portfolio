import React from 'react';
import { Mail, Github, Facebook, ArrowUpRight } from 'lucide-react';

/**
 * ChannelCard Component
 * Double-bezel communication port with Button-in-Button interactive micro-CTA.
 *
 * @param {Object} props
 * @param {Object} props.channel
 */
export function ChannelCard({ channel }) {
  if (!channel) return null;

  const { type, label, value, instruction, btnText, href } = channel;

  const protocolMap = {
    email: 'MAILTO PROTOCOL',
    github: 'GIT REPOSITORY',
    facebook: 'SOCIAL CONNECT',
  };

  const protocol = protocolMap[type] || 'SECURE LINK';
  const isExternal = type !== 'email';

  const renderIcon = () => {
    switch (type) {
      case 'email':
        return <Mail className="w-5 h-5 text-cyan-300" />;
      case 'github':
        return <Github className="w-5 h-5 text-white" />;
      case 'facebook':
        return <Facebook className="w-5 h-5 text-blue-400" />;
      default:
        return <Mail className="w-5 h-5 text-cyan-300" />;
    }
  };

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="p-2.5 rounded-[2rem] bg-white/[0.03] border border-white/10 ring-1 ring-white/5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(0,255,204,0.12)] transition-all duration-500 group flex flex-col block"
      id={`${type}-channel-link`}
      title={instruction}
      aria-label={`${label}: ${value} - ${instruction}`}
    >
      <div className="rounded-[calc(2rem-0.625rem)] bg-[#070a18]/95 p-6 sm:p-7 border border-white/5 flex flex-col justify-between h-full relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div
          className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-700"
          aria-hidden="true"
        />

        {/* Top Protocol Status */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-400/90 bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-500/20">
            {protocol}
          </span>
          <span
            className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)]"
            aria-hidden="true"
          />
        </div>

        {/* Channel Icon & Information */}
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 ring-1 ring-white/5 flex items-center justify-center mb-5 group-hover:border-cyan-400/40 group-hover:scale-105 transition-all duration-300">
            {renderIcon()}
          </div>

          <h3 className="font-grotesk text-lg font-bold text-white tracking-wide">
            {label}
          </h3>
          <p className="font-mono text-sm text-white/60 group-hover:text-cyan-200 transition-colors mt-1.5 break-all">
            {value}
          </p>
          <p className="font-outfit text-xs text-white/40 mt-2 leading-relaxed">
            {instruction}
          </p>
        </div>

        {/* Button-in-Button Micro-CTA */}
        <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between relative z-10">
          <span className="font-grotesk text-xs uppercase tracking-wider font-semibold text-white/70 group-hover:text-white transition-colors">
            {btnText || 'Connect'}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-cyan-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_12px_rgba(0,255,204,0.2)]">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default ChannelCard;
