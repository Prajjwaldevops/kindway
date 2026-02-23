"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export function MissionVision() {
    return (
        <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    <motion.div variants={itemVariants} className="space-y-12">
                        <div>
                            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">
                                Kindway BioReZens
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
                                Our Mission
                                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-amber-500 rounded-full" />
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                At Kindway Biorezenes Medical Manufacturing, we envision a
                                future where healthcare products and technologies are not only
                                cutting-edge but also inherently sustainable. Our commitment is
                                to lead the medical manufacturing industry in developing and
                                producing innovative, biorenewable solutions that contribute to
                                a healthier planet.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
                                Our Vision
                                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full" />
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                At Kindway Biorezens, our vision is to be at the forefront of
                                transformative biorenewable technologies that not only redefine
                                industries but also contribute to a kinder and more sustainable
                                world. We aspire to lead in creating innovative solutions that
                                seamlessly integrate with nature, fostering a harmonious balance
                                between human progress and environmental well-being.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="relative h-[600px] w-full rounded-3xl overflow-hidden glass-card p-2"
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                                src="/images/sirji.jpg"
                                alt="Kindway BioReZens Founder"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/90 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                                <h3 className="text-2xl font-bold">Dr. Rajesh Bansal</h3>
                                <p className="text-blue-300 font-medium">
                                    Founder Director (MDS, PhD)
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
