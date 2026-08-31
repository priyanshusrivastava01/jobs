import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SelectedCandidates from '../components/SelectedCandidates';
import InstructionsSection from '../components/InstructionsSection';
import DriveAccessSection from '../components/DriveAccessSection';
import CertificateSection from '../components/CertificateSection';
import Footer from '../components/Footer';
import { SITE_CONFIG } from '../data/config';
import { X, ExternalLink, HardDrive, ShieldCheck, Mail, Calendar, Folder } from 'lucide-react';

export default function HomePage() {
  const [modalCandidate, setModalCandidate] = useState(null);

  return (
    <>
      <main style={{ flex: 1 }}>
        <HeroSection />
        <SelectedCandidates onViewDetails={c => setModalCandidate(c)} />
        <InstructionsSection />
        <CertificateSection />
        <DriveAccessSection />
      </main>

      {/* Candidate Detail Modal */}
      {modalCandidate && (
        <div className="modal-overlay" onClick={() => setModalCandidate(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-top-bar"></div>
            <button className="modal-close" onClick={() => setModalCandidate(null)}>
              <X size={18} />
            </button>

            <div className="modal-body">
              <div className="modal-header">
                <div className="modal-avatar">
                  {modalCandidate.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div>
                  <div className="status-badge" style={{ marginBottom: '4px' }}>
                    <span className="badge-dot"></span>
                    STATUS: SELECTED
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#062316' }}>
                    {modalCandidate.name}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#547063', fontWeight: 500 }}>
                    {modalCandidate.role}
                  </p>
                </div>
              </div>

              <div className="modal-records">
                <div className="modal-record-row">
                  <span className="modal-record-label"><ShieldCheck size={14} /> Candidate ID:</span>
                  <span className="modal-record-value mono">{modalCandidate.id}</span>
                </div>
                <div className="modal-record-row">
                  <span className="modal-record-label"><Mail size={14} /> Registered Email:</span>
                  <span className="modal-record-value mono">{modalCandidate.registeredEmailHint}</span>
                </div>
                <div className="modal-record-row">
                  <span className="modal-record-label"><Folder size={14} /> Drive Folder:</span>
                  <span className="modal-record-value green mono">{modalCandidate.driveFolderName}</span>
                </div>
                <div className="modal-record-row">
                  <span className="modal-record-label"><Calendar size={14} /> Shortlist Date:</span>
                  <span className="modal-record-value">{modalCandidate.assignedDate}</span>
                </div>
              </div>

              <a href={SITE_CONFIG.googleDriveUrl} target="_blank" rel="noopener noreferrer" className="btn-modal-drive">
                <HardDrive size={16} />
                ACCESS GOOGLE DRIVE
                <ExternalLink size={14} />
              </a>
              <button className="btn-modal-close" onClick={() => setModalCandidate(null)}>
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
