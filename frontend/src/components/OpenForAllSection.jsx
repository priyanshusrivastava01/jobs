import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Briefcase,
  MessageCircle,
  Clock,
  Upload,
  CheckCircle2,
  CalendarCheck,
  ExternalLink,
  Phone,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Info,
  FolderOpen,
  ArrowDown,
  ArrowLeft,
  HardDrive,
  Copy,
  Check,
  Lock,
  FileText,
  Send,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { OPEN_FOR_ALL_PROJECTS } from '../data/openForAllProjects';

// ── Process Steps Data ────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Open Drive & Choose Project',
    desc: 'Access Google Drive, review all project briefs, and choose ONLY 1 project.',
    icon: HardDrive,
  },
  {
    step: 2,
    title: 'Confirm on WhatsApp',
    desc: 'Send your details and selected project name to WhatsApp before starting.',
    icon: MessageCircle,
  },
  {
    step: 3,
    title: 'Complete Within Given Time',
    desc: 'Work on your chosen project and finalize all deliverables within the given time.',
    icon: Clock,
  },
  {
    step: 4,
    title: 'Submit via Google Form',
    desc: 'Upload your completed project files, code links, and demo through the Google Form.',
    icon: Upload,
  },
  {
    step: 5,
    title: 'Receive Interview Link',
    desc: 'After review, our team will personally send your interview scheduling link.',
    icon: Send,
  },
];

// ── WhatsApp helper ───────────────────────────────────────────────────────────
function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}

// ── Project Card Sub-component (for structured data if added) ─────────────────
function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const whatsappUndertakeUrl = buildWhatsAppUrl(
    `Hello Vardha Links Team,\n\nI have reviewed the project in Google Drive and would like to confirm my selection:\n• Candidate Name: [Your Name]\n• Selected Project: ${project.name}\n\nPlease confirm my registration.`
  );

  return (
    <div className={`ofa-project-card${expanded ? ' expanded' : ''}`}>
      <div className="ofa-project-card-top-bar"></div>
      <div className="ofa-project-card-body">
        <div className="ofa-project-card-header">
          <div>
            {project.category && (
              <span className="ofa-project-category-badge">{project.category}</span>
            )}
            <h4 className="ofa-project-name">{project.name}</h4>
            <p className="ofa-project-desc">{project.description}</p>
          </div>
        </div>

        <button
          className="ofa-project-toggle-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label={expanded ? 'Hide project details' : 'View project details'}
        >
          {expanded ? (
            <>
              <ChevronUp size={14} />
              Hide Details
            </>
          ) : (
            <>
              <ChevronDown size={14} />
              View Project Details
            </>
          )}
        </button>

        {expanded && (
          <div className="ofa-project-expanded">
            {project.requirements && project.requirements.length > 0 && (
              <div className="ofa-project-detail-block">
                <div className="ofa-project-detail-label">Requirements</div>
                <ul className="ofa-project-req-list">
                  {project.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.deliverables && (
              <div className="ofa-project-detail-block">
                <div className="ofa-project-detail-label">Deliverables</div>
                <p className="ofa-project-detail-value">{project.deliverables}</p>
              </div>
            )}

            <div className="ofa-project-action-row">
              <a
                href={whatsappUndertakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ofa-btn ofa-btn-whatsapp"
                aria-label={`Inform on WhatsApp about undertaking ${project.name}`}
              >
                <MessageCircle size={15} />
                Confirm This Project on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function OpenForAllSection() {
  const [copiedDriveLink, setCopiedDriveLink] = useState(false);

  const handleCopyDriveLink = () => {
    navigator.clipboard.writeText(SITE_CONFIG.googleDriveUrl);
    setCopiedDriveLink(true);
    setTimeout(() => setCopiedDriveLink(false), 2500);
  };

  const whatsappConfirmProjectChoiceUrl = buildWhatsAppUrl(
    `Hello Vardha Links Team,\n\nI have reviewed the project briefs in Google Drive and selected my project for the Open for All opportunity:\n\n• Candidate Name: [Your Name]\n• Email / Phone: [Your Contact Number]\n• Selected Project Name: [Project Name from Drive]\n• Start Date: [Today's Date]\n\nKindly confirm my registration so I can begin my project work within the given timeline.`
  );

  return (
    <section className="ofa-section ofa-section--standalone" id="open-for-all">
      <div className="container">

        {/* ── Back Link ────────────────────────────────────────────────── */}
        <Link to="/" className="apply-back-link" style={{ marginTop: '8px' }}>
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* ── 1. Entry Section ─────────────────────────────────────────── */}
        <div className="ofa-entry-card">
          <div className="ofa-entry-card-glow"></div>
          <div className="ofa-entry-content">
            <div className="ofa-entry-badge">
              <Sparkles size={13} />
              OPEN FOR ALL
            </div>
            <h2 className="ofa-entry-title">Project-Based Opportunity</h2>
            <p className="ofa-entry-desc">
              Access the Google Drive folder, choose 1 project to build, complete it within the given time, submit your work, and proceed to the final interview.
            </p>
            <a href="#ofa-projects" className="ofa-btn ofa-btn-primary">
              <HardDrive size={16} />
              Access Project Drive
              <ArrowDown size={14} />
            </a>
          </div>
        </div>

        {/* ── 2. How It Works ──────────────────────────────────────────── */}
        <div className="ofa-how-it-works" id="ofa-how-it-works">
          <div className="ofa-hiw-card">
            <div className="ofa-hiw-card-glow-1"></div>
            <div className="ofa-hiw-card-glow-2"></div>

            <div className="ofa-hiw-header">
              <div className="ofa-hiw-badge">
                <Sparkles size={13} />
                Step-by-Step Process
              </div>
              <h3 className="ofa-hiw-title">How It Works</h3>
              <p className="ofa-hiw-subtitle">
                Follow these 5 steps to complete your project-based selection process.
              </p>
            </div>

            <div className="ofa-timeline">
              {PROCESS_STEPS.map((s, idx) => {
                const Icon = s.icon;
                const isLast = idx === PROCESS_STEPS.length - 1;
                return (
                  <div className="ofa-timeline-item" key={s.step}>
                    <div className="ofa-timeline-marker">
                      <div className={`ofa-timeline-icon ofa-timeline-icon--step${s.step}`}>
                        <Icon size={18} />
                      </div>
                      {!isLast && <div className="ofa-timeline-line" aria-hidden="true"></div>}
                    </div>
                    <div className="ofa-timeline-content">
                      <div className="ofa-timeline-step-label">Step {s.step}</div>
                      <div className="ofa-timeline-step-title">{s.title}</div>
                      <div className="ofa-timeline-step-desc">{s.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ── 3. Google Drive Project Repository & Selection ───────────── */}
        <div className="ofa-projects-area" id="ofa-projects">
          <div className="ofa-section-header">
            <div className="section-badge">
              <HardDrive size={13} />
              Project Repository
            </div>
            <h3 className="ofa-section-title">Access Projects via Google Drive</h3>
            <p className="ofa-section-subtitle">
              All project details, tasks, and guidelines are available in our official Drive folder.
            </p>
          </div>

          <div className="ofa-drive-card">
            <div className="ofa-drive-card-glow-1"></div>
            <div className="ofa-drive-card-glow-2"></div>

            <div className="ofa-drive-icon-box">
              <HardDrive size={30} />
            </div>

            <h4 className="ofa-drive-title">Official Projects & Task Files</h4>
            <p className="ofa-drive-desc">
              Open the Google Drive folder to view all available projects, understand the scope, and choose what you want to build.
            </p>

            {/* Crucial rule callout */}
            <div className="ofa-drive-rule-banner">
              <Check className="flex-shrink-0" size={20} style={{ color: '#A3E635', marginTop: '2px' }} />
              <div>
                <strong>Important Rule:</strong> Out of all available projects inside the Drive folder, you are required to complete <strong>only ONE (1) project</strong> of your choice.
              </div>
            </div>

            {/* Drive Action Buttons */}
            <div className="ofa-drive-buttons">
              <a
                href={SITE_CONFIG.googleDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ofa-btn ofa-btn-drive-main"
                aria-label="Open Google Drive project folder"
              >
                <HardDrive size={18} />
                <span>OPEN GOOGLE DRIVE</span>
                <ExternalLink size={16} />
              </a>
              <button className="ofa-btn ofa-btn-copy" onClick={handleCopyDriveLink}>
                {copiedDriveLink ? (
                  <>
                    <Check size={16} style={{ color: '#A3E635' }} />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Drive Link</span>
                  </>
                )}
              </button>
            </div>

            <div className="ofa-drive-security-tag">
              <Lock size={13} />
              <span>Drive Folder • Open with your Google Account</span>
            </div>

            {/* ── WhatsApp Project Selection Confirmation Box ── */}
            <div className="ofa-drive-confirm-box">
              <div className="ofa-drive-confirm-header">
                <div className="ofa-drive-confirm-badge">
                  <MessageCircle size={13} />
                  STEP 2 — CONFIRM ON WHATSAPP
                </div>
                <h5 className="ofa-drive-confirm-title">Decide & Confirm Your Project</h5>
                <p className="ofa-drive-confirm-text">
                  After reviewing the projects in Drive, decide which 1 project you will build and inform us on WhatsApp with your details before starting:
                </p>
              </div>

              <div className="ofa-drive-confirm-details-grid">
                <div className="ofa-drive-detail-item">
                  <span className="ofa-detail-dot">1</span>
                  <span><strong>Candidate Details:</strong> Your Name, Contact & Email</span>
                </div>
                <div className="ofa-drive-detail-item">
                  <span className="ofa-detail-dot">2</span>
                  <span><strong>Selected Project:</strong> Exact Project Name from Drive</span>
                </div>
                <div className="ofa-drive-detail-item">
                  <span className="ofa-detail-dot">3</span>
                  <span><strong>Timeline:</strong> Complete project within given time</span>
                </div>
              </div>

              <div className="ofa-drive-confirm-action">
                <a
                  href={whatsappConfirmProjectChoiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ofa-btn ofa-btn-whatsapp ofa-btn-whatsapp-lg"
                  aria-label="Confirm selected project on WhatsApp"
                >
                  <MessageCircle size={18} />
                  <span>Confirm Selected Project on WhatsApp</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* If structured projects array has items, display them optionally below */}
          {OPEN_FOR_ALL_PROJECTS.length > 0 && (
            <div className="ofa-projects-grid" style={{ marginTop: '24px' }}>
              {OPEN_FOR_ALL_PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>

        {/* ── 4. Project Submission via Google Form & Next Steps ───────── */}
        <div className="ofa-final-card" id="ofa-submission">
          <div className="ofa-final-card-top-bar"></div>
          <div className="ofa-final-card-body">
            <div className="ofa-final-icon">
              <Upload size={30} />
            </div>
            <div className="ofa-info-card-label">STEP 4 — SUBMISSION & NEXT STEPS</div>
            <h4 className="ofa-final-title">Submit Completed Project via Google Form</h4>
            <p className="ofa-final-text">
              Once you have finished your chosen project, upload your work through the official Google Form. After our team evaluates your submission, we will send the interview scheduling link directly to you.
            </p>

            {/* Google Form Submission Action */}
            <div style={{ margin: '0 auto 28px', maxWidth: '440px' }}>
              <a
                href={SITE_CONFIG.projectSubmissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ofa-btn ofa-btn-submit-main"
                aria-label="Open Google Form for project submission"
              >
                <Upload size={18} />
                <span>OPEN GOOGLE FORM SUBMISSION</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* What Happens Next Roadmap Card */}
            <div className="ofa-next-steps-card">
              <div className="ofa-next-steps-badge">
                <CheckCircle2 size={13} />
                WHAT HAPPENS AFTER SUBMISSION?
              </div>
              <h5 className="ofa-next-steps-title">Interview Scheduling Process</h5>
              <div className="ofa-next-steps-grid">
                <div className="ofa-next-step-item">
                  <div className="ofa-next-step-number">1</div>
                  <div className="ofa-next-step-content">
                    <h6>Project Evaluation</h6>
                    <p>Our technical & HR evaluation team reviews your submitted files, code repository, and documentation.</p>
                  </div>
                </div>
                <div className="ofa-next-step-item">
                  <div className="ofa-next-step-number">2</div>
                  <div className="ofa-next-step-content">
                    <h6>Interview Link Sent Privately</h6>
                    <p>Upon verification, our team will personally send the official interview booking link to your WhatsApp & Email.</p>
                  </div>
                </div>
                <div className="ofa-next-step-item">
                  <div className="ofa-next-step-number">3</div>
                  <div className="ofa-next-step-content">
                    <h6>Schedule & Attend Interview</h6>
                    <p>Use the personalized link sent by our team to choose your preferred time slot and attend the final discussion.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Sequence Tracker */}
            <div className="ofa-final-sequence" style={{ marginTop: '28px' }}>
              <div className="ofa-final-sequence-item done">
                <CheckCircle2 size={13} />
                <span>1. Choose Project (Drive)</span>
              </div>
              <div className="ofa-final-sequence-divider">→</div>
              <div className="ofa-final-sequence-item done">
                <CheckCircle2 size={13} />
                <span>2. Confirm (WhatsApp)</span>
              </div>
              <div className="ofa-final-sequence-divider">→</div>
              <div className="ofa-final-sequence-item done">
                <CheckCircle2 size={13} />
                <span>3. Build Project</span>
              </div>
              <div className="ofa-final-sequence-divider">→</div>
              <div className="ofa-final-sequence-item active">
                <Upload size={13} />
                <span>4. Submit Form</span>
              </div>
              <div className="ofa-final-sequence-divider">→</div>
              <div className="ofa-final-sequence-item active">
                <Send size={13} />
                <span>5. Interview Link Sent by Team</span>
              </div>
            </div>

            <div className="ofa-final-note" style={{ marginTop: '18px' }}>
              <Info size={14} />
              <span>Note: Interview links are not hosted publicly on the website. Links are dispatched exclusively by the Vardha Links team post-submission verification.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
