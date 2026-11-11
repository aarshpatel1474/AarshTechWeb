import React, { useState } from 'react';
import { 
  ExternalLink, 
  ShieldCheck, 
  Mail, 
  Copy, 
  Check, 
  Sparkles
} from 'lucide-react';
import tictactoeIcon from './assets/tictactoe_icon.jpg';
import cleansnapIcon from './assets/cleansnap_icon.jpg';
import './App.css';

// 100% Vector Inline Logo — Never 404s
function StudioLogo({ size = 32 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, borderRadius: 8 }}
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
      <rect x="6" y="6" width="108" height="108" rx="26" fill="url(#logoBg)" stroke="url(#borderGrad, #c084fc)" strokeWidth="3.5" />
      <path d="M 60 26 L 86 88 L 73 88 L 66 71 L 54 71 L 47 88 L 34 88 Z M 60 45 L 57 60 L 63 60 Z" fill="url(#logoA)" />
      <circle cx="60" cy="56" r="3.5" fill="#ffffff" />
    </svg>
  );
}

export default function App() {
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
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="app-root">
      {/* Clean Header Bar */}
      <nav className="navbar">
        <div className="container nav-container" style={{ justifyContent: 'space-between' }}>
          <a href="#home" className="nav-brand">
            <StudioLogo size={34} />
            <span className="brand-title">
              Aarsh Tech
              <small className="brand-sub">Android Apps</small>
            </span>
          </a>

          <a 
            href={DEVELOPER_PROFILE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <ExternalLink size={15} />
            <span>Google Play Profile</span>
          </a>
        </div>
      </nav>

      {/* Hero Section — Minimal & Punchy */}
      <header id="home" className="container" style={{ paddingTop: 120, paddingBottom: 40, textAlign: 'center' }}>
        <div className="studio-badge" style={{ marginBottom: 16 }}>
          <Sparkles size={14} style={{ color: 'var(--color-o-orange)' }} />
          <span>Official Developer Showcase</span>
        </div>

        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>
          Aarsh Tech
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 520, margin: '0 auto 24px auto', lineHeight: 1.5 }}>
          Simple, fast, and privacy-focused Android applications.
        </p>
      </header>

      {/* Featured Apps — Clean Minimal Cards */}
      <main className="container" style={{ paddingBottom: 60, maxWidth: 860 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          
          {/* Card 1: Tic Tac Toe */}
          <div className="glass-card" style={{ padding: 28, borderRadius: 24, display: 'flex', flexDirection: 'column', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <img 
                src={tictactoeIcon} 
                alt="Tic Tac Toe Icon" 
                style={{ width: 72, height: 72, borderRadius: 18, objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)' }} 
              />
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#e9d5ff', background: 'rgba(168,85,247,0.2)', padding: '3px 10px', borderRadius: 9999, border: '1px solid rgba(168,85,247,0.4)', textTransform: 'uppercase' }}>
                  Game • v2.0
                </span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: '6px 0 2px 0' }}>
                  Tic Tac Toe : 2 Player XO
                </h2>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Board & Strategy</div>
              </div>
            </div>

            {/* Quick Feature Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '14px 0 24px 0' }}>
              <span className="pill-btn" style={{ cursor: 'default', background: 'rgba(168,85,247,0.12)', color: '#fff', borderColor: 'rgba(168,85,247,0.25)' }}>
                ♾️ Infinity Mode (No Draws)
              </span>
              <span className="pill-btn" style={{ cursor: 'default', background: 'rgba(168,85,247,0.12)', color: '#fff', borderColor: 'rgba(168,85,247,0.25)' }}>
                📐 3×3 to 6×6 Boards
              </span>
              <span className="pill-btn" style={{ cursor: 'default', background: 'rgba(168,85,247,0.12)', color: '#fff', borderColor: 'rgba(168,85,247,0.25)' }}>
                🤖 Smart AI + Offline 2P
              </span>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 'auto', flexWrap: 'wrap' }}>
              <a 
                href={TICTACTOE_PLAY_STORE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center', padding: '11px 18px', fontSize: '0.9rem', background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}
              >
                <ExternalLink size={16} />
                <span>Google Play</span>
              </a>

              <a 
                href={TICTACTOE_PRIVACY_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                style={{ padding: '11px 16px', fontSize: '0.85rem' }}
              >
                <ShieldCheck size={15} />
                <span>Privacy Policy ↗</span>
              </a>
            </div>
          </div>

          {/* Card 2: Duplicate Photo Finder */}
          <div className="glass-card" style={{ padding: 28, borderRadius: 24, display: 'flex', flexDirection: 'column', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <img 
                src={cleansnapIcon} 
                alt="Duplicate Photo Finder Icon" 
                style={{ width: 72, height: 72, borderRadius: 18, objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)' }} 
              />
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#bae6fd', background: 'rgba(56,189,248,0.2)', padding: '3px 10px', borderRadius: 9999, border: '1px solid rgba(56,189,248,0.4)', textTransform: 'uppercase' }}>
                  Utility • v1.2
                </span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: '6px 0 2px 0' }}>
                  Duplicate Photo Finder
                </h2>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Storage & Tools</div>
              </div>
            </div>

            {/* Quick Feature Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '14px 0 24px 0' }}>
              <span className="pill-btn" style={{ cursor: 'default', background: 'rgba(56,189,248,0.12)', color: '#fff', borderColor: 'rgba(56,189,248,0.25)' }}>
                🔍 Similar & Exact Duplicates
              </span>
              <span className="pill-btn" style={{ cursor: 'default', background: 'rgba(56,189,248,0.12)', color: '#fff', borderColor: 'rgba(56,189,248,0.25)' }}>
                🖼️ Blurry Photos Cleaner
              </span>
              <span className="pill-btn" style={{ cursor: 'default', background: 'rgba(56,189,248,0.12)', color: '#fff', borderColor: 'rgba(56,189,248,0.25)' }}>
                🔒 100% On-Device & Private
              </span>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 'auto', flexWrap: 'wrap' }}>
              <a 
                href={DUPLICATE_PLAY_STORE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center', padding: '11px 18px', fontSize: '0.9rem', background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)' }}
              >
                <ExternalLink size={16} />
                <span>Google Play</span>
              </a>

              <a 
                href={DUPLICATE_PRIVACY_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                style={{ padding: '11px 16px', fontSize: '0.85rem' }}
              >
                <ShieldCheck size={15} />
                <span>Privacy Policy ↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Minimal Direct Contact Box */}
        <div className="glass-card" style={{ marginTop: 32, padding: '24px 28px', borderRadius: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Mail size={20} style={{ color: 'var(--color-x-purple)' }} />
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase' }}>Developer Support</div>
              <strong style={{ color: '#fff', fontSize: '1rem' }}>aarsh.official.dev@gmail.com</strong>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=Aarsh%20Tech%20Support" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <span>Email Support ↗</span>
            </a>

            <button 
              className="btn-secondary" 
              onClick={handleCopyEmail}
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              {copiedEmail ? <Check size={14} style={{ color: '#22c55e' }} /> : <Copy size={14} />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </main>

      {/* Clean Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px 0', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>© {new Date().getFullYear()} Aarsh Tech. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href={DEVELOPER_PROFILE_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>Google Play Store ↗</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
