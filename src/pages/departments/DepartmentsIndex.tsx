import { Link } from 'react-router-dom';
import { departments } from './departmentData';
import { ChevronRight, User, ArrowRight } from 'lucide-react';

const DepartmentsIndex = () => {
  return (
    <div className="depts-index">
      {/* Hero */}
      <div className="depts-hero">
        <div className="depts-hero-bg" />
        <div className="depts-hero-content">
          <div className="depts-breadcrumb" style={{ alignItems: 'center' }}>
            <Link to="/">Home</Link> <ChevronRight size={14} /> <span>Departments</span>
          </div>
          <h1>Our Departments</h1>
          <p>World-class academic programs with cutting-edge facilities and expert faculty</p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="depts-body">
        <div className="depts-grid">
          {departments.map((dept) => (
            <Link key={dept.id} to={`/departments/${dept.id}`} className="dept-card">
              <div className="dept-card-top" style={{ background: dept.gradient }}>
                <div className="dept-card-icon"><dept.icon size={48} /></div>
                <div className="dept-card-blob" />
              </div>
              <div className="dept-card-body">
                <span className="dept-card-short">{dept.shortName}</span>
                <h3 className="dept-card-name">{dept.name}</h3>
                <p className="dept-card-hod" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <User size={14} /> HOD: {dept.hodName}
                </p>
                <p className="dept-card-overview">
                  {dept.overview.substring(0, 110)}…
                </p>
                <div className="dept-card-footer">
                  <span className="dept-card-faculty">
                    {dept.faculties.length} Faculty
                  </span>
                  <span className="dept-card-link" style={{ color: dept.color, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .depts-index { background: #f1f5f9; min-height: 100vh; }

        .depts-hero {
          position: relative; background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 50%, #0a1628 100%);
          padding: 8rem 2rem 5rem; text-align: center; color: #fff; overflow: hidden;
        }
        .depts-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(99,102,241,0.15) 0%, transparent 60%),
                      radial-gradient(circle at 70% 30%, rgba(14,165,233,0.1) 0%, transparent 60%);
        }
        .depts-hero-content { position: relative; z-index: 1; }
        .depts-breadcrumb {
          display: flex; gap: 0.5rem; justify-content: center; opacity: 0.7;
          font-size: 0.85rem; margin-bottom: 1.5rem;
        }
        .depts-breadcrumb a { color: #fff; text-decoration: none; }
        .depts-hero h1 { font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 900; margin-bottom: 1rem; }
        .depts-hero p { opacity: 0.8; font-size: 1.1rem; }

        .depts-body { max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem; }

        .depts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.8rem;
        }

        @media (max-width: 768px) {
          .depts-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory;
            gap: 1.25rem !important;
            padding: 1rem 1.5rem 3rem !important;
            margin: 0 -1.5rem;
            scrollbar-width: none;
            -ms-overflow-style: none;
            -webkit-overflow-scrolling: touch;
          }
          .depts-grid::-webkit-scrollbar { display: none; }
          .depts-grid .dept-card {
            flex: 0 0 85%;
            scroll-snap-align: center;
            min-width: 280px;
          }
          .depts-body { padding: 2rem 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default DepartmentsIndex;
