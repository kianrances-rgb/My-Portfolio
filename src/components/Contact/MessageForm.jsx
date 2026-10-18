import React, { useState, useRef } from 'react';
import { contact } from '../../data/portfolioData';

/**
 * MessageForm Component
 * Subspace Transmission Console Box with Gmail Dispatch URL Composer,
 * status indicator LEDs, clipboard copy helper with instant visual feedback,
 * and holographic encryption progress bar animation.
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
    `STATUS: ONLINE - TARGET: ${recipientEmail.toLowerCase()}`
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

  // 1. Copy Email Address Handler
  const handleCopyEmail = () => {
    const emailToCopy = recipientEmail;

    const onCopySuccess = () => {
      setCopiedState(true);
      setStatusText('STATUS: CLIPBOARD ACCESS GRANTED - READY');
      setHudFeedback({
        visible: true,
        text: `✦ EMAIL ADDRESS COPIED TO CLIPBOARD - ${emailToCopy}`,
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

  // 2. Direct Subspace Message Composer Directed to Gmail Compose
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.body.trim();

    const subjectLine = subject
      ? `[Cosmic Transmission] ${subject}`
      : `[Cosmic Transmission] Message from ${name}`;

    const bodyContent = `Transmitter Name: ${name}\nReturn Coordinates (Email): ${email}\n\nTransmission Payload:\n${message}\n\n--------------------------------------------------\nTransmitted via Kian Rances Cagadas Cosmic Terminal`;

    const fullSubject = encodeURIComponent(subjectLine);
    const fullBody = encodeURIComponent(bodyContent);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail.toLowerCase()}&su=${fullSubject}&body=${fullBody}`;

    // Pre-open blank tab synchronously to prevent popup blockers
    let openedTab = null;
    try {
      openedTab = window.open('about:blank', '_blank');
    } catch (err) {
      openedTab = null;
    }

    // Holographic encryption sequence
    setIsTransmitting(true);
    setProgressWidth(10);
    setStatusText('STATUS: PREPARING GMAIL DISPATCH...');
    setHudFeedback({
      visible: true,
      text: 'ENCRYPTING PAYLOAD & RESOLVING GMAIL... [25%]',
      type: 'transmitting',
      link: null,
    });

    setTimeout(() => {
      setProgressWidth(65);
      setHudFeedback({
        visible: true,
        text: `COORDINATES LOCKED: ${recipientEmail.toLowerCase()}... [65%]`,
        type: 'transmitting',
        link: null,
      });
    }, 250);

    setTimeout(() => {
      setProgressWidth(100);
      setStatusText(
        `STATUS: DIRECTED TO GMAIL - RECIPIENT: ${recipientEmail.toLowerCase()}`
      );
      setHudFeedback({
        visible: true,
        text: '✦ OPENING GMAIL COMPOSE...',
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
    <div className="transmission-console-box">
      {/* Top Console Light Bar & Status */}
      <div className="console-top-bar">
        <div className="console-lights" aria-hidden="true">
          <span className="clight c-red" />
          <span className="clight c-yellow" />
          <span className="clight c-green" />
        </div>
        <div className="console-title">
          DIRECT MESSAGE COMPOSER - GMAIL DISPATCH
        </div>
        <div id="console-status-text" className="console-status">
          {statusText}
        </div>
      </div>

      {/* Interactive Form */}
      <form
        id="contact-form"
        className="console-form"
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="sender-name">TRANSMITTER IDENTITY (NAME)</label>
            <input
              type="text"
              id="sender-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="E.g. Dr. Jane Orbit"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sender-email">RETURN COORDINATES (EMAIL)</label>
            <input
              type="email"
              id="sender-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E.g. jane@observatory.org"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="sender-subject">TRANSMISSION FREQUENCY (SUBJECT)</label>
          <input
            type="text"
            id="sender-subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Project Collaboration - Technical Inquiry"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sender-message">TRANSMISSION PAYLOAD (MESSAGE)</label>
          <textarea
            id="sender-message"
            name="body"
            rows={4}
            value={formData.body}
            onChange={handleInputChange}
            placeholder="Enter transmission message payload here..."
            required
          />
        </div>

        <div className="form-submit-row">
          {/* Submit Action */}
          <button
            type="submit"
            className="cosmic-btn primary-btn submit-btn"
            id="send-transmission-btn"
          >
            <span>COMPOSE &amp; TRANSMIT VIA GMAIL</span>
            <svg
              className="btn-arrow w-4 h-4 ml-1.5 transition-transform duration-200"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>

          {/* Secondary Action: Copy Email */}
          <button
            type="button"
            className="cosmic-btn secondary-btn"
            id="copy-email-btn"
            title="Copy email address to clipboard"
            onClick={handleCopyEmail}
            style={
              copiedState
                ? { borderColor: '#00ffcc', color: '#00ffcc' }
                : undefined
            }
          >
            <span id="copy-email-text">
              {copiedState ? 'COPIED TO CLIPBOARD! ✦' : 'COPY EMAIL ADDRESS'}
            </span>
          </button>
        </div>

        {/* In-Console Holographic Feedback HUD & Progress Bar */}
        <div
          id="transmission-progress-bar"
          className={`transmission-progress-bar ${isTransmitting ? 'active' : ''}`}
          aria-hidden="true"
        >
          <div
            id="transmission-progress-fill"
            className="progress-fill"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

        <div
          id="transmission-hud-feedback"
          className={`transmission-hud-feedback ${
            hudFeedback.visible ? 'visible' : ''
          } ${hudFeedback.type}`}
          role="status"
          aria-live="polite"
        >
          {hudFeedback.link ? (
            <>
              {hudFeedback.text}
              <a
                href={hudFeedback.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ffcc] underline font-bold"
              >
                CLICK HERE IF GMAIL DID NOT OPEN AUTOMATICALLY
              </a>
            </>
          ) : (
            hudFeedback.text
          )}
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
