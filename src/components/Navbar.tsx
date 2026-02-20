import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const links = [
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Placements', href: '/placements' },
    { label: 'Campus Life', href: '/campus' },
    { label: 'Research', href: '/research' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
                {/* Logo */}
                <NavLink to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
                    <img
                        src={logoImg}
                        alt="MIT Indore Logo"
                        style={{ height: '44px', width: 'auto' }}
                    />
                </NavLink>

                {/* Desktop links */}
                <div className="nav-links">
                    {links.map(l => (
                        <NavLink
                            key={l.label}
                            to={l.href}
                            className={({ isActive }) => isActive ? "active-link" : ""}
                        >
                            {l.label}
                        </NavLink>
                    ))}

                    {/* Portal Dropdown */}
                    <div className="nav-dropdown" style={{ position: 'relative', marginLeft: '0.5rem' }}>
                        <button className="nav-drop-btn" style={{
                            background: 'transparent', border: 'none', fontSize: '1rem', fontWeight: 500,
                            color: 'var(--navy)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem'
                        }}>
                            Portal ▾
                        </button>
                        <div className="nav-drop-content">
                            <a href="http://mit.thecollegeerp.com/academic/stlogin.php" target="_blank" rel="noopener noreferrer">
                                <span>👨‍🎓</span> Student ERP
                            </a>
                            <a href="http://mit.thecollegeerp.com/academic/facultylogin.php" target="_blank" rel="noopener noreferrer">
                                <span>👨‍🏫</span> Faculty ERP
                            </a>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="nav-cta">
                    <NavLink to="/admissions" className="btn btn-primary">Apply Now</NavLink>

                    {/* Hamburger */}
                    <div
                        className={`hamburger ${mobileOpen ? 'open' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                {links.map(l => (
                    <NavLink
                        key={l.label}
                        to={l.href}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) => isActive ? "active-link" : ""}
                    >
                        {l.label}
                    </NavLink>
                ))}

                {/* Mobile Portal Links */}
                <div style={{ padding: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '0.5rem' }}>
                    <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem', fontWeight: 700 }}>Portals</p>
                    <a href="http://mit.thecollegeerp.com/academic/stlogin.php" target="_blank" rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--navy)', textDecoration: 'none', marginBottom: '1rem', fontWeight: 500 }}>
                        <span style={{ background: 'rgba(198,40,40,0.1)', width: '32px', height: '32px', borderRadius: '8px', display: 'grid', placeItems: 'center' }}>👨‍🎓</span>
                        Student ERP
                    </a>
                    <a href="http://mit.thecollegeerp.com/academic/facultylogin.php" target="_blank" rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--navy)', textDecoration: 'none', fontWeight: 500 }}>
                        <span style={{ background: 'rgba(5,10,20,0.05)', width: '32px', height: '32px', borderRadius: '8px', display: 'grid', placeItems: 'center' }}>👨‍🏫</span>
                        Faculty ERP
                    </a>
                </div>

                <div style={{ padding: '0 1rem' }}>
                    <NavLink to="/admissions" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
                        Apply Now
                    </NavLink>
                </div>
            </div>

            <style>{`
                .active-link { color: var(--navy) !important; font-weight: 700 !important; }
                .active-link::after { transform: scaleX(1) !important; }
                .mobile-nav .active-link { color: var(--crimson) !important; background: rgba(198,40,40,0.05); }
                
                /* Dropdown Styles */
                .nav-dropdown:hover .nav-drop-content {
                    opacity: 1;
                    transform: translateY(0);
                    visibility: visible;
                }
                .nav-drop-content {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    background: #fff;
                    min-width: 200px;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    padding: 0.5rem;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(10px);
                    transition: all 0.2s ease;
                    border: 1px solid rgba(0,0,0,0.05);
                }
                .nav-drop-content a {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    padding: 0.8rem 1rem;
                    text-decoration: none;
                    color: var(--navy);
                    font-size: 0.9rem;
                    font-weight: 500;
                    border-radius: 8px;
                    transition: background 0.2s;
                }
                .nav-drop-content a:hover {
                    background: rgba(198,40,40,0.05);
                    color: var(--crimson);
                }
            `}</style>
        </>
    );
};

export default Navbar;
