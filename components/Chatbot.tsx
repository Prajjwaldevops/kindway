"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

/* ─── Knowledge Base ─── */
const knowledgeBase = [
    {
        keywords: ["implant", "dental implant", "implants"],
        answer:
            "We offer a comprehensive range of dental implants including the Quadhelixx Self-Tapping Implant System. Our implants are manufactured in-house with ISO-certified processes for superior reliability and biocompatibility. Visit our products page for full specifications!",
    },
    {
        keywords: ["bone graft", "graft", "biomaterial", "biomaterials"],
        answer:
            "Our bone graft materials include synthetic bone substitutes designed for excellent osteoconductivity. They're ideal for socket preservation, ridge augmentation, and sinus lifts. Contact us for detailed specifications and pricing.",
    },
    {
        keywords: ["workshop", "training", "course", "class", "learn", "teach"],
        answer:
            "We offer hands-on dental implantology workshops led by expert clinicians. Our programs cover surgical planning, implant placement, bone grafting, and prosthetic protocols. Check our Training page or register directly at /register!",
    },
    {
        keywords: ["price", "pricing", "cost", "quote", "rate"],
        answer:
            "For pricing and quotes, please visit our Contact page or click 'Request Quote' on any product page. You can also WhatsApp us at +91 91988 46529 for immediate assistance.",
    },
    {
        keywords: ["contact", "reach", "phone", "email", "call", "whatsapp"],
        answer:
            "📞 Phone: +91 91988 46529\n📧 Email: info@kindwaybio.com\n💬 WhatsApp: wa.me/919198846529\n🏢 Office: Varanasi, Uttar Pradesh, India\n⏰ Mon-Sat: 9:00 AM - 6:00 PM",
    },
    {
        keywords: ["register", "book", "enroll", "seat", "sign up"],
        answer:
            "To register for a workshop, visit our Register page at /register. Select your preferred workshop, fill in your details, and you'll receive a confirmation email. Seats are limited — register early!",
    },
    {
        keywords: ["about", "company", "who", "founded", "team"],
        answer:
            "Kindway BioReZens is a purpose-driven medical manufacturing company founded by Dr. Rajesh Bansal (MDS, PhD). We specialize in developing advanced dental implants, biomaterials, and providing world-class clinical training to dental professionals across India.",
    },
    {
        keywords: ["location", "address", "where", "office", "visit"],
        answer:
            "We're located in Varanasi, Uttar Pradesh, India. Visit us at: Kindway Biorezens Pvt. Ltd., Varanasi, UP, India. Working hours: Mon-Sat, 9:00 AM - 6:00 PM.",
    },
    {
        keywords: ["service", "services", "offer", "what do you do"],
        answer:
            "We offer:\n• Dental Implants (in-house manufactured)\n• Bone Grafts & Biomaterials\n• Clinical Training Workshops\n• Mobile Dental Clinics (outreach)\n• Product Consultations & Custom Solutions",
    },
    {
        keywords: ["camp", "medical camp", "outreach", "social", "community"],
        answer:
            "We actively conduct free medical dental camps in underserved communities. Our mobile dental clinic brings quality dental care directly to remote areas. We've conducted 1,145+ medical camps so far!",
    },
    {
        keywords: ["hello", "hi", "hey", "good morning", "good evening"],
        answer:
            "Hello! 👋 Welcome to Kindway BioReZens. I can help you with information about our dental implants, training workshops, pricing, and more. What would you like to know?",
    },
    {
        keywords: ["thanks", "thank you", "bye", "goodbye"],
        answer:
            "You're welcome! 😊 If you need more help, feel free to ask. You can also reach us on WhatsApp at +91 91988 46529. Have a great day!",
    },
];

const defaultResponse =
    "I'm not sure I understood that. I can help you with:\n\n• 🦷 Dental Implants & Products\n• 📚 Training Workshops\n• 💰 Pricing & Quotes\n• 📞 Contact Information\n• 🏢 Company Details\n\nTry asking about any of these topics, or contact us at info@kindwaybio.com!";

function findAnswer(input: string): string {
    const lower = input.toLowerCase().trim();

    for (const entry of knowledgeBase) {
        for (const keyword of entry.keywords) {
            if (lower.includes(keyword)) {
                return entry.answer;
            }
        }
    }

    return defaultResponse;
}

/* ─── Types ─── */
interface Message {
    id: number;
    text: string;
    isBot: boolean;
    timestamp: Date;
}

/* ─── Component ─── */
export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            text: "Hello! 👋 I'm Kindway's AI assistant. Ask me anything about our dental implants, workshops, or services!",
            isBot: true,
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const userMsg: Message = {
            id: Date.now(),
            text: trimmed,
            isBot: false,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const answer = findAnswer(trimmed);
            const botMsg: Message = {
                id: Date.now() + 1,
                text: answer,
                isBot: true,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 600 + Math.random() * 800);
    };

    const quickQuestions = [
        "Tell me about implants",
        "Workshop details",
        "How to contact you?",
        "What are your prices?",
    ];

    return (
        <div className="fixed bottom-20 md:bottom-6 left-4 md:left-6 z-50">
            {/* Chat Panel */}
            {isOpen && (
                <div className="absolute bottom-16 left-0 w-[360px] max-h-[520px] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col bg-[#0A0F1E]">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <Sparkles size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-white font-semibold text-sm">
                                Kindway AI Assistant
                            </h4>
                            <p className="text-emerald-200 text-xs flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                Online
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[300px] scrollbar-thin">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex gap-2 ${msg.isBot ? "" : "flex-row-reverse"}`}
                            >
                                <div
                                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${msg.isBot
                                        ? "bg-blue-500/20 text-blue-400"
                                        : "bg-amber-500/20 text-amber-400"
                                        }`}
                                >
                                    {msg.isBot ? <Bot size={14} /> : <User size={14} />}
                                </div>
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${msg.isBot
                                        ? "bg-white/5 text-gray-300 rounded-tl-none border border-white/5"
                                        : "bg-blue-600 text-white rounded-tr-none"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex gap-2">
                                <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                    <Bot size={14} />
                                </div>
                                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0ms]" />
                                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:150ms]" />
                                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:300ms]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Questions (show only when few messages) */}
                    {messages.length <= 2 && (
                        <div className="px-4 pb-2 flex flex-wrap gap-2">
                            {quickQuestions.map((q) => (
                                <button
                                    key={q}
                                    onClick={() => {
                                        setInput(q);
                                        setTimeout(() => {
                                            const userMsg: Message = {
                                                id: Date.now(),
                                                text: q,
                                                isBot: false,
                                                timestamp: new Date(),
                                            };
                                            setMessages((prev) => [...prev, userMsg]);
                                            setIsTyping(true);
                                            setTimeout(() => {
                                                const answer = findAnswer(q);
                                                const botMsg: Message = {
                                                    id: Date.now() + 1,
                                                    text: answer,
                                                    isBot: true,
                                                    timestamp: new Date(),
                                                };
                                                setMessages((prev) => [...prev, botMsg]);
                                                setIsTyping(false);
                                                setInput("");
                                            }, 600 + Math.random() * 800);
                                        }, 100);
                                    }}
                                    className="px-3 py-1.5 text-xs rounded-full border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input bar */}
                    <div className="p-3 border-t border-white/10 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Ask me anything..."
                            className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-gray-600"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group"
                aria-label={isOpen ? "Close chat" : "Open AI chat"}
            >
                {!isOpen && (
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                )}
                <div
                    className={`relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-all duration-300 cursor-pointer ${isOpen
                        ? "bg-gray-600 hover:bg-gray-700"
                        : "bg-gradient-to-r from-blue-600 to-emerald-600 hover:scale-110"
                        }`}
                >
                    {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                </div>

                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute bottom-full left-0 mb-3 bg-[#111827] border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        Chat with AI ✨
                    </div>
                )}
            </button>
        </div>
    );
}
