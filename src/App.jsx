import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Users, 
  Cpu, 
  ShieldCheck, 
  Send, 
  X, 
  Trophy, 
  Zap, 
  RotateCcw, 
  Menu, 
  Copy, 
  Check, 
  ChevronDown, 
  Sparkles, 
  Play,
  Layers,
  ExternalLink,
  Trash2,
  Image,
  Smartphone,
  HardDrive,
  Eye,
  CheckCircle2,
  Info
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: 'App Feedback & Support', message: '' });

  // Playable Mini Demo State (for Tic Tac Toe)
  const [gameMode, setGameMode] = useState('infinity'); // 'infinity' | 'classic'
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [xMoves, setXMoves] = useState([]);
  const [oMoves, setOMoves] = useState([]);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [history, setHistory] = useState([]);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [vsAi, setVsAi] = useState(true);

  // URLs
  const TICTACTOE_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.aarsh.tictactoe&hl=en_IN";
  const DUPLICATE_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.aarsh.duplicatephotofinder&hl=en_IN";

  // Check 3x3 Win condition for Playable Demo
  const checkWinner = (currentBoard) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (const [a, b, c] of lines) {
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return { winner: currentBoard[a], line: [a, b, c] };
      }
    }
    if (!currentBoard.includes(null)) {
      return { winner: 'draw', line: [] };
    }
    return null;
  };

  const resetGame = (newMode = gameMode) => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setXMoves([]);
    setOMoves([]);
    setWinner(null);
    setWinningLine([]);
    setHistory([]);
    setGameMode(newMode);
  };

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    setHistory(prev => [...prev, {
      board: [...board],
      turn,
      xMoves: [...xMoves],
      oMoves: [...oMoves]
    }]);

    const newBoard = [...board];
    let newXMoves = [...xMoves];
    let newOMoves = [...oMoves];

    if (gameMode === 'infinity') {
      const currentQueue = turn === 'X' ? newXMoves : newOMoves;
      if (currentQueue.length >= 3) {
        const oldestIndex = currentQueue.shift();
        newBoard[oldestIndex] = null;
      }
      currentQueue.push(index);
      newBoard[index] = turn;
      if (turn === 'X') setXMoves(newXMoves);
      else setOMoves(newOMoves);
    } else {
      newBoard[index] = turn;
    }

    setBoard(newBoard);

    const winResult = checkWinner(newBoard);
    if (winResult) {
      setWinner(winResult.winner);
      setWinningLine(winResult.line);
      if (winResult.winner !== 'draw') {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        setScores(prev => ({ ...prev, [winResult.winner]: prev[winResult.winner] + 1 }));
      } else {
        setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
      }
    } else {
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const handleCellClickRef = useRef(handleCellClick);
  useEffect(() => {
    handleCellClickRef.current = handleCellClick;
  });

  // AI Move Handler in Demo
  useEffect(() => {
    if (!vsAi || turn !== 'O' || winner) return;

    const timer = setTimeout(() => {
      const emptyIndices = board
        .map((val, idx) => (val === null ? idx : null))
        .filter(val => val !== null);

      if (emptyIndices.length === 0) return;

      let chosenMove = null;
      // 1. Can AI win?
      for (const idx of emptyIndices) {
        const testBoard = [...board];
        if (gameMode === 'infinity' && oMoves.length >= 3) testBoard[oMoves[0]] = null;
        testBoard[idx] = 'O';
        const res = checkWinner(testBoard);
        if (res && res.winner === 'O') { chosenMove = idx; break; }
      }
      // 2. Block player X win
      if (chosenMove === null) {
        for (const idx of emptyIndices) {
          const testBoard = [...board];
          if (gameMode === 'infinity' && xMoves.length >= 3) testBoard[xMoves[0]] = null;
          testBoard[idx] = 'X';
          const res = checkWinner(testBoard);
          if (res && res.winner === 'X') { chosenMove = idx; break; }
        }
      }
      // 3. Center
      if (chosenMove === null && emptyIndices.includes(4)) chosenMove = 4;
      // 4. Random fallback
      if (chosenMove === null) chosenMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

      handleCellClickRef.current(chosenMove);
    }, 400);

    return () => clearTimeout(timer);
  }, [turn, vsAi, winner, board, gameMode, xMoves, oMoves]);

  const handleUndo = () => {
    if (history.length === 0 || winner) return;
    const last = history[history.length - 1];
    setBoard(last.board);
    setTurn(last.turn);
    setXMoves(last.xMoves);
    setOMoves(last.oMoves);
    setHistory(prev => prev.slice(0, -1));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aarsh.official.dev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${contactForm.subject} - ${contactForm.name}`);
    const body = encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aarsh.official.dev@gmail.com&su=${subject}&body=${body}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', subject: 'App Feedback & Support', message: '' });
    }, 6000);
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
      shortDesc: 'Futuristic neon cyberpunk Tic Tac Toe on Android with revolutionary Infinity Vanishing Mode, 3x3 to 6x6 expanded boards, 20 ranked tiers, and local 2-player battles.',
      highlights: [
        { icon: <Zap size={18} style={{ color: 'var(--color-x-purple)' }} />, title: 'All-New Infinity Mode', desc: 'Max 3 marks per player. 4th move vanishes oldest mark; matches never end in draws!' },
        { icon: <Layers size={18} style={{ color: 'var(--color-x-purple)' }} />, title: '4 Grid Sizes (3x3 to 6x6)', desc: 'Play classic 3x3 or expanded 4x4, 5x5, and customizable 6x6 ultimate boards.' },
        { icon: <Cpu size={18} style={{ color: 'var(--color-x-purple)' }} />, title: 'Dual Strategic AI Engine', desc: 'Isolate-powered minimax algorithms for both Classic & Infinity modes.' },
        { icon: <Trophy size={18} style={{ color: 'var(--color-x-purple)' }} />, title: '20 Ranks & 5 Master Tiers', desc: 'Climb Bronze, Silver, Gold, Diamond, and Master tiers by earning match XP.' },
        { icon: <Sparkles size={18} style={{ color: 'var(--color-x-purple)' }} />, title: '8 Neon Cyberpunk Themes', desc: 'High-contrast visuals, customizable audio FX, and live turn undo.' }
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
        { icon: <Image size={18} style={{ color: '#38bdf8' }} />, title: 'Exact & Similar Photo Detection', desc: 'MD5 byte verification & dHash perceptual algorithms accurately group duplicates.' },
        { icon: <Eye size={18} style={{ color: '#38bdf8' }} />, title: 'Blurry Photo Analyzer', desc: 'Automatically flags low-quality, out-of-focus pictures so you can purge them easily.' },
        { icon: <Smartphone size={18} style={{ color: '#38bdf8' }} />, title: 'Screenshot Cleanup Manager', desc: 'Auto-groups forgotten receipts, memes, and screenshots by month for 1-tap removal.' },
        { icon: <ShieldCheck size={18} style={{ color: '#38bdf8' }} />, title: '100% On-Device & Private', desc: 'Photos never leave your phone. All scanning runs entirely inside local RAM.' },
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

  const oldestX = (gameMode === 'infinity' && xMoves.length === 3) ? xMoves[0] : null;
  const oldestO = (gameMode === 'infinity' && oMoves.length === 3) ? oMoves[0] : null;

  return (
    <div className="app-root">
      {/* Sticky Studio Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="nav-brand">
            <img src="/app_icons/tictactoe.png" alt="Aarsh Tech Web Logo" className="brand-icon" />
            <span className="brand-title">
              Aarsh Tech Web
              <small className="brand-sub">Android Apps & Games Studio</small>
            </span>
          </a>

          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#apps" onClick={() => setIsMobileMenuOpen(false)}>Our Apps</a></li>
            <li><a href="#demo" onClick={() => setIsMobileMenuOpen(false)}>Live Demo</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Studio</a></li>
            <li><a href="#privacy" onClick={() => { setIsPrivacyModalOpen(true); setIsMobileMenuOpen(false); }}>Privacy Policies</a></li>
            <li><a href="#support" onClick={() => setIsMobileMenuOpen(false)}>Support</a></li>
          </ul>

          <div className="nav-cta">
            <a 
              href={TICTACTOE_PLAY_STORE_URL} 
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
            href="#demo" 
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
            <Play size={18} style={{ color: 'var(--color-o-orange)' }} />
            <span>Try Game in Browser</span>
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
            <div className="studio-stat-label">Free to Download</div>
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
                    <span>View Details</span>
                  </button>

                  {app.id === 'tictactoe' && (
                    <a 
                      href="#demo" 
                      className="app-details-btn" 
                      style={{ color: 'var(--color-o-orange)', borderColor: 'rgba(255,140,0,0.3)' }}
                    >
                      <Play size={15} />
                      <span>Play Web Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE PLAYABLE GAME DEMO */}
      <section id="demo" className="section" style={{ background: 'rgba(168,85,247,0.02)' }}>
        <div className="container">
          <div className="section-title">
            <span style={{ color: 'var(--color-o-orange)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}>LIVE PRODUCT DEMO</span>
            <h2>PLAY TIC TAC TOE IN YOUR BROWSER</h2>
            <p>Experience the mechanics of our published game directly on this website — including the new Infinity Mode!</p>
          </div>

          <div className="game-widget">
            <div className="game-header">
              <div className="game-controls">
                <button 
                  className={`pill-btn ${gameMode === 'infinity' ? 'active' : ''}`}
                  onClick={() => resetGame('infinity')}
                >
                  ♾️ Infinity Mode (Vanishing)
                </button>
                <button 
                  className={`pill-btn ${gameMode === 'classic' ? 'active' : ''}`}
                  onClick={() => resetGame('classic')}
                >
                  Classic 3×3
                </button>
              </div>

              <div className="game-controls">
                <button 
                  className={`pill-btn ${vsAi ? 'active' : ''}`}
                  onClick={() => { setVsAi(true); resetGame(); }}
                >
                  <Cpu size={14} style={{ display: 'inline', marginRight: 4 }} /> vs AI
                </button>
                <button 
                  className={`pill-btn ${!vsAi ? 'active' : ''}`}
                  onClick={() => { setVsAi(false); resetGame(); }}
                >
                  <Users size={14} style={{ display: 'inline', marginRight: 4 }} /> 2 Player
                </button>
              </div>
            </div>

            <div className="game-sub-banner">
              <div>
                Score: <strong>X ({scores.X})</strong> — <strong>O ({scores.O})</strong> — Draws: <strong>{scores.draws}</strong>
              </div>
              <div>
                Turn: <span style={{ color: turn === 'X' ? 'var(--color-x-purple)' : 'var(--color-o-orange)', fontWeight: 800 }}>Player {turn}</span> {vsAi && turn === 'O' && '(AI Thinking...)'}
              </div>
            </div>

            <div className="game-status-banner">
              {winner ? (
                winner === 'draw' ? (
                  <span style={{ color: '#94a3b8' }}>Game Drawn! Well fought.</span>
                ) : (
                  <span style={{ color: winner === 'X' ? 'var(--color-x-purple)' : 'var(--color-o-orange)', fontWeight: 900 }}>
                    🎉 Player {winner} Won the Match!
                  </span>
                )
              ) : gameMode === 'infinity' ? (
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Infinity Rule: Max 3 tokens per player. Dimmed token vanishes next!
                </span>
              ) : (
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Connect 3 in a line to claim victory!
                </span>
              )}
            </div>

            <div className="tictactoe-grid grid-3x3">
              {board.map((cellValue, idx) => {
                const isWinnerCell = winningLine.includes(idx);
                const isVanishing = (cellValue === 'X' && idx === oldestX) || (cellValue === 'O' && idx === oldestO);

                return (
                  <button
                    key={idx}
                    className={`cell-btn ${isWinnerCell ? 'winner-cell' : ''} ${isVanishing ? 'vanishing-piece' : ''}`}
                    onClick={() => handleCellClick(idx)}
                    disabled={!!cellValue || !!winner || (vsAi && turn === 'O')}
                    style={{
                      color: cellValue === 'X' ? 'var(--color-x-purple)' : 'var(--color-o-orange)',
                      textShadow: cellValue ? (cellValue === 'X' ? '0 0 12px rgba(168,85,247,0.8)' : '0 0 12px rgba(255,140,0,0.8)') : 'none'
                    }}
                  >
                    {cellValue}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button 
                className="pill-btn" 
                onClick={handleUndo} 
                disabled={history.length === 0 || !!winner}
                style={{ display: 'flex', alignItems: 'center', gap: 6 }}
              >
                <RotateCcw size={15} />
                <span>Live Undo ({history.length})</span>
              </button>

              <button 
                className="btn-primary" 
                onClick={() => resetGame()}
                style={{ padding: '8px 22px', fontSize: '0.9rem' }}
              >
                New Round
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DEVELOPER & STUDIO PHILOSOPHY */}
      <section id="about" className="section">
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
      <section className="section" style={{ background: 'rgba(168,85,247,0.02)' }}>
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
                a: "You can send an email directly to developer Aarsh at aarsh.official.dev@gmail.com or fill out the Developer Support form below."
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

      {/* DEVELOPER SUPPORT & CONTACT */}
      <section id="support" className="section">
        <div className="container">
          <div className="section-title">
            <span style={{ color: 'var(--color-x-purple)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}>DIRECT CHANNEL</span>
            <h2>DEVELOPER SUPPORT & CONTACT</h2>
            <p>Connect with developer Aarsh for feature feedback, technical assistance, or partnership inquiries.</p>
          </div>

          <div className="support-container" style={{ maxWidth: 960, margin: '0 auto' }}>
            <div className="glass-card" style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 12 }}>Aarsh Tech Web Support</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 24 }}>
                  We are committed to delivering regular quality updates and bug fixes for all published products.
                </p>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: 6 }}>OFFICIAL CONTACT EMAIL:</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-x-purple)', wordBreak: 'break-all' }}>
                    aarsh.official.dev@gmail.com
                  </div>
                </div>

                <button className="copy-email-btn" onClick={handleCopyEmail}>
                  {copiedEmail ? <Check size={16} style={{ color: '#22c55e' }} /> : <Copy size={16} />}
                  <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Support Email'}</span>
                </button>
              </div>

              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  Developer Studio: <strong style={{ color: '#fff' }}>Aarsh Tech Web</strong>
                </span>
              </div>
            </div>

            <div className="contact-form-card">
              {formSubmitted && (
                <div className="form-status-alert">
                  <Check size={18} />
                  <span>Draft generated in your Gmail! We will reply promptly.</span>
                </div>
              )}

              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="form-control"
                    placeholder="Enter your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="form-control"
                    placeholder="you@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    required
                    className="form-control"
                    placeholder="Bug Report / Tic Tac Toe / Duplicate Photo Finder"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    required
                    className="form-control"
                    placeholder="Write your suggestions, issue details, or feedback..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 8, padding: '14px 24px' }}
                >
                  <Send size={18} />
                  <span>Send Message via Email</span>
                </button>
              </form>
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
                <img src="/app_icons/tictactoe.png" alt="Aarsh Tech Web Logo" className="brand-icon" />
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
                <li><a href="#demo">Web Mini Demo</a></li>
                <li><a href="#about">Studio Philosophy</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Play Store & Legal</h4>
              <ul>
                <li><button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }} onClick={() => { setPrivacyTab('tictactoe'); setIsPrivacyModalOpen(true); }}>Tic Tac Toe Privacy Policy</button></li>
                <li><button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }} onClick={() => { setPrivacyTab('cleansnap'); setIsPrivacyModalOpen(true); }}>Duplicate Photo Finder Policy</button></li>
                <li><button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }} onClick={() => { setPrivacyTab('general'); setIsPrivacyModalOpen(true); }}>General Studio Privacy</button></li>
                <li><a href="#support">Report an Issue</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Studio Credentials</h4>
              <ul>
                <li style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Developer: <strong style={{ color: '#fff' }}>Aarsh</strong></li>
                <li style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Company: <strong style={{ color: '#fff' }}>Aarsh Tech Web</strong></li>
                <li style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Email: <a href="mailto:aarsh.official.dev@gmail.com" style={{ color: 'var(--color-x-purple)' }}>aarsh.official.dev@gmail.com</a></li>
                <li style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Google Play: <span style={{ color: '#38bdf8' }}>Verified Publisher</span></li>
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
              <img src={selectedAppModal.icon} alt={selectedAppModal.name} style={{ width: 72, height: 72, borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)' }} />
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
