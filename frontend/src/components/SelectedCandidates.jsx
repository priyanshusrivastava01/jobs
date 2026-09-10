import React, { useState, useEffect, useRef, useCallback } from 'react';
import CandidateCard from './CandidateCard';
import { CURRENT_SHORTLISTED, PREVIOUSLY_SELECTED } from '../data/candidates';
import { UserCheck, Search, AlertCircle, ChevronRight, X, Users, Clock, Star } from 'lucide-react';

// Number of previous candidate names shown in the preview card before "X More"
const PREVIEW_LIMIT = 3;

export default function SelectedCandidates({ onViewDetails }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPrevModal, setShowPrevModal] = useState(false);
  const closeButtonRef = useRef(null);

  // Search filtering across both groups
  const term = searchTerm.toLowerCase();
  const filteredCurrent = CURRENT_SHORTLISTED.filter(c =>
    c.name.toLowerCase().includes(term) ||
    (c.role && c.role.toLowerCase().includes(term))
  );
  const filteredPrevious = PREVIOUSLY_SELECTED.filter(c =>
    c.name.toLowerCase().includes(term) ||
    (c.role && c.role.toLowerCase().includes(term))
  );

  const hasSearchTerm = searchTerm.trim().length > 0;
  const totalResults = filteredCurrent.length + filteredPrevious.length;

  // Modal helpers
  const openModal = useCallback(() => {
    setShowPrevModal(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setShowPrevModal(false);
    document.body.style.overflow = '';
  }, []);

  // ESC key support
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    if (showPrevModal) {
      window.addEventListener('keydown', onKey);
      // Move focus to close button
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
    return () => window.removeEventListener('keydown', onKey);
  }, [showPrevModal, closeModal]);

  // Previous candidates preview names
  const previewNames = PREVIOUSLY_SELECTED.slice(0, PREVIEW_LIMIT).map(c => c.name);
  const remainingCount = PREVIOUSLY_SELECTED.length - PREVIEW_LIMIT;

  return (
    <section id="selected-candidates" className="candidates-section">
      <div className="container">

        {/* ── Controls row: heading + search ── */}
        <div className="candidates-controls">
          <div className="candidates-header">
            <div className="section-badge">
              <UserCheck size={13} />
              Official List
            </div>
            <h2 className="section-title">Shortlisted Candidates</h2>
            <p className="section-subtitle">
              The candidates listed below have been officially shortlisted by Vardha Links. The two featured candidates are the <strong>latest shortlisted</strong> as of this update.
            </p>
          </div>

          <div className="search-bar">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              id="candidate-search"
              placeholder="Search candidate name..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              aria-label="Search candidates"
            />
          </div>
        </div>

        {/* ── Search-mode: show unified results ── */}
        {hasSearchTerm ? (
          <div>
            {totalResults > 0 ? (
              <>
                {/* Current results */}
                {filteredCurrent.length > 0 && (
                  <div style={{ marginBottom: '24px' }}>
                    <div className="prev-section-label" style={{ marginBottom: '12px' }}>
                      <Star size={12} /> Latest Shortlisted
                    </div>
                    <div className="candidates-grid candidates-grid--two-col">
                      {filteredCurrent.map(c => (
                        <CandidateCard key={c.id} candidate={c} onViewDetails={onViewDetails} />
                      ))}
                    </div>
                  </div>
                )}
                {/* Previous results */}
                {filteredPrevious.length > 0 && (
                  <div>
                    <div className="prev-section-label" style={{ marginBottom: '12px' }}>
                      <Clock size={12} /> Previously Selected
                    </div>
                    <div className="candidates-grid">
                      {filteredPrevious.map(c => (
                        <CandidateCard key={c.id} candidate={c} onViewDetails={onViewDetails} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="no-results">
                <AlertCircle size={36} style={{ color: '#547063' }} />
                <h4>No candidates found</h4>
                <p>No candidate matches "{searchTerm}". Check the spelling.</p>
                <button className="btn-view" onClick={() => setSearchTerm('')}>Reset Search</button>
              </div>
            )}
          </div>
        ) : (
          /* ── Normal view: two-tier layout ── */
          <>
            {/* SECTION 1 — Latest Shortlisted */}
            <div className="latest-shortlisted-label">
              <span className="latest-badge">
                <span className="latest-badge-dot" />
                NEWLY SHORTLISTED
              </span>
            </div>

            <div className="candidates-grid candidates-grid--two-col">
              {CURRENT_SHORTLISTED.map(c => (
                <CandidateCard key={c.id} candidate={c} onViewDetails={onViewDetails} />
              ))}
            </div>

            {/* SECTION 2 — Previously Selected preview card */}
            <div className="prev-section-wrapper">
              <div className="prev-section-divider">
                <span>Previously Selected Candidates</span>
              </div>

              <div className="prev-preview-card">
                <div className="prev-preview-card-header">
                  <div className="prev-preview-header-left">
                    <div className="prev-preview-icon">
                      <Users size={16} />
                    </div>
                    <div>
                      <div className="prev-preview-title">Previously Selected Candidates</div>
                      <div className="prev-preview-subtitle">Candidates shortlisted in previous selections.</div>
                    </div>
                  </div>
                  <div className="prev-preview-count-badge">
                    {PREVIOUSLY_SELECTED.length} Candidates
                  </div>
                </div>

                <div className="prev-preview-names-list">
                  {PREVIOUSLY_SELECTED.slice(0, PREVIEW_LIMIT).map((c, i) => {
                    const initials = c.name.split(' ').map(n => n[0]).join('').substring(0, 2);
                    const isCertified = Boolean(c.certified);
                    return (
                      <div key={c.id || i} className="prev-preview-name-row">
                        <div className="prev-mini-avatar">{initials}</div>
                        <span className="prev-mini-name">{c.name}</span>
                        <div className={`prev-mini-badge ${isCertified ? 'prev-mini-badge--certified' : ''}`}>
                          <span className="prev-mini-dot" />
                          {isCertified ? 'Certified' : 'Previously Selected'}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  className="prev-view-more-btn"
                  onClick={openModal}
                  id="view-previous-candidates-btn"
                  aria-haspopup="dialog"
                  aria-expanded={showPrevModal}
                >
                  <ChevronRight size={15} />
                  {remainingCount > 0
                    ? `+ ${remainingCount} More — View All Previously Selected Candidates`
                    : 'View All Previously Selected Candidates'
                  }
                </button>
              </div>
            </div>
          </>
        )}

        {/* Candidates Footer */}
        <div className="candidates-footer">
          <div className="candidates-count">
            <span className="count-dot"></span>
            Total Shortlisted: {CURRENT_SHORTLISTED.length + PREVIOUSLY_SELECTED.length} Candidates
          </div>
          <span style={{ fontStyle: 'italic' }}>
            Verified against Vardha Links registered email records.
          </span>
        </div>
      </div>

      {/* ── Previously Selected Modal ── */}
      {showPrevModal && (
        <div
          className="modal-overlay prev-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="prev-modal-title"
        >
          <div
            className="modal-content prev-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-top-bar" />
            <button
              ref={closeButtonRef}
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="prev-modal-body">
              <div className="prev-modal-heading-row">
                <div className="prev-modal-icon-box">
                  <Users size={20} />
                </div>
                <div>
                  <h3 id="prev-modal-title" className="prev-modal-title">Previously Selected Candidates</h3>
                  <p className="prev-modal-sub">Candidates shortlisted in previous selections.</p>
                </div>
              </div>

              <div className="prev-modal-count-bar">
                <span className="count-dot" />
                {PREVIOUSLY_SELECTED.length} candidates in this selection batch
              </div>

              <div className="prev-modal-grid">
                {PREVIOUSLY_SELECTED.map(c => {
                  const initials = c.name.split(' ').map(n => n[0]).join('').substring(0, 2);
                  const isCertified = Boolean(c.certified);
                  return (
                    <div key={c.id} className="prev-modal-card">
                      <div className="prev-modal-avatar">{initials}</div>
                      <div className="prev-modal-card-info">
                        <div className="prev-modal-cand-name">{c.name}</div>
                        <div className="prev-modal-cand-role">{c.role || 'Shortlisted Candidate'}</div>
                      </div>
                      <div className={`prev-modal-status-badge ${isCertified ? 'prev-modal-status-badge--certified' : ''}`}>
                        <span className="prev-mini-dot" />
                        {isCertified ? 'Certified' : 'Selected'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

