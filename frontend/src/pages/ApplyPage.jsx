import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Briefcase, CalendarCheck, ExternalLink, Info } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vardhalinks/interviewinvitees';

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
                  <h1 className="apply-title">Application Form</h1>
                  <p className="apply-subtitle">
                    Submit your application to join Vardha Links. Schedule your interview slot below.
                  </p>
                </div>
              </div>

              <div className="apply-calendly-box">
                <div className="apply-calendly-icon">
                  <CalendarCheck size={36} />
                </div>
                <h3>Schedule Your Interview</h3>
                <p>
                  Click the button below to book your interview slot via Calendly. Choose a time that works best for you.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-calendly"
                >
                  <CalendarCheck size={18} />
                  Apply — Book Interview Slot
                  <ExternalLink size={14} />
                </a>
                <div className="apply-info-tag">
                  <Info size={14} />
                  You will be redirected to Calendly to select your preferred interview time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
