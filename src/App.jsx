import React, { useState } from 'react';
import { 
  ExternalLink, 
  ShieldCheck, 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Menu, 
  X, 
  Sparkles, 
  Zap, 
  Layers, 
  Image, 
  Eye, 
  HardDrive
} from 'lucide-react';
import tictactoeIcon from './assets/tictactoe_icon.jpg';
import cleansnapIcon from './assets/cleansnap_icon.jpg';
import './App.css';

// 100% Reliable Inline Studio Logo (Zero 404 issues on any host)
function StudioLogo({ size = 38 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, borderRadius: 10 }}
    >
      <defs>
        <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#241442" />
          <stop offset="50%" stopColor="#120924" />
          <stop offset="100%" stopColor="#080312" />
        </linearGradient>
        <linearGradient id="logoBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#ff8c00" />
        </linearGradient>
        <linearGradient id="logoA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="108" height="108" rx="26" fill="url(#logoBg)" stroke="url(#logoBorder)" strokeWidth="3.5" />
      <path d="M 26 34 L 34 26 M 86 94 L 94 86" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 60 26 L 86 88 L 73 88 L 66 71 L 54 71 L 47 88 L 34 88 Z M 60 45 L 57 60 L 63 60 Z" fill="url(#logoA)" />
      <circle cx="60" cy="56" r="3.5" fill="#ffffff" />
    </svg>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Official URLs
  const DEVELOPER_PROFILE_URL = "https://play.google.com/store/apps/developer?id=Aarsh+Tech&hl=en_IN";
  const TICTACTOE_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.aarsh.tictactoe&hl=en_IN";
  const DUPLICATE_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.aarsh.duplicatephotofinder&hl=en_IN";
  const TICTACTOE_PRIVACY_URL = "https://sites.google.com/view/tictactoeglow2playerxo/home";
  const DUPLICATE_PRIVACY_URL = "https://sites.google.com/view/duplicate-photo-finder-policy/home";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aarsh.official.dev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="app-root">
      {/* Sticky Clean Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="nav-brand">
            <StudioLogo size={36} />
            <span className="brand-title">
              Aarsh Tech
              <small className="brand-sub">Android Studio</small>
            </span>
          </a>

          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#apps" onClick={() => setIsMobileMenuOpen(false)}>Our Apps</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact & Support</a></li>
            <li>
              <a 
                href={DEVELOPER_PROFILE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: '#38bdf8' }}
              >
                Play Store Profile ↗
              </a>
            </li>
          </ul>

          <div className="nav-cta">
            <a 
              href={DEVELOPER_PROFILE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary nav-store-btn"
            >
              <ExternalLink size={16} />
              <span>Google Play Developer</span>
            </a>

            <button 
              className="mobile-toggle" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Clean Minimal Hero */}
      <header id="home" className="container studio-hero" style={{ paddingTop: 130, paddingBottom: 50 }}>
        <div className="studio-badge" style={{ marginBottom: 18 }}>
          <Sparkles size={15} style={{ color: 'var(--color-o-orange)' }} />
          <span>Independent Android Developer</span>
        </div>

        <h1 className="studio-title" style={{ fontSize: '3rem', marginBottom: 16 }}>
          AARSH TECH <br />
          <span className="studio-title-gradient">APPS & GAMES STUDIO</span>
        </h1>

        <p className="studio-subtitle" style={{ fontSize: '1.15rem', maxWidth: 640, marginBottom: 28 }}>
          Fast, lightweight, and privacy-first Android applications on Google Play. Built with modern Flutter architecture.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <a href="#apps" className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
            <span>View Published Apps</span>
          </a>
          <a 
            href={DEVELOPER_PROFILE_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary" 
            style={{ padding: '12px 24px', fontSize: '0.95rem' }}
          >
            <ExternalLink size={16} style={{ color: 'var(--color-o-orange)' }} />
            <span>Google Play Profile</span>
          </a>
        </div>
      </header>

      {/* PUBLISHED APPS SHOWCASE */}
      <section id="apps" className="section" style={{ paddingTop: 30, paddingBottom: 60 }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: 36 }}>
            <span style={{ color: 'var(--color-x-purple)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em' }}>GOOGLE PLAY RELEASES</span>
            <h2 style={{ fontSize: '2rem' }}>FEATURED APPLICATIONS</h2>
          </div>

          <div className="apps-showcase-grid">
            {/* App 1: Tic Tac Toe */}
            <div className="app-showcase-card app-card-tictactoe">
              <div className="app-card-header">
                <div className="app-card-icon-wrap">
                  <img src={tictactoeIcon} alt="Tic Tac Toe App Icon" className="app-card-icon-img" />
                </div>
                <div className="app-card-meta">
                  <span className="app-card-badge badge-purple">Version 2.0 • Game</span>
                  <h3 className="app-card-title">Tic Tac Toe : 2 Player XO & AI</h3>
                  <span className="app-card-category">Board & Strategy • 100% Free</span>
                </div>
              </div>

              <p className="app-card-desc">
                Futuristic neon cyberpunk strategy game with the revolutionary <strong>Infinity Vanishing Mode</strong>, expanded 3x3 to 6x6 grids, 20 ranked tiers, and smart offline AI.
              </p>

              <ul className="app-card-highlights">
                <li>
                  <Zap size={18} style={{ color: 'var(--color-x-purple)', flexShrink: 0, marginTop: 2 }} />
                  <div><strong>Infinity Mode:</strong> Max 3 pieces per player; 4th move vanishes oldest mark. Zero draws!</div>
                </li>
                <li>
                  <Layers size={18} style={{ color: 'var(--color-x-purple)', flexShrink: 0, marginTop: 2 }} />
                  <div><strong>Multiple Grids:</strong> Play Classic 3x3, 4x4, 5x5, and 6x6 Ultimate boards.</div>
                </li>
                <li>
                  <HardDrive size={18} style={{ color: 'var(--color-x-purple)', flexShrink: 0, marginTop: 2 }} />
                  <div><strong>Smart AI & Offline 2-Player:</strong> Challenge 3 AI levels or play with friends locally.</div>
                </li>
              </ul>

              <div className="app-card-actions">
                <a 
                  href={TICTACTOE_PLAY_STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="playstore-btn playstore-btn-purple"
                >
                  <ExternalLink size={17} />
                  <span>Get on Google Play</span>
                </a>

                <a 
                  href={TICTACTOE_PRIVACY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="app-details-btn"
                >
                  <ShieldCheck size={16} />
                  <span>Privacy Policy ↗</span>
                </a>
              </div>
            </div>

            {/* App 2: Duplicate Photo Finder */}
            <div className="app-showcase-card app-card-cleansnap">
              <div className="app-card-header">
                <div className="app-card-icon-wrap">
                  <img src={cleansnapIcon} alt="Duplicate Photo Finder App Icon" className="app-card-icon-img" />
                </div>
                <div className="app-card-meta">
                  <span className="app-card-badge badge-blue">Version 1.2 • Utility</span>
                  <h3 className="app-card-title">Duplicate Photo Finder & Cleaner</h3>
                  <span className="app-card-category">Tools & Storage • 100% Free</span>
                </div>
              </div>

              <p className="app-card-desc">
                Intelligent gallery organizer that detects exact duplicate photos, blurry shots, and old screenshots using perceptual dHash algorithms to reclaim gigabytes safely.
              </p>

              <ul className="app-card-highlights">
                <li>
                  <Image size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: 2 }} />
                  <div><strong>Duplicate Detection:</strong> Perceptual dHash & MD5 byte matching accurately groups identical photos.</div>
                </li>
                <li>
                  <Eye size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: 2 }} />
                  <div><strong>Blurry Photo & Screenshot Cleaner:</strong> Auto-flags low-quality shots and forgotten screenshots.</div>
                </li>
                <li>
                  <ShieldCheck size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: 2 }} />
                  <div><strong>100% On-Device & Private:</strong> Zero cloud uploads. All scanning runs strictly inside local device RAM.</div>
                </li>
              </ul>

              <div className="app-card-actions">
                <a 
                  href={DUPLICATE_PLAY_STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="playstore-btn"
                >
                  <ExternalLink size={17} />
                  <span>Get on Google Play</span>
                </a>

                <a 
                  href={DUPLICATE_PRIVACY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="app-details-btn"
                >
                  <ShieldCheck size={16} />
                  <span>Privacy Policy ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMAL DIRECT SUPPORT / CONTACT */}
      <section id="contact" className="section" style={{ paddingTop: 30, paddingBottom: 60, background: 'rgba(168,85,247,0.02)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-title" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--color-x-purple)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em' }}>DIRECT SUPPORT</span>
            <h2 style={{ fontSize: '1.85rem' }}>DEVELOPER CONTACT & FEEDBACK</h2>
            <p>Found an issue or have a suggestion? Connect directly with developer Aarsh.</p>
          </div>

          <div className="feedback-action-card" style={{ padding: 30, textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 8 }}>
              <Mail size={22} style={{ color: 'var(--color-x-purple)' }} />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>aarsh.official.dev@gmail.com</h3>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: 20 }}>
              Official developer inbox for bug reports, feature requests, and inquiries.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=Aarsh%20Tech%20App%20Feedback" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="gmail-compose-btn"
                style={{ padding: '12px 22px', fontSize: '0.9rem' }}
              >
                <Send size={16} />
                <span>Open in Gmail ↗</span>
              </a>

              <a 
                href="mailto:aarsh.official.dev@gmail.com?subject=Aarsh%20Tech%20Feedback" 
                className="mailto-compose-btn"
                style={{ padding: '12px 22px', fontSize: '0.9rem' }}
              >
                <Mail size={16} />
                <span>Default Mail App</span>
              </a>

              <button 
                className="copy-email-btn" 
                onClick={handleCopyEmail}
                style={{ padding: '12px 20px', fontSize: '0.9rem' }}
              >
                {copiedEmail ? <Check size={16} style={{ color: '#22c55e' }} /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="footer" style={{ padding: '40px 0 24px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <StudioLogo size={32} />
              <div>
                <strong style={{ color: '#fff', fontSize: '1.05rem', display: 'block' }}>Aarsh Tech</strong>
                <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Independent Android Studio</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: '0.9rem' }}>
              <a href={TICTACTOE_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Tic Tac Toe</a>
              <a href={DUPLICATE_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Photo Cleaner</a>
              <a href={TICTACTOE_PRIVACY_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Tic Tac Toe Policy ↗</a>
              <a href={DUPLICATE_PRIVACY_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Cleaner Policy ↗</a>
              <a href={DEVELOPER_PROFILE_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 700 }}>Google Play Profile ↗</a>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 20, fontSize: '0.85rem', color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} Aarsh Tech. All Rights Reserved. Created by Developer Aarsh.
          </div>
        </div>
      </footer>
    </div>
  );
}
