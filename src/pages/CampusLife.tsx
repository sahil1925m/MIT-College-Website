import Gallery from '../components/Gallery';
import VideoPlayer from '../components/VideoPlayer';
import campus5 from '../assets/campus5.webp';

const CampusLife = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            <div style={{ background: 'var(--navy)', color: '#fff', padding: '6rem 5% 4rem', textAlign: 'center' }}>
                <h1 className="section-title section-title-white" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Campus <span>Life</span></h1>
                <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                    A vibrant ecosystem of learning, sports, culture, and innovation. Experience the best years of your life at MIT Indore.
                </p>
            </div>

            {/* Full Campus Tour Video */}
            <div className="container" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 5%' }}>
                <div className="section-chip" style={{ justifyContent: 'center' }}><span className="chip-dot"></span>Virtual Tour</div>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Experience <span>MIT Indore</span></h2>
                <p className="section-sub" style={{ textAlign: 'center', marginBottom: '3rem', margin: '0 auto 3rem' }}>
                    Take a comprehensive digital walkthrough of our state-of-the-art campus facilities, classrooms, labs, and student hangouts.
                </p>

                <VideoPlayer
                    src="https://www.youtube.com/embed/lyUCDXrMgz0"
                    title="Full Campus Tour (8 Min)"
                    thumbnail={campus5}
                />
            </div>

            <Gallery />

            {/* Amenities Grid */}
            <div className="container" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 5%' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>World-Class <span>Amenities</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {[
                        { icon: '📚', title: 'Central Library', desc: '50,000+ books, e-journals, and digital resources.' },
                        { icon: '🏟️', title: 'Sports Complex', desc: 'Cricket ground, basketball court, and indoor games.' },
                        { icon: '🎭', title: 'Auditorium', desc: '750-seater centrally air-conditioned auditorium.' },
                        { icon: '🚌', title: 'Transport', desc: 'Bus facility covering all major routes in Indore.' },
                        { icon: '🥘', title: 'Calculated Canteen', desc: 'Hygienic and nutritious food for students and staff.' },
                        { icon: '🏥', title: 'Medical Facility', desc: '24x7 medical assistance and ambulance service.' }
                    ].map((item, i) => (
                        <div key={i} style={{ background: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>{item.title}</h4>
                            <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CampusLife;
