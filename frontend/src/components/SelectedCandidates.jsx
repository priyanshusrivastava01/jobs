import React, { useState } from 'react';
import CandidateCard from './CandidateCard';
import { CANDIDATES_DATA } from '../data/candidates';
import { UserCheck, Search, AlertCircle } from 'lucide-react';

export default function SelectedCandidates({ onViewDetails }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = CANDIDATES_DATA.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="selected-candidates" className="candidates-section">
      <div className="container">
        <div className="candidates-controls">
          <div className="candidates-header">
            <div className="section-badge">
              <UserCheck size={13} />
              Official List
            </div>
            <h2 className="section-title">Shortlisted Candidates</h2>
            <p className="section-subtitle">
              Candidates listed below have been officially shortlisted by Vardha Links. Locate your name to proceed to task instructions.
            </p>
          </div>

          <div className="search-bar">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              placeholder="Search candidate name..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="candidates-grid">
            {filtered.map(c => (
              <CandidateCard key={c.id} candidate={c} onViewDetails={onViewDetails} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <AlertCircle size={36} style={{ color: '#547063' }} />
            <h4>No candidates found</h4>
            <p>No candidate matches "{searchTerm}". Check the spelling.</p>
            <button className="btn-view" onClick={() => setSearchTerm('')}>Reset Search</button>
          </div>
        )}

        <div className="candidates-footer">
          <div className="candidates-count">
            <span className="count-dot"></span>
            Total Shortlisted: {filtered.length} Candidates
          </div>
          <span style={{ fontStyle: 'italic' }}>
            Verified against Vardha Links registered email records.
          </span>
        </div>
      </div>
    </section>
  );
}
