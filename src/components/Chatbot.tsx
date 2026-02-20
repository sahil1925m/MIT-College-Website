import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, GraduationCap, Briefcase, DollarSign, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// ── Bot knowledge base ────────────────────────────────────────────────────────
const BOT_RESPONSES: Record<string, string> = {
    admissions:
        '**Admissions 2026-27 Open!** 🎓\n\nWe are accepting applications for:\n- **B.Tech** (CSE, IT, ECE, ME, CE, AIML)\n- **M.Tech** & **MBA**\n\n**Eligibility:** 10+2 with PCM (min 45%) + JEE/State score.\n\n[Apply Now](/admissions) or ask about a specific course!',
    placements:
        '**Placement Highlights 2025** 🚀\n\n- **Highest Package:** ₹18 LPA\n- **Average Package:** ₹4.5 LPA\n- **Top Recruiters:** TCS, Infosys, Wipro, Capgemini, Hexaware\n\nWe provide 360° placement training from 1st year.',
    'fee structure':
        '**Fee Structure (Per Semester)** 💰\n\n- **B.Tech:** ₹35,000 - ₹40,000\n- **MBA:** ₹30,000\n- **M.Tech:** ₹25,000\n\n*Scholarships available for meritorious students.* Want me to check your scholarship eligibility?',
    contact:
        '**Get in Touch** 📞\n\n- **Campaign:** +91 93297 72477\n- **Email:** admission@mitindore.co.in\n- **Address:** Alwasa, Behind Revti Range, Sanwer Road, Indore\n\nVisit us Mon-Sat, 9:00 AM - 5:00 PM.',
    default:
        'Hi there! 👋 I\'m **MIT Assistant**.\n\nI can help you with **Admissions**, **Placements**, **Fees**, or **Campus Life**. What are you looking for today?',
};

const QUICK_ACTIONS = [
    { label: 'Admissions', icon: GraduationCap, key: 'admissions' },
    { label: 'Placements', icon: Briefcase, key: 'placements' },
    { label: 'Fees', icon: DollarSign, key: 'fee structure' },
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
    for (const key of Object.keys(BOT_RESPONSES)) {
        if (lower.includes(key)) return BOT_RESPONSES[key];
    }
    return BOT_RESPONSES.default;
};

// ── Components ───────────────────────────────────────────────────────────────
const TypingDots = () => (
    <div className="flex items-center gap-1 h-3">
        {[0, 1, 2].map(i => (
            <motion.span
                key={i}
                className="block w-1.5 h-1.5 rounded-full bg-slate-500"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
        ))}
    </div>
);

const mdComponents = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: ({ children }: any) => <p className="mb-2 last:mb-0 leading-relaxed text-[14px]">{children}</p>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strong: ({ children }: any) => <span className="font-semibold text-slate-900">{children}</span>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ul: ({ children }: any) => <ul className="mt-2 mb-2 pl-4 space-y-1 list-disc marker:text-red-500">{children}</ul>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    li: ({ children }: any) => <li className="text-[13.5px] pl-1">{children}</li>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: ({ href, children }: any) => <a href={href} className="text-red-700 hover:underline font-medium">{children}</a>,
};

// ── Main Chatbot ─────────────────────────────────────────────────────────────
const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { id: 0, role: 'bot', text: BOT_RESPONSES.default, time: getTime() },
    ]);
    const [typing, setTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Initial focus & scroll
    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 100);
    }, [open]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, typing]);

    const sendMessage = (text: string) => {
        if (!text.trim() || typing) return;

        const userMsg: Message = { id: Date.now(), role: 'user', text: text.trim(), time: getTime() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setTyping(true);

        // Simulate network delay
        setTimeout(() => {
            const botMsg: Message = { id: Date.now() + 1, role: 'bot', text: getBotReply(text), time: getTime() };
            setTyping(false);
            setMessages(prev => [...prev, botMsg]);
        }, 1200);
    };

    return (
        <div className="font-sans antialiased" style={{ fontFamily: 'var(--font-sans)' }}>

            {/* ── FAB ──────────────────────────────────────────────────── */}
            <div className="fixed bottom-6 right-6 z-[1100] flex flex-col items-end gap-3">
                <AnimatePresence>
                    {!open && (
                        <motion.button
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={() => setOpen(true)}
                            className="bg-white text-slate-700 text-[13.5px] font-medium px-4 py-2.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 hover:translate-y-[-2px] transition-transform"
                        >
                            <span>Chat with us</span>
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        </motion.button>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={() => setOpen(!open)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${open ? 'bg-slate-800 rotate-90' : 'bg-red-600 !bg-red-600 rotate-0 hover:shadow-red-500/30'
                        }`}
                    style={{ backgroundColor: open ? '#1e293b' : '#dc2626' }}
                >
                    {open ? (
                        <X size={24} className="text-white !text-white" color="white" />
                    ) : (
                        <MessageSquare size={24} className="text-white !text-white" color="white" />
                    )}
                </motion.button>
            </div>

            {/* ── Chat Window ──────────────────────────────────────────── */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="fixed bottom-24 right-6 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl shadow-slate-400/20 overflow-hidden flex flex-col border border-slate-100 z-[1100] max-sm:inset-0 max-sm:w-full max-sm:h-full max-sm:rounded-none"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-red-700 to-red-600 p-4 flex items-center gap-3.5 text-white shadow-sm z-10">
                            <div className="relative">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner">
                                    <Bot size={20} />
                                </div>
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-red-700 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-[15px] leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>MIT Assistant</h3>
                                <p className="text-red-50 text-xs opacity-90 mt-0.5">Usually replies instantly</p>
                            </div>
                            <button onClick={() => setOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto bg-white p-5 space-y-6">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-3 items-end ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    {/* Avatar */}
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-50 ${msg.role === 'bot' ? 'bg-slate-50 text-red-600' : 'bg-red-50 text-red-600'
                                        }`}>
                                        {msg.role === 'bot' ? <Bot size={16} /> : <User size={16} />}
                                    </div>

                                    <div className={`max-w-[75%] flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div className={`p-4 rounded-2xl text-[14px] leading-relaxed shadow-sm ${msg.role === 'bot'
                                            ? 'bg-slate-100 text-slate-800 rounded-bl-sm'
                                            : 'bg-red-600 text-white rounded-br-sm'
                                            }`}>
                                            {msg.role === 'bot' ? (
                                                <ReactMarkdown components={mdComponents}>{msg.text}</ReactMarkdown>
                                            ) : (
                                                <p className="leading-relaxed">{msg.text}</p>
                                            )}
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-medium px-1 opacity-70">
                                            {msg.time}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}

                            {typing && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3 items-end">
                                    <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center shadow-sm">
                                        <Bot size={16} className="text-red-600" />
                                    </div>
                                    <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                                        <TypingDots />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-slate-100 pb-5">
                            {/* Quick Actions */}
                            <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar scroll-smooth">
                                {QUICK_ACTIONS.map((action) => (
                                    <button
                                        key={action.key}
                                        onClick={() => sendMessage(action.key)}
                                        className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-full text-[12.5px] font-medium text-slate-600 hover:text-slate-900 transition-all whitespace-nowrap flex-shrink-0 shadow-sm hover:shadow-md"
                                    >
                                        <action.icon size={13} className="text-slate-400 group-hover:text-slate-600" />
                                        {action.label}
                                    </button>
                                ))}
                            </div>

                            <form
                                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                                className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full p-1.5 pl-4 shadow-sm focus-within:ring-2 focus-within:ring-red-500/10 focus-within:border-red-300 focus-within:bg-white transition-all duration-300"
                            >
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 text-[14px] text-slate-800 bg-transparent outline-none placeholder:text-slate-400 h-9"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || typing}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none transition-all transform hover:scale-105 active:scale-95"
                                >
                                    <Send size={15} className="ml-0.5" />
                                </button>
                            </form>

                            <div className="text-center mt-3">
                                <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                                    Powered by <span className="text-slate-600 font-semibold">MIT AI Assistant</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
