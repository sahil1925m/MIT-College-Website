import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, MessageSquare, Briefcase, Handshake, MapPin, Calendar, Award, Star } from 'lucide-react';
import campus2 from '../assets/campus2.webp';
import placementVideo from '../assets/video/placement.mp4';
import Testimonials from '../components/Testimonials';

// ─── Company Logos ────────────────────────────────────────────────────────────
import logoAccenture from '../assets/COMPANIES/ACCENTURE.webp';
import logoAurusTech from '../assets/COMPANIES/Aurus Tech Pvt Ltd, Pune.webp';
import logoCIS from '../assets/COMPANIES/CIS LTD.webp';
import logoCanopus from '../assets/COMPANIES/Canopus Infosystems Pvt. Ltd.webp';
import logoInfosys from '../assets/COMPANIES/INFOSYS.webp';
import logoMindpath from '../assets/COMPANIES/Mindpath Technology.webp';
import logoSoftmen from '../assets/COMPANIES/SOFTMEN TECHNOLOGIES.webp';
import logoTCS from '../assets/COMPANIES/TCS.webp';
import logoTechInfini from '../assets/COMPANIES/TECH INFINI.webp';
import logoVirtualHeight from '../assets/COMPANIES/VIRTUAL HEIGHT IT SERVICE PRIVATE LIMITED.webp';
import logoHotwax from '../assets/COMPANIES/hotwax.webp';
import logoInnoeye from '../assets/COMPANIES/innoeye.webp';
import logoLiugong from '../assets/COMPANIES/liugong.webp';
import logoPersistent from '../assets/COMPANIES/persistent.webp';
import logoPolycab from '../assets/COMPANIES/polycab.webp';
import logoWindworld from '../assets/COMPANIES/windworld.webp';

// ─── Data ─────────────────────────────────────────────────────────────────────

const highlights = [
    { num: 18, suffix: ' LPA', label: 'Highest Package', prefix: '₹' },
    { num: 6.5, suffix: ' LPA', label: 'Average Package', prefix: '₹', decimal: true },
    { num: 120, suffix: '+', label: 'Recruiting Companies' },
    { num: 500, suffix: '+', label: 'Offers Made' },
];

const recruitersRow1 = [
    { name: 'TCS', logo: logoTCS },
    { name: 'Infosys', logo: logoInfosys },
    { name: 'Accenture', logo: logoAccenture },
    { name: 'Persistent', logo: logoPersistent },
    { name: 'Polycab', logo: logoPolycab },
    { name: 'HotWax', logo: logoHotwax },
    { name: 'Innoeye', logo: logoInnoeye },
    { name: 'Liugong', logo: logoLiugong },
];

const recruitersRow2 = [
    { name: 'Canopus Infosystems', logo: logoCanopus },
    { name: 'Mindpath Technology', logo: logoMindpath },
    { name: 'Softmen Technologies', logo: logoSoftmen },
    { name: 'Aurus Tech', logo: logoAurusTech },
    { name: 'CIS Ltd', logo: logoCIS },
    { name: 'Tech Infini', logo: logoTechInfini },
    { name: 'Virtual Height IT', logo: logoVirtualHeight },
    { name: 'Windworld', logo: logoWindworld },
];



const features = [
    {
        icon: <Target size={28} />,
        title: 'Industry-Oriented Training',
        desc: 'Hands-on workshops, live projects, and domain-specific skill programs aligned with industry expectations.',
    },
    {
        icon: <MessageSquare size={28} />,
        title: 'Mock Interviews',
        desc: 'Regular mock interviews with industry professionals to prepare students for real-world recruitment.',
    },
    {
        icon: <Briefcase size={28} />,
        title: 'Internship Support',
        desc: 'Strong network of 120+ companies offering internships to build practical experience from year 2.',
    },
    {
        icon: <Handshake size={28} />,
        title: 'Corporate Collaborations',
        desc: 'Long-term MoUs with top companies for exclusive hiring drives, seminars, and knowledge exchange.',
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





// ─── Page ─────────────────────────────────────────────────────────────────────

const Placements = () => {
    const { ref: statsRef, inView: statsInView } = useInView(0.2);
    const { ref: recruitersRef, inView: recruitersInView } = useInView(0.15);

    const { ref: tpRef, inView: tpInView } = useInView(0.2);


    return (
        <div className="page-wrapper pl-page">

            {/* ── 1. HERO ────────────────────────────────────────────── */}
            <section className="pl-hero" style={{ position: 'relative' }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        objectFit: 'cover',
                        opacity: 0.35,
                        pointerEvents: 'none'
                    }}
                >
                    <source src={placementVideo} type="video/mp4" />
                </video>
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
                        <span className="pl-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Award size={16} /> 95% Placement Rate</span>
                        <span className="pl-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Briefcase size={16} /> ₹18 LPA Highest</span>
                        <span className="pl-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Star size={16} /> 120+ Recruiters</span>
                    </div>
                </div>
                <div className="pl-hero-scroll">
                    <div className="scroll-line" />
                    <span>Scroll</span>
                </div>
            </section>

            {/* ── 2. HIGHLIGHTS ─────────────────────────────────────── */}
            <section
                className="pl-highlights section-dark"
                ref={statsRef}
                style={{
                    backgroundImage: `linear-gradient(rgba(10, 15, 28, 0.9), rgba(10, 15, 28, 0.9)), url(${campus2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
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
                            <StatCard key={i} item={item} active={statsInView} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. TOP RECRUITERS ─────────────────────────────────── */}
            <section className="pl-recruiters section section-alt" ref={recruitersRef}>
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
                </div>

                {/* Marquee — Row 1 (scrolls left) */}
                <div className={`recruiter-marquee-wrap ${recruitersInView ? 'in-view' : ''}`}>
                    <div className="recruiter-marquee recruiter-marquee--left">
                        <div className="recruiter-marquee-track">
                            {[...recruitersRow1, ...recruitersRow1, ...recruitersRow1].map((company, i) => (
                                <div className="recruiter-marquee-card" key={`r1-${i}`}>
                                    <div className="recruiter-marquee-logo">
                                        <img src={company.logo} alt={`${company.name} logo`} loading="lazy" decoding="async" />
                                    </div>
                                    <span className="recruiter-marquee-name">{company.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Marquee — Row 2 (scrolls right) */}
                    <div className="recruiter-marquee recruiter-marquee--right">
                        <div className="recruiter-marquee-track">
                            {[...recruitersRow2, ...recruitersRow2, ...recruitersRow2].map((company, i) => (
                                <div className="recruiter-marquee-card" key={`r2-${i}`}>
                                    <div className="recruiter-marquee-logo">
                                        <img src={company.logo} alt={`${company.name} logo`} loading="lazy" decoding="async" />
                                    </div>
                                    <span className="recruiter-marquee-name">{company.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient fade edges */}
                    <div className="recruiter-marquee-fade recruiter-marquee-fade--left" />
                    <div className="recruiter-marquee-fade recruiter-marquee-fade--right" />
                </div>
            </section>


            {/* ── 5. T&P CELL ──────────────────────────────────────── */}
            <section className="pl-tp section" ref={tpRef}>
                <div className="container">
                    <div className="pl-tp-layout">
                        <div className={`pl-tp-text ${tpInView ? 'in-view' : ''}`}>
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
                        <div className={`pl-tp-visual ${tpInView ? 'in-view' : ''}`}>
                            <div className="pl-tp-card-stack">
                                <div className="pl-tp-big-stat">
                                    <div className="pl-tp-big-num">5000+</div>
                                    <div className="pl-tp-big-label">Students Placed</div>
                                </div>
                                <div className="pl-tp-info-row">
                                    <div className="pl-tp-info-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        <Calendar size={18} /> Active since 2004
                                    </div>
                                    <div className="pl-tp-info-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        <MapPin size={18} /> Pan-India Drives
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

            {/* ── 6. ALUMNI TESTIMONIALS (YouTube Videos) ─────────── */}
            <Testimonials />

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
                        <a 
                            href="https://forms.zohopublic.in/lakshya2025miti1/form/CollegeRegistrationForm/formperma/bW1CsY15bWQWYeLV6_DHEHzn6lVy8u5-7K8zOwu42Es" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary pl-cta-btn"
                        >
                            Register Online
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <Link to="/contact" className="btn btn-ghost pl-cta-btn">
                            Contact Placement Cell
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Placements;
