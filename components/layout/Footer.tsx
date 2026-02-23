import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-card-border pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & About */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tight text-primary">
                                Kindway
                            </span>
                            <span className="text-2xl font-light text-accent">
                                BioReZens
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            We are more than a company — we are a purpose-driven force committed to advancing dental care through innovation, quality, and precision. Dedicated to transforming dentistry with cutting-edge solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/share/1GBc9pA6Rg/" target="_blank" rel="noopener noreferrer" className="p-2 border border-card-border rounded-full text-primary hover:bg-primary hover:text-white transition">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/quadhelixx?igsh=dHB4bzQ2Y2dycWd4" target="_blank" rel="noopener noreferrer" className="p-2 border border-card-border rounded-full text-primary hover:bg-primary hover:text-white transition">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.youtube.com/@kindwaydentalimplants" target="_blank" rel="noopener noreferrer" className="p-2 border border-card-border rounded-full text-primary hover:bg-primary hover:text-white transition">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground border-b border-card-border pb-2 inline-block">Useful Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Products", href: "/products" },
                                { name: "Services", href: "/services" },
                                { name: "Gallery", href: "/gallery" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-accent transition text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground border-b border-card-border pb-2 inline-block">More Info</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Events & Webinars", href: "/blog" },
                                { name: "Workshop/Training", href: "/training" },
                                { name: "Investor Relations", href: "#" },
                                { name: "Support", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-accent transition text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground border-b border-card-border pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                    Kindway Biorezens Pvt. Ltd.<br />
                                    Varanasi, Uttar Pradesh, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent flex-shrink-0" />
                                <a href="tel:+919198846529" className="text-sm text-muted-foreground hover:text-accent transition">
                                    +91 91988 46529
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent flex-shrink-0" />
                                <a href="mailto:info@kindwaybio.com" className="text-sm text-muted-foreground hover:text-accent transition">
                                    info@kindwaybio.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Kindway BioReZens. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <Link href="/privacy-policy" className="hover:text-accent transition">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-accent transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
