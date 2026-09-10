import React from 'react';
import { Award, CheckCircle2, AlertTriangle, Trophy, CalendarClock, Zap, FileCheck } from 'lucide-react';
import certificateImg from '../assets/certificate.png';

export default function CertificateSection() {
  return (
    <section id="certificate-rewards" className="certificate-section">
      <div className="container">
        <div className="certificate-header-row">
          <div>
            <div className="section-badge">
              <Award size={13} />
              Rewards &amp; Recognition
            </div>
            <h2 className="section-title">Certificate of Completion</h2>
            <p className="section-subtitle">
              Every shortlisted candidate who completes the assigned project will receive an official certificate from Vardha Links — regardless of final selection.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="cert-highlights">
          <div className="cert-highlight-card">
            <div className="cert-highlight-icon trophy">
              <Trophy size={20} />
            </div>
            <div>
              <h4>Certificate Guaranteed</h4>
              <p>Complete your project and you will receive an official Vardha Links certificate — selection is not required.</p>
            </div>
          </div>

          <div className="cert-highlight-card">
            <div className="cert-highlight-icon clock">
              <CalendarClock size={20} />
            </div>
            <div>
              <h4>Submission Deadline</h4>
              <p><strong>14 September, 12:00 AM (Midnight)</strong> — This is the last date to submit your project. Complete and submit before the deadline.</p>
            </div>
          </div>

          <div className="cert-highlight-card">
            <div className="cert-highlight-icon zap">
              <Zap size={20} />
            </div>
            <div>
              <h4>Early Submission Advantage</h4>
              <p>The candidate who submits a <strong>fully complete</strong> project first will get priority. Half or incomplete submissions will not count for early advantage.</p>
            </div>
          </div>

          <div className="cert-highlight-card">
            <div className="cert-highlight-icon check">
              <FileCheck size={20} />
            </div>
            <div>
              <h4>Project Must Be Complete</h4>
              <p>For early submission priority, your project must be <strong>100% complete</strong>. An incomplete project submitted early holds no advantage.</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="cert-notice">
          <div className="cert-notice-icon">
            <AlertTriangle size={20} />
          </div>
          <div>
            <div className="cert-notice-title">Important Submission Guidelines</div>
            <p className="cert-notice-text">
              <strong>Every candidate must aim to fully complete their project.</strong> If you feel time is short, do as much as you can — but for early submission priority, your project must be 100% complete. Submitting a half-finished project early will not give you any advantage.
            </p>
          </div>
        </div>

        {/* Certificate Preview */}
        <div className="cert-preview-box">
          <div className="cert-preview-label">
            <Award size={14} />
            Certificate Preview
          </div>
          <h3 className="cert-preview-title">Sample Certificate Design</h3>

          <div className="cert-preview-image-wrapper">
            <img
              src={certificateImg}
              alt="Vardha Links Certificate of Project Completion"
              className="cert-preview-img"
            />
          </div>

          <div className="cert-preview-footer">
            <CheckCircle2 size={14} />
            Official certificate issued by Vardha Links upon successful project completion
          </div>
        </div>
      </div>
    </section>
  );
}
