"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/lib/data/blogPosts";
import { Calendar, ArrowRight } from "lucide-react";

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

export function BlogPreview() {
    const recentBlogs = blogPosts.slice(0, 3);

    return (
        <section className="py-24 bg-[#0A0F1E] relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

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
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">
                            Kindway
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Recent Activities
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Stay updated with our latest insights, case studies, and upcoming
                            events in the world of advanced dentistry.
                        </p>
                    </motion.div>

                    {/* Blog Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {recentBlogs.map((post) => (
                            <motion.div
                                key={post.slug}
                                variants={itemVariants}
                                className="glass-card group overflow-hidden"
                            >
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-blue-400 border border-white/10">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                        <span className="font-medium text-blue-400">
                                            {post.author}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 line-clamp-3 text-sm">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center gap-2 text-sm group/link">
                                            Read More
                                            <ArrowRight
                                                size={14}
                                                className="group-hover/link:translate-x-1 transition-transform"
                                            />
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All */}
                    <motion.div variants={itemVariants} className="text-center">
                        <Link href="/blog">
                            <Button variant="secondary" size="lg">
                                View All Activities
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
