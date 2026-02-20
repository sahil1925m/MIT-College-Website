import { useRef, useState, useEffect } from 'react';

// ── SVG Icons ─────────────────────────────────────────────────────────────────

const TrophyIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
        <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
        <path d="M12 17c-4 0-6-3-6-7V5h12v5c0 4-2 7-6 7Z" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
    </svg>
);

const FlaskIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6" />
        <path d="M10 3v7l-4.5 9a1 1 0 0 0 .9 1.5h11.2a1 1 0 0 0 .9-1.5L14 10V3" />
        <line x1="8.5" y1="16" x2="15.5" y2="16" />
    </svg>
);

const GraduationIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────────

const features = [
    {
        Icon: TrophyIcon,
        title: 'Exceptional Placement Record',
        desc: 'Fortune 500 partnerships with TCS, Infosys, Wipro, L&T, and 200+ global companies driving a 95% placement rate.',
        stat: '95%',
        statLabel: 'Placement Rate',
    },
    {
        Icon: FlaskIcon,
        title: 'State-of-the-Art Laboratories',
        desc: '40+ specialized labs equipped with the latest AI/ML systems, robotics, IoT kits, and cutting-edge research infrastructure.',
        stat: '40+',
        statLabel: 'Specialized Labs',
    },
    {
        Icon: GraduationIcon,
        title: 'Distinguished Faculty',
        desc: '200+ PhD holders and industry veterans dedicated to mentoring with personalized guidance and research excellence.',
        stat: '200+',
        statLabel: 'PhD Faculty',
    },
];

const VIDEO_ID = 'kL8IpxB5v8s';
const THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

// ── Component ─────────────────────────────────────────────────────────────────

const WhyChooseUs = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.15 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="wcu-section section-alt" id="why-choose-us" ref={sectionRef}>
            <div className="wcu-inner container">

                {/* ── LEFT COLUMN ─────────────────────────────────── */}
                <div className="wcu-left">
                    {/* Header */}
                    <div className={`wcu-header anim-left ${visible ? 'visible' : ''}`}>
                        <div className="section-chip">
                            <span className="chip-dot" />
                            Why Choose MIT
                        </div>
                        <h2 className="wcu-title section-title">
                            Built for the <br />
                            <span className="wcu-gradient">Future of Engineering</span>
                        </h2>
                        <p className="section-sub">
                            We combine rigorous academics with real-world exposure, giving students
                            the competitive edge they need to excel in a rapidly evolving global industry.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="wcu-cards">
                        {features.map((feat, i) => {
                            const dimmed = hoveredIdx !== null && hoveredIdx !== i;
                            const focused = hoveredIdx === i;
                            return (
                                <div
                                    key={i}
                                    className={`wcu-card anim-up ${visible ? 'visible' : ''} ${dimmed ? 'dimmed' : ''} ${focused ? 'focused' : ''}`}
                                    style={{ transitionDelay: `${0.25 + i * 0.15}s` }}
                                    onMouseEnter={() => setHoveredIdx(i)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div className="wcu-card-icon-wrap">
                                        <div className={`wcu-card-icon ${focused ? 'active' : ''}`}>
                                            <feat.Icon />
                                        </div>
                                        <div className="wcu-card-stat">
                                            <span className="wcu-stat-num">{feat.stat}</span>
                                            <span className="wcu-stat-lbl">{feat.statLabel}</span>
                                        </div>
                                    </div>
                                    <div className="wcu-card-body">
                                        <h4 className="wcu-card-title">{feat.title}</h4>
                                        <p className="wcu-card-desc">{feat.desc}</p>
                                    </div>
                                    <div className="wcu-card-arrow">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── RIGHT COLUMN — Video ─────────────────────────── */}
                <div className={`wcu-right anim-right ${visible ? 'visible' : ''}`}>
                    {/* Decorative blob */}
                    <div className="wcu-blob" />

                    {/* Video card */}
                    <div className="wcu-video-card" onClick={() => setPlaying(true)}>
                        {playing ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                                title="MIT Indore Campus"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="wcu-iframe"
                            />
                        ) : (
                            <>
                                <img src={THUMB} alt="Campus Video" className="wcu-thumb" />
                                <div className="wcu-video-overlay" />

                                {/* Pulsating play button */}
                                <div className="wcu-play-wrap">
                                    <div className="wcu-play-pulse" />
                                    <div className="wcu-play-pulse wcu-play-pulse-2" />
                                    <button className="wcu-play-btn" aria-label="Play video">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                            <polygon points="5 3 19 12 5 21 5 3" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Video label */}
                                <div className="wcu-video-label">
                                    <span className="wcu-video-dot" />
                                    MIT Indore — Campus Highlights
                                </div>
                            </>
                        )}

                        {/* Glassmorphism badge */}
                        <div className="wcu-glass-badge">
                            <span>⭐</span>
                            <span>200+ Top Recruiters</span>
                        </div>
                    </div>

                    {/* Accent card below video */}
                    <div className="wcu-accent-row">
                        <div className="wcu-accent-pill">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            NAAC Accredited
                        </div>
                        <div className="wcu-accent-pill">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            NBA Accredited
                        </div>
                        <div className="wcu-accent-pill">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            AICTE Approved
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
