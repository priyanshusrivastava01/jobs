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
  Award,
  Gift,
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
    title: 'Confirm on WhatsApp with Resume',
    desc: 'Share your Resume, contact details, and chosen project name on WhatsApp to get approval before starting.',
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
    `Hello Vardha Links Team,\n\nI have reviewed the projects in Google Drive and selected "${project.name}". I have attached my resume with this message:\n\n• Candidate Name: [Your Name]\n• Email / Phone: [Your Contact Details]\n• Selected Project: ${project.name}\n• Resume: (Attached with this chat)\n\nPlease review and confirm my registration so I can start working within the given timeline.`
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
    `Hello Vardha Links Team,\n\nI have reviewed the project briefs in Google Drive and selected my project for the Open for All opportunity. I have attached my resume with this message:\n\n• Candidate Name: [Your Name]\n• Email ID: [Your Email]\n• Phone Number: [Your Phone Number]\n• Selected Project: [Exact Project Name from Drive]\n• Resume: (Attached with this message)\n\nPlease review and confirm my project undertaking so I can start working within the given timeline.`
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
              Access the Google Drive folder, choose 1 project to build, complete it within the given time, earn a verified Certificate, win exciting Prizes, and get fast-tracked for Direct Hiring!
            </p>
            <a href="#ofa-projects" className="ofa-btn ofa-btn-primary">
              <HardDrive size={16} />
              Access Project Drive
              <ArrowDown size={14} />
            </a>
          </div>
        </div>

        {/* ── Candidate Benefits & Perks Showcase ──────────────────────── */}
        <div className="ofa-perks-container" id="ofa-perks">
          <div className="ofa-perks-header">
            <div className="section-badge">
              <Award size={13} />
              Rewards & Opportunities
            </div>
            <h3 className="ofa-perks-main-title">What You Gain by Completing the Project</h3>
            <p className="ofa-perks-main-subtitle">
              Every participant who undertakes and completes the project receives verifiable credentials, performance rewards, and career opportunities.
            </p>
          </div>

          <div className="ofa-perks-grid">
            {/* Perk 1: Certificate */}
            <div className="ofa-perk-card ofa-perk-card--cert">
              <div className="ofa-perk-icon-box cert">
                <Award size={26} />
              </div>
              <div className="ofa-perk-badge cert">GUARANTEED FOR ALL</div>
              <h4 className="ofa-perk-title">Official Project Certificate</h4>
              <p className="ofa-perk-desc">
                Every candidate who completes and submits their chosen project receives an official verified <strong>Certificate of Project Completion</strong> from Vardha Links to enrich their resume and portfolio.
              </p>
            </div>

            {/* Perk 2: Prizes */}
            <div className="ofa-perk-card ofa-perk-card--prize">
              <div className="ofa-perk-icon-box prize">
                <Gift size={26} />
              </div>
              <div className="ofa-perk-badge prize">FOR TOP PERFORMERS</div>
              <h4 className="ofa-perk-title">Exciting Prizes & Rewards</h4>
              <p className="ofa-perk-desc">
                High-quality, innovative, and exceptionally well-crafted project submissions will be rewarded with <strong>special prizes, tech goodies, and merit recognition</strong> from our team.
              </p>
            </div>

            {/* Perk 3: Direct Hiring */}
            <div className="ofa-perk-card ofa-perk-card--job">
              <div className="ofa-perk-icon-box job">
                <Briefcase size={26} />
              </div>
              <div className="ofa-perk-badge job">CAREER ADVANCEMENT</div>
              <h4 className="ofa-perk-title">Direct Hiring & Job Opportunities</h4>
              <p className="ofa-perk-desc">
                Demonstrate your practical engineering skills through real-world execution! Top performers get fast-tracked for <strong>direct interviews and high hiring chances</strong> for roles at Vardha Links.
              </p>
            </div>
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

        {/* ── 3. Project Selection & Confirmation Flow ───────────────── */}
        <div className="ofa-projects-area" id="ofa-projects">
          <div className="ofa-section-header">
            <div className="section-badge">
              <HardDrive size={13} />
              Project Repository & Confirmation
            </div>
            <h3 className="ofa-section-title">Access Projects & Confirm Selection</h3>
            <p className="ofa-section-subtitle">
              Access Google Drive, choose your 1 project, and confirm with your resume on WhatsApp before starting.
            </p>
          </div>

          {/* ── Card 1: Step 1 - Google Drive Project Access ── */}
          <div className="ofa-drive-card">
            <div className="ofa-drive-card-glow-1"></div>
            <div className="ofa-drive-card-glow-2"></div>

            <div className="ofa-drive-icon-box">
              <HardDrive size={30} />
            </div>

            <div className="ofa-drive-step-tag">
              STEP 1 — CHOOSE YOUR PROJECT
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

            <div className="ofa-drive-security-tag" style={{ marginBottom: 0 }}>
              <Lock size={13} />
              <span>Drive Folder • Open with your Google Account</span>
            </div>
          </div>

          {/* ── Card 2: Step 2 - WhatsApp Project Confirmation & Resume Submission ── */}
          <div className="ofa-confirm-card" id="ofa-confirm">
            <div className="ofa-confirm-card-top-bar"></div>
            <div className="ofa-confirm-card-body">
              <div className="ofa-confirm-icon-box">
                <MessageCircle size={28} />
              </div>

              <div className="ofa-confirm-badge">
                <MessageCircle size={13} />
                STEP 2 — CONFIRM ON WHATSAPP
              </div>

              <h4 className="ofa-confirm-title">Confirm Project Selection & Share Resume</h4>
              <p className="ofa-confirm-desc">
                After exploring projects in Drive, message our team on WhatsApp with your details and <strong>attach your Resume / CV</strong>. Once you receive confirmation from our team, you can proceed with building your project within the given timeline:
              </p>

              <div className="ofa-confirm-grid">
                <div className="ofa-confirm-grid-item">
                  <div className="ofa-confirm-step-dot">1</div>
                  <div className="ofa-confirm-item-content">
                    <h6>Candidate Details</h6>
                    <p>Your Full Name, Email ID & Contact Number</p>
                  </div>
                </div>

                <div className="ofa-confirm-grid-item">
                  <div className="ofa-confirm-step-dot">2</div>
                  <div className="ofa-confirm-item-content">
                    <h6>Selected Project</h6>
                    <p>Exact Project Name chosen from Google Drive</p>
                  </div>
                </div>

                <div className="ofa-confirm-grid-item">
                  <div className="ofa-confirm-step-dot">3</div>
                  <div className="ofa-confirm-item-content">
                    <h6>Attach Resume / CV</h6>
                    <p>Share your updated Resume file directly in the chat</p>
                  </div>
                </div>

                <div className="ofa-confirm-grid-item">
                  <div className="ofa-confirm-step-dot">4</div>
                  <div className="ofa-confirm-item-content">
                    <h6>Team Confirmation</h6>
                    <p>Start building once confirmed by our team</p>
                  </div>
                </div>
              </div>

              <div className="ofa-confirm-cta-row">
                <a
                  href={whatsappConfirmProjectChoiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ofa-btn ofa-btn-whatsapp ofa-btn-whatsapp-lg"
                  aria-label="Confirm selected project and share resume on WhatsApp"
                >
                  <MessageCircle size={19} />
                  <span>Confirm Project & Share Resume on WhatsApp</span>
                  <ExternalLink size={15} />
                </a>
                <span className="ofa-confirm-helper-note">
                  ⚡ Pre-filled message template will open automatically in WhatsApp.
                </span>
              </div>
            </div>
          </div>

          {/* ── Card 3: Step 3 - Build Project Within Given Time ── */}
          <div className="ofa-execution-card" id="ofa-execution">
            <div className="ofa-execution-card-top-bar"></div>
            <div className="ofa-execution-card-body">
              <div className="ofa-execution-icon-box">
                <Clock size={28} />
              </div>

              <div className="ofa-execution-badge">
                <Clock size={13} />
                STEP 3 — COMPLETE WITHIN GIVEN TIME
              </div>

              <h4 className="ofa-execution-title">Build & Finalize Your Project</h4>
              <p className="ofa-execution-desc">
                After getting official confirmation from our team on WhatsApp, work dedicatedly on your chosen project. Ensure all deliverables, source code, and documentation are completed within the given timeline:
              </p>

              <div className="ofa-execution-grid">
                <div className="ofa-execution-item">
                  <span className="ofa-execution-tag">Scope & Deliverables</span>
                  <p>Follow all technical requirements and guidelines outlined in the Drive brief.</p>
                </div>
                <div className="ofa-execution-item">
                  <span className="ofa-execution-tag">Time Management</span>
                  <p>Adhere strictly to your given timeline to ensure eligibility for final evaluation.</p>
                </div>
                <div className="ofa-execution-item">
                  <span className="ofa-execution-tag">Submission Preparation</span>
                  <p>Keep your code repository, live demo link, or drive files ready for upload.</p>
                </div>
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

            {/* Google Form Submission Actions (Project 1 & Project 2) */}
            <div className="ofa-submission-buttons">
              <a
                href={SITE_CONFIG.project1SubmissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ofa-btn ofa-btn-submit-main"
                aria-label="Submit Project 1 via Google Form"
              >
                <Upload size={17} />
                <span>SUBMIT PROJECT 1 (GOOGLE FORM)</span>
                <ExternalLink size={15} />
              </a>

              <a
                href={SITE_CONFIG.project2SubmissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ofa-btn ofa-btn-submit-main ofa-btn-submit-alt"
                aria-label="Submit Project 2 via Google Form"
              >
                <Upload size={17} />
                <span>SUBMIT PROJECT 2 (GOOGLE FORM)</span>
                <ExternalLink size={15} />
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
                <span>2. Confirm & Resume (WhatsApp)</span>
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
