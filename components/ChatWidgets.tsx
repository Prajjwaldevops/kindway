"use client";
import React, { useEffect } from "react";
import { MessageCircle } from "lucide-react";

declare global {
    interface Window {
        Tawk_API?: Record<string, unknown>;
    }
}

export function ChatWidgets() {
    const gallaboxWaId = process.env.NEXT_PUBLIC_GALLABOX_WA_ID;
    const whatsappClean = gallaboxWaId?.replace(/[\s+]/g, "") || "919198846529";

    useEffect(() => {
        // Tawk.to Initialization
        const tawkPropertyId = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID;
        const tawkWidgetId = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID;

        if (tawkPropertyId && tawkWidgetId && !window.Tawk_API) {
            const s1 = document.createElement("script");
            const s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            if (s0 && s0.parentNode) {
                s0.parentNode.insertBefore(s1, s0);
            } else {
                document.head.appendChild(s1);
            }
        }
    }, []);

    return (
        <>
            {/* Floating WhatsApp Button (Gallabox) */}
            <a
                href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent("Hello! I'd like to know more about Kindway Biorezens products and services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-20 md:bottom-6 right-4 md:right-20 z-50 group"
            >
                <div className="relative">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
                    <div className="relative w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center text-white hover:bg-[#20b858] hover:scale-110 transition-all duration-300 cursor-pointer">
                        <MessageCircle size={26} />
                    </div>
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-3 bg-card border border-card-border text-foreground text-sm font-medium px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Chat on WhatsApp
                </div>
            </a>
        </>
    );
}
