"use client";
import React from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";

export function ContactBar() {
    return (
        <>
            {/* Desktop Floating Bar */}
            <div className="hidden md:flex flex-col gap-3 fixed right-4 top-1/2 -translate-y-1/2 z-40">
                {/* Call */}
                <div className="relative group">
                    <a
                        href="tel:+919198846529"
                        className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-white/10 hover:border-blue-500/50 hover:shadow-blue-500/20 hover:shadow-xl"
                    >
                        <Phone size={22} />
                    </a>
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-white/10">
                        Call Us
                    </span>
                </div>

                {/* WhatsApp */}
                <div className="relative group">
                    <a
                        href="https://wa.me/919198846529"
                        className="relative w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#20b858] transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20"
                    >
                        {/* Pulse Ring */}
                        <span className="absolute inset-0 rounded-full ring-2 ring-green-500 animate-pulse-ring" />
                        <MessageCircle size={22} />
                    </a>
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-white/10">
                        WhatsApp
                    </span>
                </div>

                {/* Email */}
                <div className="relative group">
                    <a
                        href="mailto:info@kindwaybio.com"
                        className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-white/10 hover:border-blue-500/50 hover:shadow-blue-500/20 hover:shadow-xl"
                    >
                        <Mail size={22} />
                    </a>
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-white/10">
                        Email Us
                    </span>
                </div>
            </div>

            {/* Mobile Bottom Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0A0F1E]/90 backdrop-blur-xl border-t border-white/10 p-3 flex justify-around items-center z-40 pb-safe">
                <a
                    href="tel:+919198846529"
                    className="flex flex-col items-center gap-1 text-blue-400"
                >
                    <Phone size={22} />
                    <span className="text-[10px] font-medium text-gray-400">Call</span>
                </a>
                <a
                    href="https://wa.me/919198846529"
                    className="flex flex-col items-center gap-1 text-[#25D366]"
                >
                    <MessageCircle size={22} />
                    <span className="text-[10px] font-medium text-gray-400">
                        WhatsApp
                    </span>
                </a>
                <a
                    href="mailto:info@kindwaybio.com"
                    className="flex flex-col items-center gap-1 text-blue-400"
                >
                    <Mail size={22} />
                    <span className="text-[10px] font-medium text-gray-400">Email</span>
                </a>
            </div>
        </>
    );
}
