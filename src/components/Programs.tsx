import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const programs = [
    { icon: '💻', title: 'Computer Science and Engineering', desc: 'AI, Machine Learning, Cloud Computing, Cybersecurity, and full-stack development with cutting-edge lab facilities.', degrees: 'B.E. / M.Tech / Ph.D' },
    { icon: '🌐', title: 'Information Technology', desc: 'Software Engineering, Database Management, Network Security, and Web Technologies for the digital age.', degrees: 'B.E.' },
    { icon: '🤖', title: 'Artificial Intelligence/Machine Learning', desc: 'Deep Learning, Data Science, Natural Language Processing, and advanced algorithms for future tech.', degrees: 'B.E.' },
    { icon: '📱', title: 'Electronics and Communication', desc: 'IoT, VLSI, Signal Processing, Wireless Communication, and next-gen Antenna Design laboratories.', degrees: 'B.E. / M.Tech' },
    { icon: '⚡', title: 'Electrical and Electronics', desc: 'Power Systems, Control Engineering, Embedded Systems, VLSI Design, and Renewable Energy technologies.', degrees: 'B.E. / M.Tech' },
    { icon: '⚙️', title: 'Mechanical Engineering', desc: 'Robotics, Manufacturing, CAD/CAM, Thermodynamics, and Automotive Design with industry-standard workshops.', degrees: 'B.E. / M.Tech' },
    { icon: '🚘', title: 'Automobile Engineering', desc: 'Vehicle Dynamics, Electric Vehicles, Engine Design, and Automotive Electronics for modern transportation.', degrees: 'B.E.' },
    { icon: '🏗️', title: 'Civil Engineering', desc: 'Structural Analysis, Environmental Engineering, Smart Urban Planning, and Construction Management.', degrees: 'B.E. / M.Tech' },
    { icon: '🧪', title: 'Applied Sciences and Humanities', desc: 'Foundational courses in Mathematics, Physics, Chemistry, and Communication Skills for engineering.', degrees: 'First Year' },
    { icon: '🏫', title: 'MBA', desc: 'Finance, Marketing, HR, Operations, and Technology Management with industry exposure and placements.', degrees: 'MBA (2 Years)' },
];

const Programs = () => {
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
        <section className="section" id="programs" ref={ref}>
            <div className="programs-header">
                <div>
                    <div className="section-chip">
                        <span className="chip-dot" />Academic Programs
                    </div>
                    <h2 className="section-title">Our <span>Departments</span></h2>
                </div>
                <Link to="/academics" className="link-red">All Departments &#8594;</Link>
            </div>

            <div className="programs-grid">
                {programs.map((p, i) => (
                    <div
                        key={i}
                        className={`prog-card anim-fade ${vis ? 'visible' : ''}`}
                        style={{ transitionDelay: `${i * 90}ms` }}
                    >
                        <div className="prog-card-top" />
                        <div className="prog-card-body">
                            <div className="prog-icon">{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>
                        <div className="prog-card-footer">
                            <span className="prog-degree">{p.degrees}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Programs;
