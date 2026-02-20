import News from '../components/News';

const NewsPage = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            <div style={{ background: 'var(--navy)', color: '#fff', padding: '6rem 5% 4rem', textAlign: 'center' }}>
                <h1 className="section-title section-title-white" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>News & <span>Notices</span></h1>
                <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                    Stay updated with the latest happenings, events, and official announcements from MIT Indore.
                </p>
            </div>

            <News />

            {/* Notices Board */}
            <div className="container" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 5%' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Official <span>Notices</span></h2>
                <div style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: '12px', overflow: 'hidden' }}>
                    {[
                        { date: 'Feb 18, 2026', text: 'Mid-Sem Exam Schedule Released for B.Tech IV Sem' },
                        { date: 'Feb 15, 2026', text: 'Last Date for Scholarship Application Extended' },
                        { date: 'Feb 10, 2026', text: 'Holiday on account of Mahashivratri' },
                        { date: 'Feb 05, 2026', text: 'Registration open for Annual Sports Meet 2026' }
                    ].map((notice, i) => (
                        <div key={i} style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-light)', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <div style={{ minWidth: '100px', color: 'var(--crimson)', fontWeight: '700', fontSize: '0.9rem' }}>{notice.date}</div>
                            <div style={{ color: 'var(--navy)', fontWeight: '500' }}>{notice.text}</div>
                            <a href="#" style={{ marginLeft: 'auto', fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'underline' }}>View PDF</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
