import React, { useState, useRef } from 'react';
import { Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { contact } from '../../data/portfolioData';

/**
 * MessageForm Component
 * Aerospace console chassis with precision glass inputs, telemetry feedback,
 * and button-in-button Gmail dispatch actions.
 */
export function MessageForm() {
  const recipientEmail = contact?.email || 'Kianrances@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });

  const [statusText, setStatusText] = useState(
    `ONLINE // TARGET: ${recipientEmail.toLowerCase()}`
  );
  const [hudFeedback, setHudFeedback] = useState({
    visible: false,
    text: '',
    type: '',
    link: null,
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [copiedState, setCopiedState] = useState(false);

  const feedbackTimerRef = useRef(null);
  const copyTimerRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Copy Email Handler
  const handleCopyEmail = () => {
    const emailToCopy = recipientEmail;

    const onCopySuccess = () => {
      setCopiedState(true);
      setStatusText('CLIPBOARD ACCESS GRANTED');
      setHudFeedback({
        visible: true,
        text: `COPIED TO CLIPBOARD: ${emailToCopy}`,
        type: 'success',
        link: null,
      });

      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => {
        setCopiedState(false);
      }, 2500);

      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
      feedbackTimerRef.current = setTimeout(() => {
        setHudFeedback((prev) => ({ ...prev, visible: false }));
      }, 3500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(emailToCopy)
        .then(onCopySuccess)
        .catch(() => {
          fallbackCopy(emailToCopy, onCopySuccess);
        });
    } else {
      fallbackCopy(emailToCopy, onCopySuccess);
    }
  };

  const fallbackCopy = (text, callback) => {
    try {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      if (callback) callback();
    } catch (err) {
      console.warn('Fallback copy failed:', err);
    }
  };

  // Gmail Compose Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.body.trim();

    const subjectLine = subject
      ? `[Portfolio Transmission] ${subject}`
      : `[Portfolio Transmission] Message from ${name}`;

    const bodyContent = `Transmitter Name: ${name}\nReturn Coordinates: ${email}\n\nPayload:\n${message}\n\n---\nTransmitted via Kian Rances Cagadas Terminal`;

    const fullSubject = encodeURIComponent(subjectLine);
    const fullBody = encodeURIComponent(bodyContent);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail.toLowerCase()}&su=${fullSubject}&body=${fullBody}`;

    let openedTab = null;
    try {
      openedTab = window.open('about:blank', '_blank');
    } catch (err) {
      openedTab = null;
    }

    setIsTransmitting(true);
    setProgressWidth(15);
    setStatusText('RESOLVING GMAIL DISPATCH...');
    setHudFeedback({
      visible: true,
      text: 'ENCRYPTING PAYLOAD & RESOLVING GMAIL... [25%]',
      type: 'transmitting',
      link: null,
    });

    setTimeout(() => {
      setProgressWidth(70);
      setHudFeedback({
        visible: true,
        text: `COORDINATES LOCKED: ${recipientEmail.toLowerCase()}... [70%]`,
        type: 'transmitting',
        link: null,
      });
    }, 250);

    setTimeout(() => {
      setProgressWidth(100);
      setStatusText(`DIRECTED TO GMAIL // ${recipientEmail.toLowerCase()}`);
      setHudFeedback({
        visible: true,
        text: 'OPENING GMAIL COMPOSE...',
        type: 'success',
        link: gmailUrl,
      });

      if (openedTab && !openedTab.closed) {
        openedTab.location.href = gmailUrl;
      } else {
        window.location.href = gmailUrl;
      }

      setTimeout(() => {
        setIsTransmitting(false);
      }, 2500);
    }, 700);
  };

  return (
    <div className="p-2.5 sm:p-3 rounded-[2.25rem] bg-white/[0.03] border border-white/10 ring-1 ring-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative mt-12">
      <div className="rounded-[calc(2.25rem-0.75rem)] bg-[#070a18]/95 p-6 sm:p-10 border border-white/5 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Console Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/70">
              MESSAGE COMPOSER
            </span>
          </div>

          <div className="font-mono text-xs tracking-wider text-cyan-400/90 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{statusText}</span>
          </div>
        </div>

        {/* Console Form */}
        <form id="contact-form" className="relative z-10 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="sender-name"
                className="block font-mono text-[11px] tracking-[0.16em] uppercase text-white/50 mb-2"
              >
                Transmitter Identity (Name)
              </label>
              <input
                type="text"
                id="sender-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="E.g. Dr. Jane Orbit"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 font-grotesk text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="sender-email"
                className="block font-mono text-[11px] tracking-[0.16em] uppercase text-white/50 mb-2"
              >
                Return Coordinates (Email)
              </label>
              <input
                type="email"
                id="sender-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E.g. jane@observatory.org"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 font-grotesk text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/30 transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="sender-subject"
              className="block font-mono text-[11px] tracking-[0.16em] uppercase text-white/50 mb-2"
            >
              Transmission Frequency (Subject)
            </label>
            <input
              type="text"
              id="sender-subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Project Collaboration - Technical Inquiry"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 font-grotesk text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/30 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="sender-message"
              className="block font-mono text-[11px] tracking-[0.16em] uppercase text-white/50 mb-2"
            >
              Transmission Payload (Message)
            </label>
            <textarea
              id="sender-message"
              name="body"
              rows={4}
              value={formData.body}
              onChange={handleInputChange}
              placeholder="Enter message payload here..."
              required
              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 font-grotesk text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/30 transition-all resize-y"
            />
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Primary Submit Button-in-Button */}
            <button
              type="submit"
              id="send-transmission-btn"
              className="inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-full bg-white text-black font-grotesk text-xs font-semibold tracking-wider uppercase hover:bg-cyan-300 transition-all duration-300 group cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <span>Transmit via Gmail</span>
              <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                <Send className="w-3.5 h-3.5 text-black" />
              </div>
            </button>

            {/* Secondary Copy Button */}
            <button
              type="button"
              id="copy-email-btn"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/10 text-white font-grotesk text-xs font-medium tracking-wider uppercase hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-pointer"
            >
              {copiedState ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white/60" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>
          </div>

          {/* Holographic Progress Bar */}
          {isTransmitting && (
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"
                style={{ width: `${progressWidth}%` }}
              />
            </div>
          )}

          {/* Feedback HUD */}
          {hudFeedback.visible && (
            <div
              className={`p-4 rounded-xl border text-xs font-mono tracking-wide ${
                hudFeedback.type === 'success'
                  ? 'bg-cyan-950/40 border-cyan-400/40 text-cyan-200'
                  : 'bg-white/[0.03] border-white/10 text-white/80'
              }`}
              role="status"
              aria-live="polite"
            >
              {hudFeedback.link ? (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>{hudFeedback.text}</span>
                  <a
                    href={hudFeedback.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-300 underline font-bold hover:text-cyan-200"
                  >
                    <span>Manual Link</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                hudFeedback.text
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default MessageForm;
