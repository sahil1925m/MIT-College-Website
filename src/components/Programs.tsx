import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../pages/departments/departmentData';

interface ProgramsProps {
    limit?: number;
}

const Programs = ({ limit }: ProgramsProps) => {
    const ref = useRef<HTMLElement>(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const displayDepartments = limit ? departments.slice(0, limit) : departments;

    return (
        <section className="section" id="programs" ref={ref}>
            <div className="programs-header">
                <div>
                    <div className="section-chip">
                        <span className="chip-dot" />Academic Programs
                    </div>
                    <h2 className="section-title">Our <span>Departments</span></h2>
                </div>
                {limit && <Link to="/departments" className="link-red">All Departments &#8594;</Link>}
            </div>

            <div className="programs-grid">
                {displayDepartments.map((dept, i) => (
                    <Link
                        key={dept.id}
                        to={`/departments/${dept.id}`}
                        className={`dept-card anim-fade ${vis ? 'visible' : ''}`}
                        style={{ transitionDelay: `${i * 90}ms` }}
                    >
                        <div className="dept-card-top" style={{ background: dept.gradient }}>
                            <div className="dept-card-icon"><dept.icon size={48} /></div>
                            <div className="dept-card-blob" />
                        </div>
                        <div className="dept-card-body">
                            <span className="dept-card-short">{dept.shortName}</span>
                            <h3 className="dept-card-name">{dept.name}</h3>
                            <p className="dept-card-hod">👤 HOD: {dept.hodName}</p>
                            <p className="dept-card-overview">
                                {dept.overview.substring(0, 110)}…
                            </p>
                            <div className="dept-card-footer">
                                <span className="dept-card-faculty">
                                    {dept.faculties.length} Faculty
                                </span>
                                <span className="dept-card-link" style={{ color: dept.color }}>
                                    Explore →
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            
            {limit && (
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link to="/departments" className="btn" style={{ padding: '0.8rem 2rem', background: 'var(--navy)', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: 600 }}>Explore More Programs</Link>
                </div>
            )}
        </section>
    );
};

export default Programs;
