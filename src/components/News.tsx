import { useRef, useEffect, useState } from 'react';

const newsItems = [
    { category: 'Tech Fest', title: 'TechFest 2025 — Annual Technical Festival', desc: 'Three days of hackathons, robotics competitions, project exhibitions, and guest lectures from industry leaders.', date: 'March 14–16, 2025' },
    { category: 'Placement', title: 'Campus Placement Drive — TCS & Infosys', desc: 'On-campus recruitment for final year B.E. students. Pre-registration via placement portal open until Feb 20.', date: 'February 28, 2025' },
    { category: 'Campus', title: 'Green Campus Initiative — Tree Plantation Drive', desc: 'Join faculty, staff, and students in planting 500 trees across campus as part of MIT\'s sustainability pledge.', date: 'April 5, 2025' },
];

const News = () => {
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
        <section className="section section-alt" id="news" ref={ref}>
            <div className="news-header">
                <div>
                    <div className="section-chip">
                        <span className="chip-dot" />Stay Updated
                    </div>
                    <h2 className="section-title">News &amp; <span>Events</span></h2>
                </div>
                <a href="#" className="link-red">All Events &#8594;</a>
            </div>

            <div className="news-grid">
                {newsItems.map((item, i) => (
                    <div
                        key={i}
                        className={`n-card anim-fade ${vis ? 'visible' : ''}`}
                        style={{ transitionDelay: `${i * 120}ms` }}
                    >
                        <div className="n-card-accent" />
                        <div className="n-card-body">
                            <span className="n-tag">{item.category}</span>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                            <div className="n-date">📅 {item.date}</div>
                        </div>
                        <div className="n-card-footer">
                            <a href="#" className="n-read-more">Read More &#8594;</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default News;
