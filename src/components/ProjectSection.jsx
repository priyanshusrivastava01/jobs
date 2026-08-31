import React, { useState } from 'react';
import { Briefcase, Lock, FileText, Calendar, FolderGit2, FileSpreadsheet, UploadCloud, Eye, Info } from 'lucide-react';

export default function ProjectSection({ selectedCandidate }) {
  const [showSchema, setShowSchema] = useState(false);

  return (
    <section id="project-details" className="project-section">
      <div className="container">
        <div className="project-header">
          <div>
            <div className="section-badge">
              <Briefcase size={13} />
              Project Specification
            </div>
            <h2 className="section-title">Your Assigned Project</h2>
          </div>
          <button className="btn-schema" onClick={() => setShowSchema(!showSchema)}>
            <Eye size={14} style={{ color: '#10B981' }} />
            {showSchema ? 'Hide Project Schema' : 'Preview Project Layout'}
          </button>
        </div>

        {!showSchema ? (
          <div className="project-placeholder">
            <div className="project-placeholder-icon">
              <Lock size={24} />
            </div>
            <h3>Project Access Pending Verification</h3>
            <p>Your assigned project details will appear here after access is provided through Google Drive.</p>
            <div className="project-info-tag">
              <Info size={14} style={{ color: '#10B981' }} />
              Drive links are updated continuously by the Vardha Links HR Team
            </div>
          </div>
        ) : (
          <div className="schema-preview">
            <div className="schema-header">
              <div>
                <div className="schema-label">Sample Project Specification</div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#062316', marginTop: '4px' }}>
                  {selectedCandidate ? `${selectedCandidate.name} — ${selectedCandidate.role}` : 'Vardha Links Candidate Project Task'}
                </h3>
              </div>
              <div className="status-badge">
                <span className="badge-dot"></span>
                ACTIVE ASSIGNMENT
              </div>
            </div>

            <div className="schema-grid">
              <div className="schema-block">
                <h4><FileText size={14} /> Project Description</h4>
                <p>Perform target dataset analysis, implement responsive dashboard modules, and ensure synchronization with Vardha internal workflow standards.</p>
              </div>
              <div className="schema-block">
                <div style={{ marginBottom: '12px' }}>
                  <div className="label"><Calendar size={12} /> Submission Deadline</div>
                  <div className="value">7 Days From Access</div>
                </div>
                <div>
                  <div className="label">Required Deliverable</div>
                  <div className="value" style={{ fontSize: '12px' }}>Source Code + Documentation</div>
                </div>
              </div>
            </div>

            <div className="schema-resources">
              <div className="schema-resource">
                <span className="schema-resource-left"><FolderGit2 size={14} /> Google Drive Folder</span>
                <span className="linked">Linked</span>
              </div>
              <div className="schema-resource">
                <span className="schema-resource-left"><FileSpreadsheet size={14} /> Google Sheet Tracker</span>
                <span className="linked">Linked</span>
              </div>
              <div className="schema-resource">
                <span className="schema-resource-left"><UploadCloud size={14} /> Submission Instructions</span>
                <span className="linked">Included</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
