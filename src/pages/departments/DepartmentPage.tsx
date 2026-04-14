import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, Award, BookOpen, GraduationCap, ChevronRight, MessageSquare, ArrowLeft, Building2 } from 'lucide-react';
import { getDepartmentById, departments } from './departmentData';
import type { Faculty } from './departmentData';

/* ─── Helper: avatar initials ─── */
const initials = (name: string) =>
  name
    .replace(/^(Mr\.?|Ms\.?|Mrs\.?|Dr\.?|Prof\.?)[\s.]*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

/* ─── Faculty Card ─── */
const FacultyCard = ({ faculty, color }: { faculty: Faculty; color: string }) => (
  <motion.div
    className="dept-faculty-card"
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    <div className="dept-faculty-avatar-wrap">
      <div className="dept-faculty-avatar" style={{ background: `linear-gradient(135deg, ${color}, #1E293B)` }}>
        {initials(faculty.name)}
      </div>
      {faculty.isHOD && <span className="dept-hod-badge" style={{ background: color }}>HOD</span>}
    </div>
    <div className="dept-faculty-info">
      <h4 style={{ color: "var(--navy)" }}>{faculty.name}</h4>
      <span className="dept-faculty-role">{faculty.role}</span>
      <div className="dept-faculty-meta">
        {faculty.experience && faculty.experience !== '—' && (
          <span><Calendar size={14} /> {faculty.experience}</span>
        )}
        {faculty.qualification && faculty.qualification !== '—' && (
          <span><GraduationCap size={14} /> {faculty.qualification}</span>
        )}
        {faculty.research && faculty.research !== '—' && (
          <span><BookOpen size={14} /> {faculty.research}</span>
        )}
      </div>
    </div>
    <div className="dept-faculty-glow" style={{ background: color }} />
  </motion.div>
);

/* ─── Main Page ─── */
const DepartmentPage = () => {
  const { id } = useParams<{ id: string }>();
  // const navigate = useNavigate();
  const dept = getDepartmentById(id || '');
  const [activeTab, setActiveTab] = useState<'overview' | 'hod' | 'faculty'>('overview');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveTab('overview');
  }, [id]);

  if (!dept) {
    return (
      <div className="dept-not-found">
        <h2>Department not found</h2>
        <Link to="/departments" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
          <ArrowLeft size={18} style={{ marginRight: '8px' }} /> Back to Departments
        </Link>
      </div>
    );
  }

  const hod = dept.faculties.find((f) => f.isHOD);
  const Icon = dept.icon;

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building2 },
    { id: 'hod', label: "HOD's Desk", icon: MessageSquare },
    { id: 'faculty', label: 'Faculty', icon: Users },
  ] as const;

  return (
    <div className="dept-page">
      {/* ── Hero Banner ── */}
      <div className="dept-hero">
        <motion.div 
          className="dept-hero-bg" 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ background: dept.gradient || `linear-gradient(135deg, ${dept.color}, var(--navy))` }} 
        />
        
        {/* Animated Background Particles/Blobs */}
        <motion.div 
          className="dept-hero-blob blob-1" 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="dept-hero-blob blob-2" 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="dept-hero-content container">
          <motion.div 
            className="dept-hero-breadcrumb"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/departments">Departments</Link>
            <ChevronRight size={14} />
            <span style={{ color: dept.color, fontWeight: 600 }}>{dept.shortName}</span>
          </motion.div>

          <motion.div 
            className="dept-hero-icon-wrap"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          >
            <Icon size={64} className="dept-hero-icon" />
          </motion.div>

          <motion.h1 
            className="dept-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {dept.name}
          </motion.h1>
          
          <motion.p 
            className="dept-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Empowering Innovation & Excellence at MIT Indore
          </motion.p>

          {/* Stats Row */}
          <motion.div 
            className="dept-hero-stats"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="dept-stat" variants={fadeUp}>
              <Users size={24} className="dept-stat-icon" />
              <div>
                <span className="dept-stat-num">{dept.faculties.length}+</span>
                <span className="dept-stat-label">Faculty Experts</span>
              </div>
            </motion.div>
            
            {dept.established && (
              <motion.div className="dept-stat" variants={fadeUp}>
                <Building2 size={24} className="dept-stat-icon" />
                <div>
                  <span className="dept-stat-num">{dept.established}</span>
                  <span className="dept-stat-label">Established</span>
                </div>
              </motion.div>
            )}
            
            {dept.intake && (
              <motion.div className="dept-stat" variants={fadeUp}>
                <GraduationCap size={24} className="dept-stat-icon" />
                <div>
                  <span className="dept-stat-num">{dept.intake}</span>
                  <span className="dept-stat-label">Annual Intake</span>
                </div>
              </motion.div>
            )}
            
            <motion.div className="dept-stat" variants={fadeUp}>
              <Award size={24} className="dept-stat-icon" />
              <div>
                <span className="dept-stat-num">A++</span>
                <span className="dept-stat-label">NAAC Grade</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Modern Tabs ── */}
      <div className="dept-tabs-container">
        <div className="container">
          <div className="dept-tabs">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  className={`dept-tab ${isActive ? 'active' : ''}`}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onClick={() => setActiveTab(tab.id as any)}
                >
                  <TabIcon size={18} className="dept-tab-icon" />
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="deptTabIndicator" 
                      className="dept-tab-indicator"
                      style={{ background: dept.color }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="dept-body container">
        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div 
              key="overview"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="dept-tab-content"
            >
              <div className="dept-overview-layout">
                <div className="dept-overview-main">
                  <div className="dept-section-chip" style={{ color: dept.color, background: `${dept.color}15`, borderColor: `${dept.color}30` }}>
                    <div className="dept-chip-dot" style={{ background: dept.color }} />
                    About Department
                  </div>
                  <h2 className="dept-section-title">Nurturing Future Technocrats</h2>
                  <div className="dept-overview-text">
                    {dept.overview.split('\\n').map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="dept-overview-sidebar">
                  {/* Info Card */}
                  <div className="dept-info-card group" style={{ borderColor: `${dept.color}30` }}>
                    <div className="dept-info-card-bg" style={{ background: `linear-gradient(135deg, ${dept.color}05, transparent)` }} />
                    <div className="dept-info-card-header" style={{ color: dept.color }}>
                      <Icon size={24} />
                      <h3>Key Information</h3>
                    </div>
                    <ul className="dept-info-list">
                      <li>
                        <span className="label">Department Name</span>
                        <span className="value">{dept.name}</span>
                      </li>
                      <li>
                        <span className="label">Head of Dept.</span>
                        <span className="value">{dept.hodName}</span>
                      </li>
                      {dept.intake && (
                        <li>
                          <span className="label">Approved Intake</span>
                          <span className="value">{dept.intake} Students</span>
                        </li>
                      )}
                      <li>
                        <span className="label">Affiliation</span>
                        <span className="value">RGPV, Bhopal</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Quick Navigation - Horizontal Branches Bar */}
                <div className="dept-quick-nav">
                  <div className="dept-section-label" style={{ color: dept.color, opacity: 0.8 }}>Explore More</div>
                  <h3 className="dept-quick-nav-title" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.5rem' }}>Other Academic Branches</h3>
                  <div className="dept-quick-links">
                    {departments.filter(d => d.id !== dept.id).slice(0, 7).map(d => (
                      <Link 
                        to={`/departments/${d.id}`} 
                        key={d.id} 
                        className="dept-quick-link"
                        style={{ '--link-color': d.color } as React.CSSProperties}
                      >
                        <span className="icon-wrap"><d.icon size={18} /></span>
                        <span className="name">{d.shortName}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* HOD Tab */}
          {activeTab === 'hod' && (
            <motion.div 
              key="hod"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="dept-tab-content"
            >
              <div className="dept-hod-layout">
                <motion.div 
                  className="dept-hod-profile"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="dept-hod-avatar-main" style={{ background: `linear-gradient(135deg, ${dept.color}, var(--navy))` }}>
                    {hod ? initials(hod.name) : <Users size={64} color="white" />}
                  </div>
                  <div className="dept-hod-profile-name">
                    <h3>{dept.hodName}</h3>
                    <p>Head of Department</p>
                  </div>
                  {hod && (
                    <div className="dept-hod-profile-meta">
                      {hod.qualification && hod.qualification !== '—' && (
                        <div><GraduationCap size={16} /> <span>{hod.qualification}</span></div>
                      )}
                      {hod.experience && hod.experience !== '—' && (
                        <div><Calendar size={16} /> <span>{hod.experience} of Experience</span></div>
                      )}
                    </div>
                  )}
                </motion.div>

                <div className="dept-hod-message-area">
                  <div className="dept-section-chip" style={{ color: dept.color, background: `${dept.color}15`, borderColor: `${dept.color}30` }}>
                    <div className="dept-chip-dot" style={{ background: dept.color }} />
                    Message from HOD
                  </div>
                  <h2 className="dept-section-title">Guiding the Next Generation</h2>
                  <div className="dept-hod-quote-wrapper">
                    <span className="quote-mark" style={{ color: `${dept.color}20` }}>"</span>
                    <p className="dept-hod-text">{dept.hodDesk}</p>
                    <div className="dept-hod-signature">
                      <div className="sig-line" style={{ background: dept.color }} />
                      <strong>{dept.hodName}</strong>
                      <span>HOD, {dept.shortName}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Faculty Tab */}
          {activeTab === 'faculty' && (
            <motion.div 
              key="faculty"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="dept-tab-content"
            >
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div className="dept-section-chip justify-center" style={{ color: dept.color, background: `${dept.color}15`, borderColor: `${dept.color}30` }}>
                  <div className="dept-chip-dot" style={{ background: dept.color }} />
                  Our Team
                </div>
                <h2 className="dept-section-title" style={{ textAlign: "center" }}>Meet Our Esteemed Faculty</h2>
              </div>
              
              <motion.div 
                className="dept-faculty-grid"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {dept.faculties.map((f, i) => (
                  <motion.div key={f.name} variants={fadeUp}>
                    <FacultyCard faculty={f} color={dept.color} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── CTA ── */}
      <div className="dept-cta-wrapper container">
        <motion.div 
          className="dept-cta-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          style={{ background: `linear-gradient(135deg, ${dept.color}, var(--navy))` }}
        >
          <div className="dept-cta-bg-shapes">
            <div className="shape shape-1" />
            <div className="shape shape-2" />
          </div>
          <div className="dept-cta-content">
            <h2>Ready to build your future?</h2>
            <p>Join the Department of {dept.shortName} and take the first step towards a brilliant career in engineering and technology.</p>
            <div className="dept-cta-actions">
              <Link to="/admissions" className="btn btn-white">
                Apply for Admission <ChevronRight size={16} className="arrow-icon" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* ── PAGE LAYOUT ── */
        .dept-page {
          background: var(--surface-alt);
          min-height: 100vh;
          padding-bottom: 5rem;
        }

        .dept-not-found {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--surface-alt);
        }

        /* ── HERO BANNER ── */
        .dept-hero {
          position: relative;
          padding: 8rem 0 5rem;
          color: var(--white);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 65vh;
        }

        .dept-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .dept-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10,15,30,0.1) 0%, rgba(10,15,30,0.8) 100%);
          z-index: 1;
        }

        .dept-hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.5;
        }
        .blob-1 {
          width: 500px; height: 500px; background: rgba(255,255,255,0.15);
          top: -100px; right: 10%;
        }
        .blob-2 {
          width: 400px; height: 400px; background: rgba(0,0,0,0.3);
          bottom: -50px; left: 5%;
        }

        .dept-hero-content {
          position: relative;
          z-index: 5;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 900px;
        }

        .dept-hero-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.1);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 0.85rem;
          margin-bottom: 2rem;
          color: rgba(255,255,255,0.8);
        }
        .dept-hero-breadcrumb a { transition: color 0.2s; }
        .dept-hero-breadcrumb a:hover { color: var(--white); }

        .dept-hero-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 96px;
          height: 96px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.2);
          margin-bottom: 1.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .dept-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          margin-bottom: 1rem;
          text-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .dept-hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(255,255,255,0.8);
          margin-bottom: 3rem;
          max-width: 600px;
        }

        .dept-hero-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .dept-stat {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(0,0,0,0.25);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1rem 1.5rem;
          border-radius: 16px;
          text-align: left;
          transition: transform 0.3s, background 0.3s;
        }
        .dept-stat:hover {
          transform: translateY(-5px);
          background: rgba(0,0,0,0.4);
        }
        .dept-stat-icon {
          color: rgba(255,255,255,0.9);
          padding: 10px;
          background: rgba(255,255,255,0.1);
          border-radius: 12px;
          width: 44px; height: 44px;
        }
        .dept-stat-num {
          display: block;
          font-size: 1.3rem;
          font-weight: 800;
          font-family: var(--font-serif);
          line-height: 1;
          margin-bottom: 0.2rem;
        }
        .dept-stat-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
        }

        /* ── TABS ── */
        .dept-tabs-container {
          background: var(--white);
          border-bottom: 1px solid var(--border-light);
          position: sticky;
          top: 72px; /* Adjust based on your global navbar height */
          z-index: 50;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .dept-tabs {
          display: flex;
          justify-content: center;
          gap: 2rem;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
        }
        .dept-tabs::-webkit-scrollbar { display: none; } /* Chrome */

        .dept-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1.2rem 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-muted);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .dept-tab:hover {
          color: var(--navy);
        }

        .dept-tab.active {
          color: var(--navy);
        }

        .dept-tab-indicator {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 3px 3px 0 0;
        }

        /* ── BODY UTILS ── */
        .dept-body {
          padding-top: 4rem;
          min-height: 50vh;
        }

        .dept-section-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          border: 1px solid;
        }
        .justify-center {
          justify-content: center;
          display: flex;
          margin: 0 auto 1.5rem auto;
          width: fit-content;
        }

        .dept-chip-dot {
          width: 6px; height: 6px; border-radius: 50%;
        }

        .dept-section-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3vw, 2.8rem);
          color: var(--navy);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        /* ── OVERVIEW TAB ── */
        .dept-overview-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 4rem;
        }
        @media (max-width: 992px) {
          .dept-overview-layout { grid-template-columns: 1fr; gap: 3rem; }
        }

        .dept-overview-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 1.2rem;
          text-align: justify;
        }

        .dept-overview-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .dept-info-card {
          position: relative;
          background: var(--white);
          border: 1px solid;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: transform 0.3s;
        }
        .dept-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }
        .dept-info-card-bg {
          position: absolute; inset: 0; z-index: 0;
        }
        .dept-info-card-header {
          position: relative; z-index: 1;
          display: flex; align-items: center; gap: 0.8rem;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-light);
        }
        .dept-info-card-header h3 { font-size: 1.1rem; font-weight: 700; }
        
        .dept-info-list {
          position: relative; z-index: 1;
          padding: 0 1.5rem 1.5rem;
        }
        .dept-info-list li {
          display: flex; justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px dashed var(--border-light);
          font-size: 0.95rem;
        }
        .dept-info-list li:last-child { border-bottom: none; padding-bottom: 0; }
        .dept-info-list .label { color: var(--text-muted); font-weight: 500; }
        .dept-info-list .value { color: var(--navy); font-weight: 700; text-align: right; }

        /* ── QUICK NAV (Horizontal) ── */
        .dept-quick-nav {
          margin-top: 4rem;
          padding: 3rem;
          background: var(--white);
          border-radius: 32px;
          border: 1px solid var(--border-light);
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
        }
        .dept-quick-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .dept-quick-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          background: #f8fafc;
          border-radius: 100px;
          text-decoration: none;
          color: var(--navy);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }
        .dept-quick-link .icon-wrap {
          display: flex;
          align-items: center; justify-content: center;
          width: 36px; height: 36px;
          background: #fff;
          border-radius: 50%;
          color: var(--text-muted);
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          transition: all 0.3s;
        }
        .dept-quick-link:hover {
          background: #fff;
          border-color: var(--link-color);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }
        .dept-quick-link:hover .icon-wrap {
          background: var(--link-color);
          color: #fff;
        }
        @media (max-width: 640px) {
          .dept-quick-nav { padding: 2rem 1.5rem; margin-top: 3rem; }
          .dept-quick-links { gap: 0.6rem; }
          .dept-quick-link { padding: 0.6rem 1rem; font-size: 0.85rem; }
        }

        /* ── HOD TAB ── */
        .dept-hod-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 868px) {
          .dept-hod-layout { grid-template-columns: 1fr; gap: 3rem; }
        }

        .dept-hod-profile {
          background: var(--white);
          border-radius: 24px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
          border: 1px solid var(--border-light);
        }

        .dept-hod-avatar-main {
          width: 150px; height: 150px;
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex; align-items: center; justify-content: center;
          color: var(--white); font-size: 3rem; font-weight: 800;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 4px solid var(--white);
        }

        .dept-hod-profile-name h3 {
          font-size: 1.4rem; font-weight: 800; color: var(--navy); margin-bottom: 0.3rem;
        }
        .dept-hod-profile-name p {
          font-size: 0.95rem; color: var(--text-muted); font-weight: 500;
        }

        .dept-hod-profile-meta {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px dashed var(--border-light);
          display: flex; flex-direction: column; gap: 0.8rem;
          text-align: left;
        }
        .dept-hod-profile-meta div {
          display: flex; align-items: center; gap: 0.8rem;
          color: var(--navy); font-size: 0.9rem; font-weight: 500;
        }
        .dept-hod-profile-meta div svg { color: var(--text-muted); }

        .dept-hod-message-area {
          background: var(--white);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
          border: 1px solid var(--border-light);
        }
        @media (max-width: 640px) {
          .dept-hod-message-area { padding: 2rem 1.5rem; }
        }

        .dept-hod-quote-wrapper { position: relative; margin-top: 2rem; }
        .dept-hod-quote-wrapper .quote-mark {
          position: absolute; top: -60px; left: -20px;
          font-family: var(--font-serif);
          font-size: 8rem; line-height: 1;
          pointer-events: none;
        }
        .dept-hod-text {
          font-size: 1.1rem; line-height: 1.9; color: var(--text-muted);
          position: relative; z-index: 1; text-align: justify;
        }

        .dept-hod-signature {
          margin-top: 3rem; margin-bottom: 1rem;
        }
        .dept-hod-signature .sig-line { width: 50px; height: 3px; border-radius: 3px; margin-bottom: 1rem; }
        .dept-hod-signature strong { display: block; font-size: 1.2rem; color: var(--navy); font-family: var(--font-serif); margin-bottom: 0.2rem; }
        .dept-hod-signature span { font-size: 0.9rem; color: var(--text-muted); font-weight: 500; }

        /* ── FACULTY TAB ── */
        .dept-faculty-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .dept-faculty-card {
          position: relative;
          background: var(--white);
          border-radius: 20px;
          padding: 1.5rem;
          display: flex; gap: 1.2rem; align-items: stretch;
          border: 1px solid var(--border-light);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          cursor: default;
        }
        
        .dept-faculty-glow {
          position: absolute; bottom: 0; left: 0; right: 0; height: 4px;
          opacity: 0.5; transition: opacity 0.3s;
        }
        .dept-faculty-card:hover .dept-faculty-glow { opacity: 1; height: 6px; }

        .dept-faculty-avatar-wrap {
          position: relative; flex-shrink: 0;
        }
        .dept-faculty-avatar {
          width: 64px; height: 64px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; font-weight: 800; color: var(--white);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .dept-hod-badge {
          position: absolute; top: -8px; right: -8px;
          color: var(--white); font-size: 0.6rem; font-weight: 800; padding: 3px 6px;
          border-radius: 6px; letter-spacing: 0.05em; border: 2px solid var(--white);
        }

        .dept-faculty-info { flex: 1; display: flex; flex-direction: column; }
        .dept-faculty-info h4 { font-size: 1.05rem; font-weight: 800; margin-bottom: 0.2rem; }
        .dept-faculty-role { font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-bottom: 1rem; }
        
        .dept-faculty-meta { display: flex; flex-direction: column; gap: 0.4rem; margin-top: auto; }
        .dept-faculty-meta span { 
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.8rem; color: var(--text-muted); font-weight: 500;
        }

        /* ── BOTTOM CTA ── */
        .dept-cta-wrapper {
          margin-top: 5rem;
        }
        .dept-cta-box {
          position: relative;
          border-radius: 30px;
          padding: 4rem 3rem;
          overflow: hidden;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .dept-cta-bg-shapes {
          position: absolute; inset: 0; z-index: 0; overflow: hidden;
        }
        .dept-cta-bg-shapes .shape {
          position: absolute; background: rgba(255,255,255,0.05); border-radius: 50%;
        }
        .shape-1 { width: 300px; height: 300px; top: -100px; left: -100px; }
        .shape-2 { width: 400px; height: 400px; bottom: -150px; right: -50px; }

        .dept-cta-content { position: relative; z-index: 1; color: var(--white); }
        .dept-cta-content h2 { font-family: var(--font-serif); font-size: 2.5rem; margin-bottom: 1rem; }
        .dept-cta-content p { font-size: 1.1rem; opacity: 0.9; max-width: 600px; margin: 0 auto 2.5rem; }
        
        @media (max-width: 992px) {
          .dept-overview-layout { grid-template-columns: 1fr; gap: 3rem; }
        }
        
        @media (max-width: 868px) {
          .dept-hod-layout { grid-template-columns: 1fr; gap: 3rem; }
        }
        
        @media (max-width: 768px) {
          .dept-hero { padding-top: 6rem; min-height: 50vh; }
          .dept-hero-icon-wrap { width: 72px; height: 72px; margin-bottom: 1rem; }
          .dept-hero-icon-wrap svg { width: 40px; height: 40px; }
          .dept-hero-breadcrumb { flex-wrap: wrap; justify-content: center; text-align: center; line-height: 1.6; }
          .dept-stat { flex-direction: column; text-align: center; gap: 0.8rem; padding: 1.2rem; flex: 1 1 calc(50% - 1.5rem); }
          .dept-cta-box { padding: 3rem 1.5rem; }
          .dept-cta-content h2 { font-size: 2rem; }
          .dept-faculty-grid { grid-template-columns: 1fr; }
          
          /* Make tabs swipeable on mobile */
          .dept-tabs { gap: 1.5rem; padding: 0 1rem; justify-content: flex-start; }
          .dept-tab { padding: 1rem 0.2rem; font-size: 0.95rem; }
          
          /* Padding and sizing adjustments */
          .dept-body { padding-top: 3rem; }
        }

        @media (max-width: 640px) {
          .dept-hod-message-area { padding: 2.5rem 1.5rem; }
          .dept-hod-quote-wrapper .quote-mark { top: -45px; left: -10px; font-size: 6rem; opacity: 0.8; }
        }

        @media (max-width: 480px) {
          .dept-hero { padding-top: 6rem; padding-bottom: 3rem; }
          .dept-hero-title { font-size: 2.2rem; }
          .dept-stat { flex: 1 1 100%; }
          
          .dept-hod-avatar-main { width: 120px; height: 120px; font-size: 2.2rem; }
          
          /* Enhance Info Cards for extra small screens */
          .dept-info-list li { flex-direction: column; gap: 0.4rem; padding: 1rem 0; }
          .dept-info-list .value { text-align: left; font-size: 1rem; }
          
          /* Mobile Faculty Cards */
          .dept-faculty-card { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .dept-faculty-avatar { width: 56px; height: 56px; }
        }
      `}</style>
    </div>
  );
};

export default DepartmentPage;

