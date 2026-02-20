const socials = [
    {
        label: 'Facebook',
        url: 'https://www.facebook.com/malwainstitute/',
        color: '#1877F2',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        label: 'X (Twitter)',
        url: 'https://x.com/MIT_Indore',
        color: '#000000',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        url: 'https://www.instagram.com/malwa_institute_of_technology/',
        color: 'url(#ig-gradient)',
        isGradient: true,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.2" />
            </svg>
        ),
    },
    {
        label: 'YouTube',
        url: 'https://www.youtube.com/@malwainstituteoftechnology6219',
        color: '#FF0000',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
            </svg>
        ),
    },
];

const SocialBar = () => {
    return (
        <>
            {/* SVG gradient defs — rendered once, invisible */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                </defs>
            </svg>

            {/* ── Desktop: fixed right-center vertical bar ── */}
            <div className="social-bar" aria-label="Social Media Links">
                {socials.map((s) => (
                    <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-bar-item"
                        aria-label={`Follow on ${s.label}`}
                        style={{ '--brand-color': s.isGradient ? undefined : s.color } as React.CSSProperties}
                        data-gradient={s.isGradient ? 'true' : undefined}
                    >
                        <span className="social-bar-icon">{s.icon}</span>
                        <span className="social-bar-tooltip">Follow on {s.label}</span>
                    </a>
                ))}
            </div>

            {/* ── Mobile: sticky bottom horizontal bar ── */}
            <div className="social-bar-mobile" aria-label="Social Media Links">
                {socials.map((s) => (
                    <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-bar-mobile-item"
                        aria-label={`Follow on ${s.label}`}
                        style={{ '--brand-color': s.isGradient ? undefined : s.color } as React.CSSProperties}
                        data-gradient={s.isGradient ? 'true' : undefined}
                    >
                        {s.icon}
                    </a>
                ))}
            </div>
        </>
    );
};

export default SocialBar;
