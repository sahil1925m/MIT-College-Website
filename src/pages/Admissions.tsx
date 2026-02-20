import { useState, useRef, useEffect } from 'react';
import CallToAction from '../components/CallToAction';
import EnquiryForm from '../components/EnquiryForm';

// ── Eligibility data ───────────────────────────────────────────────────────────
const programs = [
    {
        id: 'btech',
        label: 'B.Tech',
        badge: '4 Years',
        criteria: [
            { icon: '📋', text: 'Passed 10+2 with Physics, Chemistry & Mathematics (PCM) from a recognized board.' },
            { icon: '🏅', text: 'Minimum 45% aggregate marks in PCM (40% for reserved categories).' },
            { icon: '✅', text: 'Valid JEE Mains score or State Level Engineering Entrance Exam.' },
            { icon: '🎂', text: 'Age limit: Born on or after October 1, 2004.' },
        ],
        seats: '480 Seats  •  8 Branches',
        accent: 'var(--crimson)',
    },
    {
        id: 'mtech',
        label: 'M.Tech',
        badge: '2 Years',
        criteria: [
            { icon: '🎓', text: 'B.E. / B.Tech in relevant engineering branch from a recognized institution.' },
            { icon: '📊', text: 'Minimum 55% aggregate (50% for reserved categories).' },
            { icon: '✅', text: 'Valid GATE score mandatory for regular admission.' },
            { icon: '💼', text: 'Working professionals with 2+ years experience may apply under Sponsored category.' },
        ],
        seats: '72 Seats  •  3 Specializations',
        accent: '#1565c0',
    },
    {
        id: 'mba',
        label: 'MBA',
        badge: '2 Years',
        criteria: [
            { icon: '🎓', text: 'Bachelor\'s degree (any discipline) with minimum 50% aggregate marks.' },
            { icon: '📊', text: 'Valid CAT / MAT / CMAT / ATMA score required.' },
            { icon: '✅', text: 'Group Discussion and Personal Interview as part of selection process.' },
            { icon: '💼', text: 'Relevant work experience preferred but not mandatory.' },
        ],
        seats: '120 Seats  •  2 Specializations',
        accent: '#2e7d32',
    },
];

// ── Process steps ──────────────────────────────────────────────────────────────
const steps = [
    {
        num: '01',
        title: 'Fill Enquiry Form',
        desc: 'Complete the online application form with your academic details and program of interest.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M7 8h10M7 12h10M7 16h6" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Counseling Session',
        desc: 'Attend a one-on-one counseling session at campus or online with our admissions advisor.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Document Verification',
        desc: 'Submit marksheets, entrance score card, ID proof, and passport photos for verification.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="9 15 11 17 15 13" />
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Fee Payment & Confirm',
        desc: 'Complete fee payment online or at campus to secure your seat in the program.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
        ),
    },
];

// ── Page ───────────────────────────────────────────────────────────────────────
const Admissions = () => {
    const [activeTab, setActiveTab] = useState('btech');
    const sectionRef = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const active = programs.find(p => p.id === activeTab)!;

    return (
        <div className="page-wrapper adm-page" style={{ paddingTop: '80px' }}>

            {/* ── Hero Banner ── */}
            <div className="adm-hero">
                <div className="adm-hero-bg" />
                <div className="adm-hero-content container">
                    <div className="section-chip" style={{ margin: '0 auto 1.5rem', display: 'inline-flex', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                        <span className="chip-dot" style={{ background: '#fff' }} />
                        Admissions Open — Batch 2026–27
                    </div>
                    <h1 className="adm-hero-title">Admissions <span>2026</span></h1>
                    <p className="adm-hero-sub">
                        Join the legacy of excellence. Applications are now open for B.Tech, M.Tech, and MBA programs.
                    </p>
                    <div className="adm-hero-pills">
                        <span className="adm-hero-pill">🎓 480+ Seats</span>
                        <span className="adm-hero-pill">💯 RGPV Affiliated</span>
                        <span className="adm-hero-pill">🏆 NAAC Accredited</span>
                    </div>
                </div>
            </div>

            {/* ── Main Section ── */}
            <div className="adm-main" ref={sectionRef}>
                <div className="container adm-grid">

                    {/* ── LEFT COLUMN ── */}
                    <div className="adm-left">

                        {/* Eligibility Tabs */}
                        <div className={`adm-block anim-left ${vis ? 'visible' : ''}`}>
                            <div className="adm-block-label">Eligibility Criteria</div>
                            <h2 className="adm-block-title">Who Should Apply?</h2>

                            {/* Tab buttons */}
                            <div className="adm-tabs">
                                {programs.map(p => (
                                    <button
                                        key={p.id}
                                        className={`adm-tab ${activeTab === p.id ? 'active' : ''}`}
                                        style={{ '--tab-color': p.accent } as React.CSSProperties}
                                        onClick={() => setActiveTab(p.id)}
                                    >
                                        {p.label}
                                        <span className="adm-tab-badge">{p.badge}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Tab content card */}
                            <div className="adm-elig-card" key={active.id}>
                                <div className="adm-elig-criteria">
                                    {active.criteria.map((c, i) => (
                                        <div key={i} className="adm-elig-row">
                                            <span className="adm-elig-icon">{c.icon}</span>
                                            <span className="adm-elig-text">{c.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="adm-elig-footer" style={{ '--tab-color': active.accent } as React.CSSProperties}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                                    </svg>
                                    {active.seats}
                                </div>
                            </div>
                        </div>

                        {/* Vertical Timeline */}
                        <div className={`adm-block anim-left ${vis ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
                            <div className="adm-block-label">How To Apply</div>
                            <h2 className="adm-block-title">Application Process</h2>

                            <div className="adm-timeline">
                                {steps.map((step, i) => (
                                    <div key={i} className="adm-step">
                                        <div className="adm-step-left">
                                            <div className="adm-step-icon">{step.icon}</div>
                                            {i < steps.length - 1 && <div className="adm-step-line" />}
                                        </div>
                                        <div className="adm-step-body">
                                            <div className="adm-step-num">{step.num}</div>
                                            <h4 className="adm-step-title">{step.title}</h4>
                                            <p className="adm-step-desc">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a href="/public/brochure.pdf" className="btn btn-outline" style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} download>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Brochure
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN — Form ── */}
                    <div className={`adm-form-col anim-right ${vis ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                        <div className="adm-form-card">
                            <div className="adm-form-header">
                                <div className="adm-form-header-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="adm-form-title">Apply Online</h3>
                                    <p className="adm-form-subtitle">Our team will contact you within 24 hours</p>
                                </div>
                            </div>
                            <EnquiryForm variant="full" />
                            <p className="adm-form-trust">⚡ Takes less than 2 minutes</p>
                        </div>
                    </div>

                </div>
            </div>

            <CallToAction />
        </div>
    );
};

export default Admissions;
