const Research = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            <div style={{ background: 'var(--navy)', color: '#fff', padding: '6rem 5% 4rem', textAlign: 'center' }}>
                <h1 className="section-title section-title-white" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Research & <span>Innovation</span></h1>
                <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                    Pushing the boundaries of knowledge. Our faculty and students are actively involved in cutting-edge research.
                </p>
            </div>

            <div className="container" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 5%' }}>
                <div style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '2rem' }}>Focus <span>Areas</span></h2>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['Artificial Intelligence', 'Renewable Energy', 'IoT & Embedded Systems', 'Material Science', 'Data Analytics', 'Robotics'].map((tag, i) => (
                            <span key={i} style={{ background: 'rgba(198,40,40,0.08)', color: 'var(--crimson)', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: '600' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <h2 className="section-title" style={{ marginBottom: '2rem' }}>Recent <span>Publications</span></h2>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {[
                        { title: 'Machine Learning Approaches for Early Disease Detection', authors: 'Dr. A. Sharma, P. Verma', journal: 'International Journal of AI', year: '2025' },
                        { title: 'Optimization of Solar Cells using Nanomaterials', authors: 'Dr. R. Singh', journal: 'Journal of Renewable Energy', year: '2024' },
                        { title: 'Secure IoT Architecture for Smart Cities', authors: 'Prof. M. Gupta', journal: 'IEEE Transactions', year: '2024' }
                    ].map((pub, i) => (
                        <div key={i} style={{ padding: '1.5rem', borderLeft: '4px solid var(--crimson)', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.3rem' }}>{pub.title}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{pub.authors} • <span style={{ fontStyle: 'italic' }}>{pub.journal}, {pub.year}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Research;
