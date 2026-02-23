"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#0d1424] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden glass-card"
                    >
                        <Image
                            src="/images/b3.jpg"
                            alt="Why Choose Kindway Biorezens"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 to-transparent" />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        <div>
                            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">
                                Why Choose
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Kindway Biorezens
                            </h2>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-lg">
                            At Kindway Biorezens, we are driven by a mission to reshape the
                            future of dentistry through innovation, accessibility, and
                            compassionate care. As a pioneering startup in dental manufacturing
                            and healthcare services, we design and produce advanced, reliable,
                            and affordable dental implants, biomaterials, and devices that meet
                            global standards of safety and performance.
                        </p>

                        <p className="text-gray-400 leading-relaxed text-lg">
                            Our vision is clear — to elevate dental care, enhance patient
                            quality of life, and support clinicians with technology that
                            simplifies and strengthens clinical practice.
                        </p>

                        <div className="pt-4">
                            <Link href="/about">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="shadow-lg hover:shadow-xl"
                                >
                                    Read More →
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
