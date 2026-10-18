import React from 'react';

/**
 * ChannelCard Component
 * Displays a direct communication channel card (Email, GitHub, Facebook)
 * with glassmorphic styling, neon protocol badge, SVG icon, and hover glow effects.
 *
 * @param {Object} props
 * @param {Object} props.channel
 * @param {string} props.channel.num - Channel sequence code (e.g. '01')
 * @param {string} props.channel.type - Channel type ('email' | 'github' | 'facebook')
 * @param {string} props.channel.label - Display label (e.g. 'Email Address')
 * @param {string} props.channel.value - Target coordinate or address
 * @param {string} props.channel.instruction - Action prompt
 * @param {string} props.channel.btnText - Call-to-action button label
 * @param {string} props.channel.href - URL or mailto destination
 */
export function ChannelCard({ channel }) {
  if (!channel) return null;

  const { num, type, label, value, instruction, btnText, href } = channel;

  const protocolMap = {
    email: 'MAILTO PROTOCOL',
    github: 'GIT REPOSITORY',
    facebook: 'SOCIAL CONNECT',
  };

  const protocol = protocolMap[type] || `${(type || 'CHANNEL').toUpperCase()} PROTOCOL`;
  const isExternal = type !== 'email';

  const renderIcon = () => {
    switch (type) {
      case 'email':
        return (
          <svg
            className="ch-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 6L12 13L2 6" />
          </svg>
        );

      case 'github':
        return (
          <svg
            className="ch-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        );

      case 'facebook':
        return (
          <svg
            className="ch-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );

      default:
        return (
          <svg
            className="ch-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
    }
  };

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`channel-card ${type}-channel group`}
      id={`${type}-channel-link`}
      title={instruction}
      aria-label={`${label}: ${value} - ${instruction}`}
    >
      {/* Background radial hover glow */}
      <div className="channel-glow" aria-hidden="true" />

      {/* Protocol Badge Header */}
      <div className="channel-header">
        <span className="ch-badge font-mono">CHANNEL</span>
        <span className="ch-proto font-mono">{protocol}</span>
      </div>

      {/* Channel SVG Icon Frame */}
      <div className="channel-icon-box" aria-hidden="true">
        {renderIcon()}
      </div>

      {/* Channel Label & Target Info */}
      <h3 className="channel-label">{label}</h3>
      <p className="channel-value">{value}</p>
      <p className="channel-instruction">{instruction}</p>

      {/* Action CTA Button Text */}
      <div className="channel-action">
        <span className="action-btn-text">
          {btnText}
        </span>
      </div>
    </a>
  );
}

export default ChannelCard;
