import React, { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
    thumbnail?: string;
    title: string;
    className?: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    title,
    className = '',
    thumbnail,
    autoplay = false,
    loop = false,
    muted = false
}) => {
    const [isPlaying, setIsPlaying] = useState(autoplay);
    const [isMuted, setIsMuted] = useState(muted);
    const containerRef = useRef<HTMLDivElement>(null);

    // Extract video ID if it's a YouTube URL
    const getVideoId = (url: string) => {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const videoId = getVideoId(src) || src.split('/').pop();
    // Use provided thumbnail or fallback to YouTube maxres
    const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const embedUrl = src.includes('embed') ? src : `https://www.youtube.com/embed/${videoId}`;

    // Intersection Observer for Autoplay
    useEffect(() => {
        if (!autoplay) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsPlaying(true);
                } else {
                    setIsPlaying(false);
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [autoplay]);

    return (
        <div
            ref={containerRef}
            className={`video-player-container ${className}`}
            style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%', // 16:9 Aspect Ratio
                backgroundColor: '#000',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                cursor: isPlaying ? 'default' : 'pointer'
            }}
            onClick={() => !isPlaying && setIsPlaying(true)}
        >
            {!isPlaying ? (
                <>
                    {/* Thumbnail */}
                    <img
                        src={thumbnailUrl}
                        alt={title}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            opacity: 0.9
                        }}
                        className="video-thumb"
                    />

                    {/* Overlay Gradient */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        pointerEvents: 'none'
                    }} />

                    {/* Play Button */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2
                    }} className="play-btn-wrapper">
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '50%',
                            display: 'grid',
                            placeItems: 'center',
                            border: '1px solid rgba(255,255,255,0.4)',
                            transition: 'all 0.3s ease',
                        }} className="play-btn-overlay">
                            <div style={{
                                width: 0,
                                height: 0,
                                borderTop: '12px solid transparent',
                                borderBottom: '12px solid transparent',
                                borderLeft: '20px solid #fff',
                                marginLeft: '4px'
                            }} />
                        </div>
                    </div>

                    {/* Title Overlay */}
                    <div style={{
                        position: 'absolute',
                        bottom: '2rem',
                        left: '2rem',
                        color: '#fff',
                        zIndex: 2,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}>
                        <h3 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 600 }}>{title}</h3>
                        <p style={{ margin: '0.4rem 0 0', opacity: 0.9, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#e53935', borderRadius: '50%' }}></span>
                            Click to Play
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`${embedUrl}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=${loop ? 1 : 0}&playlist=${videoId}&controls=${autoplay ? 0 : 1}&modestbranding=1&rel=0`}
                        title={title}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            border: 0,
                            pointerEvents: autoplay ? 'none' : 'auto' // Disable interaction if autoplaying background
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />

                    {/* Custom Mute/Unmute Button for Autoplay Videos */}
                    {autoplay && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMuted(!isMuted);
                            }}
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                background: 'rgba(0,0,0,0.6)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#fff',
                                padding: '8px 16px',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                pointerEvents: 'auto',
                                backdropFilter: 'blur(4px)'
                            }}
                        >
                            {isMuted ? '🔇 Unmute' : '🔊 Mute'}
                        </button>
                    )}
                </>
            )}

            <style>{`
                .video-player-container:hover .video-thumb {
                    transform: scale(1.05);
                }
                .video-player-container:hover .play-btn-overlay {
                    background: var(--crimson);
                    border-color: var(--crimson);
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default VideoPlayer;
