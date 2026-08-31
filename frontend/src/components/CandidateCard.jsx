import React, { useState } from 'react';
import { FolderCheck, Mail, ShieldCheck, Eye, ChevronDown } from 'lucide-react';

export default function CandidateCard({ candidate, onViewDetails }) {
  const [expanded, setExpanded] = useState(false);

  const initials = candidate.name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <div className="candidate-card">
      <div className="candidate-card-top-bar"></div>
      <div className="candidate-card-body">
        {/* Header */}
        <div className="candidate-card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
            <div className="candidate-avatar">{initials}</div>
            <div className="candidate-info">
              <div className="candidate-name">{candidate.name}</div>
              <div className="candidate-role">{candidate.role || 'Shortlisted Candidate'}</div>
            </div>
          </div>
          <div className="status-badge">
            <span className="badge-dot"></span>
            SELECTED
          </div>
        </div>

        {/* Details */}
        <div className="candidate-details">
          <div className="detail-row">
            <span className="detail-label">
              <FolderCheck size={14} /> Task Status:
            </span>
            <span className="detail-value highlight">{candidate.assignedTaskStatus}</span>
          </div>
          {candidate.registeredEmailHint && (
            <div className="detail-row">
              <span className="detail-label">
                <Mail size={14} /> Registered Email:
              </span>
              <span className="detail-value code">{candidate.registeredEmailHint}</span>
            </div>
          )}
          {candidate.projectCode && (
            <div className="detail-row">
              <span className="detail-label">
                <ShieldCheck size={14} /> Project Ref:
              </span>
              <span className="detail-value code">{candidate.projectCode}</span>
            </div>
          )}
        </div>

        {/* Expanded */}
        {expanded && (
          <div className="expanded-details">
            <div className="expanded-row">
              <span>Selection Batch:</span>
              <span>Vardha Hiring 2026</span>
            </div>
            <div className="expanded-row">
              <span>Drive Folder:</span>
              <span className="emerald">{candidate.driveFolderName || 'Vardha_Project'}</span>
            </div>
            <div className="expanded-row">
              <span>Verification:</span>
              <span>Registered Email ID</span>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="candidate-card-footer">
          <button className="btn-toggle" onClick={() => setExpanded(!expanded)}>
            <ChevronDown size={14} style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            {expanded ? 'Hide' : 'Quick Info'}
          </button>
          <button className="btn-view" onClick={() => onViewDetails && onViewDetails(candidate)}>
            <Eye size={14} />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
