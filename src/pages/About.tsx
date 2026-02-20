import About from '../components/About';
import Testimonials from '../components/Testimonials';

const AboutPage = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            {/* Hero-like header */}
            <div style={{ background: 'var(--navy)', color: '#fff', padding: '6rem 5% 4rem', textAlign: 'center' }}>
                <h1 className="section-title section-title-white" style={{ marginBottom: '1rem' }}>About <span>Us</span></h1>
                <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                    Since 2004, we have been committed to engineering excellence, fostering innovation,
                    and building leaders of tomorrow.
                </p>
            </div>

            <About />

            {/* Vision & Mission */}
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 5%' }}>
                <div className="p-6 md:p-10" style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--crimson)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Our Vision</h3>
                    <p style={{ lineHeight: 1.7, color: 'var(--text-muted)' }}>
                        To be a globally recognized institution of excellence in engineering education and research,
                        producing socially responsible and innovative professionals.
                    </p>
                </div>
                <div className="p-6 md:p-10" style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--crimson)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Our Mission</h3>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Provide state-of-the-art infrastructure for learning.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Foster industry-academia collaboration.</li>
                        <li>Inculcate ethical values and leadership qualities.</li>
                    </ul>
                </div>
            </div>

            <Testimonials />
        </div>
    );
};

export default AboutPage;
