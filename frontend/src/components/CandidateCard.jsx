import React from 'react';
import { FolderCheck, Mail, Phone } from 'lucide-react';
import { maskEmail, maskPhone } from '../data/candidates';

export default function CandidateCard({ candidate }) {
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
            SHORTLISTED
          </div>
        </div>

        {/* Details */}
        <div className="candidate-details" style={{ marginBottom: 0 }}>
          <div className="detail-row">
            <span className="detail-label">
              <FolderCheck size={14} /> Task Status:
            </span>
            <span className="detail-value highlight">{candidate.assignedTaskStatus}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">
              <Phone size={14} /> Phone:
            </span>
            <span className="detail-value code">{maskPhone(candidate.phone)}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">
              <Mail size={14} /> Email:
            </span>
            <span className="detail-value code" style={{ fontSize: '11px', wordBreak: 'break-all' }}>
              {maskEmail(candidate.email)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
