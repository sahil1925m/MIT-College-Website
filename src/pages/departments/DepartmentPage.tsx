import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDepartmentById, departments } from './departmentData';
import type { Faculty } from './departmentData';

/* ─── Helper: avatar initials ─── */
const initials = (name: string) =>
  name
    .replace(/^(Mr\.?|Ms\.?|Mrs\.?|Dr\.?)[\s.]*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

/* ─── Faculty Card ─── */
const FacultyCard = ({ faculty, color }: { faculty: Faculty; color: string }) => (
  <div className="dept-faculty-card">
    <div className="dept-faculty-avatar" style={{ background: color }}>
      {initials(faculty.name)}
      {faculty.isHOD && <span className="dept-hod-badge">HOD</span>}
    </div>
    <div className="dept-faculty-info">
      <h4>{faculty.name}</h4>
      <span className="dept-faculty-role">{faculty.role}</span>
      <div className="dept-faculty-meta">
        {faculty.experience && faculty.experience !== '—' && (
          <span>📅 {faculty.experience}</span>
        )}
        {faculty.qualification && faculty.qualification !== '—' && (
          <span>🎓 {faculty.qualification}</span>
        )}
        {faculty.research && faculty.research !== '—' && (
          <span>🔬 {faculty.research}</span>
        )}
      </div>
    </div>
  </div>
);

/* ─── Main Page ─── */
const DepartmentPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dept = getDepartmentById(id || '');
  const [activeTab, setActiveTab] = useState<'overview' | 'hod' | 'faculty'>('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('overview');
  }, [id]);

  if (!dept) {
    return (
      <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
        <h2>Department not found</h2>
        <Link to="/departments" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
          ← Back to Departments
        </Link>
      </div>
    );
  }

  const hod = dept.faculties.find((f) => f.isHOD);

  return (
    <div className="dept-page">
      {/* ── Hero Banner ── */}
      <div className="dept-hero" style={{ background: dept.gradient }}>
        <div className="dept-hero-bg-circles">
          <div className="dept-circle c1" />
          <div className="dept-circle c2" />
          <div className="dept-circle c3" />
        </div>
        <div className="dept-hero-content">
          <div className="dept-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/departments">Departments</Link>
            <span>›</span>
            <span>{dept.shortName}</span>
          </div>
          <div className="dept-hero-icon"><dept.icon size={64} color="white" /></div>
          <h1 className="dept-hero-title">{dept.name}</h1>
          <p className="dept-hero-subtitle">Department of Excellence · MIT Indore</p>

          {/* Stats row */}
          <div className="dept-hero-stats">
            <div className="dept-stat">
              <span className="dept-stat-num">{dept.faculties.length}+</span>
              <span className="dept-stat-label">Faculty Members</span>
            </div>
            {dept.established && (
              <div className="dept-stat">
                <span className="dept-stat-num">{dept.established}</span>
                <span className="dept-stat-label">Established</span>
              </div>
            )}
            {dept.intake && (
              <div className="dept-stat">
                <span className="dept-stat-num">{dept.intake}</span>
                <span className="dept-stat-label">Annual Intake</span>
              </div>
            )}
            <div className="dept-stat">
              <span className="dept-stat-num">A++</span>
              <span className="dept-stat-label">NAAC Grade</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="dept-tabs-wrapper">
        <div className="dept-tabs">
          {(['overview', 'hod', 'faculty'] as const).map((tab) => (
            <button
              key={tab}
              className={`dept-tab${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
              style={{ '--tab-color': dept.color } as React.CSSProperties}
            >
              {tab === 'overview' && '📋 Overview'}
              {tab === 'hod' && "🎓 HOD's Desk"}
              {tab === 'faculty' && '👥 Our Faculty'}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="dept-body">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="dept-tab-content animate-fadein">
            <div className="dept-overview-grid">
              <div className="dept-overview-text">
                <div className="dept-section-label" style={{ color: dept.color }}>About The Department</div>
                <h2>Department Overview</h2>
                <p>{dept.overview}</p>
              </div>
              <div className="dept-overview-side">
                <div className="dept-info-card" style={{ borderColor: dept.color }}>
                  <div className="dept-info-card-header" style={{ background: dept.gradient }}>
                    <span><dept.icon size={28} /></span>
                    <span>{dept.shortName}</span>
                  </div>
                  <ul className="dept-info-list">
                    <li>
                      <span className="label">Full Name</span>
                      <span className="value">{dept.name}</span>
                    </li>
                    <li>
                      <span className="label">HOD</span>
                      <span className="value">{dept.hodName}</span>
                    </li>
                    <li>
                      <span className="label">Faculty Strength</span>
                      <span className="value">{dept.faculties.length} Members</span>
                    </li>
                    {dept.established && (
                      <li>
                        <span className="label">Established</span>
                        <span className="value">{dept.established}</span>
                      </li>
                    )}
                    {dept.intake && (
                      <li>
                        <span className="label">Intake</span>
                        <span className="value">{dept.intake} seats/year</span>
                      </li>
                    )}
                    <li>
                      <span className="label">University</span>
                      <span className="value">RGPV, Bhopal</span>
                    </li>
                  </ul>
                </div>

                {/* Quick navigation to other depts */}
                <div className="dept-quick-nav">
                  <h4>Other Departments</h4>
                  <div className="dept-quick-links">
                    {departments
                      .filter((d) => d.id !== dept.id)
                      .slice(0, 5)
                      .map((d) => (
                        <button
                          key={d.id}
                          onClick={() => navigate(`/departments/${d.id}`)}
                          className="dept-quick-link"
                          style={{ '--link-color': d.color } as React.CSSProperties}
                        >
                          <span><d.icon size={18} /></span>
                          <span>{d.shortName}</span>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HOD Tab */}
        {activeTab === 'hod' && (
          <div className="dept-tab-content animate-fadein">
            <div className="dept-hod-section">
              <div className="dept-hod-avatar-wrap">
                <div className="dept-hod-avatar-large" style={{ background: dept.gradient }}>
                  {hod ? initials(hod.name) : <dept.icon size={80} color="white" />}
                </div>
                <div className="dept-hod-name-card" style={{ background: dept.gradient }}>
                  <h3>{dept.hodName}</h3>
                  <p>Head of Department · {dept.shortName}</p>
                  {hod && hod.qualification !== '—' && (
                    <p style={{ opacity: 0.85, fontSize: '0.85rem', marginTop: '0.3rem' }}>
                      {hod.qualification}
                    </p>
                  )}
                  {hod && hod.experience !== '—' && (
                    <p style={{ opacity: 0.8, fontSize: '0.85rem' }}>
                      {hod.experience} of Experience
                    </p>
                  )}
                </div>
              </div>
              <div className="dept-hod-desk">
                <div className="dept-section-label" style={{ color: dept.color }}>Message From HOD</div>
                <h2>From HOD's Desk</h2>
                <div className="dept-hod-quote-mark" style={{ color: dept.color }}>"</div>
                <p className="dept-hod-message">{dept.hodDesk}</p>
                <div className="dept-hod-signature">
                  <div className="dept-hod-sig-line" style={{ background: dept.color }} />
                  <strong style={{ color: dept.color }}>{dept.hodName}</strong>
                  <span>HOD, Department of {dept.shortName}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Faculty Tab */}
        {activeTab === 'faculty' && (
          <div className="dept-tab-content animate-fadein">
            <div className="dept-section-label" style={{ color: dept.color }}>Meet The Team</div>
            <h2 style={{ marginBottom: '2rem' }}>Our Faculty Members</h2>
            <div className="dept-faculty-grid">
              {dept.faculties.map((f) => (
                <FacultyCard key={f.name} faculty={f} color={dept.color} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── CTA ── */}
      <div className="dept-cta" style={{ background: dept.gradient }}>
        <h2>Interested in {dept.shortName}?</h2>
        <p>Join one of India's finest engineering institutes. Apply for admission today.</p>
        <div className="dept-cta-btns">
          <Link to="/admissions" className="dept-cta-btn primary">Apply Now →</Link>
          <Link to="/contact" className="dept-cta-btn secondary">Contact Us</Link>
        </div>
      </div>

      <style>{`
        .dept-page { background: #f8faff; min-height: 100vh; }

        /* HERO */
        .dept-hero {
          position: relative; overflow: hidden; padding: 7rem 2rem 4rem;
          color: #fff; text-align: center;
        }
        .dept-hero-bg-circles { position: absolute; inset: 0; pointer-events: none; }
        .dept-circle {
          position: absolute; border-radius: 50%;
          background: rgba(255,255,255,0.07);
        }
        .c1 { width: 500px; height: 500px; top: -150px; left: -100px; }
        .c2 { width: 300px; height: 300px; bottom: -100px; right: -50px; }
        .c3 { width: 200px; height: 200px; top: 60%; left: 60%; }
        .dept-hero-content { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }
        .dept-hero-breadcrumb {
          display: flex; align-items: center; gap: 0.5rem; justify-content: center;
          font-size: 0.85rem; opacity: 0.8; margin-bottom: 1.5rem; flex-wrap: wrap;
        }
        .dept-hero-breadcrumb a { color: #fff; text-decoration: none; }
        .dept-hero-breadcrumb a:hover { text-decoration: underline; }
        .dept-hero-icon { font-size: 3.5rem; margin-bottom: 0.75rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2)); }
        .dept-hero-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; margin-bottom: 0.5rem; line-height: 1.2; }
        .dept-hero-subtitle { opacity: 0.85; font-size: 1rem; margin-bottom: 2rem; }
        .dept-hero-stats {
          display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;
          background: rgba(255,255,255,0.12); border-radius: 16px;
          padding: 1.2rem 2rem; backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .dept-stat { text-align: center; }
        .dept-stat-num { display: block; font-size: 1.7rem; font-weight: 800; }
        .dept-stat-label { font-size: 0.75rem; opacity: 0.8; letter-spacing: 0.5px; text-transform: uppercase; }

        /* TABS */
        .dept-tabs-wrapper {
          background: #fff; box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          position: sticky; top: 70px; z-index: 100;
        }
        .dept-tabs {
          display: flex; max-width: 960px; margin: 0 auto; padding: 0 1rem;
          overflow-x: auto; gap: 0;
        }
        .dept-tab {
          padding: 1.1rem 1.8rem; background: none; border: none; cursor: pointer;
          font-size: 0.95rem; font-weight: 600; color: #666;
          border-bottom: 3px solid transparent; transition: all 0.25s;
          white-space: nowrap; letter-spacing: 0.2px;
        }
        .dept-tab:hover { color: #333; background: rgba(0,0,0,0.03); }
        .dept-tab.active { color: var(--tab-color, #6366f1); border-bottom-color: var(--tab-color, #6366f1); }

        /* BODY */
        .dept-body { max-width: 1100px; margin: 0 auto; padding: 3rem 2rem; }
        .dept-tab-content { }
        .animate-fadein { animation: fadeInUp 0.4s ease; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .dept-section-label {
          font-size: 0.8rem; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; margin-bottom: 0.5rem;
        }

        /* OVERVIEW */
        .dept-overview-grid { display: grid; grid-template-columns: 1fr 340px; gap: 3rem; align-items: start; }
        @media (max-width: 768px) { .dept-overview-grid { grid-template-columns: 1fr; } }
        .dept-overview-text h2 { font-size: 2rem; font-weight: 800; color: #0f172a; margin-bottom: 1.2rem; }
        .dept-overview-text p { font-size: 1rem; line-height: 1.9; color: #475569; text-align: justify; }

        .dept-info-card { border: 2px solid; border-radius: 16px; overflow: hidden; }
        .dept-info-card-header {
          display: flex; align-items: center; gap: 0.8rem;
          padding: 1.2rem 1.5rem; color: #fff; font-weight: 700; font-size: 1.1rem;
        }
        .dept-info-card-header span:first-child { font-size: 1.5rem; }
        .dept-info-list { list-style: none; margin: 0; padding: 1rem 1.5rem; }
        .dept-info-list li {
          display: flex; justify-content: space-between; align-items: flex-start;
          padding: 0.75rem 0; border-bottom: 1px solid #f1f5f9; gap: 1rem;
          font-size: 0.9rem;
        }
        .dept-info-list li:last-child { border-bottom: none; }
        .dept-info-list .label { color: #94a3b8; font-weight: 600; min-width: 90px; }
        .dept-info-list .value { color: #1e293b; font-weight: 600; text-align: right; }

        .dept-quick-nav { margin-top: 1.5rem; background: #fff; border-radius: 16px; padding: 1.2rem 1.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .dept-quick-nav h4 { font-size: 0.85rem; font-weight: 700; color: #94a3b8; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 0.8rem; }
        .dept-quick-links { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .dept-quick-link {
          display: flex; align-items: center; gap: 0.4rem; padding: 0.45rem 0.85rem;
          border-radius: 20px; background: rgba(0,0,0,0.04); border: none; cursor: pointer;
          font-size: 0.82rem; font-weight: 600; color: #1e293b; transition: all 0.2s;
        }
        .dept-quick-link:hover { background: var(--link-color); color: #fff; transform: scale(1.04); }

        /* HOD */
        .dept-hod-section { display: grid; grid-template-columns: 300px 1fr; gap: 3rem; align-items: start; }
        @media (max-width: 768px) { .dept-hod-section { grid-template-columns: 1fr; } }
        .dept-hod-avatar-wrap { display: flex; flex-direction: column; align-items: center; gap: 0; }
        .dept-hod-avatar-large {
          width: 160px; height: 160px; border-radius: 50%; display: flex;
          align-items: center; justify-content: center; font-size: 3rem; font-weight: 800;
          color: #fff; box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          border: 5px solid #fff; margin-bottom: 1rem;
        }
        .dept-hod-name-card {
          width: 100%; border-radius: 16px; padding: 1.5rem; color: #fff; text-align: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        .dept-hod-name-card h3 { font-size: 1.2rem; font-weight: 800; margin-bottom: 0.3rem; }
        .dept-hod-name-card p { opacity: 0.9; font-size: 0.9rem; margin: 0; }
        .dept-hod-desk h2 { font-size: 2rem; font-weight: 800; color: #0f172a; margin-bottom: 1rem; }
        .dept-hod-quote-mark { font-size: 5rem; line-height: 0.5; margin-bottom: 1rem; opacity: 0.4; font-family: Georgia, serif; }
        .dept-hod-message { font-size: 1rem; line-height: 2; color: #475569; text-align: justify; }
        .dept-hod-signature { margin-top: 2rem; }
        .dept-hod-sig-line { height: 3px; width: 50px; border-radius: 2px; margin-bottom: 0.8rem; }
        .dept-hod-signature strong { display: block; font-size: 1.1rem; font-weight: 800; margin-bottom: 0.2rem; }
        .dept-hod-signature span { font-size: 0.85rem; color: #64748b; }

        /* FACULTY */
        .dept-faculty-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;
        }
        .dept-faculty-card {
          background: #fff; border-radius: 16px; padding: 1.5rem;
          display: flex; gap: 1rem; align-items: flex-start;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: all 0.3s;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .dept-faculty-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .dept-faculty-avatar {
          width: 56px; height: 56px; border-radius: 14px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; font-weight: 800; color: #fff;
          position: relative;
        }
        .dept-hod-badge {
          position: absolute; top: -6px; right: -6px; background: #f59e0b;
          color: #fff; font-size: 0.55rem; font-weight: 800; padding: 2px 5px;
          border-radius: 6px; letter-spacing: 0.5px;
        }
        .dept-faculty-info { flex: 1; min-width: 0; }
        .dept-faculty-info h4 { font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 0.2rem; line-height: 1.3; }
        .dept-faculty-role { font-size: 0.8rem; font-weight: 600; color: #64748b; display: block; margin-bottom: 0.7rem; }
        .dept-faculty-meta { display: flex; flex-direction: column; gap: 0.3rem; }
        .dept-faculty-meta span { font-size: 0.78rem; color: #475569; }

        /* CTA */
        .dept-cta {
          text-align: center; padding: 4rem 2rem; color: #fff; margin-top: 2rem;
          position: relative; overflow: hidden;
        }
        .dept-cta h2 { font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem; }
        .dept-cta p { opacity: 0.9; margin-bottom: 2rem; font-size: 1rem; }
        .dept-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .dept-cta-btn {
          padding: 0.9rem 2rem; border-radius: 50px; font-weight: 700; font-size: 1rem;
          text-decoration: none; transition: all 0.2s; display: inline-block; border: 2px solid;
        }
        .dept-cta-btn.primary { background: #fff; color: #0f172a; border-color: #fff; }
        .dept-cta-btn.primary:hover { background: transparent; color: #fff; }
        .dept-cta-btn.secondary { background: transparent; color: #fff; border-color: rgba(255,255,255,0.5); }
        .dept-cta-btn.secondary:hover { background: rgba(255,255,255,0.15); }
      `}</style>
    </div>
  );
};

export default DepartmentPage;
