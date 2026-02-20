import React, { useRef, useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';

const features = [
    {
        icon: "🏆",
        title: "Exceptional Placement Record",
        desc: "Fortune 500 partnerships with TCS, Infosys, Wipro, L&T, and 200+ companies."
    },
    {
        icon: "🔬",
        title: "State-of-the-Art Laboratories",
        desc: "40+ specialized labs equipped with the latest AI/ML systems, robotics, and IoT kits."
    },
    {
        icon: "👨‍🏫",
        title: "Distinguished Faculty",
        desc: "200+ PhD holders and industry veterans dedicated to mentoring with personalized guidance."
    }
];

const Video: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="section section-alt">
            <div className="why-grid">
                <div className={`reveal-left ${isVisible ? 'active' : ''}`}>
                    <div className="section-tag">Why Choose MIT</div>
                    <h2 className="s-title">Built for the<br /><span>Future of Engineering</span></h2>
                    <p className="s-sub" style={{ marginTop: '.9rem' }}>
                        We combine rigorous academics with real-world exposure, giving students the competitive edge they need to excel in a rapidly evolving global industry.
                    </p>
                    <div className="feat-list">
                        {features.map((feat, index) => (
                            <div
                                key={index}
                                className={`feat-item reveal ${isVisible ? 'active' : ''}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="feat-icon">{feat.icon}</div>
                                <div>
                                    <h4>{feat.title}</h4>
                                    <p>{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`why-image reveal-right ${isVisible ? 'active' : ''}`}>
                    <VideoPlayer
                        src="https://www.youtube.com/embed/kL8IpxB5v8s"
                        title="MIT Indore Campus Highlights"
                        autoplay={true}
                        muted={true}
                        loop={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default Video;
