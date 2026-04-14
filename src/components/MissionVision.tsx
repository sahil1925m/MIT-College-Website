import { useRef, useEffect, useState } from 'react';
import { Target, Landmark } from 'lucide-react';
import campusImg from '../assets/campus1.webp';

const missionPoints = [
    'Imbibe leadership qualities which will guide and direct are students to effective accomplishment of their goals and objectives throughout their lives.',
    'Foster the attitude of outstanding service and satisfaction.',
    'Continuously refine our vision to leverage human, technical and financial resources effectively to achieve strategic goals.',
    'Instill an atmosphere of professional and technical excellence, capitalizing diversity.',
    'Promote a commitment to outstanding performance, quality, innovation and pursuit of excellence.',
    "Maintain a 'people-come-first environment' where students, faculty and staff all are integral components.",
];

const MissionVision = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="mv-section" ref={sectionRef}>
            {/* Background decorative elements */}
            <div className="mv-bg-pattern" />
            <div className="mv-bg-glow" />

            <div className="mv-container">
                {/* Left — Content */}
                <div className={`mv-content ${visible ? 'mv-visible' : ''}`}>
                    <div className="mv-chip">
                        <span className="mv-chip-icon"><Target size={16} /></span>
                        Our Mission & Vision
                    </div>

                    <h2 className="mv-title">
                        Building <span>Nation Builders</span>
                    </h2>

                    <div className="mv-intro-card">
                        <div className="mv-intro-accent" />
                        <p className="mv-intro-text">
                            Malwa Institute of Technology is committed to provide value based quality technical
                            education to the youth of India, leading to the creation of Nation Builders armed with the
                            tools for dedicated service, growth and career enhancement.
                        </p>
                    </div>

                    <p className="mv-driving-force">
                        Our multi-faced mission is our driving force. We will:-
                    </p>

                    <ul className="mv-list">
                        {missionPoints.map((point, index) => (
                            <li
                                key={index}
                                className={`mv-list-item ${visible ? 'mv-visible' : ''}`}
                                style={{ transitionDelay: `${300 + index * 120}ms` }}
                            >
                                <span className="mv-list-marker">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                <span className="mv-list-text">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right — Image */}
                <div className={`mv-image-side ${visible ? 'mv-visible' : ''}`}>
                    <div className="mv-image-wrapper">
                        <img src={campusImg} alt="MIT Indore Campus" className="mv-image" />
                        <div className="mv-image-overlay" />
                        {/* Decorative floating badge */}
                        <div className="mv-float-badge">
                            <span className="mv-float-badge-icon"><Landmark size={20} /></span>
                            <div>
                                <div className="mv-float-badge-title">Since 2004</div>
                                <div className="mv-float-badge-sub">Excellence in Education</div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative corner element */}
                    <div className="mv-corner-accent" />
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
