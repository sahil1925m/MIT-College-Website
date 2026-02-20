import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, GraduationCap, Briefcase, DollarSign, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// ── Bot knowledge base ────────────────────────────────────────────────────────
const KNOWLEDGE_BASE = [
    {
        keywords: ["fee", "cost", "tuition", "price"],
        response: "**Fee Structure** 💰\n\nThe total tuition fees for **B.Tech** range from **₹1.17 Lakhs to ₹1.24 Lakhs**. \n\n- **MBA:** ₹52,600 to ₹1.05 Lakhs\n- **M.Tech:** ₹62,000\n- **Diploma:** courses are ₹38,250."
    },
    {
        keywords: ["placement", "package", "lpa", "salary", "recruiter", "company"],
        response: "**Placement Records** 🚀\n\n- **Highest Package:** 12 LPA to 22 LPA (Peak: 36 LPA!)\n- **Average Package:** 3-8 LPA\n- **Top Recruiters:** TCS, Infosys, Wipro, Capgemini, and HCL.\n- **Placement Rate:** 80% in CSE and AI/ML!"
    },
    {
        keywords: ["admission", "apply", "eligibility", "process", "btech", "mtech"],
        response: "**Admissions 2026-27** 🎓\n\nAdmissions are now **OPEN**! We accept JEE Main, MP BE, GATE, and CMAT scores.\n\n**Offered Courses:** B.Tech in CSE, IT, AI/ML, ECE, Mechanical, Auto, and Civil."
    },
    {
        keywords: ["contact", "phone", "email", "address", "location", "where"],
        response: "**Contact Information** 📞\n\n- **Location:** Indore-Dewas Bypass Road, Indore (MP) - 452016.\n- **Admission Office:** +91-9522722722\n- **Email:** admission@mitindore.co.in"
    },
    {
        keywords: ["hi", "hello", "hey"],
        response: "Hello! 👋 Welcome to **MIT Indore**.\n\nI can help you with admissions, fee structures, placement records, and contact details. What would you like to know?"
    }
];

const FALLBACK_RESPONSE = "I'm still learning! 🧠 For specific questions, please contact our admission office at **+91-9522722722** or email **admission@mitindore.co.in**.";
const GREETING_RESPONSE = KNOWLEDGE_BASE[4].response;

const QUICK_ACTIONS = [
    { label: 'Admissions', icon: GraduationCap, key: 'admission' },
    { label: 'Placements', icon: Briefcase, key: 'placement' },
    { label: 'Fees', icon: DollarSign, key: 'fee' },
    { label: 'Contact', icon: Phone, key: 'contact' },
];

interface Message {
    id: number;
    role: 'bot' | 'user';
    text: string;
    time: string;
}

const getTime = () =>
    new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

const getBotReply = (input: string): string => {
    const lower = input.toLowerCase();

    // Check for keyword matches
    for (const item of KNOWLEDGE_BASE) {
        if (item.keywords.some(keyword => lower.includes(keyword))) {
            return item.response;
        }
    }

    return FALLBACK_RESPONSE;
};

// ── Components ───────────────────────────────────────────────────────────────
const TypingDots = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '12px' }}>
        {[0, 1, 2].map(i => (
            <motion.span
                key={i}
                style={{ display: 'block', width: 6, height: 6, borderRadius: '50%', background: '#64748b' }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
        ))}
    </div>
);

const mdComponents = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: ({ children }: any) => <p style={{ marginBottom: '0.5rem', lineHeight: 1.6, fontSize: '14px' }}>{children}</p>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strong: ({ children }: any) => <span style={{ fontWeight: 600, color: '#0f172a' }}>{children}</span>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ul: ({ children }: any) => <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem', paddingLeft: '1rem', listStyleType: 'disc' }}>{children}</ul>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    li: ({ children }: any) => <li style={{ fontSize: '13.5px', paddingLeft: '2px', lineHeight: 1.6 }}>{children}</li>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: ({ href, children }: any) => <a href={href} style={{ color: '#b91c1c', textDecoration: 'underline', fontWeight: 500 }}>{children}</a>,
};

// ── Main Chatbot ─────────────────────────────────────────────────────────────
const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { id: 0, role: 'bot', text: GREETING_RESPONSE, time: getTime() },
    ]);
    const [typing, setTyping] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Detect mobile screen size reactively
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 640px)');
        const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
        handler(mq);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 100);
    }, [open]);

    // Auto-scroll to latest message
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, typing]);

    // Lock body scroll when chat is open on mobile
    useEffect(() => {
        if (isMobile && open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobile, open]);

    const sendMessage = (text: string) => {
        if (!text.trim() || typing) return;
        const userMsg: Message = { id: Date.now(), role: 'user', text: text.trim(), time: getTime() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setTyping(true);
        setTimeout(() => {
            const botMsg: Message = { id: Date.now() + 1, role: 'bot', text: getBotReply(text), time: getTime() };
            setTyping(false);
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    // Chat window: full-screen on mobile, popup on desktop
    const chatWindowStyle: React.CSSProperties = isMobile
        ? { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', borderRadius: 0 }
        : { position: 'fixed', bottom: '6rem', right: '1.5rem', width: '380px', height: '600px', borderRadius: '1rem' };

    return (
        <div>
            {/* ── FAB ── */}
            <div style={{
                position: 'fixed',
                bottom: isMobile ? '1rem' : '1.5rem',
                right: isMobile ? '1rem' : '1.5rem',
                zIndex: 1100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '0.75rem',
            }}>
                <AnimatePresence>
                    {!open && (
                        <motion.button
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={() => setOpen(true)}
                            style={{
                                background: '#fff',
                                color: '#475569',
                                fontSize: '13px',
                                fontWeight: 500,
                                padding: '0.55rem 1rem',
                                borderRadius: '9999px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                                border: '1px solid #f1f5f9',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                fontFamily: 'inherit',
                            }}
                        >
                            <span>Chat with us</span>
                            <span style={{
                                width: 8, height: 8,
                                background: '#22c55e',
                                borderRadius: '50%',
                                display: 'inline-block',
                                animation: 'pulse 2s ease infinite',
                            }} />
                        </motion.button>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={() => setOpen(!open)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        width: isMobile ? '52px' : '56px',
                        height: isMobile ? '52px' : '56px',
                        borderRadius: '50%',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: open ? '#1e293b' : '#dc2626',
                        transition: 'background-color 0.3s, transform 0.3s',
                        transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
                    }}
                >
                    {open ? <X size={22} color="white" /> : <MessageSquare size={22} color="white" />}
                </motion.button>
            </div>

            {/* ── Chat Window ── */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        style={{
                            ...chatWindowStyle,
                            background: '#fff',
                            boxShadow: '0 20px 60px rgba(100,116,139,0.2)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #f1f5f9',
                            zIndex: 1099,
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            background: 'linear-gradient(to right, #b91c1c, #dc2626)',
                            padding: '1rem',
                            paddingTop: isMobile ? 'calc(1rem + env(safe-area-inset-top, 0px))' : '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.875rem',
                            color: '#fff',
                            flexShrink: 0,
                        }}>
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    width: 40, height: 40,
                                    background: 'rgba(255,255,255,0.12)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                }}>
                                    <Bot size={20} />
                                </div>
                                <div style={{
                                    position: 'absolute', bottom: 0, right: 0,
                                    width: 10, height: 10,
                                    background: '#4ade80',
                                    border: '2px solid #b91c1c',
                                    borderRadius: '50%',
                                }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontWeight: 700, fontSize: '15px', lineHeight: 1.2, margin: 0 }}>MIT Assistant</h3>
                                <p style={{ fontSize: '12px', opacity: 0.85, margin: '3px 0 0' }}>Usually replies instantly</p>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                style={{
                                    background: 'transparent', border: 'none', cursor: 'pointer',
                                    color: '#fff', padding: '0.5rem', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            background: '#fff',
                            padding: isMobile ? '0.875rem' : '1.25rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.25rem',
                            WebkitOverflowScrolling: 'touch',
                        }}>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        display: 'flex',
                                        gap: '0.625rem',
                                        alignItems: 'flex-end',
                                        flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                                    }}
                                >
                                    <div style={{
                                        width: 30, height: 30,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        background: msg.role === 'bot' ? '#f8fafc' : '#fff1f2',
                                        border: '1px solid #f1f5f9',
                                        color: '#dc2626',
                                    }}>
                                        {msg.role === 'bot' ? <Bot size={15} /> : <User size={15} />}
                                    </div>

                                    <div style={{
                                        maxWidth: isMobile ? '84%' : '75%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '4px',
                                        alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                    }}>
                                        <div style={{
                                            padding: '0.75rem 1rem',
                                            borderRadius: msg.role === 'bot' ? '1rem 1rem 1rem 0.15rem' : '1rem 1rem 0.15rem 1rem',
                                            fontSize: '14px',
                                            lineHeight: 1.6,
                                            background: msg.role === 'bot' ? '#f1f5f9' : '#dc2626',
                                            color: msg.role === 'bot' ? '#1e293b' : '#fff',
                                            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                                        }}>
                                            {msg.role === 'bot'
                                                ? <ReactMarkdown components={mdComponents}>{msg.text}</ReactMarkdown>
                                                : <p style={{ margin: 0 }}>{msg.text}</p>
                                            }
                                        </div>
                                        <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 500, padding: '0 4px', opacity: 0.75 }}>
                                            {msg.time}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}

                            {typing && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-end' }}>
                                    <div style={{
                                        width: 30, height: 30,
                                        background: '#f8fafc',
                                        border: '1px solid #f1f5f9',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#dc2626',
                                    }}>
                                        <Bot size={15} />
                                    </div>
                                    <div style={{
                                        background: '#f1f5f9',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '1rem 1rem 1rem 0.15rem',
                                        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                                    }}>
                                        <TypingDots />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input Area */}
                        <div style={{
                            padding: '0.75rem',
                            paddingBottom: isMobile ? 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' : '0.75rem',
                            background: '#fff',
                            borderTop: '1px solid #f1f5f9',
                            flexShrink: 0,
                        }}>
                            {/* Quick Actions */}
                            <div style={{
                                display: 'flex',
                                gap: '0.4rem',
                                overflowX: 'auto',
                                paddingBottom: '0.625rem',
                                marginBottom: '0.5rem',
                                scrollbarWidth: 'none',
                                WebkitOverflowScrolling: 'touch',
                            }}>
                                {QUICK_ACTIONS.map((action) => (
                                    <button
                                        key={action.key}
                                        onClick={() => sendMessage(action.key)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.3rem',
                                            padding: '0.4rem 0.8rem',
                                            background: '#fff',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '9999px',
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            color: '#475569',
                                            cursor: 'pointer',
                                            whiteSpace: 'nowrap',
                                            flexShrink: 0,
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                                            fontFamily: 'inherit',
                                        }}
                                    >
                                        <action.icon size={12} style={{ color: '#94a3b8' }} />
                                        {action.label}
                                    </button>
                                ))}
                            </div>

                            <form
                                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '9999px',
                                    padding: '0.3rem 0.3rem 0.3rem 1rem',
                                }}
                            >
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    style={{
                                        flex: 1,
                                        fontSize: '15px', // 15px prevents iOS auto-zoom
                                        color: '#1e293b',
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        height: '34px',
                                        fontFamily: 'inherit',
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || typing}
                                    style={{
                                        width: 34, height: 34,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        background: !input.trim() || typing ? '#e2e8f0' : '#dc2626',
                                        color: !input.trim() || typing ? '#94a3b8' : '#fff',
                                        border: 'none',
                                        cursor: !input.trim() || typing ? 'not-allowed' : 'pointer',
                                        flexShrink: 0,
                                        transition: 'background 0.2s',
                                    }}
                                >
                                    <Send size={14} style={{ marginLeft: 1 }} />
                                </button>
                            </form>

                            <p style={{ textAlign: 'center', fontSize: '10px', color: '#94a3b8', fontWeight: 500, letterSpacing: '0.04em', margin: '0.5rem 0 0' }}>
                                Powered by <span style={{ color: '#64748b', fontWeight: 600 }}>MIT AI Assistant</span>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
