import InteractiveImageBentoGallery, { type ImageItem } from '../components/ui/bento-gallery';
import VideoPlayer from '../components/VideoPlayer';
import campus1 from '../assets/campus1.webp';
import campus2 from '../assets/campus2.webp';
import campus3 from '../assets/campus3.webp';
import campus4 from '../assets/campus4.webp';
import campus5 from '../assets/campus5.webp';
import image3 from '../assets/image_3.jpg';
import image4 from '../assets/image_4.jpg';
import image5 from '../assets/image_5.jpg';
import image6 from '../assets/image_6.jpg';

const imageItems: ImageItem[] = [
    {
        id: 1,
        title: "Main Building",
        desc: "The heart of MIT Indore.",
        url: campus1,
        span: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        title: "Lush Green Campus",
        desc: "A beautiful environment for learning.",
        url: campus2,
        span: "md:row-span-1",
    },
    {
        id: 3,
        title: "Annual Tech Fest",
        desc: "Students showcasing innovation.",
        url: image3,
        span: "md:row-span-1",
    },
    {
        id: 4,
        title: "Advanced Laboratories",
        desc: "State-of-the-art equipment.",
        url: campus4,
        span: "md:row-span-2",
    },
    {
        id: 5,
        title: "Annual Sports Meet",
        desc: "Fostering team spirit and health.",
        url: image4,
        span: "md:row-span-1",
    },
    {
        id: 6,
        title: "Cultural Night",
        desc: "Celebrating diversity and talent.",
        url: campus3,
        span: "md:col-span-2 md:row-span-1",
    },
    {
        id: 7,
        title: "NCC Parade",
        desc: "Discipline and dedication.",
        url: image5,
        span: "md:row-span-2",
    },
    {
        id: 8,
        title: "Hackathon Winners",
        desc: "Coding through the night.",
        url: image6,
        span: "md:row-span-1",
    },
    {
        id: 9,
        title: "Basketball Tournament",
        desc: "Action on the courts.",
        url: campus5,
        span: "md:col-span-2 md:row-span-1",
    }
];

const CampusLife = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px', overflowX: 'hidden' }}>
            <div style={{
                background: `linear-gradient(rgba(5, 10, 20, 0.8), rgba(5, 10, 20, 0.8)), url(${campus5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff', padding: '6rem 5% 4rem', textAlign: 'center'
            }}>
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

            <InteractiveImageBentoGallery
                imageItems={imageItems}
                title="Memories"
                description="Life at MIT Indore. Drag to explore our campus gallery, click to expand."
            />

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
