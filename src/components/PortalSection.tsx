

const PortalSection = () => {
    return (
        <section className="portal-section">
            <div className="container">
                <div className="portal-header">
                    <h2 className="section-title">Student & Faculty <span style={{ color: 'var(--crimson)' }}>Portal</span></h2>
                    <p className="section-sub">Access your academic dashboard, attendance, and resources on the go.</p>
                </div>

                <div className="portal-grid">
                    {/* Student Card */}
                    <div className="portal-card student-card">
                        <div className="portal-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6" /><path d="M20 10V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" /><path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" /><path d="M12 2v6" /><circle cx="12" cy="13" r="2" /></svg>
                        </div>
                        <h3>Student ERP</h3>
                        <p>Manage your profile, view attendance, check results, and access study materials.</p>
                        <a href="http://mit.thecollegeerp.com/academic/stlogin.php" target="_blank" rel="noopener noreferrer" className="btn btn-primary portal-btn">
                            Login as Student
                        </a>
                    </div>

                    {/* Faculty Card */}
                    <div className="portal-card faculty-card">
                        <div className="portal-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                        </div>
                        <h3>Faculty ERP</h3>
                        <p>Update attendance, manage grades, upload notes, and track student progress.</p>
                        <a href="http://mit.thecollegeerp.com/academic/facultylogin.php" target="_blank" rel="noopener noreferrer" className="btn btn-outline portal-btn">
                            Login as Faculty
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .portal-section {
                    padding: 6rem 0;
                    background: #f8fafc;
                }
                .portal-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .portal-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .portal-card {
                    background: #fff;
                    padding: 3rem 2.5rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.06);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid rgba(0,0,0,0.05);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .portal-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
                }
                .portal-icon {
                    width: 64px;
                    height: 64px;
                    background: rgba(198, 40, 40, 0.1);
                    color: var(--crimson);
                    border-radius: 16px;
                    display: grid;
                    place-items: center;
                    margin-bottom: 1.5rem;
                }
                .faculty-card .portal-icon {
                    background: rgba(5, 10, 20, 0.05);
                    color: var(--navy);
                }
                .portal-card h3 {
                    font-size: 1.5rem;
                    color: var(--navy);
                    margin-bottom: 0.8rem;
                    font-weight: 700;
                }
                .portal-card p {
                    color: var(--text-muted);
                    font-size: 1rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    flex-grow: 1;
                }
                .portal-btn {
                    width: 100%;
                    text-align: center;
                    justify-content: center;
                }
                
                @media (max-width: 768px) {
                    .portal-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default PortalSection;
