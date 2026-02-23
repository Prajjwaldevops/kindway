"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
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
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "py-3" : "py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div
                        className={cn(
                            "flex items-center justify-between rounded-full transition-all duration-300 px-6 py-3",
                            isScrolled
                                ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/40 dark:border-white/10"
                                : "bg-transparent"
                        )}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 z-50">
                            <span className="text-2xl font-bold tracking-tight text-primary">
                                Kindway
                            </span>
                            <span className="text-2xl font-light text-accent hidden sm:block">
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
                                        "text-sm font-medium transition-colors hover:text-accent relative py-1",
                                        pathname === link.href
                                            ? "text-accent"
                                            : "text-foreground"
                                    )}
                                >
                                    {link.name}
                                    {pathname === link.href && (
                                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop CTAs */}
                        <div className="hidden lg:flex items-center gap-3">
                            {mounted && (
                                <button
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className="p-2.5 text-foreground hover:text-accent transition rounded-full hover:bg-muted border border-transparent hover:border-card-border"
                                    aria-label="Toggle Dark Mode"
                                >
                                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                                </button>
                            )}
                            <a href="tel:+919198846529" className="p-2 text-foreground hover:text-accent transition rounded-full hover:bg-muted">
                                <Phone size={18} />
                            </a>
                            <a href="https://wa.me/919198846529" className="p-2 text-foreground hover:text-accent transition rounded-full hover:bg-muted">
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
                            {mounted && (
                                <button
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className="p-2 text-foreground hover:text-accent transition rounded-full"
                                    aria-label="Toggle Dark Mode"
                                >
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                            )}
                            <button
                                className="text-foreground z-50 focus:outline-none"
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
                    "fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out lg:hidden",
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
                                pathname === link.href ? "text-accent" : "text-foreground"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-8 flex flex-col gap-4">
                        <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="primary" size="lg" className="w-full">
                                Book Workshop
                            </Button>
                        </Link>
                        <div className="flex justify-center gap-6 mt-6">
                            <a href="tel:+919198846529" className="text-foreground hover:text-accent transition">
                                <Phone size={28} />
                            </a>
                            <a href="https://wa.me/919198846529" className="text-foreground hover:text-accent transition">
                                <MessageCircle size={28} />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
