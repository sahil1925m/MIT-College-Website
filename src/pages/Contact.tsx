import MapEmbed from '../components/MapEmbed';
import EnquiryForm from '../components/EnquiryForm';

const Contact = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="section-chip"><span className="chip-dot"></span>Get in Touch</div>
                    <h1 className="section-title" style={{ marginBottom: '1rem' }}>Contact <span>MIT Indore</span></h1>
                    <p className="section-sub" style={{ margin: '0 auto' }}>
                        We'd love to hear from you. Visit our campus, call us, or send an enquiry below.
                    </p>
                </div>

                {/* Info & Map Grid */}
                <div className="contact-grid" style={{ gap: '3rem', marginBottom: '5rem' }}>

                    {/* Left: Contact Info */}
                    <div>
                        <div className="info-card">
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>Contact Details</h3>

                            <div className="contact-item">
                                <div className="c-icon">📍</div>
                                <div>
                                    <h5>Campus Address</h5>
                                    <p>Malwa Institute of Technology<br />Off Bypass Road, Indore (M.P.) - 452016</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="c-icon">📞</div>
                                <div>
                                    <h5>Phone Numbers</h5>
                                    <p>+91 731 2345678<br />+91 98765 43210 (Admission)</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="c-icon">✉️</div>
                                <div>
                                    <h5>Email Address</h5>
                                    <p>admissions@mitindore.com<br />info@mitindore.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="c-icon">⏰</div>
                                <div>
                                    <h5>Working Hours</h5>
                                    <p>Mon - Sat: 9:00 AM - 5:00 PM<br />Sun: Closed</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right: Map */}
                    <div style={{ minHeight: '450px' }}>
                        <MapEmbed />
                    </div>
                </div>

                {/* Full Enquiry Form */}
                <div style={{ background: '#f8fafc', padding: '4rem 5%', borderRadius: '24px' }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Send us a <span>Message</span></h2>
                        <EnquiryForm variant="full" />
                    </div>
                </div>

            </div>

            <style>{`
        .info-card {
          background: #fff;
          padding: 2.5rem;
          border-radius: 16px;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }
        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .contact-item:last-child { margin-bottom: 0; }
        .c-icon {
          width: 44px; height: 44px;
          background: rgba(198,40,40,0.1);
          color: var(--crimson);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .contact-item h5 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 0.3rem;
        }
        .contact-item p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
        }
        @media (max-width: 900px) {
          .info-card { padding: 1.5rem; }
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
};

export default Contact;
