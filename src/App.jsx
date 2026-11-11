import React, { useState } from 'react';
import { 
  Zap, 
  Layers, 
  Cpu, 
  Trophy, 
  Sparkles, 
  Image, 
  Eye, 
  Smartphone, 
  ShieldCheck, 
  Trash2, 
  ExternalLink, 
  Mail, 
  Copy, 
  Check 
} from 'lucide-react';
import tictactoeIcon from './assets/tictactoe_icon.jpg';
import cleansnapIcon from './assets/cleansnap_icon.jpg';
import './App.css';

// 100% Vector Inline Studio Logo (Zero 404 on any host or subfolder)
function StudioLogo({ size = 36 }) {
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
      <rect x="6" y="6" width="108" height="108" rx="26" fill="url(#logoBg)" stroke="url(#logoBorder)" strokeWidth="3.5" />
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

  // Published Apps Catalog (All 5 Highlights Preserved, Versions Removed)
  const apps = [
    {
      id: 'tictactoe',
      name: 'Tic Tac Toe : 2 Player XO & AI',
      packageId: 'com.aarsh.tictactoe',
      icon: tictactoeIcon,
      badge: 'Featured Game',
      badgeColor: 'badge-purple',
      categoryLabel: 'Board & Strategy Game',
      playStoreUrl: TICTACTOE_PLAY_STORE_URL,
      privacyPolicyUrl: TICTACTOE_PRIVACY_URL,
      shortDesc: 'Futuristic neon cyberpunk Tic Tac Toe on Android featuring the all-new Infinity Vanishing Mode, 3x3 to 6x6 expanded board sizes, 20 ranked tiers, and local 2-player battles.',
      highlights: [
        { 
          icon: <Zap size={18} style={{ color: 'var(--color-x-purple)' }} />, 
          title: 'All-New Infinity Mode', 
          desc: 'Max 3 marks per player. 4th move vanishes oldest mark; matches never end in draws!' 
        },
        { 
          icon: <Layers size={18} style={{ color: 'var(--color-x-purple)' }} />, 
          title: '4 Grid Sizes (3x3 to 6x6)', 
          desc: 'Play classic 3x3 or expanded 4x4, 5x5, and customizable 6x6 ultimate challenge boards.' 
        },
        { 
          icon: <Cpu size={18} style={{ color: 'var(--color-x-purple)' }} />, 
          title: 'Dual Strategic AI Engine', 
          desc: 'Isolate-powered minimax algorithms for both Classic & Infinity modes across Easy, Medium, and Hard.' 
        },
        { 
          icon: <Trophy size={18} style={{ color: 'var(--color-x-purple)' }} />, 
          title: '20 Ranks & 5 Master Tiers', 
          desc: 'Climb Bronze, Silver, Gold, Diamond, and Master tiers by earning match XP.' 
        },
        { 
          icon: <Sparkles size={18} style={{ color: 'var(--color-x-purple)' }} />, 
          title: '8 Neon Cyberpunk Themes', 
          desc: 'High-contrast visuals, customizable audio FX, coin flip, and live turn undo.' 
        }
      ]
    },
    {
      id: 'cleansnap',
      name: 'Duplicate Photo Finder & Cleaner',
      packageId: 'com.aarsh.duplicatephotofinder',
      icon: cleansnapIcon,
      badge: 'Top Utility',
      badgeColor: 'badge-blue',
      categoryLabel: 'Storage & Productivity Tool',
      playStoreUrl: DUPLICATE_PLAY_STORE_URL,
      privacyPolicyUrl: DUPLICATE_PRIVACY_URL,
      shortDesc: 'Intelligent on-device gallery organizer that identifies duplicate copies, blurry shots, and old screenshots using perceptual dHash algorithms to reclaim gigabytes safely.',
      highlights: [
        { 
          icon: <Image size={18} style={{ color: '#38bdf8' }} />, 
          title: 'Exact & Similar Photo Detection', 
          desc: 'MD5 byte verification & dHash perceptual algorithms accurately group duplicate pictures.' 
        },
        { 
          icon: <Eye size={18} style={{ color: '#38bdf8' }} />, 
          title: 'Blurry Photo Analyzer', 
          desc: 'Automatically flags low-quality, out-of-focus pictures so you can purge them easily.' 
        },
        { 
          icon: <Smartphone size={18} style={{ color: '#38bdf8' }} />, 
          title: 'Screenshot Cleanup Manager', 
          desc: 'Auto-groups forgotten receipts, memes, and screenshots by month for 1-tap removal.' 
        },
        { 
          icon: <ShieldCheck size={18} style={{ color: '#38bdf8' }} />, 
          title: '100% On-Device & Private', 
          desc: 'Photos never leave your phone. All scanning runs entirely inside local device RAM.' 
        },
        { 
          icon: <Trash2 size={18} style={{ color: '#38bdf8' }} />, 
          title: 'Safe System Deletion', 
          desc: 'Uses Android MediaStore security confirmation to prevent accidental file loss.' 
        }
      ]
    }
  ];

  return (
    <div className="app-root">
      {/* Studio Header Bar */}
      <nav className="navbar">
        <div className="container nav-container" style={{ justifyContent: 'space-between' }}>
          <a href="#home" className="nav-brand">
            <StudioLogo size={36} />
            <span className="brand-title">
              Aarsh Tech
              <small className="brand-sub">Android Apps & Games</small>
            </span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href="#apps" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 600 }}>
              Our Apps
            </a>
            <a href="#support" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 600 }}>
              Support
            </a>
            <a 
              href={DEVELOPER_PROFILE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ padding: '9px 20px', fontSize: '0.88rem' }}
            >
              <ExternalLink size={16} />
              <span>Google Play Profile</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Minimal, Focused Hero */}
      <header id="home" className="container studio-hero" style={{ paddingTop: 130, paddingBottom: 40, textAlign: 'center' }}>
        <div className="studio-badge" style={{ marginBottom: 16 }}>
          <Sparkles size={15} style={{ color: 'var(--color-o-orange)' }} />
          <span>Official Android Developer Showcase</span>
        </div>

        <h1 className="studio-title" style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 12 }}>
          AARSH TECH <br />
          <span className="studio-title-gradient">ANDROID APPS & GAMES</span>
        </h1>

        <p className="studio-subtitle" style={{ maxWidth: 620, margin: '0 auto 24px auto', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
          High-performance, privacy-first, and battery-efficient Android applications published on Google Play.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <a href="#apps" className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
            <span>Explore Published Apps</span>
          </a>
          <a 
            href={DEVELOPER_PROFILE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 8, 
              padding: '12px 24px', 
              borderRadius: 9999, 
              border: '1px solid rgba(255,255,255,0.2)', 
              color: '#fff', 
              textDecoration: 'none', 
              fontWeight: 700 
            }}
          >
            <ExternalLink size={17} style={{ color: '#38bdf8' }} />
            <span>Google Play Profile</span>
          </a>
        </div>
      </header>

      {/* PUBLISHED APPS SHOWCASE SECTION */}
      <section id="apps" className="section" style={{ paddingTop: 20, paddingBottom: 60 }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{ color: 'var(--color-x-purple)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em' }}>PORTFOLIO & PRODUCTS</span>
            <h2 style={{ fontSize: '2.2rem', marginTop: 6 }}>OUR PUBLISHED ANDROID APPS</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 560, margin: '8px auto 0 auto' }}>
              Crafted with obsessive attention to user privacy, speed, and sleek modern aesthetics.
            </p>
          </div>

          {/* Apps Cards Dual Showcase */}
          <div className="apps-showcase-grid">
            {apps.map((app) => (
              <div 
                key={app.id} 
                className={`app-showcase-card ${app.id === 'tictactoe' ? 'app-card-tictactoe' : 'app-card-cleansnap'}`}
              >
                {/* Header with Icon, Name & Badge (No Version) */}
                <div className="app-card-header">
                  <div className="app-card-icon-wrap">
                    <img src={app.icon} alt={`${app.name} Icon`} className="app-card-icon-img" />
                  </div>
                  <div className="app-card-meta">
                    <span className={`app-card-badge ${app.badgeColor}`}>
                      {app.badge}
                    </span>
                    <h3 className="app-card-title">{app.name}</h3>
                    <span className="app-card-category">{app.categoryLabel}</span>
                  </div>
                </div>

                {/* Full Description */}
                <p className="app-card-desc">
                  {app.shortDesc}
                </p>

                {/* Highlights List with Icons */}
                <ul className="app-card-highlights">
                  {app.highlights.map((hl, i) => (
                    <li key={i}>
                      {hl.icon}
                      <div>
                        <strong>{hl.title}:</strong> {hl.desc}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Card Actions (Only Essential & Important Buttons) */}
                <div className="app-card-actions" style={{ display: 'flex', gap: 12, marginTop: 'auto', flexWrap: 'wrap' }}>
                  <a 
                    href={app.playStoreUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="playstore-btn playstore-btn-purple"
                    style={{ flex: '1 1 180px', justifyContent: 'center' }}
                  >
                    <ExternalLink size={18} />
                    <span>Get on Google Play</span>
                  </a>

                  <a 
                    href={app.privacyPolicyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="app-details-btn"
                    style={{ flex: '0 0 auto', justifyContent: 'center', color: 'var(--text-muted)' }}
                  >
                    <ShieldCheck size={16} />
                    <span>Privacy Policy ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPROVED PREMIUM DEVELOPER SUPPORT & FEEDBACK CARD */}
      <section id="support" className="section" style={{ paddingTop: 10, paddingBottom: 70 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div 
            className="glass-card" 
            style={{ 
              padding: '42px 36px', 
              borderRadius: 28, 
              textAlign: 'center',
              background: 'linear-gradient(180deg, rgba(28, 16, 48, 0.75) 0%, rgba(13, 7, 24, 0.9) 100%)',
              borderColor: 'rgba(168, 85, 247, 0.28)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient Background Glow */}
            <div 
              style={{ 
                position: 'absolute', 
                top: -60, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: 240, 
                height: 120, 
                background: 'rgba(168, 85, 247, 0.2)', 
                filter: 'blur(50px)', 
                pointerEvents: 'none', 
                borderRadius: '50%' 
              }} 
            />

            {/* Badge */}
            <div 
              className="studio-badge" 
              style={{ margin: '0 auto 16px auto', width: 'fit-content', background: 'rgba(168, 85, 247, 0.15)', borderColor: 'rgba(168, 85, 247, 0.35)' }}
            >
              <Mail size={14} style={{ color: 'var(--color-x-purple)' }} />
              <span>Direct Developer Channel</span>
            </div>

            {/* Title & Subtitle */}
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#fff', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
              Have Feedback or Need Support?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: 480, margin: '0 auto 28px auto', lineHeight: 1.6 }}>
              Encountered a bug, have an idea for a new feature, or have a question? Reach out directly to developer Aarsh.
            </p>

            {/* Clean Centered Email Pill */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 12, 
                background: 'rgba(10, 5, 20, 0.85)', 
                border: '1px solid rgba(255, 255, 255, 0.14)', 
                borderRadius: 9999, 
                padding: '8px 12px 8px 22px', 
                marginBottom: 26, 
                maxWidth: '100%',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <Mail size={16} style={{ color: '#38bdf8' }} />
              <strong style={{ color: '#fff', fontSize: '0.96rem', letterSpacing: '0.02em' }}>
                aarsh.official.dev@gmail.com
              </strong>
              <button 
                onClick={handleCopyEmail}
                style={{ 
                  background: copiedEmail ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.08)', 
                  border: copiedEmail ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.16)', 
                  borderRadius: 9999, 
                  color: copiedEmail ? '#22c55e' : '#fff', 
                  padding: '6px 14px', 
                  fontSize: '0.8rem', 
                  fontWeight: 700, 
                  cursor: 'pointer', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: 6, 
                  transition: 'all 0.2s ease' 
                }}
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=Aarsh%20Tech%20Feedback%20or%20Support" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ padding: '12px 26px', fontSize: '0.92rem' }}
              >
                <Mail size={16} />
                <span>Open in Gmail ↗</span>
              </a>

              <a 
                href="mailto:aarsh.official.dev@gmail.com?subject=Aarsh%20Tech%20Feedback" 
                className="btn-secondary"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: 8, 
                  padding: '12px 24px', 
                  borderRadius: 9999, 
                  border: '1px solid rgba(255, 255, 255, 0.18)', 
                  color: '#fff', 
                  textDecoration: 'none', 
                  fontWeight: 700,
                  fontSize: '0.92rem'
                }}
              >
                <span>Default Mail App</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Minimal Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px 0', fontSize: '0.86rem', color: 'var(--text-dim)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <StudioLogo size={24} />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Aarsh Tech</span>
          </div>

          <div>
            © {new Date().getFullYear()} Aarsh Tech. All Rights Reserved.
          </div>

          <a 
            href={DEVELOPER_PROFILE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 600 }}
          >
            Google Play Profile ↗
          </a>
        </div>
      </footer>
    </div>
  );
}