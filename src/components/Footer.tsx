import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import MapEmbed from './MapEmbed';

const footerLinks = [
    {
        title: "Quick Links",
        items: [
            { label: "About Us", href: "/about" },
            { label: "Academics", href: "/academics" },
            { label: "Admissions", href: "/admissions" },
            { label: "Placements", href: "/placements" },
            { label: "Student ERP", href: "http://mit.thecollegeerp.com/academic/stlogin.php", external: true },
            { label: "Faculty ERP", href: "http://mit.thecollegeerp.com/academic/facultylogin.php", external: true }
        ]
    },
    {
        title: "Campus",
        items: [
            { label: "Campus Life", href: "/campus" },
            { label: "Research", href: "/research" },
            { label: "Hostel Facility", href: "/campus" },
            { label: "Transport", href: "/campus" },
            { label: "Contact Us", href: "/contact" }
        ]
    }
];

const Footer = () => {
    return (
        <footer className="footer" style={{ background: '#050a14', color: '#fff', paddingTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 0.8fr 0.8fr 1.2fr', gap: '3rem', paddingBottom: '4rem' }}>

                {/* Brand Col */}
                <div className="footer-brand">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', textDecoration: 'none' }}>
                        <img src={logoImg} alt="MIT Logo" style={{ height: '48px', width: 'auto' }} />
                        <div style={{ lineHeight: 1.1 }}>
                            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#fff', letterSpacing: '-0.02em' }}>MIT Indore</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.6, fontWeight: 400 }}>Excellence since 2004</div>
                        </div>
                    </Link>
                    <p style={{ opacity: 0.6, lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem', maxWidth: '300px' }}>
                        A premier engineering institute dedicated to fostering innovation, research, and holistic development for the leaders of tomorrow.
                    </p>
                    <div className="footer-socials" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {[
                            {
                                href: 'https://www.facebook.com/malwainstitute/',
                                label: 'Facebook',
                                color: '#1877F2',
                                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
                            },
                            {
                                href: 'https://x.com/MIT_Indore',
                                label: 'X (Twitter)',
                                color: '#ffffff',
                                icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                            },
                            {
                                href: 'https://www.instagram.com/malwa_institute_of_technology/',
                                label: 'Instagram',
                                color: '#E1306C',
                                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" /></svg>,
                            },
                            {
                                href: 'https://www.youtube.com/@malwainstituteoftechnology6219',
                                label: 'YouTube',
                                color: '#FF0000',
                                icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></svg>,
                            },
                        ].map(({ href, label, color, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="footer-social-icon"
                                style={{ '--fs-color': color } as React.CSSProperties}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Cols */}
                {footerLinks.map((col, i) => (
                    <div key={i} className="footer-links">
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600, color: '#fff' }}>{col.title}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {col.items.map(l => (
                                <li key={l.label}>
                                    {l.external ? (
                                        <a href={l.href} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                            onMouseOver={(e) => e.currentTarget.style.color = 'var(--crimson)'}
                                            onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                        >
                                            {l.label} <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>↗</span>
                                        </a>
                                    ) : (
                                        <Link to={l.href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                                            onMouseOver={(e) => e.currentTarget.style.color = 'var(--crimson)'}
                                            onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                        >
                                            {l.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Mini Map Col */}
                <div className="footer-contact">
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600, color: '#fff' }}>Locate Us</h4>
                    <div style={{ height: '140px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <MapEmbed />
                    </div>
                    <p style={{ opacity: 0.6, fontSize: '0.9rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <span>📍</span> Off Bypass Road, Indore (M.P.) - 452016
                    </p>
                    <p style={{ opacity: 0.6, fontSize: '0.9rem', display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                        <span>📞</span> +91 731 2345678
                    </p>
                </div>

            </div>

            <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2rem 0', background: '#02050a' }}>
                <div className="container footer-bottom-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ opacity: 0.4, fontSize: '0.85rem' }}>© 2026 MIT Indore. All rights reserved.</p>
                    <div className="footer-bottom-links" style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none' }}>Terms of Use</a>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none' }}>Sitemap</a>
                    </div>
                </div>
            </div>

            <style>{`
            @media (max-width: 900px) {
                .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
            }
            @media (max-width: 600px) {
                .footer-grid { grid-template-columns: 1fr !important; }
                .footer-bottom-inner { flex-direction: column; text-align: center; }
            }
            .footer-social-icon {
                width: 38px;
                height: 38px;
                border-radius: 10px;
                background: rgba(255,255,255,0.07);
                border: 1px solid rgba(255,255,255,0.09);
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgba(255,255,255,0.55);
                text-decoration: none;
                transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
            }
            .footer-social-icon:hover {
                color: var(--fs-color, #fff);
                background: rgba(255,255,255,0.12);
                border-color: rgba(255,255,255,0.18);
                transform: translateY(-3px) scale(1.08);
            }
        `}</style>
        </footer>
    );
};

export default Footer;
