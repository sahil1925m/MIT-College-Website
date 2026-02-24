import Programs from '../components/Programs';
import campus5 from '../assets/campus5.webp';

const Academics = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            <div style={{
                background: `linear-gradient(rgba(5, 10, 20, 0.8), rgba(5, 10, 20, 0.8)), url(${campus5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff', padding: '6rem 5% 4rem', textAlign: 'center'
            }}>
                <h1 className="section-title section-title-white" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Academic <span>Excellence</span></h1>
                <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                    Explore our diverse range of undergraduate and postgraduate programs designed to
                    equip you with future-ready skills.
                </p>
            </div>

            <Programs />

            {/* Featured Video */}
            <section className="section" style={{ padding: '4rem 5%', backgroundColor: 'var(--bg-light, #f8fafc)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="section-title" style={{ marginBottom: '2rem' }}>Experience <span>MIT</span></h2>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/lyUCDXrMgz0?si=gFv9PkL8n6StKvPH"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Curriculum Highlights */}
            <section className="section section-alt">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Study <span>Here?</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Project-Based Learning', text: 'Hands-on experience with real-world projects from semester one.' },
                            { title: 'Industry Curriculum', text: 'Syllabus updated regularly in consultation with industry experts.' },
                            { title: 'Research Focus', text: 'Encouraging students to publish papers and file patents.' },
                            { title: 'Soft Skills Training', text: 'Dedicated sessions for communication, leadership, and interview prep.' }
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>{item.title}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;
