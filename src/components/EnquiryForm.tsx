import React, { useState } from 'react';

interface EnquiryFormProps {
    variant?: 'full' | 'mini';
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ variant = 'full' }) => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className={`enquiry-success ${variant === 'mini' ? 'mini-success' : ''}`} style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Thank You!</h3>
                <p style={{ color: 'var(--text-muted)' }}>We have received your enquiry. Our admissions team will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '1.5rem' }}>Send Another</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`enquiry-form ${variant === 'mini' ? 'enquiry-mini' : 'enquiry-full'}`}>
            {variant === 'mini' ? (
                <div className="mini-form-grid" style={{
                    background: 'var(--white)',
                    padding: '2.5rem',
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    border: '1px solid var(--border-light)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{ color: 'var(--navy)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Have Questions? Let’s Help You.</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Request a callback from our counsellors.</p>
                    </div>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <input type="text" placeholder="Full Name" required className="form-input" />
                        <input type="tel" placeholder="Phone Number" required className="form-input" />
                        <select className="form-input" required defaultValue="">
                            <option value="" disabled>Select Course Interest</option>
                            <option>B.Tech CSE</option>
                            <option>B.Tech ME</option>
                            <option>B.Tech CE</option>
                            <option>B.Tech EC</option>
                            <option>MBA</option>
                        </select>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                            {loading ? 'Sending...' : 'Request Callback'}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="full-form-grid" style={{ display: 'grid', gap: '1.5rem' }}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Full Name *</label>
                            <input type="text" placeholder="John Doe" required className="form-input-full" />
                        </div>
                        <div className="form-group">
                            <label>Email Address *</label>
                            <input type="email" placeholder="john@example.com" required className="form-input-full" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Phone Number *</label>
                            <input type="tel" placeholder="+91 98765 43210" required className="form-input-full" />
                        </div>
                        <div className="form-group">
                            <label>Interested Course *</label>
                            <select className="form-input-full" required defaultValue="">
                                <option value="" disabled>Select Program</option>
                                <option>B.Tech Computer Science</option>
                                <option>B.Tech Mechanical</option>
                                <option>B.Tech Civil</option>
                                <option>B.Tech Electronics & Comm.</option>
                                <option>M.Tech</option>
                                <option>MBA</option>
                                <option>PhD</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Your Message / Query</label>
                        <textarea rows={5} placeholder="How can we help you?" className="form-input-full"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }} disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                </div>
            )}

            <style>{`
                .form-input {
                    padding: 0.85rem 1rem;
                    border: 1px solid var(--border-light);
                    border-radius: 8px;
                    font-size: 0.95rem;
                    width: 100%;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .form-input:focus { border-color: var(--crimson); }
                
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                    color: var(--navy);
                    font-size: 0.9rem;
                }
                .form-input-full {
                    padding: 1rem;
                    border: 1px solid rgba(0,0,0,0.1);
                    border-radius: 8px;
                    width: 100%;
                    font-size: 1rem;
                    background: #f8fafc;
                    outline: none;
                    transition: all 0.2s;
                }
                .form-input-full:focus {
                    background: #fff;
                    border-color: var(--crimson);
                    box-shadow: 0 0 0 3px rgba(198,40,40,0.1);
                }
            `}</style>
        </form>
    );
};

export default EnquiryForm;
