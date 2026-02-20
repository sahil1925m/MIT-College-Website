import Programs from '../components/Programs';

const Academics = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            <div style={{ background: 'var(--navy)', color: '#fff', padding: '6rem 5% 4rem', textAlign: 'center' }}>
                <h1 className="section-title section-title-white" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Academic <span>Excellence</span></h1>
                <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                    Explore our diverse range of undergraduate and postgraduate programs designed to
                    equip you with future-ready skills.
                </p>
            </div>

            <Programs />

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
