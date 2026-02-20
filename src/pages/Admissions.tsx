import CallToAction from '../components/CallToAction';
import EnquiryForm from '../components/EnquiryForm';

const Admissions = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            <div style={{ background: 'var(--navy)', color: '#fff', padding: '6rem 5% 4rem', textAlign: 'center' }}>
                <h1 className="section-title section-title-white" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Admissions <span>2026</span></h1>
                <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                    Join the legacy of excellence. Applications are now open for B.Tech, M.Tech, and MBA programs.
                </p>
            </div>

            <div className="container admissions-grid-container">
                <div className="admissions-content">
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>Eligibility Criteria</h3>
                    <div style={{ marginBottom: '2rem' }}>
                        <h5 style={{ fontSize: '1.1rem', color: 'var(--crimson)', marginBottom: '0.5rem' }}>B.Tech</h5>
                        <p style={{ color: 'var(--text-muted)' }}>Passed 10+2 with Physics, Chemistry, and Mathematics (PCM). Qualified JEE Mains / State Level Engineering Entrance Exam.</p>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <h5 style={{ fontSize: '1.1rem', color: 'var(--crimson)', marginBottom: '0.5rem' }}>M.Tech</h5>
                        <p style={{ color: 'var(--text-muted)' }}>B.E. / B.Tech in relevant branch with valid GATE score.</p>
                    </div>

                    <h3 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '1.5rem', marginTop: '3rem' }}>Application Process</h3>
                    <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                        <li>Fill the online enquiry form.</li>
                        <li>Attend counseling session at campus or online.</li>
                        <li>Submit required documents for verification.</li>
                        <li>Complete fee payment to confirm seat.</li>
                    </ol>

                    <a href="/public/brochure.pdf" className="btn btn-outline" style={{ marginTop: '2rem' }} download>Download Brochure</a>
                </div>

                <div className="admissions-form-wrapper">
                    <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--navy)' }}>Apply Online</h3>
                    <EnquiryForm variant="full" />
                </div>
            </div>

            <CallToAction />
        </div>
    );
};

export default Admissions;
