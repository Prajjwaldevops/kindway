"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { workshops } from "@/lib/data/workshops";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export function TrainingSection() {
    const upcomingWorkshops = workshops.slice(0, 2);

    return (
        <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Section Header */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                    >
                        <div className="max-w-2xl">
                            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">
                                What Sets Us Apart
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Training and Education
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                At Kindway Biorezens, we believe that excellence in dentistry is
                                built on continuous learning. We invest in the growth of dental
                                professionals by offering advanced, practice-oriented training.
                            </p>
                        </div>
                        <Link href="/training" className="shrink-0">
                            <Button variant="secondary" size="lg">
                                View All Courses
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Workshop Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {upcomingWorkshops.map((workshop) => {
                            const isUrgent = workshop.seatsLeft < 10;
                            return (
                                <motion.div
                                    key={workshop.slug}
                                    variants={itemVariants}
                                    className={`glass-card overflow-hidden group flex flex-col sm:flex-row border-l-4 ${isUrgent
                                        ? "border-l-amber-500"
                                        : "border-l-emerald-500"
                                        }`}
                                >
                                    <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                                        <Image
                                            src={workshop.image}
                                            alt={workshop.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111827]/60 hidden sm:block" />
                                    </div>
                                    <div className="p-8 sm:w-3/5 flex flex-col justify-between space-y-4">
                                        <div>
                                            <Badge className="mb-4 bg-blue-500/10 border-blue-500/20 text-blue-400">
                                                {workshop.category}
                                            </Badge>
                                            <h3 className="text-xl font-bold text-white leading-tight mb-2">
                                                {workshop.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-3 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className="text-blue-400" />
                                                <span>{workshop.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className="text-blue-400" />
                                                <span>{workshop.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users size={16} className="text-blue-400" />
                                                <span>{workshop.instructor}</span>
                                            </div>
                                        </div>

                                        <div className="pt-4 flex items-center justify-between border-t border-white/10">
                                            <span
                                                className={`text-xs font-semibold px-3 py-1 rounded-full ${isUrgent
                                                    ? "bg-amber-500/20 text-amber-400"
                                                    : "bg-emerald-500/20 text-emerald-400"
                                                    }`}
                                            >
                                                {workshop.seatsLeft} seats left
                                            </span>
                                            <Link
                                                href={`/register?workshop=${workshop.slug}`}
                                            >
                                                <Button variant="primary" size="sm">
                                                    Register Now →
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
