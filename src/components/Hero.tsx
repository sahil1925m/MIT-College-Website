import { useEffect, useRef, useState } from 'react';

const stats = [
    { num: 25, suffix: '+', label: 'Years of Excellence' },
    { num: 200, suffix: '+', label: 'Recruiting Companies' },
    { num: 5000, suffix: '+', label: 'Students Placed' },
    { num: 92, suffix: '%', label: 'Placement Rate' },
];

// ── Count-up hook triggered by IntersectionObserver ──
function useCountUp(target: number, duration = 2000, active: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [active, target, duration]);
    return count;
}

// ── Individual stat card ──
function StatPill({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
    const count = useCountUp(stat.num, 2000, active);
    return (
        <div className="hero-stat-pill">
            <div className="hero-stat-num">{count}{stat.suffix}</div>
            <div className="hero-stat-label">{stat.label}</div>
        </div>
    );
}

const Hero = () => {
    const statsRef = useRef<HTMLDivElement>(null);
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero" id="hero">
            {/* Background Video */}
            <div className="hero-bg-video">
                <iframe
                    src="https://www.youtube.com/embed/kL8IpxB5v8s?si=a2fOijDtOz2KLnh_&autoplay=1&mute=1&controls=0&loop=1&playlist=kL8IpxB5v8s&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1"
                    title="Hero Background Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
            <div className="hero-overlay" />
            <div className="hero-grid" />
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />

            {/* Main Content */}
            <div className="hero-content" style={{ paddingTop: '9rem', paddingBottom: '4rem' }}>
                <div className="hero-badge">
                    <span className="hero-badge-dot" />
                    Admissions Open — Batch 2025–26
                </div>

                <h1>
                    Empowering <span className="highlight">Engineers</span><br />
                    Shaping the Future
                </h1>

                <p className="hero-sub">
                    Malwa Institute of Technology, Indore — where world-class academics meet
                    real-world opportunities. Build your career with 200+ industry partners and
                    a legacy of excellence.
                </p>

                <div className="hero-actions">
                    <button 
                        className="btn btn-primary"
                        onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Programs
                        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button
                        className="btn btn-ghost hero-btn-discover"
                        onClick={() => document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Discover More
                    </button>
                </div>
            </div>

            {/* Floating Stats — animated count-up */}
            <div className="hero-stats" ref={statsRef}>
                {stats.map((s, i) => (
                    <StatPill key={i} stat={s} active={statsVisible} />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll">
                <div className="scroll-line" />
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
