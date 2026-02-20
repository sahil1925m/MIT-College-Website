import { useRef, useEffect, useState } from 'react';
import campus1 from '../assets/campus1.webp';
import campus2 from '../assets/campus2.webp';
import campus3 from '../assets/campus3.webp';
import campus4 from '../assets/campus4.webp';
import campus5 from '../assets/campus5.webp';

const tiles = [
    { src: campus1, label: 'Main Campus', cls: 'g-tile-1' },
    { src: campus2, label: 'Academic Block', cls: 'g-tile-2' },
    { src: campus3, label: 'Auditorium', cls: 'g-tile-3' },
    { src: campus4, label: 'Research Labs', cls: 'g-tile-4' },
    { src: campus5, label: 'Sports Complex', cls: 'g-tile-5' },
];

const Gallery = () => {
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
        <section className="section section-alt" id="gallery" ref={ref}>
            <div className={`gallery-top anim-fade ${vis ? 'visible' : ''}`}>
                <div className="section-chip">
                    <span className="chip-dot" />Campus Life
                </div>
                <h2 className="section-title">Our <span>Beautiful Campus</span></h2>
                <p className="section-sub" style={{ margin: '0.7rem auto 0', textAlign: 'center' }}>
                    Sprawling green lawns, modern architecture, and a vibrant community —
                    experience MIT Indore like never before.
                </p>
            </div>

            <div
                className={`gallery-bento anim-scale ${vis ? 'visible' : ''}`}
                style={{ transitionDelay: '150ms', marginTop: '2.5rem' }}
            >
                {tiles.map((t, i) => (
                    <div key={i} className={`g-tile ${t.cls}`}>
                        <img src={t.src} alt={t.label} />
                        <div className="g-overlay">
                            <div className="g-label">{t.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
