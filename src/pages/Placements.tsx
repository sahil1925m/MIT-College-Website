import { useEffect, useRef, useState } from 'react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const highlights = [
    { num: 95, suffix: '%', label: 'Placement Rate' },
    { num: 18, suffix: ' LPA', label: 'Highest Package', prefix: '₹' },
    { num: 6.5, suffix: ' LPA', label: 'Average Package', prefix: '₹', decimal: true },
    { num: 120, suffix: '+', label: 'Recruiting Companies' },
    { num: 500, suffix: '+', label: 'Offers Made' },
];

const recruiters = [
    { name: 'TCS', logo: 'https://cdn.simpleicons.org/tcs/0' },
    { name: 'Infosys', logo: 'https://cdn.simpleicons.org/infosys/007CC3' },
    { name: 'Wipro', logo: 'https://cdn.simpleicons.org/wipro/341c5e' },
    { name: 'Capgemini', logo: 'https://cdn.simpleicons.org/capgemini/0070AD' },
    { name: 'IBM', logo: 'https://cdn.simpleicons.org/ibm/052FAD' },
    { name: 'Oracle', logo: 'https://cdn.simpleicons.org/oracle/F80000' },
    { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft/5E5E5E' },
    { name: 'Amazon', logo: 'https://cdn.simpleicons.org/amazon/FF9900' },
    { name: 'Accenture', logo: 'https://cdn.simpleicons.org/accenture/A100FF' },
    { name: 'Cognizant', logo: 'https://cdn.simpleicons.org/cognizant/1A4CA1' },
    { name: 'Deloitte', logo: 'https://cdn.simpleicons.org/deloitte/86BC25' },
    { name: 'Tech Mahindra', logo: 'https://cdn.simpleicons.org/techmahindra/C41E3A' },
    { name: 'Hexaware', logo: 'https://cdn.simpleicons.org/hexaware/EE3525' },
    { name: 'Mphasis', logo: 'https://cdn.simpleicons.org/mphasis/552e8a' },
    { name: 'LTIMindtree', logo: 'https://cdn.simpleicons.org/ltimindtree/01A551' },
    { name: 'HCL Tech', logo: 'https://cdn.simpleicons.org/hcl/EE3124' },
];

const yearStats = [
    { year: '2021', pct: 78 },
    { year: '2022', pct: 85 },
    { year: '2023', pct: 91 },
    { year: '2024', pct: 95 },
];

const branchStats = [
    { branch: 'Computer Science', pct: 98 },
    { branch: 'Information Technology', pct: 96 },
    { branch: 'Electronics & Comm.', pct: 90 },
    { branch: 'Mechanical Engineering', pct: 84 },
    { branch: 'Civil Engineering', pct: 78 },
];

const features = [
    {
        icon: '🎯',
        title: 'Industry-Oriented Training',
        desc: 'Hands-on workshops, live projects, and domain-specific skill programs aligned with industry expectations.',
    },
    {
        icon: '🗣️',
        title: 'Mock Interviews',
        desc: 'Regular mock interviews with industry professionals to prepare students for real-world recruitment.',
    },
    {
        icon: '💼',
        title: 'Internship Support',
        desc: 'Strong network of 120+ companies offering internships to build practical experience from year 2.',
    },
    {
        icon: '🤝',
        title: 'Corporate Collaborations',
        desc: 'Long-term MoUs with top companies for exclusive hiring drives, seminars, and knowledge exchange.',
    },
];

const testimonials = [
    {
        name: 'Priya Sharma',
        branch: 'Computer Science',
        year: '2023',
        company: 'Microsoft',
        rating: 5,
        quote: 'The T&P Cell at MIT Indore was phenomenal. The mock interviews and training sessions prepared me thoroughly for Microsoft\'s rigorous process.',
        initials: 'PS',
        color: '#C62828',
    },
    {
        name: 'Rahul Verma',
        branch: 'Information Technology',
        year: '2022',
        company: 'Amazon',
        rating: 5,
        quote: 'From aptitude training to HR rounds, the placement cell covered everything. I secured a dream offer at Amazon right on campus.',
        initials: 'RV',
        color: '#1565C0',
    },
    {
        name: 'Aditi Joshi',
        branch: 'Electronics & Comm.',
        year: '2024',
        company: 'IBM',
        rating: 5,
        quote: 'The corporate exposure and alumni mentorship network at MIT Indore gave me the confidence and connections to land my role at IBM.',
        initials: 'AJ',
        color: '#2E7D32',
    },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.2) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);
    return { ref, inView };
}

function useCountUp(target: number, duration = 2000, active = false, decimal = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(decimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [active, target, duration, decimal]);
    return count;
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ item, active }: { item: typeof highlights[0]; active: boolean }) {
    const count = useCountUp(item.num, 2000, active, item.decimal);
    return (
        <div className="pl-stat-card">
            <div className="pl-stat-num">
                {item.prefix || ''}{count}{item.suffix}
            </div>
            <div className="pl-stat-label">{item.label}</div>
            <div className="pl-stat-line" />
        </div>
    );
}

function ProgressBar({ label, pct, active }: { label: string; pct: number; active: boolean }) {
    return (
        <div className="pl-progress-row">
            <div className="pl-progress-meta">
                <span className="pl-progress-label">{label}</span>
                <span className="pl-progress-pct">{pct}%</span>
            </div>
            <div className="pl-progress-track">
                <div
                    className="pl-progress-fill"
                    style={{ width: active ? `${pct}%` : '0%' }}
                />
            </div>
        </div>
    );
}

function StarRating({ count }: { count: number }) {
    return (
        <div className="pl-stars">
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < count ? 'pl-star active' : 'pl-star'}>★</span>
            ))}
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const Placements = () => {
    const statsSection = useInView(0.2);
    const recruitersSection = useInView(0.15);
    const statsChartSection = useInView(0.2);
    const tpSection = useInView(0.2);
    const testimonialsSection = useInView(0.15);

    return (
        <div className="page-wrapper pl-page">

            {/* ── 1. HERO ────────────────────────────────────────────── */}
            <section className="pl-hero">
                <div className="pl-hero-bg" />
                <div className="pl-hero-overlay" />
                <div className="pl-hero-grid" />
                <div className="pl-hero-content">
                    <div className="pl-hero-chip">
                        <span className="chip-dot" />
                        Batch 2024 Results
                    </div>
                    <h1 className="pl-hero-title">
                        Placement <span className="pl-accent">Success</span>
                    </h1>
                    <p className="pl-hero-sub">
                        Where ambition meets opportunity. MIT Indore has placed{' '}
                        <strong>5,000+ engineers</strong> across 120+ global companies —
                        with a legacy of record-breaking packages and career excellence.
                    </p>
                    <div className="pl-hero-badges">
                        <span className="pl-badge">🏆 95% Placement Rate</span>
                        <span className="pl-badge">💼 ₹18 LPA Highest</span>
                        <span className="pl-badge">⭐ 120+ Recruiters</span>
                    </div>
                </div>
                <div className="pl-hero-scroll">
                    <div className="scroll-line" />
                    <span>Scroll</span>
                </div>
            </section>

            {/* ── 2. HIGHLIGHTS ─────────────────────────────────────── */}
            <section className="pl-highlights section-dark" ref={statsSection.ref}>
                <div className="pl-highlights-inner container">
                    <div className="pl-section-header center light">
                        <div className="section-chip light-chip">
                            <span className="chip-dot" />
                            By The Numbers
                        </div>
                        <h2 className="section-title section-title-white">
                            Placement <span>Highlights</span>
                        </h2>
                        <p className="section-sub section-sub-white">
                            Consistently delivering top-tier results year after year.
                        </p>
                    </div>
                    <div className="pl-stats-grid">
                        {highlights.map((item, i) => (
                            <StatCard key={i} item={item} active={statsSection.inView} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. TOP RECRUITERS ─────────────────────────────────── */}
            <section className="pl-recruiters section section-alt" ref={recruitersSection.ref}>
                <div className="container">
                    <div className="pl-section-header center">
                        <div className="section-chip">
                            <span className="chip-dot" />
                            Our Partners
                        </div>
                        <h2 className="section-title">
                            Top <span>Recruiters</span>
                        </h2>
                        <p className="section-sub" style={{ margin: '0 auto' }}>
                            Industry leaders who trust MIT Indore to deliver exceptional talent.
                        </p>
                    </div>
                    <div className={`pl-recruiters-grid ${recruitersSection.inView ? 'in-view' : ''}`}>
                        {recruiters.map((company, i) => (
                            <div className="pl-recruiter-card" key={i} style={{ animationDelay: `${i * 0.04}s` }}>
                                <div className="pl-recruiter-logo">
                                    <img
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                </div>
                                <span className="pl-recruiter-name">{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. PLACEMENT STATISTICS ───────────────────────────── */}
            <section className="pl-statistics section section-dark" ref={statsChartSection.ref}>
                <div className="container">
                    <div className="pl-section-header center light">
                        <div className="section-chip light-chip">
                            <span className="chip-dot" />
                            Data Insights
                        </div>
                        <h2 className="section-title section-title-white">
                            Placement <span>Statistics</span>
                        </h2>
                        <p className="section-sub section-sub-white">
                            Transparent data reflecting our consistent upward trajectory.
                        </p>
                    </div>
                    <div className="pl-stats-charts">
                        <div className="pl-chart-block">
                            <h3 className="pl-chart-title">Year-Wise Placement Rate</h3>
                            {yearStats.map((s, i) => (
                                <ProgressBar key={i} label={s.year} pct={s.pct} active={statsChartSection.inView} />
                            ))}
                        </div>
                        <div className="pl-chart-divider" />
                        <div className="pl-chart-block">
                            <h3 className="pl-chart-title">Branch-Wise Placement Rate</h3>
                            {branchStats.map((s, i) => (
                                <ProgressBar key={i} label={s.branch} pct={s.pct} active={statsChartSection.inView} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. T&P CELL ──────────────────────────────────────── */}
            <section className="pl-tp section" ref={tpSection.ref}>
                <div className="container">
                    <div className="pl-tp-layout">
                        <div className={`pl-tp-text ${tpSection.inView ? 'in-view' : ''}`}>
                            <div className="section-chip">
                                <span className="chip-dot" />
                                Our Infrastructure
                            </div>
                            <h2 className="section-title">
                                Training &amp; <span>Placement Cell</span>
                            </h2>
                            <p className="section-sub" style={{ maxWidth: '100%' }}>
                                The Training & Placement Cell at MIT Indore is a dedicated, industry-connected
                                unit committed to bridging the gap between academia and profession.
                                With a proactive team and strong corporate relationships, we ensure
                                every student is career-ready before graduation.
                            </p>
                            <div className="pl-features-grid">
                                {features.map((f, i) => (
                                    <div className="pl-feature-card" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                                        <div className="pl-feature-icon">{f.icon}</div>
                                        <div>
                                            <h4 className="pl-feature-title">{f.title}</h4>
                                            <p className="pl-feature-desc">{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`pl-tp-visual ${tpSection.inView ? 'in-view' : ''}`}>
                            <div className="pl-tp-card-stack">
                                <div className="pl-tp-big-stat">
                                    <div className="pl-tp-big-num">5000+</div>
                                    <div className="pl-tp-big-label">Students Placed</div>
                                </div>
                                <div className="pl-tp-info-row">
                                    <div className="pl-tp-info-pill">
                                        <span>📅</span> Active since 2004
                                    </div>
                                    <div className="pl-tp-info-pill">
                                        <span>🏙️</span> Pan-India Drives
                                    </div>
                                </div>
                                <div className="pl-tp-quote">
                                    "Our mission is to ensure every student steps out of MIT Indore
                                    with the confidence, skills, and offer letter they deserve."
                                    <div className="pl-tp-quote-attr">— Head of Placement Cell</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. TESTIMONIALS ──────────────────────────────────── */}
            <section className="pl-testimonials section section-alt" ref={testimonialsSection.ref}>
                <div className="container">
                    <div className="pl-section-header center">
                        <div className="section-chip">
                            <span className="chip-dot" />
                            Alumni Speak
                        </div>
                        <h2 className="section-title">
                            What Our <span>Alumni Say</span>
                        </h2>
                        <p className="section-sub" style={{ margin: '0 auto' }}>
                            Real success stories from our placement alumni.
                        </p>
                    </div>
                    <div className={`pl-testimonials-grid ${testimonialsSection.inView ? 'in-view' : ''}`}>
                        {testimonials.map((t, i) => (
                            <div className="pl-testimonial-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                                <StarRating count={t.rating} />
                                <p className="pl-testimonial-quote">"{t.quote}"</p>
                                <div className="pl-testimonial-footer">
                                    <div className="pl-testimonial-avatar" style={{ background: t.color }}>
                                        {t.initials}
                                    </div>
                                    <div className="pl-testimonial-info">
                                        <div className="pl-testimonial-name">{t.name}</div>
                                        <div className="pl-testimonial-meta">
                                            {t.branch} · {t.year} · <strong>{t.company}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. CTA ───────────────────────────────────────────── */}
            <section className="pl-cta">
                <div className="pl-cta-bg" />
                <div className="pl-cta-content">
                    <div className="section-chip light-chip" style={{ marginBottom: '1.5rem' }}>
                        <span className="chip-dot" />
                        Your Future Starts Now
                    </div>
                    <h2 className="pl-cta-title">
                        Start Your Career <span className="pl-accent">Journey</span> With Us
                    </h2>
                    <p className="pl-cta-sub">
                        Join thousands of MIT Indore alumni thriving in their dream careers.
                        Your success story begins here.
                    </p>
                    <div className="pl-cta-actions">
                        <a href="/admissions" className="btn btn-primary pl-cta-btn">
                            Apply Now
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="/contact" className="btn btn-ghost pl-cta-btn">
                            Contact Placement Cell
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Placements;
