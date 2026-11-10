import React, { useState } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  X, 
  Trophy, 
  Zap, 
  Menu, 
  Copy, 
  Check, 
  ChevronDown, 
  Sparkles, 
  Layers, 
  ExternalLink, 
  Trash2, 
  Image, 
  Smartphone, 
  HardDrive, 
  Eye, 
  CheckCircle2, 
  Info,
  Mail,
  Send,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import './App.css';

export default function App() {
  // Navigation & Modals
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedAppModal, setSelectedAppModal] = useState(null); // 'tictactoe' | 'cleansnap' | null
  const [privacyTab, setPrivacyTab] = useState('tictactoe'); // 'tictactoe' | 'cleansnap' | 'general'
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [filterCategory, setFilterCategory] = useState('all'); // 'all' | 'games' | 'tools'
  const [copiedEmail, setCopiedEmail] = useState(false);

  // URLs
  const DEVELOPER_PROFILE_URL = "https://play.google.com/store/apps/developer?id=Aarsh+Tech&hl=en_IN";
  const TICTACTOE_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.aarsh.tictactoe&hl=en_IN";
  const DUPLICATE_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.aarsh.duplicatephotofinder&hl=en_IN";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aarsh.official.dev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Published Apps Catalog
  const apps = [
    {
      id: 'tictactoe',
      category: 'games',
      name: 'Tic Tac Toe : 2 Player XO & AI',
      packageId: 'com.aarsh.tictactoe',
      version: 'v2.0.0 (Latest)',
      icon: '/tictactoe_icon.jpg',
      badge: 'Version 2.0 • Featured Game',
      badgeColor: 'badge-purple',
      playStoreUrl: TICTACTOE_PLAY_STORE_URL,
      shortDesc: 'Futuristic neon cyberpunk Tic Tac Toe on Android featuring the all-new Infinity Vanishing Mode, 3x3 to 6x6 expanded board sizes, 20 ranked tiers, and local 2-player battles.',
      highlights: [
        { icon: <Zap size={18} style={{ color: 'var(--color-x-purple)' }} />, title: 'All-New Infinity Mode', desc: 'Max 3 marks per player. 4th move vanishes oldest mark; matches never end in draws!' },
        { icon: <Layers size={18} style={{ color: 'var(--color-x-purple)' }} />, title: '4 Grid Sizes (3x3 to 6x6)', desc: 'Play classic 3x3 or expanded 4x4, 5x5, and customizable 6x6 ultimate challenge boards.' },
        { icon: <Cpu size={18} style={{ color: 'var(--color-x-purple)' }} />, title: 'Dual Strategic AI Engine', desc: 'Isolate-powered minimax algorithms for both Classic & Infinity modes across Easy, Medium, and Hard.' },
        { icon: <Trophy size={18} style={{ color: 'var(--color-x-purple)' }} />, title: '20 Ranks & 5 Master Tiers', desc: 'Climb Bronze, Silver, Gold, Diamond, and Master tiers by earning match XP.' },
        { icon: <Sparkles size={18} style={{ color: 'var(--color-x-purple)' }} />, title: '8 Neon Cyberpunk Themes', desc: 'High-contrast visuals, customizable audio FX, coin flip, and live turn undo.' }
      ],
      specs: {
        platform: 'Android 7.0 and up',
        price: '100% Free',
        category: 'Strategy / Board Game',
        developer: 'Aarsh (Aarsh Tech Web)',
        updated: 'November 2026'
      }
    },
    {
      id: 'cleansnap',
      category: 'tools',
      name: 'Duplicate Photo Finder & Cleaner',
      packageId: 'com.aarsh.duplicatephotofinder',
      version: 'v1.2.0 (Active)',
      icon: '/cleansnap_icon.jpg',
      badge: 'Storage Saver • Top Utility',
      badgeColor: 'badge-blue',
      playStoreUrl: DUPLICATE_PLAY_STORE_URL,
      shortDesc: 'Intelligent on-device gallery organizer that identifies duplicate copies, blurry shots, and old screenshots using perceptual dHash algorithms to reclaim gigabytes safely.',
      highlights: [
        { icon: <Image size={18} style={{ color: '#38bdf8' }} />, title: 'Exact & Similar Photo Detection', desc: 'MD5 byte verification & dHash perceptual algorithms accurately group duplicate pictures.' },
        { icon: <Eye size={18} style={{ color: '#38bdf8' }} />, title: 'Blurry Photo Analyzer', desc: 'Automatically flags low-quality, out-of-focus pictures so you can purge them easily.' },
        { icon: <Smartphone size={18} style={{ color: '#38bdf8' }} />, title: 'Screenshot Cleanup Manager', desc: 'Auto-groups forgotten receipts, memes, and screenshots by month for 1-tap removal.' },
        { icon: <ShieldCheck size={18} style={{ color: '#38bdf8' }} />, title: '100% On-Device & Private', desc: 'Photos never leave your phone. All scanning runs entirely inside local device RAM.' },
        { icon: <Trash2 size={18} style={{ color: '#38bdf8' }} />, title: 'Safe System Deletion', desc: 'Uses Android MediaStore security confirmation to prevent accidental file loss.' }
      ],
      specs: {
        platform: 'Android 8.0 and up',
        price: '100% Free',
        category: 'Tools / Storage & Productivity',
        developer: 'Aarsh (Aarsh Tech Web)',
        updated: 'October 2026'
      }
    }
  ];

  const filteredApps = apps.filter(app => {
    if (filterCategory === 'games') return app.category === 'games';
    if (filterCategory === 'tools') return app.category === 'tools';
    return true;
  });

  return (
    <div className="app-root">
      {/* Sticky Studio Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="nav-brand">
            <img src="/studio_logo.svg" alt="Aarsh Tech Web Studio Logo" className="brand-icon" />
            <span className="brand-title">
              Aarsh Tech Web
              <small className="brand-sub">Android Apps & Games Studio</small>
            </span>
          </a>

          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#apps" onClick={() => setIsMobileMenuOpen(false)}>Our Apps</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Studio</a></li>
            <li><a href="#privacy" onClick={() => { setIsPrivacyModalOpen(true); setIsMobileMenuOpen(false); }}>Privacy Policies</a></li>
            <li><a href="#support" onClick={() => setIsMobileMenuOpen(false)}>Feedback & Contact</a></li>
          </ul>

          <div className="nav-cta">
            <a 
              href={DEVELOPER_PROFILE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary nav-store-btn"
            >
              <ExternalLink size={17} />
              <span>Google Play Developer</span>
            </a>

            <button 
              className="mobile-toggle" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="container studio-hero">
        <div className="studio-badge">
          <Sparkles size={16} style={{ color: 'var(--color-o-orange)' }} />
          <span>Official Android Developer Portfolio</span>
        </div>

        <h1 className="studio-title">
          INDEPENDENT ANDROID <br />
          <span className="studio-title-gradient">APPS & GAMES STUDIO</span>
        </h1>

        <p className="studio-subtitle">
          Welcome to <strong>Aarsh Tech Web</strong>. We engineer high-performance, battery-efficient, and privacy-first Android applications on Google Play — with butter-smooth Flutter architecture and cutting-edge UI.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="#apps" className="btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
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
              padding: '14px 28px', 
              borderRadius: 9999, 
              border: '1px solid rgba(255,255,255,0.2)', 
              color: '#fff', 
              textDecoration: 'none', 
              fontWeight: 700 
            }}
          >
            <ExternalLink size={18} style={{ color: 'var(--color-o-orange)' }} />
            <span>Google Play Profile</span>
          </a>
        </div>

        {/* Studio Highlights Bar */}
        <div className="studio-stats-bar">
          <div className="studio-stat-col">
            <div className="studio-stat-num">2+</div>
            <div className="studio-stat-label">Google Play Releases</div>
          </div>
          <div className="studio-stat-col">
            <div className="studio-stat-num">100%</div>
            <div className="studio-stat-label">Offline & Private</div>
          </div>
          <div className="studio-stat-col">
            <div className="studio-stat-num">60+ FPS</div>
            <div className="studio-stat-label">Engineered in Flutter</div>
          </div>
          <div className="studio-stat-col">
            <div className="studio-stat-num">0 Paywalls</div>
            <div className="studio-stat-label">Free on Google Play</div>
          </div>
        </div>
      </header>

      {/* PUBLISHED APPS SHOWCASE SECTION */}
      <section id="apps" className="section">
        <div className="container">
          <div className="section-title">
            <span style={{ color: 'var(--color-x-purple)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}>PORTFOLIO & PRODUCTS</span>
            <h2>OUR PUBLISHED ANDROID APPS</h2>
            <p>Every application is crafted with obsessive attention to user privacy, speed, and sleek aesthetics.</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="filter-tabs">
            <button 
              className={`filter-tab-btn ${filterCategory === 'all' ? 'active' : ''}`}
              onClick={() => setFilterCategory('all')}
            >
              All Releases ({apps.length})
            </button>
            <button 
              className={`filter-tab-btn ${filterCategory === 'games' ? 'active' : ''}`}
              onClick={() => setFilterCategory('games')}
            >
              🎮 Games & Strategy (1)
            </button>
            <button 
              className={`filter-tab-btn ${filterCategory === 'tools' ? 'active' : ''}`}
              onClick={() => setFilterCategory('tools')}
            >
              ⚡ Storage & Tools (1)
            </button>
          </div>

          {/* Apps Cards Dual Showcase */}
          <div className="apps-showcase-grid">
            {filteredApps.map((app) => (
              <div key={app.id} className={`app-showcase-card ${app.id === 'tictactoe' ? 'app-card-tictactoe' : 'app-card-cleansnap'}`}>
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

                {/* Description */}
                <p className="app-card-desc">
                  {app.shortDesc}
                </p>

                {/* Highlights List */}
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
                    <span>View App Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT DEVELOPER & STUDIO PHILOSOPHY */}
      <section id="about" className="section" style={{ background: 'rgba(168,85,247,0.02)' }}>
        <div className="container">
          <div className="section-title">
            <span style={{ color: 'var(--color-x-purple)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}>BEHIND THE CODE</span>
            <h2>DEVELOPMENT PRINCIPLES</h2>
            <p>Every product published under Aarsh Tech Web is built on three core pillars.</p>
          </div>

          <div className="features-grid">
            <div className="glass-card feature-card">
              <div className="feature-icon-wrapper">
                <HardDrive size={28} />
              </div>
              <h3>Privacy by Design</h3>
              <p>We build local-first software. Your photos, game stats, and preferences never touch external servers or cloud trackers.</p>
            </div>

            <div className="glass-card feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(56,189,248,0.15)', borderColor: 'rgba(56,189,248,0.3)', color: '#38bdf8' }}>
                <Zap size={28} />
              </div>
              <h3>60 FPS Flutter Speed</h3>
              <p>Engineered with modern Flutter and clean architectural patterns to guarantee snappy gestures, low RAM usage, and high battery life.</p>
            </div>

            <div className="glass-card feature-card">
              <div className="feature-icon-wrapper" style={{ background: 'rgba(255,140,0,0.15)', borderColor: 'rgba(255,140,0,0.3)', color: 'var(--color-o-orange)' }}>
                <ShieldCheck size={28} />
              </div>
              <h3>Google Play Certified</h3>
              <p>All releases adhere strictly to Google Play User Data policies, COPPA guidelines, and Android MediaStore safety frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span style={{ color: 'var(--color-o-orange)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}>HELP & INQUIRIES</span>
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <p>Common questions regarding our applications, privacy, and downloads.</p>
          </div>

          <div className="faq-list" style={{ maxWidth: 780, margin: '0 auto' }}>
            {[
              {
                q: "Where can I download Aarsh Tech Web apps?",
                a: "All our official applications and games are published directly on the Google Play Store for Android. You can click any 'Get on Google Play' button on this site to install them safely."
              },
              {
                q: "Are the applications free to use?",
                a: "Yes! Both Tic Tac Toe : 2 Player XO & AI and Duplicate Photo Finder (CleanSnap) are 100% free to download and use with zero locked paywalls."
              },
              {
                q: "How does Duplicate Photo Finder protect my personal photos?",
                a: "Duplicate Photo Finder operates strictly offline inside your device's local memory. Photos are NEVER transmitted to external servers, cloud databases, or third parties. File deletions are confirmed using Android's native secure MediaStore prompt."
              },
              {
                q: "Can I play Tic Tac Toe offline without internet?",
                a: "Yes! Tic Tac Toe is completely offline-capable. You can challenge smart AI difficulty engines or play pass-and-play matches with friends on one phone anywhere."
              },
              {
                q: "How can I report a bug or request a new feature?",
                a: "You can send an email directly to developer Aarsh at aarsh.official.dev@gmail.com using the direct email buttons below."
              }
            ].map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="faq-item"
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                >
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </div>
                  {isOpen && <div className="faq-answer">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIRECT DEVELOPER SUPPORT & FEEDBACK HUB */}
      <section id="support" className="section" style={{ background: 'rgba(168,85,247,0.02)' }}>
        <div className="container">
          <div className="section-title">
            <span style={{ color: 'var(--color-x-purple)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}>DIRECT CHANNEL</span>
            <h2>FEEDBACK & DEVELOPER SUPPORT</h2>
            <p>Connect with developer Aarsh directly. Click below to launch your email app or Gmail composer with pre-filled topics.</p>
          </div>

          <div className="feedback-hub-container">
            {/* Box 1: Direct Email Actions */}
            <div className="feedback-action-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Mail size={22} style={{ color: 'var(--color-x-purple)' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Direct Developer Email</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Have questions, found a bug, or have a feature suggestion? Reach out directly to our official developer mailbox.
                </p>

                <div className="feedback-direct-email-box">
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                    Official Mail Address:
                  </div>
                  <div className="feedback-email-text">
                    aarsh.official.dev@gmail.com
                  </div>

                  <button className="copy-email-btn" onClick={handleCopyEmail}>
                    {copiedEmail ? <Check size={16} style={{ color: '#22c55e' }} /> : <Copy size={16} />}
                    <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
                  </button>
                </div>
              </div>

              <div className="email-launch-buttons">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=Aarsh%20Tech%20Web%20App%20Feedback" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gmail-compose-btn"
                >
                  <Send size={18} />
                  <span>Open & Compose in Gmail</span>
                </a>

                <a 
                  href="mailto:aarsh.official.dev@gmail.com?subject=Aarsh%20Tech%20Web%20Feedback" 
                  className="mailto-compose-btn"
                >
                  <Mail size={18} />
                  <span>Open Default Email App</span>
                </a>
              </div>
            </div>

            {/* Box 2: Quick Feedback Topics */}
            <div className="feedback-action-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <MessageSquare size={22} style={{ color: 'var(--color-o-orange)' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Quick Inquiries by Topic</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Choose your topic below to automatically open an email draft with a formatted subject line:
                </p>

                <div className="quick-topics-grid">
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=%5BBug%20Report%5D%20Issue%20Found%20in%20App" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="quick-topic-btn"
                  >
                    <span>🐛 Report a Bug / Crash</span>
                    <ArrowRight size={16} />
                  </a>

                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=%5BFeature%20Request%5D%20New%20Idea%20for%20App" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="quick-topic-btn"
                  >
                    <span>💡 Suggest a New Feature</span>
                    <ArrowRight size={16} />
                  </a>

                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=%5BTic%20Tac%20Toe%20Support%5D%20Inquiry" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="quick-topic-btn"
                  >
                    <span>🎮 Tic Tac Toe Support</span>
                    <ArrowRight size={16} />
                  </a>

                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=%5BDuplicate%20Photo%20Finder%20Support%5D%20Inquiry" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="quick-topic-btn"
                  >
                    <span>🖼️ Duplicate Photo Finder Support</span>
                    <ArrowRight size={16} />
                  </a>

                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=%5BGeneral%20Inquiry%5D%20Partnership%20or%20Studio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="quick-topic-btn"
                  >
                    <span>🤝 Business / General Inquiries</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                Response Time: Developer Aarsh typically reviews and replies within <strong>24–48 hours</strong>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="nav-brand" style={{ marginBottom: 12 }}>
                <img src="/studio_logo.svg" alt="Aarsh Tech Web Studio Logo" className="brand-icon" />
                <span>Aarsh Tech Web</span>
              </a>
              <p>
                Independent Android Development Studio. Creating high-performance, battery-friendly, and privacy-respecting mobile experiences on Google Play.
              </p>
            </div>

            <div className="footer-col">
              <h4>Published Apps</h4>
              <ul>
                <li><a href={TICTACTOE_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">Tic Tac Toe : 2 Player XO & AI</a></li>
                <li><a href={DUPLICATE_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">Duplicate Photo Finder & Cleaner</a></li>
                <li><a href="#apps">All Releases</a></li>
                <li><a href="#about">Studio Philosophy</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Play Store & Legal</h4>
              <ul>
                <li><button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }} onClick={() => { setPrivacyTab('tictactoe'); setIsPrivacyModalOpen(true); }}>Tic Tac Toe Privacy Policy</button></li>
                <li><button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }} onClick={() => { setPrivacyTab('cleansnap'); setIsPrivacyModalOpen(true); }}>Duplicate Photo Finder Policy</button></li>
                <li><button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }} onClick={() => { setPrivacyTab('general'); setIsPrivacyModalOpen(true); }}>General Studio Privacy</button></li>
                <li><a href="#support">Feedback & Support</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Studio Credentials</h4>
              <ul>
                <li style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Developer: <strong style={{ color: '#fff' }}>Aarsh</strong></li>
                <li style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Company: <strong style={{ color: '#fff' }}>Aarsh Tech Web</strong></li>
                <li style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Email: <a href="mailto:aarsh.official.dev@gmail.com" style={{ color: 'var(--color-x-purple)' }}>aarsh.official.dev@gmail.com</a></li>
                <li style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Google Play: <a href={DEVELOPER_PROFILE_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Aarsh Tech Profile ↗</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Aarsh Tech Web. All Rights Reserved. Designed & Developed by Aarsh.</p>
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

            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 14 }}>Core Features:</h4>
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

              <button 
                className="app-details-btn"
                onClick={() => {
                  setPrivacyTab(selectedAppModal.id);
                  setSelectedAppModal(null);
                  setIsPrivacyModalOpen(true);
                }}
              >
                <ShieldCheck size={16} />
                <span>View Privacy Policy</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UNIFIED PRIVACY POLICY CENTER MODAL */}
      {isPrivacyModalOpen && (
        <div className="modal-overlay" onClick={() => setIsPrivacyModalOpen(false)}>
          <div className="modal-content privacy-modal-styled" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsPrivacyModalOpen(false)}>
              <X size={20} />
            </button>

            <div className="privacy-header">
              <ShieldCheck size={32} style={{ color: 'var(--color-x-purple)' }} />
              <div>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800 }}>Aarsh Tech Web Privacy Policy Center</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 4 }}>
                  Official Google Play Compliance Documentation • Developer: <strong>Aarsh</strong>
                </p>
              </div>
            </div>

            {/* Privacy Tabs */}
            <div className="privacy-tabs-bar">
              <button 
                className={`privacy-tab-btn ${privacyTab === 'tictactoe' ? 'active' : ''}`}
                onClick={() => setPrivacyTab('tictactoe')}
              >
                Tic Tac Toe Policy (com.aarsh.tictactoe)
              </button>
              <button 
                className={`privacy-tab-btn ${privacyTab === 'cleansnap' ? 'active' : ''}`}
                onClick={() => setPrivacyTab('cleansnap')}
              >
                Duplicate Photo Finder (com.aarsh.duplicatephotofinder)
              </button>
              <button 
                className={`privacy-tab-btn ${privacyTab === 'general' ? 'active' : ''}`}
                onClick={() => setPrivacyTab('general')}
              >
                General Studio Terms
              </button>
            </div>

            <div className="privacy-body">
              {privacyTab === 'tictactoe' && (
                <>
                  <p className="privacy-intro">
                    This Privacy Policy applies to the mobile game <strong>Tic Tac Toe : 2 Player XO & AI</strong> (`com.aarsh.tictactoe`). It outlines how the application operates with respect to user data, offline functionality, and Google Mobile Ads (AdMob) SDK integration.
                  </p>

                  <div className="privacy-section-box">
                    <h4>1. Zero Personal Data Collection</h4>
                    <p>We do not collect, transmit, or sell personal identifiers such as name, phone number, address, contacts, or biometric data.</p>
                  </div>

                  <div className="privacy-section-box">
                    <h4>2. Google Mobile Ads (AdMob) Integration</h4>
                    <p>
                      To support ongoing maintenance and free access, the game integrates the Google Mobile Ads SDK. Google AdMob may process pseudonymous technical device identifiers (Android Advertising ID, IP address, OS version) and crash logs to serve non-intrusive advertisements and monitor ad fraud.
                    </p>
                    <p>
                      Refer to <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-x-purple)' }}>Google Ad Policies</a> for further details.
                    </p>
                  </div>

                  <div className="privacy-section-box">
                    <h4>3. Permissions & Local Storage</h4>
                    <p>The game requires <code>android.permission.INTERNET</code> solely to fetch ad assets. Game progress, 20-level XP, win streaks, and sound settings are saved strictly locally in Android SharedPreferences.</p>
                  </div>
                </>
              )}

              {privacyTab === 'cleansnap' && (
                <>
                  <p className="privacy-intro">
                    This Privacy Policy applies to <strong>Duplicate Photo Finder & Cleaner (CleanSnap)</strong> (`com.aarsh.duplicatephotofinder`). It details our strict local-only media processing architecture.
                  </p>

                  <div className="privacy-section-box">
                    <h4>1. 100% Local Media Processing</h4>
                    <p>
                      The Application is built as a local device utility. All duplicate image comparisons, perceptual dHash calculations, and blurry photo evaluations occur <strong>strictly inside your device RAM</strong>.
                    </p>
                    <p>
                      <strong>Photos, filenames, and image hashes are NEVER uploaded to remote cloud servers or third parties.</strong>
                    </p>
                  </div>

                  <div className="privacy-section-box">
                    <h4>2. Media Storage Permissions Disclosure</h4>
                    <p>
                      The app requests <code>READ_MEDIA_IMAGES</code> (Android 13+) or <code>READ_EXTERNAL_STORAGE</code> (Android 12 and below) exclusively to read photos for duplicate detection. File deletions require explicit native confirmation via Android's secure <code>MediaStore.createDeleteRequest</code>.
                    </p>
                  </div>

                  <div className="privacy-section-box">
                    <h4>3. Data Retention Period: Zero (0) Days</h4>
                    <p>No user photos, thumbnails, or metadata are ever saved externally. Uninstalling the app completely removes all local caches.</p>
                  </div>
                </>
              )}

              {privacyTab === 'general' && (
                <>
                  <p className="privacy-intro">
                    General privacy and terms of service for all mobile software published by <strong>Aarsh Tech Web</strong>.
                  </p>

                  <div className="privacy-section-box">
                    <h4>Children's Privacy (COPPA Compliance)</h4>
                    <p>Our applications do not knowingly collect personal information from children under 13. All integrated ad SDKs are configured under Google Play Families policy standards.</p>
                  </div>

                  <div className="privacy-section-box">
                    <h4>Contacting the Developer</h4>
                    <p>For inquiries, questions, or privacy requests across any Aarsh Tech Web application, contact <strong>aarsh.official.dev@gmail.com</strong>.</p>
                  </div>
                </>
              )}
            </div>

            <div className="privacy-footer">
              <button className="btn-primary" onClick={() => setIsPrivacyModalOpen(false)}>
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
