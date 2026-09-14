import React, { useState, useRef } from 'react';
import { MessageSquareQuote, Quote, Star, Play, Pause, ChevronLeft, ChevronRight, Video } from 'lucide-react';

// ── Video Imports ─────────────────────────────────────────────────────────────
import video1 from '../assets/video/0912 (1).webm';
import video2 from '../assets/video/0912 (2) (1).webm';
import video3 from '../assets/video/0912(2).webm';

// ── Video Testimonials Data ───────────────────────────────────────────────────
const VIDEO_TESTIMONIALS = [
  { id: 1, src: video1, name: 'Candidate Testimonial 1', label: 'Interview Experience' },
  { id: 2, src: video2, name: 'Candidate Testimonial 2', label: 'Selection Journey' },
  { id: 3, src: video3, name: 'Candidate Testimonial 3', label: 'Project Feedback' },
];

// ── Text Testimonials Data ────────────────────────────────────────────────────
const TEXT_TESTIMONIALS = [
  {
    quote: 'The interview process was simple and well organised. I clearly understood what was expected from me at every step.',
    name: 'Abhishek Sharma',
    role: 'Selected Candidate',
    initials: 'AS',
    accentClass: 'green',
  },
  {
    quote: 'I really liked how the team communicated the process and guided me whenever I had a question.',
    name: 'Akshat Srivastava',
    role: 'Selected Candidate',
    initials: 'AS',
    accentClass: 'blue',
  },
  {
    quote: 'The entire process from applying to getting shortlisted was smooth and transparent. I felt valued as a candidate throughout.',
    name: 'Priyanshu Srivastava',
    role: 'Selected Candidate',
    initials: 'PS',
    accentClass: 'purple',
  },
];

// ── Video Card Sub-component ──────────────────────────────────────────────────
function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => setIsPlaying(false);
  const hasSource = video.src && video.src.length > 0;

  return (
    <div className="vtm-card">
      <div className="vtm-video-wrapper" onClick={hasSource ? togglePlay : undefined}>
        {hasSource ? (
          <>
            <video
              ref={videoRef}
              className="vtm-video"
              src={video.src}
              onEnded={handleVideoEnd}
              playsInline
              preload="metadata"
            />
            <div className={`vtm-play-overlay ${isPlaying ? 'vtm-play-overlay--hidden' : ''}`}>
              <div className="vtm-play-btn">
                <Play size={22} fill="#fff" />
              </div>
            </div>
            {isPlaying && (
              <div className="vtm-pause-overlay">
                <Pause size={18} fill="#fff" />
              </div>
            )}
          </>
        ) : (
          <div className="vtm-placeholder">
            <div className="vtm-placeholder-icon">
              <Video size={24} />
            </div>
            <span className="vtm-placeholder-text">Video Coming Soon</span>
          </div>
        )}
      </div>
      <div className="vtm-card-info">
        <div className="vtm-card-label">{video.label}</div>
        <div className="vtm-card-name">{video.name}</div>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function TestimonialSection() {
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const scrollAmt = 220;
    carouselRef.current.scrollBy({
      left: dir === 'left' ? -scrollAmt : scrollAmt,
      behavior: 'smooth',
    });
  };

  return (
    <section className="testimonial-section" id="candidate-testimonials">
      <div className="container">
        {/* Header */}
        <div className="testimonial-header">
          <div className="section-badge">
            <MessageSquareQuote size={13} />
            CANDIDATE EXPERIENCE
          </div>
          <h2 className="section-title">
            What Candidates Say About Their Interview Experience
          </h2>
          <p className="section-subtitle">
            Hear directly from candidates who went through the Vardha Links
            interview and selection process.
          </p>
        </div>

        {/* ── Video Testimonials Carousel ──────────────────────────────── */}
        <div className="vtm-carousel-container">
          <div className="vtm-carousel-header">
            <div className="vtm-carousel-badge">
              <Video size={13} />
              VIDEO TESTIMONIALS
            </div>
            <div className="vtm-carousel-arrows">
              <button className="vtm-arrow-btn" onClick={() => scroll('left')} aria-label="Scroll left">
                <ChevronLeft size={18} />
              </button>
              <button className="vtm-arrow-btn" onClick={() => scroll('right')} aria-label="Scroll right">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="vtm-carousel-track" ref={carouselRef}>
            {VIDEO_TESTIMONIALS.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>

        {/* ── Text Testimonial Cards Grid ──────────────────────────────── */}
        <div className="testimonial-grid">
          {TEXT_TESTIMONIALS.map((t, idx) => (
            <div className={`testimonial-card testimonial-card--${t.accentClass}`} key={idx}>
              <div className={`testimonial-quote-icon testimonial-quote-icon--${t.accentClass}`}>
                <Quote size={20} />
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-divider"></div>
              <div className="testimonial-author">
                <div className={`testimonial-avatar testimonial-avatar--${t.accentClass}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
