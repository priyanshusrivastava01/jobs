import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/config';
import { HardDrive, ExternalLink, Copy, Check, Lock } from 'lucide-react';

export default function DriveAccessSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE_CONFIG.googleDriveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="drive-access" className="drive-section">
      <div className="container">
        <div className="drive-card">
          <div className="drive-card-glow-1"></div>
          <div className="drive-card-glow-2"></div>

          <div className="drive-icon-box">
            <HardDrive size={28} />
          </div>

          <h2 className="drive-title">Access Your Assigned Project</h2>

          <p className="drive-desc">
            Your project/task will be available through Google Drive. Please open the Drive link using your registered email ID.
          </p>

          <div style={{
            background: 'rgba(16, 185, 129, 0.14)',
            border: '1px solid rgba(163, 230, 53, 0.4)',
            borderRadius: '12px',
            padding: '12px 20px',
            margin: '0 auto 24px',
            maxWidth: '580px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backdropFilter: 'blur(8px)'
          }}>
            <Check className="flex-shrink-0" size={22} style={{ color: '#A3E635', flexShrink: 0 }} />
            <span style={{ fontSize: '13.5px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
              <strong>Important Note:</strong> Out of the 2 projects available in the Drive folder, candidates are required to complete <strong>only one (1) project</strong> of their choice.
            </span>
          </div>

          <div className="drive-buttons">
            <a href={SITE_CONFIG.googleDriveUrl} target="_blank" rel="noopener noreferrer" className="btn-drive">
              OPEN GOOGLE DRIVE
              <ExternalLink size={18} />
            </a>
            <button className="btn-copy" onClick={handleCopy}>
              {copied ? <><Check size={16} style={{ color: '#A3E635' }} /> Link Copied!</> : <><Copy size={16} /> Copy Drive Link</>}
            </button>
          </div>

          <div className="drive-security-tag">
            <Lock size={13} />
            Protected Drive Folder • Restricted to Registered Emails
          </div>
        </div>
      </div>
    </section>
  );
}
