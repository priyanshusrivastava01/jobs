import React from 'react';
import { FileText, Mail, FolderOpen, LogIn, CheckSquare, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  { step: 1, title: 'Registered Email ID', desc: 'Use the same registered email ID that you provided during the hiring/application process.', icon: Mail },
  { step: 2, title: 'Open Google Drive Link', desc: 'Open the Google Drive link provided by Vardha Links below.', icon: FolderOpen },
  { step: 3, title: 'Verify Account Login', desc: 'Make sure you are logged in with your registered email ID in your browser or Drive app.', icon: LogIn },
  { step: 4, title: 'Access Project & Guidelines', desc: 'Once access is granted, you will be able to view the assigned project/task and related instructions.', icon: CheckSquare },
];

export default function InstructionsSection() {
  return (
    <section id="instructions" className="instructions-section">
      <div className="container">
        <div className="instructions-card">
          <div className="instructions-card-glow"></div>

          <div className="instructions-header">
            <div className="instructions-icon-box">
              <FileText size={24} />
            </div>
            <div>
              <div className="section-badge">
                <ShieldCheck size={13} />
                Mandatory Process
              </div>
              <h2 className="instructions-title">Important Instructions for Selected Candidates</h2>
              <p className="instructions-subtitle">
                Selected candidates can access their assigned project/task through Google Drive using their registered email ID.
              </p>
            </div>
          </div>

          <div className="steps-grid">
            {steps.map(s => {
              const Icon = s.icon;
              return (
                <div className="step-card" key={s.step}>
                  <div className="step-card-top">
                    <div className="step-number">{s.step}</div>
                    <div className="step-icon-box"><Icon size={16} /></div>
                  </div>
                  <div className="step-title">Step {s.step}: {s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              );
            })}
          </div>

          <div className="warning-box">
            <div className="warning-icon-box">
              <AlertTriangle size={20} />
            </div>
            <div>
              <div className="warning-title">Access & Task Submission Guidelines</div>
              <p className="warning-text">
                <strong>Important:</strong> There are 2 projects available in the Google Drive folder, but candidates are <strong>required to complete and submit only one (1) project</strong> of their choice. Please access your assigned folder strictly using your registered email ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
