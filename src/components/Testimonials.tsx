import { useRef, useEffect, useState } from 'react';

const testimonials = [
    { text: 'The faculty here genuinely care about your growth. The industry project exposure from year two made me job-ready well before my peers at other colleges.', name: 'Rahul Kushwaha', info: 'CSE 2022 · Software Engineer, TCS', initials: 'RK' },
    { text: 'MIT gave me a platform to not just study engineering but to live it — through hackathons, internships, and a placement team that genuinely fought for every student.', name: 'Priya Sharma', info: 'EC 2023 · VLSI Engineer, Intel', initials: 'PS' },
    { text: 'The campus life is incredible. From technical fests to sports, I grew both academically and personally. These connections will last a lifetime.', name: 'Aman Malviya', info: 'ME 2021 · Design Engineer, L&T', initials: 'AM' },
];

const Testimonials = () => {
    const ref = useRef<HTMLElement>(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="section" id="testimonials" ref={ref}>
            <div className={`testi-header anim-fade ${vis ? 'visible' : ''}`}>
                <div className="section-chip">
                    <span className="chip-dot" />Student Voices
                </div>
                <h2 className="section-title">What Our <span>Alumni</span> Say</h2>
                <p className="section-sub" style={{ margin: '0.7rem auto 0', textAlign: 'center' }}>
                    Real stories from real graduates — the MIT Indore experience that shaped careers.
                </p>
            </div>

            <div className="testi-grid">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className={`t-card anim-fade ${vis ? 'visible' : ''}`}
                        style={{ transitionDelay: `${150 + i * 120}ms` }}
                    >
                        <div className="t-quote-mark">"</div>
                        <div className="t-stars">★★★★★</div>
                        <p>{t.text}</p>
                        <div className="t-author">
                            <div className="t-avatar">{t.initials}</div>
                            <div>
                                <span className="t-name">{t.name}</span>
                                <span className="t-meta">{t.info}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
