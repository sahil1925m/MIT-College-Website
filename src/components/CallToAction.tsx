import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    const ref = useRef<HTMLElement>(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.2 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="cta-section" ref={ref}>
            <div className="cta-mesh" />
            <div className="cta-glow" />
            <div className={`cta-inner anim-fade ${vis ? 'visible' : ''}`}>
                <div className="section-chip" style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}>
                    <span className="chip-dot" />Admissions Open
                </div>
                <h2>Begin Your Engineering Journey at MIT Indore</h2>
                <p>
                    Join 10,000+ alumni shaping the world. Limited seats available for
                    Batch 2025–26. Apply now and secure your future.
                </p>
                <div className="cta-actions">
                    <Link to="/admissions" className="btn btn-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        Apply Now <ArrowRight size={18} />
                    </Link>
                    <Link to="/academics" className="btn btn-ghost">View Programs</Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
