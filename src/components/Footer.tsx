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
        <footer className="footer" id="footer">
            <div className="footer-main">

                {/* Brand Col */}
                <div className="footer-brand">
                    <Link to="/" className="footer-brand-logo">
                        <img src={logoImg} alt="MIT Logo" className="footer-logo-mark" />
                        <div>
                            <div className="footer-brand-name">MIT Indore</div>
                            <div className="footer-brand-sub">Excellence since 2004</div>
                        </div>
                    </Link>
                    <p>
                        A premier engineering institute dedicated to fostering innovation, research, and holistic development for the leaders of tomorrow.
                    </p>
                    <div className="footer-socials">
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
                                className="footer-social-btn"
                                style={{ '--fs-color': color } as React.CSSProperties}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Cols */}
                {footerLinks.map((col, i) => (
                    <div key={i} className="footer-col">
                        <h4 className="footer-col-title">{col.title}</h4>
                        <ul className="footer-links-list">
                            {col.items.map(l => (
                                <li key={l.label}>
                                    {l.external ? (
                                        <a href={l.href} target="_blank" rel="noopener noreferrer">
                                            {l.label} <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>↗</span>
                                        </a>
                                    ) : (
                                        <Link to={l.href}>
                                            {l.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Mini Map Col */}
                <div className="footer-col footer-contact">
                    <h4 className="footer-col-title">Locate Us</h4>
                    <div className="footer-map-wrap">
                        <MapEmbed />
                    </div>
                    <div className="footer-contact-item">
                        <span>📍</span> Off Bypass Road, Indore (M.P.) - 452016
                    </div>
                    <div className="footer-contact-item">
                        <span>📞</span> +91 731 2345678
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <p>© 2026 MIT Indore. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms of Use</Link>
                        <Link to="/">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
