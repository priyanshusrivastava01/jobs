import React from 'react';
import { Sparkles, CheckCircle2, Award, Trophy, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-tag">
          <Sparkles size={14} />
          <span>Official Announcement • Selection Portal</span>
          <span className="tag-dot"></span>
          <strong style={{ color: '#062316' }}>Batch 2026</strong>
        </div>

        <h1>
          SHORTLISTED <span className="gradient-text">CANDIDATES</span>
        </h1>

        <h2>
          Vardha Links <span className="sep">—</span> Hiring &amp; Selection Process
        </h2>

        <p className="hero-desc">
          Congratulations to all shortlisted candidates. Please follow the instructions below to access your assigned project/task.
        </p>

        {/* Hero Reward Highlight Card */}
        <div className="hero-reward-card">
          <div className="hero-reward-badge">
            <Trophy size={15} />
            <span>Guaranteed Reward</span>
          </div>
          <div className="hero-reward-content">
            <h3>
              <Award size={18} className="icon-award" />
              Certificate of Completion for Every Candidate
            </h3>
            <p>
              Submit your completed project by <strong>7 September, 12:00 AM (Midnight)</strong> to receive an official Vardha Links Certificate — regardless of final selection!
            </p>
            <a href="#certificate-rewards" className="hero-reward-link">
              <span>View Certificate Sample &amp; Rules</span>
              <ArrowDown size={14} />
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat-item">
            <CheckCircle2 size={15} />
            <span>Shortlist Verified</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat-item">
            <Award size={15} />
            <span>Google Drive Access Required</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat-item">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }}></span>
            <span>Registered Email Only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
