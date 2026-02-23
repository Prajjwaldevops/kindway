import React from "react";
import Link from "next/link";
import {
    Instagram,
    Linkedin,
    Youtube,
    MapPin,
    Phone,
    Mail,
    MessageCircle,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0A0F1E] border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & About */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Kindway
                            </span>
                            <span className="text-2xl font-light text-amber-500">
                                {" "}
                                BioReZens
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            We are more than a company — we are a purpose-driven force
                            committed to advancing dental care through innovation, quality,
                            and precision. Dedicated to transforming dentistry with
                            cutting-edge solutions.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/quadhelixx?igsh=dHB4bzQ2Y2dycWd4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 border border-white/10 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 border border-white/10 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://wa.me/919198846529"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 border border-white/10 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                            >
                                <MessageCircle size={18} />
                            </a>
                            <a
                                href="https://www.youtube.com/@kindwaydentalimplants"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 border border-white/10 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-2 inline-block">
                            Useful Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Products", href: "/products" },
                                { name: "Services", href: "/services" },
                                { name: "Gallery", href: "/gallery" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-amber-400 transition text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-2 inline-block">
                            More Info
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Events & Webinars", href: "/blog" },
                                { name: "Workshop/Training", href: "/training" },
                                { name: "Investor Relations", href: "#" },
                                { name: "Support", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-amber-400 transition text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-2 inline-block">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin
                                    size={18}
                                    className="text-amber-500 mt-1 flex-shrink-0"
                                />
                                <span className="text-sm text-gray-400 leading-relaxed">
                                    Kindway Biorezens Pvt. Ltd.
                                    <br />
                                    Varanasi, Uttar Pradesh, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-amber-500 flex-shrink-0" />
                                <a
                                    href="tel:+919198846529"
                                    className="text-sm text-gray-400 hover:text-amber-400 transition"
                                >
                                    +91 91988 46529
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-amber-500 flex-shrink-0" />
                                <a
                                    href="mailto:info@kindwaybio.com"
                                    className="text-sm text-gray-400 hover:text-amber-400 transition"
                                >
                                    info@kindwaybio.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Kindway BioReZens. All rights
                        reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-amber-400 transition"
                        >
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-amber-400 transition">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
