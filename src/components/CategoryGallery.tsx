import { useState, useEffect } from 'react';
import campus1 from '../assets/campus1.webp';
import campus2 from '../assets/campus2.webp';
import campus3 from '../assets/campus3.webp';
import campus4 from '../assets/campus4.webp';
import campus5 from '../assets/campus5.webp';
import image3 from '../assets/image_3.jpg';
import image4 from '../assets/image_4.jpg';
import image5 from '../assets/image_5.jpg';
import image6 from '../assets/image_6.jpg';
import './CategoryGallery.css';

const categories = ['All', 'Events', 'NCC', 'Campus', 'Sports', 'Competition'];

// Added a size property to help with the bento layout
const galleryItems = [
    { id: 1, src: campus1, category: 'Campus', title: 'Main Building', size: 'large' },
    { id: 2, src: image3, category: 'Events', title: 'Annual Tech Fest', size: 'small' },
    { id: 3, src: campus2, category: 'Campus', title: 'Lush Green Campus', size: 'tall' },
    { id: 4, src: image4, category: 'Sports', title: 'Annual Sports Meet', size: 'wide' },
    { id: 5, src: campus3, category: 'Events', title: 'Cultural Night', size: 'small' },
    { id: 6, src: image5, category: 'NCC', title: 'NCC Parade', size: 'tall' },
    { id: 7, src: campus4, category: 'Campus', title: 'Advanced Laboratories', size: 'wide' },
    { id: 8, src: image6, category: 'Competition', title: 'Hackathon Winners', size: 'small' },
    { id: 9, src: campus5, category: 'Sports', title: 'Basketball Tournament', size: 'large' },
];

const CategoryGallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    // Prevent scrolling when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    // Handle escape key to close lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

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

                <div className="cat-bento-grid">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`cat-item bento-${item.size}`}
                            style={{ animationDelay: `${index * 0.05}s` }}
                            onClick={() => setSelectedImage(item)}
                        >
                            <div className="cat-img-wrapper">
                                <img src={item.src} alt={item.title} className="cat-img" loading="lazy" />
                                <div className="cat-overlay">
                                    <div className="cat-overlay-content">
                                        <span className="cat-badge">{item.category}</span>
                                        <h3 className="cat-title">{item.title}</h3>
                                    </div>
                                    <div className="cat-expand-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <polyline points="9 21 3 21 3 15"></polyline>
                                            <line x1="21" y1="3" x2="14" y2="10"></line>
                                            <line x1="3" y1="21" x2="10" y2="14"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal for full screen viewing */}
            {selectedImage && (
                <div className="cat-lightbox active" onClick={() => setSelectedImage(null)}>
                    <button className="cat-lightbox-close" onClick={() => setSelectedImage(null)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <div className="cat-lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.title} className="cat-lightbox-img" />
                        <div className="cat-lightbox-info">
                            <span className="cat-badge">{selectedImage.category}</span>
                            <h3 className="cat-title">{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CategoryGallery;
