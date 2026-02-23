"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
    },
} as const;

const trustItems = [
    { label: "1500+ Workshops" },
    { label: "1160+ Dentists Trained" },
    { label: "1145+ Medical Camps" },
];

export function HeroSlider() {
    return (
        <section className="relative min-h-screen bg-[#0A0F1E] flex items-center justify-center overflow-hidden">
            {/* Animated Gradient Mesh - Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Blue Orb */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-blue-600/20 rounded-full filter blur-[120px] animate-orb-1" />
                {/* Emerald Orb */}
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-emerald-500/15 rounded-full filter blur-[120px] animate-orb-2" />
                {/* Subtle ambient */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full filter blur-[150px]" />
            </div>

            {/* Grid overlay for texture */}
            <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Pill Badge */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Advancing Dental Healthcare Since 2015
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8"
                    >
                        <span className="text-white block">Elevating Dental</span>
                        <span className="text-gradient block mt-2">Excellence</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
                    >
                        Advanced dental implants, biomaterials, and expert training
                        workshops — empowering dental professionals across India.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <Link href="/register">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                Book a Workshop →
                            </Button>
                        </Link>
                        <Link href="/products">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full sm:w-auto"
                            >
                                View Products
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Trust Bar */}
                    <motion.div
                        variants={itemVariants}
                        className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0"
                    >
                        {trustItems.map((item, i) => (
                            <React.Fragment key={item.label}>
                                {i > 0 && (
                                    <div className="hidden sm:block w-px h-4 bg-white/10 mx-8" />
                                )}
                                <span className="text-sm text-gray-400 flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4 text-emerald-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {item.label}
                                </span>
                            </React.Fragment>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1E] to-transparent pointer-events-none" />
        </section>
    );
}
