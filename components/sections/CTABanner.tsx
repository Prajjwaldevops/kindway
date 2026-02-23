import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface CTABannerProps {
    title: string;
    subtitle?: string;
    primaryCTA: { text: string; href: string };
    secondaryCTA?: { text: string; href: string };
}

export function CTABanner({ title, subtitle, primaryCTA, secondaryCTA }: CTABannerProps) {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-primary mb-0 mt-auto">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[100px] animate-pulse-glow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-screen filter blur-[80px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 drop-shadow-md">{title}</h2>
                {subtitle && <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">{subtitle}</p>}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href={primaryCTA.href}>
                        <Button variant="primary" size="lg" className="bg-accent text-white hover:bg-accent-hover w-full sm:w-auto shadow-xl">
                            {primaryCTA.text}
                        </Button>
                    </Link>
                    {secondaryCTA && (
                        <Link href={secondaryCTA.href}>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto bg-white/10 backdrop-blur-sm">
                                {secondaryCTA.text}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
