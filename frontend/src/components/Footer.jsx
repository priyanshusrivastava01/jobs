import React from 'react';
import { Link } from 'react-router-dom';
import VardhaLogo from '../assets/VardhaLogo';
import { SITE_CONFIG } from '../data/config';
import { Mail, Phone, Globe, ShieldCheck, ArrowUpRight, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container">
        <div className="footer-grid">
          <div>
            <VardhaLogo variant="light" />
            <p className="footer-brand-desc" style={{ marginTop: '16px' }}>
              Official Hiring &amp; Selection Portal for Vardha Links. Connecting shortlisted candidates with assigned project access via Google Drive.
            </p>
            <Link to="/vacancy" className="btn-footer-vacancy">
              <Send size={14} />
              Vacancy
            </Link>

          </div>

          <div>
            <div className="footer-contact-title">Official Support Contact</div>
            <div className="footer-contacts">
              <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="footer-contact-card">
                <div className="footer-contact-icon email"><Mail size={16} /></div>
                <div>
                  <div className="footer-contact-label">Email Support</div>
                  <div className="footer-contact-value">{SITE_CONFIG.supportEmail}</div>
                </div>
              </a>
              <a href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="footer-contact-card">
                <div className="footer-contact-icon whatsapp"><Phone size={16} /></div>
                <div>
                  <div className="footer-contact-label">WhatsApp</div>
                  <div className="footer-contact-value">{SITE_CONFIG.whatsappNumber}</div>
                </div>
              </a>
            </div>
            <a href={SITE_CONFIG.mainWebsite} target="_blank" rel="noopener noreferrer" className="footer-website-link">
              <Globe size={14} />
              Visit Main Website ({SITE_CONFIG.mainWebsiteLabel})
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {SITE_CONFIG.copyrightYear} Vardha Links. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#instructions">Instructions</a>
            <span>•</span>
            <a href="#drive-access">Google Drive</a>
            <span>•</span>
            <a href="#selected-candidates">Selected Candidates</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
