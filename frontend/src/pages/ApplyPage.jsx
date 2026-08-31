import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, User, Mail, Phone, Briefcase, FileText, Info } from 'lucide-react';

export default function ApplyPage() {
  return (
    <main style={{ flex: 1 }}>
      <section className="apply-section">
        <div className="apply-glow-1"></div>
        <div className="apply-glow-2"></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/" className="apply-back-link">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="apply-card">
            <div className="apply-card-topbar"></div>

            <div className="apply-card-body">
              <div className="apply-header">
                <div className="apply-icon-box">
                  <Send size={24} />
                </div>
                <div>
                  <div className="section-badge">
                    <Briefcase size={13} />
                    Career Opportunity
                  </div>
                  <h1 className="apply-title">Apply Now</h1>
                  <p className="apply-subtitle">
                    Submit your application to join Vardha Links. Fill in all the required details below.
                  </p>
                </div>
              </div>

              {/* Placeholder — form fields will be added later */}
              <div className="apply-form-placeholder">
                <div className="apply-form-placeholder-icon">
                  <FileText size={32} />
                </div>
                <h3>Application Form Coming Soon</h3>
                <p>
                  The application form fields are being configured. Please check back shortly — form fields will be added here.
                </p>
                <div className="apply-info-tag">
                  <Info size={14} />
                  Form fields will be specified and added by the Vardha Links team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
