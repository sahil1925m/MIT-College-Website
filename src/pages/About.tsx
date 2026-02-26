import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Testimonials from '../components/Testimonials';

const AboutPage = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            {/* Hero-like header */}
            <div style={{
                position: 'relative',
                background: 'var(--navy)',
                color: '#fff',
                padding: 'clamp(3rem, 6vw, 6rem) 5% clamp(2rem, 4vw, 4rem)',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'url(/src/assets/campus1.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: 0
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h1 className="section-title section-title-white" style={{ marginBottom: '1rem' }}>About <span>Us</span></h1>
                    <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                        Since 2004, we have been committed to engineering excellence, fostering innovation,
                        and building leaders of tomorrow.
                    </p>
                </div>
            </div>

            <About />

            <MissionVision />

            <Testimonials />
        </div>
    );
};

export default AboutPage;
