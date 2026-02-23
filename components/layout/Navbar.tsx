"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled ? "py-2" : "py-4"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div
                        className={cn(
                            "flex items-center justify-between rounded-full transition-all duration-500 px-6 py-3",
                            isScrolled
                                ? "bg-[#0A0F1E]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
                                : "bg-transparent"
                        )}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 z-50">
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Kindway
                            </span>
                            <span className="text-2xl font-light text-amber-500 hidden sm:block">
                                BioReZens
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-7">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors relative py-1",
                                        pathname === link.href
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                    {pathname === link.href && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop CTAs */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="tel:+919198846529"
                                className="p-2 text-gray-400 hover:text-white transition rounded-full hover:bg-white/10"
                            >
                                <Phone size={18} />
                            </a>
                            <a
                                href="https://wa.me/919198846529"
                                className="p-2 text-gray-400 hover:text-white transition rounded-full hover:bg-white/10"
                            >
                                <MessageCircle size={18} />
                            </a>
                            <Link href="/register">
                                <Button variant="primary" size="sm">
                                    Book Workshop
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="flex items-center gap-3 lg:hidden">
                            <button
                                className="text-white z-50 focus:outline-none"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            <div
                className={cn(
                    "fixed inset-0 bg-[#0A0F1E] z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out lg:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <nav className="flex flex-col gap-6 text-center mt-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-2xl font-medium transition-colors",
                                pathname === link.href ? "text-amber-500" : "text-gray-300"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-8 flex flex-col gap-4">
                        <Link
                            href="/register"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Button variant="primary" size="lg" className="w-full">
                                Book Workshop
                            </Button>
                        </Link>
                        <div className="flex justify-center gap-6 mt-6">
                            <a
                                href="tel:+919198846529"
                                className="text-gray-400 hover:text-white transition"
                            >
                                <Phone size={28} />
                            </a>
                            <a
                                href="https://wa.me/919198846529"
                                className="text-gray-400 hover:text-white transition"
                            >
                                <MessageCircle size={28} />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
