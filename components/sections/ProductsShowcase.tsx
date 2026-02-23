"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/data/products";
import { ArrowRight } from "lucide-react";

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

export function ProductsShowcase() {
    const featuredProducts = products.slice(0, 3);
    const mainProduct = featuredProducts[0];
    const sideProducts = featuredProducts.slice(1);

    return (
        <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

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
                                Pioneering Products
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We engineer and manufacture high-performance dental implants,
                                biomaterials, and advanced chairside solutions designed to offer
                                superior functionality, reliability, and patient comfort.
                            </p>
                        </div>
                        <Link href="/products" className="shrink-0">
                            <Button variant="secondary" size="lg">
                                View All Products
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Bento Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                    >
                        {/* Main Feature Card — spans 2 cols */}
                        {mainProduct && (
                            <div className="lg:col-span-2 glass-card group cursor-pointer overflow-hidden">
                                <div className="flex flex-col md:flex-row h-full">
                                    <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px] overflow-hidden">
                                        <Image
                                            src={mainProduct.image}
                                            alt={mainProduct.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111827]/80 hidden md:block" />
                                    </div>
                                    <div className="p-8 md:p-10 flex flex-col justify-center md:w-1/2">
                                        <span className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 mb-4 w-fit">
                                            {mainProduct.category.replace("-", " ").toUpperCase()}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                            {mainProduct.name}
                                        </h3>
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            {mainProduct.shortDescription}
                                        </p>
                                        <Link
                                            href={`/products/${mainProduct.slug}`}
                                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
                                        >
                                            View Details
                                            <ArrowRight
                                                size={16}
                                                className="group-hover/link:translate-x-1 transition-transform"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Side Cards — stacked */}
                        <div className="flex flex-col gap-6">
                            {sideProducts.map((product) => (
                                <div
                                    key={product.slug}
                                    className="glass-card group cursor-pointer overflow-hidden flex-1"
                                >
                                    <div className="relative h-40 w-full overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                                        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400 text-xs font-semibold px-2.5 py-0.5">
                                            {product.category.replace("-", " ").toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-white mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {product.shortDescription}
                                        </p>
                                        <Link
                                            href={`/products/${product.slug}`}
                                            className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group/link"
                                        >
                                            View Details
                                            <ArrowRight
                                                size={14}
                                                className="group-hover/link:translate-x-1 transition-transform"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Full Catalogue Link */}
                    <motion.div variants={itemVariants} className="text-center mt-10">
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                            View Full Catalogue
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
