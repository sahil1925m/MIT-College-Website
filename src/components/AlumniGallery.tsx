import { useRef, useEffect, useState } from 'react';

// Dynamically import all images from the placement folder
const imageModules = import.meta.glob('../assets/Placement/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
const allImages = Object.values(imageModules) as string[];

// Shuffle helper
const shuffle = (array: string[]) => [...array].sort(() => Math.random() - 0.5);

const AlumniGallery = () => {
    const ref = useRef<HTMLElement>(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    if (allImages.length === 0) return null;

    // Split into 3 columns for variety
    const col1 = shuffle(allImages);
    const col2 = shuffle(allImages);
    const col3 = shuffle(allImages);

    return (
        <section className="section alumni-marquee-section" id="alumni-gallery" ref={ref} style={{
            overflow: 'hidden',
            backgroundColor: '#050a14', // Darker background for "Shining Stars"
            padding: 'clamp(3rem, 6vw, 6rem) 0'
        }}>
            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
                <div className={`alumni-header anim-fade ${vis ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 10 }}>
                    <div className="section-chip" style={{ justifyContent: 'center', marginBottom: '1rem', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                        <span className="chip-dot" style={{ background: '#fff' }} />OUR SUCCESS STORIES
                    </div>
                    <h2 className="section-title section-title-white">Shining <span>Stars</span> of MIT</h2>
                    <p className="section-sub section-sub-white" style={{ margin: '0.8rem auto 0', maxWidth: '700px' }}>
                        Witness the legacy of excellence. Our alumni are thriving in top-tier global organizations,
                        setting benchmarks and inspiring the next generation.
                    </p>
                </div>

                <div className="marquee-wrapper" style={{
                    position: 'relative',
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                }}>
                    {/* Column 1 - Up */}
                    <div className="marquee-col marquee-up">
                        <div className="marquee-content">
                            {[...col1, ...col1].map((src, i) => (
                                <div key={`c1-${i}`} className="marquee-card">
                                    <img src={src} alt="Alumni Success" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 - Down */}
                    <div className="marquee-col marquee-down">
                        <div className="marquee-content">
                            {[...col2, ...col2].map((src, i) => (
                                <div key={`c2-${i}`} className="marquee-card">
                                    <img src={src} alt="Alumni Success" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 3 - Up */}
                    <div className="marquee-col marquee-up slow">
                        <div className="marquee-content">
                            {[...col3, ...col3].map((src, i) => (
                                <div key={`c3-${i}`} className="marquee-card">
                                    <img src={src} alt="Alumni Success" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .marquee-wrapper {
                    perspective: 1000px;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    height: 700px;
                }
                .marquee-col {
                    height: 100%;
                    overflow: hidden;
                    position: relative;
                }
                .marquee-content {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .marquee-card {
                    width: 100%;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.1);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    transition: transform 0.3s ease, border-color 0.3s ease;
                }
                .marquee-card img {
                    width: 100%;
                    height: auto;
                    display: block;
                    filter: grayscale(20%);
                    transition: filter 0.3s ease;
                }
                .marquee-card:hover {
                    transform: scale(1.02);
                    border-color: var(--crimson, #C62828);
                }
                .marquee-card:hover img {
                    filter: grayscale(0%);
                }

                /* Animations */
                .marquee-up .marquee-content {
                    animation: scroll-up 60s linear infinite;
                }
                .marquee-up.slow .marquee-content {
                    animation-duration: 80s;
                }
                .marquee-down .marquee-content {
                    animation: scroll-down 70s linear infinite;
                }

                @keyframes scroll-up {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes scroll-down {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }

                @media (max-width: 768px) {
                    .marquee-wrapper {
                        grid-template-columns: repeat(2, 1fr);
                        height: 500px;
                        gap: 14px;
                    }
                    .marquee-col.slow {
                        display: none;
                    }
                    .marquee-content {
                        gap: 14px;
                    }
                }
                @media (max-width: 480px) {
                    .marquee-wrapper {
                        grid-template-columns: repeat(2, 1fr);
                        height: 400px;
                        gap: 10px;
                    }
                    .marquee-col.slow {
                        display: none;
                    }
                    .marquee-content {
                        gap: 10px;
                    }
                    .marquee-card {
                        border-radius: 8px;
                    }
                }
            `}} />
        </section>
    );
};

export default AlumniGallery;
