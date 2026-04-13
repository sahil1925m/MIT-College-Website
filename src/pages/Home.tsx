import Hero from '../components/Hero';
import Programs from '../components/Programs';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import EnquiryForm from '../components/EnquiryForm';
import AlumniGallery from '../components/AlumniGallery';

import campus2 from '../assets/campus2.webp';

const Home = () => {
    return (
        <main>
            <Hero />
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
                <div className="enquiry-grid">
                    {/* Text & Form Side */}
                    <div className="enquiry-content">
                        <div className="section-chip"><span className="chip-dot"></span>Admissions 2026</div>
                        <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Your Future Starts <span style={{ color: 'var(--crimson)' }}>Here</span></h2>
                        <p className="section-sub" style={{ marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Join a community of innovators, leaders, and problem solvers.
                            Our industry-aligned curriculum ensures you are ready for the global workforce from day one.
                        </p>
                        <EnquiryForm variant="mini" />
                    </div>

                    {/* Image Side */}
                    <div className="enquiry-image-wrapper">
                        {/* Decorative Blob Background */}
                        <div className="blob-bg"></div>
                        <div className="dots-bg"></div>

                        <img src={campus2}
                            alt="MIT Indore Campus Life"
                            className="enquiry-img"
                        />
                        {/* Floating Badge (Removed) */}
                    </div>
                </div>
            </div>
            <Programs limit={6} />
            <WhyChooseUs />
            <Gallery />
            <AlumniGallery />
            <Testimonials />
            <CallToAction />
        </main>
    );
};

export default Home;
