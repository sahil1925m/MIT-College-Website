import { useState } from 'react';
import campus1 from '../assets/campus1.webp';
import campus2 from '../assets/campus2.webp';
import campus3 from '../assets/campus3.webp';
import campus4 from '../assets/campus4.webp';
import campus5 from '../assets/campus5.webp';
import image3 from '../assets/image_3.jpg';
import image4 from '../assets/image_4.jpg';
import image5 from '../assets/image_5.jpg';
import image6 from '../assets/image_6.jpg';
import './CategoryGallery.css'; // We'll create this CSS file next

const categories = ['All', 'Events', 'NCC', 'Campus', 'Sports', 'Competition'];

const galleryItems = [
    { id: 1, src: campus1, category: 'Campus', title: 'Main Building' },
    { id: 2, src: image3, category: 'Events', title: 'Annual Tech Fest' },
    { id: 3, src: campus2, category: 'Campus', title: 'Lush Green Campus' },
    { id: 4, src: image4, category: 'Sports', title: 'Annual Sports Meet' },
    { id: 5, src: campus3, category: 'Events', title: 'Cultural Night' },
    { id: 6, src: image5, category: 'NCC', title: 'NCC Parade' },
    { id: 7, src: campus4, category: 'Campus', title: 'Advanced Laboratories' },
    { id: 8, src: image6, category: 'Competition', title: 'Hackathon Winners' },
    { id: 9, src: campus5, category: 'Sports', title: 'Basketball Tournament' },
];

const CategoryGallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <section className="cat-gallery-section" style={{ padding: '6rem 5%' }}>
            <div className="container">
                <div className="section-chip" style={{ justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <span className="chip-dot"></span>Memories
                </div>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    Life at <span>MIT Indore</span>
                </h2>

                <div className="cat-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="cat-grid">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="cat-item">
                            <div className="cat-img-wrapper">
                                <img src={item.src} alt={item.title} className="cat-img" loading="lazy" />
                                <div className="cat-overlay">
                                    <div className="cat-overlay-content">
                                        <span className="cat-badge">{item.category}</span>
                                        <h3 className="cat-title">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGallery;
