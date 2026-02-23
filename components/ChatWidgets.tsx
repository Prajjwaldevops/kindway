"use client";
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/* ─── Global type augmentation ─── */
declare global {
    interface Window {
        Tawk_API?: Record<string, unknown>;
        Tawk_LoadStart?: Date;
    }
}

/* ─── SVG Icons ─── */
function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.134 6.738 3.06 9.372L1.058 31.14l5.968-1.97A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.534 22.604c-.398 1.12-2.33 2.144-3.252 2.28-.92.136-1.788.39-6.012-1.254-5.09-1.98-8.348-7.168-8.6-7.502-.252-.334-2.054-2.736-2.054-5.22 0-2.482 1.298-3.704 1.762-4.21.462-.506 1.008-.632 1.344-.632.336 0 .672.004 .966.018.31.014.726-.118 1.136.866.41.986 1.394 3.402 1.516 3.654.122.252.204.546.04.88-.164.334-.244.54-.49.832-.244.294-.516.656-.736.88-.246.246-.502.514-.216.97.286.458 1.27 2.094 2.728 3.394 1.874 1.672 3.454 2.19 3.94 2.44.488.252.772.212 1.056-.126.286-.336 1.226-1.428 1.554-1.92.326-.49.654-.408 1.1-.244.448.164 2.84 1.34 3.326 1.584.488.244.812.366.934.57.12.204.12 1.178-.278 2.3Z" />
        </svg>
    );
}

/* ─── Gallabox WhatsApp Widget ─── */
function GallaboxWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const siteName = process.env.NEXT_PUBLIC_GALLABOX_SITE_NAME || "Kindway Biorezens";
    const waId = process.env.NEXT_PUBLIC_GALLABOX_WA_ID;
    const whatsappClean = waId?.replace(/[\s+\-]/g, "") || "919198846529";

    const quickMessages = [
        "I'd like to know about your dental implants",
        "Tell me about upcoming training workshops",
        "I need a product quotation",
        "I want to book a consultation",
    ];

    const openWhatsApp = (message: string) => {
        const url = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="fixed bottom-20 md:bottom-6 right-4 md:right-20 z-50">
            {/* Chat Panel */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[340px] rounded-2xl shadow-2xl border border-card-border overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300 bg-card">
                    {/* Header */}
                    <div className="bg-[#075E54] p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <WhatsAppIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-white font-semibold text-sm truncate">{siteName}</h4>
                            <p className="text-green-200 text-xs">Usually replies within minutes</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="p-4 bg-[#ECE5DD] dark:bg-slate-900/50 min-h-[160px]">
                        {/* Incoming message bubble */}
                        <div className="bg-white dark:bg-slate-800 rounded-lg rounded-tl-none p-3 shadow-sm max-w-[90%] mb-4">
                            <p className="text-sm text-gray-800 dark:text-gray-200">
                                👋 Hi there! Welcome to <strong>{siteName}</strong>. How can we assist you today?
                            </p>
                            <span className="text-[10px] text-gray-400 mt-1 block text-right">now</span>
                        </div>
                    </div>

                    {/* Quick Replies */}
                    <div className="p-3 bg-card border-t border-card-border space-y-2">
                        <p className="text-xs text-muted-foreground font-medium mb-2">Quick replies:</p>
                        {quickMessages.map((msg) => (
                            <button
                                key={msg}
                                onClick={() => openWhatsApp(msg)}
                                className="w-full text-left text-sm px-3 py-2 rounded-lg border border-card-border bg-background hover:bg-muted hover:border-primary/30 text-foreground transition-all duration-200 truncate"
                            >
                                {msg}
                            </button>
                        ))}
                    </div>

                    {/* Footer input bar */}
                    <div className="p-3 bg-card border-t border-card-border">
                        <button
                            onClick={() => openWhatsApp("Hello! I'd like to know more about Kindway Biorezens products and services.")}
                            className="w-full bg-[#25D366] hover:bg-[#20b858] text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <WhatsAppIcon className="w-4 h-4" />
                            Start a conversation
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group"
                aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
            >
                {/* Pulse ring */}
                {!isOpen && (
                    <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
                )}
                <div className={`relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-all duration-300 cursor-pointer ${isOpen
                        ? "bg-gray-600 hover:bg-gray-700 rotate-0"
                        : "bg-[#25D366] hover:bg-[#20b858] hover:scale-110"
                    }`}>
                    {isOpen ? <X size={24} /> : <WhatsAppIcon className="w-7 h-7" />}
                </div>

                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute bottom-full right-0 mb-3 bg-card border border-card-border text-foreground text-sm font-medium px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        Chat on WhatsApp
                    </div>
                )}
            </button>
        </div>
    );
}

/* ─── Tawk.to Live Chat Widget ─── */
function TawkToWidget() {
    const tawkLoaded = useRef(false);

    useEffect(() => {
        if (tawkLoaded.current) return;

        const propertyId = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID;
        const widgetId = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID;

        if (!propertyId || !widgetId) return;

        // Set Tawk.to API object before script loads
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        // Insert into DOM
        document.head.appendChild(script);
        tawkLoaded.current = true;

        return () => {
            // Cleanup on unmount (rare for root layout, but good practice)
            try {
                document.head.removeChild(script);
            } catch {
                // Script may have already been removed
            }
        };
    }, []);

    return null; // Tawk.to renders its own UI
}

/* ─── Combined Export ─── */
export function ChatWidgets() {
    return (
        <>
            <TawkToWidget />
            <GallaboxWidget />
        </>
    );
}
