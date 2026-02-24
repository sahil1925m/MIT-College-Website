import { useRef, useEffect, useState } from 'react';
import campus1 from '../assets/campus1.webp';
import campus2 from '../assets/campus2.webp';
import campus3 from '../assets/campus3.webp';
import campus4 from '../assets/campus4.webp';
import campus5 from '../assets/campus5.webp';
import image3 from '../assets/image_3.jpg';
import image4 from '../assets/image_4.jpg';
import image5 from '../assets/image_5.jpg';
import image6 from '../assets/image_6.jpg';

const categories = ['All', 'Events', 'NCC', 'Campus', 'Sports', 'Competition'];

const galleryItems = [
    { src: campus1, label: 'Main Campus', category: 'Campus' },
    { src: image3, label: 'Annual Sports Meet', category: 'Sports' },
    { src: image4, label: 'NCC Parade', category: 'NCC' },
    { src: campus2, label: 'Academic Block', category: 'Campus' },
    { src: image5, label: 'Tech Fest 2024', category: 'Events' },
    { src: campus3, label: 'Auditorium', category: 'Campus' },
    { src: image6, label: 'Hackathon', category: 'Competition' },
    { src: campus4, label: 'Research Labs', category: 'Campus' },
    { src: campus5, label: 'Sports Complex', category: 'Sports' },
];

const Gallery = () => {
    const ref = useRef<HTMLElement>(null);
    const [vis, setVis] = useState(false);
    const [activeTab, setActiveTab] = useState('All');

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const filteredItems = activeTab === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeTab);

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

            <div className={`adm-tabs anim-fade ${vis ? 'visible' : ''}`} style={{ justifyContent: 'center', margin: '2rem 0 3rem' }}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`adm-tab ${activeTab === cat ? 'active' : ''}`}
                        onClick={() => setActiveTab(cat)}
                        style={{ '--tab-color': 'var(--crimson)' } as React.CSSProperties}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div
                className={`anim-scale ${vis ? 'visible' : ''}`}
                style={{
                    transitionDelay: '150ms',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    padding: '0 5%'
                }}
            >
                {filteredItems.map((t, i) => (
                    <div key={i} style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        aspectRatio: '4/3',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                        position: 'relative',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }} className="gallery-hover-item">
                        <img src={t.src} alt={t.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="gallery-img" />
                        <div style={{
                            position: 'absolute',
                            bottom: 0, left: 0, right: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                            padding: '2rem 1rem 1rem',
                            color: '#fff',
                            transform: 'translateY(100%)',
                            transition: 'transform 0.3s ease'
                        }} className="gallery-overlay">
                            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{t.label}</h4>
                            <span style={{ fontSize: '0.8rem', color: 'var(--crimson)', fontWeight: 'bold' }}>{t.category}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
