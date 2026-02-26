import { useRef, useEffect, useState } from 'react';

const alumniVideos = [
    { id: "kmmok-ut0SY", title: "Alumni Success Story" },
    { id: "WSwwz830ezQ", title: "Alumni Success Story" },
    { id: "bDyWLaoC5pQ", title: "Alumni Success Story" },
    { id: "F0y--1Kusi4", title: "Alumni Success Story" },
    { id: "EQohnozcaRA", title: "Alumni Success Story" }
];

const Testimonials = () => {
    const ref = useRef<HTMLElement>(null);
    const [vis, setVis] = useState(false);
    const [featuredIdx, setFeaturedIdx] = useState(0);
    const [swapping, setSwapping] = useState(false);
    const [pendingIdx, setPendingIdx] = useState<number | null>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.02, rootMargin: '200px' });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const handleSwap = (clickedIdx: number) => {
        if (clickedIdx === featuredIdx || swapping) return;
        setSwapping(true);
        setPendingIdx(clickedIdx);

        // Wait for exit animation, then swap
        setTimeout(() => {
            setFeaturedIdx(clickedIdx);
            setPendingIdx(null);
            // Wait for enter animation to settle
            setTimeout(() => setSwapping(false), 500);
        }, 400);
    };

    const secondaryVideos = alumniVideos.filter((_, i) => i !== featuredIdx);

    return (
        <section className="tv-section" id="testimonials" ref={ref}>
            {/* Decorative elements */}
            <div className="tv-deco-1" />
            <div className="tv-deco-2" />

            <div className="tv-wrap">
                {/* Header */}
                <div className={`tv-head ${vis ? 'tv-in' : ''}`}>
                    <div className="section-chip">
                        <span className="chip-dot" />Student Voices
                    </div>
                    <h2 className="section-title">What Our <span>Alumni</span> Say</h2>
                    <p className="section-sub" style={{ margin: '0.7rem auto 0', textAlign: 'center', maxWidth: '560px' }}>
                        Listen to real stories from our graduates — discovering how the MIT Indore experience shaped their careers.
                    </p>
                </div>

                {/* Featured video */}
                <div className={`tv-featured ${vis ? 'tv-in' : ''} ${swapping ? 'tv-swap-out' : 'tv-swap-in'}`}
                    style={{ transitionDelay: vis && !swapping ? '120ms' : '0ms' }}>
                    <div className="tv-featured-inner">
                        <div className="tv-live-badge">
                            <span className="tv-live-dot" />Now Playing
                        </div>
                        <div className="tv-frame tv-frame-lg">
                            <iframe
                                key={alumniVideos[featuredIdx].id}
                                src={`https://www.youtube.com/embed/${alumniVideos[featuredIdx].id}?rel=0`}
                                title={alumniVideos[featuredIdx].title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>

                {/* Thumbnail strip */}
                <div className={`tv-strip ${vis ? 'tv-in' : ''}`} style={{ transitionDelay: '250ms' }}>
                    {secondaryVideos.map((video, i) => {
                        const realIdx = alumniVideos.findIndex(v => v.id === video.id);
                        const isBeingSwapped = pendingIdx === realIdx;
                        return (
                            <button
                                key={video.id}
                                className={`tv-thumb ${isBeingSwapped ? 'tv-thumb-active' : ''}`}
                                onClick={() => handleSwap(realIdx)}
                                style={{ transitionDelay: `${300 + i * 60}ms` }}
                                title="Click to feature this video"
                            >
                                <div className="tv-frame tv-frame-sm">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                        alt={video.title}
                                        draggable={false}
                                    />
                                </div>
                                <div className="tv-thumb-overlay">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                </div>
                                <div className="tv-thumb-label">Click to Watch</div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <style>{`
                /* ── Section ── */
                .tv-section {
                    position: relative;
                    padding: 6rem 0;
                    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                    overflow: hidden;
                }
                .tv-deco-1 {
                    position: absolute;
                    top: -80px; right: -150px;
                    width: 450px; height: 450px;
                    background: radial-gradient(circle, rgba(198,40,40,0.05) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }
                .tv-deco-2 {
                    position: absolute;
                    bottom: -60px; left: -120px;
                    width: 350px; height: 350px;
                    background: radial-gradient(circle, rgba(15,23,42,0.04) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                }
                .tv-wrap {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 5%;
                    position: relative;
                    z-index: 1;
                }

                /* ── Header ── */
                .tv-head {
                    text-align: center;
                    margin-bottom: 2.5rem;
                    opacity: 0; transform: translateY(24px);
                    transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
                }
                .tv-head.tv-in { opacity: 1; transform: none; }

                /* ── Featured ── */
                .tv-featured {
                    margin-bottom: 1.5rem;
                    opacity: 0; transform: translateY(24px);
                    transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
                }
                .tv-featured.tv-in { opacity: 1; transform: none; }

                /* Swap animations */
                .tv-featured.tv-swap-out {
                    animation: tvFeaturedOut 0.4s cubic-bezier(.4,0,.6,1) forwards;
                }
                .tv-featured.tv-swap-in {
                    animation: tvFeaturedIn 0.5s cubic-bezier(.2,0,.2,1) forwards;
                }

                @keyframes tvFeaturedOut {
                    0%   { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0.96) translateY(-10px); }
                }
                @keyframes tvFeaturedIn {
                    0%   { opacity: 0; transform: scale(0.96) translateY(10px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                }

                .tv-featured-inner {
                    position: relative;
                }

                /* "Now Playing" badge */
                .tv-live-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(10,15,30,0.85);
                    backdrop-filter: blur(8px);
                    color: #fff;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 0.35rem 1rem;
                    border-radius: 0 0 12px 12px;
                    margin-left: 24px;
                    margin-bottom: -1px;
                    position: relative;
                    z-index: 2;
                }
                .tv-live-dot {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: #ef4444;
                    animation: tvPulse 2s ease infinite;
                }
                @keyframes tvPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.6); }
                }

                /* ── Frames ── */
                .tv-frame {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    background: #0a0f1e;
                }
                .tv-frame-lg {
                    padding-bottom: 56.25%; /* 16:9 */
                    border-radius: 18px;
                    box-shadow:
                        0 20px 60px rgba(0,0,0,0.12),
                        0 4px 16px rgba(0,0,0,0.06),
                        inset 0 0 0 1px rgba(255,255,255,0.05);
                }
                .tv-frame-lg iframe {
                    position: absolute;
                    inset: 0;
                    width: 100%; height: 100%;
                    border: none;
                }

                .tv-frame-sm {
                    padding-bottom: 56.25%;
                    border-radius: 12px;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
                }
                .tv-frame-sm img {
                    position: absolute;
                    inset: 0;
                    width: 100%; height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(.2,0,.2,1), filter 0.4s ease;
                    filter: brightness(0.85);
                }

                /* ── Thumbnail strip ── */
                .tv-strip {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                    opacity: 0; transform: translateY(20px);
                    transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
                }
                .tv-strip.tv-in { opacity: 1; transform: none; }

                .tv-thumb {
                    position: relative;
                    cursor: pointer;
                    border: none;
                    background: none;
                    padding: 0;
                    border-radius: 14px;
                    overflow: hidden;
                    outline: 3px solid transparent;
                    outline-offset: 2px;
                    transition: outline-color 0.3s ease, transform 0.35s cubic-bezier(.2,0,.2,1);
                }
                .tv-thumb:hover {
                    transform: translateY(-6px) scale(1.02);
                    outline-color: rgba(198,40,40,0.5);
                }
                .tv-thumb:hover .tv-frame-sm img {
                    transform: scale(1.08);
                    filter: brightness(1);
                }
                .tv-thumb:hover .tv-thumb-overlay {
                    opacity: 1;
                    backdrop-filter: blur(2px);
                }
                .tv-thumb:hover .tv-thumb-label {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Active swap pulse */
                .tv-thumb-active {
                    animation: tvThumbPulse 0.4s ease;
                }
                @keyframes tvThumbPulse {
                    0%   { transform: scale(1); }
                    30%  { transform: scale(0.92); }
                    100% { transform: scale(1); }
                }

                /* Play overlay */
                .tv-thumb-overlay {
                    position: absolute;
                    inset: 0;
                    display: grid;
                    place-items: center;
                    background: rgba(0,0,0,0.3);
                    opacity: 0;
                    transition: opacity 0.3s ease, backdrop-filter 0.3s ease;
                    border-radius: 12px;
                    z-index: 2;
                }
                .tv-thumb-overlay svg {
                    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
                    transition: transform 0.3s ease;
                }
                .tv-thumb:hover .tv-thumb-overlay svg {
                    transform: scale(1.15);
                }

                /* "Click to Watch" label */
                .tv-thumb-label {
                    position: absolute;
                    bottom: 8px;
                    left: 50%;
                    transform: translateX(-50%) translateY(6px);
                    background: rgba(0,0,0,0.75);
                    backdrop-filter: blur(6px);
                    color: #fff;
                    font-size: 0.62rem;
                    font-weight: 700;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    padding: 3px 10px;
                    border-radius: 20px;
                    white-space: nowrap;
                    opacity: 0;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    z-index: 3;
                    pointer-events: none;
                }

                /* ── Responsive ── */
                @media (max-width: 768px) {
                    .tv-section { padding: 4rem 0; }
                    .tv-strip { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
                    .tv-frame-lg { border-radius: 14px; }
                    .tv-live-badge { margin-left: 16px; font-size: 0.62rem; }
                }
                @media (max-width: 480px) {
                    .tv-strip { grid-template-columns: repeat(2, 1fr); gap: 0.6rem; }
                    .tv-frame-lg { border-radius: 10px; }
                    .tv-frame-sm { border-radius: 8px; }
                    .tv-thumb { border-radius: 10px; }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
