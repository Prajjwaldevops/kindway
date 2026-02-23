"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface CTABannerProps {
    title: string;
    subtitle?: string;
    primaryCTA: { text: string; href: string };
    secondaryCTA?: { text: string; href: string };
}

export function CTABanner({
    title,
    subtitle,
    primaryCTA,
    secondaryCTA,
}: CTABannerProps) {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600">
            {/* Grid overlay pattern */}
            <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

            {/* Glow orbs */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    )}

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={primaryCTA.href}>
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full sm:w-auto shadow-xl"
                            >
                                {primaryCTA.text}
                            </Button>
                        </Link>
                        {secondaryCTA && (
                            <Link href={secondaryCTA.href}>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full sm:w-auto border-white/30 hover:bg-white/20"
                                >
                                    {secondaryCTA.text}
                                </Button>
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
