import { useRef, useEffect, useState } from 'react';
import aboutImg from '../assets/image_3.jpg';

const features = [
    { icon: '🏆', text: '25+ Years of Academic Leadership' },
    { icon: '👨‍🏫', text: 'Expert PhD Faculty from IITs & NITs' },
    { icon: '🔬', text: 'State-of-the-Art Labs & Infrastructure' },
    { icon: '🌍', text: 'International Collaborations & MoUs' },
];

const About = () => {
    const ref = useRef<HTMLElement>(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.15 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="section section-alt" id="about" ref={ref}>
            <div className="about-layout">
                {/* Image side */}
                <div className={`about-image-side anim-left ${vis ? 'visible' : ''}`}>
                    <div className="about-img-frame">
                        <img src={aboutImg} alt="MIT Indore Campus" />
                        <div className="about-img-overlay" />
                    </div>
                    <div className="about-badge">
                        <div className="about-badge-num">25+</div>
                        <div className="about-badge-text">Years of Excellence</div>
                    </div>
                    <div className="about-corner" />
                </div>

                {/* Text side */}
                <div className={`about-text-side anim-right ${vis ? 'visible' : ''}`}>
                    <div className="section-chip">
                        <span className="chip-dot" />
                        About MIT Indore
                    </div>
                    <h2 className="section-title">
                        A Legacy Built on <span>Excellence</span>
                    </h2>
                    <p className="section-sub">
                        Established in 2004, Malwa Institute of Technology, Indore has been shaping the
                        engineering leaders of tomorrow. Affiliated to RGPV Bhopal and DAVV Indore, we blend
                        rigorous academics with real-world industrial exposure to produce future-ready graduates.
                    </p>

                    <ul className="about-list">
                        {features.map((f, i) => (
                            <li
                                key={i}
                                className={`about-list-item anim-fade ${vis ? 'visible' : ''}`}
                                style={{ transitionDelay: `${200 + i * 100}ms` }}
                            >
                                <span className="about-list-icon">{f.icon}</span>
                                <span className="about-list-text">{f.text}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#"
                        className="btn btn-outline"
                        style={{ marginTop: '2rem' }}
                    >
                        Our Story &#8594;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
