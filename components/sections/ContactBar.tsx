"use client";
import React from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";

export function ContactBar() {
    return (
        <>
            {/* Desktop Floating Bar */}
            <div className="hidden md:flex flex-col gap-3 fixed right-4 top-1/2 -translate-y-1/2 z-40">
                <a href="tel:+919198846529" className="w-12 h-12 bg-card dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110 border border-card-border" title="Call Us">
                    <Phone size={20} />
                </a>
                <a href="https://wa.me/919198846529" className="w-12 h-12 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#20b858] transition-all hover:scale-110" title="WhatsApp">
                    <MessageCircle size={20} />
                </a>
                <a href="mailto:info@kindwaybio.com" className="w-12 h-12 bg-card dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110 border border-card-border" title="Email Us">
                    <Mail size={20} />
                </a>
            </div>

            {/* Mobile Bottom Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-card-border p-3 flex justify-around items-center z-40 pb-safe">
                <a href="tel:+919198846529" className="flex flex-col items-center gap-1 text-primary">
                    <Phone size={24} />
                    <span className="text-[10px] font-medium">Call</span>
                </a>
                <a href="https://wa.me/919198846529" className="flex flex-col items-center gap-1 text-[#25D366]">
                    <MessageCircle size={24} />
                    <span className="text-[10px] font-medium">WhatsApp</span>
                </a>
                <a href="mailto:info@kindwaybio.com" className="flex flex-col items-center gap-1 text-primary">
                    <Mail size={24} />
                    <span className="text-[10px] font-medium">Email</span>
                </a>
            </div>
        </>
    );
}
