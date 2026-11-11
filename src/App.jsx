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
  Info, 
  X, 
  CheckCircle2, 
  Mail, 
  Copy, 
  Check 
} from 'lucide-react';
import tictactoeIcon from './assets/tictactoe_icon.jpg';
import cleansnapIcon from './assets/cleansnap_icon.jpg';
import './App.css';

// 100% Vector Inline Studio Logo (Zero 404 on any host or subfolder)
function StudioLogo({ size = 34 }) {
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
  const [selectedAppModal, setSelectedAppModal] = useState(null);
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

  // Full, Authentic App Details
  const apps = [
    {
      id: 'tictactoe',
      category: 'games',
      name: 'Tic Tac Toe : 2 Player XO & AI',
      packageId: 'com.aarsh.tictactoe',
      version: 'v2.0.0 (Latest)',
      icon: tictactoeIcon,
      badge: 'Version 2.0 • Featured Game',
      badgeColor: 'badge-purple',
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
      ],
      specs: {
        platform: 'Android 7.0 and up',
        price: '100% Free',
        category: 'Strategy / Board Game',
        developer: 'Aarsh Tech',
        updated: 'November 2026'
      }
    },
    {
      id: 'cleansnap',
      category: 'tools',
      name: 'Duplicate Photo Finder & Cleaner',
      packageId: 'com.aarsh.duplicatephotofinder',
      version: 'v1.2.0 (Active)',
      icon: cleansnapIcon,
      badge: 'Storage Saver • Top Utility',
      badgeColor: 'badge-blue',
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
      ],
      specs: {
        platform: 'Android 8.0 and up',
        price: '100% Free',
        category: 'Tools / Storage & Productivity',
        developer: 'Aarsh Tech',
        updated: 'October 2026'
      }
    }
  ];

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

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="#apps" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Our Apps
            </a>
            <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Support
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
        </div>
      </nav>

      {/* Clean Minimal Hero */}
      <header id="home" className="container studio-hero" style={{ paddingTop: 130, paddingBottom: 40, textAlign: 'center' }}>
        <div className="studio-badge" style={{ marginBottom: 16 }}>
          <Sparkles size={15} style={{ color: 'var(--color-o-orange)' }} />
          <span>Official Android Developer Showcase</span>
        </div>

        <h1 className="studio-title" style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 12 }}>
          AARSH TECH <br />
          <span className="studio-title-gradient">ANDROID APPS & GAMES</span>
        </h1>

        <p className="studio-subtitle" style={{ maxWidth: 640, margin: '0 auto 24px auto' }}>
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
          <div className="section-title" style={{ textAlign: 'center', marginBottom: 40 }}>
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
                {/* Header with Icon, Name & Badge */}
                <div className="app-card-header">
                  <div className="app-card-icon-wrap">
                    <img src={app.icon} alt={`${app.name} Icon`} className="app-card-icon-img" />
                  </div>
                  <div className="app-card-meta">
                    <span className={`app-card-badge ${app.badgeColor}`}>
                      {app.badge}
                    </span>
                    <h3 className="app-card-title">{app.name}</h3>
                    <span className="app-card-category">{app.specs.category} • {app.version}</span>
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

                {/* Card Actions */}
                <div className="app-card-actions">
                  <a 
                    href={app.playStoreUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`playstore-btn ${app.id === 'tictactoe' ? 'playstore-btn-purple' : ''}`}
                  >
                    <ExternalLink size={18} />
                    <span>Get on Google Play</span>
                  </a>

                  <button 
                    className="app-details-btn"
                    onClick={() => setSelectedAppModal(app)}
                  >
                    <Info size={16} />
                    <span>View Details</span>
                  </button>

                  <a 
                    href={app.privacyPolicyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="app-details-btn"
                    style={{ color: 'var(--text-muted)' }}
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

      {/* Direct Contact & Feedback Box */}
      <section id="contact" className="container" style={{ paddingBottom: 60, maxWidth: 900 }}>
        <div className="glass-card" style={{ padding: '30px 36px', borderRadius: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-x-purple)' }}>
              <Mail size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Developer Support & Feedback</div>
              <strong style={{ color: '#fff', fontSize: '1.1rem' }}>aarsh.official.dev@gmail.com</strong>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=Aarsh%20Tech%20Inquiry%20or%20Feedback" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <Mail size={16} />
              <span>Email Support ↗</span>
            </a>

            <button 
              className="btn-secondary" 
              onClick={handleCopyEmail}
              style={{ padding: '10px 18px', fontSize: '0.9rem' }}
            >
              {copiedEmail ? <Check size={16} style={{ color: '#22c55e' }} /> : <Copy size={16} />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '28px 0', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>© {new Date().getFullYear()} Aarsh Tech. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href={DEVELOPER_PROFILE_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>Google Play Developer Profile ↗</a>
          </div>
        </div>
      </footer>

      {/* APP DETAILS MODAL */}
      {selectedAppModal && (
        <div className="modal-overlay" onClick={() => setSelectedAppModal(null)}>
          <div className="app-detail-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedAppModal(null)}>
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
              <img src={selectedAppModal.icon} alt={selectedAppModal.name} style={{ width: 72, height: 72, borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)', objectFit: 'cover' }} />
              <div>
                <span className={`app-card-badge ${selectedAppModal.badgeColor}`}>{selectedAppModal.badge}</span>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', margin: '4px 0' }}>{selectedAppModal.name}</h2>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Package: <code style={{ color: 'var(--color-o-orange)' }}>{selectedAppModal.packageId}</code></div>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.98rem' }}>
              {selectedAppModal.shortDesc}
            </p>

            <div className="app-spec-grid">
              <div className="app-spec-item">
                <span className="app-spec-lbl">Category</span>
                <span className="app-spec-val">{selectedAppModal.specs.category}</span>
              </div>
              <div className="app-spec-item">
                <span className="app-spec-lbl">Required Android OS</span>
                <span className="app-spec-val">{selectedAppModal.specs.platform}</span>
              </div>
              <div className="app-spec-item">
                <span className="app-spec-lbl">Pricing</span>
                <span className="app-spec-val">{selectedAppModal.specs.price}</span>
              </div>
              <div className="app-spec-item">
                <span className="app-spec-lbl">Last Update</span>
                <span className="app-spec-val">{selectedAppModal.specs.updated}</span>
              </div>
            </div>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '20px 0 12px 0', color: '#fff' }}>Core Features:</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {selectedAppModal.highlights.map((hl, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.925rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={17} style={{ color: '#22c55e', flexShrink: 0, marginTop: 2 }} />
                  <div><strong>{hl.title}:</strong> {hl.desc}</div>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <a 
                href={selectedAppModal.playStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="playstore-btn"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <ExternalLink size={18} />
                <span>Open in Google Play Store</span>
              </a>

              <a 
                href={selectedAppModal.privacyPolicyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="app-details-btn"
              >
                <ShieldCheck size={16} />
                <span>Direct Privacy Policy ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}