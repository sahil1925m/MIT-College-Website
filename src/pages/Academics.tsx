import Programs from '../components/Programs';
import campus5 from '../assets/campus5.webp';

const Academics = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            <div style={{
                background: `linear-gradient(rgba(5, 10, 20, 0.8), rgba(5, 10, 20, 0.8)), url(${campus5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff', padding: 'clamp(3rem, 6vw, 6rem) 5% clamp(2rem, 4vw, 4rem)', textAlign: 'center'
            }}>
                <h1 className="section-title section-title-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Academic <span>Excellence</span></h1>
                <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                    Explore our diverse range of undergraduate and postgraduate programs designed to
                    equip you with future-ready skills.
                </p>
            </div>

            <Programs limit={6} />

            {/* Featured Video */}
            <section className="section" style={{ padding: '4rem 5%', backgroundColor: 'var(--bg-light, #f8fafc)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="section-title" style={{ marginBottom: '2rem' }}>Experience <span>MIT</span></h2>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/lyUCDXrMgz0?si=gFv9PkL8n6StKvPH"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Curriculum Highlights */}
            <section className="section section-alt" style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, #f8fafc, #fff)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
                    <div className="section-chip" style={{ justifyContent: 'center', marginBottom: '1rem' }}><span className="chip-dot"></span>Discover Our Edge</div>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Study <span>Here?</span></h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {[
                            {
                                icon: '💡',
                                title: 'Project-Based Learning',
                                highlight: 'Real-world application from day one.',
                                text: 'We believe learning extends beyond the classroom. From your very first semester, you will be immersed in hands-on projects that challenge you to apply theoretical knowledge to solve genuine, real-world problems. This practical approach builds portfolio-ready experience before you graduate.',
                                color: '#eef2ff',
                                iconColor: '#4f46e5'
                            },
                            {
                                icon: '🤝',
                                title: 'Industry-Aligned Curriculum',
                                highlight: 'Stay ahead of the technological curve.',
                                text: 'Our syllabi are continuously refined and updated in direct consultation with leading industry experts and tech pioneers. We ensure that you are mastering the exact tools, languages, and methodologies that top-tier companies are actively seeking in the modern global landscape.',
                                color: '#f0fdf4',
                                iconColor: '#16a34a'
                            },
                            {
                                icon: '🔬',
                                title: 'Premier Research Focus',
                                highlight: 'Innovate, discover, and patent.',
                                text: 'We cultivate a profound environment of intellectual curiosity. Students are actively encouraged and mentored to publish high-impact research papers, attend international conferences, and file patents, translating their brightest ideas into tangible academic and industrial breakthroughs.',
                                color: '#fff1f2',
                                iconColor: '#e11d48'
                            },
                            {
                                icon: '🗣️',
                                title: 'Holistic Soft Skills Training',
                                highlight: 'Communication is your superpower.',
                                text: 'Technical brilliance requires the voice to match it. Our dedicated training modules go far beyond engineering, focusing heavily on leadership, articulate communication, confident public speaking, and rigorous interview preparation to help you stand out in any boardroom.',
                                color: '#fefce8',
                                iconColor: '#ca8a04'
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="why-study-card"
                                style={{
                                    background: '#fff',
                                    padding: '2.5rem 2rem',
                                    borderRadius: '24px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(0,0,0,0.02)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    background: item.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.8rem',
                                    marginBottom: '1.5rem',
                                    boxShadow: `0 4px 15px ${item.color}`,
                                    transition: 'transform 0.4s ease'
                                }} className="card-icon-wrap">
                                    {item.icon}
                                </div>
                                <h4 style={{
                                    fontSize: '1.35rem',
                                    color: 'var(--navy)',
                                    marginBottom: '0.75rem',
                                    fontWeight: 700,
                                    lineHeight: 1.3
                                }}>{item.title}</h4>
                                <p style={{
                                    color: item.iconColor,
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    marginBottom: '1rem',
                                    letterSpacing: '0.5px'
                                }}>{item.highlight}</p>
                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                    margin: 0
                                }}>{item.text}</p>

                                {/* Hover glowing border effect overlay */}
                                <div className="card-glow" style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    borderRadius: '24px',
                                    border: `2px solid ${item.iconColor}`,
                                    opacity: 0,
                                    transition: 'opacity 0.4s ease',
                                    pointerEvents: 'none'
                                }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS styles for hover animation */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .why-study-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
                    }
                    .why-study-card:hover .card-icon-wrap {
                        transform: scale(1.1) rotate(5deg);
                    }
                    .why-study-card:hover .card-glow {
                        opacity: 0.15 !important;
                    }
                `}} />
            </section>
        </div>
    );
};

export default Academics;
