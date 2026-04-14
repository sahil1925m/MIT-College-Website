import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GraduationCap, Users, ChevronDown, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { departments } from '../pages/departments/departmentData';

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Placements', href: '/placements' },
    { label: 'Campus Life', href: '/campus' },
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

                    {/* Departments Dropdown */}
                    <div className="nav-dropdown" style={{ position: 'relative' }}>
                        <NavLink
                            to="/departments"
                            className={({ isActive }) => `nav-drop-btn-link${isActive ? ' active-link' : ''}`}
                        >
                            Departments <ChevronDown size={14} />
                        </NavLink>
                        <div className="nav-drop-content nav-dept-drop">
                            <div className="nav-dept-grid">
                                {departments.map(d => (
                                    <NavLink
                                        key={d.id}
                                        to={`/departments/${d.id}`}
                                        className="nav-dept-item"
                                    >
                                        <span className="nav-dept-icon"><d.icon size={16} /></span>
                                        <span className="nav-dept-name">{d.shortName}</span>
                                    </NavLink>
                                ))}
                            </div>
                            <div className="nav-dept-footer">
                                <NavLink to="/departments" className="nav-dept-all" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                                    View All Departments <ArrowRight size={14} />
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Portal Dropdown */}
                    <div className="nav-dropdown" style={{ position: 'relative', marginLeft: '0.5rem' }}>
                        <button className="nav-drop-btn" style={{
                            background: 'transparent', border: 'none', fontSize: '1rem', fontWeight: 500,
                            color: 'var(--navy)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem'
                        }}>
                            Portal <ChevronDown size={14} />
                        </button>
                        <div className="nav-drop-content">
                            <a href="http://mit.thecollegeerp.com/academic/stlogin.php" target="_blank" rel="noopener noreferrer">
                                <span style={{ background: 'rgba(5,10,20,0.05)', width: '32px', height: '32px', borderRadius: '8px', display: 'grid', placeItems: 'center' }}><GraduationCap size={16} color="var(--navy)" /></span> Student ERP
                            </a>
                            <a href="http://mit.thecollegeerp.com/academic/facultylogin.php" target="_blank" rel="noopener noreferrer">
                                <span style={{ background: 'rgba(5,10,20,0.05)', width: '32px', height: '32px', borderRadius: '8px', display: 'grid', placeItems: 'center' }}><Users size={16} color="var(--navy)" /></span> Faculty ERP
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

                {/* Mobile Departments Links */}
                <div style={{ padding: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '0.5rem' }}>
                    <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem', fontWeight: 700 }}>Departments</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        {departments.map(d => (
                            <NavLink
                                key={d.id}
                                to={`/departments/${d.id}`}
                                onClick={() => setMobileOpen(false)}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--navy)', textDecoration: 'none', fontWeight: 500, fontSize: '0.85rem', padding: '0.4rem 0' }}
                            >
                                <span><d.icon size={16} /></span> {d.shortName}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Mobile Portal Links */}
                <div style={{ padding: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '0.5rem' }}>
                    <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem', fontWeight: 700 }}>Portals</p>
                    <a href="http://mit.thecollegeerp.com/academic/stlogin.php" target="_blank" rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--navy)', textDecoration: 'none', marginBottom: '1rem', fontWeight: 500 }}>
                        <span style={{ background: 'rgba(5,10,20,0.05)', width: '32px', height: '32px', borderRadius: '8px', display: 'grid', placeItems: 'center' }}><GraduationCap size={16} color="var(--navy)" /></span>
                        Student ERP
                    </a>
                    <a href="http://mit.thecollegeerp.com/academic/facultylogin.php" target="_blank" rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--navy)', textDecoration: 'none', fontWeight: 500 }}>
                        <span style={{ background: 'rgba(5,10,20,0.05)', width: '32px', height: '32px', borderRadius: '8px', display: 'grid', placeItems: 'center' }}><Users size={16} color="var(--navy)" /></span>
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
                .mobile-nav .active-link { color: var(--crimson) !important; font-weight: 700; background: transparent; }
                
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
                    z-index: 999;
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

                /* Departments Dropdown Link */
                .nav-drop-btn-link {
                    background: transparent;
                    border: none;
                    font-size: 1rem;
                    font-weight: 500;
                    color: var(--navy);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    text-decoration: none;
                    padding: 0.25rem 0;
                    position: relative;
                }
                .nav-drop-btn-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--crimson);
                    transform: scaleX(0);
                    transition: transform 0.3s;
                }
                .nav-drop-btn-link:hover::after {
                    transform: scaleX(1);
                }

                /* Departments Mega Dropdown */
                .nav-dept-drop {
                    min-width: 340px;
                    right: auto;
                    left: 50%;
                    transform: translateX(-50%) translateY(10px);
                    padding: 0.8rem;
                }
                .nav-dropdown:hover .nav-dept-drop {
                    transform: translateX(-50%) translateY(0);
                }
                .nav-dept-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 0.3rem;
                }
                .nav-dept-item {
                    display: flex !important;
                    align-items: center !important;
                    gap: 0.5rem !important;
                    padding: 0.6rem 0.8rem !important;
                    border-radius: 10px !important;
                    text-decoration: none !important;
                    color: var(--navy) !important;
                    font-size: 0.85rem !important;
                    font-weight: 600 !important;
                    transition: all 0.2s !important;
                }
                .nav-dept-item:hover {
                    background: rgba(99,102,241,0.08) !important;
                    color: #6366f1 !important;
                    transform: translateX(2px);
                }
                .nav-dept-icon {
                    font-size: 1.1rem;
                }
                .nav-dept-name {
                    white-space: nowrap;
                }
                .nav-dept-footer {
                    border-top: 1px solid rgba(0,0,0,0.06);
                    margin-top: 0.5rem;
                    padding-top: 0.5rem;
                }
                .nav-dept-all {
                    display: block !important;
                    text-align: center !important;
                    padding: 0.6rem !important;
                    font-size: 0.82rem !important;
                    font-weight: 700 !important;
                    color: #6366f1 !important;
                    text-decoration: none !important;
                    border-radius: 8px !important;
                }
                .nav-dept-all:hover {
                    background: rgba(99,102,241,0.08) !important;
                }
            `}</style>
        </>
    );
};

export default Navbar;
